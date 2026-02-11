import React from 'react';

const TechStack: React.FC = () => {
  const stack = [
    {
      category: "Automation",
      tools: ["n8n", "Zapier", "Make.com", "Power Automate", "Workato"]
    },
    {
      category: "AI & Agents",
      tools: ["OpenAI", "Claude", "LLaMA", "LangChain", "CrewAI", "Retell AI", "Vapi AI"]
    },
    {
      category: "Backend & Apps",
      tools: ["Python", "Node.js", "React", "Next.js", "FastAPI", "Webhooks"]
    },
    {
      category: "Business Tools",
      tools: ["HubSpot", "Salesforce", "Airtable", "Notion", "Slack", "Shopify"]
    }
  ];

  return (
    <section id="tech" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our Tech Stack</h2>
          <p className="text-slate-400">We use the best tools in the industry to build your systems.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stack.map((group, idx) => (
            <div key={idx} className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-primary-400 mb-4 border-b border-slate-800 pb-2">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.tools.map((tool, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-md border border-slate-700/50 hover:bg-slate-700 transition-colors cursor-default">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;