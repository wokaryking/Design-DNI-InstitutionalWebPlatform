import { ArrowDown, Shield, Eye, Target, Users, Scale, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { PageHero, SectionLabel } from "../components/shared";

const FLOW_STEPS = [
  { label: "INTELIGENCIA", sublabel: "Recolección y análisis de información estratégica", icon: <Eye size={22} />, color: "#C9A55C" },
  { label: "ANÁLISIS", sublabel: "Procesamiento y evaluación técnica de la información", icon: <Target size={22} />, color: "#3B82F6" },
  { label: "PREVENCIÓN", sublabel: "Anticipación de amenazas antes de que se materialicen", icon: <Shield size={22} />, color: "#10B981" },
  { label: "APOYO A DECISIONES", sublabel: "Provisión de inteligencia oportuna a los órganos del Estado", icon: <Users size={22} />, color: "#8B5CF6" },
  { label: "SEGURIDAD NACIONAL", sublabel: "Protección del Estado, la democracia y la ciudadanía", icon: <Scale size={22} />, color: "#EF4444" },
];

const LIMITS = [
  { ok: true, text: "Actuar bajo mandato legal expreso de la Ley No. 1-24" },
  { ok: true, text: "Respetar la Constitución y los derechos fundamentales" },
  { ok: true, text: "Rendir cuentas ante los órganos competentes del Estado" },
  { ok: false, text: "Tomar decisiones judiciales o ejecutivas por cuenta propia" },
  { ok: false, text: "Actuar sin supervisión ni control institucional" },
  { ok: false, text: "Exceder el mandato constitucional de su función" },
];

export default function RolDNI() {
  return (
    <>
      <PageHero
        label="Institución"
        title="El Rol de la DNI"
        description="La Dirección Nacional de Inteligencia cumple una función preventiva esencial: proveer al Estado dominicano de información estratégica para anticipar amenazas y proteger la democracia."
        breadcrumbs={[{ label: "Institución" }, { label: "El Rol de la DNI" }]}
      />

      {/* What is the DNI */}
      <section className="py-16 md:py-20 bg-[#071D49]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <SectionLabel>¿Qué es la DNI?</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-5 font-['Plus_Jakarta_Sans']">
                Una institución al servicio del Estado, no del poder
              </h2>
              <p className="text-[#8FA4C8] text-base leading-relaxed mb-5 font-['Plus_Jakarta_Sans']">
                La Dirección Nacional de Inteligencia es el organismo rector del Sistema Nacional de Inteligencia (SNI) de la República Dominicana. Su función es producir y coordinar la inteligencia estratégica que necesita el Estado para tomar decisiones que protejan la seguridad nacional y la estabilidad democrática.
              </p>
              <p className="text-[#8FA4C8] text-base leading-relaxed mb-5 font-['Plus_Jakarta_Sans']">
                A diferencia de los organismos policiales o militares, la DNI no ejecuta acciones operativas de seguridad directa. Su valor reside en la calidad del análisis y en la oportunidad de la información que provee.
              </p>
              <p className="text-[#8FA4C8] text-base leading-relaxed font-['Plus_Jakarta_Sans']">
                La DNI actúa siempre dentro del marco de la Ley No. 1-24 y bajo el principio de apoliticidad: sirve al Estado dominicano y a sus ciudadanos, no a ningún partido, facción o interés particular.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Eye size={22} />, label: "Función Preventiva", desc: "Anticipamos amenazas antes de que ocurran" },
                { icon: <Target size={22} />, label: "Inteligencia Estratégica", desc: "Análisis de alto valor para el Estado" },
                { icon: <Users size={22} />, label: "Coordinación del SNI", desc: "Articulamos los 6 organismos del sistema" },
                { icon: <Scale size={22} />, label: "Apoliticidad", desc: "Servimos al Estado, no a partidos" },
              ].map((item) => (
                <div key={item.label} className="p-5 bg-[#051535] border border-[#C9A55C]/15 rounded-xl">
                  <div className="w-9 h-9 rounded-lg bg-[#C9A55C]/10 flex items-center justify-center text-[#C9A55C] mb-3">
                    {item.icon}
                  </div>
                  <div className="text-white font-semibold text-sm mb-1 font-['Plus_Jakarta_Sans']">{item.label}</div>
                  <div className="text-[#8FA4C8] text-xs font-['Plus_Jakarta_Sans']">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Flow Diagram */}
      <section className="py-16 md:py-24 bg-[#051535]">
        <div className="max-w-[700px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <SectionLabel>Cadena de Valor</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              Cómo la DNI protege a la nación
            </h2>
            <p className="text-[#8FA4C8] mt-3 text-sm font-['Plus_Jakarta_Sans']">
              El proceso de inteligencia convierte información en decisiones que protegen al Estado.
            </p>
          </div>

          <div className="flex flex-col items-center gap-0">
            {FLOW_STEPS.map((step, i) => (
              <div key={step.label} className="w-full flex flex-col items-center">
                <div
                  className="w-full max-w-sm flex items-center gap-4 p-5 rounded-xl border transition-all hover:scale-[1.02] duration-300"
                  style={{ backgroundColor: `${step.color}10`, borderColor: `${step.color}30` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${step.color}20`, color: step.color }}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase font-['JetBrains_Mono'] mb-0.5" style={{ color: step.color }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="text-white font-extrabold text-base font-['Plus_Jakarta_Sans']">{step.label}</div>
                    <div className="text-[#8FA4C8] text-xs mt-0.5 font-['Plus_Jakarta_Sans']">{step.sublabel}</div>
                  </div>
                </div>
                {i < FLOW_STEPS.length - 1 && (
                  <ArrowDown size={20} className="text-[#C9A55C]/40 my-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional limits */}
      <section className="py-16 md:py-20 bg-[#071D49]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <SectionLabel>Límites Institucionales</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-5 font-['Plus_Jakarta_Sans']">
                Una institución que conoce y respeta sus límites
              </h2>
              <p className="text-[#8FA4C8] text-base leading-relaxed mb-5 font-['Plus_Jakarta_Sans']">
                La fortaleza institucional de la DNI no se mide por sus poderes, sino por su capacidad de ejercer sus funciones dentro de los estrictos límites que impone la ley. El respeto a estos límites es lo que diferencia una agencia de inteligencia democrática de cualquier otra forma de vigilancia estatal.
              </p>
              <p className="text-[#8FA4C8] text-base leading-relaxed font-['Plus_Jakarta_Sans']">
                La DNI opera bajo el principio de que la seguridad nacional y la libertad no son incompatibles: ambas son esenciales para una democracia saludable.
              </p>
            </div>
            <ul className="space-y-3">
              {LIMITS.map((item, i) => (
                <li key={i} className={`flex items-start gap-3 p-4 rounded-xl border transition-all ${
                  item.ok
                    ? "bg-green-500/5 border-green-500/20"
                    : "bg-red-500/5 border-red-500/20"
                }`}>
                  {item.ok
                    ? <CheckCircle size={16} className="text-green-400 mt-0.5 shrink-0" />
                    : <XCircle size={16} className="text-red-400 mt-0.5 shrink-0" />
                  }
                  <span className="text-[#C8D8F0] text-sm font-['Plus_Jakarta_Sans']">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-16 md:py-20 bg-[#051535]">
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <div className="text-center mb-8">
            <SectionLabel>Video Explicativo</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              Conozca el rol de la DNI
            </h2>
            <p className="text-[#8FA4C8] mt-2 text-sm font-['Plus_Jakarta_Sans']">[OFFICIAL INSTITUTIONAL VIDEO]</p>
          </div>
          <div className="rounded-xl overflow-hidden border border-[#C9A55C]/20 bg-[#071D49]">
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
