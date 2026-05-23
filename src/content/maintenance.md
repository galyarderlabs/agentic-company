## Company Maintenance and Operational Health

Building an agentic company is only 20% of the work. The remaining 80% is operating it. Setup is not the finish line; a company of AI agents decays silently and rapidly without rigorous review.

In traditional software, code is deterministic. It runs the same way until you change it. In an agentic company, behavior drifts. LLMs get updated, system contexts grow cluttered, API structures change, and memories become stale. Without a disciplined maintenance schedule, your agents will start hallucinating, duplicating work, or failing silently because a session cookie expired.

Maintenance is how the system stays a disciplined, owned company instead of degrading into a haunted, expensive pile of automation.

### The Physics of Agent Decay

If left unmaintained, your agentic company will experience:
- **Session Rot**: Auth tokens expire, browser cookies drop, and MCP connections fail. Agents will confidently plan tasks they no longer have access to execute.
- **Context Bloat**: Agents accumulate irrelevant memories and outdated instructions, slowing down execution and increasing token costs.
- **Skill Drift**: The procedural skills you taught an agent last month fail because a CLI tool updated its syntax.
- **Cost Creep**: Scheduled agents run loops on low-value tasks, slowly draining your API budget.

To prevent this, you must establish an operational cadence.

### The Daily Pulse

The Daily Pulse takes 5 minutes. Its goal is strictly to unblock execution, catch urgent failures, and authorize pending work. Do not debug architecture during the daily pulse; just keep the lights on.

**Daily Checklist:**
- [ ] **Service Health**: Are the core runtime and LLM providers online? Is the Discord/CLI gateway responding?
- [ ] **Pending Approvals**: Clear the Airlock. Review and approve/reject decision gates for financial, destructive, or public actions.
- [ ] **Failed Jobs**: Check the ledger for hard crashes. Did an agent fail to parse a document? Did a tool execution timeout?
- [ ] **Session Alerts**: Have any agent-owned accounts been logged out or flagged by anti-bot systems?
- [ ] **Spend Check**: Did yesterday's API and wallet spend fall within normal operating limits?

### The Weekly Review

The Weekly Review takes 30–60 minutes. Its goal is quality control, course correction, and system optimization. You are shifting from operator to manager.

**Weekly Checklist:**
- [ ] **Stale Tasks**: Are any issues sitting in "In Progress" for days? Release them, reassign them, or delete them.
- [ ] **Output Quality QA**: Spot-check agent work. Did the `content-agent` sound too robotic this week? Did the `research-agent` miss obvious data? Provide feedback.
- [ ] **Memory Pruning**: Correct false assumptions the agents have made. Update canonical context files if the company strategy has shifted.
- [ ] **Skill Patching**: Identify any repetitive tool failures. Update the specific Markdown `.skill` files so the agents learn the new syntax or workaround.
- [ ] **Documentation Sync**: Do the internal docs still match the reality of how the company operates? If not, update them.

### The Monthly Access Audit

The Monthly Audit is focused purely on security, risk reduction, and financial hygiene. Agents accumulate permissions quickly. You must aggressively prune them.

**Monthly Checklist:**
- [ ] **Access Pruning**: Which accounts still actually need agent access? Revoke OAuth grants and delete API keys that haven't been used in 30 days.
- [ ] **Credential Rotation**: Rotate passwords and access tokens for critical infrastructure.
- [ ] **Financial Limits**: Do the spending limits on the corporate card or crypto wallet still fit the business needs? Lower them if an agent's workload has decreased.
- [ ] **Recovery Paths**: Verify that disaster recovery codes and seed phrases are securely stored offline, and that the recovery process is understood (but not exposed to the agents).

### The Quarterly Strategy Review

Every quarter, step back from the technical implementation and evaluate the company as a business owner. 

**Quarterly Questions:**
- Does this company setup still serve me, or am I serving the setup?
- Has any agent gained too much power or autonomy without sufficient proof gates?
- Are the public claims we make about our AI automation actually true, or are we relying on "wizard of oz" human intervention behind the scenes?
- Which agents should be fired (killed), merged, or upgraded?
- What ad-hoc workflows have we executed enough times that they should be codified into strict, reusable procedural skills?

### Decommissioning

A mature agentic company deletes what no longer earns its place. The fastest way to ruin your system is to hoard old configurations.

Be ruthless about decommissioning:
- **Unused Agents**: If an agent hasn't been called in a month, delete its configuration.
- **Duplicate Skills**: Consolidate overlapping instructions into a single, canonical playbook.
- **Stale Cron Jobs**: Kill scheduled tasks that generate reports you no longer read.
- **Dead Accounts**: Close third-party SaaS accounts that the agents no longer actively utilize.

Your agentic company is a living machine. It requires fuel (capital/tokens), direction (strategy), and maintenance (audits). Neglect any of the three, and the company dies.

### Advanced Maintenance and Fleet Health

Agentic maintenance is not about patching servers; it is about managing cognitive drift, context degradation, and API desynchronization. A 1-Man Army operating a fleet of 50 agents will drown in operational debt if maintenance requires manual intervention. The system must be self-healing, predictable, and measurable.

#### Failure Taxonomies in Agentic Maintenance
Unlike deterministic software, agents fail probabilistically over time. Recognizing these failure modes is the first step in fleet maintenance.
1. **Cognitive Drift:** Over weeks, an agent's context window fills with edge-cases, exceptions, and temporary rules, causing its core behavior to deviate from the original mandate. *Mitigation: Hard context resets.*
2. **Memory Fragmentation:** Vector databases accumulate contradictory embeddings (e.g., a policy that changed in January conflicts with a memo from March). The agent begins hallucinating protocols. *Mitigation: Chronological pruning and vector decay.*
3. **API Deprecation Blindness:** An external vendor updates their API payload. Deterministic code breaks instantly; LLMs may silently hallucinate the missing fields, corrupting downstream data. *Mitigation: Strict schema validation on all inputs.*

#### Operating Loops: The Self-Healing Cycle
Routine maintenance must be automated via rigid operating loops.
* **The Daily Prune:** At 00:00 UTC, `agent-janitor` flushes all short-term scratchpads. Ephemeral thoughts are deleted; only validated Ledger outputs remain.
* **The Weekly Re-Alignment:** Every Sunday, agents are forced to re-read the core `BRAND.md` and `AGENTS.md` canon files to overwrite any behavioral drift accumulated during the week.
* **The Monthly API Audit:** `agent-qa` runs a test suite against all external APIs (Stripe, GitHub, AWS) using dummy data to verify schemas have not shifted.

#### Evidence Contracts: Fleet Health Snapshots
Maintenance actions must be recorded to the ledger. If an agent's memory is wiped, the operator needs to know exactly when and why.

#### Example Record: Health Snapshot Schema
```json
{
  "maintenance_id": "maint_epoch_449",
  "target_agent": "agent-copywriter",
  "action": "context_window_reset",
  "metrics_before": {
    "token_count": 128450,
    "response_latency_ms": 4200,
    "hallucination_rate_pct": 2.4
  },
  "metrics_after": {
    "token_count": 4500,
    "response_latency_ms": 1100,
    "hallucination_rate_pct": 0.1
  },
  "operator_notified": false,
  "timestamp": "2026-05-23T06:25:00Z"
}
```

#### Maturity Levels of Fleet Maintenance
* **Level 1 (Reactive):** The operator notices an agent acting strangely, manually kills the process, and restarts it.
* **Level 2 (Scheduled):** Cron jobs routinely restart agents and clear caches, regardless of actual health.
* **Level 3 (Telemetry-Driven):** Agents emit health metrics (latency, token usage, retry rates). Alerts fire when thresholds are crossed.
* **Level 4 (Predictive Self-Healing):** An overseer agent detects cognitive drift via output analysis and hot-swaps the degraded agent with a fresh instance without dropping requests.
* **Level 5 (Evolutionary):** The system automatically patches its own prompt templates based on failure logs, continuously optimizing fleet performance without human intervention.

#### Red-Team Checks for Maintenance
* **The Amnesia Test:** Force a hard reset on an agent mid-task. Can it recover its state from the immutable Ledger, or does the task fail permanently?
* **The Data Rot Drill:** Manually inject garbage data into the vector database. Measure how long it takes for the system's hygiene loops to identify and quarantine the corrupted embeddings.


#### Role Boundaries in Maintenance Operations
Maintenance cannot be a free-for-all. Allowing generalist agents to perform their own memory wipes or API re-configurations introduces massive instability. The architecture must enforce strict maintenance role boundaries:
* **The Worker (e.g., `agent-sales`):** Can report confusion or context degradation, but cannot alter its own system prompt or clear its own vector space.
* **The Janitor (`agent-janitor`):** Authorized to perform routine, non-destructive actions like archiving old context or clearing scratchpads. It operates strictly on a cron schedule.
* **The Surgeon (`agent-core-ops`):** The only agent authorized to hot-swap models, rewrite core instructions, or alter the routing topology. This agent operates strictly under Human-in-the-Loop (HITL) Proof Gates.

#### Policy Matrices for Deprecation and Upgrades
When underlying foundation models (e.g., GPT-4 to GPT-5) or major API versions change, the fleet must be upgraded systematically. The 1-Man Army relies on a clear policy matrix to handle deprecation:
| Upgrade Type | Testing Requirement | Rollout Strategy | Rollback Trigger |
| :--- | :--- | :--- | :--- |
| **Minor API Schema Change** | 100 synthetic events | Immediate Fleet Push | 5% failure rate in 1 hr |
| **Foundation Model Swap** | 500 shadow events | Canary (1 agent first) | Latency > 5000ms |
| **Vector DB Migration** | Full snapshot validation | Hard cutover during weekend | Missing retrieval > 1% |

Adhering to these boundaries and matrices ensures that the maintenance of the fleet does not become a full-time job, preserving the extreme leverage of the agentic company.
