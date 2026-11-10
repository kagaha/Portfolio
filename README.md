# Sai Ruthik Kandimalla — Portfolio

React + Vite portfolio. Dark/light theme, fully responsive, downloadable resume.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview
```

## Customise

- **All text/content:** `src/data.js` (profile, experience, projects, skills, education)
- **Resume:** replace `public/SaiRuthik_Kandimalla_Resume.pdf` (keep the same name, or update `profile.resume` in `data.js`)
- **Project screenshots:** drop images into `public/projects/` using the names in `data.js`
  (`flipkart.jpg`, `wanderlust.png`, `miniproject.png`, `aftersales.png`). Missing images show a gradient placeholder.
- **Project links:** fill the `live` / `github` fields in `data.js` (empty ones are hidden).
- **Contact form:** opens the visitor's mail app (mailto). For a real backend, use Formspree/EmailJS in `src/components/Contact.jsx`.
- **Colours/fonts:** CSS variables at the top of `src/styles.css`.

## Deploy

Works on Vercel, Netlify or GitHub Pages (build command `npm run build`, output `dist`).
