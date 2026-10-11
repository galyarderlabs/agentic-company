# Agentic Company — Roadmap

Agentic Company is a public operating guide for building a company of agents around one human. It is written for solo operators and small teams who already run agents and want structure instead of a pile of prompts: roles, memory, accounts, approval gates, money boundaries, records, and review. The problem it addresses is the gap between a useful assistant and a governed system that can do real work without turning the business into chaos. The guide ships as a bilingual static site (EN / ID) built with Astro and deployed to Cloudflare Workers.

## Where it is now

The guide is live and complete enough to read end to end. There are 23 chapters in English under `src/content/` and 23 chapters in Indonesian under `src/content/id/`, with identical slugs (verified by filename comparison). The chapter list, sidebar, titles, and reading order come from a single manifest in `src/data/docs.ts` (23 entries). Indonesian titles and descriptions live in `src/data/i18n.ts`. The site builds with `pnpm build` (`astro check && astro build`) and deploys static assets through Wrangler. A copyable templates page exists at `/templates/`, publishing five starter contracts in both languages: agent identity, access and spending, company task packet, ledger/audit event, and a verification checklist. The repository carries an MIT license (added in the latest commit, `ecd7ccc`).

Several parts are still thin, and it is worth saying so plainly:

- **The documentation pages use a hand-written markdown parser** inside `src/pages/docs/[slug].astro`. It handles `##`/`###` headings, tables, unordered and ordered lists, block quotes, code fences, inline code, bold, and inline links. It does not handle nested lists, images, footnotes, reference links, or `####` headings, so content that uses them renders as plain paragraphs or is dropped.
- **There is no continuous integration.** The repository has no `.github/` directory and no pull-request workflow. The only check GitHub runs is its default CodeQL code-scanning setup, so a change that breaks `astro check` or the build lands silently.
- **Chapter metadata is duplicated by hand.** Titles and descriptions appear in `src/data/docs.ts` for English and in `src/data/i18n.ts` for Indonesian, with nothing checking that they agree with each other or with the markdown.
- **Deployment metadata disagrees with itself.** `astro.config.mjs` sets `site` to `https://agentic-company-stack.pages.dev`, `public/robots.txt` advertises a sitemap at `https://agentic-company.galyarder.dev`, and the README badge points at `https://agentic-company.galyarderos.workers.dev` — three different hostnames. No sitemap integration is installed, so the advertised `sitemap.xml` returns 404.
- **The responsive QA script checks a route that does not exist.** `scripts/responsive-qa.py` screenshots `/docs/full-setup-playbook/`, but the actual slug is `setup-playbook`, so that check quietly misses.
- **The contribution surface is missing.** There is no `CONTRIBUTING.md`, no changelog, and no issue or pull request templates, even though the templates are meant to be copied and reused.

## Now

- **Make the build verifiable in CI.** Add a workflow that runs the existing `pnpm build` (type check plus build) on every pull request, so content and code changes are validated before merge instead of after deploy. This is the smallest change with the widest effect on quality.
- **Fix the stale QA route.** Point `scripts/responsive-qa.py` at real slugs and make the route list fail loudly when a page returns an error, so the responsive check reports something true instead of screenshotting a 404.
- **Align deployment metadata.** Decide the single canonical public URL and make `astro.config.mjs`, `public/robots.txt`, and the README badge agree. Either add a sitemap integration that generates `sitemap.xml` or remove the reference.
- **Keep the chapter manifest honest.** Add a check that every slug in `src/data/docs.ts` has an English and an Indonesian markdown file, and that no markdown file is orphaned from the manifest. Content drift is the failure mode this guide is least able to afford.

## Next

- **Improve the documentation renderer.** Replace the hand-rolled parser in `src/pages/docs/[slug].astro` with a real markdown pipeline so chapters can use nested lists, images, `####` headings, and footnotes without breaking. The current parser limits what a chapter can say.
- **Add contribution docs and templates.** A `CONTRIBUTING.md` plus issue and pull request templates, so outside fixes follow the same structure as the guide itself and reuse terms are unambiguous.
- **Add content validation.** A secret scan and an internal link check over `src/content/` and `src/content/id/`, so the public boundary rule in the README is enforced by tooling rather than by memory.
- **Reduce i18n duplication.** Generate or validate chapter titles and descriptions from the content files where possible, instead of maintaining the same text in two hand-edited TypeScript maps.
- **Grow the templates page deliberately.** The page now publishes five contracts; expand it over time as readers report which ones they actually reuse, rather than adding speculative templates.

## Later

- **Make the guide usable offline and as a single document.** Provide a way to read or export the full guide as one file, so operators can keep it next to their own setup instead of tab by tab.
- **Add worked examples.** Short, concrete walkthroughs that show a requirement moving from a written rule to a running check, using the templates as the starting point.
- **Connect the guide to the wider stack.** Keep the references to Galyarder HQ and Galyarder Framework accurate as those repositories evolve, so the guide stays a map rather than a stale pointer.

## Not planned

- **No hosted product or SaaS.** This repository is a guide. It does not become a service, an account system, or a dashboard.
- **No private operating details.** The public boundary stays: no tokens, cookies, private session logs, wallet secrets, backup codes, private credentials, private memory databases, or internal identity maps in this repository.
- **No vendor lock-in in the advice.** The guide stays useful whether the reader runs Hermes Agent, another runtime, or something they built themselves.
- **No hype.** No performance numbers, benchmarks, or partnership claims that the repository cannot show.

## How to follow along

Open an issue for a correction, a missing chapter, or a template you want to see. The labels `documentation`, `enhancement`, `bug`, and `good first issue` already exist in the repository and describe most of the work here. Pull requests are welcome and should keep the same voice as the guide: short, concrete, and free of claims the repository cannot support. Discussions are not enabled, so issues are the place to talk.
