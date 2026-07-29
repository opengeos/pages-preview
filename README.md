# pages-preview

Central host for per-PR preview builds across `opengeos` repositories.

```text
https://opengeos.org/pages-preview/<repo-name>/pr-<number>/
```

Previews are published to the `gh-pages` branch, rebuilt on every push to their
pull request, and deleted when it closes. Everything here is machine-generated
and disposable: nothing is served from this repository in production, and
`gh-pages` may be reset at any time to reclaim space.

> [!WARNING]
> A preview can run unreviewed third-party code in your browser. Open previews
> only for pull requests you are reviewing, and prefer a throwaway browser
> profile.

## Publishing previews from another repository

Add a job that builds your site, then hands the output to
[`rossjrw/pr-preview-action`](https://github.com/rossjrw/pr-preview-action) with
`umbrella-dir` set to **your repository's name**. That name is what keeps
repositories from colliding here, so it must be unique.

```yaml
- name: Publish preview
  uses: rossjrw/pr-preview-action@ffa7509e91a3ec8dfc2e5536c4d5c1acdf7a6de9 # v1.8.1
  with:
    source-dir: <your build output>
    deploy-repository: opengeos/pages-preview
    token: ${{ secrets.PREVIEW_DEPLOY_TOKEN }}
    pages-base-url: opengeos.org/pages-preview
    umbrella-dir: <your-repo-name>
    preview-branch: gh-pages
    wait-for-pages-deployment: true
```

`opengeos/geolibre-plugins` has a
[worked example](https://github.com/opengeos/geolibre-plugins/blob/main/.github/workflows/plugin-preview.yml)
that also covers fork pull requests.

### The deploy token

`PREVIEW_DEPLOY_TOKEN` is a fine-grained PAT scoped to **this repository only**,
with two permissions:

| Permission | Why |
| --- | --- |
| `Contents: Read and write` | push the preview to `gh-pages` |
| `Pages: Read` | poll the Pages build so the comment is only posted once the URL resolves |

`Pages: Read` is not optional when `wait-for-pages-deployment` is on. The wait
polls `/repos/.../pages/builds` with this token; without that permission it
never sees a build and the job spends its timeout before failing with a
misleading "Timed out waiting for build to start".

The token needs no access to the calling repository — the sticky PR comment is
posted with that workflow's own `GITHUB_TOKEN`.

### Three things that will silently break a preview

**`.gitignore` files in your build output.** Publishing happens via `git add`,
which honors any `.gitignore` inside the payload. A stray one will drop those
files from the commit while the build still reports success. Strip them before
deploying:

```bash
find <build output> -name .gitignore -print -delete
```

**Absolute base paths.** Previews are served from a subdirectory, so a site
built for `/` will request its assets from the domain root and 404. Build with a
relative base (for Vite, `base: './'`).

**A missing `.nojekyll` at the branch root.** This site is served by a *legacy*
(branch-based) Pages build, which runs Jekyll — and Jekyll silently drops every
file and directory whose name begins with an underscore. Modern bundlers emit
exactly such names: Vite produces `assets/__vite-browser-external-*.js`, for
instance. The build succeeds, the deploy succeeds, and the site 404s on those
chunks at runtime, which surfaces as a bare `Failed to fetch dynamically
imported module` — or, for a PWA, a `bad-precaching-response` from Workbox.
`.nojekyll` on `gh-pages` turns the Jekyll step off and publishes the branch
verbatim. It is committed on `main` so recreating the branch carries it.

## Housekeeping

Preview builds can be large, and `gh-pages` retains history, so the branch grows
even after previews are deleted. GitHub Pages caps a site at 1 GB. If it gets
close, delete and recreate the branch — no preview here is worth preserving.

Recreate it **from `main`**, never as an empty branch, so the root files come
with it:

```bash
git switch main && git pull
git push origin --delete gh-pages
git push origin main:gh-pages
```

`main` holds exactly what the branch root needs:

| File | Why |
| --- | --- |
| `.nojekyll` | stops the Jekyll build from dropping `_`-prefixed asset files |
| `index.html` | the landing page — with Jekyll off, `README.md` is no longer rendered into one, so without it `/pages-preview/` itself 404s |
| `README.md` | these notes; harmless to serve |

Recreating the branch deletes every published preview. They come back as each
pull request is pushed to again, or immediately by re-running the preview
workflow on the pull requests you care about:

```bash
gh run list --workflow "PR preview" --branch <pr-branch> --limit 1
gh run rerun <run-id>
```
