const mockIncidents = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics in product recommendations, creating unfair advantages and reinforcing societal biases. The issue was traced to training data imbalances.",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z"
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "LLM provided incorrect safety procedure information when queried about emergency protocols, potentially endangering users. The model confidently stated false information as fact without uncertainty indicators.",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z"
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata through response patterns. While no personally identifiable information was revealed, the pattern could potentially be exploited in larger-scale attacks.",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z"
  },
  {
    id: 4,
    title: "Autonomous System Override Failure",
    description: "Human override controls temporarily unresponsive in autonomous manufacturing system. Failsafe engaged correctly after 8-second delay, but highlighted potential risks in emergency situations.",
    severity: "High",
    reported_at: "2025-02-28T16:45:00Z"
  },
  {
    id: 5,
    title: "AI-Generated Content Misattribution",
    description: "AI system generated content that was mistakenly attributed to a real person, causing reputational damage. The system failed to properly indicate the synthetic nature of its outputs.",
    severity: "Medium",
    reported_at: "2025-03-05T11:30:00Z"
  }
];

export default mockIncidents; 