<p align="center">
  <img src="public/logo.png" width="160" alt="Agentic Company">
</p>

<h1 align="center">Agentic Company</h1>

<p align="center">A practical operating guide for building your own agentic company.</p>

<p align="center">
  <a href="https://github.com/galyarderlabs/agentic-company"><img src="https://img.shields.io/badge/status-public%20guide-black" alt="Public Guide"></a>
  <a href="https://github.com/galyarderlabs/galyarder-framework"><img src="https://img.shields.io/badge/framework-galyarder-black" alt="Galyarder Framework"></a>
  <a href="https://agentic-company.galyarderos.workers.dev"><img src="https://img.shields.io/badge/deploy-cloudflare%20workers-f38020" alt="Cloudflare Workers"></a>
</p>

<p align="center">
  Agentic company · Operating guide · EN / ID
</p>

---

Most people still use agents like smarter chat boxes: one task, one prompt, one result. That is useful, but it is not a company.

An agentic company needs structure. Roles. Memory. Accounts. Tools. Approval gates. Money boundaries. Proof. Review. The point is not to collect agents. The point is to build an operating layer where agents can do real work without turning the business into chaos.

This guide is the public version of that operating model.

---

## The idea

An agentic company is not a SaaS feature with an AI button. It is a working system where agents have jobs, context, access, constraints, and evidence requirements.

The human stays in command. Agents do the work. The company keeps the record.

---

## What is inside

**Operating principles**  
The manifesto, reality check, and business-first framing before any technical setup.

**Agent foundations**  
Identity, memory, communication, support work, execution work, and agent-to-agent relay.

**Company controls**  
Accounts, access, tools, MCP, Paperclip control, approval gates, security, maintenance, and audit proof.

**Money and business models**  
Wallets, spending boundaries, ledger discipline, and agent-to-agent work models.

**Build sequence**  
A setup playbook and roadmap for turning the guide into a working operating layer.

---

## Quickstart

```bash
git clone https://github.com/galyarderlabs/agentic-company.git
cd agentic-company
pnpm install
pnpm dev
```

Open **http://localhost:8788**

**Requirements:** Node.js 20+, pnpm 9+

---

## Deploy

```bash
pnpm deploy
```

The project builds static Astro output and deploys it to Cloudflare Workers static assets through Wrangler.

---

## Development

```bash
pnpm dev             # Start Astro dev server
pnpm build           # Type check and build static site
pnpm astro:preview   # Preview built Astro output
pnpm worker:preview  # Preview with Wrangler locally
pnpm deploy          # Build and deploy to Cloudflare Workers
```

---

## Content

Source docs live in `src/content/`. Indonesian docs live in `src/content/id/` and are loaded through the i18n content manifest.

The site includes:

- `/` — guide overview
- `/docs/manifesto/` — starting point
- `/docs/reality-check/` — category boundary
- `/docs/setup-playbook/` — implementation sequence
- `/docs/build-roadmap/` — roadmap
- `/templates/` — reusable operating templates

---

## Public boundary

This repo publishes the pattern, not private operating secrets.

Do not commit tokens, cookies, private session logs, wallet secrets, backup codes, private credentials, private memory databases, or internal identity maps.

---

## Related

[Galyarder HQ](https://github.com/galyarderlabs/galyarder-hq) is the control plane for AI-native companies.  
[Galyarder Framework](https://github.com/galyarderlabs/galyarder-framework) provides specialized agents and skills for operating them.

---

<p align="center">
  Build your own agentic company.<br>
  Keep the human in command. Make the work provable.
</p>
