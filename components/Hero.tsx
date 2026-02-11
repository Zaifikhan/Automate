import React from 'react';
import { ArrowRight, CheckCircle2, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[120px] animate-blob mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm mb-8">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-slate-300">AI Agents That Scale Your Business</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-tight">
          Automate Your Business. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-500">
            Multiply Your Output.
          </span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10">
          Stop wasting hours on repetitive tasks. We build intelligent systems that handle sales, support, and operations — 24/7.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a 
            href="https://wa.me/923149525452"
            className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-semibold text-lg transition-all shadow-lg shadow-primary-500/25 flex items-center justify-center gap-2"
          >
            Book Strategy Call <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="https://wa.me/923149525452"
            className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold text-lg transition-all border border-slate-700 flex items-center justify-center gap-2"
          >
            Get Free Audit <PlayCircle className="w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left max-w-5xl mx-auto">
          {[
            "AI Agents for Sales & Support",
            "Workflow Automation (n8n, Make)",
            "API Integrations & Systems",
            "Custom AI Dashboards"
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm">
              <CheckCircle2 className="w-5 h-5 text-primary-400 flex-shrink-0" />
              <span className="text-sm font-medium text-slate-300">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;