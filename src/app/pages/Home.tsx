import {
  Globe, Lock, Bell, GraduationCap, UserPlus, Newspaper,
  Eye, Handshake, ArrowRight, TrendingUp, Activity, Flag, Building2,
  Clock, Star, Award, Target, Layers, Network, Monitor, Shield,
  AlertTriangle, Info,
} from "lucide-react";
import { Link } from "react-router";
import heroImg from "@/imports/ChatGPT_Image_21_jun_2026__14_10_49.png";
import { SectionLabel } from "../components/shared";

// ─── Quick Access ─────────────────────────────────────────────────────────────

const QUICK_ACCESS = [
  { icon: <Lock size={28} />, label: "Canal Confidencial", sublabel: "Reporte anónimo", color: "#C9A55C" },
  { icon: <Bell size={28} />, label: "Alertas & Boletines", sublabel: "Avisos institucionales", color: "#3B82F6" },
  { icon: <GraduationCap size={28} />, label: "Educación & Soberanía", sublabel: "Recursos educativos", color: "#10B981" },
  { icon: <UserPlus size={28} />, label: "Únete a la DNI", sublabel: "Convocatorias abiertas", color: "#8B5CF6" },
  { icon: <Newspaper size={28} />, label: "Sala de Prensa", sublabel: "Comunicados oficiales", color: "#EF4444" },
];

const INSTITUTIONAL_VALUES = [
  { icon: <Award size={24} />, title: "Legalidad", desc: "Actuamos estrictamente dentro del marco constitucional y las leyes de la República Dominicana." },
  { icon: <Eye size={24} />, title: "Transparencia", desc: "Rendimos cuentas ante los poderes del Estado y la ciudadanía, respetando los límites de la confidencialidad." },
  { icon: <Star size={24} />, title: "Profesionalismo", desc: "Nuestro capital humano se forma con los más altos estándares de excelencia técnica e intelectual." },
  { icon: <Handshake size={24} />, title: "Cooperación", desc: "Coordinamos con organismos nacionales e internacionales para fortalecer la seguridad colectiva." },
];

const WORK_AREAS = [
  { icon: <Target size={32} />, title: "Inteligencia Estratégica", desc: "Análisis de amenazas de largo plazo para informar la toma de decisiones del Estado.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&auto=format" },
  { icon: <TrendingUp size={32} />, title: "Inteligencia Predictiva", desc: "Modelos prospectivos para anticipar escenarios de riesgo antes de que se materialicen.", img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&h=400&fit=crop&auto=format" },
  { icon: <Globe size={32} />, title: "Cooperación Internacional", desc: "Alianzas estratégicas con agencias aliadas para el intercambio de inteligencia.", img: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=600&h=400&fit=crop&auto=format" },
  { icon: <Shield size={32} />, title: "Contrainteligencia", desc: "Detección y neutralización de actividades de espionaje y sabotaje contra el Estado.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&auto=format" },
  { icon: <Monitor size={32} />, title: "Ciberseguridad", desc: "Protección de infraestructuras digitales críticas y defensa ante ciberataques.", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop&auto=format" },
  { icon: <Flag size={32} />, title: "Seguridad Nacional", desc: "Salvaguarda de la soberanía territorial e integridad institucional del país.", img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop&auto=format" },
];

const NEWS_ITEMS = [
  { date: "20 JUN 2026", category: "Ciberseguridad", title: "DNI participa en ejercicio multinacional de ciberdefensa CARICOM", summary: "Expertos de la DNI compartieron metodologías de respuesta a incidentes en el simulacro regional Caribbean Cyber Shield 2026.", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop&auto=format", featured: true },
  { date: "17 JUN 2026", category: "Cooperación", title: "Firma de acuerdo de intercambio de inteligencia con Europol", summary: "La DNI y Europol formalizaron un protocolo de colaboración para combatir redes transnacionales.", img: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=600&h=400&fit=crop&auto=format", featured: false },
  { date: "14 JUN 2026", category: "Institucional", title: "Apertura del Centro de Situación Nacional de última generación", summary: "El nuevo CSN integra inteligencia artificial y análisis geoespacial en tiempo real.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&auto=format", featured: false },
  { date: "10 JUN 2026", category: "Educación", title: "Lanzamiento del portal de alfabetización en seguridad digital", summary: "La plataforma ofrece recursos gratuitos sobre prevención de desinformación y phishing.", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&auto=format", featured: false },
];

const EDUCATION_CARDS = [
  { icon: <Layers size={28} />, title: "Biblioteca Digital", desc: "Más de 400 publicaciones sobre seguridad nacional y análisis estratégico.", color: "#3B82F6" },
  { icon: <GraduationCap size={28} />, title: "Recursos Educativos", desc: "Cursos y materiales didácticos para ciudadanos, académicos y funcionarios.", color: "#10B981" },
  { icon: <Monitor size={28} />, title: "Guías de Ciberseguridad", desc: "Protocolos de protección digital para individuos, empresas e instituciones.", color: "#8B5CF6" },
  { icon: <Network size={28} />, title: "Prevención de Desinformación", desc: "Herramientas para identificar noticias falsas y fortalecer el pensamiento crítico.", color: "#C9A55C" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#071D49]">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Sede institucional de la DNI con globo holográfico y bandera dominicana" className="w-full h-full object-cover object-center opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071D49] via-[#071D49]/80 to-[#071D49]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071D49] via-transparent to-[#071D49]/40" />
        </div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, #C9A55C 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative max-w-[1400px] mx-auto px-6 md:px-8 py-20 md:py-32 w-full">
          <div className="max-w-3xl">
            <SectionLabel>Protegemos lo que más importa</SectionLabel>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight font-['Plus_Jakarta_Sans'] mb-6">
              Inteligencia en servicio de la{" "}
              <span className="text-[#C9A55C]">República Dominicana</span>
            </h1>
            <p className="text-lg md:text-xl text-[#B8CCE8] leading-relaxed mb-10 max-w-2xl font-['Plus_Jakarta_Sans'] font-light">
              Anticipamos amenazas, protegemos nuestra soberanía y trabajamos cada día para garantizar la seguridad y el bienestar de todos los dominicanos.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/sobre-nosotros" className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#C9A55C] hover:bg-[#D4B567] text-[#071D49] font-bold text-sm rounded transition-all duration-200 tracking-wide uppercase font-['Plus_Jakarta_Sans']">
                Conoce la DNI <ArrowRight size={16} />
              </Link>
              <Link to="/rol-de-la-dni" className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white/10 hover:bg-white/15 border border-white/25 text-white font-semibold text-sm rounded transition-all duration-200 tracking-wide uppercase backdrop-blur-sm font-['Plus_Jakarta_Sans']">
                <Monitor size={16} /> Nuestro Rol
              </Link>
            </div>
            <div className="mt-16 flex flex-wrap gap-8 md:gap-12">
              {[{ value: "24/7", label: "Monitoreo Continuo" }, { value: "32+", label: "Años de Servicio" }, { value: "15", label: "Acuerdos Internacionales" }].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl md:text-4xl font-extrabold text-[#C9A55C] font-['Plus_Jakarta_Sans']">{s.value}</div>
                  <div className="text-[#8FA4C8] text-xs tracking-widest uppercase mt-1 font-['JetBrains_Mono']">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#071D49] to-transparent" />
      </section>

      {/* Quick Access */}
      <section className="py-16 md:py-20 bg-[#071D49]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <SectionLabel>Acceso Rápido</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-['Plus_Jakarta_Sans']">Servicios Institucionales</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {QUICK_ACCESS.map((item) => (
              <a key={item.label} href="#" className="group flex flex-col items-center gap-3 p-5 md:p-6 bg-[#0A2560] hover:bg-[#0D2F6E] border border-[#C9A55C]/15 hover:border-[#C9A55C]/40 rounded-xl transition-all duration-300 text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                  {item.icon}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold leading-tight mb-1 font-['Plus_Jakarta_Sans']">{item.label}</div>
                  <div className="text-[#8FA4C8] text-xs font-['Plus_Jakarta_Sans']">{item.sublabel}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Section */}
      <section id="sobre-nosotros" className="py-16 md:py-24 bg-[#051535]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>Nuestra Institución</SectionLabel>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 font-['Plus_Jakarta_Sans']">
                Inteligencia Estratégica para una Nación Segura y Democrática
              </h2>
              <p className="text-[#8FA4C8] text-base md:text-lg leading-relaxed mb-6 font-['Plus_Jakarta_Sans']">
                La Dirección Nacional de Inteligencia (DNI) es el organismo rector del Sistema Nacional de Inteligencia de la República Dominicana. Bajo mandato constitucional, producimos inteligencia oportuna y confiable para proteger el Estado democrático de Derecho.
              </p>
              <Link to="/sobre-nosotros" className="inline-flex items-center gap-2 text-[#C9A55C] hover:text-[#D4B567] font-semibold text-sm transition-colors font-['Plus_Jakarta_Sans']">
                Conocer más sobre la DNI <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {INSTITUTIONAL_VALUES.map((v) => (
                <div key={v.title} className="bg-[#071D49] border border-[#C9A55C]/15 hover:border-[#C9A55C]/40 rounded-xl p-5 md:p-6 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-[#C9A55C]/10 flex items-center justify-center text-[#C9A55C] mb-4 group-hover:bg-[#C9A55C]/20 transition-colors">
                    {v.icon}
                  </div>
                  <h3 className="text-white font-bold mb-2 font-['Plus_Jakarta_Sans']">{v.title}</h3>
                  <p className="text-[#8FA4C8] text-xs leading-relaxed font-['Plus_Jakarta_Sans']">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Work */}
      <section id="areas-trabajo" className="py-16 md:py-24 bg-[#071D49]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <SectionLabel>Áreas de Trabajo</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white font-['Plus_Jakarta_Sans']">Capacidades Institucionales</h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WORK_AREAS.map((area) => (
              <div key={area.title} className="group relative overflow-hidden rounded-xl border border-[#C9A55C]/15 hover:border-[#C9A55C]/40 transition-all duration-400 bg-[#0A2560]">
                <div className="relative h-44 overflow-hidden">
                  <img src={area.img} alt={area.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-50 group-hover:opacity-70" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2560] to-transparent" />
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-[#C9A55C]/20 border border-[#C9A55C]/40 flex items-center justify-center text-[#C9A55C]">
                    {area.icon}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-bold text-base mb-2 font-['Plus_Jakarta_Sans'] group-hover:text-[#C9A55C] transition-colors">{area.title}</h3>
                  <p className="text-[#8FA4C8] text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section id="noticias" className="py-16 md:py-24 bg-[#051535]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <SectionLabel>Sala de Prensa</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white font-['Plus_Jakarta_Sans']">Noticias Destacadas</h2>
            </div>
          </div>
          <div className="grid lg:grid-cols-5 gap-5">
            {NEWS_ITEMS.filter(n => n.featured).map((item) => (
              <a key={item.title} href="#" className="lg:col-span-3 group relative rounded-xl overflow-hidden border border-[#C9A55C]/15 hover:border-[#C9A55C]/40 transition-all duration-300 bg-[#0A2560]">
                <div className="relative h-56 md:h-72 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2560] via-[#0A2560]/40 to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#C9A55C] text-[#071D49] text-[10px] font-bold rounded tracking-widest uppercase font-['JetBrains_Mono']">{item.category}</div>
                </div>
                <div className="p-6">
                  <div className="text-[#8FA4C8] text-xs mb-3 font-['JetBrains_Mono']">{item.date}</div>
                  <h3 className="text-white font-bold text-lg md:text-xl leading-snug mb-3 font-['Plus_Jakarta_Sans'] group-hover:text-[#C9A55C] transition-colors">{item.title}</h3>
                  <p className="text-[#8FA4C8] text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.summary}</p>
                </div>
              </a>
            ))}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {NEWS_ITEMS.filter(n => !n.featured).map((item) => (
                <a key={item.title} href="#" className="group flex gap-4 p-4 bg-[#0A2560] border border-[#C9A55C]/15 hover:border-[#C9A55C]/35 rounded-xl transition-all duration-300">
                  <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-[#071D49]">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#C9A55C] text-[9px] font-bold uppercase tracking-wider font-['JetBrains_Mono']">{item.category}</span>
                      <span className="text-[#8FA4C8] text-[9px] font-['JetBrains_Mono']">{item.date}</span>
                    </div>
                    <h4 className="text-white text-sm font-semibold leading-tight font-['Plus_Jakarta_Sans'] group-hover:text-[#C9A55C] transition-colors line-clamp-2">{item.title}</h4>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Educational Hub */}
      <section className="py-16 md:py-24 bg-[#071D49]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>Hub Educativo</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-5 font-['Plus_Jakarta_Sans']">
                Conocimiento para la Seguridad Nacional
              </h2>
              <p className="text-[#8FA4C8] text-base leading-relaxed mb-8 font-['Plus_Jakarta_Sans']">
                La DNI promueve una ciudadanía informada y resiliente. Nuestros recursos educativos están diseñados para fortalecer la cultura de seguridad nacional.
              </p>
              <Link to="/que-es-la-inteligencia" className="inline-flex items-center gap-2.5 px-6 py-3 border border-[#C9A55C]/50 text-[#C9A55C] hover:bg-[#C9A55C] hover:text-[#071D49] font-semibold text-sm rounded transition-all duration-200 font-['Plus_Jakarta_Sans']">
                Acceder al Hub <ArrowRight size={15} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {EDUCATION_CARDS.map((card) => (
                <a key={card.title} href="#" className="group p-5 bg-[#0A2560] border border-[#C9A55C]/15 hover:border-[#C9A55C]/40 rounded-xl transition-all duration-300">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 transition-all group-hover:scale-110" style={{ backgroundColor: `${card.color}15`, color: card.color }}>
                    {card.icon}
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2 font-['Plus_Jakarta_Sans']">{card.title}</h3>
                  <p className="text-[#8FA4C8] text-xs leading-relaxed font-['Plus_Jakarta_Sans']">{card.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="canal-confidencial" className="relative py-20 md:py-28 overflow-hidden bg-[#071D49]">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(#C9A55C 1px, transparent 1px), linear-gradient(90deg, #C9A55C 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A55C]/10 via-transparent to-[#0A3B91]/20" />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A55C]/10 border border-[#C9A55C]/30 mb-8">
              <Lock size={14} className="text-[#C9A55C]" />
              <span className="text-[#C9A55C] text-xs font-bold tracking-widest uppercase font-['JetBrains_Mono']">Canal Confidencial</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 font-['Plus_Jakarta_Sans']">
              Tu información puede <span className="text-[#C9A55C]">salvar vidas</span>
            </h2>
            <p className="text-[#B8CCE8] text-lg mb-10 leading-relaxed font-['Plus_Jakarta_Sans']">
              Si tienes información sobre actividades que puedan comprometer la seguridad nacional, repórtala de forma anónima y segura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C9A55C] hover:bg-[#D4B567] text-[#071D49] font-extrabold text-sm rounded transition-all duration-200 tracking-wider uppercase font-['Plus_Jakarta_Sans'] shadow-[0_0_30px_rgba(201,165,92,0.3)]">
                <Lock size={16} /> Acceder al Canal Confidencial
              </a>
              <a href="#" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white hover:bg-white/5 font-semibold text-sm rounded transition-all duration-200 font-['Plus_Jakarta_Sans']">
                <Info size={16} /> ¿Cómo funciona?
              </a>
            </div>
            <p className="mt-8 text-[#8FA4C8] text-xs font-['JetBrains_Mono'] tracking-wide">
              Tu identidad permanece protegida. El canal utiliza cifrado de extremo a extremo.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
