## What This Page Decides

This page explains how a Paperclip-like company control system fits into an agentic company.

Agents need a shared place to see goals, tasks, ownership, approvals, activity, cost, and evidence. Without that shared state, every agent becomes a separate chat window with its own version of reality.

By the end of this page, you should have a Company Control Map: what state lives in Paperclip, how tasks are claimed, how approvals work, how cost is watched, and what proof is required before work counts as complete.

## What Paperclip Holds

Paperclip is the company state surface. In a public guide, treat “Paperclip” as the concrete example of a company control tool, not as a magic replacement for judgment.

It can hold:

- strategic goals;
- projects;
- issues/tasks;
- agent assignments;
- status: todo, in progress, blocked, done;
- approvals;
- comments and review notes;
- activity history;
- cost summary;
- agent roster;
- task evidence.

If work is important, it should appear in the company state. Chat alone is not enough.

## Task Packet

A task should be specific enough that an agent can work without inventing the business context.

```text
Task Packet

Title:
Objective:
Owner/agent:
Priority:
Inputs:
Allowed actions:
Forbidden actions:
Output format:
Success criteria:
Proof required:
Review gate:
Next action if accepted:
```

Example:

```text
Title: Rewrite agent-memory guide page
Objective: make the page actionable and public-safe
Owner/agent: docs-agent
Priority: high
Inputs: source IA note, current markdown, quality bar pages
Allowed actions: edit local source markdown, run build/checks
Forbidden actions: deploy, rename slug, expose private paths
Output format: changed file and verification report
Success criteria: Memory Routing Map exists, no private leak scan hits, build passes
Proof required: file path, scan result, build output
Review gate: human accepts before deploy
Next action if accepted: propagate pattern to next docs batch
```

A vague task creates vague work. A clear task packet creates a reviewable artifact.

## Atomic Checkout

When multiple agents work from one queue, tasks need ownership.

Rule:

```text
An agent must claim a task before working. If another agent owns it, do not modify it unless assigned as reviewer or helper.
```

Atomic checkout prevents two agents from rewriting the same file, replying to the same customer, or spending time on duplicate work.

## Approval Queue

The approval queue is where sensitive actions wait.

Approval requests should include:

- action;
- target;
- reason;
- risk;
- payload preview;
- proof already checked;
- cost if any;
- rollback path;
- approval phrase or UI action;
- expiry.

Approvals are needed for public sends, destructive changes, money movement, account/security changes, legal commitments, and production deploys.

Routine internal drafts should not flood the human. A control system is useful only if the human can still pay attention.

## Activity And Cost

Agent work consumes money and attention. Cost visibility is part of control.

Track:

- which agent acted;
- what task it worked on;
- how many attempts it made;
- tool calls or job runs;
- model/API spend where available;
- approvals requested;
- blockers;
- final artifact.

Cost report template:

```text
Agent Cost Snapshot

Period:
Agent:
Tasks worked:
Completed:
Blocked:
Approx cost:
Unusual spikes:
Human approvals used:
Action needed:
```

A cost spike without artifact is a warning.

## Agent Roster

The company control system should show who exists and why.

```text
Agent Roster Entry

Name:
Role:
Primary job:
Allowed task types:
Forbidden task types:
Tools/MCP access:
Current status:
Review cadence:
Retirement condition:
```

If an agent has no active job, retire or archive it. Zombie agents create access risk and routing confusion.

## Connector Principles

Paperclip-like state becomes stronger when connected to real work surfaces.

Possible connectors:

| Connector | Use |
|---|---|
| GitHub Issues/PRs | link code work to task state. |
| Discord/Slack | send alerts and approval requests. |
| Telegram/email | high-priority owner notification. |
| Obsidian/markdown | source notes and decisions. |
| Google Workspace | docs, calendar, inbox workflows. |
| NotebookLM/source tools | source-heavy research. |
| Hermes Agent | agent execution and tool use. |

Connector rule: connect for evidence and control, not because integration looks impressive.

## Company Control Map

Copy this.

```text
Company Control Map

1. Goals live in:
2. Tasks/issues live in:
3. Approval queue lives in:
4. Activity/audit lives in:
5. Cost summary lives in:
6. Agent roster lives in:
7. Human command channel:
8. Agent checkout rule:
9. Task packet format:
10. Approval request format:
11. Proof required before done:
12. Stale task sweep rule:
13. Cost spike rule:
14. Agent retirement rule:
```

## Failure Modes

| Failure | Symptom | Fix |
|---|---|---|
| shadow work | agents do work outside task state. | work counts only when task is updated with proof. |
| self-approval | agent approves its own sensitive action. | approval endpoint requires human authority. |
| stale task | issue stays in progress forever. | stale sweep and owner reassignment. |
| approval fatigue | human gets too many approval requests. | raise gate threshold for routine internal work. |
| state desync | GitHub says merged, Paperclip says in progress. | reconcile external systems against task state. |
| zombie agent | retired profile still receives tasks. | roster review and access revocation. |

## Red-Team The Control System

```text
Checkout test:
Two agents try to claim one task. Expected: only one owner wins.

Approval test:
Agent tries to perform a protected action. Expected: action waits in approval queue.

Self-approval test:
Agent tries to approve its own money/public action. Expected: blocked.

Cost spike test:
Agent loops on a task. Expected: cost alert and pause.

State desync test:
External PR is closed but task remains active. Expected: reconcile job flags mismatch.
```

## Done When

Company control is ready when:

- goals, tasks, approvals, activity, costs, and agent roster have homes;
- agents claim work atomically;
- task packets include proof requirements;
- sensitive actions enter approval queue;
- cost spikes are visible;
- stale work gets swept;
- external surfaces reconcile back to company state;
- work outside the control system does not count as complete.
