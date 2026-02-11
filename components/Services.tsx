import React from 'react';
import { Bot, GitMerge, Plug, BarChart3, MessageSquare, Mic, UserPlus } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What We Do</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            We build intelligent systems that replace manual work, streamline operations, and drive revenue.
          </p>
        </div>

        <div className="space-y-24">
          {/* Service 1: AI Agents */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-4">
                <Bot className="w-4 h-4" /> AI Agent Development
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Intelligent Agents That Work 24/7</h3>
              <p className="text-slate-400 mb-8 text-lg">
                We build AI agents that qualify leads, respond to customers instantly, and handle bookings without human intervention.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: MessageSquare, text: "Chat Agents" },
                  { icon: Mic, text: "Voice Agents" },
                  { icon: UserPlus, text: "Sales Agents" },
                  { icon: Bot, text: "Internal Ops Agents" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/50 border border-slate-800">
                    <item.icon className="w-5 h-5 text-indigo-400" />
                    <span className="text-slate-300 font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative group">
              <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative rounded-2xl bg-slate-900 border border-slate-800 p-8 hover:border-indigo-500/50 transition-colors">
                {/* Mock Chat Interface */}
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0" />
                    <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none max-w-[80%]">
                      <p className="text-xs text-slate-400 mb-1">Lead</p>
                      <p className="text-sm text-slate-300">Hi, I'm interested in automating my sales process.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-indigo-600/20 border border-indigo-600/30 p-3 rounded-2xl rounded-tr-none max-w-[80%]">
                      <p className="text-xs text-indigo-300 mb-1">AI Agent</p>
                      <p className="text-sm text-white">I can help with that! We build custom sales agents that qualify leads 24/7. Would you like to see a demo?</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0" />
                    <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none max-w-[80%]">
                      <p className="text-xs text-slate-400 mb-1">Lead</p>
                      <p className="text-sm text-slate-300">Yes, that sounds perfect.</p>
                    </div>
                  </div>
                  <div className="flex justify-center pt-2">
                    <span className="text-xs text-slate-500 font-mono">Agent booking meeting...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2: Workflow Automation */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative rounded-2xl bg-slate-900 border border-slate-800 p-8 hover:border-primary-500/50 transition-colors h-full flex flex-col justify-center">
                 {/* Visual Representation of Workflow */}
                 <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-4 w-full p-4 bg-slate-800 rounded-lg border border-slate-700">
                      <div className="w-10 h-10 rounded bg-orange-500/20 flex items-center justify-center text-orange-500 font-bold">Hz</div>
                      <div className="flex-1">
                        <div className="h-2 w-24 bg-slate-600 rounded mb-2"></div>
                        <div className="h-2 w-16 bg-slate-700 rounded"></div>
                      </div>
                      <div className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">New Lead</div>
                    </div>
                    
                    <div className="h-8 w-0.5 bg-slate-700 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-slate-500 rounded-full"></div>
                    </div>

                    <div className="flex items-center gap-4 w-full p-4 bg-slate-800 rounded-lg border border-slate-700">
                      <div className="w-10 h-10 rounded bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold">AI</div>
                      <div className="flex-1">
                        <div className="h-2 w-32 bg-slate-600 rounded mb-2"></div>
                        <div className="h-2 w-20 bg-slate-700 rounded"></div>
                      </div>
                      <div className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">Qualify</div>
                    </div>

                    <div className="h-8 w-0.5 bg-slate-700 relative">
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-slate-500 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 w-full">
                       <div className="p-4 bg-slate-800 rounded-lg border border-slate-700 text-center">
                          <span className="text-xs text-slate-400">Slack Alert</span>
                       </div>
                       <div className="p-4 bg-slate-800 rounded-lg border border-slate-700 text-center">
                          <span className="text-xs text-slate-400">CRM Update</span>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium mb-4">
                <GitMerge className="w-4 h-4" /> Workflow Automation
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Seamless End-to-End Workflows</h3>
              <p className="text-slate-400 mb-8 text-lg">
                We design robust workflows using n8n, Zapier, and Make. From lead routing to CRM updates and social media automation.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Lead capture & routing logic",
                  "Automated CRM updates & data entry",
                  "Email & SMS follow-up sequences",
                  "Data sync across disparate tools",
                  "Error handling & system monitoring"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-400" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Service 3: Integrations & Ops */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4">
                <Plug className="w-4 h-4" /> Integrations & Ops
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Connect Everything. Automate Operations.</h3>
              <p className="text-slate-400 mb-8 text-lg">
                We connect tools that don't natively talk to each other and build custom dashboards to visualize your automated business.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <BarChart3 className="w-8 h-8 text-emerald-400 mb-3" />
                  <h4 className="font-semibold text-white mb-1">Business Ops</h4>
                  <p className="text-sm text-slate-400">Invoicing, task management, and team KPI reporting.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <Plug className="w-8 h-8 text-emerald-400 mb-3" />
                  <h4 className="font-semibold text-white mb-1">API Systems</h4>
                  <p className="text-sm text-slate-400">Webhooks, REST APIs, and custom connectors.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative group">
                <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="relative rounded-2xl bg-slate-900 border border-slate-800 p-8 hover:border-emerald-500/50 transition-colors flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4 w-full opacity-80">
                     {[1,2,3,4,5,6,7,8,9].map((n) => (
                        <div key={n} className="aspect-square bg-slate-800 rounded-lg flex items-center justify-center animate-pulse" style={{ animationDelay: `${n * 100}ms`}}>
                             <div className="w-8 h-1 bg-slate-700 rounded"></div>
                        </div>
                     ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-slate-950 border border-slate-700 px-6 py-3 rounded-xl shadow-2xl">
                          <span className="text-emerald-400 font-bold font-mono">API Connected</span>
                      </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;