export const stackLayers = [
  { name: 'Owner Rules', role: 'The human defines what the company exists to do, what must never happen, and which decisions require review.', proof: 'Owner principles, approval language, risk boundaries, publication safety list.' },
  { name: 'Agent Identity', role: 'Each important agent has a job, memory policy, allowed tools, forbidden actions, and a review path.', proof: 'Profile instructions, responsibility contract, autonomy matrix.' },
  { name: 'Working Runtime', role: 'Hermes Agent supplies the technical execution surface: tools, skills, profiles, gateway delivery, cron, delegation, and MCP.', proof: 'Doctor checks, tool visibility, profile configs, working gateway sessions.' },
  { name: 'Continuity', role: 'Memory and knowledge are routed so useful context survives beyond one chat without turning private history into public content.', proof: 'Curated memory, Hindsight recall, Obsidian notes, reusable skills.' },
  { name: 'Company Room', role: 'Humans command from a few controlled channels; agents return evidence instead of filling the workspace with unbounded side talk.', proof: 'Home channels, relay packets, delivery targets, loop-prevention rules.' },
  { name: 'Access and Money', role: 'Accounts, tools, wallets, payment methods, and API spend are scoped by policy. Access never equals permission.', proof: 'Credential registry, session checks, spending limits, confirmation gates.' },
  { name: 'Company Records', role: 'Work becomes durable state: goals, issues, approvals, activity, cost, ledger events, audit trail, and proof.', proof: 'Paperclip records, approval queues, activity logs, ledger/audit entries.' },
  { name: 'Agent Workforce', role: 'Specialist agents receive bounded missions, output contracts, review gates, and retirement criteria.', proof: 'Task packets, role roster, deliverables, verification notes.' },
  { name: 'Cadence', role: 'The company stays alive through health checks, cost review, access audits, memory cleanup, behavior QA, and principles review.', proof: 'Daily pulse, weekly audit, monthly access review, quarterly principles review.' },
];

export const setupPhases = [
  { phase: 'Gate 00', title: 'Start from the business', output: 'Customer, offer, cashflow, obligations, risks, approval rules, and proof requirements.', gate: 'No automation before the business reality is clear.' },
  { phase: 'Gate 01', title: 'Write owner principles', output: 'Mission, non-negotiables, allowed autonomous work, confirmation language, memory policy, and no-publish policy.', gate: 'No account access or public action before principles exist.' },
  { phase: 'Gate 02', title: 'Define agent identities', output: 'Support, execution, and role agents with responsibilities, memory rules, tool access, and review gates.', gate: 'Each agent has a lane and a stop condition.' },
  { phase: 'Gate 03', title: 'Bring Hermes online', output: 'Hermes installed, model configured, tools visible, profiles responding, and gateway route known.', gate: 'Verify file, terminal, source extraction, and profile identity.' },
  { phase: 'Gate 04', title: 'Wire memory and knowledge', output: 'Hot facts, semantic recall, transcript search, Obsidian notes, source notebooks, and reusable skills.', gate: 'Recall works; secrets and raw private state never enter public docs.' },
  { phase: 'Gate 05', title: 'Scope accounts, tools, and money', output: 'Access contracts for Google, GitHub, social, browser, MCP, wallets, API spend, and local tools.', gate: 'Read-only work is separated from public send, destructive, recovery, and spend actions.' },
  { phase: 'Gate 06', title: 'Move work into company state', output: 'Paperclip goals, issues, agent roster, approvals, activity, cost summary, and audit trail.', gate: 'Side effects are traceable; peer reports are verified before completion claims.' },
  { phase: 'Gate 07', title: 'Run and review the company', output: 'Daily pulse, weekly stale-task/cost review, monthly access audit, quarterly principles review.', gate: 'Recurring output becomes a decision, diff, issue, memory, skill, note, or decommission.' },
];

export const riskRows = [
  ['Read-only inspect', 'Autonomous', 'User data, logs, files, source material', 'Report source and timestamp.'],
  ['Draft or local reversible write', 'Autonomous with scope', 'Wrong artifact or drift', 'Diff, preview, rollback path.'],
  ['External send/share/invite', 'Confirm before action', 'Reputation/privacy impact', 'Exact recipient and content preview.'],
  ['Public post/reply/follow/like', 'Confirm before action', 'Public identity impact', 'Exact caption/media/profile/permalink verification.'],
  ['Destructive delete/reset/force push', 'Explicit confirmation + backup', 'Irreversible loss', 'Backup, dry-run, affected list.'],
  ['Money/wallet/API spend', 'Explicit confirmation + limits', 'Financial loss', 'Amount, network, address, merchant, reason, cost cap.'],
  ['Credential/session/login recovery', 'Explicit confirmation', 'Account lockout/secrets exposure', 'Private local handling, no chat logs.'],
  ['Production change/restart', 'Confirm unless pre-approved pipeline', 'Outage/security exposure', 'Build, smoke, rollback, health check.'],
];
