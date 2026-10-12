# SewFusion Project Website

This folder contains the complete editable source and media files for the SewFusion project website.

## Preview locally

Open `index.html` directly in a browser, or start a local static-file server from this directory:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Structure

- `index.html` - page content and metadata
- `static/css/index.css` - page styles and responsive layout
- `static/js/index.js` - BibTeX copy interaction
- `static/images/` - favicon, overview, method, result, and ablation figures
- `static/videos/results/` - animated qualitative results
- `static/pdfs/sewfusion.pdf` - paper PDF

## Deployment

The folder is ready for static hosting on GitHub Pages, Netlify, Cloudflare Pages, or any standard web server. Keep the directory structure unchanged so that media links continue to work.
