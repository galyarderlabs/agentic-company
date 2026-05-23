## What This Page Decides

This page decides how humans and agents communicate without turning the company into a chaotic chatroom.

The goal is not more messages. The goal is clear command, clean review, visible alerts, and durable records.

By the end of this page, you should have a Communication Map: where commands enter, where approvals happen, where alerts go, where records live, and how agents hand work to each other without looping.

## The Three Message Types

Every message should fit one of three types.

| Type | Purpose | Example |
|---|---|---|
| Command | Human gives a task or objective. | “Rewrite docs 4–8 using the approved quality bar.” |
| Review | Agent asks for a decision before a sensitive action. | “Approve this public post draft?” |
| Audit | Agent reports what changed and where proof lives. | “Build passed. Changed files: X, Y. Proof: logs.” |

If a channel is full of messages that are not command, review, or audit, it becomes noise.

This does not mean agents cannot be friendly. It means company communication has a job.

## Channel Map

Do not put every kind of message in one place.

| Surface | Best use | Should not hold |
|---|---|---|
| Terminal | deep local work, builds, debugging, file edits. | permanent decisions that only live in scrollback. |
| Discord/Slack | commands, alerts, approval requests, short summaries. | long-term source of truth. |
| Telegram/email | high-priority notifications or mobile delivery. | noisy low-value logs. |
| Paperclip/Linear/GitHub Issues | tasks, assignments, approval status, activity. | private secrets or raw emotional context. |
| Obsidian/markdown notes | decisions, guides, source maps, protocols. | tokens, cookies, passwords, raw session state. |
| Ledger/audit log | action records, cost events, proof links. | casual chat or unstructured opinions. |

A chat server is a window into work. It is not the work database.

## Command Format

A good command removes guesswork.

Use this shape:

```text
Command:
Target:
Scope:
Sources:
Allowed actions:
Forbidden actions:
Output:
Verification:
Deadline/priority:
```

Example:

```text
Command: rewrite docs 4–8
Target: src/content/seven-requirements.md through agent-memory.md
Scope: content only, preserve slugs
Sources: public IA note and existing markdown
Allowed actions: edit source markdown and run build
Forbidden actions: deploy, rename pages, publish externally
Output: changed files, scan results, build result
Verification: no banned terms, no private leaks, build passes
Priority: now
```

This is faster than “make it better” because the agent knows the boundary.

## Review Format

A review request must show the human exactly what is being approved.

```text
Review required
Action:
Target:
Why now:
Risk:
Payload preview:
Proof already checked:
Rollback/undo path:
Approve with:
Reject with:
Expires:
```

Example:

```text
Review required
Action: publish guide update
Target: docs pages 4–8
Why now: content depth pass is complete
Risk: public copy error or private detail leak
Payload preview: five local markdown files changed
Proof already checked: build passed, scan empty
Rollback path: revert source files before deploy
Approve with: APPROVE publish-docs-4-8
Reject with: REJECT publish-docs-4-8 <reason>
Expires: today
```

Never ask for blind approval. The approval message must contain the payload or a link to it.

## Audit Format

Audit messages should be short and inspectable.

```text
Audit record
Actor:
Task:
Changed state:
Proof:
Approval:
Risk remaining:
Next action:
```

Example:

```text
Audit record
Actor: docs-agent
Task: rewrite agent identity page
Changed state: src/content/agent-identity.md
Proof: build passed; rendered page contains Responsibility Contract
Approval: not required, local source change only
Risk remaining: Indonesian body still mirrors English if locale parity is not implemented
Next action: propagate pattern to next docs batch
```

The audit record should be copied into the task or ledger, not only posted in chat.

## Agent-To-Agent Relay

Agents may consult each other, but they should not wander into endless conversation.

Relay packet:

```text
To:
From:
Purpose:
Context:
Question/request:
Allowed actions:
Forbidden actions:
Return format:
One-reply limit:
```

Rules:

- one purpose per relay;
- one reply unless the human approves an extended loop;
- peer reports are self-reports until verified;
- the result returns to the human or task record;
- no agent may approve its own high-risk output through another agent.

Good relay:

```text
To: review-agent
Purpose: check whether this docs page leaks private setup details
Allowed actions: read the provided text and report risks
Forbidden actions: edit files or publish
Return format: PASS/BLOCKED with line references
One-reply limit: yes
```

## Mention Gates

If communication happens through Discord or Slack, mention rules matter.

A safe mention gate decides:

- which humans can command agents;
- whether bot-to-bot messages are accepted;
- whether a direct mention is required;
- which channels are command channels;
- which channels are read-only logs;
- how to prevent accidental loops.

Public-safe rule:

```text
Agents respond to trusted humans and approved relay packets only.
Agents ignore random channel noise.
Bot-to-bot relay requires explicit target and one-purpose packet.
```

Do not let every message in a server become a command.

## Alert Levels

Not every event deserves a notification.

| Level | Send where | Examples |
|---|---|---|
| Info | task record or daily summary. | link check passed, source scan complete. |
| Warning | ops/review channel. | build failed, source missing, cost spike near limit. |
| Approval | approval channel and maybe mobile. | public post, money action, destructive change. |
| Critical | mobile/high-priority channel. | credential exposure, runaway spend, production outage. |

Alert fatigue destroys review quality. If everything pings the human, the human stops reading.

## Communication Map Template

Copy this.

```text
Communication Map

1. Primary command channel:
2. Approval channel:
3. Audit/task system:
4. Long-form decision notes:
5. High-priority alert path:
6. Agent-to-agent relay rule:
7. Who may command agents:
8. Which actions require review:
9. Which messages are ignored:
10. Where proof records live:
11. Loop-prevention rule:
12. Escalation rule:
```

## Done When

Your communication setup is ready when:

- commands have a standard format;
- approvals show payload, risk, and proof;
- audit records live outside chat;
- high-priority alerts are rare and meaningful;
- agent-to-agent relay is bounded;
- mention gates prevent random command injection;
- channels have different jobs;
- the human can inspect work without reading every message.

Then you can decide what agents should remember and where that memory belongs.
