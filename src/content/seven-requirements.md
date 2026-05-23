## What This Page Decides

This page turns the idea of an agentic company into seven tests.

If your setup passes these tests, you have the beginning of a governed company of agents. If it fails them, you may still have useful assistants, but you should not give them serious access yet.

The seven requirements are:

1. agent identity;
2. controlled money access;
3. real end-to-end work;
4. verifiable records;
5. specialized agents working together;
6. human review;
7. legal and compliance responsibility.

Use them as a gate before you add more tools, accounts, or background jobs.

## The Seven-Requirement Test

| Requirement | Plain question | Minimum passing standard |
|---|---|---|
| Agent identity | Do important agents have stable jobs, names, and access rules? | Each serious agent has a written role contract. |
| Controlled money access | Can agents trigger costs or payments safely? | Budgets, limits, and approval rules exist before spend. |
| Real work | Do agents complete business steps, not just suggest them? | Output changes state or prepares a reviewable state change. |
| Verifiable records | Can the human inspect what happened later? | Each important action leaves a proof record. |
| Specialized agents | Are jobs separated by risk and skill? | One generic bot does not own every job. |
| Human review | Do sensitive actions stop for the owner? | Public, destructive, money, credential, legal, and production actions have gates. |
| Responsibility | Is accountability still clear? | The human/company remains responsible for claims, money, data, and conduct. |

A setup does not need to be perfect on day one. But it needs to know which requirements are still missing. Hidden gaps become expensive later.

## Requirement 1: Agent Identity

An agent identity is not a vibe. It is a written job boundary.

A serious identity answers:

- who this agent serves;
- what job it owns;
- what tools it can use;
- what accounts it can touch;
- what memory it should keep;
- what it must never store or reveal;
- when it must ask first;
- what proof it must return;
- how it gets paused, reviewed, or retired.

Weak identity:

```text
You are a helpful finance assistant.
```

Strong identity:

```text
Finance agent reconciles payment exports against the company ledger.
It may read payment reports and write draft ledger entries.
It may not send money, change pricing, contact customers, or access social accounts.
It must return a variance table, source file names, and review notes.
```

Identity reduces blast radius. If the docs agent makes a mistake, it should not be able to touch billing. If the research agent reads a hostile web page, it should not be able to change account access.

## Requirement 2: Controlled Money Access

Agents can create cost even when they never hold a wallet. They can call paid APIs, run long jobs, launch ads, buy tools, trigger cloud usage, or request contractors.

Money access needs a leash.

| Money action | Default rule | Proof required |
|---|---|---|
| Read billing exports | Allowed for finance/review roles. | Source file and summary. |
| Estimate spend | Allowed. | Assumptions and calculation. |
| Use paid API within small budget | Allowed only if budget exists. | Job ID, cost estimate, final cost. |
| Subscribe to a tool | Human review. | Reason, price, renewal date, owner approval. |
| Pay vendor or contractor | Human review. | Invoice, amount, approval, receipt. |
| Move wallet funds | Human review plus hard limits. | Address category, amount, approval, transaction record. |

Do not sell “autonomous spending” as freedom. Spending agents are delegated financial actors with narrow rules. If the rules are not written, the answer is no.

## Requirement 3: Real End-to-End Work

An agent doing real work has a defined input, a defined output, and a state change or review package.

Not enough:

```text
Here are some ideas for fixing support.
```

Better:

```text
I categorized 42 support messages, drafted 18 replies, marked 5 as high-risk, attached the source message IDs, and queued the drafts for review.
```

Real work does not always mean fully automatic final action. Preparing a complete, reviewable package is real work when the final step is sensitive.

Use this rule:

| Work type | Real output |
|---|---|
| Research | Cited brief, source table, confidence notes. |
| Docs | Changed markdown file, source map, build result. |
| Finance | Reconciliation table, variance notes, ledger draft. |
| Support | Categorized tickets, draft replies, escalation flags. |
| Product | Issue breakdown, acceptance criteria, risk notes. |
| Growth | Campaign draft, audience, approval payload, result record. |

The agent is valuable when the human reviews a finished work package, not when the human has to finish the agent’s thought.

## Requirement 4: Verifiable Records

Every important action needs a record that survives the chat.

A record should answer:

```text
Who acted?
What changed?
Why was it done?
What source was used?
Was approval required?
Who approved?
Where is the result?
How can it be checked later?
```

A simple record can look like this:

```text
Action record
Actor: docs-agent
Task: rewrite chapter 4
Source: public IA note + current markdown file
Approval required: no, local draft only
Changed files: src/content/seven-requirements.md
Verification: build passed, no private leak scan hits
Result: ready for human review
```

Do not make recordkeeping mystical. A good issue comment, ledger row, file diff, receipt, or source table is enough if it lets the human reconstruct what happened.

## Requirement 5: Specialized Agents Working Together

One giant agent becomes a confused liability. Split work by job and risk.

| Agent type | Owns | Must not own |
|---|---|---|
| Support | human state, continuity, inbox triage, escalation. | money movement, production changes, legal claims. |
| Execution | planning, routing, verification, decision pressure. | becoming final owner or approving its own high-risk actions. |
| Research | source collection, synthesis, citations. | public publishing or spending. |
| Finance | reconciliation, budgets, variance notes. | social media, customer promises, credential recovery. |
| Docs | guides, templates, source alignment. | billing, wallets, account security. |
| Review | checking claims, proof, safety gates. | doing the same work it reviews. |

Specialization is not bureaucracy. It is containment. When a low-risk agent fails, the failure stays small.

## Requirement 6: Human Review

The human does not need to approve everything. That would kill the point. But the human must approve the actions that can cause real damage.

Use this gate map:

| Action class | Default autonomy |
|---|---|
| Read-only inspection | Usually allowed. |
| Drafting | Allowed. |
| Reversible local file change | Allowed with diff and rollback path. |
| Public post or email | Human review. |
| Destructive change | Human review and backup. |
| Money or wallet action | Human review and hard limit. |
| Credential or account recovery | Human only. |
| Legal, compliance, or contract claim | Human review. |

The review gate should show the payload, risk, proof, and exact approval phrase. A vague “approve?” button is not enough for serious actions.

## Requirement 7: Legal and Compliance Responsibility

Agents do not remove responsibility. They move work. The human or company still carries the consequences.

If an agent sends a false claim, mishandles customer data, violates a license, pays the wrong vendor, or publishes a harmful message, the excuse “the AI did it” will not protect the company.

That means the system must be designed around accountability:

- customer data stays in approved tools;
- legal claims require review;
- payment actions require records;
- public claims require source checking;
- deletion requests require confirmation and proof;
- sensitive data never enters public prompts or templates.

Responsibility is not a moral speech. It is a design constraint.

## The Requirement Scorecard

Copy this into your planning note.

```text
Seven Requirement Scorecard

1. Agent identity
Current state:
Missing:
Next fix:

2. Controlled money access
Current state:
Missing:
Next fix:

3. Real end-to-end work
Current state:
Missing:
Next fix:

4. Verifiable records
Current state:
Missing:
Next fix:

5. Specialized agents
Current state:
Missing:
Next fix:

6. Human review
Current state:
Missing:
Next fix:

7. Responsibility
Current state:
Missing:
Next fix:
```

The scorecard should produce work. If a requirement is weak, create the next fix before giving the agent more power.

## Done When

You are ready for agent identity design when you can state:

- which serious agents need stable identities;
- which actions can create cost;
- which workflows produce real outputs;
- where proof records live;
- which jobs need separate agents;
- which actions require review;
- which legal or compliance risks must never be delegated casually.

If any answer is missing, do not add more tools. Fix the requirement gap first.
