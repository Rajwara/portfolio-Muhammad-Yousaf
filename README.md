# Muhammad Yousaf — Portfolio

A personal portfolio site for Muhammad Yousaf (AI Automation Engineer), built with
[Next.js](https://nextjs.org) (App Router), [TypeScript](https://www.typescriptlang.org/), and
[Tailwind CSS](https://tailwindcss.com).

## What's in here

- Sections: Hero, About, Skills, Projects, Experience/Education, Contact, Footer
- Dark mode toggle (persisted in `localStorage`)
- Responsive layout with a mobile nav menu
- All content lives in one place: [`lib/data.ts`](./lib/data.ts)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Still placeholder — replace before going live

- **Images** — `/public/images/placeholder-avatar.svg`, `placeholder-project.svg`, and
  `placeholder-contact.svg` are generic SVG placeholders. Swap in real photos/screenshots with
  the same filenames (or update the `src` paths in the components) and remove
  `images.unoptimized` / `dangerouslyAllowSVG` from `next.config.js` once you're using raster
  images.
- **Resume** — `siteData.about.resumeUrl` points to `/docs/resume-placeholder.pdf`, which doesn't
  exist yet. Add the real PDF at `public/docs/` and update the path in `lib/data.ts`.
- **LinkedIn / GitHub links** — in `lib/data.ts`, the `socials` array has `link: "#"` for LinkedIn
  and GitHub (marked with `// TODO` comments) — the LinkedIn URL was cut off on the source CV, and
  no GitHub was listed. Fill in the real URLs.
- **Project links** — every project in `siteData.projects` has `code`/`visit` set to `"#"`. Add
  real links once available, or edit the project entries themselves (they're currently
  representative examples generated from the CV's experience bullets, not named real projects).
- **Contact form** — `components/Contact.tsx` simulates a submission client-side only; no email is
  actually sent. Wire it up to a service like [Formspree](https://formspree.io) or
  [Resend](https://resend.com) before relying on it.

## Deploying to Vercel

1. Push this repository to GitHub (already done if you're reading this from the repo).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Next.js** (auto-detected). No environment variables are required for the
   current placeholder build.
4. Click **Deploy**.

Or from the CLI:

```bash
npm install -g vercel
vercel
```

Every subsequent push to the connected branch will trigger a new deployment automatically.
