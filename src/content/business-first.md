## What This Page Decides

Do not start by naming agents. Start by describing the business.

An agentic company is not created by opening a task board and inventing roles like “Research Agent,” “Marketing Agent,” and “Finance Agent.” Those labels are empty until they are tied to customers, money, delivery, risk, and proof.

By the end of this page, you should have a Business Reality Map: a short document that says what the company sells, who pays, how work is delivered, what repeats, what can go wrong, what agents may handle, and what records prove the work happened.

If the business map is unclear, the agents will not fix it. They will only automate confusion.

## The Rule

Start from the business reality:

```text
What is sold?
Who pays?
What must be delivered?
What repeats?
What can go wrong?
Who approves?
What record proves the work happened?
```

Then design the agents.

This rule prevents the most common mistake: building a group of agents with no commercial target. A company is not a collection of busy assistants. A company is a value machine: it promises something, delivers it, gets paid, handles risk, keeps records, and improves the next cycle.

Agents should be assigned only after the work is visible.

## The Business Reality Map

Create one table before writing any agent profile.

| Field | Question | Example answer |
|---|---|---|
| Offer | What do we sell or provide? | Weekly technical market brief for founders. |
| Customer | Who pays or benefits? | Solo founders who need fast tool intelligence. |
| Payment path | How does money enter? | Subscription, invoice, sponsorship, or product sale. |
| Cost path | How does money leave? | AI tokens, hosting, data tools, contractors, ads. |
| Delivery | What must reach the customer? | Published report, support reply, shipped feature, consultation. |
| Repeat work | What happens every day or week? | Source scan, draft, review, publish, support, reconcile. |
| Sensitive moves | What could cause damage? | Public post, refund, paid ad, deletion, client email. |
| Approval | Who must approve sensitive moves? | Owner, reviewer, finance agent plus owner, or human team. |
| Proof | What record proves completion? | URL, receipt, issue ID, source list, file diff, ledger row. |

If a row is blank, do not hide it behind automation. Mark it as a business decision still needed.

## Cashflow Before Task Flow

A task board tells you what people are doing. Cashflow tells you whether the work matters.

Before asking “which agent should do this?”, ask:

- Does this work help revenue enter, risk decrease, cost stay controlled, or delivery improve?
- If this work stopped for seven days, would the company notice?
- If an agent performed it badly, what damage would happen?
- If an agent performed it well, what measurable thing would improve?

This is where many agent projects die. They automate visible activity instead of business pressure.

Examples:

| Tempting automation | Better business question |
|---|---|
| “Make a content agent.” | Which content drives leads, trust, or product education? |
| “Make a research agent.” | Which decisions become faster or safer with better research? |
| “Make a finance agent.” | Which money records must be correct every week? |
| “Make a support agent.” | Which support cases are repeated, low-risk, and easy to verify? |
| “Make a coding agent.” | Which product changes are small enough for safe delegation? |

The business question decides the agent shape.

## Map Work Into Loops

A loop is repeated work with a beginning, middle, end, and proof.

Write each loop like this:

```text
Loop name:
Trigger:
Input:
Steps:
Decision points:
Agent-safe parts:
Human-review parts:
Output:
Proof record:
Failure response:
```

Example:

```text
Loop name: weekly market brief
Trigger: every Monday 08:00
Input: saved sources, RSS feeds, competitor pages, product notes
Steps: collect sources, rank relevance, draft brief, check claims, publish draft
Decision points: source credibility, claim strength, publish approval
Agent-safe parts: source collection, duplicate removal, first draft, citation table
Human-review parts: final positioning, public title, sponsor mention
Output: approved article and social draft
Proof record: source list, changed markdown file, build result, final URL
Failure response: queue for human if source quality is weak or build fails
```

Once a loop is written, the agent design becomes obvious. You do not need a vague “Research Agent.” You need a source collector, a summarizer, a reviewer, or a publisher, depending on the loop.

## Classify Each Step

Every step in the loop should be placed into one of four classes.

| Class | Meaning | Agent rule |
|---|---|---|
| Read | Looks at sources or state. | Usually safe if private data rules are respected. |
| Draft | Produces a proposal, summary, plan, or file change. | Safe when clearly marked as draft. |
| Reversible write | Changes something that can be rolled back. | Allowed only with logs and rollback path. |
| Sensitive action | Public, destructive, money, credential, legal, or production move. | Must stop for approval unless a written exception exists. |

This classification is more important than the agent’s personality. It tells you where autonomy belongs.

## Choose The First Workflow

Your first workflow should be boring.

Do not start with the highest-risk thing, like sending sales emails, deploying production code, trading crypto, or replying to angry customers. Start with a repeated task that is useful, bounded, and easy to verify.

Good first workflows:

- collect sources and produce a cited brief;
- turn meeting notes into tasks;
- scan docs for broken links;
- reconcile a small set of expenses;
- draft weekly status updates;
- triage inbound messages into categories;
- compare competitor pages and produce a change log.

Bad first workflows:

- send public messages without review;
- move money;
- delete or migrate production data;
- negotiate with customers;
- make legal promises;
- recover accounts;
- auto-buy tools or services.

A boring first workflow gives you proof without creating a blast radius.

## Assign Agents After The Loop

After the loop is written, assign roles by responsibility.

| Loop need | Possible agent | Access level | Proof required |
|---|---|---|---|
| Source collection | Research agent | Read-only web and notes | Source list and relevance notes. |
| Draft creation | Docs or content agent | File write to draft area | Changed file and summary. |
| Claim checking | Review agent | Read-only sources and draft | Pass/fail notes with citations. |
| Publishing | Distribution agent | Public account access | Human approval and final URL. |
| Cost tracking | Finance agent | Read-only billing exports | Ledger row and anomaly flag. |

The agent profile comes last because it is a response to work, not a decoration.

## Define Proof Before Delegation

Before an agent touches a workflow, define what “done” means.

Weak done statement:

```text
The agent creates a report.
```

Strong done statement:

```text
The agent creates a markdown report with at least five cited sources, marks uncertain claims, saves the file in the draft folder, runs the docs build, and returns the file path plus build result for human review.
```

A good done statement includes:

- output format;
- location;
- source requirement;
- quality rule;
- verification command or check;
- approval route if needed;
- failure behavior.

Without a done statement, the human becomes the hidden quality system.

## Risk Before Speed

Every business loop needs a risk line.

Ask:

| Risk question | Why it matters |
|---|---|
| What is the worst plausible mistake? | Defines the gate. |
| Can the action be reversed? | Determines autonomy level. |
| Who is harmed if it goes wrong? | Reveals human-cost and legal exposure. |
| How fast would the error spread? | Public posts and money need tighter gates. |
| How will we detect failure? | Creates monitoring and proof requirements. |

Speed is useful only after the failure path is known. An agent that moves fast through an unknown risk path is not leverage. It is exposure.

## The First Business Reality Artifact

Copy this and fill it before building agents.

```text
Business Reality Map

1. Offer:
2. Customer:
3. Why they pay:
4. Payment path:
5. Main costs:
6. Weekly repeated work:
7. First workflow to delegate:
8. Why this workflow matters:
9. Agent-safe steps:
10. Human-review steps:
11. Sensitive actions forbidden for now:
12. Required proof record:
13. Failure response:
14. Success metric:
15. Review cadence:
```

Keep it short. If the map becomes huge, you are probably hiding unclear thinking inside a document.

## Example: Small Research Product

```text
Offer: paid weekly AI tooling brief.
Customer: solo founders and technical creators.
Why they pay: saves research time and filters hype.
Payment path: monthly subscription.
Main costs: AI tokens, hosting, newsletter tool, occasional paid sources.
Weekly repeated work: source scan, ranking, draft, review, publish, social summary.
First workflow to delegate: source scan and relevance ranking.
Why this workflow matters: saves time without giving the agent public power.
Agent-safe steps: collect links, remove duplicates, rank by relevance, summarize claims.
Human-review steps: final thesis, publish decision, sponsor mentions.
Sensitive actions forbidden for now: public posting, billing changes, deleting sources.
Required proof record: source table, rejected-source list, draft file path.
Failure response: if fewer than ten credible sources, pause and ask human.
Success metric: weekly brief draft ready by Tuesday 10:00 with source list.
Review cadence: weekly.
```

This is enough to create the first agent responsibly. Not because the agent has a cool name, but because the work is bounded.

## Done When

You are ready to design agents when you can answer:

- what the company sells or provides;
- who pays or benefits;
- where money enters and leaves;
- which work repeats;
- which workflow will be delegated first;
- which steps are read, draft, reversible write, or sensitive action;
- what proof record is required;
- what happens when the agent fails;
- who reviews the result.

If these answers are not clear, do not add more agents. Fix the business map first. The next page turns that business map into the seven requirements of a real agentic company.
