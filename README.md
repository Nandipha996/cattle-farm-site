# KWY Farms Pty Ltd: A Simple Cattle Farm Website

A fast, mobile-friendly one-page website (HTML/CSS/JS) with:
- Hero + About + Gallery (click-to-enlarge) + Contact
- Green + black theme
- Floating WhatsApp button
- Free hosting via GitHub Pages

## Folder structure

```
cattle-farm-site/
  index.html
  assets/
    css/styles.css
    js/main.js
    img/
      cattle-01.jpg
      cattle-02.jpg
      ...
```

## How to update photos

1. Put new images into `assets/img/`
2. Rename them like:
   - `cattle-08.jpg`, `cattle-09.jpg`, etc.
3. Add more gallery items in `index.html` inside the `#gallery` section.

Tip: keep images reasonably sized (e.g., 1600px wide). Phone photos are fine.

## How to update text and contact details

Open `index.html` and edit:
- Farm name, tagline, about text
- Phone, WhatsApp, email, location

## Deploy for free with GitHub Pages

### Step 1 — Create the repo
1. Log in to GitHub
2. Create a new repository named: `cattle-farm-site` (or any name)
3. Keep it **Public** (required for free GitHub Pages on most accounts)

### Step 2 — Upload the files
Option A: Upload in the browser
1. Open your repo
2. Click **Add file → Upload files**
3. Upload everything inside this folder (including `index.html` and `assets/`)
4. Click **Commit changes**

Option B: Git (terminal)
```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/cattle-farm-site.git
git push -u origin main
```

### Step 3 — Turn on GitHub Pages
1. Repo → **Settings**
2. Left menu → **Pages**
3. **Source**: Deploy from a branch
4. **Branch**: `main`
5. **Folder**: `/ (root)`
6. Save

### Step 4 — Open the site
GitHub will show your live URL, usually:
`https://YOUR_USERNAME.github.io/cattle-farm-site/`

## Troubleshooting

- **404 / blank page**: confirm `index.html` is in the repo root (not inside another folder).
- **Changes not showing**: hard refresh (Ctrl/Cmd+Shift+R) or wait a minute (cache).
- **Images not loading**: confirm the exact filenames in `assets/img/` match `index.html`.

---

© KWY Farms Pty Ltd 1998. Owned by Origin.
