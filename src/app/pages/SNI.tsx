import { useState } from "react";
import { Link } from "react-router";
import {
  Shield, Target, Brain, Globe, Users, Layers,
  ChevronDown, ChevronUp, ArrowRight, Scale, BookOpen,
  Eye, Zap, Flag, Map,
} from "lucide-react";
import { PageHero, SectionLabel, cn } from "../components/shared";

// ─── SNI member institutions ──────────────────────────────────────────────────

const INSTITUCIONES = [
  {
    acronym: "DNI",
    name: "Dirección Nacional de Inteligencia",
    desc: "Organismo rector del Sistema Nacional de Inteligencia. Coordina la producción de inteligencia estratégica del Estado dominicano.",
    role: "Organismo Rector",
    color: "#C9A55C",
    link: "/sobre-nosotros",
  },
  {
    acronym: "[INSTITUCIÓN]",
    name: "[Nombre oficial — completar]",
    desc: "[Descripción pública del organismo según Ley 1-26. Completar con información oficial.]",
    role: "Miembro del SNI",
    color: "#3B82F6",
    link: null,
  },
  {
    acronym: "[INSTITUCIÓN]",
    name: "[Nombre oficial — completar]",
    desc: "[Descripción pública del organismo según Ley 1-26. Completar con información oficial.]",
    role: "Miembro del SNI",
    color: "#10B981",
    link: null,
  },
  {
    acronym: "[INSTITUCIÓN]",
    name: "[Nombre oficial — completar]",
    desc: "[Descripción pública del organismo según Ley 1-26. Completar con información oficial.]",
    role: "Miembro del SNI",
    color: "#8B5CF6",
    link: null,
  },
  {
    acronym: "[INSTITUCIÓN]",
    name: "[Nombre oficial — completar]",
    desc: "[Descripción pública del organismo según Ley 1-26. Completar con información oficial.]",
    role: "Miembro del SNI",
    color: "#F59E0B",
    link: null,
  },
  {
    acronym: "[INSTITUCIÓN]",
    name: "[Nombre oficial — completar]",
    desc: "[Descripción pública del organismo según Ley 1-26. Completar con información oficial.]",
    role: "Miembro del SNI",
    color: "#EF4444",
    link: null,
  },
];

const EDUCATION_CARDS = [
  {
    icon: <Eye size={22} />,
    title: "Prevención",
    desc: "La inteligencia anticipa amenazas antes de que se materialicen, permitiendo al Estado actuar de forma preventiva para proteger a sus ciudadanos.",
    color: "#C9A55C",
  },
  {
    icon: <Brain size={22} />,
    title: "Análisis",
    desc: "Transformar datos e información en conocimiento accionable que oriente las decisiones de las más altas autoridades del Estado.",
    color: "#3B82F6",
  },
  {
    icon: <Users size={22} />,
    title: "Coordinación",
    desc: "Los organismos del SNI trabajan articuladamente para producir una visión integral de la seguridad nacional dominicana.",
    color: "#10B981",
  },
  {
    icon: <Shield size={22} />,
    title: "Protección",
    desc: "Salvaguardar la soberanía, las instituciones democráticas, los ciudadanos y los intereses vitales de la República Dominicana.",
    color: "#8B5CF6",
  },
  {
    icon: <Flag size={22} />,
    title: "Soberanía",
    desc: "Garantizar que la República Dominicana ejerza plena soberanía sobre su territorio, espacio aéreo, mar territorial y recursos nacionales.",
    color: "#EC4899",
  },
];

const STRATEGIC_ASSETS = [
  { icon: <Map size={20} />, label: "Posición estratégica en el Caribe", desc: "La República Dominicana ocupa una posición geográfica privilegiada en el corazón del Caribe, con implicaciones directas para la seguridad regional." },
  { icon: <Globe size={20} />, label: "Costas y fronteras", desc: "Extensa línea costera y frontera terrestre que requieren vigilancia permanente para proteger la integridad del territorio nacional." },
  { icon: <Layers size={20} />, label: "Recursos naturales", desc: "Recursos hídricos, biodiversidad, zonas francas y patrimonio cultural que conforman activos estratégicos del Estado dominicano." },
  { icon: <Target size={20} />, label: "Intereses nacionales", desc: "Protección de los intereses vitales del país en el ámbito político, económico, social y de seguridad, tanto a nivel nacional como internacional." },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("border rounded-xl overflow-hidden transition-all duration-200", open ? "border-[#C9A55C]/40" : "border-white/10 hover:border-white/20")}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
        aria-expanded={open}
      >
        <span className={cn("text-sm font-semibold font-['Plus_Jakarta_Sans']", open ? "text-[#C9A55C]" : "text-white")}>{q}</span>
        {open ? <ChevronUp size={15} className="text-[#C9A55C] shrink-0" /> : <ChevronDown size={15} className="text-[#8FA4C8] shrink-0" />}
      </button>
      {open && (
        <div className="px-5 pb-4 border-t border-white/8 pt-4">
          <p className="text-[#8FA4C8] text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{a}</p>
        </div>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SNI() {
  return (
    <>
      <PageHero
        label="Sistema Nacional de Inteligencia"
        title="Sistema Nacional de Inteligencia"
        description="Inteligencia estratégica para proteger los intereses nacionales y los ciudadanos de la República Dominicana."
        breadcrumbs={[{ label: "Sistema Nacional de Inteligencia" }]}
      />

      {/* What is the SNI */}
      <section className="py-14 md:py-20 bg-[#071D49]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionLabel>Comprensión ciudadana</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans'] mb-5">
                ¿Qué es el Sistema Nacional de Inteligencia?
              </h2>
              <p className="text-[#C8D8F0] leading-relaxed mb-4 font-['Plus_Jakarta_Sans']">
                El Sistema Nacional de Inteligencia (SNI) es el conjunto de organismos, unidades y capacidades del Estado dominicano encargados de producir, procesar y analizar información estratégica para apoyar la toma de decisiones del Gobierno y proteger la seguridad nacional.
              </p>
              <p className="text-[#C8D8F0] leading-relaxed mb-4 font-['Plus_Jakarta_Sans']">
                La inteligencia no es simplemente vigilancia o actividad policial. Es un proceso técnico y analítico orientado a la comprensión del entorno, la anticipación de amenazas y la protección de los intereses vitales de la nación.
              </p>
              <p className="text-[#8FA4C8] leading-relaxed font-['Plus_Jakarta_Sans'] text-sm">
                [CONTENIDO OFICIAL DNI — Completar con la definición exacta del SNI según la Ley Orgánica Núm. 1-26 del 9 de enero de 2026.]
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Análisis", icon: <Brain size={20} />, desc: "Procesamiento de información estratégica" },
                { label: "Prevención", icon: <Shield size={20} />, desc: "Anticipación de amenazas nacionales" },
                { label: "Coordinación", icon: <Users size={20} />, desc: "Articulación interinstitucional" },
                { label: "Protección", icon: <Flag size={20} />, desc: "Defensa de los intereses del Estado" },
              ].map((item) => (
                <div key={item.label} className="p-5 bg-[#051535] border border-[#C9A55C]/15 hover:border-[#C9A55C]/35 rounded-xl transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A55C]/10 flex items-center justify-center text-[#C9A55C] mb-3 group-hover:bg-[#C9A55C]/20 transition-colors">
                    {item.icon}
                  </div>
                  <p className="text-white font-bold text-sm font-['Plus_Jakarta_Sans'] mb-1">{item.label}</p>
                  <p className="text-[#8FA4C8] text-xs font-['Plus_Jakarta_Sans'] leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diagram: SNI → DNI → Coordination */}
      <section className="py-14 md:py-20 bg-[#051535]">
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <SectionLabel>Estructura</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              El rol de la DNI dentro del SNI
            </h2>
            <p className="text-[#8FA4C8] mt-3 text-sm font-['Plus_Jakarta_Sans'] max-w-xl mx-auto">
              La Dirección Nacional de Inteligencia actúa como organismo rector del Sistema Nacional de Inteligencia, coordinando la producción y análisis de inteligencia estratégica del Estado.
            </p>
          </div>

          {/* Flow diagram */}
          <div className="flex flex-col items-center gap-0">
            {[
              { label: "Sistema Nacional de Inteligencia", sub: "Marco institucional y legal del Estado", color: "#C9A55C", wide: true },
              { label: "Dirección Nacional de Inteligencia", sub: "Organismo rector y coordinador", color: "#3B82F6", wide: false },
              { label: "Coordinación interinstitucional", sub: "Articulación de organismos del SNI", color: "#10B981", wide: false },
              { label: "Instituciones y organismos del sistema", sub: "Entidades con funciones de inteligencia", color: "#8B5CF6", wide: true },
            ].map((node, i, arr) => (
              <div key={node.label} className="flex flex-col items-center w-full">
                <div
                  className={cn("px-6 py-4 rounded-xl border text-center transition-all", node.wide ? "w-full" : "w-full md:w-2/3")}
                  style={{ borderColor: `${node.color}30`, backgroundColor: `${node.color}10` }}
                >
                  <p className="text-white font-extrabold text-sm md:text-base font-['Plus_Jakarta_Sans']" style={{ color: node.color }}>
                    {node.label}
                  </p>
                  <p className="text-[#8FA4C8] text-xs mt-0.5 font-['Plus_Jakarta_Sans']">{node.sub}</p>
                </div>
                {i < arr.length - 1 && (
                  <div className="flex flex-col items-center py-1">
                    <div className="w-px h-5 bg-[#C9A55C]/30" />
                    <ChevronDown size={16} className="text-[#C9A55C]/60" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration — institution cards */}
      <section className="py-14 md:py-20 bg-[#071D49]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <SectionLabel>Integración</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              Integración del Sistema Nacional de Inteligencia
            </h2>
            <p className="text-[#8FA4C8] mt-3 text-sm font-['Plus_Jakarta_Sans'] max-w-xl mx-auto">
              El SNI está integrado por distintos organismos del Estado dominicano con funciones específicas dentro del sistema de inteligencia nacional.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INSTITUCIONES.map((inst) => (
              <div
                key={inst.acronym}
                className="group flex flex-col p-6 bg-[#051535] border rounded-xl transition-all hover:shadow-lg"
                style={{ borderColor: `${inst.color}20` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xs font-extrabold font-['JetBrains_Mono'] shrink-0"
                    style={{ backgroundColor: `${inst.color}15`, color: inst.color }}
                  >
                    {inst.acronym.length <= 4 ? inst.acronym : inst.acronym.slice(0, 4)}
                  </div>
                  <div>
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest font-['JetBrains_Mono'] px-2 py-0.5 rounded"
                      style={{ color: inst.color, backgroundColor: `${inst.color}15` }}
                    >
                      {inst.role}
                    </span>
                  </div>
                </div>
                <h3 className="text-white font-bold text-sm mb-2 font-['Plus_Jakarta_Sans'] leading-snug">{inst.name}</h3>
                <p className="text-[#8FA4C8] text-xs leading-relaxed font-['Plus_Jakarta_Sans'] flex-1">{inst.desc}</p>
                {inst.link && (
                  <Link
                    to={inst.link}
                    className="flex items-center gap-1.5 text-[#C9A55C] text-xs font-semibold mt-4 hover:text-[#D4B567] transition-colors font-['Plus_Jakarta_Sans']"
                  >
                    Conocer más <ArrowRight size={12} />
                  </Link>
                )}
              </div>
            ))}
          </div>
          <p className="text-[#8FA4C8] text-xs mt-6 text-center font-['Plus_Jakarta_Sans']">
            [Completar con los organismos oficiales del SNI según la Ley Orgánica Núm. 1-26 del 9 de enero de 2026]
          </p>
        </div>
      </section>

      {/* Institutional coordination */}
      <section className="py-14 md:py-20 bg-[#051535]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionLabel>Coordinación</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans'] mb-5">
                Coordinación institucional
              </h2>
              <p className="text-[#C8D8F0] leading-relaxed mb-4 font-['Plus_Jakarta_Sans']">
                La seguridad nacional no es responsabilidad de una sola institución. El SNI opera bajo el principio de que la coordinación entre sus organismos produce una comprensión más completa y precisa del entorno de seguridad.
              </p>
              <p className="text-[#C8D8F0] leading-relaxed mb-4 font-['Plus_Jakarta_Sans']">
                Cada organismo del sistema aporta perspectivas y capacidades únicas que, al ser articuladas por la DNI, producen inteligencia estratégica de mayor calidad para apoyar las decisiones del Estado.
              </p>
              <p className="text-[#8FA4C8] text-sm font-['Plus_Jakarta_Sans']">
                [CONTENIDO OFICIAL DNI — Completar con mecanismos de coordinación, instancias de articulación y protocolos del SNI según la ley vigente.]
              </p>
            </div>
            <div className="space-y-3">
              {[
                { label: "Cooperación", desc: "Intercambio estructurado de información entre organismos del sistema.", icon: <Users size={18} /> },
                { label: "Análisis compartido", desc: "Fusión de datos e información proveniente de múltiples fuentes institucionales.", icon: <Brain size={18} /> },
                { label: "Prevención coordinada", desc: "Respuesta articulada ante amenazas identificadas a la seguridad nacional.", icon: <Shield size={18} /> },
                { label: "Protección de intereses", desc: "Defensa integrada de los intereses vitales y estratégicos del Estado.", icon: <Flag size={18} /> },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-4 bg-[#071D49] border border-white/8 hover:border-[#C9A55C]/25 rounded-xl transition-all group">
                  <div className="w-9 h-9 rounded-lg bg-[#C9A55C]/10 flex items-center justify-center text-[#C9A55C] shrink-0 group-hover:bg-[#C9A55C]/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm font-['Plus_Jakarta_Sans'] mb-0.5">{item.label}</p>
                    <p className="text-[#8FA4C8] text-xs leading-relaxed font-['Plus_Jakarta_Sans']">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Democratic / legal framework */}
      <section className="py-14 md:py-20 bg-[#071D49]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <SectionLabel>Marco democrático</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              Inteligencia al servicio de la democracia
            </h2>
            <p className="text-[#8FA4C8] mt-3 text-sm font-['Plus_Jakarta_Sans'] max-w-2xl mx-auto">
              Las actividades de inteligencia en la República Dominicana se desarrollan dentro de un estricto marco constitucional y legal, con pleno respeto a los derechos fundamentales de los ciudadanos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {[
              {
                icon: <BookOpen size={22} />,
                title: "Constitución de la República Dominicana",
                desc: "Todas las actividades de inteligencia están subordinadas al ordenamiento constitucional y respetan las garantías fundamentales de los ciudadanos.",
                color: "#C9A55C",
              },
              {
                icon: <Scale size={22} />,
                title: "Ley Orgánica Núm. 1-26",
                desc: "La Ley del 9 de enero de 2026 establece el marco legal, los límites, los controles y la estructura del Sistema Nacional de Inteligencia.",
                color: "#3B82F6",
              },
              {
                icon: <Zap size={22} />,
                title: "Supervisión democrática",
                desc: "Los mecanismos de control democrático garantizan que las actividades de inteligencia no vulneren derechos ciudadanos ni se utilicen con fines políticos.",
                color: "#10B981",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-[#051535] rounded-xl border transition-all"
                style={{ borderColor: `${item.color}20` }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-sm mb-2 font-['Plus_Jakarta_Sans'] leading-snug">{item.title}</h3>
                <p className="text-[#8FA4C8] text-xs leading-relaxed font-['Plus_Jakarta_Sans']">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/marco-legal"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#C9A55C]/40 hover:bg-[#C9A55C]/10 text-[#C9A55C] font-bold text-sm rounded-lg uppercase tracking-wider font-['Plus_Jakarta_Sans'] transition-all"
            >
              Consultar Marco Legal
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Educational component */}
      <section className="py-14 md:py-20 bg-[#051535]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <SectionLabel>Educación ciudadana</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              Conoce cómo funciona la inteligencia
            </h2>
            <p className="text-[#8FA4C8] mt-3 text-sm font-['Plus_Jakarta_Sans'] max-w-xl mx-auto">
              La inteligencia es una función del Estado orientada a proteger a los ciudadanos y los intereses nacionales mediante el análisis y la anticipación.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {EDUCATION_CARDS.map((card) => (
              <div
                key={card.title}
                className="group p-5 bg-[#071D49] border rounded-xl transition-all text-center"
                style={{ borderColor: `${card.color}20` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-colors"
                  style={{ backgroundColor: `${card.color}15`, color: card.color }}
                >
                  {card.icon}
                </div>
                <h3 className="text-white font-bold text-sm mb-2 font-['Plus_Jakarta_Sans']">{card.title}</h3>
                <p className="text-[#8FA4C8] text-xs leading-relaxed font-['Plus_Jakarta_Sans']">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic context */}
      <section className="py-14 md:py-20 bg-[#071D49]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionLabel>Contexto estratégico</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans'] mb-5">
                La República Dominicana y su posición estratégica
              </h2>
              <p className="text-[#C8D8F0] leading-relaxed mb-4 font-['Plus_Jakarta_Sans']">
                La República Dominicana ocupa una posición geográfica de primer orden en el Caribe. Su ubicación, sus costas, su frontera terrestre, sus recursos naturales y su economía proyectan una presencia estratégica que requiere una inteligencia nacional robusta y efectiva.
              </p>
              <p className="text-[#C8D8F0] leading-relaxed mb-4 font-['Plus_Jakarta_Sans']">
                El SNI garantiza que el Estado dominicano comprenda su entorno y pueda tomar decisiones informadas para proteger su soberanía, sus ciudadanos y sus intereses en un contexto regional e internacional complejo.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {STRATEGIC_ASSETS.map((asset) => (
                <div key={asset.label} className="p-4 bg-[#051535] border border-[#C9A55C]/15 hover:border-[#C9A55C]/35 rounded-xl transition-all group">
                  <div className="w-9 h-9 rounded-lg bg-[#C9A55C]/10 flex items-center justify-center text-[#C9A55C] mb-3 group-hover:bg-[#C9A55C]/20 transition-colors">
                    {asset.icon}
                  </div>
                  <p className="text-white font-bold text-xs mb-1 font-['Plus_Jakarta_Sans'] leading-snug">{asset.label}</p>
                  <p className="text-[#8FA4C8] text-[11px] leading-relaxed font-['Plus_Jakarta_Sans']">{asset.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video placeholder */}
      <section className="py-14 bg-[#051535]">
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <div className="text-center mb-8">
            <SectionLabel>Multimedia</SectionLabel>
            <h2 className="text-xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              Conoce el Sistema Nacional de Inteligencia
            </h2>
          </div>
          <div className="aspect-video rounded-2xl border border-[#C9A55C]/15 bg-[#071D49] flex items-center justify-center">
            <div className="text-center px-6">
              <div className="w-14 h-14 rounded-full border border-[#C9A55C]/30 bg-[#C9A55C]/10 flex items-center justify-center mx-auto mb-3">
                <Zap size={24} className="text-[#C9A55C]/60" />
              </div>
              <p className="text-[#8FA4C8] text-sm font-['JetBrains_Mono'] mb-1">VIDEO_URL_HERE</p>
              <p className="text-[#8FA4C8] text-xs font-['Plus_Jakarta_Sans']">
                Reemplazar con elemento {"<video>"} o iframe de YouTube
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 bg-[#071D49]">
        <div className="max-w-[800px] mx-auto px-6 md:px-10">
          <div className="text-center mb-8">
            <SectionLabel>Preguntas frecuentes</SectionLabel>
            <h2 className="text-xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              Lo que los ciudadanos preguntan
            </h2>
          </div>
          <div className="space-y-2 bg-[#051535] rounded-2xl p-4 md:p-6">
            {[
              { q: "¿La inteligencia implica vigilancia de ciudadanos comunes?", a: "No. Las actividades de inteligencia están orientadas a identificar amenazas a la seguridad nacional, no a monitorear las actividades de los ciudadanos. Las actuaciones se rigen por la Constitución y la Ley, con controles democráticos estrictos. [RESPUESTA OFICIAL DNI]" },
              { q: "¿Qué diferencia existe entre el SNI y la DNI?", a: "El Sistema Nacional de Inteligencia (SNI) es el conjunto de todos los organismos del Estado con funciones de inteligencia. La Dirección Nacional de Inteligencia (DNI) es el organismo rector que coordina y articula ese sistema. [RESPUESTA OFICIAL DNI]" },
              { q: "¿Bajo qué ley opera el Sistema Nacional de Inteligencia?", a: "El SNI opera bajo la Ley Orgánica Núm. 1-26 del 9 de enero de 2026 y la Constitución de la República Dominicana. [RESPUESTA OFICIAL DNI — verificar referencia legal exacta]" },
              { q: "¿Cómo puede un ciudadano comunicarse con la DNI?", a: "A través de los canales oficiales disponibles en la sección de Contacto del portal institucional. Para reportes confidenciales, utilice el Canal Confidencial. [RESPUESTA OFICIAL DNI]" },
            ].map((faq, i) => <AccordionItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-12 bg-[#051535] border-t border-[#C9A55C]/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="text-[#8FA4C8] text-xs uppercase tracking-widest font-['JetBrains_Mono'] mb-5">También puede visitar</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Sobre Nosotros", to: "/sobre-nosotros" },
              { label: "Áreas de Trabajo", to: "/areas-de-trabajo/ciberseguridad" },
              { label: "Marco Legal", to: "/marco-legal" },
              { label: "Contacto", to: "/contacto" },
              { label: "¿Qué es la Inteligencia?", to: "/que-es-la-inteligencia" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-2 border border-white/12 hover:border-[#C9A55C]/40 hover:bg-[#C9A55C]/5 text-[#C8D8F0] hover:text-[#C9A55C] text-xs font-semibold rounded-lg font-['Plus_Jakarta_Sans'] transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
