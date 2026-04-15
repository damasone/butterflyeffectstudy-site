# butterflyeffectstudy.com

Deploy bundle for the public Butterfly Effect site.

## What this repo is
- public static site only
- safe subset of the project for GitHub Pages or other static hosting
- custom domain already declared in `CNAME`

## Publish with GitHub Pages
1. create a new GitHub repo
2. push the contents of this folder
3. in GitHub:
   - `Settings`
   - `Pages`
   - `Build and deployment`
   - deploy from branch `main`
   - folder `/ (root)`
4. keep the `CNAME` file committed

## Domain
- apex: `butterflyeffectstudy.com`
- root `/` redirects to `/public_research_surface/index.html`

## Important
Do not replace this repo with the full project tree.
This deploy bundle intentionally excludes raw data, local artifacts, and internal-only project layers.
