import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeHelp from './components/WhoWeHelp';
import Services from './components/Services';
import Process from './components/Process';
import WhyAutomate from './components/WhyAutomate';
import TechStack from './components/TechStack';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-primary-500 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <WhoWeHelp />
        <Services />
        <Process />
        <WhyAutomate />
        <TechStack />
        <Pricing />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;