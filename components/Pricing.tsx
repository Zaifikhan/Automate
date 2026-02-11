import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const tiers = [
    {
      name: "Starter Automation",
      desc: "Simple workflow or AI agent setup",
      delivery: "2–3 days",
      features: ["1–2 workflows", "1 platform integration", "Basic configuration", "Email support"],
      highlight: false
    },
    {
      name: "Growth Automation",
      desc: "Multi-step workflows + AI agents",
      delivery: "5–7 days",
      features: ["5–10 workflows", "Multiple integrations", "AI logic + CRM setup", "Priority support", "30-day warranty"],
      highlight: true
    },
    {
      name: "Scale Automation",
      desc: "End-to-end business automation system",
      delivery: "10–14 days",
      features: ["10+ complex workflows", "Custom AI agents + dashboards", "API + custom logic", "Dedicated Slack channel", "Ongoing optimization"],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pricing</h2>
          <p className="text-slate-400">Transparent starting points for your automation journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-8 rounded-2xl border ${
                tier.highlight 
                  ? 'bg-slate-800 border-primary-500 shadow-2xl shadow-primary-500/10 transform md:-translate-y-4' 
                  : 'bg-slate-950 border-slate-800'
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                  MOST POPULAR
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-slate-400 text-sm">{tier.desc}</p>
              </div>

              <div className="flex-1 mb-8">
                <div className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">Includes:</div>
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 ${tier.highlight ? 'text-primary-400' : 'text-slate-500'}`} />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-700/50">
                <div className="flex justify-between items-center mb-6">
                    <span className="text-slate-400 text-sm">Est. Delivery</span>
                    <span className="text-white font-bold">{tier.delivery}</span>
                </div>
                <a 
                  href="https://wa.me/923149525452"
                  className={`block w-full py-3 px-6 rounded-lg font-semibold transition-all text-center ${
                  tier.highlight 
                    ? 'bg-primary-600 hover:bg-primary-500 text-white shadow-lg shadow-primary-500/20' 
                    : 'bg-slate-800 hover:bg-slate-700 text-white'
                }`}>
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
           <a 
             href="https://wa.me/923149525452"
             className="text-slate-400 hover:text-white underline decoration-slate-700 underline-offset-4 transition-colors"
           >
               Request a Custom Quote
           </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;