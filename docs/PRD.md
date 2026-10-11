# Agentic Company — Product Requirements

**Status**: Active
**Scope**: This document covers the Agentic Company guide repository: its content, the bilingual static site that publishes it, and the tooling that keeps the content and the build trustworthy. It does not cover the private operating systems the guide describes.

## Problem

Most people use agents as smarter chat boxes: one task, one prompt, one result. That is useful, but it is not a company. When agents are given real accounts, real tools, and real money, the failure modes change. Work has no durable scope. There are no review gates. There is no record of what happened, so nothing can be checked later.

The gap is not a missing feature. It is a missing operating model. Operators need a shared vocabulary and a sequence they can follow: what an agent identity is, which actions need approval, where proof lives, and how money access is bounded. Without that, the only available advice is generic, and generic advice is what produces the pile of prompts.

This repository publishes one operating model as a readable, copyable guide. The problem it solves is the distance between knowing agents can do work and knowing how to let them do it without losing control of the business.

## Who it is for

- A solo operator running several agents across coding, research, support, and finance, who wants structure before granting more access.
- A small team that has outgrown a single assistant and needs shared rules for roles, gates, and records.
- A technically serious reader who wants the operating model itself, not a tool recommendation.
- An Indonesian-speaking operator, who should get the same guide as the English reader.

The guide assumes the reader is comfortable with terminals, accounts, and API keys, but it does not assume they are a security engineer or a lawyer.

## Goals

- State a clear, self-consistent operating model for an agentic company, from business reality through identity, access, money, records, review, and maintenance.
- Keep the English and Indonesian editions structurally identical, so both readers follow the same sequence.
- Make every rule copyable: contracts, gates, and records should be usable templates, not only prose.
- Keep the site fast, static, and readable on any device, with no accounts, no tracking, and no client-side framework weight.
- Keep the public boundary enforced: the repository publishes the pattern, never private operating secrets.
- Make the build and the content verifiable, so a change that breaks the site or the manifest is caught before merge.

## Non-goals

- Not a hosted product, dashboard, or account system.
- Not a runtime, framework, or SDK. The guide describes how to operate; it does not ship the software that operates.
- Not a vendor recommendation. Hermes Agent appears as one concrete path, not as the only one.
- Not a compliance or legal authority. The guide frames responsibility as a design constraint, not as legal advice.
- Not a marketing site. No performance numbers, benchmarks, or claims the repository cannot show.

## Requirements

### Content and structure

**R1 — Bilingual parity.** [implemented] Every chapter exists in both English (`src/content/*.md`) and Indonesian (`src/content/id/*.md`) with matching slugs and structure. Both directories currently hold the same 23 filenames (verified). The correspondence is maintained by hand and not checked automatically.

**R2 — Single chapter manifest.** [implemented] `src/data/docs.ts` is the source of truth for the chapter list, titles, descriptions, levels, and reading order (23 entries). The sidebar, the docs routes, and the home page all read from it.

**R3 — Chapter metadata consistency.** [partial] Chapter titles and descriptions appear in `src/data/docs.ts` for English and in `src/data/i18n.ts` for Indonesian. There is no check that these match the markdown or each other.

**R4 — Copyable templates.** [implemented] `/templates/` publishes five starter contracts in both languages: agent identity, access and spending, company task packet, ledger/audit event, and a verification checklist.

### Rendering and site

**R5 — Static build and type check.** [implemented] `pnpm build` runs `astro check` followed by `astro build` and produces static output deployed through Wrangler.

**R6 — Markdown rendering fidelity.** [partial] `src/pages/docs/[slug].astro` renders markdown with a hand-written parser. It supports `##`/`###` headings, tables, unordered and ordered lists, block quotes, inline code, bold, inline links, and code fences. It does not support nested lists, images, `####` headings, footnotes, or reference links.

**R7 — Bilingual interface.** [implemented] The site toggles between English and Indonesian for navigation, labels, chapter metadata, and content through `src/data/i18n.ts` and `src/data/siteI18n.ts`, persisted in `localStorage` and reflected on the `<html lang>` attribute.

**R8 — Deployment metadata consistency.** [partial] `astro.config.mjs` sets `site` to `https://agentic-company-stack.pages.dev`, `public/robots.txt` advertises a sitemap at `https://agentic-company.galyarder.dev`, and the README badge points at `https://agentic-company.galyarderos.workers.dev` — three different hostnames. `robots.txt` advertises a `sitemap.xml` that no installed integration generates, so it returns 404.

**R9 — Responsive QA.** [partial] `scripts/responsive-qa.py` screenshots key routes across four viewports and reports overflow and console errors. Its route list includes `/docs/full-setup-playbook/`, a slug that does not exist (the real slug is `setup-playbook`).

**R10 — Private by default.** [implemented] The site ships no analytics, no tracking scripts, no third-party embeds, and no client-side framework; the only inline script is the locale toggle. The published page is static HTML, CSS, and the generated content.

### Process and trust

**R11 — Continuous integration.** [planned] No workflow runs the type check or the build on a pull request. The repository has no `.github/` directory; the only check GitHub runs is its default CodeQL code-scanning setup.

**R12 — Content validation.** [planned] No automated scan checks `src/content/` for leaked secrets or broken internal links.

**R13 — Contribution terms and guidance.** [partial] The repository now carries an MIT license, but there is still no `CONTRIBUTING.md` and no issue or pull request templates, even though the templates are meant to be reused.

**R14 — Public boundary.** [implemented] The README states the boundary explicitly: no tokens, cookies, private session logs, wallet secrets, backup codes, private credentials, private memory databases, or internal identity maps.

**R15 — A published roadmap and PRD.** [planned] The project should state where it is going and why, in the repository. This document and `ROADMAP.md` are the first; neither existed before.

## Success signals

- A reader can move from the manifesto to the build roadmap and finish with a written action gate matrix, agent identity contracts, and a record format they can use the same day.
- An English reader and an Indonesian reader can follow the same chapter order and reach the same conclusions.
- A contributor can open a pull request and see the build and type check run without asking how.
- A change to the chapter list or a content file fails loudly when it breaks the manifest or the site.
- The site stays static, fast, and free of accounts and tracking.
- The public boundary holds: nothing private appears in the repository or the published site.

## Open questions

- What is the single canonical public URL? The configuration, `robots.txt`, and the README currently name three hostnames, and the repository homepage on GitHub points at a fourth value (`https://agentic-company.galyarder.dev/`).
- Should the guide be published as one continuous document in addition to per-chapter pages?
- How much of the chapter metadata can be generated from the content files instead of hand-maintained in two TypeScript maps?
- Should the renderer stay hand-written for control, or move to a standard markdown pipeline for fidelity?
- Should Discussions be enabled, or do issues stay the single channel? Discussions are currently off.
- Which labels and milestones should the first batch of roadmap issues use, given the labels that already exist in the repository?
