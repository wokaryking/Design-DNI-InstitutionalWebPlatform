import { Shield, Eye, Search, AlertTriangle, Lock, Users } from "lucide-react";
import { PageHero, SectionLabel } from "../../components/shared";
import { AreaCTA } from "../../components/AreaCTA";

const FUNCTIONS = [
  { icon: <Eye size={22} />, title: "Detección de Espionaje", desc: "Identificación de actividades de recolección de información por agentes de inteligencia extranjeros en territorio nacional." },
  { icon: <Shield size={22} />, title: "Protección de Personal", desc: "Evaluación de riesgos y medidas de protección para funcionarios del Estado en posiciones de alta sensibilidad." },
  { icon: <Search size={22} />, title: "Contrainteligencia Técnica", desc: "Detección de dispositivos de escucha, interceptación de comunicaciones y vulneraciones técnicas de seguridad." },
  { icon: <Lock size={22} />, title: "Seguridad de Operaciones", desc: "Garantía de la integridad de las operaciones de inteligencia mediante medidas preventivas contra infiltración." },
  { icon: <AlertTriangle size={22} />, title: "Detección de Infiltración", desc: "Identificación de elementos que puedan haber penetrado estructuras del Estado para favorecer intereses externos." },
  { icon: <Users size={22} />, title: "Evaluación de Personal", desc: "Análisis de seguridad de personal sensible con acceso a información clasificada o instalaciones críticas." },
];

const PRINCIPLES = [
  { label: "Necesidad", desc: "Las medidas de contrainteligencia deben ser necesarias y proporcionales a la amenaza identificada." },
  { label: "Legalidad", desc: "Toda actuación se enmarca estrictamente en las leyes vigentes de la República Dominicana." },
  { label: "Reserva", desc: "Las operaciones de contrainteligencia son de carácter reservado para garantizar su efectividad." },
  { label: "Coordinación", desc: "Se articulan con otros organismos del SNI para maximizar la cobertura de protección del Estado." },
];

export default function Contrainteligencia() {
  return (
    <>
      <PageHero
        label="Área de Trabajo"
        title="Contrainteligencia"
        description="Protección de las instituciones, el personal y los secretos del Estado dominicano frente a actividades de espionaje, infiltración y operaciones adversarias de actores nacionales o extranjeros."
        breadcrumbs={[{ label: "Áreas de Trabajo", to: "/areas-de-trabajo/contrainteligencia" }, { label: "Contrainteligencia" }]}
        accentColor="#EC4899"
      />
      <AreaCTA areaSlug="contrainteligencia" areaLabel="Contrainteligencia" accentColor="#EC4899" />

      <section className="py-14 md:py-20 bg-[#071D49]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <SectionLabel accentColor="#EC4899">Misión Defensiva</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans'] mb-5">
                El escudo del Estado dominicano
              </h2>
              <p className="text-[#C8D8F0] leading-relaxed mb-4 font-['Plus_Jakarta_Sans']">
                La contrainteligencia es la disciplina encargada de identificar, neutralizar y frustrar las actividades de entidades extranjeras o nacionales que busquen comprometer la seguridad de las instituciones del Estado, sus operaciones o su personal.
              </p>
              <p className="text-[#8FA4C8] leading-relaxed font-['Plus_Jakarta_Sans'] text-sm">
                [CONTENIDO OFICIAL DNI — Completar con descripción del área, marco legal habilitante, tipos de operaciones que realiza y mecanismos de supervisión institucional.]
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-xs font-bold tracking-widest text-[#EC4899] uppercase font-['JetBrains_Mono'] mb-4">Principios rectores</div>
              {PRINCIPLES.map((p) => (
                <div key={p.label} className="flex gap-4 p-4 bg-[#051535] rounded-xl border border-[#EC4899]/15">
                  <div className="w-2 h-2 rounded-full bg-[#EC4899] shrink-0 mt-1.5" />
                  <div>
                    <div className="text-white font-bold text-sm mb-1 font-['Plus_Jakarta_Sans']">{p.label}</div>
                    <div className="text-[#8FA4C8] text-xs leading-relaxed font-['Plus_Jakarta_Sans']">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#051535]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <SectionLabel accentColor="#EC4899">Funciones</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">Capacidades operativas</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FUNCTIONS.map((f) => (
              <div key={f.title} className="group p-6 bg-[#071D49] border border-[#EC4899]/15 hover:border-[#EC4899]/40 rounded-xl transition-all">
                <div className="w-11 h-11 rounded-xl bg-[#EC4899]/10 flex items-center justify-center text-[#EC4899] mb-4 group-hover:bg-[#EC4899]/20 transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-white font-bold text-sm mb-2 font-['Plus_Jakarta_Sans']">{f.title}</h3>
                <p className="text-[#8FA4C8] text-xs leading-relaxed font-['Plus_Jakarta_Sans']">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal framework */}
      <section className="py-14 bg-[#071D49]">
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <div className="p-6 md:p-8 bg-[#051535] border border-[#EC4899]/20 rounded-2xl">
            <div className="text-xs font-bold tracking-widest text-[#EC4899] uppercase font-['JetBrains_Mono'] mb-4">Marco legal</div>
            <p className="text-[#C8D8F0] leading-relaxed font-['Plus_Jakarta_Sans'] mb-4">
              Toda actividad de contrainteligencia se realiza bajo estricto apego a la Constitución de la República Dominicana, la Ley No. 1-24 del Sistema Nacional de Inteligencia y los tratados internacionales ratificados por el país.
            </p>
            <p className="text-[#8FA4C8] text-sm font-['Plus_Jakarta_Sans']">
              [CONTENIDO OFICIAL DNI — Agregar artículos específicos de la Ley 1-24 que habilitan las funciones de contrainteligencia y mecanismos de supervisión del Congreso o poder judicial.]
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
