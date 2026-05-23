## What This Page Decides

This page decides who owns each account and what agents may touch.

Agents can only do real work when they can access real surfaces: email, code, task boards, calendars, social accounts, wallets, cloud tools, and company documents. Access creates leverage. It also creates blast radius.

By the end of this page, you should have an Access Registry: account category, owner, agent permissions, credential location policy, approval rules, and revocation path.

## Account Categories

Use three categories.

| Category | Meaning | Agent access |
|---|---|---|
| User-owned | personal accounts belonging to the human. | no agent access by default. |
| Company-owned | business accounts shared by the company. | scoped access by role. |
| Agent-owned | accounts created for a specific agent role. | agent may operate within written rules. |

Examples:

| Surface | Recommended category |
|---|---|
| primary personal email | user-owned. |
| company domain email | company-owned. |
| support inbox | agent-owned or company-owned with role access. |
| GitHub org | company-owned. |
| GitHub machine user | agent-owned. |
| public social brand account | company-owned, review-gated. |
| bot account | agent-owned. |
| bank account | company-owned, human-only or read-only agent access. |
| wallet | company-owned or agent-budget wallet with strict limits. |

Do not let convenience decide access. Let risk decide access.

## Access Contract

Before granting access, write this.

```text
Access Contract

1. Account/surface:
2. Category: user-owned / company-owned / agent-owned
3. Human owner:
4. Agent allowed:
5. Purpose:
6. Permission: read / draft / write / admin
7. Allowed actions:
8. Forbidden actions:
9. Approval required for:
10. Credential storage policy:
11. Session/cookie policy:
12. MFA / recovery policy:
13. Revocation path:
14. Review cadence:
15. Proof required after use:
```

If the revocation path is unclear, do not grant access.

## Permission Levels

Use simple levels.

| Permission | Meaning | Example |
|---|---|---|
| none | agent cannot touch it. | personal email. |
| read | agent can inspect allowed data. | billing export read-only. |
| draft | agent can prepare but not send. | email draft, social draft. |
| write | agent can change low-risk state. | add task comment, edit docs draft. |
| admin | agent can change permissions or billing. | almost always human-only. |

Agents should not have admin by default. Admin is not productivity. Admin is exposure.

## Credential Registry

A credential registry is a map, not a secret dump.

Public-safe registry shape:

```text
Credential Registry Entry

Account:
Category:
Used by:
Credential type:
Where stored: private vault / env var / managed secret / session store
Secret value: NEVER IN THIS FILE
Scope:
Created:
Expires/review date:
Revocation path:
Last verified:
Owner:
```

The registry tells you what exists and how to revoke it. It does not contain the secret itself.

## Session And Cookie Rules

Browser sessions are credentials. Treat them that way.

Rules:

- keep agent browser sessions separate from personal browser sessions;
- never publish or commit cookies;
- avoid raw cookie extraction guides in public docs;
- rotate sessions if logs expose them;
- use dedicated agent-owned accounts where possible;
- verify owner-state before acting on a platform;
- public actions still need review.

If a session file lets an agent act as a person, it is sensitive credential material.

## Money And Wallet Access

Money access needs stricter rules than ordinary account access.

| Money surface | Default agent permission |
|---|---|
| bank account | none or read-only export. |
| accounting report | read. |
| payment processor | read or draft refund, review-gated. |
| virtual card | small limit, vendor whitelist. |
| wallet | small funded wallet or policy wallet only. |
| payroll/tax/legal payment | human review. |

Agent spending should always have:

- amount cap;
- time limit;
- vendor/address whitelist where possible;
- approval threshold;
- ledger record;
- emergency revoke path.

## Revocation Drill

For every active agent, run this drill.

```text
Revocation Drill

Agent:
Accounts/tools it can access:
Fastest revoke path:
Expected revoke time:
What keeps working after revoke:
What breaks after revoke:
Proof that revoke worked:
Next credential review date:
```

If access cannot be revoked quickly, the access is too broad.

## Access Registry Template

```text
Access Registry

1. User-owned accounts agents never touch:
2. Company-owned accounts with scoped agent access:
3. Agent-owned accounts:
4. Financial surfaces:
5. Social/public surfaces:
6. Developer/cloud surfaces:
7. Credential storage policy:
8. Session policy:
9. MFA/recovery policy:
10. Approval gates:
11. Revocation drill schedule:
12. Orphaned/zombie account sweep:
```

## Failure Modes

| Failure | Symptom | Fix |
|---|---|---|
| god token | one token grants too much. | scoped token per agent/job. |
| personal-account bleed | agent acts through human personal identity. | agent-owned or company-owned accounts. |
| zombie account | retired agent still has access. | scheduled access sweep. |
| session leak | cookies or tokens appear in logs or repos. | redact, rotate, isolate sessions. |
| recovery trap | human loses access to MFA/recovery. | offline recovery plan and periodic test. |

## Done When

Accounts and access are ready when:

- every account has a category;
- every agent permission has a purpose;
- secrets are not stored in public docs or prompts;
- sessions are treated as credentials;
- money access has hard limits;
- public accounts have review gates;
- revocation paths are known;
- orphaned credentials are reviewed regularly.
