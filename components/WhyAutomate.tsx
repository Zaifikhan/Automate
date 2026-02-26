import React from 'react';

const WhyAutomate: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Autohandly?</h2>
            <div className="space-y-6">
              {[
                "Expert in AI agents & automation platforms",
                "Fast turnaround & delivery",
                "Secure & compliant workflows",
                "No-code + code solutions",
                "Custom-built for your business",
                "ROI-focused — not just “automation”"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-6 bg-slate-800/50 rounded-2xl border border-slate-700">
                <p className="text-slate-300 italic">
                  "Our systems reduce manual work by up to <span className="text-primary-400 font-bold">60%</span>, improve response time by <span className="text-primary-400 font-bold">80%</span>, and help businesses scale without hiring."
                </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center hover:border-primary-500/30 transition-colors">
              <div className="text-4xl font-bold text-primary-400 mb-2">60%</div>
              <div className="text-sm text-slate-400">Reduction in Manual Work</div>
            </div>
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center hover:border-primary-500/30 transition-colors">
              <div className="text-4xl font-bold text-indigo-400 mb-2">24/7</div>
              <div className="text-sm text-slate-400">Active Operations</div>
            </div>
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center hover:border-primary-500/30 transition-colors">
              <div className="text-4xl font-bold text-emerald-400 mb-2">80%</div>
              <div className="text-sm text-slate-400">Faster Response Time</div>
            </div>
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center hover:border-primary-500/30 transition-colors">
              <div className="text-4xl font-bold text-purple-400 mb-2">0</div>
              <div className="text-sm text-slate-400">New Hires Needed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAutomate;