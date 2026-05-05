/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, 
  Send, 
  Users, 
  MapPin, 
  QrCode, 
  ChevronRight, 
  Sparkles, 
  CheckCircle2,
  Menu,
  X,
  CreditCard,
  MessageSquare
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-paper/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 border border-gold rounded-full flex items-center justify-center bg-white">
            <span className="text-gold serif font-bold text-xl">M</span>
          </div>
          <span className="text-2xl serif font-bold tracking-tight accent-gold">MUNASABAT</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
          <a href="#templates" className="hover:text-gold transition-colors">Templates</a>
          <a href="#features" className="hover:text-gold transition-colors">Features</a>
          <a href="#pricing" className="hover:text-gold transition-colors">Pricing</a>
          <button className="px-6 py-2 border border-gold/40 rounded-full hover:bg-gold/5 transition-all text-gold">
            Sign In
          </button>
        </div>

        <button 
          className="md:hidden text-charcoal"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white p-6 flex flex-col gap-6 md:hidden border-b border-gold/10 shadow-xl"
          >
            <a href="#templates" className="text-xl serif">Templates</a>
            <a href="#features" className="text-xl serif">Features</a>
            <a href="#pricing" className="text-xl serif">Pricing</a>
            <button className="w-full py-4 bg-gold text-white rounded-xl font-bold uppercase tracking-widest text-xs">
              GET STARTED
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const TemplateCard = ({ title, img, category }: { title: string, img: string, category: string }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative aspect-[3/4] rounded-3xl overflow-hidden bg-white border border-gold/20 card-shadow cursor-pointer"
    >
      <img 
        src={img} 
        alt={title} 
        className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" 
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent p-8 flex flex-col justify-end">
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/70 mb-2">{category}</span>
        <h3 className="text-2xl serif text-white">{title}</h3>
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 mt-4 text-[10px] font-bold tracking-widest text-gold uppercase"
        >
          Customize <ChevronRight size={14} />
        </motion.div>
      </div>
    </motion.div>
  );
};

const FeatureItem = ({ icon: Icon, title, desc, arabicTitle }: any) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-8 rounded-[2.5rem] bg-white border border-gold/10 hover:border-gold/30 transition-all group card-shadow"
    >
      <div className="w-14 h-14 bg-sand rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Icon className="text-gold" size={28} />
      </div>
      <div className="mb-2 flex items-baseline gap-3">
        <h3 className="text-xl serif font-semibold">{title}</h3>
        <span className="text-xs font-arabic text-gold/60 font-bold">{arabicTitle}</span>
      </div>
      <p className="text-neutral-500 text-sm leading-relaxed font-light">{desc}</p>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [view, setView] = useState<'landing' | 'builder'>('landing');

  if (view === 'builder') {
    return (
      <div className="min-h-screen bg-paper flex flex-col md:flex-row">
        {/* Builder Sidebar */}
        <div className="w-full md:w-80 border-r border-gold/20 p-8 flex flex-col gap-10 bg-white shadow-sm">
          <button 
            onClick={() => setView('landing')}
            className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 hover:text-gold flex items-center gap-2 font-bold"
          >
            <ChevronRight className="rotate-180" size={14} /> Back to Dashboard
          </button>
          
          <div>
            <h2 className="serif text-3xl mb-8">Personalize</h2>
            <div className="space-y-6">
              <div className="border-b border-gold/10 pb-4">
                <label className="text-[9px] uppercase tracking-widest text-neutral-400 block mb-2 font-bold">Event Title</label>
                <input type="text" className="w-full bg-transparent border-none p-0 text-sm serif italic focus:outline-none placeholder:text-neutral-300" placeholder="e.g. Wedding of Sultan & Amira" defaultValue="Wedding of Lujain & Faisal" />
              </div>
              <div className="border-b border-gold/10 pb-4">
                <label className="text-[9px] uppercase tracking-widest text-neutral-400 block mb-2 font-bold">Location</label>
                <input type="text" className="w-full bg-transparent border-none p-0 text-sm focus:outline-none placeholder:text-neutral-300" placeholder="Venue name..." defaultValue="The Ritz-Carlton, Riyadh" />
              </div>
              <div>
                <label className="text-[9px] uppercase tracking-widest text-neutral-400 block mb-2 font-bold">Theme Palette</label>
                <div className="flex gap-3">
                  {['#8B7355', '#064E3B', '#2D2926', '#F3EFE9'].map(c => (
                    <button key={c} className="w-6 h-6 rounded-full border border-gold/20" style={{ backgroundColor: c }} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-gold/10">
            <button className="w-full py-4 bg-charcoal text-white font-bold rounded-full flex items-center justify-center gap-2 hover:bg-gold transition-colors text-xs tracking-widest uppercase">
              <Send size={16} /> SEND INVITES
            </button>
          </div>
        </div>

        {/* Builder Preview Area */}
        <div className="flex-1 p-8 md:p-20 flex items-center justify-center bg-sand overflow-auto relative">
          <div className="absolute top-10 right-10">
              <span className="vertical-text text-[8px] tracking-[0.4em] opacity-30 font-bold uppercase">Munasabat Digital Heritage</span>
          </div>

          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-sm aspect-[9/16] bg-white rounded-3xl card-shadow overflow-hidden border border-gold/20 relative"
          >
             <div className="absolute inset-0 bg-[#FDFBF7] flex flex-col p-10 items-center text-center">
                <div className="w-full h-full border border-gold/20 rounded-2xl flex flex-col p-6 justify-center items-center relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-20"></div>
                  
                  <span className="text-gold serif italic text-xs tracking-[0.2em] uppercase mb-8">You are invited</span>
                  
                  <h1 className="serif text-4xl font-light text-charcoal mb-4 leading-tight">Lujain & Faisal</h1>
                  <div className="h-px w-12 bg-gold/40 mx-auto mb-8"></div>
                  
                  <p className="text-neutral-500 text-[10px] tracking-widest uppercase mb-2">The favor of your presence is requested at</p>
                  <p className="text-neutral-800 text-xs font-bold mb-8">THE CELEBRATION OF MARRIAGE</p>
                  
                  <div className="space-y-2 text-[10px] tracking-[0.2em] uppercase text-gold font-bold">
                    <p>Friday, 21 June 2026</p>
                    <p>8:00 PM</p>
                  </div>

                  <div className="mt-12 flex flex-col items-center">
                     <div className="w-16 h-16 bg-charcoal rounded-lg flex items-center justify-center mb-2">
                        <QrCode className="text-white/20" size={32} />
                     </div>
                     <p className="text-[8px] tracking-[0.3em] opacity-40 font-bold uppercase">SECURE ENTRY QR</p>
                  </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-x-hidden pt-20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-6">
        <div className="absolute inset-0 z-0 overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-sand rounded-full opacity-40 blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white border border-gold/20 rounded-full mb-10 shadow-sm">
              <Sparkles className="text-gold" size={14} />
              <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-neutral-500">The GCC Premiere Digital Hub</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl serif font-light leading-[1.1] tracking-tight mb-10">
              Personalization <span className="italic gold-shimmer block">at its finest.</span>
            </h1>

            <p className="text-base md:text-lg text-neutral-500 max-w-lg mb-12 leading-relaxed font-light">
              Craft sophisticated digital invitations that honor Saudi heritage. Seamless WhatsApp delivery, intelligent RSVP management, and timeless luxury design.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => setView('builder')}
                className="px-12 py-5 bg-charcoal text-white font-bold rounded-full flex items-center justify-center gap-3 hover:bg-gold transition-all shadow-xl group uppercase tracking-widest text-xs"
              >
                Create Your Legacy <Plus className="group-hover:rotate-90 transition-transform" size={16} />
              </button>
              <button className="px-12 py-5 bg-white border border-gold/20 text-charcoal font-bold rounded-full hover:bg-sand transition-colors uppercase tracking-widest text-xs">
                View Gallery
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-[420px] mx-auto aspect-[9/18] bg-sand rounded-[3rem] border border-gold/10 shadow-2xl p-6 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549416878-b9ca35c24346?q=80&w=2670&auto=format&fit=crop')] bg-cover opacity-10" />
                <div className="relative h-full w-full bg-white rounded-[2rem] flex flex-col items-center justify-center text-center p-10 border border-gold/20 shadow-sm">
                   <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center mb-10 bg-paper">
                     <Sparkles className="text-gold" size={24} />
                   </div>
                   <h2 className="text-4xl serif italic mb-4 tracking-tight">The Al-Majlis Suite</h2>
                   <p className="font-arabic text-gold/70 text-xs mb-16 font-bold tracking-widest">فخامة التفاصيل في كل دعوة</p>
                   
                   <div className="w-full space-y-5">
                      <div className="flex justify-between items-center text-[9px] uppercase tracking-widest border-b border-gold/10 pb-2">
                        <span className="opacity-40 font-bold">Event Status</span>
                        <span className="text-gold font-bold">Execution Ready</span>
                      </div>
                      <div className="flex justify-between items-center text-[9px] uppercase tracking-widest border-b border-gold/10 pb-2">
                        <span className="opacity-40 font-bold">Delivery</span>
                        <span className="text-charcoal font-bold font-arabic">عبر واتساب</span>
                      </div>
                   </div>
                   
                   <button className="mt-16 w-full py-5 bg-charcoal text-white font-bold rounded-2xl text-[10px] tracking-[0.3em] uppercase">
                      Confirm Attendance
                   </button>
                </div>
            </div>

            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-20 -right-4 md:-right-12 bg-white p-5 rounded-2xl border border-gold/20 shadow-xl flex items-center gap-4 z-20"
            >
               <Users className="text-gold" size={20} />
               <div className="pr-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-charcoal">12.4% Viral</p>
                  <p className="text-[8px] text-neutral-400 uppercase tracking-widest">Growth Loop Active</p>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-32 px-6 bg-sand/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">Section 05: Collections</span>
              <h2 className="text-5xl md:text-6xl serif font-light leading-tight">Timeless <span className="italic block">Digital Craft</span></h2>
            </div>
            <button className="text-charcoal text-[9px] font-bold tracking-[0.3em] flex items-center gap-3 group uppercase border-b border-gold/30 pb-2">
               Explore Full Archives <ChevronRight className="group-hover:translate-x-1 transition-transform" size={14} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <TemplateCard category="Weddings" title="The Ritz Gala" img="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2669&auto=format&fit=crop" />
            <TemplateCard category="VIP" title="Desert Royal" img="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2670&auto=format&fit=crop" />
            <TemplateCard category="Modern" title="Heritage Minimal" img="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=2574&auto=format&fit=crop" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-40 px-6 bg-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-paper to-transparent" />
         
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-32">
               <span className="text-gold text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block">Market Optimization</span>
               <h2 className="text-5xl md:text-7xl serif font-light mb-8">Cultural <span className="italic">Excellence</span></h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureItem 
                icon={MessageSquare} 
                title="WhatsApp-First" 
                arabicTitle="تكامل واتساب" 
                desc="Direct high-rate delivery through the region's preferred communication channel. Automated follow-ups."
              />
              <FeatureItem 
                icon={Users} 
                title="Private RSVPs" 
                arabicTitle="إحصائيات الحضور" 
                desc="Manage large multi-day guest lists with privacy toggles and dietary tracking for high-end banquets."
              />
              <FeatureItem 
                icon={QrCode} 
                title="Secure Entry" 
                arabicTitle="باركود ذكي" 
                desc="Unique identification for VIP events. Fast check-ins that maintain the ceremony's prestige at the gate."
              />
              <FeatureItem 
                icon={Sparkles} 
                title="Gemini AI" 
                arabicTitle="الذكاء الاصطناعي" 
                desc="Generate formal Arabic poetic copy and design suggestions using advanced Saudi-tuned language models."
              />
              <FeatureItem 
                icon={MapPin} 
                title="Gated Navigation" 
                arabicTitle="التوجيه للموقع" 
                desc="Precise coordinate sharing for luxury villas and hotel ballroom entrances. Avoid guests' confusion."
              />
              <FeatureItem 
                icon={CreditCard} 
                title="GCC Payments" 
                arabicTitle="بوابات دفع محلية" 
                desc="Native support for Mada, STC Pay, and Moyasar, ensuring frictionless high-value transactions."
              />
            </div>
         </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-40 px-6 bg-paper">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-gold text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">Investment Packages</span>
            <h2 className="text-5xl md:text-6xl serif font-light">Elegance at Every <span className="italic">Scale</span></h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Majlis Tier */}
            <div className="bg-white p-10 rounded-[3rem] border border-gold/10 flex flex-col items-center text-center card-shadow relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gold/10 group-hover:bg-gold/30 transition-colors" />
              <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 font-bold mb-8">Majlis Suite</span>
              <div className="flex items-baseline gap-2 mb-10">
                <span className="text-4xl serif">99</span>
                <span className="text-md text-gold serif italic">SAR</span>
              </div>
              <ul className="space-y-4 mb-12 flex-1">
                {["Up to 200 Guests", "Dynamic Location Map", "Modern Template Library", "Standard Support"].map(item => (
                  <li key={item} className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium">{item}</li>
                ))}
              </ul>
              <button className="w-full py-4 border border-gold/20 text-charcoal rounded-full text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-sand transition-colors">
                Select Majlis
              </button>
            </div>

            {/* Signature Tier - Anchor */}
            <div className="bg-charcoal p-12 rounded-[3.5rem] border border-gold/30 flex flex-col items-center text-center shadow-2xl relative scale-105 z-10 overflow-hidden">
              <div className="absolute top-0 right-0 p-6">
                <Sparkles className="text-gold/20" size={40} />
              </div>
              <div className="px-5 py-1.5 bg-gold text-white text-[8px] font-bold tracking-[0.3em] rounded-full uppercase absolute -top-4">
                Most Chosen
              </div>
              <span className="text-[9px] uppercase tracking-[0.3em] text-gold font-bold mb-8">Signature Suite</span>
              <div className="flex items-baseline gap-2 mb-10">
                <span className="text-6xl serif text-white">249</span>
                <span className="text-xl text-gold serif italic">SAR</span>
              </div>
              <ul className="space-y-4 mb-12 flex-1">
                {["Unlimited Guests", "WhatsApp Auto-Delivery", "Secure QR Check-in", "Live Guest Analytics", "Pro Template Access"].map(item => (
                  <li key={item} className="text-[10px] uppercase tracking-widest text-white/70 font-bold">{item}</li>
                ))}
              </ul>
              <button className="w-full py-5 bg-gold text-white rounded-full text-[10px] font-bold uppercase tracking-[0.3em] hover:scale-105 transition-transform shadow-lg shadow-gold/20">
                Select Signature
              </button>
            </div>

            {/* Royal Tier */}
            <div className="bg-white p-10 rounded-[3rem] border border-gold/10 flex flex-col items-center text-center card-shadow relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gold/10 group-hover:bg-gold/30 transition-colors" />
              <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 font-bold mb-8">Royal Curated</span>
              <div className="flex items-baseline gap-2 mb-10">
                <span className="text-4xl serif">999</span>
                <span className="text-md text-gold serif italic">SAR</span>
              </div>
              <ul className="space-y-4 mb-12 flex-1">
                {["Bespoke Artist Design", "Dedicated Coordinator", "Snapchat AR Filter", "Physical Guestbook", "White-label Domain"].map(item => (
                  <li key={item} className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium">{item}</li>
                ))}
              </ul>
              <button className="w-full py-4 border border-gold/20 text-charcoal rounded-full text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-sand transition-colors">
                Contact Concierge
              </button>
            </div>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-40 grayscale pointer-events-none">
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold italic">Mada Secured</span>
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold italic">Apple Pay</span>
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold italic">STC Pay</span>
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold italic">Moyasar Gateway</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-gold/10 bg-paper">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-8">
                <div className="w-10 h-10 border border-gold rounded-full flex items-center justify-center">
                  <span className="text-gold serif font-bold text-xl">M</span>
                </div>
                <span className="text-2xl serif font-bold tracking-tight">MUNASABAT</span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold max-w-xs leading-loose">Refining GCC hospitality through digital artistic innovation. Headquartered in Riyadh.</p>
            </div>

            <div className="flex gap-16 text-[9px] uppercase tracking-[0.4em] font-bold text-neutral-400">
               <a href="#" className="hover:text-gold transition-colors">Instagram</a>
               <a href="#" className="hover:text-gold transition-colors">Snapchat</a>
               <a href="#" className="hover:text-gold transition-colors">Contact</a>
            </div>

            <div className="text-[8px] text-neutral-300 uppercase tracking-[0.5em] font-bold italic">
               Confidential Property of Munasabat Digital 2026
            </div>
         </div>
      </footer>
    </div>
  );
}
