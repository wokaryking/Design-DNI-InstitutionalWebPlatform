import { useState } from "react";
import { Database, Cpu, BarChart2, FileText, Send, Lightbulb, ArrowRight, RefreshCw, Shield, Users } from "lucide-react";
import { PageHero, SectionLabel } from "../components/shared";

const CYCLE_STEPS = [
  {
    num: "01",
    label: "Recolección",
    desc: "Obtención de datos e información relevante para los objetivos de seguridad nacional, a partir de fuentes autorizadas y métodos legales.",
    icon: <Database size={24} />,
    color: "#C9A55C",
  },
  {
    num: "02",
    label: "Procesamiento",
    desc: "Organización, clasificación y preparación del material recolectado para su posterior análisis técnico y especializado.",
    icon: <Cpu size={24} />,
    color: "#3B82F6",
  },
  {
    num: "03",
    label: "Análisis",
    desc: "Evaluación crítica de la información por parte de analistas especializados para identificar patrones, tendencias y amenazas potenciales.",
    icon: <BarChart2 size={24} />,
    color: "#10B981",
  },
  {
    num: "04",
    label: "Producción",
    desc: "Elaboración de productos de inteligencia: informes, evaluaciones, alertas y reportes estratégicos que sintetizan los hallazgos del análisis.",
    icon: <FileText size={24} />,
    color: "#8B5CF6",
  },
  {
    num: "05",
    label: "Diseminación",
    desc: "Distribución oportuna de los productos de inteligencia a los órganos del Estado autorizados para recibir esta información.",
    icon: <Send size={24} />,
    color: "#EF4444",
  },
  {
    num: "06",
    label: "Apoyo a Decisiones",
    desc: "Uso de la inteligencia producida para informar la toma de decisiones de Estado que contribuyan a la seguridad nacional.",
    icon: <Lightbulb size={24} />,
    color: "#F59E0B",
  },
];

const COMPARISON = [
  { label: "Información", items: ["Datos crudos sin procesar", "Disponible públicamente", "Requiere contexto", "Sin evaluación de veracidad", "Múltiples fuentes sin filtrar"] },
  { label: "Inteligencia", items: ["Información analizada y evaluada", "Contextualizada y verificada", "Orientada a decisiones", "Con valoración de confiabilidad", "Síntesis de múltiples fuentes"] },
];

export default function QueEsInteligencia() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <>
      <PageHero
        label="Educación Ciudadana"
        title="¿Qué es la Inteligencia?"
        description="La inteligencia es mucho más que información. Es el proceso sistemático de análisis que convierte datos en conocimiento estratégico para proteger al Estado y a sus ciudadanos."
        breadcrumbs={[{ label: "Institución" }, { label: "¿Qué es la Inteligencia?" }]}
      />

      {/* Definition */}
      <section className="py-16 md:py-20 bg-[#071D49]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionLabel>Definición</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-5 font-['Plus_Jakarta_Sans']">
                Más que información: conocimiento estratégico
              </h2>
              <p className="text-[#8FA4C8] text-base leading-relaxed mb-5 font-['Plus_Jakarta_Sans']">
                La inteligencia es el conocimiento producido a través del análisis sistemático de información relevante para la seguridad nacional. No es espionaje, no es vigilancia masiva, y no es control ciudadano.
              </p>
              <p className="text-[#8FA4C8] text-base leading-relaxed mb-5 font-['Plus_Jakarta_Sans']">
                En una democracia, la inteligencia cumple una función preventiva: anticipar amenazas antes de que se materialicen, para que el Estado pueda responder con conocimiento, no con improvisación.
              </p>
              <p className="text-[#8FA4C8] text-base leading-relaxed font-['Plus_Jakarta_Sans']">
                La inteligencia de calidad es esencial para la toma de decisiones en materia de seguridad nacional, política exterior, y protección de la democracia.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-full border border-[#C9A55C]/10 animate-spin" style={{ animationDuration: "20s" }} />
                <div className="absolute inset-4 rounded-full border border-[#C9A55C]/15" />
                <div className="absolute inset-8 rounded-full border border-[#C9A55C]/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <RefreshCw size={36} className="text-[#C9A55C] mx-auto mb-2" />
                    <div className="text-[#C9A55C] text-xs font-bold tracking-widest uppercase font-['JetBrains_Mono']">Ciclo de</div>
                    <div className="text-white font-extrabold text-lg font-['Plus_Jakarta_Sans']">Inteligencia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence vs Information */}
      <section className="py-16 md:py-20 bg-[#051535]">
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <SectionLabel>Comparación</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              Inteligencia vs. Información
            </h2>
            <p className="text-[#8FA4C8] mt-3 text-sm font-['Plus_Jakarta_Sans']">
              No toda información es inteligencia. La diferencia está en el análisis.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {COMPARISON.map((col) => (
              <div
                key={col.label}
                className={`rounded-xl overflow-hidden border ${
                  col.label === "Inteligencia"
                    ? "border-[#C9A55C]/30 bg-[#C9A55C]/5"
                    : "border-white/10 bg-[#071D49]"
                }`}
              >
                <div className={`px-5 py-3.5 border-b ${col.label === "Inteligencia" ? "border-[#C9A55C]/20" : "border-white/8"}`}>
                  <span className={`font-bold text-sm font-['Plus_Jakarta_Sans'] ${col.label === "Inteligencia" ? "text-[#C9A55C]" : "text-[#8FA4C8]"}`}>
                    {col.label}
                  </span>
                </div>
                <ul className="p-4 space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm font-['Plus_Jakarta_Sans'] text-[#C8D8F0]">
                      <ArrowRight size={13} className={col.label === "Inteligencia" ? "text-[#C9A55C]" : "text-[#8FA4C8]"} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence Cycle */}
      <section className="py-16 md:py-24 bg-[#071D49]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <SectionLabel>Ciclo de Inteligencia</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              El proceso de producción de inteligencia
            </h2>
            <p className="text-[#8FA4C8] mt-3 text-sm max-w-xl mx-auto font-['Plus_Jakarta_Sans']">
              Seleccione cada etapa para conocer su función en el ciclo de inteligencia.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CYCLE_STEPS.map((step, i) => (
              <button
                key={step.label}
                onClick={() => setActiveStep(activeStep === i ? null : i)}
                className={`group text-left p-5 rounded-xl border transition-all duration-300 ${
                  activeStep === i
                    ? "border-opacity-100 bg-opacity-10"
                    : "border-[#C9A55C]/15 bg-[#051535] hover:border-[#C9A55C]/35"
                }`}
                style={activeStep === i ? {
                  borderColor: step.color,
                  backgroundColor: `${step.color}10`,
                } : {}}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all"
                    style={{ backgroundColor: `${step.color}15`, color: step.color }}
                  >
                    {step.icon}
                  </div>
                  <span className="text-xs font-bold font-['JetBrains_Mono']" style={{ color: step.color }}>
                    {step.num}
                  </span>
                </div>
                <h3 className="text-white font-bold text-base mb-2 font-['Plus_Jakarta_Sans']">{step.label}</h3>
                <p className={`text-[#8FA4C8] text-sm leading-relaxed font-['Plus_Jakarta_Sans'] transition-all duration-300 ${
                  activeStep === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}>
                  {step.desc}
                </p>
                {activeStep !== i && (
                  <p className="text-[#8FA4C8] text-xs line-clamp-2 font-['Plus_Jakarta_Sans']">{step.desc}</p>
                )}
              </button>
            ))}
          </div>

          {/* Cycle note */}
          <div className="mt-8 flex items-center justify-center gap-2 text-[#8FA4C8] text-xs font-['JetBrains_Mono']">
            <RefreshCw size={13} className="text-[#C9A55C]" />
            El ciclo es continuo: la retroalimentación mejora constantemente la calidad de la inteligencia producida.
          </div>
        </div>
      </section>

      {/* Democratic safeguards */}
      <section className="py-16 md:py-20 bg-[#051535]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <SectionLabel>Inteligencia y Democracia</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-5 font-['Plus_Jakarta_Sans']">
                La inteligencia al servicio de la libertad
              </h2>
              <p className="text-[#8FA4C8] text-base leading-relaxed mb-4 font-['Plus_Jakarta_Sans']">
                En un Estado democrático, la inteligencia no es una amenaza para la libertad: es su guardián. Cuando se ejerce dentro de la ley, la inteligencia protege los derechos de los ciudadanos al anticipar amenazas que podrían vulnerarlos.
              </p>
              <p className="text-[#8FA4C8] text-base leading-relaxed font-['Plus_Jakarta_Sans']">
                Las democracias modernas han aprendido que la transparencia sobre los límites de la actividad de inteligencia fortalece la confianza ciudadana y la legitimidad institucional.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Shield size={20} />, title: "Protege derechos", desc: "La inteligencia democrática anticipa amenazas a las libertades ciudadanas." },
                { icon: <Users size={20} />, title: "Sirve al pueblo", desc: "El beneficiario final de la inteligencia es la sociedad, no el Estado por sí mismo." },
                { icon: <FileText size={20} />, title: "Opera bajo ley", desc: "Todo acto de inteligencia tiene base legal expresa y supervisión institucional." },
                { icon: <RefreshCw size={20} />, title: "Rinde cuentas", desc: "Los órganos de inteligencia son responsables ante el Estado y la sociedad." },
              ].map((item) => (
                <div key={item.title} className="p-4 bg-[#071D49] border border-[#C9A55C]/15 rounded-xl hover:border-[#C9A55C]/35 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-[#C9A55C]/10 flex items-center justify-center text-[#C9A55C] mb-3">
                    {item.icon}
                  </div>
                  <div className="text-white font-semibold text-sm mb-1 font-['Plus_Jakarta_Sans']">{item.title}</div>
                  <div className="text-[#8FA4C8] text-xs leading-relaxed font-['Plus_Jakarta_Sans']">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-16 md:py-20 bg-[#071D49]">
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <div className="text-center mb-8">
            <SectionLabel>Video Educativo</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              Aprende sobre inteligencia
            </h2>
            <p className="text-[#8FA4C8] mt-2 text-sm font-['Plus_Jakarta_Sans']">[OFFICIAL EDUCATIONAL VIDEO]</p>
          </div>
          <div className="rounded-xl overflow-hidden border border-[#C9A55C]/20 bg-[#051535]">
            <video
              controls
              preload="metadata"
              poster="VIDEO_POSTER_URL_HERE"
              className="w-full aspect-video"
            >
              <source src="VIDEO_URL_HERE" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>
      </section>
    </>
  );
}
