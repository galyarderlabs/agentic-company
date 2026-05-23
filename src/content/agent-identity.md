## What This Page Decides

This page turns an agent from a vague assistant into a job with boundaries.

Do not start with personality. Start with responsibility. A serious agent identity tells the system what the agent owns, what it can use, what it must never do, what it should remember, when it must stop, and what proof it must return.

By the end of this page, you should have one copyable Agent Responsibility Contract.

## Identity Is A Work Contract

A weak identity sounds like this:

```text
You are a world-class growth expert. Be proactive and help the founder win.
```

That may create energetic text. It does not create safety.

A strong identity sounds like this:

```text
Growth research agent finds and summarizes public sources about distribution channels.
It may read web pages and company notes.
It may not post publicly, send messages, spend money, or edit customer data.
It returns a source table, recommended experiments, risk notes, and open questions.
```

The difference is enforceability. The second identity can be reviewed, tested, and improved. The first can only be vibes-managed.

## The Responsibility Contract

Use this template for every serious agent.

```text
Agent Responsibility Contract

1. Name:
2. Purpose:
3. Human owner:
4. Primary job:
5. Non-goals:
6. Allowed inputs:
7. Allowed tools:
8. Allowed accounts:
9. Allowed autonomous actions:
10. Actions requiring approval:
11. Forbidden actions:
12. Memory policy:
13. No-publish / secret policy:
14. Output format:
15. Proof required:
16. Escalation triggers:
17. Shutdown / handoff rule:
18. Review cadence:
```

Do not leave “non-goals” blank. Non-goals are what keep the agent from becoming a universal helper with hidden access.

## How To Fill The Contract

### Purpose

Write why the agent exists in one sentence.

Bad:

```text
Help with finance.
```

Good:

```text
Reconcile weekly payment exports against the ledger and flag mismatches for human review.
```

### Primary Job

The primary job should map to a business loop from the previous page.

If the business loop is “weekly source scan,” the agent is not a general research companion. It is a source collection and ranking agent. Its job is narrower than its intelligence.

### Allowed Inputs

Inputs define what the agent may read.

Examples:

- public web sources;
- a specific docs folder;
- exported payment reports;
- customer tickets with sensitive fields removed;
- a task board issue;
- a source notebook;
- a draft file.

If the input includes private or customer data, the contract must say how the agent handles it.

### Allowed Tools and Accounts

Tools are hands. Accounts are doors. Give fewer than the agent asks for.

| Agent | Tools/accounts it may need | Tools/accounts it should not have |
|---|---|---|
| Research | web search, source reader, notes write access. | billing, social posting, production deploy. |
| Docs | file read/write in docs, build command, source notes. | payments, account recovery, customer database. |
| Finance | billing exports, ledger write draft, calculator. | public social, website deploy, private messages. |
| Support | ticket read, draft reply queue, escalation channel. | refunds without gate, legal promises, credential tools. |
| Review | read access to outputs, proof records, source files. | final action authority over its own reviewed work. |

A powerful model with narrow tools is safer than a weaker model with broad access.

## Approval Rules

Every identity needs a clear approval map.

| Action | Rule |
|---|---|
| Read permitted sources | Allowed. |
| Draft local output | Allowed. |
| Edit draft file | Allowed if reversible. |
| Mark task complete | Allowed only after proof exists. |
| Contact customer | Requires review. |
| Publish publicly | Requires review. |
| Spend money | Requires budget rule and review above threshold. |
| Delete data | Requires backup and review. |
| Change credentials | Human only. |

Do not use phrases like “be careful.” Careful is not a permission system. Write the exact stop point.

## Memory Policy

The identity must define what the agent should remember and what it must not remember.

Good memory:

- stable job boundaries;
- user communication preferences;
- recurring procedures;
- source decisions;
- approved business rules;
- known failure lessons.

Bad memory:

- raw secrets;
- cookies or tokens;
- private keys;
- temporary task progress;
- old prices after pricing changed;
- sensitive customer details outside approved systems;
- intimate human details that do not help the job.

Memory is not a trash bin. It is a small set of facts that reduce future steering.

## Output Format

If the output format is vague, review becomes expensive.

Example output contract for a research agent:

```text
Output must include:
- 5–12 sources with URLs and dates checked;
- one-paragraph summary per source;
- confidence rating: high / medium / low;
- claims that need human review;
- recommended next action;
- rejected sources and why they were rejected.
```

Example output contract for a docs agent:

```text
Output must include:
- changed file paths;
- short summary of content change;
- source notes used;
- build/check command and result;
- remaining uncertainty;
- no private data introduced.
```

The clearer the output, the less the human has to babysit.

## Escalation And Shutdown

Agents need failure behavior before they fail.

Escalation triggers can include:

- source conflict;
- missing required input;
- tool returns repeated errors;
- cost estimate exceeds limit;
- user asks for forbidden action;
- private data appears in unsafe context;
- output cannot be verified;
- agent confidence is low on a high-impact decision.

Shutdown rule example:

```text
If three consecutive tool calls fail, stop. Do not invent a result. Write a failure note with the tool name, error, attempted recovery, and next safe action.
```

A safe agent knows when to stop.

## Filled Example: Docs Agent

```text
Agent Responsibility Contract

1. Name: docs-agent
2. Purpose: keep public guide pages clear, source-aligned, and safe.
3. Human owner: company owner or docs lead.
4. Primary job: rewrite and verify documentation pages from approved source notes.
5. Non-goals: do not change product code, pricing, account settings, or public posts.
6. Allowed inputs: source notes, current markdown pages, docs metadata, build output.
7. Allowed tools: read files, write docs files, run docs build, scan content.
8. Allowed accounts: none by default.
9. Allowed autonomous actions: edit local docs source and run local checks.
10. Actions requiring approval: publish, deploy, delete pages, rename slugs.
11. Forbidden actions: expose private paths, secrets, raw memory, or customer data.
12. Memory policy: remember durable docs rules and source alignment lessons.
13. No-publish policy: never publish tokens, cookies, private IDs, wallet keys, intimate memory, or exact private setup.
14. Output format: changed files, source concepts covered, checks run, remaining gaps.
15. Proof required: build result, scan result, rendered page check.
16. Escalation triggers: source conflict, build failure, unsafe content hit.
17. Shutdown rule: stop before publishing or deleting active pages.
18. Review cadence: review after every major content batch.
```

## Contract Review Checklist

Before using an agent, check:

- Does the purpose map to a real business loop?
- Are the non-goals explicit?
- Are tools and accounts minimal?
- Are approval actions listed by class?
- Is the output format concrete?
- Is proof required before “done”?
- Does the agent know when to stop?
- Is there a review cadence?

If the contract cannot be tested, it is not done.

## Done When

You are ready for Hermes Agent setup when at least one serious agent has a written contract with:

- one primary job;
- allowed inputs;
- allowed tools;
- account boundaries;
- memory policy;
- approval gates;
- output format;
- proof requirement;
- escalation and shutdown rules.

Do not build the technical engine around a vague identity. The engine will only make the vagueness faster.
