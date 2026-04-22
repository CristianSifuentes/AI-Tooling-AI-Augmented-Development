const toc = [
  "1. Foundations: React 2026 architecture and TypeScript rigor",
  "2. Routing Mastery: React Router 7 loaders, actions, and deferred data",
  "3. AI Integration: LLM APIs, prompt contracts, and structured outputs",
  "4. Agentic Coding: task planners, tool-use loops, and CI orchestration",
  "5. Reliability: caching, retries, fallback UIs, and observability",
  "6. Security and Validation: guardrails, code review, and eval suites",
  "7. Scaling Delivery: monorepos, design systems, and release automation"
];

export const PlaybooksPage = () => (
  <section>
    <h2>Professional React Table of Contents (2026)</h2>
    <p>
      Use this roadmap to level from senior frontend engineer to AI-augmented React
      architect.
    </p>
    <ol>
      {toc.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ol>
  </section>
);
