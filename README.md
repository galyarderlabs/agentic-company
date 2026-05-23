# Agentic Company Stack

A public-safe Astro guide for building a governed agentic company operating system around one human operator.

This is not the old static HTML draft. The current project is an Astro + Wrangler site with deep docs, templates, responsive UI, and Cloudflare deployment config.

## Stack

- Astro static output
- Cloudflare Workers static assets via Wrangler
- Public-safe docs content under `src/content/`
- Navigation/chapter metadata under `src/data/docs.ts`
- Global design system under `src/styles/global.css`

## Commands

```bash
pnpm install
pnpm dev
pnpm build
pnpm astro:preview
pnpm worker:preview
pnpm deploy
```

`pnpm deploy` runs `pnpm build && wrangler deploy`.

## Content map

- `/` — landing page and stack overview
- `/docs/manifesto/`
- `/docs/reality-check/`
- `/docs/business-first/`
- `/docs/seven-requirements/`
- `/docs/agent-identity/`
- `/docs/hermes-setup/`
- `/docs/company-communication/`
- `/docs/agent-memory/`
- `/docs/support-agent/`
- `/docs/execution-agent/`
- `/docs/agent-to-agent-relay/`
- `/docs/accounts-access/`
- `/docs/tools-and-mcp/`
- `/docs/paperclip-company-control/`
- `/docs/working-agents/`
- `/docs/money-wallets-agent-spending/`
- `/docs/ledger-audit-proof/`
- `/docs/business-models-agent-to-agent-work/`
- `/docs/decision-gates/`
- `/docs/security/`
- `/docs/maintenance/`
- `/docs/setup-playbook/`
- `/docs/build-roadmap/`
- `/templates/`

## Public-safe boundary

Do not add:

- raw private SOUL files
- tokens, cookies, TOTP secrets, backup codes, private keys
- raw session logs or private memory DBs
- private Discord IDs / private channel maps
- wallet secrets or live private ops
- exact private credential paths
- intimate or family private details

Publish the pattern, not the secrets.
