import React from 'react';
import { Briefcase, ShoppingBag, Home, Monitor, User, TrendingUp } from 'lucide-react';

const WhoWeHelp: React.FC = () => {
  const industries = [
    { name: 'Agencies & Consultants', icon: Briefcase, desc: 'Scale client delivery without hiring more staff.' },
    { name: 'SaaS Companies', icon: Monitor, desc: 'Automate onboarding, support, and churn reduction.' },
    { name: 'E-commerce Brands', icon: ShoppingBag, desc: 'Handle orders, support, and inventory 24/7.' },
    { name: 'Real Estate Teams', icon: Home, desc: 'Auto-qualify leads and schedule viewings instantly.' },
    { name: 'Coaches & Creators', icon: User, desc: 'Automate student success and content distribution.' },
    { name: 'Growing SMBs', icon: TrendingUp, desc: 'Streamline operations to focus on growth.' },
  ];

  return (
    <section className="py-20 bg-slate-900/50 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Who We Help</h2>
          <p className="mt-4 text-lg text-slate-400">
            If your business uses CRM, email, spreadsheets, or custom tools — we can automate it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-800">
                <item.icon className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;