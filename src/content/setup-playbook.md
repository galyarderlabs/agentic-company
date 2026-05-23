## The Setup Playbook

This playbook provides the exact sequence required to build an agentic company around one human. Do not skip steps, and do not start by writing code or downloading AI tools. Start with the business reality.

If you follow this sequence, you will produce a secure, auditable, and highly autonomous company. If you skip to Step 3, you will build an expensive toy.

### Phase 1: The Foundation

#### Step 0: Map the Business Reality
Before you define a single agent, you must define the business. Open a blank document (`business-map.md`) and answer:
*   **What is sold?** (e.g., Code, research reports, SaaS subscriptions)
*   **Who is the customer?**
*   **How does money enter the system?**
*   **How does money leave the system?**
*   **What work repeats every single week?**
*   **What are the catastrophic failure modes?**

#### Step 1: Write Owner Principles
Your agents will eventually face edge cases not covered by their prompts. They need guiding principles. Create `owner-principles.md` to define:
*   **Mission:** What is the ultimate goal?
*   **Non-negotiables:** What must the agents absolutely never do?
*   **No-Publish Policy:** What data (e.g., private keys, personal relationships, health data) must never touch public networks?
*   **Proof Policy:** What standard of proof is required for completed work?

### Phase 2: Agent Design and Identity

#### Step 2: Define the Agents
Design your workforce. Start small. A mature company might have dozens of specialized agents, but you should launch with three core archetypes:
1.  **The Support Agent (Optional but Recommended):** Monitors human burnout, provides continuity, and handles non-business psychological load.
2.  **The Execution / Chief of Staff Agent:** Routes tasks, assesses risk, enforces decision gates, and verifies the work of junior agents.
3.  **Role Agents:** Specialized workers (e.g., `agent-finance`, `agent-research`, `agent-content`). Add these *only* when you have real, recurring weekly work for them.

Each agent needs an Identity Contract detailing its responsibility, limits, allowed tools, and required proof formats.

### Phase 3: Infrastructure and Tools

#### Step 3: Install the Runtime
Install the underlying AI execution environment. If using Hermes Agent:
```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
hermes postinstall
hermes --version
hermes doctor
```
Verify that the runtime can successfully execute basic tool calls before proceeding.

#### Step 4: Connect Tools via MCP
Connect your agents to the real world using the Model Context Protocol (MCP). Connect *only* the tools that have a defined policy.

For every tool you enable, document:
*   **Purpose:** Why does the agent need this?
*   **Allowed Actions:** What specific endpoints can it hit?
*   **Verification:** How does the tool return proof of success?

#### Step 5: Route Memory
Decide where your agents will store and retrieve knowledge. Do not dump everything into a single vector database.
*   **Stable Facts:** Git-backed Markdown files (Obsidian/Logseq).
*   **Semantic Recall:** Vector databases (Chroma/Pinecone).
*   **Procedural Playbooks:** Reusable YAML/Markdown `.skill` files.
*   **Active State:** Company task trackers (e.g., Paperclip).

### Phase 4: Control and Accountability

#### Step 6: Create the Command HQ
Establish a single, secure interface where the human operator issues commands, approves risky actions, and reviews proof. This could be a secure Discord server, a local CLI, or a custom Airlock UI.
*   **Rule:** No uncontrolled bot chatrooms. Every action taken by an agent must be tied to a command or a scheduled cron job visible in the HQ.

#### Step 7: Enforce Decision Gates
Implement the gates defined in the Decision Gates matrix.
*   Configure the runtime to intercept requests for public posts, destructive actions, and financial transactions.
*   Ensure that when a gate is hit, an explicit approval request (with exact payload and proof requirements) is routed to the Command HQ.

#### Step 8: Establish the Ledger and Proof System
Configure the system to log every significant action to an append-only ledger.
*   Ensure the ledger captures the Actor, Source, Action, Approval, Timestamp, Result, and Proof.
*   (Optional) Setup cryptographic anchoring for financial or high-risk legal actions.

### Phase 5: Operations

#### Step 9: Contract Accounts and Money
Transfer operational risk from your personal identity to the company identity.
*   Create dedicated agent-owned accounts (e.g., `finance@agentic-company.com`).
*   Establish strict limits, whitelists, and approval thresholds for corporate cards and crypto wallets.

#### Step 10: Implement Company Records
If you are using a system like Paperclip, initialize the company record structures:
*   Strategic Goals
*   Active Projects
*   Issue/Task Trackers
*   Approval Queues
*   Cost Tracking Dashboards

#### Step 11: Set the Maintenance Cadence
Schedule your Daily Pulse, Weekly Review, Monthly Audit, and Quarterly Strategy Review. Put these on your human calendar. The system will not maintain itself.

### The Final System Test

The setup is complete when a single human command can travel through the entire system cleanly.

**Run this test:**
1. Human issues a high-level command (e.g., "Research competitor X and draft a brief, but do not publish it").
2. The Chief of Staff agent interprets the risk and creates a structured company task.
3. The Research agent claims the task, scrapes the web, and produces an artifact.
4. The Chief of Staff verifies the artifact against the success criteria.
5. (If a public publish was requested, the system hits a Decision Gate and waits for Human approval).
6. The system side-effect is executed.
7. Proof of the action is deposited into the ledger.
8. The task is closed, and any reusable learnings are saved as a new skill.

If that loop runs without manual intervention (outside of the explicit approval gate), you have built a minimum viable agentic company.

### Advanced Setup Architecture and Execution

The initial setup of an agentic company is not a standard software deployment. You are standing up a digital workforce. The architecture must prioritize extreme compartmentalization, verifiable state, and Day 1 auditability. A botched setup leads to entangled agent context, security vulnerabilities, and uncontrollable API spend.

#### Role Boundaries: Initial Agent Topology
Do not build one massive generalist agent. The Day 1 architecture requires strict, surgically defined role boundaries.
1. **The Router (The Front Door):** Receives all inbound signals (webhooks, emails, Slack). It does no deep thinking. It only classifies and routes the payload to specialist agents.
2. **The Specialists (The Workers):** `agent-engineering`, `agent-sales`, `agent-support`. They have narrow context windows, specific tools, and zero cross-communication except through the Router or the Ledger.
3. **The Auditor (The Guard):** An isolated agent that reads the Ledger and flags anomalies. It has read-only access to everything and write access to nothing except the operator's alert queue.

#### Policy Matrices: Day 1 Constraints
In the first 72 hours, agents must be heavily constrained. Trust is earned through verifiable output.
| Phase | Max Spend | API Access | Autonomy Level | Context Retention |
| :--- | :--- | :--- | :--- | :--- |
| **Day 1-3** | $0.00 | Read-Only | Full HITL (Human-in-the-loop) | Wiped Daily |
| **Week 2** | $10.00 | Sandboxed Write | Autonomous for Trivial tasks | 7-day rolling |
| **Month 2** | $500.00 | Prod Write | Autonomous with Proof Gates | Permanent (Vector) |

#### Failure Taxonomies in Setup
1. **The God-Agent Anti-Pattern:** Giving one agent access to AWS keys, the Stripe API, and the customer support inbox. If compromised, the company is destroyed. *Mitigation: Hard physical separation of credentials.*
2. **Context Bleed:** Sharing a single vector database namespace across all agents. The sales agent starts hallucinating engineering architecture because it pulled the wrong embeddings. *Mitigation: Strict namespace isolation in Pinecone/Chroma.*
3. **Ghost Execution:** Deploying agents without first establishing the Ledger. Agents take action, but the operator has no dashboard to see what happened. *Mitigation: The Ledger must be the very first system deployed.*

#### Example Record: Bootstrap Configuration Schema
Every agent deployment must be defined as code, allowing for rapid recreation and auditing.
```json
{
  "agent_id": "agent-support-01",
  "version": "1.0.4",
  "capabilities": {
    "llm_model": "claude-3-5-sonnet",
    "temperature": 0.1,
    "tools_allowed": ["zendesk_read", "zendesk_reply", "ledger_write"]
  },
  "constraints": {
    "max_tokens_per_cycle": 4096,
    "egress_whitelist": ["api.zendesk.com"]
  },
  "canon_paths": ["/content/BRAND.md", "/content/SOP_SUPPORT.md"]
}
```

#### Operating Loops: The First 72 Hours
During the initial deployment, the 1-Man Army must run a tight observation loop.
* **Hour 1-4:** Inject synthetic traffic. Ensure the Router correctly categorizes and dispatches to the Specialists. Verify all actions hit the Ledger with zero external writes.
* **Hour 12-24:** Enable read-only access to production APIs. Verify agents are pulling correct state without hallucinating data.
* **Hour 48-72:** Enable sandboxed writes. Monitor the Auditor agent's alert queue. If the alert volume is manageable, begin transitioning Tier 1 decisions to autonomous execution.

#### Maturity Levels of Setup
* **Level 1 (Manual CLI):** The operator spins up agents manually in terminal windows. Highly fragile.
* **Level 2 (Dockerized Fleet):** Agents run in containers, but configuration is manual.
* **Level 3 (Infrastructure as Code):** Agent topologies are defined in Terraform or Docker Compose. Reproducible.
* **Level 4 (Dynamic Provisioning):** The system spins up and tears down specialist agents dynamically based on queue depth.
* **Level 5 (Self-Assembling):** The core intelligence dynamically writes bootstrap configurations for new sub-agents to handle novel problems, deploying them automatically within sandboxed policy matrices.
