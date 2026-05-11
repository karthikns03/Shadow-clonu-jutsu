export const curriculum = [
  {
    id: 1,
    title: "LLM Internals + Raw API Mastery",
    briefing: "Understand what you're actually working with before abstracting anything. Today we cover transformer architecture intuition, tokens vs words, context window mechanics, system prompts, temperature, top_p, top_k, streaming responses, and the difference between a chatbot, an assistant, and an agent.",
    concepts: `
### Tokens vs Words
Tokens are the atomic units of LLMs. A token is roughly 4 characters or 0.75 words. Cost, context size, and chunking are all bounded by tokens, not words.
### Context Window Mechanics
What fits, what gets cut, why order matters. LLMs have a maximum context window. If you exceed it, the API will throw an error or truncate.
### System Prompts
Instructions given to the model at the API level that shape its persona and boundaries.
### Streaming Responses
Why agents must stream: latency. Waiting for a 1000-token response synchronously blocks the UI for 10+ seconds.
    `,
    codeLabs: [
      {
        title: "Lab 1: Direct API Call",
        description: "Call Claude API with full parameter control.",
        code: `import Anthropic from '@anthropic-ai/sdk';\n\nconst anthropic = new Anthropic({ apiKey: 'YOUR_API_KEY' });\n\nasync function main() {\n  const msg = await anthropic.messages.create({\n    model: "claude-3-5-sonnet-20241022",\n    max_tokens: 1024,\n    temperature: 0.7,\n    system: "You are a helpful assistant.",\n    messages: [{ role: "user", content: "Hello, world" }],\n  });\n  console.log(msg.content);\n}\nmain();`
      }
    ],
    quiz: [
      {
        question: "What happens when a prompt exceeds the context window?",
        answer: "API error or truncation"
      },
      {
        question: "Why does temperature=0 not guarantee determinism?",
        answer: "Floating point math differences across GPUs"
      }
    ],
    project: "Build a raw API wrapper class with retry logic, cost tracking, streaming support, and configurable parameters.",
    checkpoint: "Can you explain, without notes, why token count affects agent design?"
  },
  {
    id: 2,
    title: "Tool Use and Function Calling",
    briefing: "Tool use is the atomic unit of agent behaviour. Master it completely. Today covers how function calling works at the API level, tool schemas, parallel tool calls, tool result handling, tool choice forcing vs auto, the tool call loop, and security.",
    concepts: "Tools let LLMs interact with the outside world. It's an API standard where the model outputs JSON conforming to a schema you provide.",
    codeLabs: [],
    quiz: [],
    project: "A CLI 'super-agent' that can search the web, read/write local files, execute Python snippets, and make HTTP calls.",
    checkpoint: "Can you implement a tool-call loop from memory in under 20 minutes?"
  },
  {
    id: 3,
    title: "Agent Loops, Planning, and Self-Correction",
    briefing: "The loop is everything. Build agents that think before they act. Covers ReAct pattern, Chain-of-Thought, planning agents, self-correction loops, and loop termination.",
    concepts: "An agent loop takes a task, thinks, acts, observes the result, and repeats until it decides it's done.",
    codeLabs: [],
    quiz: [],
    project: "A 'research and report' agent.",
    checkpoint: "Can you draw the full ReAct loop on a whiteboard including error paths?"
  },
  { id: 4, title: "Memory Architecture: Short, Long, and Episodic", briefing: "Memory is what separates a single-session toy from a real agent system.", concepts: "...", codeLabs: [], quiz: [], project: "Personal assistant with persistent memory.", checkpoint: "Explain RAG pipeline." },
  { id: 5, title: "Multi-Agent Systems: Orchestration and Swarms", briefing: "Real production systems are networks of agents, not single agents.", concepts: "...", codeLabs: [], quiz: [], project: "Content factory multi-agent system.", checkpoint: "Design a multi-agent topology." },
  { id: 6, title: "Reliability, Evals, and Production Hardening", briefing: "Agents that work in demos are easy. Agents that work in production are hard.", concepts: "...", codeLabs: [], quiz: [], project: "Harden Day 3's research agent.", checkpoint: "Explain failure modes." },
  { id: 7, title: "Advanced Patterns: RAG++, Caching, and Tool Ecosystems", briefing: "Techniques that separate junior AI devs from senior AI engineers.", concepts: "...", codeLabs: [], quiz: [], project: "Upgrade Day 4's assistant with advanced RAG.", checkpoint: "Explain re-ranking." },
  { id: 8, title: "Deployment: APIs, Async, Scale, and Cost", briefing: "Shipping an agent that works for 1000 users.", concepts: "...", codeLabs: [], quiz: [], project: "Deploy Day 5's content factory as API.", checkpoint: "Deploy to VPS." },
  { id: 9, title: "Frontend Integration and User-Facing Agent UX", briefing: "Agents need interfaces. Understand what makes agent UX different.", concepts: "...", codeLabs: [], quiz: [], project: "Full-stack agent app.", checkpoint: "Is your agent app live?" },
  { id: 10, title: "Capstone, Portfolio, and Career Positioning", briefing: "Consolidate everything. Ship your portfolio piece.", concepts: "...", codeLabs: [], quiz: [], project: "Autonomous Coding, Data Analyst, or Support Agent.", checkpoint: "Final Quiz." }
];
