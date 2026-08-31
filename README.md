# Suvakta Project

Welcome to the Suvakta project repository! This full-stack application is composed of a modern frontend built with React and Vite, and a robust backend powered by Node.js, Prisma, and TypeScript.

## 📁 Project Structure

The project is organized into two main directories:

```
DU/
├── backend/            # Backend server code
│   ├── prisma/         # Database schema and migrations
│   ├── src/            # Backend source code (e.g., db.ts)
│   ├── package.json    # Backend dependencies
│   └── tsconfig.json   # TypeScript configuration
└── frontend/           # Frontend client code
    ├── src/
    │   ├── components/ # Reusable UI components (e.g., ErrorBoundary, SmoothScroll, etc.)
    │   ├── context/    # React context providers (AuthContext, TransitionContext)
    │   ├── hooks/      # Custom React hooks
    │   ├── lib/        # Utility functions and library wrappers
    │   ├── pages/      # Main application pages
    │   └── sections/   # Page sections (e.g., Hero, Navbar, Footer)
    ├── package.json    # Frontend dependencies
    ├── tailwind.css    # Tailwind CSS configuration and styles
    └── vite.config.ts  # Vite build configuration
```

## 📄 Pages

The frontend application consists of the following key pages:

### 1. Home Page (`/`)
The landing page of the application, designed with smooth scrolling and engaging sections.
- **Path:** `/`
- **Sections:** Navbar, Hero, Sponsors Marquee, About, Speakers, Expectations, Community, Love, FAQ, Call to Action, and Footer.

### 2. Login Page (`/login`)
A dedicated authentication page for users to sign in.
- **Path:** `/login`
- **Features:** Modern, stunning sign-in UI. Users must authenticate before accessing protected routes like the leaderboard.

### 3. Leaderboard Page (`/leaderboard`)
A protected page that displays the weekly rankings and top users.
- **Path:** `/leaderboard`
- **Features:** 
  - Requires user authentication (Protected Route).
  - Displays a podium with the top 3 users.
  - Shows the full weekly leaderboard rankings with user levels and scores.
  - Allows filtering by different weeks.

## ✨ Features

- **Modern & Responsive UI:** Built with Tailwind CSS and custom UI components to ensure an immersive aesthetic experience.
- **Smooth Scrolling & Animations:** Integrates Lenis for smooth scrolling, along with floating badges and scroll line animations to engage users.
- **Authentication:** Protected routing built in to secure sensitive pages (like the Leaderboard) using React Context.
- **Robust Backend:** A TypeScript-based backend featuring Prisma for a strictly typed ORM and robust database interactions.
- **Scalable Architecture:** Clean separation of concerns with a dedicated frontend and backend, structured with reusable components and organized contexts.

---

*This README was automatically generated to help you quickly understand the layout and features of the Suvakta project.*
