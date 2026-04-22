import { useLoaderData } from "react-router-dom";

const focusAreas = [
  "AI tool proficiency for generation, optimization, and debugging.",
  "Framework mastery with routing, caching, and server-side logic.",
  "Validation-first engineering for security and correctness.",
  "Agentic workflows for planning, execution, and CI automation."
];

export const dashboardLoader = async () => {
  return {
    year: 2026,
    role: "AI Engineer",
    stack: ["React", "React Router 7", "TypeScript", "LLM APIs"]
  };
};

export const DashboardPage = () => {
  const data = useLoaderData() as Awaited<ReturnType<typeof dashboardLoader>>;

  return (
    <section>
      <h2>{data.role} Mission ({data.year})</h2>
      <p>
        Build production-ready experiences where AI assists coding, audits outputs,
        and accelerates product delivery.
      </p>
      <ul>
        {focusAreas.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h3>Core Stack</h3>
      <div className="pill-grid">
        {data.stack.map((item) => (
          <span className="pill" key={item}>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};
