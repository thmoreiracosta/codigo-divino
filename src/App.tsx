import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { ContentSection } from './components/ContentSection';
import { Pricing } from './components/Pricing';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
//import './App.css'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      <Navbar />
      <Hero />
      <Benefits />
      <ContentSection />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
}