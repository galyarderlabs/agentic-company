## What This Page Decides

This page explains where Hermes Agent fits in the build.

Hermes Agent is the technical engine that gives agents tools, profiles, memory hooks, delegation, scheduled work, and delivery channels. This page is not a replacement for the official Hermes Agent documentation; it explains the role Hermes plays inside this operating stack.

By the end of this page, you should have a Hermes Setup Plan: profiles, secrets, tools, approval gates, scheduled jobs, and proof checks.

## What Hermes Agent Does Here

Hermes Agent is used to turn written agent contracts into working agents.

In this guide, Hermes helps with:

- profile-based agent identities;
- tool access;
- MCP connections;
- file and terminal work;
- memory and skill loading;
- background jobs;
- delegation to subagents;
- delivery through chat or email channels;
- verification before completion.

Keep the real name: Hermes Agent. It is a real technical part of the setup. Treat credentials, local account files, token dumps, cookies, and raw profile contents as operational assets with controlled access.

## Setup Principle

Separate four things:

| Part | What it means | Example |
|---|---|---|
| Profile | The agent’s identity and behavior rules. | `docs-agent`, `finance-agent`, `support-agent`. |
| Config | Non-secret settings. | enabled tools, model provider name, gateway setting. |
| Secrets | Keys and credentials. | stored in `.env` or a private vault, never in docs. |
| State | Memory, tasks, logs, records. | notes, Paperclip issues, ledger rows, build outputs. |

If these are mixed together, you cannot review, restore, or rotate access safely.

## Step 1: Define Profiles

Start with one or two profiles. Do not create ten agents on day one.

Good first profiles:

- support agent for continuity and human-cost checks;
- execution agent for routing, challenge, and verification;
- docs or research agent for low-risk useful work.

Each profile should point back to the Agent Responsibility Contract from the previous page.

Profile checklist:

```text
Profile name:
Primary job:
Allowed tool groups:
Memory sources:
Approval gates:
No-publish rules:
Proof format:
Shutdown rule:
```

The profile is not the place for secrets. It is the place for rules.

## Step 2: Separate Config From Secrets

A safe setup keeps ordinary settings separate from sensitive material.

Config may include:

- enabled tool groups;
- model provider selection;
- profile names;
- delivery channels;
- scheduling rules;
- MCP server definitions without secret values.

Secrets include:

- API keys;
- bot tokens;
- OAuth tokens;
- cookies;
- passwords;
- TOTP secrets;
- wallet keys;
- private account recovery material.

Secrets should be stored outside tracked config and rotated when exposed. Examples should use placeholders, never live values.

Bad public example:

```text
DISCORD_TOKEN=real_token_here
```

Good public example:

```text
DISCORD_TOKEN=<store privately; do not commit>
```

## Step 3: Give Tools Slowly

Tools are capabilities. Add them by need, not excitement.

| Tool access | Safe first use | Risk |
|---|---|---|
| File read | inspect docs and source notes. | private file exposure if paths are too broad. |
| File write | edit draft docs or notes. | overwriting important files. |
| Terminal | run builds and checks. | destructive shell commands. |
| Browser | inspect public pages. | session leakage, accidental account actions. |
| Google/Notion/Linear | work with business surfaces. | external writes or private data exposure. |
| Paperclip | create tasks, approvals, activity records. | wrong company state if misused. |
| MCP tools | connect to specialized services. | permission drift across agents. |

Start with read-only where possible. Add write access only when the proof and rollback path are clear.

## Step 4: Connect MCP Deliberately

MCP is one way to let agents use external tools in a controlled way.

A public setup plan should answer:

```text
Which MCP server is connected?
Which agent may use it?
Which actions are read-only?
Which actions can write?
Which writes require human review?
What proof does the tool return?
How is access revoked?
```

Example:

```text
MCP tool: Paperclip
Allowed agent: execution-agent
Allowed actions: list issues, create issue drafts, comment with evidence
Requires approval: closing strategic issues, approving external sends
Proof: issue ID, comment URL or activity record
Revocation: remove tool from profile and rotate token if needed
```

Do not give every profile every tool. Tool access should follow the role contract.

## Step 5: Add Scheduled Work Carefully

Scheduled work makes the company feel alive. It also creates risk because it runs when the human is not watching.

Safe scheduled jobs:

- daily source scan;
- weekly docs link check;
- cost summary;
- stale task report;
- memory health check;
- service status check.

Dangerous scheduled jobs:

- public posting;
- payments;
- credential changes;
- destructive cleanup;
- production deploys;
- customer replies without review.

Scheduled job contract:

```text
Job name:
Agent/profile:
Schedule:
Input source:
Allowed actions:
Forbidden actions:
Cost limit:
Output destination:
Failure alert:
Proof record:
```

If the job cannot report failure, it should not run unattended.

## Step 6: Build Approval Gates

Hermes can prepare work, but sensitive actions need a hard stop.

Approval payload should include:

- action type;
- target;
- reason;
- risk;
- exact payload;
- proof that prerequisites passed;
- approval phrase;
- expiry time;
- rollback plan when relevant.

Example:

```text
Approval request
Action: publish docs page
Target: /docs/agent-memory/
Reason: updated memory routing guide
Risk: public content error or private leak
Prerequisite proof: build passed, private scan empty
Approve with: APPROVE publish-docs-agent-memory
Expires: 30 minutes
```

The agent should not accept vague approvals like “yeah go ahead” for high-risk actions.

## Step 7: Package For Recovery

If your laptop dies, the company should not lose its brain.

Public-safe recovery plan:

- version controlled docs and profile templates;
- private encrypted backup for secrets, if used;
- exported task/ledger state when possible;
- list of required services;
- restore checklist;
- test restore on a clean machine or container.

Do not publish the actual private backup path, secret file names, token values, or raw session archives.

## Hermes Setup Plan

Copy this before installing or configuring anything.

```text
Hermes Setup Plan

1. First profile:
2. Profile job:
3. Allowed tools:
4. Tools denied:
5. MCP connections:
6. Secrets location policy:
7. Memory sources:
8. Approval actions:
9. Scheduled jobs:
10. Cost limit:
11. Proof record format:
12. Failure alert destination:
13. Recovery plan:
```

## Done When

You are ready to connect communication channels when:

- each active profile has one job;
- secrets are separate from config;
- tool access matches the profile contract;
- MCP connections have read/write rules;
- scheduled jobs have cost and failure limits;
- approval payloads are defined;
- recovery does not depend on memory alone;
- no private secret or exact private state appears in public docs.
