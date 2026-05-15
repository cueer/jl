# Online Resume Website Design

## Overview

A personal brand showcase website built with Vue 3, deployed to GitHub Pages. Features a dark professional theme with a split sidebar layout. All content is centralized in a single data file for easy maintenance.

## Tech Stack

- **Framework:** Vue 3.4+ with Composition API
- **Build tool:** Vite 6
- **Styling:** Tailwind CSS 3
- **Deployment:** GitHub Actions → GitHub Pages

## Layout

Desktop: fixed left sidebar (30% width) + scrollable right main content area.

Sidebar contains:
- Avatar
- Name, title
- Contact links (email, GitHub, LinkedIn, phone)
- Skill tags

Main content contains sections in order: About, Experience (timeline), Skills (progress bars), Projects (card grid), Education, Blog/Articles.

Mobile (<768px): sidebar collapses into a top banner with hamburger navigation. Main content becomes full-width single column.

## Project Structure

```
src/
├── App.vue                    # Root: sidebar + main content layout
├── main.js                    # Entry point
├── components/
│   ├── Sidebar.vue            # Left sidebar
│   ├── MainContent.vue        # Right content wrapper
│   ├── sections/
│   │   ├── About.vue
│   │   ├── Experience.vue     # Timeline
│   │   ├── Skills.vue         # Progress bars
│   │   ├── Projects.vue       # Card grid
│   │   ├── Education.vue
│   │   └── Blog.vue
│   └── ProjectCard.vue
├── data/
│   └── profile.js             # Single source of all content
├── style/
│   └── main.css               # Tailwind entry + globals
public/
├── avatar.png
index.html
vite.config.js
tailwind.config.js
package.json
.github/workflows/deploy.yml
```

## Data Model

All resume content lives in `src/data/profile.js`. Structure:

```js
{
  name: string,
  title: string,
  avatar: string,
  bio: string,
  contact: { email, github, linkedin, phone },
  skills: [{ name, level: 0-100 }],
  experience: [{ company, role, period, description }],
  projects: [{ name, description, tags[], link, image? }],
  education: [{ school, degree, period, description? }],
  blog: [{ title, summary, date, link }]
}
```

Empty arrays auto-hide their section.

## Color Palette

| Token        | Hex       | Usage                  |
|--------------|-----------|------------------------|
| bg-primary   | `#1a1a2e` | Page background        |
| bg-sidebar   | `#16213e` | Sidebar background     |
| accent       | `#e94560` | Links, highlights, bars|
| text-primary | `#e0e0e0` | Body text              |
| text-muted   | `#8892b0` | Secondary text         |
| bg-card      | `#233554` | Card backgrounds       |
| border       | `#2a2a4a` | Dividers               |

Tailwind config extends theme with these custom colors.

## Interactions

- Skill progress bars: CSS animation from 0 to target width on viewport entry
- Project cards: hover lift + border highlight
- Timeline items: sequential fade-in on scroll
- Page sections: intersection observer fade-in animation

## Deployment

- Vite `base` set to repository name (e.g. `/jl/`)
- GitHub Actions workflow triggers on push to `main`
- Steps: checkout → Node 20 setup → npm ci → npm run build → deploy to `gh-pages` branch
- GitHub Pages configured to serve from `gh-pages` branch
- Final URL: `https://<username>.github.io/jl/`

## Development Commands

- `npm run dev` — local dev server with HMR
- `npm run build` — production build
- `npm run preview` — preview production build locally
