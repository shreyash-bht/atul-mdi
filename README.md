# Atul's Mukta — Driving Instructor

A minimalistic, frontend-only website for Atul, a personalized driving
instructor.
Built with Next.js (App Router), plain CSS, no backend — fully static, ready to
host for free on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Host on Vercel (free)

1. Push this folder to a GitHub repository.
2. Go to https://vercel.com/new and import the repo.
3. Leave all settings as default (Vercel auto-detects Next.js) → **Deploy**.

Done — you get a free `something.vercel.app` URL. Any future push to the repo
auto-redeploys the site.

## Edit contact details

All placeholders (phone, WhatsApp, email) live in one place at the top of
`app/page.js` inside the `CONTACT` object. Update them and redeploy.
