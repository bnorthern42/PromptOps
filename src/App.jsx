import React from 'react'

const Link = ({ href, children }) => (
  <a className="link" href={href} target="_blank" rel="noreferrer">{children} →</a>
)

const Card = ({ title, children }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{children}</p>
  </div>
)

const Bullet = ({ children }) => (
  <li className="bullet">{children}</li>
)

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="brand">Prompt<span className="accent">Ops</span>Training</div>
        <p className="tagline">Turn ad‑hoc prompts into a <span className="accent">repeatable team playbook</span>.</p>
        <div className="ctaRow">
          <a className="btn primary" href="https://x.com/ZeroDarkDev">Get a quote</a>
          <a className="btn ghost" href="#resources">See resources</a>
        </div>
      </header>

      <section className="section">
        <h2>Why Prompt Ops?</h2>
        <ul className="bullets">
          <Bullet>Design prompts that survive handoffs and audits</Bullet>
          <Bullet>Create evals so changes don’t break downstream workflows</Bullet>
          <Bullet>Ship a shared prompt library and versioning workflow</Bullet>
        </ul>
      </section>

      <section className="section">
        <h2>What your team will learn</h2>

        <div className="grid two">
          <div className="card">
            <h3>Prompt Foundations</h3>
            <ul className="bullets tight">
              <Bullet>Task decomposition, roles, constraints, output schemas</Bullet>
              <Bullet>Few‑shot vs retrieval vs tools — when to use which</Bullet>
              <Bullet>Anti‑patterns: ambiguity, hidden goals, premature automation</Bullet>
            </ul>
          </div>

          <div className="card">
            <h3>Prompt Ops Playbook</h3>
            <ul className="bullets tight">
              <Bullet>Versioning, A/B tests, guardrails and red‑teaming</Bullet>
              <Bullet>Team prompt library & code‑review rituals</Bullet>
              <Bullet>Evals for format, tone, and factuality</Bullet>
            </ul>
          </div>

          <div className="card">
            <h3>Use‑case Labs</h3>
            <ul className="bullets tight">
              <Bullet>Docs + support automations</Bullet>
              <Bullet>Research & summarization; data extraction</Bullet>
              <Bullet>Marketing copy; code scaffolds; internal tooling</Bullet>
            </ul>
          </div>

          <div className="card">
            <h3>Safety & Compliance</h3>
            <ul className="bullets tight">
              <Bullet>PII hygiene, policy, jailbreak resilience</Bullet>
              <Bullet>Hallucination handling and human‑in‑the‑loop</Bullet>
              <Bullet>Audit trails for prompts, data, and outputs</Bullet>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Training formats</h2>
        <div className="grid three">
          <Card title="Lightning Workshop">90‑minute kickoff for up to 30 people. Rapid frameworks + live exercises.</Card>
          <Card title="Team Deep‑Dive">Half‑day applied session for a single team’s workflow. Build your initial prompt library & evals.</Card>
          <Card title="Playbook Sprint">2‑week engagement to co‑design your Prompt Ops playbook, governance, and rollout plan.</Card>
        </div>
      </section>

      <section id="resources" className="section">
        <h2>Great prompting resources</h2>
        <p className="muted">We love these public guides—share them with your team:</p>
        <div className="links">
          <Link href="https://cookbook.openai.com/examples/gpt4-1_prompting_guide">OpenAI: GPT‑4.1 Prompting Guide</Link>
          <Link href="https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api">OpenAI: Best Practices for Prompt Engineering</Link>
          <Link href="https://docs.anthropic.com/en/resources/prompt-library/library">Anthropic: Prompt Library</Link>
          <Link href="https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/prompt-generator">Anthropic: Prompt Generator</Link>
          <Link href="https://www.promptingguide.ai/">DAIR.AI: Prompt Engineering Guide</Link>
          <Link href="https://learnprompting.org/">Learn Prompting (free course)</Link>
          <Link href="https://grow.google/prompting-essentials/">Google: Prompting Essentials</Link>
          <Link href="https://github.com/openai/openai-cookbook">OpenAI Cookbook (examples)</Link>
        </div>
      </section>

      <footer className="footer">
        <div className="small">© {new Date().getFullYear()} PromptOpsTraining</div>
        <a className="small link underline" href="https://bnorthern.info" target="_blank" rel="noreferrer">
          I’m not an AI guy — just thought this would be useful to people. bnorthern.info →
        </a>
      </footer>
    </div>
  )
}
