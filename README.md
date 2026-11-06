# Rami Amasha — Personal Website

Portfolio of Rami Amasha, Backend & DevOps Engineer. Live at [rami-amasha.vercel.app](https://rami-amasha.vercel.app).

## Features

- **Dark and light themes** — follows the system setting until the visitor picks one with the navbar toggle, then remembers it
- **Aurora background** — drifting color fields, a fading grid and a mouse-reactive particle network
- **Glass cards** — a glow and gradient border follow the cursor
- **Terminal hero** — current role and focus shown as a shell session, with a typewriter role line
- **Scroll-reveal animations** — sections animate in using IntersectionObserver
- **Responsive and accessible** — works from phone to desktop, keyboard-focusable navigation, respects reduced-motion settings
- **Lazy loading** — below-the-fold sections load on demand

## Tech Stack

- **React 18**
- **Tailwind CSS 3** — the color tokens are in `tailwind.config.js`, and their values for each theme are in `src/index.css`
- **Framer Motion**
- **React Icons**
- **React Scroll**

## Getting Started

```bash
npm install     # Install dependencies
npm start       # Start the development server
npm run build   # Build for production
```

## Project Structure

```
src/
├── components/
│   ├── ui.js                   # Shared Reveal, SectionHeader and Card
│   ├── ParticleBackground.js   # Interactive particle canvas
│   ├── Navbar.js               # Floating nav with active section
│   ├── Home.js                 # Hero with terminal and tech marquee
│   ├── About.js                # Summary, stats and focus areas
│   ├── Experience.js           # Work history
│   ├── Education.js            # Dual degree cards
│   ├── Languages.js            # Technical skills and spoken languages
│   ├── Projects.js             # Final projects and other work
│   └── Footer.js               # Contact section and footer
├── hooks/
│   └── useScrollReveal.js      # IntersectionObserver hook
├── App.js                      # Main app with lazy loading
├── App.css                     # Page background and reveal animations
└── index.css                   # Tailwind base and component classes
```

## Contact

- **Email:** ramiamasha84@gmail.com
- **GitHub:** [RamiAmasha31](https://github.com/RamiAmasha31)
- **LinkedIn:** [rami-amasha81](https://www.linkedin.com/in/rami-amasha81/)
