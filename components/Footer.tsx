import React from 'react';
import { Bot, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
               <Bot className="h-6 w-6 text-primary-400" />
               <span className="font-bold text-xl text-white">Autoflows</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm">
              AI Automation • AI Agents • Business Systems • API Integrations. 
              We help businesses scale without hiring.
            </p>
            <div className="flex gap-4">
                <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-primary-400 transition-colors">AI Agents</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Workflow Automation</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Consulting</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-primary-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Process</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-sm">
                © {new Date().getFullYear()} Autoflows. Serving clients worldwide.
            </p>
            <div className="flex gap-6 text-sm text-slate-600">
                <a href="#" className="hover:text-slate-400">Privacy Policy</a>
                <a href="#" className="hover:text-slate-400">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;