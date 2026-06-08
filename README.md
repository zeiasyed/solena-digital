# Solena Digital

Full-service digital marketing agency website — websites, SEO, hosting, and performance reporting.

**Live site:** https://solena-digital.com

## Pages

| Page | File |
|------|------|
| Home | `index.html` |
| Services | `services.html` |
| Portfolio | `portfolio.html` |
| Sample Reports | `reports.html` |
| About | `about.html` |
| Blog | `blog.html` |
| FAQ | `faq.html` |
| Contact | `contact.html` |

## Local preview

Open `index.html` in your browser, or run a local server:

```powershell
cd "C:\Users\zeias\Documents\solena-digital"
python -m http.server 8080
```

Then visit http://localhost:8080

## Deploy to GitHub Pages

### 1. Publish with GitHub Desktop

1. Open **GitHub Desktop** and sign in as **zeiasyed**
2. **File → Add local repository** → `C:\Users\zeias\Documents\solena-digital`
3. If prompted, **create a repository** in that folder
4. Commit message: `Initial Solena Digital website`
5. **Commit to main** → **Publish repository**
   - Name: `solena-digital`
   - Visibility: **Public** (required for free GitHub Pages)

### 2. Enable GitHub Pages

1. Go to https://github.com/zeiasyed/solena-digital/settings/pages
2. Under **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `main` → **/ (root)**
3. Click **Save**
4. Wait 2–5 minutes, then test: https://zeiasyed.github.io/solena-digital/

### 3. Connect custom domain (solena-digital.com)

The `CNAME` file in this repo already points to `solena-digital.com`.

**In GitHub** (Settings → Pages → Custom domain):
- Enter: `solena-digital.com`
- Enable **Enforce HTTPS** once the certificate is ready

**At your domain registrar (e.g. GoDaddy):**

| Type | Name | Value |
|------|------|-------|
| A | @ | `185.199.108.153` |
| A | @ | `185.199.109.153` |
| A | @ | `185.199.110.153` |
| A | @ | `185.199.111.153` |
| CNAME | www | `zeiasyed.github.io` |

DNS can take 15–60 minutes (sometimes up to 24 hours). Click **Check again** in GitHub Pages settings after updating records.

## Configuration

Edit `assets/js/config.js` to update contact email and domain.
