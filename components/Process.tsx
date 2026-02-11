import React from 'react';
import { Search, PenTool, Hammer, TestTube, Rocket } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    { icon: Search, title: "Audit", desc: "We analyze your current tools, workflows, and bottlenecks." },
    { icon: PenTool, title: "Design", desc: "We architect the optimal automation + AI system." },
    { icon: Hammer, title: "Build", desc: "We implement workflows, AI agents, and integrations." },
    { icon: TestTube, title: "Test", desc: "We test, optimize, and ensure reliability." },
    { icon: Rocket, title: "Deploy", desc: "We deploy and support your system long-term." },
  ];

  return (
    <section id="process" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-slate-400">A simple, transparent process to get you automated.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-primary-500 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] flex items-center justify-center mb-6 transition-all duration-300 relative bg-slate-950">
                  <step.icon className="w-6 h-6 text-slate-400 group-hover:text-primary-400 transition-colors" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-slate-800 rounded-full flex items-center justify-center text-xs font-bold text-white border border-slate-700">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 px-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;