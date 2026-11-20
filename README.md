# Sprintech Engineering — Website

A static website for Sprintech Engineering, Nashik. Built and deployed on GitHub Pages.

---

## File structure

```
sprintech/
├── index.html          ← Main website (all sections)
├── style.css           ← All styles and layout
├── main.js             ← Mobile menu and current-section highlight in the nav
├── README.md           ← This file
└── assets/
    ├── logo.png                  ← Company logo (header / nav)
    ├── logo-footer.png           ← White version of logo (footer)
    ├── logo-iso.png              ← EICPL / EGAC / IAF marks (ISO 9001:2015)
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
| **Machinery Available** | 7 grouped rows covering 12 machines; "View specs" expands a table of size, make and year |
| **Certifications** | ISO 9001:2015 (EICPL / EGAC) · ZED Silver (MSME Sustainable Scheme) · Udyam Registration (MSME) |
| **Trusted By** | 8 client logos (greyscale → colour on hover) |
| **Contact** | Phone, Email, LinkedIn, Address, Google Maps link |
| **Footer** | White logo, tagline, nav links |

---

## How to update content

### Update any text
Open `index.html` and find the section you want to edit. All content is plain HTML — just change the text between the tags.

### Add a photo to Services or Machinery
Replace the `<svg class="service-photo">` icon in the Services section with a real image:
```html
<img src="assets/your-photo.jpg" alt="Description" style="width:100%;height:100%;object-fit:cover;border-radius:8px" />
```
Put your photo in the `assets/` folder and upload it to GitHub too.

### Add or remove a client logo (Trusted By)
Each logo is a `.trusted-slot` div inside `#certifications`. Add a new one (keep `loading="lazy"`):
```html
<div class="trusted-slot">
  <img src="assets/logo-newclient.png" alt="Client Name" />
</div>
```
Process the logo the same way as the others (white background removed, ~80px height).

### Update machine specs
Each machine group is a `<details class="machine">` block in `index.html`. Edit the `<h3>` name, the description, the unit count, and the rows of the spec table (`<tr><td>Unit</td><td>Size</td><td>Make</td><td>Year</td></tr>`). To add a machine to a group, copy a `<tr>` row. Use `—` where the year is not known.

### Update certifications
Find the `.cert` blocks inside `#certifications` and edit the `<strong>` and `<span>` text, or swap the `<img>` for a new logo.

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

## ISO 9001:2015 display rules (EICPL)

The ISO mark may only appear together with the standard name and your EICPL Client ID, in its original colours and proportions, only for content within your certified scope. Wording must say the management system is certified, never that products or services are approved. The same rules apply to the website and LinkedIn.

**To do:** add your EICPL Client ID to the ISO entry in `#certifications` (there is a comment marking the spot).

---

## Design notes

The layout was reviewed with the Impeccable design skill (impeccable.style). Section labels above headings, numbered tiles, stat cards and the spec popup were removed in favour of plain headings, ruled rows and expandable tables. Run `npx impeccable detect index.html` to re-check the page after future edits.

---

## Things still to add (future updates)

- Real photos of products (press tools, dies, injection moulds) in the Services section
- Your EICPL Client ID next to the ISO 9001:2015 entry
