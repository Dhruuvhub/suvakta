# Suvakta — MUN Club Platform: Backend Documentation

## What This Is

Suvakta is the platform for the Model United Nations society at Miranda House. One person built the frontend (React, deployed on Vercel); this backend exists to solve one specific problem the club had — members represent Suvakta at MUNs hosted by other colleges all year round, and there was no reliable way to track who participated, what they won, and how that stacks up against everyone else. The backend turns that informal record-keeping into a verified, auditable system: a digital ledger of every external delegation, gated behind an admin approval step, feeding a leaderboard that keeps the club's competitive spirit alive.

Three things it's responsible for, and nothing else:
1. Knowing who's allowed in, and what they're allowed to do (member vs. admin)
2. Recording, verifying, and scoring every MUN a member attends
3. Serving the parts of the site anyone can see without logging in (team page, public resources)

## Why This Architecture

Two layers, each doing one job.

**Supabase is the data layer.** Accounts, passwords, delegation records, and files all live in a managed Postgres database plus S3-compatible storage buckets, under one dashboard. This was a deliberate trade against hand-rolling it on MongoDB — writing and maintaining our own password hashing, JWT issuance, and a separate file host (Cloudinary/S3) would have meant infrastructure work with no payoff for a club website. Supabase gives verified auth, relational storage that matches the club's actual data shape (`profiles` → `delegations`), and file storage in the same place, out of the box.

**Express is the gateway in front of it.** The frontend never talks to Supabase directly. Every request goes through a small Node/Express server that decides what a given user is allowed to do *before* any query runs, and is the only thing that ever holds Supabase's `service_role` key — the credential that bypasses every permission check in the database. If that key ended up in frontend code, anyone could read or rewrite any table. Keeping it server-side, with every privileged action (creating a member, approving a delegation) behind Express middleware, means the permission logic lives in one auditable place instead of being scattered across the client.

The result is a standard **BaaS + API gateway** pattern: Supabase handles storage and identity, Express enforces who gets to touch what.

## The Club Logic This Encodes

A few decisions about how Suvakta actually runs shaped the schema more than any technical preference did:

- **No public sign-up.** Only an admin can create an account. The leaderboard only means something if every account belongs to a real, vetted club member, so there's no self-serve registration to abuse.
- **Every delegation starts unverified.** When a member logs a MUN they attended, it's inserted with `status: 'pending'` and `points: 0`. It counts toward nothing until an admin reviews it.
- **Points are assigned by a human, not a formula.** An admin sets the `points` value at the same moment they approve or reject an entry. That keeps judgment calls — what a "Best Delegate" award is worth versus a "Special Mention" — with the people running the club, not baked into code.
- **The leaderboard is never stored — it's computed.** There's no `score` column sitting on a profile that could drift out of sync with reality. The leaderboard endpoint pulls every member, pulls every `approved` delegation, sums points per member on the fly, and ranks them. It can never show a number the underlying delegation records don't add up to.

## Directory Structure & What Each Piece Is For

```
backend/
├── index.js
├── config/
│   └── supabase.js
├── middlewares/
│   ├── authMiddleware.js
│   └── adminMiddleware.js
├── controllers/
│   ├── authController.js
│   ├── delegationController.js
│   ├── leaderboardController.js
│   └── publicController.js
└── routes/
    ├── authRoutes.js
    ├── delegationRoutes.js
    ├── leaderboardRoutes.js
    └── publicRoutes.js
```

### `index.js` — the entry point
Boots the Express app, applies the global middleware every request passes through (JSON body parsing, CORS restricted to the Suvakta frontend's origin), and mounts each route group onto its base path (`/api/auth`, `/api/delegations`, `/api/leaderboard`, `/api/public`). It's wiring, not logic.

### `config/supabase.js` — the one connection to the database
Creates a single Supabase client using the project URL and the `service_role` key, with session persistence turned off — the server doesn't need to remember who it's talking to between requests, since every request re-proves identity via its own JWT. This is the only file that touches raw Supabase credentials; everything else imports the already-initialized client from here.

### `middlewares/` — the two gates every protected request passes through
- **`authMiddleware.js` (`requireAuth`)** — Pulls the `Bearer` token from the request's `Authorization` header, asks Supabase to cryptographically verify it, then looks up the matching row in `profiles` and attaches it to `req.user`. If the token is missing, expired, or doesn't resolve to a profile, the request is rejected before it reaches any controller. Every controller downstream can trust that `req.user` is a real, logged-in person.
- **`adminMiddleware.js` (`requireAdmin`)** — Runs after `requireAuth` and checks one thing: is `req.user.role === 'admin'`? This is what separates "any logged-in member" routes from "Secretariat only" routes like creating accounts or verifying delegations.

### `controllers/` — the actual business logic
- **`authController.js`** — `createMember` (admin-only: creates the Supabase Auth user, then inserts their row into `profiles`, rolling back the auth user if the profile insert fails), `loginUser` (verifies email/password against Supabase Auth, returns a JWT plus the caller's profile), `getMyProfile` (returns whatever `requireAuth` already attached to the request).
- **`delegationController.js`** — `submitDelegation` (member logs a new MUN they attended, always inserted as `pending`), `getMyDelegations` (a member's own submission history), `getPendingDelegations` (the admin review queue, joined against `profiles` so they can see who submitted each entry), `verifyDelegation` (admin sets `status` and `points` on a specific entry).
- **`leaderboardController.js`** — `getLeaderboard`: fetches every member, fetches every approved delegation, sums points per member, returns the list sorted highest-first.
- **`publicController.js`** — `getTeam` (returns `team_members`, ordered for display), `getPublicResources` (returns rows from `resources` where `is_public = true`). No auth check on either — these back the parts of the site any visitor sees.

### `routes/` — where each URL is defined and each gate is applied

| Method & Path | Access | What it does |
|---|---|---|
| `POST /api/auth/login` | Public | Authenticates, returns JWT + profile |
| `GET /api/auth/me` | Logged in | Returns the caller's own profile |
| `POST /api/auth/create-member` | Admin | Creates a new member/admin account |
| `POST /api/delegations/submit` | Logged in | Logs a new MUN participation, defaults to pending |
| `GET /api/delegations/my-submissions` | Logged in | Caller's own delegation history |
| `GET /api/delegations/pending` | Admin | All delegations awaiting review |
| `PUT /api/delegations/verify/:id` | Admin | Approves or rejects an entry, sets points |
| `GET /api/leaderboard` | Logged in | Ranked list of members by approved points |
| `GET /api/public/team` | Public | Core & Secretariat team listing |
| `GET /api/public/resources` | Public | Public study materials/guides |

## Data Model (Supabase / Postgres)

**`profiles`** — one row per person, linked 1:1 to Supabase's own `auth.users` (deleted automatically if the auth user is deleted). Holds club-specific identity: full name, email, `role` (`member` or `admin`), college, department, year. Every other table's `user_id` foreign key ultimately points back here.

**`delegations`** — the audit trail this whole system exists for. One row per MUN a member attended: which MUN, which college hosted it, what kind of delegate they were, what they won, a link to their certificate, an admin-assigned `points` value, and a `status` that starts at `pending` and moves to `approved` or `rejected`. This table is both the leaderboard's raw material and the historical record of who did what.

**`resources`** — study materials and reference guides (rules of procedure, binders). Each row has an `is_public` flag; public ones are visible to any site visitor via `/api/public/resources`, the rest are members-only.

**`team_members`** — drives the public Team page. Name, tier (`core` or `secretariat`), role title, a short message, contact email, photo, and a `display_order` so leadership can control who appears where without touching code.

## File Storage (Supabase Storage Buckets)

Three buckets, each with access rules matching what kind of file lives there:

- **`certificates`** (private) — proof of participation/awards members upload when logging a delegation. Never public; only reachable through the backend, which enforces who's allowed to see whose certificates.
- **`resources`** (public) — the PDF/document files backing the `resources` table, served directly to the frontend.
- **`team-and-gallery`** (public) — headshots for the Team page and event photography, served directly.

## Authentication & Authorization, End to End

1. An admin creates an account for a new member — there's no self-registration.
2. The member logs in with the credentials they were given; Supabase issues a session and a JWT access token.
3. The frontend attaches that token as `Authorization: Bearer <token>` on every request that needs to know who's asking.
4. `requireAuth` verifies the token against Supabase on every protected request and resolves it to a `profiles` row — this is what lets a controller trust `req.user`.
5. `requireAdmin` gates the handful of actions (creating accounts, approving delegations) reserved for the Secretariat.

Nothing about "who can do what" is decided on the frontend — it's enforced at the gateway, on every request, independent of what the UI does or doesn't show.