import { useState, useEffect, useRef } from "react";
import {
  Shield, Globe, Search, Menu, X, ChevronRight, ChevronDown,
  AlertTriangle, CheckCircle, Monitor, Radio, Lock, BookOpen,
  Users, Eye, Cpu, Handshake, Zap, FileText, Bell, GraduationCap,
  UserPlus, Newspaper, Phone, Mail, MapPin, ExternalLink, ArrowRight,
  TrendingUp, BarChart2, Activity, Flag, Building2, Wifi, Database,
  Info, Calendar, Clock, Star, Award, Target, Layers, Network
} from "lucide-react";
import heroImg from "@/imports/ChatGPT_Image_21_jun_2026__14_10_49.png";
import mobileHeroImg from "@/imports/ChatGPT_Image_21_jun_2026__19_55_33.png";

// ─── Utility ────────────────────────────────────────────────────────────────

function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

// ─── Types ───────────────────────────────────────────────────────────────────

type ThreatLevel = "BAJO" | "MODERADO" | "ELEVADO" | "ALTO" | "CRÍTICO";

interface ThreatIndicator {
  label: string;
  level: "low" | "medium" | "elevated" | "high";
  icon: React.ReactNode;
  value: number;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Inicio", href: "#" },
  { label: "Sobre Nosotros", href: "#sobre-nosotros" },
  { label: "Áreas de Trabajo", href: "#areas-trabajo" },
  { label: "Centro de Situación", href: "#centro-situacion" },
  { label: "Transparencia", href: "#transparencia" },
  { label: "Noticias", href: "#noticias" },
  { label: "Contacto", href: "#contacto" },
];

const THREAT_INDICATORS: ThreatIndicator[] = [
  { label: "Ciberseguridad", level: "low", icon: <Monitor size={16} />, value: 22 },
  { label: "Desinformación", level: "medium", icon: <Radio size={16} />, value: 41 },
  { label: "Infraestructura Crítica", level: "low", icon: <Building2 size={16} />, value: 18 },
  { label: "Crimen Organizado", level: "medium", icon: <AlertTriangle size={16} />, value: 38 },
  { label: "Narcoterrorismo", level: "low", icon: <Shield size={16} />, value: 15 },
];

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
  {
    date: "20 JUN 2026",
    category: "Ciberseguridad",
    title: "DNI participa en ejercicio multinacional de ciberdefensa CARICOM",
    summary: "Expertos de la Dirección Nacional de Inteligencia compartieron metodologías de respuesta a incidentes en el simulacro regional Caribbean Cyber Shield 2026.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop&auto=format",
    featured: true,
  },
  {
    date: "17 JUN 2026",
    category: "Cooperación",
    title: "Firma de acuerdo de intercambio de inteligencia con Europol",
    summary: "La DNI y Europol formalizaron un protocolo de colaboración para combatir redes transnacionales de crimen organizado.",
    img: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=600&h=400&fit=crop&auto=format",
    featured: false,
  },
  {
    date: "14 JUN 2026",
    category: "Institucional",
    title: "Apertura del Centro de Situación Nacional de última generación",
    summary: "El nuevo CSN integra inteligencia artificial y análisis geoespacial en tiempo real para monitoreo de amenazas.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&auto=format",
    featured: false,
  },
  {
    date: "10 JUN 2026",
    category: "Educación",
    title: "Lanzamiento del portal de alfabetización en seguridad digital",
    summary: "La plataforma ofrece recursos gratuitos para ciudadanos sobre prevención de desinformación y phishing.",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&auto=format",
    featured: false,
  },
];

const SITUATION_CARDS = [
  { icon: <Bell size={20} />, title: "Alertas Recientes", count: "3 activas", color: "#EF4444", desc: "Monitoreo de redes sociales detectó narrativas de desinformación sobre proceso electoral." },
  { icon: <Activity size={20} />, title: "Estado Nacional", count: "Estable", color: "#10B981", desc: "Indicadores de gobernabilidad y orden público dentro de parámetros normales." },
  { icon: <TrendingUp size={20} />, title: "Riesgos Emergentes", count: "2 nuevos", color: "#F59E0B", desc: "Incremento de actividad de grupos de presión con financiamiento externo no declarado." },
  { icon: <Monitor size={20} />, title: "Actualizaciones Cibernéticas", count: "24h", color: "#3B82F6", desc: "Sin incidentes críticos. Parche de seguridad implementado en 94% de sistemas gubernamentales." },
  { icon: <Globe size={20} />, title: "Monitoreo Regional", count: "En curso", color: "#8B5CF6", desc: "Seguimiento a movimientos migratorios irregulares en la frontera noroeste." },
];

const EDUCATION_CARDS = [
  { icon: <BookOpen size={28} />, title: "Biblioteca Digital", desc: "Más de 400 publicaciones sobre seguridad nacional, geopolítica y análisis estratégico.", color: "#3B82F6" },
  { icon: <Layers size={28} />, title: "Recursos Educativos", desc: "Cursos y materiales didácticos para ciudadanos, académicos y funcionarios públicos.", color: "#10B981" },
  { icon: <Monitor size={28} />, title: "Guías de Ciberseguridad", desc: "Protocolos de protección digital para individuos, empresas e instituciones del Estado.", color: "#8B5CF6" },
  { icon: <Network size={28} />, title: "Prevención de Desinformación", desc: "Herramientas para identificar noticias falsas y fortalecer el pensamiento crítico.", color: "#C9A55C" },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function GoldLine() {
  return <div className="w-12 h-0.5 bg-[#C9A55C] mb-4" />;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div className="w-1 h-4 bg-[#C9A55C]" />
      <span className="text-[#C9A55C] text-xs font-bold tracking-[0.2em] uppercase font-['JetBrains_Mono']">
        {children}
      </span>
    </div>
  );
}

function ThreatBar({ value, level }: { value: number; level: ThreatIndicator["level"] }) {
  const colors = {
    low: "#22C55E",
    medium: "#F59E0B",
    elevated: "#EF4444",
    high: "#DC2626",
  };
  return (
    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-1000"
        style={{ width: `${value}%`, backgroundColor: colors[level] }}
      />
    </div>
  );
}

function LevelDot({ level }: { level: ThreatIndicator["level"] }) {
  const colors = { low: "#22C55E", medium: "#F59E0B", elevated: "#EF4444", high: "#DC2626" };
  return (
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: colors[level] }} />
      <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: colors[level] }} />
    </span>
  );
}

// ─── Header ──────────────────────────────────────────────────────────────────

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#051535] border-b border-[#C9A55C]/20 hidden md:flex items-center justify-between px-8 py-1.5 text-[11px] text-[#8FA4C8] tracking-wider">
        <span className="font-['JetBrains_Mono']">REPÚBLICA DOMINICANA — DIRECCIÓN NACIONAL DE INTELIGENCIA</span>
        <div className="flex items-center gap-6">
          <span>Transparencia</span>
          <span>Portal Ciudadano</span>
          <div className="flex items-center gap-2">
            <button className="hover:text-[#C9A55C] transition-colors font-semibold">ES</button>
            <span className="opacity-40">|</span>
            <button className="hover:text-[#C9A55C] transition-colors">EN</button>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#071D49]/98 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-[#C9A55C]/20"
            : "bg-[#071D49]"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#C9A55C]/10 border border-[#C9A55C]/40 flex items-center justify-center">
              <Shield size={20} className="text-[#C9A55C]" />
            </div>
            <div>
              <div className="text-white font-bold text-base md:text-lg leading-tight font-['Plus_Jakarta_Sans']">DNI</div>
              <div className="text-[#8FA4C8] text-[9px] md:text-[10px] tracking-widest uppercase font-['JetBrains_Mono'] leading-tight">
                Dirección Nacional de Inteligencia
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-[13px] text-[#C8D8F0] hover:text-white hover:bg-white/5 rounded transition-all duration-200 font-medium font-['Plus_Jakarta_Sans'] tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-9 h-9 flex items-center justify-center text-[#8FA4C8] hover:text-white hover:bg-white/5 rounded transition-all"
            >
              <Search size={18} />
            </button>
            <a
              href="#canal-confidencial"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#C9A55C] hover:bg-[#D4B567] text-[#071D49] text-[12px] font-bold rounded transition-all duration-200 tracking-wider uppercase font-['Plus_Jakarta_Sans']"
            >
              <Lock size={13} />
              Canal Confidencial
            </a>
            <button
              className="lg:hidden w-9 h-9 flex items-center justify-center text-[#8FA4C8]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-[#C9A55C]/20 px-6 md:px-8 py-3 bg-[#051535]">
            <div className="max-w-[1400px] mx-auto flex items-center gap-3">
              <Search size={16} className="text-[#8FA4C8] shrink-0" />
              <input
                autoFocus
                type="text"
                placeholder="Buscar en el portal DNI..."
                className="flex-1 bg-transparent text-white placeholder-[#8FA4C8]/60 text-sm outline-none font-['Plus_Jakarta_Sans']"
              />
              <button onClick={() => setSearchOpen(false)} className="text-[#8FA4C8] hover:text-white">
                <X size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#051535] border-t border-[#C9A55C]/20 px-6 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-2.5 text-[#C8D8F0] hover:text-white hover:bg-white/5 rounded text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#canal-confidencial"
              className="mt-3 flex items-center gap-2 px-4 py-2.5 bg-[#C9A55C] text-[#071D49] text-sm font-bold rounded"
            >
              <Lock size={14} /> Canal Confidencial
            </a>
          </div>
        )}
      </header>
    </>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#071D49]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Sede institucional de la Dirección Nacional de Inteligencia con globo holográfico y bandera dominicana"
          className="w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071D49] via-[#071D49]/80 to-[#071D49]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071D49] via-transparent to-[#071D49]/40" />
      </div>

      {/* Particle dots overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(circle, #C9A55C 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

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
            <a
              href="#sobre-nosotros"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#C9A55C] hover:bg-[#D4B567] text-[#071D49] font-bold text-sm rounded transition-all duration-200 tracking-wide uppercase font-['Plus_Jakarta_Sans']"
            >
              Conoce la DNI <ArrowRight size={16} />
            </a>
            <a
              href="#centro-situacion"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white/10 hover:bg-white/15 border border-white/25 text-white font-semibold text-sm rounded transition-all duration-200 tracking-wide uppercase backdrop-blur-sm font-['Plus_Jakarta_Sans']"
            >
              <Monitor size={16} /> Centro de Situación
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-16 flex flex-wrap gap-8 md:gap-12">
            {[
              { value: "24/7", label: "Monitoreo Continuo" },
              { value: "32+", label: "Años de Servicio" },
              { value: "15", label: "Acuerdos Internacionales" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-extrabold text-[#C9A55C] font-['Plus_Jakarta_Sans']">{s.value}</div>
                <div className="text-[#8FA4C8] text-xs tracking-widest uppercase mt-1 font-['JetBrains_Mono']">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#071D49] to-transparent" />
    </section>
  );
}

// ─── National Status Panel ────────────────────────────────────────────────────

function NationalStatusPanel() {
  const currentLevel: ThreatLevel = "BAJO";

  const levelConfig = {
    BAJO: { color: "#22C55E", bg: "bg-green-500/10", border: "border-green-500/30", width: "15%" },
    MODERADO: { color: "#F59E0B", bg: "bg-yellow-500/10", border: "border-yellow-500/30", width: "35%" },
    ELEVADO: { color: "#F97316", bg: "bg-orange-500/10", border: "border-orange-500/30", width: "55%" },
    ALTO: { color: "#EF4444", bg: "bg-red-500/10", border: "border-red-500/30", width: "75%" },
    CRÍTICO: { color: "#DC2626", bg: "bg-red-600/10", border: "border-red-600/30", width: "95%" },
  };

  const { color, bg, border } = levelConfig[currentLevel];

  return (
    <section className="bg-[#051535] border-y border-[#C9A55C]/20 py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 items-start">
          {/* Main threat level */}
          <div>
            <SectionLabel>Estado de Amenaza Nacional</SectionLabel>
            <div className={cn("inline-flex items-center gap-3 px-5 py-3 rounded border mb-4", bg, border)}>
              <LevelDot level="low" />
              <span className="text-3xl font-extrabold font-['Plus_Jakarta_Sans'] tracking-widest" style={{ color }}>
                {currentLevel}
              </span>
            </div>
            <p className="text-[#8FA4C8] text-sm leading-relaxed max-w-sm font-['Plus_Jakarta_Sans']">
              El nivel de amenaza es actualizado periódicamente con base en la evaluación de inteligencia del Centro de Situación Nacional.
            </p>
            <div className="mt-4 flex items-center gap-2 text-[#8FA4C8]">
              <Clock size={13} className="text-[#C9A55C]" />
              <span className="text-xs font-['JetBrains_Mono']">Última actualización: 22 JUN 2026 — 08:30 AST</span>
            </div>
          </div>

          {/* Indicators grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {THREAT_INDICATORS.map((ind) => (
              <div
                key={ind.label}
                className="bg-[#071D49] border border-[#C9A55C]/15 rounded-lg p-4 hover:border-[#C9A55C]/35 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-[#8FA4C8] group-hover:text-white transition-colors">
                    {ind.icon}
                    <span className="text-xs font-semibold tracking-wide font-['Plus_Jakarta_Sans']">{ind.label}</span>
                  </div>
                  <LevelDot level={ind.level} />
                </div>
                <ThreatBar value={ind.value} level={ind.level} />
                <div className="mt-2 text-right">
                  <span className="text-[10px] font-['JetBrains_Mono'] text-[#8FA4C8]">{ind.value}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Quick Access ─────────────────────────────────────────────────────────────

function QuickAccess() {
  return (
    <section className="py-16 md:py-20 bg-[#071D49]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <SectionLabel>Acceso Rápido</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold text-white font-['Plus_Jakarta_Sans']">
            Servicios Institucionales
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {QUICK_ACCESS.map((item) => (
            <a
              key={item.label}
              href="#"
              className="group flex flex-col items-center gap-3 p-5 md:p-6 bg-[#0A2560] hover:bg-[#0D2F6E] border border-[#C9A55C]/15 hover:border-[#C9A55C]/40 rounded-xl transition-all duration-300 text-center"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${item.color}15`, color: item.color }}
              >
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
  );
}

// ─── Institutional Section ───────────────────────────────────────────────────

function InstitutionalSection() {
  return (
    <section id="sobre-nosotros" className="py-16 md:py-24 bg-[#051535]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <SectionLabel>Nuestra Institución</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 font-['Plus_Jakarta_Sans']">
              Inteligencia Estratégica para una Nación Segura y Democrática
            </h2>
            <p className="text-[#8FA4C8] text-base md:text-lg leading-relaxed mb-6 font-['Plus_Jakarta_Sans']">
              La Dirección Nacional de Inteligencia (DNI) es el organismo rector del Sistema Nacional de Inteligencia de la República Dominicana. Bajo mandato constitucional, producimos inteligencia oportuna y confiable para proteger el Estado democrático de Derecho.
            </p>
            <p className="text-[#8FA4C8] text-base leading-relaxed mb-8 font-['Plus_Jakarta_Sans']">
              Operamos con estricto apego a la ley, respetando los derechos fundamentales de los ciudadanos y rindiendo cuentas ante los poderes del Estado.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#C9A55C] hover:text-[#D4B567] font-semibold text-sm transition-colors font-['Plus_Jakarta_Sans']"
            >
              Conocer más sobre la DNI <ChevronRight size={16} />
            </a>
          </div>

          {/* Right — values grid */}
          <div className="grid grid-cols-2 gap-4">
            {INSTITUTIONAL_VALUES.map((v) => (
              <div
                key={v.title}
                className="bg-[#071D49] border border-[#C9A55C]/15 hover:border-[#C9A55C]/40 rounded-xl p-5 md:p-6 transition-all duration-300 group"
              >
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
  );
}

// ─── Areas of Work ────────────────────────────────────────────────────────────

function AreasOfWork() {
  return (
    <section id="areas-trabajo" className="py-16 md:py-24 bg-[#071D49]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <SectionLabel>Áreas de Trabajo</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              Capacidades Institucionales
            </h2>
          </div>
          <a href="#" className="text-[#C9A55C] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all font-['Plus_Jakarta_Sans']">
            Ver todas las áreas <ChevronRight size={14} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WORK_AREAS.map((area) => (
            <a
              key={area.title}
              href="#"
              className="group relative overflow-hidden rounded-xl border border-[#C9A55C]/15 hover:border-[#C9A55C]/40 transition-all duration-400 bg-[#0A2560]"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={area.img}
                  alt={area.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-50 group-hover:opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2560] to-transparent" />
                <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-[#C9A55C]/20 border border-[#C9A55C]/40 flex items-center justify-center text-[#C9A55C]">
                  {area.icon}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold text-base mb-2 font-['Plus_Jakarta_Sans'] group-hover:text-[#C9A55C] transition-colors">
                  {area.title}
                </h3>
                <p className="text-[#8FA4C8] text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{area.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-[#C9A55C] text-xs font-semibold opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all">
                  Conocer más <ArrowRight size={12} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Situation Center ─────────────────────────────────────────────────────────

function SituationCenter() {
  return (
    <section id="centro-situacion" className="py-16 md:py-24 bg-[#051535]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="mb-12">
          <SectionLabel>Centro de Situación Nacional</SectionLabel>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              Monitoreo en Tiempo Real
            </h2>
            <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#8FA4C8]">
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Sistema activo — Última sincronización: 22 JUN 2026 09:15 AST
            </div>
          </div>
        </div>

        {/* Dashboard grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {SITUATION_CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-[#071D49] border border-[#C9A55C]/15 hover:border-[#C9A55C]/30 rounded-xl p-5 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${card.color}15`, color: card.color }}
                >
                  {card.icon}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold font-['Plus_Jakarta_Sans']">{card.title}</div>
                  <div className="text-xs font-['JetBrains_Mono']" style={{ color: card.color }}>{card.count}</div>
                </div>
              </div>
              <p className="text-[#8FA4C8] text-xs leading-relaxed font-['Plus_Jakarta_Sans']">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="relative rounded-xl overflow-hidden border border-[#C9A55C]/20 h-64 md:h-80 bg-[#071D49]">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&h=600&fit=crop&auto=format"
            alt="Mapa de monitoreo regional del Centro de Situación"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Globe size={40} className="text-[#C9A55C] mb-3 opacity-70" />
            <span className="text-[#8FA4C8] text-sm font-['JetBrains_Mono'] tracking-widest">INTERFAZ RESTRINGIDA — ACCESO AUTORIZADO</span>
            <a
              href="#"
              className="mt-5 px-6 py-2.5 bg-[#C9A55C] hover:bg-[#D4B567] text-[#071D49] text-xs font-bold rounded tracking-widest uppercase font-['Plus_Jakarta_Sans'] transition-all"
            >
              Solicitar Acceso
            </a>
          </div>
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "linear-gradient(#C9A55C 1px, transparent 1px), linear-gradient(90deg, #C9A55C 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />
        </div>
      </div>
    </section>
  );
}

// ─── Featured News ─────────────────────────────────────────────────────────────

function FeaturedNews() {
  return (
    <section id="noticias" className="py-16 md:py-24 bg-[#071D49]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <SectionLabel>Sala de Prensa</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              Noticias Destacadas
            </h2>
          </div>
          <a href="#" className="text-[#C9A55C] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all font-['Plus_Jakarta_Sans']">
            Ver todas las noticias <ChevronRight size={14} />
          </a>
        </div>

        <div className="grid lg:grid-cols-5 gap-5">
          {/* Featured article */}
          {NEWS_ITEMS.filter(n => n.featured).map((item) => (
            <a
              key={item.title}
              href="#"
              className="lg:col-span-3 group relative rounded-xl overflow-hidden border border-[#C9A55C]/15 hover:border-[#C9A55C]/40 transition-all duration-300 bg-[#0A2560]"
            >
              <div className="relative h-56 md:h-72 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2560] via-[#0A2560]/40 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#C9A55C] text-[#071D49] text-[10px] font-bold rounded tracking-widest uppercase font-['JetBrains_Mono']">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <div className="text-[#8FA4C8] text-xs mb-3 font-['JetBrains_Mono']">{item.date}</div>
                <h3 className="text-white font-bold text-lg md:text-xl leading-snug mb-3 font-['Plus_Jakarta_Sans'] group-hover:text-[#C9A55C] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#8FA4C8] text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.summary}</p>
                <div className="mt-5 flex items-center gap-1 text-[#C9A55C] text-xs font-semibold font-['Plus_Jakarta_Sans']">
                  Leer nota completa <ArrowRight size={12} />
                </div>
              </div>
            </a>
          ))}

          {/* Side articles */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {NEWS_ITEMS.filter(n => !n.featured).map((item) => (
              <a
                key={item.title}
                href="#"
                className="group flex gap-4 p-4 bg-[#0A2560] border border-[#C9A55C]/15 hover:border-[#C9A55C]/35 rounded-xl transition-all duration-300"
              >
                <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-[#071D49]">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#C9A55C] text-[9px] font-bold uppercase tracking-wider font-['JetBrains_Mono']">{item.category}</span>
                    <span className="text-[#8FA4C8] text-[9px] font-['JetBrains_Mono']">{item.date}</span>
                  </div>
                  <h4 className="text-white text-sm font-semibold leading-tight font-['Plus_Jakarta_Sans'] group-hover:text-[#C9A55C] transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Educational Hub ──────────────────────────────────────────────────────────

function EducationalHub() {
  return (
    <section className="py-16 md:py-24 bg-[#051535]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Hub Educativo</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-5 font-['Plus_Jakarta_Sans']">
              Conocimiento para la Seguridad Nacional
            </h2>
            <p className="text-[#8FA4C8] text-base leading-relaxed mb-8 font-['Plus_Jakarta_Sans']">
              La DNI promueve una ciudadanía informada y resiliente. Nuestros recursos educativos están diseñados para fortalecer la cultura de seguridad nacional desde la escuela hasta las instituciones del Estado.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2.5 px-6 py-3 border border-[#C9A55C]/50 text-[#C9A55C] hover:bg-[#C9A55C] hover:text-[#071D49] font-semibold text-sm rounded transition-all duration-200 font-['Plus_Jakarta_Sans']"
            >
              Acceder al Hub <ArrowRight size={15} />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {EDUCATION_CARDS.map((card) => (
              <a
                key={card.title}
                href="#"
                className="group p-5 bg-[#071D49] border border-[#C9A55C]/15 hover:border-[#C9A55C]/40 rounded-xl transition-all duration-300"
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 transition-all group-hover:scale-110"
                  style={{ backgroundColor: `${card.color}15`, color: card.color }}
                >
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
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section id="canal-confidencial" className="relative py-20 md:py-28 overflow-hidden bg-[#071D49]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1400&h=600&fit=crop&auto=format"
          alt="Bandera de la República Dominicana"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A55C]/10 via-transparent to-[#0A3B91]/20" />
      </div>

      {/* Gold grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "linear-gradient(#C9A55C 1px, transparent 1px), linear-gradient(90deg, #C9A55C 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A55C]/10 border border-[#C9A55C]/30 mb-8">
            <Lock size={14} className="text-[#C9A55C]" />
            <span className="text-[#C9A55C] text-xs font-bold tracking-widest uppercase font-['JetBrains_Mono']">Canal Confidencial</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 font-['Plus_Jakarta_Sans']">
            Tu información puede{" "}
            <span className="text-[#C9A55C]">salvar vidas</span>
          </h2>

          <p className="text-[#B8CCE8] text-lg mb-10 leading-relaxed font-['Plus_Jakarta_Sans']">
            Si tienes información sobre actividades que puedan comprometer la seguridad nacional, repórtala de forma anónima y segura a través de nuestro canal confidencial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C9A55C] hover:bg-[#D4B567] text-[#071D49] font-extrabold text-sm rounded transition-all duration-200 tracking-wider uppercase font-['Plus_Jakarta_Sans'] shadow-[0_0_30px_rgba(201,165,92,0.3)]"
            >
              <Lock size={16} /> Acceder al Canal Confidencial
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white hover:bg-white/5 font-semibold text-sm rounded transition-all duration-200 font-['Plus_Jakarta_Sans']"
            >
              <Info size={16} /> ¿Cómo funciona?
            </a>
          </div>

          <p className="mt-8 text-[#8FA4C8] text-xs font-['JetBrains_Mono'] tracking-wide">
            Tu identidad permanece protegida. El canal utiliza cifrado de extremo a extremo.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer id="contacto" className="bg-[#030E28] border-t border-[#C9A55C]/20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#C9A55C]/10 border border-[#C9A55C]/40 flex items-center justify-center">
                <Shield size={18} className="text-[#C9A55C]" />
              </div>
              <div>
                <div className="text-white font-bold font-['Plus_Jakarta_Sans']">DNI</div>
                <div className="text-[#8FA4C8] text-[9px] tracking-widest uppercase font-['JetBrains_Mono']">República Dominicana</div>
              </div>
            </div>
            <p className="text-[#8FA4C8] text-sm leading-relaxed mb-5 font-['Plus_Jakarta_Sans']">
              Dirección Nacional de Inteligencia — organismo rector del Sistema Nacional de Inteligencia.
            </p>
            <div className="flex gap-3">
              {["X", "FB", "YT", "IN"].map((s) => (
                <a key={s} href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#C9A55C]/20 border border-white/10 hover:border-[#C9A55C]/40 flex items-center justify-center text-[#8FA4C8] hover:text-[#C9A55C] text-[10px] font-bold transition-all font-['JetBrains_Mono']">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: "Institución",
              links: ["Sobre la DNI", "Marco Legal", "Autoridades", "Historia Institucional", "Convenios"],
            },
            {
              title: "Transparencia",
              links: ["Portal de Transparencia", "Informes Públicos", "Preguntas Frecuentes", "Solicitud de Información", "Acceso a Datos"],
            },
            {
              title: "Contacto",
              links: null,
              contact: true,
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold text-sm mb-4 font-['Plus_Jakarta_Sans'] tracking-wide">{col.title}</h4>
              {col.links && (
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-[#8FA4C8] hover:text-[#C9A55C] text-sm transition-colors font-['Plus_Jakarta_Sans']">{l}</a>
                    </li>
                  ))}
                </ul>
              )}
              {col.contact && (
                <div className="space-y-3">
                  {[
                    { icon: <MapPin size={14} />, text: "Av. México esq. Pedro Henríquez Ureña, Santo Domingo, D.N." },
                    { icon: <Phone size={14} />, text: "+1 (809) 000-0000" },
                    { icon: <Mail size={14} />, text: "info@dni.gov.do" },
                  ].map((c) => (
                    <div key={c.text} className="flex gap-2.5 text-[#8FA4C8] text-sm font-['Plus_Jakarta_Sans']">
                      <span className="text-[#C9A55C] mt-0.5 shrink-0">{c.icon}</span>
                      {c.text}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#C9A55C]/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#8FA4C8] text-xs font-['JetBrains_Mono']">
            © 2026 Dirección Nacional de Inteligencia — República Dominicana. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-[#8FA4C8] text-xs font-['Plus_Jakarta_Sans']">
            <a href="#" className="hover:text-[#C9A55C] transition-colors">Términos de Uso</a>
            <a href="#" className="hover:text-[#C9A55C] transition-colors">Privacidad</a>
            <a href="#" className="hover:text-[#C9A55C] transition-colors">Accesibilidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div
      className="min-h-screen bg-[#071D49] text-[#F5F7FA]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <Header />
      <main>
        <Hero />
        <NationalStatusPanel />
        <QuickAccess />
        <InstitutionalSection />
        <AreasOfWork />
        <SituationCenter />
        <FeaturedNews />
        <EducationalHub />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
