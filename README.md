# Zamared Al Shabibi — Portfolio

A static portfolio site. No database, no backend, no build step —
just HTML, CSS and JavaScript.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure (sections, layout) |
| `style.css` | Visual design (dark, terminal-inspired theme) |
| `script.js` | Renders skills/projects/certificates from `data.js`, handles filtering, search, and the CV button |
| `data.js` | **The only file you edit** to add/update content |
| `assets/resume/` | Put your CV PDF here |
| `assets/certificates/` | Put your certificate PDFs here |

## 1. Add your real CV

Export your CV to PDF and save it as:

```
assets/resume/resume.pdf
```

The "Download CV" buttons already point to that exact path — nothing else to configure.

## 2. Add your certificate PDFs

`data.js` already lists all 56 certificates with a `file` path like:

```js
{ title: "AWS AI Practitioner Challenge", issuer: "Udacity", category: "Udacity",
  file: "assets/certificates/udacity-aws-ai-practitioner.pdf" }
```

Just save each real certificate PDF into `assets/certificates/` using the exact file name in its `file` field (or edit the `file` value to match whatever name you prefer). Clicking a certificate card opens that PDF.

## 3. Add a new certificate later

Open `data.js`, find the `certificates` array, and add one line:

```js
{ title: "New Certificate Name", issuer: "Coursera", category: "Google & Coursera",
  file: "assets/certificates/new-certificate.pdf" },
```

The site rebuilds the grid, count, search and filters automatically — no HTML/CSS changes needed.

## 4. Add a new project later

In `data.js`, add an object to the `projects` array:

```js
{
  title: "My New Project",
  tags: ["Web"],              // controls which filter tab it shows under
  stack: ["React", "Node.js"],
  description: "One or two sentences about what it does.",
  highlight: "",               // optional stat, e.g. "1,000+ users"
  github: "https://github.com/you/repo", // or "" if private
},
```

## 5. Add a new skill later

In `data.js`, add to the `skills` array:

```js
{ name: "TypeScript", category: "Languages" },
```

If you use a new `category` name that doesn't exist yet, a new skills group is created automatically.

## 6. Update your contact details

At the top of `data.js`, edit the `profile` object — `email`, `github`, `linkedin`, `location`, `tagline`, and `bio`.

## 7. Preview locally

Just open `index.html` in a browser — no server or install required.

## 8. Publish it for free

Any static host works. The easiest options:

- **GitHub Pages** — push this folder to a GitHub repo, then enable Pages in the repo settings (Settings → Pages → deploy from the `main` branch).
- **Netlify / Vercel** — drag-and-drop the whole folder onto their dashboard.

No database, no server, no environment variables needed.
