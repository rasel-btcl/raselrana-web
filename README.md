# Rasel Rana — Personal Website

Personal professional website for **Rasel Rana**, Manager (Technical) at Bangladesh Telecommunications Company Limited (BTCL).

🌐 **Live site:** [raselrana.com.bd](https://raselrana.com.bd)

Currently live as a "Coming Soon" landing page while the full portfolio is in development.

---

## About

This is the personal site and future portfolio of Rasel Rana, an Electrical & Electronic Engineer working in the telecommunications sector. The site currently features a minimal landing page with an intro, a signature animated element, and an email capture form for visitors who want to be notified at launch.

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Animation:** [Motion](https://motion.dev/) (`motion/react`)
- **Styling:** Tailwind CSS
- **Language:** JavaScript (React)
- **Hosting:** Vercel

---

## Features

- Animated "coming soon" landing page with staggered entrance transitions
- Custom `SignalWave` signature visual element
- Email capture form (`EmailForm.jsx`) for launch notifications
- Direct contact link (`mailto:`) for immediate outreach
- Fully responsive, minimal, mono/display type-driven design

---

## Project Structure

```
├── app/
│   └── page.jsx          # Main landing page
├── components/
│   ├── EmailForm.jsx     # Email signup form
│   └── SignalWave.jsx    # Animated signature element
└── README.md
```

---

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## Deployment

This project is deployed on [Vercel](https://vercel.com/). Pushes to the main branch trigger an automatic build and deploy to [raselrana.com.bd](https://raselrana.com.bd).

---

## Roadmap

- [ ] Wire up `EmailForm` to a real backend (e.g. Formspree, Resend + Route Handler, or a Google Sheet integration) — currently logs signups locally only
- [ ] Build out full portfolio sections: About, Experience, Projects, Skills
- [ ] Add resume/CV download
- [ ] Add contact section beyond `mailto:` link
- [ ] SEO metadata and Open Graph tags
- [ ] Analytics integration

---

## Contact

**Rasel Rana**
Manager (Technical), Bangladesh Telecommunications Company Limited
📧 [rasel.rana@btcl.gov.bd](mailto:rasel.rana@btcl.gov.bd)
📍 Dhaka, Bangladesh

---

## License

© 2026 Rasel Rana. All rights reserved.
