# Sprintech Engineering — Website

A static website for Sprintech Engineering, Nashik. Ready to deploy on GitHub Pages.

## Files

```
sprintech/
├── index.html       ← Main website
├── style.css        ← All styles
├── main.js          ← Interactions (nav, animations, modal, form)
├── assets/
│   └── logo.png     ← Company logo
└── README.md
```

## How to deploy on GitHub Pages

### Step 1 — Create a GitHub account
Go to https://github.com and sign up (free).

### Step 2 — Create a new repository
1. Click the **+** button (top right) → **New repository**
2. Name it: `sprintech-engineering` (or any name you like)
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload the files
1. On your new repository page, click **Add file → Upload files**
2. Upload ALL the files:
   - `index.html`
   - `style.css`
   - `main.js`
3. Create the `assets` folder: click **Add file → Create new file**, type `assets/logo.png`, then upload the logo separately via **Add file → Upload files** into the `assets/` path
4. Click **Commit changes**

### Step 4 — Enable GitHub Pages
1. Go to your repository → **Settings** tab
2. Scroll to **Pages** (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Branch: **main** | Folder: **/ (root)**
5. Click **Save**

### Step 5 — Your website is live!
After ~1 minute, your site will be live at:
`https://YOUR-USERNAME.github.io/sprintech-engineering/`

---

## Customise the content

### Add real photos
Replace the SVG icons in the Services and Machinery sections with real `<img>` tags:
```html
<!-- Replace the <svg> block inside .service-photo with: -->
<img src="assets/tools-photo.jpg" alt="Precision tools" style="width:100%;height:100%;object-fit:cover;border-radius:8px" />
```
Put your photos in the `assets/` folder.

### Add client logos (Trusted By section)
Replace each `.trusted-slot` div with:
```html
<div class="trusted-slot">
  <img src="assets/client-logo.png" alt="Client name" style="max-height:40px;max-width:120px;object-fit:contain" />
</div>
```

### Update certifications
Edit the `.cert-badge` blocks in `index.html` with your actual certification names.

### Update machinery names & specs
Find the `.machine-card` blocks and update the `<h4>`, `<p>`, and `openSpec(...)` call with your actual machine details.

---

## Custom domain (optional)
If you have a domain like `sprintechengineering.com`:
1. In GitHub Pages settings, enter your domain under **Custom domain**
2. At your domain registrar, add a CNAME record pointing to `YOUR-USERNAME.github.io`
