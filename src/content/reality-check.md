## What This Page Decides

This page separates useful agentic software from an agentic company.

The distinction matters because the wrong category creates the wrong expectations. If you are using an app with AI agents inside it, that can be valuable. But if the app owns the memory, accounts, logs, and task history, you are renting capability. You have not built a company of agents around yourself.

By the end of this page, you should be able to label your current setup honestly:

```text
assistant → useful agent → team of agents → agentic company
```

Do not overclaim. The point is not to sound advanced. The point is to know what you actually control.

## The Plain Difference

Agentic SaaS is a product you use. An agentic company is a working company shape you own and govern.

Agentic SaaS can help you write, research, code, automate tickets, summarize calls, or manage tasks inside a vendor’s product. That is useful. It may save hours. It may be the right first step.

But it usually has a boundary: the agents live inside the vendor’s app, act through your login, store memory in the vendor’s system, and stop working when access is removed.

A real agentic company needs agents tied to business reality:

- customers;
- money;
- accounts;
- approvals;
- records;
- repeatable work;
- risk rules;
- human review;
- legal and financial responsibility.

If those parts are missing, you may have a strong tool. You do not yet have the company pattern this guide teaches.

## Category Matrix

Use this matrix before choosing tools or writing agent profiles.

| Question | Agentic SaaS answer | Agentic company answer |
|---|---|---|
| Who owns the agent’s memory? | The vendor app usually stores it. | You define where memory lives and what each memory type is for. |
| Who owns the account access? | Often the human grants broad OAuth access. | Accounts are scoped by role: user-owned, agent-owned, or company-owned. |
| What happens when a login is revoked? | The agent often disappears with the app connection. | Work pauses safely, records remain, and recovery paths exist. |
| Can the agent spend money? | Usually no, or only through human manual action. | Only inside budgets, limits, and approval rules. |
| Can the agent prove work happened? | You get a task state or app log. | You get a proof record tied to the action. |
| Can agents work together? | Only inside the product’s design. | Handoffs are defined by packet, purpose, reply rule, and verification. |
| Who carries legal responsibility? | Still the human or company account owner. | Still the human or company owner; the guide makes that explicit. |

The strongest line is ownership of state. If the record of work exists only inside a vendor screen, your company memory is rented.

## The Four Tests

Run these tests on your current setup.

### 1. The Revocation Test

Ask: if I revoke the main app login or OAuth token, what survives?

Good signs:

- task history remains in a place you can export or own;
- source files, notes, approvals, and ledgers still exist;
- agents do not keep trying unsafe actions after losing access;
- the human receives a clear failure notice.

Bad signs:

- every agent disappears;
- pending work is invisible;
- no proof can be exported;
- the only recovery path is “log back into the app and hope.”

This does not mean vendor tools are bad. It means you should not confuse rented work state with owned work state.

### 2. The State-Change Test

Ask: did the agent change anything real, or only produce text?

Text can be valuable, but the company runs on state changes:

- invoice issued;
- customer reply sent after approval;
- bug fixed and tested;
- source brief delivered with citations;
- task moved with reason;
- payment recorded;
- public draft approved and published;
- access granted or revoked.

If the AI only creates words and the human performs every state change manually, you have assistance, not delegated work.

### 3. The Proof Test

Ask: can I inspect proof without trusting the agent’s summary?

A good proof record should answer:

| Field | Example |
|---|---|
| Actor | research-agent, docs-agent, finance-agent |
| Action | drafted brief, reconciled invoice, updated guide |
| Source | URL list, issue ID, customer email, receipt |
| Approval | not required, queued, approved by owner |
| Result | final URL, file diff, ledger row, receipt ID |
| Time | timestamp or log entry |

If the proof is just “the agent said it finished,” the work is still unverified.

### 4. The Budget Test

Ask: can an agent spend or trigger cost, and what stops it?

Even agents with no wallet can spend money indirectly through API calls, compute, paid tools, ads, contractors, cloud services, or excessive retries.

A mature setup has:

- daily or weekly cost limits;
- per-agent budget rules;
- approval thresholds;
- alerts before damage gets large;
- a hard stop for runaway loops;
- records of what caused the spend.

If your setup has no cost boundary, it is not ready for serious autonomy.

## Current Reality

Most current “agentic company” products are closer to agentic SaaS. They embed agents inside useful work surfaces: CRMs, help desks, coding tools, data tools, workflow tools, and internal apps.

That is not a failure. It is a stage.

A practical maturity path looks like this:

| Stage | What it means | Risk |
|---|---|---|
| Assistant | AI answers questions or drafts text. | Low proof, low continuity. |
| Useful agent | AI uses tools for one narrow workflow. | Tool access may be too broad. |
| Team of agents | Several role agents coordinate under human review. | Handoffs and memory can drift. |
| Agentic company | Agents connect to business work, accounts, records, budgets, and approvals. | Legal, money, and security risk must be governed. |

Do not rush the last stage for status. Every stage must earn its access.

## What A Real Agentic Company Requires

A real agentic company requires seven serious primitives. Later pages will unpack them.

| Requirement | Plain meaning | Minimum standard |
|---|---|---|
| Agent identity | Important agents have stable names, jobs, and access scopes. | A role contract exists. |
| Controlled money access | Agents may cause spending only inside limits. | Budget and approval rule exists. |
| Real work | Agents complete business steps, not just suggestions. | Output changes state or prepares review. |
| Verifiable records | Work leaves inspectable evidence. | A proof record exists. |
| Specialized roles | Agents do not collapse into one generic bot. | Each agent has one main job. |
| Human review | Sensitive moves stop for the owner. | Approval classes are defined. |
| Responsibility | The human/company remains accountable. | No claim that agents remove liability. |

This is why the guide starts from business reality, not agent names. Without business reality, you cannot know what identities, records, budgets, or gates are needed.

## How To Use SaaS Without Lying To Yourself

You can still use agentic SaaS. The smart path is to treat it as a component, not the whole company.

Use vendor tools for:

- early experimentation;
- low-risk drafting;
- research collection;
- prototype workflows;
- temporary speed;
- tasks where export is easy and mistakes are reversible.

Do not let vendor tools become the only place where company truth lives.

When a SaaS workflow proves useful, extract the pattern:

1. What input does it need?
2. What output does it produce?
3. What decision does it make?
4. What access does it require?
5. What can go wrong?
6. What proof should exist?
7. Which agent should own it later?

This turns a rented workflow into a candidate company workflow.

## Scorecard

Fill this out honestly.

```text
Current setup name:
Main work it helps with:
Who owns the memory:
Who owns the accounts:
What happens if the vendor login is revoked:
What actions can happen without approval:
What money/cost can be triggered:
What proof exists after work is done:
What the human still does manually:
Current stage: assistant / useful agent / team of agents / agentic company
Next missing primitive:
```

The goal is not to shame the early stage. The goal is to stop pretending stage one is stage four.

## Done When

You are ready for the next page when you can state:

- which parts of your setup are rented;
- which records you actually own;
- which actions create real business state;
- which costs can be triggered;
- which approvals are missing;
- what proof exists after work is done;
- which missing primitive blocks the next stage.

Then you can start where serious builders start: the business itself.
