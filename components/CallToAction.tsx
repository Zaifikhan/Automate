import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
        {/* Background Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-slate-950 z-0" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to automate your business?
        </h2>
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          Scale your operations, reduce costs, and reclaim your time with our intelligent automation systems.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/923149525452"
              className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-bold text-lg transition-all shadow-xl shadow-primary-500/20 flex items-center justify-center gap-2 transform hover:scale-105"
            >
                <Calendar className="w-5 h-5" />
                Book Free Strategy Call
            </a>
            <a 
              href="https://wa.me/923149525452"
              className="px-8 py-4 bg-transparent border border-slate-600 hover:border-white text-white rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
                Message Us
                <ArrowRight className="w-5 h-5" />
            </a>
        </div>
        
        <p className="mt-8 text-sm text-slate-500">
            No commitment required. 100% free consultation.
        </p>
      </div>
    </section>
  );
};

export default CallToAction;