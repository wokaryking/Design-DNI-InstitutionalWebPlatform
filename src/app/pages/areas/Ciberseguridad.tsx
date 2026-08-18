import { Shield, Monitor, AlertTriangle, Lock, Zap, Globe, CheckCircle } from "lucide-react";
import { PageHero, SectionLabel } from "../../components/shared";
import { AreaCTA } from "../../components/AreaCTA";

const PILLARS = [
  { icon: <Shield size={22} />, title: "Defensa Activa", desc: "Monitoreo continuo de infraestructuras críticas del Estado dominicano ante amenazas cibernéticas emergentes." },
  { icon: <Monitor size={22} />, title: "CERT Nacional", desc: "Coordinación con el Centro Nacional de Respuesta a Incidentes para atención oportuna de vulnerabilidades." },
  { icon: <AlertTriangle size={22} />, title: "Gestión de Riesgos", desc: "Identificación, evaluación y mitigación de riesgos cibernéticos en sistemas gubernamentales y privados críticos." },
  { icon: <Lock size={22} />, title: "Auditoría Digital", desc: "Evaluación periódica de controles de seguridad en entidades del sector público y proveedores estratégicos." },
  { icon: <Zap size={22} />, title: "Respuesta a Incidentes", desc: "Capacidades de respuesta rápida y recuperación ante ataques a infraestructuras de interés nacional." },
  { icon: <Globe size={22} />, title: "Cooperación Regional", desc: "Participación en redes de ciberdefensa del Caribe y América Latina, compartiendo inteligencia sobre amenazas." },
];

const THREATS = [
  { label: "APT (Amenazas Persistentes Avanzadas)", level: 85, color: "#EF4444" },
  { label: "Ransomware gubernamental", level: 72, color: "#F59E0B" },
  { label: "Ataques a infraestructura crítica", level: 68, color: "#3B82F6" },
  { label: "Phishing y spear-phishing", level: 91, color: "#EF4444" },
  { label: "Desinformación y operaciones IO", level: 60, color: "#8B5CF6" },
];

export default function Ciberseguridad() {
  return (
    <>
      <PageHero
        label="Área de Trabajo"
        title="Ciberseguridad Nacional"
        description="Protección de las infraestructuras digitales críticas del Estado dominicano y respuesta coordinada ante amenazas cibernéticas de origen nacional e internacional."
        breadcrumbs={[{ label: "Áreas de Trabajo", to: "/areas-de-trabajo/ciberseguridad" }, { label: "Ciberseguridad" }]}
        accentColor="#3B82F6"
      />
      <AreaCTA areaSlug="ciberseguridad" areaLabel="Ciberseguridad" accentColor="#3B82F6" />

      {/* Mission block */}
      <section className="py-14 md:py-20 bg-[#071D49]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionLabel accentColor="#3B82F6">Misión del Área</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans'] mb-5">
                Custodios del espacio digital de la nación
              </h2>
              <p className="text-[#C8D8F0] leading-relaxed mb-4 font-['Plus_Jakarta_Sans']">
                El área de Ciberseguridad de la DNI tiene la responsabilidad de identificar, analizar y neutralizar amenazas que puedan comprometer la soberanía digital de la República Dominicana.
              </p>
              <p className="text-[#8FA4C8] leading-relaxed font-['Plus_Jakarta_Sans'] text-sm">
                [CONTENIDO OFICIAL DNI — Completar con la descripción oficial del área, mandato legal, estructura orgánica y principales capacidades operativas.]
              </p>
            </div>
            <div className="p-6 bg-[#051535] rounded-2xl border border-[#3B82F6]/20">
              <div className="text-xs font-bold tracking-widest text-[#3B82F6] uppercase font-['JetBrains_Mono'] mb-4">Amenazas de mayor incidencia</div>
              <div className="space-y-4">
                {THREATS.map((t) => (
                  <div key={t.label}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-[#C8D8F0] text-xs font-['Plus_Jakarta_Sans']">{t.label}</span>
                      <span className="text-xs font-bold font-['JetBrains_Mono']" style={{ color: t.color }}>{t.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all" style={{ width: `${t.level}%`, backgroundColor: t.color }} />
                    </div>
                  </div> 
                ))}
              </div>
              <p className="text-[#8FA4C8] text-[11px] mt-4 font-['Plus_Jakarta_Sans']">[DATOS OFICIALES DNI — Sustituir con estadísticas reales]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-14 md:py-20 bg-[#051535]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <SectionLabel accentColor="#3B82F6">Capacidades</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">Pilares operativos</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PILLARS.map((p) => (
              <div key={p.title} className="group p-6 bg-[#071D49] border border-[#3B82F6]/15 hover:border-[#3B82F6]/40 rounded-xl transition-all">
                <div className="w-11 h-11 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6] mb-4 group-hover:bg-[#3B82F6]/20 transition-colors">
                  {p.icon}
                </div>
                <h3 className="text-white font-bold text-sm mb-2 font-['Plus_Jakarta_Sans']">{p.title}</h3>
                <p className="text-[#8FA4C8] text-xs leading-relaxed font-['Plus_Jakarta_Sans']">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video placeholder */}
      <section className="py-14 bg-[#071d49]">
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <div className="text-center mb-8">
            <SectionLabel accentColor="#3B82F6">Conoce más</SectionLabel>
            <h2 className="text-xl font-extrabold text-white font-['Plus_Jakarta_Sans']">Ciberseguridad en la DNI</h2>
          </div>
          <div className="aspect-video rounded-2xl border border-[#3B82F6]/20 bg-[#051535] flex items-center justify-center">
            <div className="text-center">
              <Monitor size={40} className="text-[#3B82F6]/40 mx-auto mb-3" />
              <span className="text-[#8FA4C8] text-sm font-['JetBrains_Mono']">VIDEO_URL_HERE</span>
              <p className="text-[#8FA4C8] text-xs mt-1 font-['Plus_Jakarta_Sans']">Reemplazar con elemento {"<video>"} o iframe de YouTube</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
