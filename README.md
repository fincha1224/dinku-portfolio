# Dinku Adale — Personal Portfolio (v6)

Next.js 15 / React 19 / TypeScript. One page, exported as a static site.

## Run and build

1. Install Node.js 20 or newer.
2. `npm install`
3. `npm run dev`, then open http://localhost:3000
4. `npm run build` writes the finished static site to `out/`

## Deploy to Cloudflare Pages

One-time setup (in this folder):

```
npx wrangler login        # opens the browser; sign in to the Cloudflare account that should own the site
npx wrangler whoami       # confirm it's the right account before deploying
```

Every deploy after that:

```
npm run deploy
```

This builds the site and uploads `out/` to the Pages project `dinku-portfolio`. On the first run, Wrangler offers to create the project; accept it. The site goes live at `https://dinku-portfolio.pages.dev`, and at `https://dinkuadale.com` once the custom domain is attached.

To use your own domain, go to Cloudflare dashboard → Workers & Pages → dinku-portfolio → Custom domains → Set up a domain. Any zone in the same Cloudflare account works, for example a subdomain of atronus.com.

## Editing content

All text lives in `app/data.ts`:

- `work` is the Selected work list. Each item has a domain filter, period, title, outcome and expandable details.
- `ventures` is the Ventures grid. Status is `Live`, `In development` or `Research`.
- `experience` is the timeline.

The page layout is in `app/page.tsx` and the design is in `app/globals.css`. Fonts (Newsreader and IBM Plex Sans) are self-hosted through `@fontsource`, so the only external resource is the hero background photo (Unsplash, as in V5).

## What changed from v5

- Design: V5 navy and gold on the dark sections, buttons and photographic hero background; crisp off-white light sections with high-contrast navy text for readability, with a three-era career arc in the hero (chemical industries → enterprise security → builder).
- Content rewritten from the verified career record:
  - correct Accenture titles and dates (Security Analyst, then Security Consultant)
  - the state health-marketplace security policy and risk-model work
  - 120 sites and 220 servers for the endpoint protection and DLP rollout
  - the master's thesis and ProQuest record
  - Howard teaching assistant and sysadmin role
  - all current ventures with their status
- Selected work is now a filterable, expandable list (15 items in 4 areas) instead of image cards.
- Public-facing disclaimers about logo crops and attribution were removed from the page.
- The Google Fonts import, unused stock images and the legacy SVGs were all removed.
- Contact uses info@atronus.com and LinkedIn. No phone number is published.

## v7 additions (from the mockup)

- Title line "Technology Leader & AI Systems Architect" and a broader summary under the name.
- Expertise strip of eight areas in the hero.
- "Download CV" button in the top menu; "Industries" and "Contact" added to the menu.
- New "Chemical industry experience" section (alkyd resins, paints and coatings, petroleum and fuel quality, ISO/IEC 17025 and ISO 9001, industrial QA and calibration, waste reduction, renewable energy research). The last tile opens the matching case studies in Selected work.
- v7.2: OmniServe Labs described as the Jet A-1 and diesel ISO/IEC 17025 method kits (Payhip), with a matching case study; crown cork production QC and renewable energy and biofuels tiles; new Insights section.

## Adding an article to Insights

Open `app/data.ts`, find `insights`, and add a new entry at the top of the list:

```ts
{
  kind: 'Article',            // or 'Blog post', 'Research', 'Talk'
  title: 'Your article title',
  where: 'LinkedIn · March 2027',
  summary: 'One or two sentences on what it covers.',
  href: 'https://www.linkedin.com/pulse/…',
  linkLabel: 'Read on LinkedIn',
},
```

Save, then commit and push. Cloudflare publishes it automatically.

## Résumé

The downloadable résumé lives at `public/Dinku_Adale_Resume.pdf` and is linked from the hero, Experience and Contact sections. To update it, replace that file and keep the same name. It is public once the site is live, so it carries no phone number.

## Notes

- The portrait (`public/images/dinku-portrait-navy.webp`) is the LinkedIn photo with its background replaced by the site navy; it is 400×400 and displayed at 300px so it stays sharp.

## Venture logos

Venture cards show a logo when `logo` is set in `app/data.ts`, and gold initials otherwise. Current marks were cut from the LinkedIn banner (`public/images/*-mark.png`). To add or replace one, save a square PNG (at least 128×128) to `public/images/` and set `logo: '/images/<file>.png'` on that venture.

## Sharing, icons and search engines (v7.6)

- **Link preview image:** `app/opengraph-image.png` (1200×630). LinkedIn, X, Slack and email apps show it when the link is shared.
- **Browser-tab and phone icons:** `app/icon.png`, `app/apple-icon.png`, `app/favicon.ico` (gold "DA" monogram).
- **Search engines:** `robots.txt` and `sitemap.xml` are generated at build time, and the page carries Person structured data for Google.
- **When the custom domain is live:** change the one line in `app/site.ts` (e.g. to `https://dinku.atronus.com`), then commit and push. Link previews, the sitemap and search data all follow from it.
- After the site is live, test the preview at https://www.linkedin.com/post-inspector/ (paste your URL).
