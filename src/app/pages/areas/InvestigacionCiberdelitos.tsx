import { Search, AlertTriangle, FileText, Users, Monitor, Target } from "lucide-react";
import { PageHero, SectionLabel } from "../../components/shared";
import { AreaCTA } from "../../components/AreaCTA";

const FOCUS_AREAS = [
  { icon: <Monitor size={22} />, title: "Cibercrimen Financiero", desc: "Investigación de fraudes bancarios, lavado de dinero digital, criptomonedas ilícitas y estafas electrónicas." },
  { icon: <Users size={22} />, title: "Crímenes contra Personas", desc: "Análisis de casos de grooming, acoso digital, extorsión en línea y explotación sexual a través de medios digitales." },
  { icon: <Target size={22} />, title: "Hackeo y Acceso Ilícito", desc: "Investigación de intrusiones a sistemas gubernamentales y corporativos de relevancia para la seguridad nacional." },
  { icon: <FileText size={22} />, title: "Análisis Forense Digital", desc: "Extracción y análisis de evidencia digital para soporte a investigaciones penales y administrativas." },
  { icon: <AlertTriangle size={22} />, title: "Desinformación Digital", desc: "Identificación de campañas coordinadas de desinformación, bots y operaciones de influencia extranjera." },
  { icon: <Search size={22} />, title: "Dark Web e OSINT", desc: "Monitoreo de mercados clandestinos, foros de hacking y actividades ilícitas en redes no indexadas." },
];

const PROCESS = [
  { num: "01", title: "Detección", desc: "Identificación de indicadores de compromiso (IoC) y actividades sospechosas mediante monitoreo activo." },
  { num: "02", title: "Análisis Forense", desc: "Examinación técnica de dispositivos, sistemas y evidencia digital bajo cadena de custodia." },
  { num: "03", title: "Inteligencia Técnica", desc: "Correlación de hallazgos con bases de datos de amenazas nacionales e internacionales." },
  { num: "04", title: "Coordinación Legal", desc: "Articulación con el Ministerio Público y organismos judiciales para el procesamiento legal de los casos." },
];

export default function InvestigacionCiberdelitos() {
  return (
    <>
      <PageHero
        label="Área de Trabajo"
        title="Investigación de Ciberdelitos"
        description="Análisis, investigación y apoyo a la persecución penal de delitos cometidos mediante medios digitales que afecten la seguridad nacional, instituciones públicas o la ciudadanía dominicana."
        breadcrumbs={[{ label: "Áreas de Trabajo", to: "/areas-de-trabajo/investigacion-ciberdelitos" }, { label: "Investigación de Ciberdelitos" }]}
        accentColor="#EF4444"
      />
      <AreaCTA areaSlug="investigacion-ciberdelitos" areaLabel="Investigación de Ciberdelitos" accentColor="#EF4444" />

      <section className="py-14 md:py-20 bg-[#071D49]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
              <SectionLabel accentColor="#EF4444">Marco de Acción</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans'] mb-5">
                Combate al crimen en el ciberespacio
              </h2>
              <p className="text-[#C8D8F0] leading-relaxed mb-4 font-['Plus_Jakarta_Sans']">
                Bajo el marco de la Ley No. 53-07 sobre Crímenes y Delitos de Alta Tecnología, esta área produce inteligencia de soporte a investigaciones penales e identifica actores, redes y métodos utilizados en la comisión de delitos digitales.
              </p>
              <p className="text-[#8FA4C8] leading-relaxed font-['Plus_Jakarta_Sans'] text-sm">
                [CONTENIDO OFICIAL DNI — Completar con mandato completo del área, articulación con DICAT, Ministerio Público y otros organismos, y estadísticas operativas.]
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 gap-3">
              {[
                { label: "Casos analizados", value: "[DATO]", color: "#EF4444" },
                { label: "Coordinaciones Ministerio Público", value: "[DATO]", color: "#F59E0B" },
                { label: "Organizaciones identificadas", value: "[DATO]", color: "#3B82F6" },
                { label: "Años de operación", value: "[DATO]", color: "#10B981" },
              ].map((stat) => (
                <div key={stat.label} className="p-4 bg-[#051535] rounded-xl border" style={{ borderColor: `${stat.color}25` }}>
                  <div className="text-2xl font-extrabold font-['JetBrains_Mono'] mb-1" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="text-[#8FA4C8] text-xs font-['Plus_Jakarta_Sans'] leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#051535]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <SectionLabel accentColor="#EF4444">Áreas de Investigación</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">Delitos bajo análisis</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FOCUS_AREAS.map((f) => (
              <div key={f.title} className="group p-6 bg-[#071D49] border border-[#EF4444]/15 hover:border-[#EF4444]/40 rounded-xl transition-all">
                <div className="w-11 h-11 rounded-xl bg-[#EF4444]/10 flex items-center justify-center text-[#EF4444] mb-4 group-hover:bg-[#EF4444]/20 transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-white font-bold text-sm mb-2 font-['Plus_Jakarta_Sans']">{f.title}</h3>
                <p className="text-[#8FA4C8] text-xs leading-relaxed font-['Plus_Jakarta_Sans']">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#071D49]">
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <SectionLabel accentColor="#EF4444">Metodología</SectionLabel>
            <h2 className="text-xl font-extrabold text-white font-['Plus_Jakarta_Sans']">Proceso de investigación</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {PROCESS.map((step) => (
              <div key={step.num} className="p-5 bg-[#051535] rounded-xl border border-[#EF4444]/15">
                <div className="text-3xl font-extrabold text-[#EF4444]/30 font-['JetBrains_Mono'] mb-2">{step.num}</div>
                <h3 className="text-white font-bold text-sm mb-2 font-['Plus_Jakarta_Sans']">{step.title}</h3>
                <p className="text-[#8FA4C8] text-xs leading-relaxed font-['Plus_Jakarta_Sans']">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
