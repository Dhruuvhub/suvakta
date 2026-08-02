# 🎪 FlowFest Website — Animation & Interaction Analysis

> **Website:** [https://www.flowfest.co.uk/](https://www.flowfest.co.uk/)  
> **Platform:** Webflow  
> **Event:** FlowFest '25 — Friday 8th August, Manchester, UK  
> **Analysis Date:** July 2025

---

## 📋 Table of Contents

1. [Technology Stack](#technology-stack)
2. [Loading & Page Entry Animation](#1-loading--page-entry-animation)
3. [Navigation Bar](#2-navigation-bar)
4. [Hero Section](#3-hero-section)
5. [Sponsor Marquee](#4-sponsor-marquee)
6. [Image Grid & Shuffle Button](#5-image-grid--shuffle-button)
7. [Recap Video Lightbox](#6-recap-video-lightbox)
8. [Speaker Lineup Section](#7-speaker-lineup-section)
9. ["What to Expect" Section](#8-what-to-expect-section)
10. [Community Section](#9-community-section)
11. [FlowFest Love (Stacked Testimonials)](#10-flowfest-love-stacked-testimonials)
12. [FAQ Accordion](#11-faq-accordion)
13. [Newsletter & Footer](#12-newsletter--footer)
14. [Sun Mascot (Persistent Element)](#13-sun-mascot-persistent-element)
15. [Custom Cursor System](#14-custom-cursor-system)
16. [Smooth Scroll (Lenis)](#15-smooth-scroll-lenis)
17. [Page Transitions (Barba.js)](#16-page-transitions-barbajs)
18. [Scaling & Responsive System](#17-scaling--responsive-system)
19. [Technical Approach Summary](#technical-approach-summary)

---

## Technology Stack

| Technology | Version | Purpose |
|---|---|---|
| **Webflow** | — | Site builder, CMS, hosting, and native interaction engine |
| **Barba.js** | v2.10.3 | SPA-like page transitions without full reloads |
| **Lenis** | — | Smooth scroll library (replaces native scroll) |
| **Slater** | — | Custom CSS/JS injection layer for Webflow |
| **GSAP** | (inferred) | Advanced scroll-triggered animations & tweens |
| **CSS Keyframes** | — | Marquee, sun rotation, and other looping animations |
| **Custom SVG Cursors** | — | Branded cursor for default, text, pointer, drag, and grab states |

---

## 1. Loading & Page Entry Animation

### Frame-by-Frame Breakdown

| Frame | Time | Description |
|---|---|---|
| **F0** | 0ms | Blank/off-white page. The `loading-container` element is visible. Browser begins fetching assets. |
| **F1** | ~200ms | Background color `#F3ECD2` (warm cream) paints. Fonts begin loading. |
| **F2** | ~500ms | Loading container transitions out (opacity 0 → hidden). Barba.js fires its `[once]` transition hook — the initial page-load transition. |
| **F3** | ~700ms | Hero heading words begin animating in. Each word slides up with a staggered delay (word-by-word reveal). Webflow IX2 (Interaction 2.0) triggers "Page Load" animations. |
| **F4** | ~1000ms | Navigation bar fades in at the top. "Buy Tickets" button in the nav appears. Sun mascot fades in at the bottom-left corner. |
| **F5** | ~1200ms | All hero text is fully visible. The Lenis smooth scroll is initialized. Custom cursor replaces the default system cursor. |

### Technical Approach
- **Barba.js `once` hook** handles the initial page load transition (equivalent to a page "enter" animation).
- The `loading-container` element is hidden via CSS in the Webflow designer (`:is(.wf-design-mode, .w-editor) .loading-container { display: none; }`), but visible to end users during asset loading.
- Font smoothing is applied globally: `-webkit-font-smoothing: antialiased`.

---

## 2. Navigation Bar

### Layout
- **Left:** Text links — `About`, `Speakers`, `Activities`
- **Center:** `FLOWFEST` logo in a custom retro/bubble font
- **Right:** `Buy Tickets` button (pink/salmon pill-shaped button)

### Interactions & Animations

| Element | Trigger | Animation |
|---|---|---|
| **Nav Links** | Hover | Underline draws in from right-to-left using `transform: scaleX(0)` → `scaleX(1)` with `transform-origin` swap (right → left). Uses `--animation-default: 0.5s cubic-bezier(0.625, 0.05, 0, 1)`. |
| **Buy Tickets Button** | Hover | Translates down by `0.25em` and box-shadow drops to `0em` (simulates a "pressed" effect). Duration: `0.25s` fast ease. |
| **Nav Bar** | Scroll start | A subtle horizontal rule/separator line appears below the nav to distinguish it from the page body. |

### CSS Implementation
```css
/* Underline Link Animation */
.underline-link::before {
  content: "";
  position: absolute;
  bottom: 0em;
  width: 100%;
  height: 0.125em;
  background-color: var(--color-dark);
  transition: transform 0.5s cubic-bezier(0.625, 0.05, 0, 1);
  transform-origin: right;
  transform: scaleX(0) rotate(0.001deg);
}

.underline-link:hover::before {
  transform-origin: left;
  transform: scaleX(1) rotate(0.001deg);
}

/* Button Press Effect */
.btn:hover {
  transform: translateY(0.25em) rotate(0.001deg);
  box-shadow: 0em 0em 0em 0em rgba(0, 0, 0, 0.5);
}
```

> **Note:** The `rotate(0.001deg)` trick is used throughout the site to force GPU-accelerated rendering (sub-pixel anti-aliasing) on transform animations.

---

## 3. Hero Section

### Content
- **Date & Location:** "Friday 8th August, Manchester, UK"
- **Heading:** "Webflow chat, festival vibes, good times. FlowFest is back."
- **CTA Button:** "Buy Tickets" (pink pill)

### Frame-by-Frame Entry Animation

| Frame | Delay | Element | Animation |
|---|---|---|---|
| **F1** | 0ms | Background | Warm cream `#F3ECD2` fills the viewport |
| **F2** | 100ms | "Friday 8th August..." | Fades in + slides up from below |
| **F3** | 200ms | "Webflow" | Word slides up into view |
| **F4** | 300ms | "chat," | Word slides up (staggered) |
| **F5** | 400ms | "festival" | Word slides up (staggered) |
| **F6** | 500ms | "vibes," | Word slides up (staggered) |
| **F7** | 600ms | "good times." | Words slide up (staggered) |
| **F8** | 700ms | "FlowFest is back." | Final words appear |
| **F9** | 900ms | "Buy Tickets" button | Scales up or fades in |

### Word-Level Hover Effects

Each word in the hero heading (`welcome__h1 span`) has an SVG "blob" behind it. On hover:

| State | SVG Shadow (nth-child 1) | SVG Fill (nth-child 2) |
|---|---|---|
| **Default** | `opacity: 0.15`, positioned at `top: calc(50% + 0.1em)` | Positioned at `top: calc(50% + 0em)` |
| **Hovered** | `opacity: 0.3` (shadow becomes more visible) | Moves down to `top: calc(50% + 0.05em)` (subtle "press" feel) |

Each word has a unique color blob (orange, yellow, pink, mango) — creating a playful, colorful effect as users mouse over the heading.

### Technical Approach
- Words are wrapped in individual `<span>` elements by the Webflow interaction engine.
- Each `<span>` contains two SVG children: a shadow layer and a colored fill layer.
- The `transition: opacity var(--animation-default-fast)` and `transition: top var(--animation-default-fast)` handle the smooth 0.25s hover transitions.

---

## 4. Sponsor Marquee

### Layout
- Continuous horizontal ticker showing sponsor logos (Osmo Supply, Webflow, etc.)
- Sits between the hero and the image grid sections

### Animation Breakdown

| Property | Value |
|---|---|
| **Type** | CSS `@keyframes` infinite loop |
| **Direction** | Right-to-left horizontal scroll |
| **Duration** | `30s` per full cycle |
| **Timing** | `linear` (constant speed, no easing) |
| **State** | `animation-play-state: paused` by default; JavaScript starts the animation when the element is in the viewport |

### CSS Implementation
```css
@keyframes translateX { 
  to {
    transform: translateX(-100%);
  }
}

[data-css-marquee-list] {
  animation: translateX 30s linear;
  animation-iteration-count: infinite;
  animation-play-state: paused;
}
```

### Approach
- The marquee list is duplicated in the DOM (two identical lists sit side-by-side).
- As the first list translates left by 100%, the second list seamlessly fills the gap — creating an infinite loop.
- The `paused` initial state means JavaScript (likely the Slater script or Webflow IX2) toggles it to `running` when the section scrolls into view. This is a performance optimization — off-screen animations don't consume CPU/GPU.

---

## 5. Image Grid & Shuffle Button

### Layout
- A grid of colorful image cards below the hero section
- Contains a prominent **"Shuffle"** button

### Shuffle Interaction (Frame-by-Frame)

| Frame | Time | Description |
|---|---|---|
| **F0** | 0ms (click) | User clicks the "Shuffle" button. JavaScript reads the current card positions. |
| **F1** | ~50ms | A new random arrangement is calculated (Fisher-Yates or similar shuffle algorithm). |
| **F2** | 100–400ms | Cards animate to their new positions using CSS transitions or GSAP tweens. Each card slides/moves to its newly assigned grid position. The movement uses a smooth easing curve. |
| **F3** | ~500ms | All cards settle into their final shuffled positions. The grid layout is complete. |

### Hover Effect
- On hover over the Shuffle button, the cursor changes and the button likely has a scale or color shift effect consistent with the `.btn:hover` transform.

### Technical Approach
- Custom JavaScript (injected via Slater or inline Webflow custom code) handles the shuffle logic.
- Cards are absolutely or grid-positioned. The JS calculates new `transform: translate(x, y)` values for each card.
- CSS `transition` on the card elements provides the smooth movement animation.

---

## 6. Recap Video Lightbox

### Trigger
- **"Watch the 2024 Recap"** button in the "No.1 Fest for: Web Designers & Devs" section

### Lightbox Animation (Frame-by-Frame)

| Frame | Time | Description |
|---|---|---|
| **F0** | 0ms (click) | User clicks the recap button. `data-yt-modal-status` is set to `"active"`. |
| **F1** | 0–100ms | Background overlay fades in (`opacity: 0 → 1`, `visibility: hidden → visible`). Uses `--animation-default: 0.5s` easing. |
| **F2** | 100–300ms | Modal card scales up from `scale(0.5) rotate(-5deg)` to `scale(1) rotate(0.001deg)` — a dramatic "pop + unwind" entrance. |
| **F3** | 200–400ms | Close button (`.btn.is--close`) scales from `scale(0) rotate(-5deg)` to `scale(1) rotate(-5deg)` — it "pops" into existence with a slight tilt. |
| **F4** | ~500ms | YouTube embed is fully visible. Video title: "FlowFest 2024 | Manchester Webflow Festival by FlowMCR". |

### Close Animation (Reverse)
| Frame | Time | Description |
|---|---|---|
| **F0** | 0ms (click X) | User clicks close button. `data-yt-modal-status` is removed/deactivated. |
| **F1** | 0–250ms | Modal card scales down from `scale(1)` to `scale(0.5)` with `-5deg` rotation. Close button shrinks to `scale(0)`. |
| **F2** | 250–500ms | Background overlay fades out. `visibility` set to `hidden`. |

### CSS Implementation
```css
/* Modal Card — Closed State */
.modal-yt__card {
  transition: var(--animation-default); /* 0.5s cubic-bezier */
  opacity: 0;
  visibility: hidden;
  transform: scale(0.5) rotate(-5deg);
}

/* Modal Card — Open State */
[data-yt-modal-status="active"] .modal-yt__card {
  opacity: 1;
  visibility: visible;
  transform: scale(1) rotate(0.001deg);
}

/* Close Button — Closed State */
.modal-yt .btn {
  transform: scale(0) rotate(-5deg);
}

/* Close Button — Open State */
[data-yt-modal-status="active"] .modal-yt .btn {
  transform: scale(1) rotate(-5deg);
}
```

### Approach
- The modal is always in the DOM (not dynamically injected).
- State is managed via a `data-yt-modal-status` attribute, toggled by JS.
- CSS transitions handle all animation — no JavaScript animation library needed for the modal itself.
- The `rotate(-5deg)` on the close button creates a playful, "stuck-on" look, consistent with the site's handmade aesthetic.

---

## 7. Speaker Lineup Section

### Layout
- A masonry-like grid of speaker cards
- Each card has: **colored background** (yellow, orange, pink), **speaker photo**, **name badge** (orange pill), and a **text description box** with a "speech bubble" feel (bordered with corner resize handles).

### Speakers Featured
1. **Vlad Magdalin** — Webflow co-founder, keynote speaker
2. **Ilja van Eck** — Co-founder of Osmo & Webflow superstar
3. **Cassie Evans** — GSAP fairy codemother, animation expert
4. **Stephanie Bruce** — Freelancer growth, stunning web work
5. **Ross Plaskow** — Rive animator, fun & slick style

### Scroll-Triggered Animations (Frame-by-Frame)

| Frame | Scroll Position | Description |
|---|---|---|
| **F0** | Section enters viewport bottom | Cards are off-screen or at `opacity: 0` with `translateY(50px)`. |
| **F1** | 25% in viewport | First row of speaker cards begins to fade in + slide up. |
| **F2** | 50% in viewport | Second row begins appearing. Name badges pop in with a slight delay. |
| **F3** | 75% in viewport | Description "speech bubble" boxes fade in, sliding from a lower position. |
| **F4** | Fully visible | All cards settled. Each category label (e.g., "Design", "Animation") is visible on cards. |

### Hover Effects
- **Speaker cards** have a `.speaker-card[data-sticky-cursor]` custom cursor that replaces the pointer with a transparent cursor SVG — suggesting there's a custom follow-cursor effect.
- The **"Buy Tickets"** button within the speaker section follows the same hover pattern as the global `.btn:hover` (press-down effect).

---

## 8. "What to Expect" Section

### Layout
- Stacked colored bars, each representing an activity category:
  - **Expert Talks** (orange bar)
  - **Fun + Games** (pink bar)
  - **Food + Drinks** (yellow/mango bar)

### Hover Animation (Frame-by-Frame)

| Frame | Time | Description |
|---|---|---|
| **F0** | Default | Only the bar label text is visible. The `.expect-card` is hidden: `opacity: 0; visibility: hidden; transform: rotate(0.001deg) scale(0.75)`. |
| **F1** | Hover start | Card begins scaling up and rotating: `transform: rotate(-5deg) scale(1)`. Opacity fades to 1. |
| **F2** | ~250ms | Card is fully visible at a `-5deg` tilt (or `+5deg` for even-indexed cards, creating a staggered tilted look). |
| **F3** | Hover end | Card scales back down to `0.75` and fades out. |

### CSS Implementation
```css
/* Default — Hidden */
.expect-item .expect-card {
  transition: var(--animation-default-fast) 0.05s; /* 0.25s + 50ms delay */
  opacity: 0;
  visibility: hidden;
  transform: rotate(0.001deg) scale(0.75);
}

/* Hovered — Visible, tilted left */
.expect-item:hover .expect-card {
  opacity: 1;
  visibility: visible;
  transform: rotate(-5deg) scale(1);
}

/* Even items tilt the other way */
.expect-item:hover .expect-card.is--even {
  transform: rotate(5deg) scale(1);
}
```

---

## 9. Community Section

### Layout
- "An Event Ran by The Community, **For The Community**" heading
- Grid of community organizer photos with names (Isabel Edwards, Josh Fry, Benn Raistrick, Scott Humphrey, Rachael Ward, John Ostler)
- "For The Community" text has a yellow/orange highlight background

### Hover Effect on Community Cards

| State | Transform |
|---|---|
| **Default** | `rotate(0.001deg)` (no visible rotation) |
| **Hovered (odd column)** | `rotate(-3deg)` |
| **Hovered (even column)** | `rotate(3deg)` |

### CSS Implementation
```css
.community-card {
  transition: transform 0.5s cubic-bezier(0.625, 0.05, 0, 1);
  transform: rotate(0.001deg);
}

.community-card:hover {
  transform: rotate(3deg);
}

.community__grid-col:nth-child(odd) .community-card:hover {
  transform: rotate(-3deg);
}
```

This alternating rotation direction creates a playful, organic "wobble" effect when users browse the team grid.

---

## 10. FlowFest Love (Stacked Testimonials)

### Layout
- Large background text: **"FlowFest Love"** in bold black + an orange banner
- Stacked tweet/testimonial cards (styled as Twitter/X post cards)
- Cards are pre-rotated at different angles to create a "scattered pile" effect

### Card Stacking & Rotation

| Card Position | Rotation |
|---|---|
| 1st (top) | `rotate(4deg)` |
| 2nd | `rotate(2deg)` |
| 3rd (center) | `rotate(0deg)` |
| 4th | `rotate(-2deg)` |
| 5th (bottom) | `rotate(-4deg)` |

### Drag Interaction

| State | Cursor | Description |
|---|---|---|
| **Hover** | `cursor-drag.svg` | Custom "drag" cursor appears (grab hand icon) |
| **Dragging** | `cursor-grabbing.svg` | Changes to "grabbing" cursor while card is being dragged |
| **Active card** | — | `.is--active` card gets `box-shadow: 0em 0.5em 0em 0em rgba(0, 0, 0, 0.15)` |
| **Second card** | — | `.is--second` card also gets the shadow (peek effect) |

### Technical Approach
- Uses a `[data-stacked-cards-card]` attribute system.
- Cards can be dragged/swiped to reveal the next testimonial underneath.
- CSS handles the visual states (shadow, rotation); JavaScript handles the drag detection and card reordering.
- The `box-shadow` transition uses `--animation-default-fast` (0.25s) for snappy feedback.

---

## 11. FAQ Accordion

### Layout
- Left side: Large crowd photo from FlowFest 2024
- Right side: Accordion list of questions in orange/mango colored cards

### Questions
1. Can I have a discount?
2. How do I get there?
3. Is there food included?
4. What should I bring?
5. Will there be an afterparty?

### Accordion Animation (Frame-by-Frame)

| Frame | Time | Description |
|---|---|---|
| **F0** | Click | `data-accordion-status` is set to `"active"` on the clicked item. |
| **F1** | 0–250ms | `grid-template-rows` transitions from `0fr` to `1fr`. The content area smoothly expands. |
| **F2** | 0–250ms | The `+` icon rotates to `rotate(-135deg)` (becomes an `×`). |
| **F3** | ~500ms | Answer text is fully visible. Content settled. |

### Hover Micro-Animations (Desktop Only)
On devices with hover capability (`@media (hover: hover) and (pointer: fine)`):

| Element | Hover Effect |
|---|---|
| **Icon SVG** | Rotates `90deg` on hover (a "spin" preview before clicking) |
| **Content preview** | Translates up by `-0.875em` with `rotate(1deg)` (playful "peek" at the answer) |
| **Active + hovering** | Content shifts down `0.5em` (subtle "press" feedback) |

### CSS Implementation
```css
/* Expand/Collapse */
.accordion-css__item-bottom {
  transition: grid-template-rows 0.5s cubic-bezier(0.625, 0.05, 0, 1);
}

[data-accordion-status="active"] .accordion-css__item-bottom {
  grid-template-rows: 1fr;
}

/* Icon rotation */
.accordion-css__item-icon {
  transition: transform 0.5s cubic-bezier(0.625, 0.05, 0, 1);
}

[data-accordion-status="active"] .accordion-css__item-icon {
  transform: rotate(-135deg);
}
```

### Approach
- Uses the modern CSS `grid-template-rows: 0fr → 1fr` technique for smooth height animation (avoids `max-height` hacks).
- State is managed via `data-accordion-status` attributes, toggled by JavaScript.
- The hover micro-animations are desktop-only, wrapped in `@media (hover: hover)` to prevent mobile touch glitches.

---

## 12. Newsletter & Footer

### Layout
- **Pre-footer wave:** An SVG wave separator with `vector-effect: non-scaling-stroke` for consistent line width at any scale
- **"See you there!"** heading with contact info (`isabel@designsie.co.uk`)
- **Newsletter form:** First Name + Email inputs with an orange "Get updates" submit button
- **Community photo strip:** Cut-out photos of attendees arranged around a large sun mascot illustration

### Newsletter Button Hover
- Follows the same `.newsletter__submit:hover` pattern as `.btn:hover`: `translateY(0.25em)` press-down with shadow removal.

### Pre-Footer Wave CSS
```css
.prefooter__wave path {
  vector-effect: non-scaling-stroke;
  stroke: var(--color-dark);
  stroke-width: 0.125em;
}
```
This ensures the decorative wave border maintains consistent visual thickness regardless of viewport width.

---

## 13. Sun Mascot (Persistent Element)

### Position
- Fixed to the **bottom-left corner** of the viewport
- Always visible during scrolling (`.sunny-fixed`)

### Animations

| Animation | Type | Details |
|---|---|---|
| **Continuous rotation** | CSS `@keyframes` | Sun rays rotate at `9deg` per `0.5s` on an infinite linear loop — creating a subtle "spinning" shimmer effect. |
| **Face swap on hover** | CSS `opacity` toggle | The default face (`:nth-child(1)`) is hidden on hover, and a different expression (`:nth-child(4)`) is shown. |
| **Happy face trigger** | CSS `:has()` selector | When any `[data-hover-sun-happy]` element on the page is hovered, the sun's mouth changes to a bigger smile (`:nth-child(5)` and `:nth-child(6)` become visible). |

### CSS Implementation
```css
@keyframes rotateSun { 
  to { transform: rotate(9deg); }
}

.sun__sun-svg {
  animation: rotateSun 0.5s linear infinite;
}

/* Face swap on hover */
.sun__face-svg > *:nth-child(4),
.sun:hover .sun__face-svg > *:nth-child(1) {
  opacity: 0;
}

.sun:hover .sun__face-svg > *:nth-child(4) {
  opacity: 1;
}

/* Happy face when hovering certain elements */
body:has([data-hover-sun-happy]:hover) .sun__face-svg > *:nth-child(5),
body:has([data-hover-sun-happy]:hover) .sun__face-svg > *:nth-child(6) {
  opacity: 1;
}
```

### Approach
- The sun uses the **CSS `:has()` relational pseudo-class** — a cutting-edge CSS feature that lets a parent/ancestor react to a descendant's state.
- The `pointer-events: none` on `.sun-chat-combo` with `pointer-events: all` on individual children ensures only the sun itself (not its transparent bounding box) is interactive.

---

## 14. Custom Cursor System

The entire site uses custom SVG cursors, applied via the `body.is--cursor` class.

### Cursor States

| Context | Cursor SVG | CSS `cursor` fallback |
|---|---|---|
| **Default** (body, general elements) | `cursor-default@2x.svg` | `auto` |
| **Text** (headings, paragraphs, inputs) | `cursor-text@2x.svg` | `text` |
| **Pointer** (links, buttons, clickables) | `cursor-pointer@2x.svg` | `pointer` |
| **Drag** (stacked cards hover) | `cursor-drag@2x.svg` | `grab` |
| **Grabbing** (stacked cards active drag) | `cursor-grabbing@2x.svg` | `grabbing` |
| **Transparent** (speaker card sticky cursor) | `cursor-pointer-transparent.svg` | `auto` |

### Approach
- Cursors are implemented purely via CSS `cursor: url(...)` declarations — no JavaScript cursor-follow animation.
- The `@2x` suffix indicates Retina/HiDPI optimized SVGs.
- The transparent cursor for speaker cards suggests there may be a separate JavaScript-driven cursor follow element that appears over those cards.

---

## 15. Smooth Scroll (Lenis)

### Implementation
Lenis replaces native browser scrolling with a JavaScript-controlled smooth scroll.

```css
html.lenis { height: auto; }
.lenis.lenis-smooth { scroll-behavior: auto; height: 100vh; }
.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
.lenis.lenis-stopped { overflow: hidden; }
.lenis.lenis-scrolling iframe { pointer-events: none; }
```

### Key Behaviors
| Class | Effect |
|---|---|
| `.lenis-smooth` | Overrides `scroll-behavior` to `auto` (Lenis handles smoothing via JS) |
| `.lenis-stopped` | Disables scroll entirely (`overflow: hidden`) — used when modals are open |
| `.lenis-scrolling` | Disables pointer events on `<iframe>` elements during scroll to prevent accidental interactions |
| `[data-lenis-prevent]` | Opt-out mechanism for specific containers that need native scroll |

### Scrollbar Hiding
All scrollbars are hidden across all browsers:
```css
body ::-webkit-scrollbar, body::-webkit-scrollbar { display: none; }  /* Chrome, Safari */
body { -ms-overflow-style: none; }  /* IE & Edge */
html { scrollbar-width: none; }  /* Firefox */
```

---

## 16. Page Transitions (Barba.js)

### Overview
Barba.js v2.10.3 provides SPA-like transitions between pages. The site's console logs show `Transition found [once]` on initial load.

### Transition Flow

| Phase | Description |
|---|---|
| **`beforeLeave`** | Current page begins its exit animation (e.g., fade out, slide up). Lenis scroll is stopped. |
| **`leave`** | Page content is fully hidden. DOM container is swapped. |
| **`enter`** | New page content is injected. Entry animations begin (fade in, slide up). |
| **`afterEnter`** | Lenis is re-initialized. Webflow interactions are re-bound. Scroll position resets to top. |
| **`once`** | Special hook for the very first page load (no "leave" phase, only "enter"). |

### Approach
- Barba.js wraps all page content in a `[data-barba="container"]` element.
- On navigation, only the container content is swapped — the nav, sun mascot, and other persistent elements remain untouched.
- This avoids full page reloads, preserving smooth scroll state and animation continuity.

---

## 17. Scaling & Responsive System

### Dennis Snellenberg Scaling System
The site uses a fluid typography/sizing system attributed to Dennis Snellenberg:

```css
:root {
  --size-unit: 16;              /* Base font-size (design) */
  --size-container-ideal: 1440; /* Design viewport width */
  --size-container-min: 992px;
  --size-container-max: 1920px;
  --size-container: clamp(var(--size-container-min), 100vw, var(--size-container-max));
  --size-font: calc(var(--size-container) / (var(--size-container-ideal) / var(--size-unit)));
}
```

### Breakpoints

| Breakpoint | Viewport | Design Width | Min | Max |
|---|---|---|---|---|
| **Desktop** | > 991px | 1440px | 992px | 1920px |
| **Tablet** | ≤ 991px | 834px | 768px | 991px |
| **Mobile Landscape** | ≤ 767px | 390px | 480px | 767px |
| **Mobile Portrait** | ≤ 479px | 390px | 320px | 479px |

### Viewport Height Handling
Custom viewport height variables handle mobile browser chrome (URL bar) differences:
```css
:root {
  --vh: var(--vh-in-px);  /* Fallback */
  --dvh: 1dvh;            /* Dynamic viewport height */
  --svh: 1svh;            /* Small viewport height */
  --lvh: 1lvh;            /* Large viewport height */
}
```
- **Touch devices** use `--vh-in-px` (JavaScript-calculated) as fallback, with `dvh`/`svh`/`lvh` when supported.
- **Non-touch devices** use standard `1vh`.

---

## Technical Approach Summary

### Architecture Philosophy
The FlowFest website follows a **"progressive enhancement with delight"** approach:

1. **Webflow as Foundation:** Structure, layout, and basic interactions are built entirely within Webflow's visual editor. This provides a solid, accessible baseline.

2. **CSS-First Animations:** The vast majority of animations (marquee, accordion, hover effects, modal transitions, cursor changes) are implemented in pure CSS via the Slater-injected stylesheet. This ensures:
   - Maximum performance (GPU-composited transforms)
   - No JavaScript dependency for visual polish
   - Clean separation of concerns

3. **JavaScript for State Management:** JavaScript (Barba.js, Lenis, custom Slater scripts) handles:
   - Page transition orchestration
   - Smooth scroll
   - Shuffle logic
   - Stacked card drag interactions
   - Accordion state toggling
   - YouTube modal state toggling

4. **Data Attributes as API:** The site uses a consistent `data-*` attribute pattern for state:
   - `data-accordion-status="active"` — accordion open/close
   - `data-yt-modal-status="active"` — video modal open/close
   - `data-stacked-cards-card` — testimonial card drag
   - `data-css-marquee-list` — marquee animation target
   - `data-hover-sun-happy` — sun mascot emotion trigger
   - `data-lenis-prevent` — scroll opt-out
   - `data-barba="container"` — page transition boundary

5. **Performance Optimizations:**
   - `rotate(0.001deg)` trick forces GPU layer promotion
   - `animation-play-state: paused` on marquees prevents off-screen rendering
   - `will-change` is implied through transform-based animations
   - Scrollbar is hidden for a cleaner, app-like experience
   - `pointer-events: none` on iframes during scroll prevents event bubbling

### Animation Timing Tokens

| Token | Value | Usage |
|---|---|---|
| `--animation-default-fast` | `0.25s cubic-bezier(0.625, 0.05, 0, 1)` | Button hovers, quick transitions, accordion icon spin |
| `--animation-default` | `0.5s cubic-bezier(0.625, 0.05, 0, 1)` | Modal transitions, underline links, card rotations, accordion expand |

The custom `cubic-bezier(0.625, 0.05, 0, 1)` curve provides a **fast-start, smooth-deceleration** feel — elements snap into position with a natural settling motion.

### Key Design Patterns

| Pattern | Implementation |
|---|---|
| **Playful Rotation** | `-5deg` to `+5deg` tilts on cards, modals, and hover states |
| **GPU Promotion** | `rotate(0.001deg)` appended to transforms |
| **State via Attributes** | `data-*` attributes toggle CSS states (no class toggling) |
| **Responsive Scaling** | `clamp()`-based fluid sizing system |
| **Cursor Branding** | Full custom cursor suite via CSS `url()` |
| **Accessibility** | `visibility: hidden` paired with `opacity: 0` for screen reader compatibility |
| **Mobile-Aware Hover** | `@media (hover: hover)` guards for desktop-only hover effects |

---

> **This analysis was compiled by examining the live website DOM, CSS source (via Slater), and visual behavior through automated browser interaction and screenshot capture.**
