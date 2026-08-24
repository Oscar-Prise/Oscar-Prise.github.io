# Oscar Luo — Personal Portfolio

A small static multi-page site, no build step, no dependencies except Google
Fonts. Structure:

```
index.html      About / hero, Skills, Contact
story.html      "How I Got Here" — origin story
work.html       Work Experience — Hip Exoskeleton (current, always expanded)
                plus two collapsible sections: Earlier Work (Soochow, Hounen)
                and Undergraduate Projects (RoboMaster, MELD, HRI)
outside.html    Outside the Lab — snowboarding, Warhammer 40k, Halo
css/style.css   Shared styles for all four pages
js/main.js      Shared script (gear-icon generation + scrollspy nav)
images/         Photos (currently just the hero photo)
```

All four pages share the same nav bar and footer, and pull the same
`css/style.css` / `js/main.js`, so a style change in one place applies
everywhere.

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
   git add index.html story.html work.html outside.html css js images README.md
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
2. Push the same files as above.
3. In **Settings → Pages**, set Source to branch `main`, folder `/ (root)`.
4. Your site is live at `https://<your-username>.github.io/portfolio/`.

### Custom domain (optional)

If you buy a domain later, GitHub Pages supports pointing it at either
option above — add it under **Settings → Pages → Custom domain**, and GitHub
will walk you through the DNS records to add at your registrar.

## Adding your photos and video

Each page still has labeled placeholder slots (dashed brass borders, striped
background, a `PHOTO` / `VIDEO` / `CAD` / `DIAGRAM` tag) everywhere real
media should eventually go. To replace one:

1. Add your image/video file to the `images/` folder.
2. Find the matching `<div class="media-slot">...</div>` block in the
   relevant page (search for the slot's caption text, e.g. "Shadow-casting
   rig in use," to find it quickly — that one's in `work.html`) and replace
   its contents with an `<img>` or `<video>` tag, e.g.:
   ```html
   <img src="images/shadow-cast-rig.jpg" alt="Shadow-casting rig measuring the commercial device's hole pattern">
   ```
   or for video:
   ```html
   <video src="images/calf-vs-old-rocking.mp4" controls></video>
   ```
3. Commit and push — GitHub Pages redeploys automatically within a minute or two.

Slots currently waiting for media, page by page:

- **index.html, Hero** — one hero photo or video of the current device (or a CAD render as a stand-in)
- **work.html, Hip Exoskeleton Phase I** — shadow-casting rig in use (video/photo), the finished adaptor (photo), adaptor CAD, melted PLA failure (photo)
- **work.html, Hip Exoskeleton Phase III** — CAD vs. commercial device side by side, hinges breaking under load (video/photo), pelvis interface iterations (photo), calf vs. old design rocking comparison (video)
- **work.html, Hip Exoskeleton Phase IV** — generalized multi-size interface CAD
- **work.html, supporting work** — FEA stress plot on the thigh interface (diagram)
- **work.html, Undergraduate Projects (folded)** — RoboMaster / MELD / HRI cards, one representative image each
- **outside.html, Snowboarding card** — a photo, once you've picked one

If you'd rather I do the swap-in for you once you've got the files together,
just bring them back to the conversation and I can edit the HTML directly.

## Notes

- No backend, database, or build step — plain HTML/CSS/JS, so GitHub Pages
  (or literally any static host) can serve it as-is.
- The Google Fonts used (Cinzel, Source Serif 4, JetBrains Mono) load from
  `fonts.googleapis.com` — this requires the visitor to have normal internet
  access, which is true for essentially everyone; no action needed on your end.
- If you edit the copy directly in the HTML files, the visible text lives in
  plain HTML between tags — no templating engine, so it's safe to edit by hand.
- The "Earlier Work" and "Undergraduate Projects" sections on `work.html`
  use the native HTML `<details>`/`<summary>` element for the fold/unfold —
  no JavaScript required, and it degrades gracefully (shows collapsed,
  clickable) even with JS disabled.
