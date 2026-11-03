# Godwin Daryl B. Columbres — Portfolio

Personal portfolio website built with React, Vite and Tailwind CSS. Everything a
recruiter needs is on one page: who I am, what I can do, what I have built, and
how to reach me.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build
```

Node 18 or newer is recommended.

## Project structure

```
public/
  favicon.svg
  README.txt                  notes on the files to drop in here
  Godwin_Daryl_Columbres_Resume.pdf   <- add this file yourself
src/
  components/
    Navbar.jsx                sticky nav, active indicator, mobile menu, theme toggle
    Hero.jsx                  name, focus areas, primary actions
    About.jsx
    Capabilities.jsx          "What I can do" + currently developing
    Skills.jsx                skill groups from src/data/skills.js
    Experience.jsx            internship entry
    Projects.jsx              category filter + featured / more project grids
    ProjectCard.jsx           featured / wide / compact card variants
    ProjectThumb.jsx          screenshot or clean placeholder thumbnail
    WorkflowChain.jsx         renders a workflow as a chain of steps
    projectIcons.js           glyph used on placeholder thumbnails
    ProjectModal.jsx          accessible detail dialog + screenshot slots
    Education.jsx
    Certifications.jsx        training section
    Contact.jsx               mailto and profile links, no backend
    Footer.jsx
    BackToTop.jsx
    SectionHeading.jsx        shared heading with the node-and-line motif
    Reveal.jsx                shared scroll reveal wrapper
    ThemeToggle.jsx
  data/
    profile.js                name, hero copy, about text, contact details, nav items
    skills.js                 skill groups
    experience.js             work experience
    projects.js               all projects, categories, workflow steps, links, screenshots
    capabilities.js           "What I can do" entries and the areas being developed
    education.js              degree + training entries
  hooks/
    useActiveSection.js       highlights the nav item for the section in view
    useTheme.js               light/dark theme, saved to localStorage
  App.jsx
  main.jsx
  index.css                   design tokens, base styles, component classes
```

## Editing the content

All wording and data live in `src/data/`. You should not need to touch the
components to update the site.

- **Hero, about, contact details** — `src/data/profile.js`
- **Skills** — `src/data/skills.js`. Each group takes an optional `note` for
  honest caveats (the AWS group uses one) and `primary: true` for the four
  groups that get slightly more visual weight.
- **What I can do / currently developing** — `src/data/capabilities.js`
- **Experience** — `src/data/experience.js`
- **Projects** — `src/data/projects.js`
- **Education and training** — `src/data/education.js`

### Adding your resume

Save the PDF as `public/Godwin_Daryl_Columbres_Resume.pdf`. Both "Download
resume" buttons point at `/Godwin_Daryl_Columbres_Resume.pdf`. To use a
different filename, change `resumePath` and `resumeFileName` in
`src/data/profile.js`.

### Adding project screenshots

Each project has two image places:

1. `screenshot` — the lead image, used on the card thumbnail and at the top of
   the dialog. Save the file in `public/projects/` (e.g.
   `public/projects/secusnap.png`) and set
   `screenshot: '/projects/secusnap.png'`.
2. `screenshotSlots` — the labelled gallery inside the dialog. Each slot has an
   `image` field; set it to a path the same way and the image replaces the
   placeholder, with the slot label used as the caption.

Two optional per-project fields control how images are shown: `thumbFit`
(`'contain'` for wide workflow/diagram screenshots, `'cover'` for phone
screens) and `slotLayout: 'portrait'` (tall phone-screenshot gallery). Clicking
any screenshot in the dialog opens it full size in a new tab.

Anything still set to `null` renders as a clean "Project screenshot"
placeholder, so the page never shows a broken or invented image.

### Showing a workflow

A project can carry a `workflow` array, e.g.

```js
workflow: ['Gmail', 'Label-based processing', 'Extract email information',
           'Track in Google Sheets', 'Organize attachments in Google Drive'],
```

It renders as a chain of steps on the card and in the dialog. Omit it (or set
it to `null`) and the card falls back to showing three key features instead.

### Adding project links

Each project has a `links` object:

```js
links: { github: null, demo: null, docs: null }
```

Replace a `null` with a real URL and the matching button appears in the project
dialog. Leave it as `null` and the button stays hidden — nothing points at a
link that does not exist.

### Adding a new project

Copy an existing entry in `src/data/projects.js` and change the fields. Set
`featured: true` for a large card in the top grid, or `false` for a compact card
under "More projects". The `category` value must match one of the strings in the
exported `categories` array, otherwise it will not appear under any filter.

## Design notes

- **Colors** live as CSS variables in `src/index.css` and are exposed to
  Tailwind as semantic names: `base`, `surface`, `raised`, `line`, `ink`,
  `muted`, `signal` (cyan accent), `node` (amber accent). Changing a hex value
  there updates the whole site in both themes.
- **Type** is Archivo for headings and IBM Plex Sans for body text, loaded from
  Google Fonts in `index.html`.
- **Motion** is deliberately limited: one staggered entrance in the hero, short
  fades as sections scroll into view, and transitions on things you click.
  Everything is disabled when the visitor has "reduce motion" turned on.
- **Theme** defaults to dark and follows the system preference on first visit.
  The choice is remembered in `localStorage`.

## Accessibility

- Skip-to-content link, semantic landmarks and heading order
- Visible focus rings on every interactive element
- Project dialog traps focus, closes on Escape, and restores focus on close
- Mobile menu is keyboard operable with correct `aria-expanded` state
- `prefers-reduced-motion` respected throughout

## Deploying

The build output in `dist/` is a static site, so any static host works.

- **Netlify** — build command `npm run build`, publish directory `dist`
- **Vercel** — detected automatically as a Vite project
- **GitHub Pages** — set `base: '/<repo-name>/'` in `vite.config.js` first, then
  publish `dist/`

## Before sending the link to recruiters

- [x] `Godwin_Daryl_Columbres_Resume.pdf` is in `public/` (replace it whenever the resume changes)
- [ ] Add real GitHub or demo links to projects that have them
- [ ] Add screenshots for the projects you want to show (see the slot labels in
      `screenshotSlots`)
- [ ] Update `og:url` (and add `og:image`) in `index.html` with the live URL
- [ ] Check the site once on a phone
