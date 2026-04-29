import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  Search, 
  Cpu, 
  Layers, 
  MapPin, 
  ArrowRight, 
  Maximize, 
  Compass,
  Menu,
  X,
  Sparkles,
  Phone,
  Mail,
  Instagram,
  Facebook
} from 'lucide-react';
import { PROJECTS, HouseProject } from './types.ts';
import { generateHouseConcept } from './lib/gemini.ts';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<HouseProject | null>(null);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [aiPrompt, setAiPrompt] = useState("");
  const [aiResult, setAiResult] = useState<any>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAiSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!aiPrompt.trim()) return;
    setIsAiLoading(true);
    const result = await generateHouseConcept(aiPrompt);
    setAiResult(result);
    setIsAiLoading(false);
  };

  return (
    <div className="min-h-screen bg-[var(--color-brand-dark)] architectural-grid">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl px-6 py-4 flex justify-between items-center text-white">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 border-2 border-white flex items-center justify-center font-display font-bold">Z</div>
          <span className="font-display text-xl font-bold tracking-tighter uppercase hidden md:block">Zamonaviy Uy</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-white/70">
          <a href="#projects" className="hover:text-white transition-colors">Loyihalar</a>
          <a href="#ai-architect" className="hover:text-white transition-colors">AI Arxitektor</a>
          <a href="#contact" className="hover:text-white transition-colors">Bog'lanish</a>
        </div>

        <button 
          onClick={() => setIsAiModalOpen(true)}
          className="px-6 py-2 bg-white text-black font-display font-bold text-xs uppercase tracking-widest hover:bg-[var(--color-brand-gold)] hover:text-white transition-all flex items-center gap-2"
        >
          <Sparkles size={14} /> Loyiha yaratish
        </button>
      </nav>

      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-[var(--color-brand-gold)] z-[60] transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-dark)] via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-4xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-6 text-white uppercase">
              KELAJAK <br /> <span className="text-[var(--color-brand-gold)]">UYINI</span> QURING
            </h1>
            <p className="max-w-2xl mx-auto text-white/60 text-lg md:text-xl font-light mb-10">
              Biz faqat uylar emas, hayot tarzi yaratamiz. Zamonaviy arxitektura, innovatsiyalar va tabiat uyg'unligi.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="#projects" className="px-10 py-4 border border-white/20 hover:bg-white hover:text-black transition-all font-display font-bold uppercase tracking-widest text-sm flex items-center gap-2 text-white">
                Loyihalarni ko'rish <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-10 hidden lg:block">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col">
              <span className="text-[var(--color-brand-gold)] font-display text-4xl font-bold">50+</span>
              <span className="text-white/40 text-xs uppercase tracking-widest text-white">Tugallangan loyihalar</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[var(--color-brand-gold)] font-display text-4xl font-bold">12</span>
              <span className="text-white/40 text-xs uppercase tracking-widest text-white">Xalqaro mukofotlar</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-32 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div>
            <span className="text-[var(--color-brand-gold)] font-display font-bold uppercase tracking-[0.3em] text-xs">Bizning Loyihalar</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight mt-4 italic text-white uppercase">ZAMONAVIY PORTFOLIO</h2>
          </div>
          <div className="text-white/40 max-w-sm text-right">
            Har bir loyiha bizning mijozlarimiz kutganlaridan ham yuqori natija berishi uchun bor kuchimizni sarflaymiz.
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 outline outline-1 outline-white/10">
          {PROJECTS.map((project) => (
            <motion.div 
              key={project.id}
              whileHover={{ scale: 1.02 }}
              className="group relative h-[600px] overflow-hidden cursor-pointer bg-[var(--color-brand-dark)]"
              onClick={() => setSelectedProject(project)}
            >
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              
              <div className="absolute top-10 left-10">
                <span className="px-4 py-1 border border-white/20 bg-black/40 backdrop-blur-sm text-[10px] uppercase tracking-widest text-white">
                  {project.style}
                </span>
              </div>

              <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end text-white">
                <div>
                  <h3 className="font-display text-4xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.name}</h3>
                  <p className="text-white/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{project.area}</p>
                </div>
                <div className="w-12 h-12 bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 rotate-90 group-hover:rotate-0 transform transition-transform">
                  <ArrowRight size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI Architect CTA */}
      <section id="ai-architect" className="py-20 relative overflow-hidden bg-white text-black">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-black/40 font-display font-bold uppercase tracking-[0.3em] text-xs">Innovatsiya</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight mt-4 text-black italic">AI BILAN LOYIHALANG</h2>
            <p className="mt-8 text-black/70 text-lg leading-relaxed">
              Bizning sun'iy intellektga asoslangan tizimimiz orqali orzuingizdagi uyni bir necha daqiqada tasvirlang va tayyor konseptga ega bo'ling.
            </p>
            <button 
              onClick={() => setIsAiModalOpen(true)}
              className="mt-12 px-10 py-4 bg-black text-white hover:bg-[var(--color-brand-gold)] transition-all font-display font-bold uppercase tracking-widest text-sm flex items-center gap-2"
            >
              Sinab ko'rish <Sparkles size={16} />
            </button>
          </div>
          <div className="relative">
            <div className="aspect-video bg-black/5 rounded-3xl overflow-hidden border border-black/10 p-4">
              <div className="h-full w-full border border-black/10 rounded-2xl p-8 flex flex-col justify-center items-center text-center">
                <Cpu className="text-[var(--color-brand-gold)] mb-6" size={64} />
                <div className="w-full h-2 bg-black/10 rounded-full mb-4 relative overflow-hidden">
                  <motion.div 
                    animate={{ x: ["-100%", "100%"] }} 
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute inset-0 bg-[var(--color-brand-gold)] w-1/3"
                  />
                </div>
                <p className="font-display text-sm uppercase tracking-widest opacity-50">Generativ arxitektura yuklanmoqda...</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--color-brand-gold)] rounded-full flex items-center justify-center text-white rotate-12 shadow-xl">
              <span className="text-xs font-bold uppercase text-center leading-tight">Yangi <br /> texnologiya</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-20 border-t border-white/10 px-6 bg-black text-white">
        <div className="container mx-auto grid md:grid-cols-4 gap-12 text-white">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-12 h-12 border-2 border-white flex items-center justify-center font-display font-bold text-2xl">Z</div>
              <span className="font-display text-2xl font-bold tracking-tighter uppercase">Zamonaviy Uy</span>
            </div>
            <p className="text-white/40 max-w-sm mb-8">
              Biz O'zbekistonda zamonaviy arxitektura standarlarini belgilaymiz. Sifat, tezlik va yuqori darajadagi estetik vizualizatsiya.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-xs mb-8 text-[var(--color-brand-gold)]">Aloqa</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-center gap-3"><Phone size={14} /> +998 88 123 22 26</li>
              <li className="flex items-center gap-3"><Mail size={14} /> info@zamonaviyuy.uz</li>
              <li className="flex items-center gap-3"><MapPin size={14} /> Sirdaryo viloyati, Guliston shahri</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-xs mb-8 text-[var(--color-brand-gold)]">Yangiliklar</h4>
            <p className="text-white/40 text-sm mb-4">Loyiha yangiliklaridan boxabar bo'lish uchun obuna bo'ling.</p>
            <div className="flex">
              <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 px-4 py-2 text-sm w-full outline-none focus:border-white/40" />
              <button className="bg-white text-black px-4 py-2 hover:bg-[var(--color-brand-gold)] transition-all">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-white/20 text-xs text-white">© 2024 Zamonaviy Uy Loyihalari. Barcha huquqlar himoyalangan.</span>
          <div className="flex gap-6 text-white/20 text-xs">
            <a href="#" className="hover:text-white transition-colors uppercase tracking-[0.2em]">Siyosat</a>
            <a href="#" className="hover:text-white transition-colors uppercase tracking-[0.2em]">Shartlar</a>
          </div>
        </div>
      </footer>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-10 pointer-events-none"
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-3xl pointer-events-auto" onClick={() => setSelectedProject(null)} />
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-[var(--color-brand-dark)] glass-panel overflow-hidden flex flex-col md:flex-row pointer-events-auto text-white shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <X size={24} />
              </button>

              <div className="md:w-1/2 h-[400px] md:h-auto relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[var(--color-brand-gold)] font-display text-sm font-bold uppercase tracking-widest">{selectedProject.style}</span>
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-white/40 text-sm font-light">{selectedProject.area}</span>
                </div>
                
                <h3 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-none uppercase">{selectedProject.name}</h3>
                
                <p className="text-white/70 text-lg leading-relaxed mb-10 font-light">
                  {selectedProject.description}
                </p>

                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <h4 className="font-display font-medium uppercase tracking-[0.2em] text-[10px] text-white/30 mb-4 flex items-center gap-2">
                       <Layers size={12} /> Afzalliklari
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map(f => (
                        <li key={f} className="text-sm font-light text-white/80 flex items-center gap-2">
                          <div className="w-1 h-1 bg-[var(--color-brand-gold)]" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-display font-medium uppercase tracking-[0.2em] text-[10px] text-white/30 mb-4 flex items-center gap-2">
                      <Compass size={12} /> Materiallar
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.materials.map(m => (
                        <li key={m} className="text-sm font-light text-white/80 flex items-center gap-2">
                          <div className="w-1 h-1 bg-[var(--color-brand-gold)]" /> {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex gap-4">
                  <button className="flex-1 bg-white text-black py-4 font-display font-bold uppercase tracking-widest text-xs hover:bg-[var(--color-brand-gold)] transition-all">
                    Buyurtma berish
                  </button>
                  <button className="flex-1 border border-white/20 py-4 font-display font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
                    PDF yuklash
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Modal */}
      <AnimatePresence>
        {isAiModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-6"
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={() => setIsAiModalOpen(false)} />
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-[var(--color-brand-dark)] border border-white/10 rounded-2xl overflow-hidden p-8 text-white"
            >
              <button 
                onClick={() => setIsAiModalOpen(false)}
                className="absolute top-6 right-6 text-white/40 hover:text-white"
              >
                <X size={24} />
              </button>

              <div className="mb-8">
                <span className="flex items-center gap-2 text-[var(--color-brand-gold)] font-display font-bold uppercase tracking-widest text-xs mb-2">
                  <Cpu size={14} /> AI Arxitektor
                </span>
                <h3 className="font-display text-3xl font-bold uppercase">Orzuingizdagi uyni tasvirlang</h3>
                <p className="text-white/40 mt-2">Tasavvuringizdagi uy haqida qisqacha yozing va biz sizga konsept taqdim etamiz.</p>
              </div>

              {!aiResult ? (
                <form onSubmit={handleAiSubmit} className="space-y-6">
                  <textarea 
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    placeholder="Masalan: O'rmon ichidagi, 2 qavatli, shisha devorli minimalistik uy..."
                    className="w-full h-40 bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[var(--color-brand-gold)] transition-colors resize-none lg:text-lg"
                    required
                  />
                  <button 
                    disabled={isAiLoading}
                    className="w-full bg-white text-black font-display font-bold uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[var(--color-brand-gold)] disabled:opacity-50"
                  >
                    {isAiLoading ? (
                      <>Loyihalanmoqda...</>
                    ) : (
                      <>Konsept yaratish <Sparkles size={18} /></>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-display text-2xl font-bold">{aiResult.name}</h4>
                      <span className="px-3 py-1 bg-[var(--color-brand-gold)] text-black text-[10px] font-bold uppercase rounded-full">{aiResult.style}</span>
                    </div>
                    <p className="text-white/70 text-base leading-relaxed mb-6 font-light">
                      {aiResult.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-[10px] uppercase font-bold text-white/30 mb-2">Xususiyatlar</h5>
                        <ul className="text-xs text-white/60 space-y-1 font-light">
                          {aiResult.features?.map((f: string) => <li key={f}>• {f}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-[10px] uppercase font-bold text-white/30 mb-2">Materiallar</h5>
                        <ul className="text-xs text-white/60 space-y-1 font-light">
                          {aiResult.materials?.map((m: string) => <li key={m}>• {m}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => setAiResult(null)}
                      className="flex-1 border border-white/10 py-4 font-display font-bold uppercase tracking-widest text-xs hover:bg-white/5"
                    >
                      Qayta urinish
                    </button>
                    <button className="flex-1 bg-white text-black py-4 font-display font-bold uppercase tracking-widest text-xs hover:bg-[var(--color-brand-gold)]">
                      Loyiha buyurtma berish
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
