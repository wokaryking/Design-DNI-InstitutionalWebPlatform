import { TrendingUp, Layers, Globe, Brain, Target, Zap } from "lucide-react";
import { PageHero, SectionLabel } from "../../components/shared";
import { AreaCTA } from "../../components/AreaCTA";

const METHODS = [
  { icon: <Brain size={22} />, title: "Análisis de Escenarios", desc: "Construcción de múltiples futuros posibles para apoyar la planificación estratégica del Estado a largo plazo." },
  { icon: <TrendingUp size={22} />, title: "Análisis de Tendencias", desc: "Identificación de megatendencias globales y regionales con potencial impacto en la seguridad nacional dominicana." },
  { icon: <Globe size={22} />, title: "Señales Débiles", desc: "Detección temprana de señales de cambio o emergencia que pueden convertirse en amenazas u oportunidades futuras." },
  { icon: <Layers size={22} />, title: "Modelos Predictivos", desc: "Aplicación de metodologías cuantitativas y cualitativas para anticipar dinámicas de seguridad y conflicto." },
  { icon: <Target size={22} />, title: "Inteligencia Competitiva", desc: "Monitoreo de capacidades estratégicas de actores clave con relevancia para los intereses nacionales." },
  { icon: <Zap size={22} />, title: "Alertas Tempranas", desc: "Sistema de alertas graduadas para activar mecanismos preventivos ante amenazas emergentes identificadas." },
];

const HORIZONS = [
  { label: "Corto plazo", range: "0–2 años", focus: "Amenazas inminentes y situaciones de tensión activa.", color: "#EF4444" },
  { label: "Mediano plazo", range: "2–5 años", focus: "Tendencias en consolidación y cambios sistémicos en curso.", color: "#F59E0B" },
  { label: "Largo plazo", range: "5–20 años", focus: "Transformaciones estructurales y escenarios futuros de seguridad.", color: "#10B981" },
];

export default function InteligenciaProspectiva() {
  return (
    <>
      <PageHero
        label="Área de Trabajo"
        title="Inteligencia Prospectiva"
        description="Análisis anticipatorio y construcción de escenarios futuros que permiten al Estado dominicano prepararse y adaptarse ante amenazas y desafíos de seguridad emergentes."
        breadcrumbs={[{ label: "Áreas de Trabajo", to: "/areas-de-trabajo/inteligencia-prospectiva" }, { label: "Inteligencia Prospectiva" }]}
        accentColor="#06B6D4"
      />
      <AreaCTA areaSlug="inteligencia-prospectiva" areaLabel="Inteligencia Prospectiva" accentColor="#06B6D4" />

      <section className="py-14 md:py-20 bg-[#071D49]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <SectionLabel accentColor="#06B6D4">Visión de Futuro</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans'] mb-5">
                Anticipando los desafíos del mañana
              </h2>
              <p className="text-[#C8D8F0] leading-relaxed mb-4 font-['Plus_Jakarta_Sans']">
                La Inteligencia Prospectiva trasciende el análisis del presente. Su misión es explorar los futuros posibles para que el Estado dominicano pueda diseñar políticas, estrategias y capacidades que garanticen la seguridad nacional en un entorno geopolítico en constante transformación.
              </p>
              <p className="text-[#8FA4C8] leading-relaxed font-['Plus_Jakarta_Sans'] text-sm">
                [CONTENIDO OFICIAL DNI — Completar con descripción del área, metodologías empleadas, periodicidad de informes prospectivos y usuarios de los productos.]
              </p>
            </div>
            <div className="space-y-4">
              {HORIZONS.map((h) => (
                <div key={h.label} className="p-5 bg-[#051535] rounded-xl border" style={{ borderColor: `${h.color}25` }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-bold text-sm font-['Plus_Jakarta_Sans']">{h.label}</span>
                    <span className="text-xs font-bold font-['JetBrains_Mono'] px-2 py-0.5 rounded" style={{ color: h.color, backgroundColor: `${h.color}15` }}>{h.range}</span>
                  </div>
                  <p className="text-[#8FA4C8] text-xs leading-relaxed font-['Plus_Jakarta_Sans']">{h.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#051535]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <SectionLabel accentColor="#06B6D4">Metodologías</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">Herramientas analíticas</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {METHODS.map((m) => (
              <div key={m.title} className="group p-6 bg-[#071D49] border border-[#06B6D4]/15 hover:border-[#06B6D4]/40 rounded-xl transition-all">
                <div className="w-11 h-11 rounded-xl bg-[#06B6D4]/10 flex items-center justify-center text-[#06B6D4] mb-4 group-hover:bg-[#06B6D4]/20 transition-colors">
                  {m.icon}
                </div>
                <h3 className="text-white font-bold text-sm mb-2 font-['Plus_Jakarta_Sans']">{m.title}</h3>
                <p className="text-[#8FA4C8] text-xs leading-relaxed font-['Plus_Jakarta_Sans']">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
