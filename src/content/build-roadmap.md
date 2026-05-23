## The Build Roadmap

Transitioning from a single AI assistant prompt to a governed, multi-agent company cannot be done in an afternoon. If you rush the architecture, you will build a system that is insecure, expensive, and impossible to debug.

Sequence matters. You must build the conceptual boundaries before you grant tool access, and you must build the tracking state before you deploy the workers. 

This roadmap outlines a realistic 4-week timeline for establishing a minimum viable agentic company.

### Days 1-3: The Foundation

Before you touch a configuration file or install a runtime, you must define the rules of the company. 

**Deliverables:**
*   **Owner Principles Document:** Your mission, non-negotiables, and standard of proof.
*   **Business Reality Map:** What you sell, who pays, and how value is delivered.
*   **Public/Private Boundary Policy:** Explicit rules on what data must never be shared or processed externally.
*   **First Agent Identity Contract:** The role, limits, and tools for your primary Chief of Staff / Execution agent.
*   **Action Gate Matrix:** A table defining which actions are autonomous and which require human confirmation.

**Verification Gate:** 
*   Documents are written and saved in your canonical knowledge base (e.g., Obsidian).
*   No secrets or API keys are stored in these foundational text files.
*   You have verbally confirmed the Action Gate Matrix against a hypothetical worst-case scenario.

### Week 1: Technical Execution and the First Agent

With the rules defined, install the runtime and verify that the base execution layer works reliably.

**Deliverables:**
*   **Runtime Installed:** Hermes Agent (or equivalent) is installed, updated, and connected to your chosen LLM provider.
*   **Profile Deployed:** Your first Execution or Support agent is configured and responding.
*   **Tool Verification:** The agent can successfully read files, write to a designated directory, and execute basic terminal commands without hallucinating.
*   **Memory Routing:** You have established where the agent will save notes versus where it will save reusable procedural skills.
*   **First Skill Created:** The agent has successfully executed a complex task and saved the procedure as a reusable `.skill` file.

**Verification Gate:** 
*   `hermes --version` and `hermes doctor` return clean states.
*   The agent successfully runs a test command, modifies a file, and reports back.
*   The agent successfully recalls a memory stored in a previous session.

### Week 2: Command, Control, and Access

An agentic company must be controllable from outside a local terminal, and it must interact with external accounts safely.

**Deliverables:**
*   **Command HQ:** A secure gateway is established (e.g., a locked-down Discord server, an authenticated API endpoint, or an email relay) where you can issue commands remotely.
*   **Account Taxonomy:** You have created dedicated agent-owned accounts (e.g., `ops@yourdomain.com`) rather than granting access to your personal email.
*   **Credential Registry:** Passwords and tokens are stored in a secure secrets manager, referenced by the agent only via environment variables or secure tool wrappers.
*   **Gate Enforcement:** The system successfully pauses and requests human approval for any action flagged as Public, Destructive, or Financial in your Action Matrix.

**Verification Gate:** 
*   You can issue a command via Discord/Email and see the agent begin work.
*   You ask the agent to post a public tweet or delete a file; the system halts, presents the exact payload, and waits for your cryptographic or manual approval.

### Week 3: Company State and Asynchronous Work

This is the transition from "assistant" to "company." Agents must be able to track long-running work when you are asleep.

**Deliverables:**
*   **Tracking System:** Installation of Paperclip or a similar system for tracking Goals, Projects, and Issues.
*   **Role Agent Roster:** Deployment of secondary agents (e.g., a Research Agent or Finance Agent) with strict internal handoff rules.
*   **Approval Queues:** A centralized dashboard or channel where pending agent-to-agent and agent-to-human approvals are aggregated.
*   **Activity Logging:** Every agent action is written to a structured activity log or basic ledger.

**Verification Gate:** 
*   You issue a high-level command. The Execution Agent breaks it down into 3 sub-tasks, logs them in the tracking system, and assigns one to the Research Agent. 
*   The Research Agent completes the task, posts proof to the issue, and marks it "Done." The Execution Agent reviews and verifies the result.

### Week 4: Advanced Governance and Production Readiness

Lock down the company, audit the financials, and prepare for production operation.

**Deliverables:**
*   **Money Policy:** Strict limits on corporate cards or crypto wallets, enforced at the API layer.
*   **Ledger Template:** A standardized format for recording critical business and financial events.
*   **Maintenance Cadence:** Scheduled calendar events for your Daily Pulse, Weekly Review, and Monthly Audit.
*   **Security Review:** A full scan of all agent profiles, memory banks, and logs to ensure no secrets have leaked into plain text.

**Verification Gate:** 
*   An agent attempts a test financial transaction; the system intercepts it, demands merchant/amount/network confirmation, and logs the event to the ledger.
*   A grep search for your private API keys across your public documentation directory returns zero results.

### The Definition of Done

The build phase is complete, and your company is fully operational, when this exact loop runs seamlessly:

1. **Human Intent:** The founder sends a high-level command via the Command HQ.
2. **Interpretation:** The Execution Agent interprets the objective, assesses the blast radius, and breaks it into tracked company tasks.
3. **Execution:** Role Agents claim tasks, execute tools, and produce artifacts.
4. **Internal Verification:** The Execution Agent reviews the artifacts against the original success criteria.
5. **The Gate:** If an action requires external impact (public publish, spending money), the system halts and asks the founder for approval, presenting exact proof.
6. **Side Effect:** The approved action executes.
7. **The Proof:** The agent captures the transaction ID, URL, or commit hash.
8. **The Record:** The ledger is updated with the full audit trail.
9. **The Lesson:** Any new workflows discovered during execution are extracted and saved as durable skills.

If the loop breaks down, or if it requires constant manual prompting to keep moving, you are still building. Iterate on your policies and tools until the loop holds.

### Advanced Scaling and Architecture Roadmap

Scaling an agentic company is fundamentally different from scaling a SaaS product. You are not just scaling traffic; you are scaling cognitive throughput and autonomous action. The roadmap must prioritize stability, verifiable truth, and the systematic removal of the human operator from the execution loop via rigid proof gates.

#### Maturity Levels of Agentic Scaling
The roadmap is divided into clear maturity phases. Moving between phases requires satisfying strict proof gates.
* **Phase 1: The Shadow Workforce.** Agents perform work, but the human operator manually copies, pastes, and executes the final action. *Goal: Baseline capability validation.*
* **Phase 2: Human-in-the-Loop (HITL) Execution.** Agents draft the payload and queue the API call. The human operator clicks "Approve." *Goal: Workflow integration and latency reduction.*
* **Phase 3: Bounded Autonomy.** Agents execute autonomously within strict policy matrices (e.g., transactions under $50). *Goal: Scale volume without scaling risk.*
* **Phase 4: Algorithmic Oversight.** The human operator is removed from routine approvals. Overseer agents audit worker agents. The human only manages the exceptions. *Goal: 1-Man Army exponential leverage.*
* **Phase 5: Agent-to-Agent Commerce.** Your fleet directly negotiates, contracts, and transacts with external vendor fleets at machine speed. *Goal: Protocol-level economic integration.*

#### Proof Gates for Roadmap Graduation
You cannot graduate to the next phase simply because the code is written. You must satisfy the Proof Gate.
* **Gate to enter Phase 2 (HITL):** The system must demonstrate 99% accuracy in drafting API payloads over 500 consecutive test events.
* **Gate to enter Phase 3 (Bounded Autonomy):** The Ledger must be fully operational, and the red-team 'Bypass Drill' must fail to breach the $50 transaction limit.
* **Gate to enter Phase 4 (Algorithmic Oversight):** The Overseer agent must successfully identify and quarantine 100% of synthetically injected 'bad actions' during a 14-day shadow run.

#### Failure Taxonomies in Scaling
1. **Premature Automation:** Granting autonomy before the Ledger is ironclad. Result: A runaway agent drains an API budget in 4 hours, and the operator cannot reconstruct the event timeline.
2. **Tool Bloat:** Giving agents access to 50 different API tools. The LLM gets confused by the schema complexity and begins hallucinating parameters. *Mitigation: Strict adherence to the Unix philosophy—small agents with 1 to 3 highly specific tools.*
3. **The Frankenstein Context:** As the company grows, the master prompt grows to 50,000 tokens of edge cases. Latency spikes and reasoning degrades. *Mitigation: Transition from monolithic prompts to modular SOP routing.*

#### Policy Matrices for Tool Investment
Building custom MCP (Model Context Protocol) tools for agents is expensive. The operator must ruthlessly prioritize based on a clear matrix:
| Capability Request | Execution Frequency | Human Time Cost | ROI Decision |
| :--- | :--- | :--- | :--- |
| **Write custom SQL reports** | 1x / Month | 2 Hours | **REJECT.** Operator executes manually. |
| **Triage inbound support emails** | 100x / Day | 4 Hours / Day | **APPROVE.** Build Zendesk MCP tool. |
| **Negotiate API vendor pricing** | 1x / Year | 5 Hours | **REJECT.** Too high risk, too low frequency. |

#### Example Record: Capability PRD Template
Before adding a new capability to the fleet, the operator writes a strict, agent-readable Product Requirements Document (PRD).
```markdown
# Agent Capability: Invoice Generation
**Target Agent:** `agent-finance-core`
**Required Tools:** `stripe_create_invoice`, `ledger_write_event`
**Success Criteria:**
1. Agent can extract line items from a natural language contract.
2. Agent successfully maps items to the Stripe pricing schema.
3. Agent writes the exact Stripe `invoice_id` to the immutable ledger.
**Failure State:** If the Stripe API returns 400, the agent MUST NOT retry more than twice, and MUST escalate to the human queue.
```

#### Operating Loops: The Roadmap Audit
Every 90 days, the 1-Man Army halts execution to audit the fleet against the roadmap.
1. Are we building tools that fall below the ROI threshold?
2. Has any agent been granted autonomy without a corresponding Proof Gate?
3. Is the Ledger accurately capturing 100% of Phase 3+ autonomous actions?
If the audit fails, all new feature development freezes until the baseline architecture is secured.
