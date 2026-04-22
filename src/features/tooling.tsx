import { useLoaderData } from "react-router-dom";
import { useMemo, useState } from "react";
import {
  simulateStructuredOutput,
  type StructuredSuggestion
} from "../lib/aiClient";

export const toolingLoader = async () => {
  return {
    model: "LLM API + Structured Outputs",
    lastUpdated: new Date().toISOString()
  };
};

export const ToolingPage = () => {
  const [prompt, setPrompt] = useState("Improve app routing and caching strategy");
  const [rows, setRows] = useState<StructuredSuggestion[]>([]);
  const [loading, setLoading] = useState(false);
  const data = useLoaderData() as Awaited<ReturnType<typeof toolingLoader>>;

  const summary = useMemo(
    () => `${rows.length} structured suggestions generated`,
    [rows.length]
  );

  const handleGenerate = async () => {
    setLoading(true);
    const output = await simulateStructuredOutput(prompt);
    setRows(output);
    setLoading(false);
  };

  return (
    <section>
      <h2>Tooling Lab</h2>
      <p>
        {data.model} · Last updated {new Date(data.lastUpdated).toLocaleString()}
      </p>
      <label className="stacked">
        Prompt for AI pair-programmer
        <textarea
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          rows={3}
        />
      </label>
      <button onClick={handleGenerate} disabled={loading}>
        {loading ? "Generating..." : "Generate Structured Plan"}
      </button>
      <p>{summary}</p>
      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>Why</th>
            <th>Impact</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.title}>
              <td>{row.title}</td>
              <td>{row.rationale}</td>
              <td>{row.impact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
