import { z } from "zod";

const structuredSuggestionSchema = z.object({
  title: z.string(),
  rationale: z.string(),
  impact: z.enum(["high", "medium", "low"])
});

export type StructuredSuggestion = z.infer<typeof structuredSuggestionSchema>;

export const simulateStructuredOutput = async (
  prompt: string
): Promise<StructuredSuggestion[]> => {
  const generated = [
    {
      title: "Use route-level loaders",
      rationale: "Pre-fetch data on navigation for responsive UIs.",
      impact: "high"
    },
    {
      title: "Add deterministic eval checks",
      rationale: "Validate generated code before merge.",
      impact: "high"
    },
    {
      title: "Cache LLM responses",
      rationale: "Avoid duplicate prompt costs and latency.",
      impact: "medium"
    }
  ];

  if (!prompt.trim()) {
    return [];
  }

  return generated.map((item) => structuredSuggestionSchema.parse(item));
};
