# Sprintech Engineering — Website

A static website for Sprintech Engineering, Nashik. Built and deployed on GitHub Pages.

---

## File structure

```
sprintech/
├── index.html          ← Main website (all sections)
├── style.css           ← All styles and layout
├── main.js             ← Nav, scroll animations, spec modal, contact form
├── README.md           ← This file
└── assets/
    ├── logo.png                  ← Company logo (header / nav)
    ├── logo-footer.png           ← White version of logo (footer)
    ├── zed-badge.png             ← ZED Silver certification badge
    ├── logo-msme.png             ← MSME logo (certifications section)
    ├── logo-technocraft.png      ← Technocraft Industries
    ├── logo-koso.png             ← Koso India Pvt. Ltd.
    ├── logo-kimplas.png          ← Kimplas Piping Systems Ltd.
    ├── logo-rishabh.png          ← Rishabh Instruments Ltd.
    ├── logo-zenith.png           ← Zenith Metaplast Pvt. Ltd.
    ├── logo-virtuoso.png         ← Virtuoso Optoelectronics Pvt. Ltd.
    ├── logo-gayatri.png          ← Gayatri Tooling Services
    └── logo-electrocrimp.png     ← Electro Crimp Contacts (India) Pvt. Ltd.
```

---

## Sections on the website

| Section | What it contains |
|---|---|
| **Hero** | Company name, tagline "Towards Certainty…", headline, stats (20+ years, 10+ machines) |
| **About Us** | Mission, Purpose, Vision, Core Values (5), company facts |
| **Services Provided** | Press Tools & Dies · Injection Moulds |
| **Machinery Available** | 7 grouped cards covering 12 machines, with "View specs" popup per group |
| **Certifications** | ZED Silver (MSME Sustainable Scheme) · Udyam Registration (MSME) |
| **Trusted By** | 8 client logos (greyscale → colour on hover) |
| **Contact** | Phone, Email, LinkedIn, Address, enquiry form, Google Maps link |
| **Footer** | White logo, nav links |

---

## How to update content

### Update any text
Open `index.html` and find the section you want to edit. All content is plain HTML — just change the text between the tags.

### Add a photo to Services or Machinery
Replace the `<svg>` icon block inside `.service-photo` or `.machine-icon` with a real image:
```html
<img src="assets/your-photo.jpg" alt="Description" style="width:100%;height:100%;object-fit:cover;border-radius:8px" />
```
Put your photo in the `assets/` folder and upload it to GitHub too.

### Add or remove a client logo (Trusted By)
Each logo is a `.trusted-slot` div inside `#certifications`. Add a new one:
```html
<div class="trusted-slot">
  <img src="assets/logo-newclient.png" alt="Client Name" />
</div>
```
Process the logo the same way as the others (white background removed, ~80px height).

### Update machine specs
Find the `.machine-card` block for that machine in `index.html`.  
Edit the `<h4>`, `<p>`, and the `openSpec('Title', 'Spec text')` call.

### Update certifications
Find the `.cert-badge` blocks inside `#certifications` and edit the `<strong>` and `<span>` text, or swap the `<img>` for a new logo.

### Update contact details
Find the `#contact` section and edit the phone, email, LinkedIn, and address items directly.

---

## How to deploy on GitHub Pages

### First-time setup

**Step 1 — Create a GitHub account**
Go to https://github.com and sign up (free).

**Step 2 — Create a new repository**
1. Click **+** (top right) → **New repository**
2. Name it: `sprintech-engineering`
3. Set to **Public** → **Create repository**

**Step 3 — Upload the files**
1. Upload `index.html`, `style.css`, `main.js` via **Add file → Upload files**
2. Create the assets folder: click **Add file → Create new file**, type `assets/placeholder.txt`, add any content, commit
3. Click into the `assets/` folder → **Add file → Upload files** → upload all logo/image files

**Step 4 — Enable GitHub Pages**
1. Go to repository **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** | Folder: **/ (root)** → **Save**

**Step 5 — Live!**
After ~1 minute: `https://YOUR-USERNAME.github.io/sprintech-engineering/`

---

### Updating the website after changes

When you receive updated files, just go to your repository on GitHub, click the file you want to replace, click the **pencil (edit) icon** or **upload** the new version, and commit. GitHub Pages rebuilds automatically within ~1 minute.

For the `assets/` folder, navigate into it first, then use **Add file → Upload files** to add new images or replace existing ones.

---

## Custom domain (optional)

If you get a domain like `sprintechengineering.com`:
1. In GitHub Pages settings → enter your domain under **Custom domain**
2. At your domain registrar, add a `CNAME` record pointing to `YOUR-USERNAME.github.io`

---

## Things still to add (future updates)

- Real photos of products (press tools, dies, injection moulds) in the Services section
- Real photos of the shop floor / machines in the Machinery section
- ZED Silver badge — proper high-resolution extraction pending
- Google Maps embed (optional) in the Contact section
