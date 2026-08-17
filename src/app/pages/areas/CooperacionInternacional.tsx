import { Globe, Users, FileText, Shield, Handshake, Target } from "lucide-react";
import { PageHero, SectionLabel } from "../../components/shared";
import { AreaCTA } from "../../components/AreaCTA";

const ACTIVITIES = [
  { icon: <Handshake size={22} />, title: "Acuerdos Bilaterales", desc: "Negociación y gestión de convenios de intercambio de inteligencia con agencias homólogas de países aliados." },
  { icon: <Users size={22} />, title: "Redes Multilaterales", desc: "Participación activa en organismos regionales de inteligencia del Caribe, CARICOM y América Latina." },
  { icon: <Globe size={22} />, title: "Misiones Internacionales", desc: "Representación institucional en foros, cumbres y conferencias de seguridad e inteligencia internacionales." },
  { icon: <FileText size={22} />, title: "Intercambio de Información", desc: "Compartición de productos de inteligencia con socios estratégicos dentro de marcos legales bilaterales." },
  { icon: <Shield size={22} />, title: "Formación Internacional", desc: "Participación en programas de entrenamiento especializado y formación impartidos por agencias aliadas." },
  { icon: <Target size={22} />, title: "Operaciones Conjuntas", desc: "Coordinación con organismos internacionales en operaciones de seguridad de interés compartido." },
];

const PARTNERS = [
  { region: "América del Norte", orgs: "[ORGANISMO ALIADO]", active: true },
  { region: "Europa", orgs: "[ORGANISMO ALIADO]", active: true },
  { region: "Caribe / CARICOM", orgs: "[ORGANISMO ALIADO]", active: true },
  { region: "América Latina", orgs: "[ORGANISMO ALIADO]", active: true },
  { region: "Organismos Multilaterales", orgs: "[ORGANISMO ALIADO]", active: true },
];

export default function CooperacionInternacional() {
  return (
    <>
      <PageHero
        label="Área de Trabajo"
        title="Cooperación Internacional"
        description="Gestión de las relaciones de la DNI con agencias de inteligencia y organismos de seguridad internacionales, mediante acuerdos de cooperación que fortalecen la capacidad nacional."
        breadcrumbs={[{ label: "Áreas de Trabajo", to: "/areas-de-trabajo/cooperacion-internacional" }, { label: "Cooperación Internacional" }]}
        accentColor="#10B981"
      />
      <AreaCTA areaSlug="cooperacion-internacional" areaLabel="Cooperación Internacional" accentColor="#10B981" />

      <section className="py-14 md:py-20 bg-[#071D49]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <SectionLabel accentColor="#10B981">Mandato</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans'] mb-5">
                Alianzas estratégicas para la seguridad regional
              </h2>
              <p className="text-[#C8D8F0] leading-relaxed mb-4 font-['Plus_Jakarta_Sans']">
                La República Dominicana comparte desafíos de seguridad con sus vecinos y aliados. La cooperación internacional permite potenciar las capacidades nacionales, anticipar amenazas transnacionales y fortalecer la posición del país en el sistema global de seguridad.
              </p>
              <p className="text-[#8FA4C8] leading-relaxed font-['Plus_Jakarta_Sans'] text-sm">
                [CONTENIDO OFICIAL DNI — Completar con descripción de la unidad, marco normativo internacional aplicable, organismos con los que coopera y número de acuerdos vigentes.]
              </p>
            </div>
            <div className="bg-[#051535] rounded-2xl border border-[#10B981]/20 overflow-hidden">
              <div className="px-5 py-3 border-b border-white/8">
                <span className="text-xs font-bold tracking-widest text-[#10B981] uppercase font-['JetBrains_Mono']">Socios estratégicos</span>
              </div>
              <div className="divide-y divide-white/6">
                {PARTNERS.map((p) => (
                  <div key={p.region} className="flex items-center justify-between px-5 py-3">
                    <div>
                      <div className="text-white font-semibold text-sm font-['Plus_Jakarta_Sans']">{p.region}</div>
                      <div className="text-[#8FA4C8] text-xs mt-0.5 font-['JetBrains_Mono']">{p.orgs}</div>
                    </div>
                    {p.active && (
                      <span className="text-xs bg-[#10B981]/15 text-[#10B981] px-2 py-0.5 rounded font-bold font-['JetBrains_Mono']">Activo</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="px-5 py-2 bg-[#10B981]/5">
                <p className="text-[#8FA4C8] text-[11px] font-['Plus_Jakarta_Sans']">[COMPLETAR con socios reales de la DNI]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#051535]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <SectionLabel accentColor="#10B981">Actividades</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">Dimensiones de la cooperación</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ACTIVITIES.map((a) => (
              <div key={a.title} className="group p-6 bg-[#071D49] border border-[#10B981]/15 hover:border-[#10B981]/40 rounded-xl transition-all">
                <div className="w-11 h-11 rounded-xl bg-[#10B981]/10 flex items-center justify-center text-[#10B981] mb-4 group-hover:bg-[#10B981]/20 transition-colors">
                  {a.icon}
                </div>
                <h3 className="text-white font-bold text-sm mb-2 font-['Plus_Jakarta_Sans']">{a.title}</h3>
                <p className="text-[#8FA4C8] text-xs leading-relaxed font-['Plus_Jakarta_Sans']">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
