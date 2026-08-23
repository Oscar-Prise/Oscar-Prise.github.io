# Oscar Luo — Personal Portfolio

A single self-contained page (`index.html` — all HTML/CSS/JS inline, no build
step, no dependencies except Google Fonts). This matches the live preview at
https://claude.ai/code/artifact/6211dcab-0da4-446d-a805-9cb94693ddad

## Deploying to GitHub Pages

You have two options. Both are free and give you a live URL.

### Option A — your main GitHub Pages site (`<username>.github.io`)

This is the standard "one site per GitHub account" URL.

1. On GitHub, create a **new repository** named exactly `<your-username>.github.io`
   (replace `<your-username>` with your actual GitHub username — this exact
   name is what makes GitHub treat it as your personal site).
2. Push these files to the `main` branch:
   ```
   git init
   git add index.html README.md
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
3. Go to the repo's **Settings → Pages**. Under "Build and deployment,"
   Source should already default to "Deploy from a branch," branch `main`,
   folder `/ (root)`. Save if it isn't already set that way.
4. Within a minute or two, your site is live at
   `https://<your-username>.github.io/`.

### Option B — a project site under any repo name

If you'd rather not use the special `<username>.github.io` repo (e.g. you
want to keep multiple projects/sites separate):

1. Create a repo with any name, e.g. `portfolio`.
2. Push `index.html` the same way as above.
3. In **Settings → Pages**, set Source to branch `main`, folder `/ (root)`.
4. Your site is live at `https://<your-username>.github.io/portfolio/`.

### Custom domain (optional)

If you buy a domain later, GitHub Pages supports pointing it at either
option above — add it under **Settings → Pages → Custom domain**, and GitHub
will walk you through the DNS records to add at your registrar.

## Adding your photos and video

The page currently has labeled placeholder slots (dashed brass borders,
striped background, a `PHOTO` / `VIDEO` / `CAD` / `DIAGRAM` tag) everywhere
real media should eventually go. To replace one:

1. Add your image/video file to an `images/` folder next to `index.html`
   (create the folder — it doesn't exist yet).
2. In `index.html`, find the matching `<div class="media-slot">...</div>`
   block (search for the slot's caption text, e.g. "Shadow-casting rig in
   use," to find it quickly) and replace its contents with an `<img>` or
   `<video>` tag, e.g.:
   ```html
   <img src="images/shadow-cast-rig.jpg" alt="Shadow-casting rig measuring the commercial device's hole pattern">
   ```
   or for video:
   ```html
   <video src="images/calf-vs-old-rocking.mp4" controls></video>
   ```
3. Commit and push — GitHub Pages redeploys automatically within a minute or two.

Slots currently waiting for media, section by section:

- **Hero** — one hero photo or video of the current device (or a CAD render as a stand-in)
- **Hip Exoskeleton, Phase I** — shadow-casting rig in use (video/photo), the finished adaptor (photo), adaptor CAD, melted PLA failure (photo)
- **Hip Exoskeleton, Phase III** — CAD vs. commercial device side by side, hinges breaking under load (video/photo), pelvis interface iterations (photo), calf vs. old design rocking comparison (video)
- **Hip Exoskeleton, Phase IV** — generalized multi-size interface CAD
- **Hip Exoskeleton, supporting work** — FEA stress plot on the thigh interface (diagram)
- **RoboMaster / MELD / HRI cards** — one representative image each
- **Snowboarding card** — a photo, once you've picked one

If you'd rather I do the swap-in for you once you've got the files together,
just bring them back to the conversation and I can edit the HTML directly.

## Notes

- This file has no backend, database, or build step — it's plain HTML/CSS/JS,
  so GitHub Pages (or literally any static host) can serve it as-is.
- The Google Fonts used (Cinzel, Source Serif 4, JetBrains Mono) load from
  `fonts.googleapis.com` — this requires the visitor to have normal internet
  access, which is true for essentially everyone; no action needed on your end.
- If you edit the copy directly in `index.html`, the visible text lives in
  plain HTML between tags — no templating engine, so it's safe to edit by hand.
