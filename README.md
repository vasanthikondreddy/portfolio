# Vasanthi Kondreddy — Portfolio

A modern, responsive personal portfolio built with **React + Vite + Tailwind CSS**.

## ✨ Features
- **Dark theme** with cyan accent & lime highlights
- **Smooth scroll-reveal animations** via IntersectionObserver
- **Fully responsive** (mobile-first)
- **Sections**: Hero · About · Skills · Projects · Experience · Education · Contact
- **Google Fonts**: Syne (display) + DM Sans (body) + JetBrains Mono
- **Contact form** with success state
- **Featured project cards** with hover effects and gradient overlays

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   └── portfolio.js        ← All content (easy to update)
├── hooks/
│   └── useReveal.js        ← Scroll animation hook
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Customization

All content lives in `src/data/portfolio.js`. Update:
- `personalInfo` — name, email, GitHub/LinkedIn URLs
- `projects` — add/edit your projects
- `experience` — internships and jobs
- `skills` — tech stack categories

## 📦 Deploy

Works out of the box on **Vercel**, **Netlify**, or **GitHub Pages**.

```bash
npm run build   # Output in /dist
```
