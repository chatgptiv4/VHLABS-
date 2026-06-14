# VHLabs — vhlabs.dev

Premium cybersecurity-focused web agency site. Multi-page, SEO-ready, with built-in lead management.

**Live domain:** https://vhlabs.dev

---

## What's in the box

| Area      | Stack                                   |
| --------- | --------------------------------------- |
| Framework | React 19 + Vite 7                       |
| Styling   | Tailwind CSS v4 + shadcn/ui             |
| Animation | Framer Motion, Lenis, Swiper            |
| Backend   | Supabase + static frontend              |
| Forms     | Formspree (email) + Postgres (storage)  |
| Hosting   | Static hosting or any standard provider |

### Pages

`/`, `/services`, `/about`, `/projects`, `/case-studies`, `/blog`, `/blog/:slug`, `/contact`, `/privacy`, `/terms`, `/login`, `/admin/leads`, plus `/sitemap.xml` and `/robots.txt`.

### Lead management (`/admin/leads`)

- Sign up at **`/login`** to create your admin account.
- Then promote yourself to admin by running one SQL line in the Supabase SQL editor:

```sql
insert into public.user_roles (user_id, role)
values ('YOUR-AUTH-USER-ID', 'admin');
```

(Find your user id in `auth.users`.) Once you're an admin, `/admin/leads` shows every contact submission and newsletter subscriber.

### Formspree IDs

Already wired in `src/lib/site.ts`. You can override per-environment with:

```
VITE_FORMSPREE_CONTACT_ID=xzdwqeyk
VITE_FORMSPREE_NEWSLETTER_ID=xeedwavv
```

---

---

## Deployment

This site is built with React + Vite and can be hosted on any static hosting platform. Use `npm run build` and serve the generated `dist` directory, or deploy it with your preferred provider.

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.

### Build for production

```bash
npm run build
npm run preview
```

## Admin access

- Sign in at `/login`.
- Grant admin access in the Supabase SQL editor:

```sql
insert into public.user_roles (user_id, role)
values ('YOUR-AUTH-USER-ID', 'admin');
```

- The admin dashboard is available at `/admin/leads`.

---

## Notes

- This repo is now a React + Vite website with Tailwind CSS and Supabase backend support.
- The legacy TanStack Start / Lovable Cloud configuration has been removed.
