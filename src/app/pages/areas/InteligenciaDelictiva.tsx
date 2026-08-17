import { AlertTriangle, Search, Users, Target, TrendingUp, Shield } from "lucide-react";
import { PageHero, SectionLabel } from "../../components/shared";
import { AreaCTA } from "../../components/AreaCTA";

const FOCUS = [
  { icon: <AlertTriangle size={22} />, title: "Narcotráfico", desc: "Monitoreo de rutas, redes y actores involucrados en el tráfico internacional de drogas que afectan al país." },
  { icon: <Users size={22} />, title: "Crimen Organizado", desc: "Mapeo e inteligencia sobre organizaciones criminales transnacionales con presencia o actividad en territorio dominicano." },
  { icon: <Search size={22} />, title: "Trata de Personas", desc: "Análisis de redes de explotación humana, rutas de tráfico y actores financiadores de estas actividades ilícitas." },
  { icon: <Target size={22} />, title: "Lavado de Activos", desc: "Identificación de esquemas financieros utilizados para blanquear capitales de origen criminal." },
  { icon: <TrendingUp size={22} />, title: "Armas y Explosivos", desc: "Control e inteligencia sobre el tráfico ilegal de armas, municiones y materiales explosivos." },
  { icon: <Shield size={22} />, title: "Terrorismo", desc: "Monitoreo de grupos extremistas, financiamiento del terrorismo y actividades con potencial impacto en la seguridad." },
];

const COORDINATION = [
  "Policía Nacional",
  "Procuraduría General de la República",
  "DNCD — Dirección Nacional de Control de Drogas",
  "UAFEPRINEF — Unidad de Análisis Financiero",
  "Interpol — Oficina Nacional Central República Dominicana",
  "DEA / FBI (bajo acuerdos bilaterales vigentes)",
];

export default function InteligenciaDelictiva() {
  return (
    <>
      <PageHero
        label="Área de Trabajo"
        title="Inteligencia Delictiva"
        description="Producción de inteligencia sobre crimen organizado, narcotráfico, lavado de activos y otras amenazas delictivas transnacionales que afectan la seguridad de la República Dominicana."
        breadcrumbs={[{ label: "Áreas de Trabajo", to: "/areas-de-trabajo/inteligencia-delictiva" }, { label: "Inteligencia Delictiva" }]}
        accentColor="#F59E0B"
      />
      <AreaCTA areaSlug="inteligencia-delictiva" areaLabel="Inteligencia Delictiva" accentColor="#F59E0B" />

      <section className="py-14 md:py-20 bg-[#071D49]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <SectionLabel accentColor="#F59E0B">Marco de Acción</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans'] mb-5">
                Inteligencia al servicio del orden público
              </h2>
              <p className="text-[#C8D8F0] leading-relaxed mb-4 font-['Plus_Jakarta_Sans']">
                La República Dominicana, por su posición geográfica en el Caribe, enfrenta desafíos únicos relacionados con el crimen transnacional. El área de Inteligencia Delictiva articula la producción de conocimiento especializado para apoyar las instituciones encargadas del orden público y la justicia.
              </p>
              <p className="text-[#8FA4C8] leading-relaxed font-['Plus_Jakarta_Sans'] text-sm">
                [CONTENIDO OFICIAL DNI — Completar con descripción del área, base legal que sustenta su misión, estructura y mecanismos de coordinación interinstitucional.]
              </p>
            </div>
            <div className="bg-[#051535] rounded-2xl border border-[#F59E0B]/20 overflow-hidden">
              <div className="px-5 py-3 border-b border-white/8">
                <span className="text-xs font-bold tracking-widest text-[#F59E0B] uppercase font-['JetBrains_Mono']">Coordinación interinstitucional</span>
              </div>
              <div className="p-4 space-y-2">
                {COORDINATION.map((org) => (
                  <div key={org} className="flex items-center gap-3 px-3 py-2.5 bg-[#071D49] rounded-lg border border-white/6">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shrink-0" />
                    <span className="text-[#C8D8F0] text-xs font-['Plus_Jakarta_Sans']">{org}</span>
                  </div>
                ))}
              </div>
              <div className="px-5 py-2 bg-[#F59E0B]/5">
                <p className="text-[#8FA4C8] text-[11px] font-['Plus_Jakarta_Sans']">[COMPLETAR con listado oficial de organismos coordinadores]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#051535]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <SectionLabel accentColor="#F59E0B">Áreas de análisis</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">Focos de atención</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FOCUS.map((f) => (
              <div key={f.title} className="group p-6 bg-[#071D49] border border-[#F59E0B]/15 hover:border-[#F59E0B]/40 rounded-xl transition-all">
                <div className="w-11 h-11 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B] mb-4 group-hover:bg-[#F59E0B]/20 transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-white font-bold text-sm mb-2 font-['Plus_Jakarta_Sans']">{f.title}</h3>
                <p className="text-[#8FA4C8] text-xs leading-relaxed font-['Plus_Jakarta_Sans']">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
