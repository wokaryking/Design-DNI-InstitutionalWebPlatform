import { Target, TrendingUp, Globe, FileText, Brain, Layers } from "lucide-react";
import { PageHero, SectionLabel } from "../../components/shared";
import { AreaCTA } from "../../components/AreaCTA";

const OUTPUTS = [
  { icon: <FileText size={22} />, title: "Informes Estratégicos", desc: "Producción de análisis de largo plazo sobre tendencias geopolíticas, económicas y de seguridad que afectan al país." },
  { icon: <Brain size={22} />, title: "Evaluaciones de Amenaza", desc: "Valoración periódica del panorama de amenazas a la seguridad nacional con niveles de alerta diferenciados." },
  { icon: <Globe size={22} />, title: "Monitoreo Geopolítico", desc: "Seguimiento de dinámicas regionales e internacionales con potencial impacto en los intereses dominicanos." },
  { icon: <TrendingUp size={22} />, title: "Análisis Económico", desc: "Inteligencia sobre riesgos económicos, inversiones extranjeras sensibles y actores con influencia estructural." },
  { icon: <Target size={22} />, title: "Apoyo a Decisiones", desc: "Productos de inteligencia accionables para apoyar la toma de decisiones del Presidente y el Consejo de Seguridad." },
  { icon: <Layers size={22} />, title: "Inteligencia Sectorial", desc: "Análisis especializados por sector: energía, salud pública, migración, narcoactividad y finanzas ilícitas." },
];

const CYCLE = [
  { label: "Dirección", desc: "Definición de requerimientos de inteligencia por parte de las autoridades competentes." },
  { label: "Recolección", desc: "Obtención de información de fuentes abiertas, técnicas y humanas autorizadas." },
  { label: "Procesamiento", desc: "Organización, traducción y categorización de la información recolectada." },
  { label: "Análisis", desc: "Transformación de datos en inteligencia mediante razonamiento analítico riguroso." },
  { label: "Diseminación", desc: "Distribución de productos de inteligencia a tomadores de decisión autorizados." },
];

export default function InteligenciaEstrategica() {
  return (
    <>
      <PageHero
        label="Área de Trabajo"
        title="Inteligencia Estratégica"
        description="Producción de análisis de largo alcance para apoyar las decisiones del Estado dominicano en materia de seguridad, política exterior, economía nacional y proyección estratégica."
        breadcrumbs={[{ label: "Áreas de Trabajo", to: "/areas-de-trabajo/inteligencia-estrategica" }, { label: "Inteligencia Estratégica" }]}
        accentColor="#C9A55C"
      />
      <AreaCTA areaSlug="inteligencia-estrategica" areaLabel="Inteligencia Estratégica" accentColor="#C9A55C" />

      <section className="py-14 md:py-20 bg-[#071D49]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <SectionLabel accentColor="#C9A55C">Función estratégica</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans'] mb-5">
                Visión a largo plazo para la nación
              </h2>
              <p className="text-[#C8D8F0] leading-relaxed mb-4 font-['Plus_Jakarta_Sans']">
                La Inteligencia Estratégica es el núcleo analítico de la DNI. Produce los productos de mayor jerarquía dentro del Sistema Nacional de Inteligencia, orientados a fortalecer la toma de decisiones en los más altos niveles del Estado dominicano.
              </p>
              <p className="text-[#8FA4C8] leading-relaxed font-['Plus_Jakarta_Sans'] text-sm">
                [CONTENIDO OFICIAL DNI — Completar con descripción del área, periodicidad de informes, mecanismos de coordinación con la Presidencia y el Consejo de Seguridad Nacional.]
              </p>
              <div className="mt-6 p-4 bg-[#C9A55C]/8 border border-[#C9A55C]/25 rounded-xl">
                <blockquote className="text-[#C8D8F0] text-sm italic leading-relaxed font-['Plus_Jakarta_Sans']">
                  "La inteligencia estratégica anticipa; no reacciona."
                </blockquote>
              </div>
            </div>
            <div className="space-y-0 relative">
              <div className="absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-[#C9A55C]/50 to-transparent" />
              {CYCLE.map((step, i) => (
                <div key={step.label} className="flex gap-5 pb-6 relative">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold font-['JetBrains_Mono'] shrink-0 z-10 bg-[#071D49] border-2 border-[#C9A55C] text-[#C9A55C]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="pt-1">
                    <div className="text-white font-bold text-sm font-['Plus_Jakarta_Sans'] mb-0.5">{step.label}</div>
                    <div className="text-[#8FA4C8] text-xs leading-relaxed font-['Plus_Jakarta_Sans']">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#ffffff]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <SectionLabel accentColor="#C9A55C">Productos</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans'] text-[#051535]">Tipos de análisis</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {OUTPUTS.map((o) => (
              <div key={o.title} className="group p-6 bg-[#071D49] border border-[#C9A55C]/15 hover:border-[#C9A55C]/40 rounded-xl transition-all">
                <div className="w-11 h-11 rounded-xl bg-[#C9A55C]/10 flex items-center justify-center text-[#C9A55C] mb-4 group-hover:bg-[#C9A55C]/20 transition-colors">
                  {o.icon}
                </div>
                <h3 className="text-white font-bold text-sm mb-2 font-['Plus_Jakarta_Sans']">{o.title}</h3>
                <p className="text-[#8FA4C8] text-xs leading-relaxed font-['Plus_Jakarta_Sans']">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
