import { Lock, Key, Shield, Cpu, FileText, Globe } from "lucide-react";
import { PageHero, SectionLabel } from "../../components/shared";
import { AreaCTA } from "../../components/AreaCTA";

const CAPABILITIES = [
  { icon: <Key size={22} />, title: "Cifrado de Estado", desc: "Desarrollo y gestión de sistemas criptográficos para la protección de comunicaciones gubernamentales clasificadas." },
  { icon: <Shield size={22} />, title: "PKI Nacional", desc: "Infraestructura de clave pública para la emisión y gestión de certificados digitales del gobierno dominicano." },
  { icon: <Cpu size={22} />, title: "Hardware Criptográfico", desc: "Diseño, evaluación y homologación de módulos de seguridad hardware (HSM) para uso estatal." },
  { icon: <FileText size={22} />, title: "Normativa", desc: "Elaboración de estándares y políticas de criptografía para entidades del sector público dominicano." },
  { icon: <Globe size={22} />, title: "Interoperabilidad", desc: "Protocolos de comunicación segura con organismos internacionales, embajadas y misiones diplomáticas." },
  { icon: <Lock size={22} />, title: "Auditoría Criptográfica", desc: "Revisión y validación de implementaciones criptográficas en sistemas de alto impacto para la seguridad nacional." },
];

const ALGORITHMS = [
  { name: "AES-256", category: "Cifrado Simétrico", status: "Activo" },
  { name: "RSA-4096", category: "Cifrado Asimétrico", status: "Activo" },
  { name: "ECC P-384", category: "Curva Elíptica", status: "Activo" },
  { name: "SHA-3", category: "Función de Hash", status: "Activo" },
  { name: "Post-Quantum (CRYSTALS)", category: "Resistencia Cuántica", status: "Evaluación" },
];

export default function CriptografiaNacional() {
  return (
    <>
      <PageHero
        label="Área de Trabajo"
        title="Criptografía Nacional"
        description="Desarrollo y gestión de las capacidades criptográficas del Estado dominicano para proteger las comunicaciones gubernamentales clasificadas y la infraestructura de confianza digital."
        breadcrumbs={[{ label: "Áreas de Trabajo", to: "/areas-de-trabajo/criptografia-nacional" }, { label: "Criptografía Nacional" }]}
        accentColor="#8B5CF6"
      />
      <AreaCTA areaSlug="criptografia-nacional" areaLabel="Criptografía Nacional" accentColor="#8B5CF6" />

      <section className="py-14 md:py-20 bg-[#071D49]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <SectionLabel accentColor="#8B5CF6">Instituto Criptográfico Nacional</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans'] mb-5">
                Blindando las comunicaciones del Estado
              </h2>
              <p className="text-[#C8D8F0] leading-relaxed mb-4 font-['Plus_Jakarta_Sans']">
                El Instituto Criptográfico Nacional (ICN) es la entidad responsable de garantizar la confidencialidad, integridad y autenticidad de las comunicaciones estratégicas del gobierno dominicano.
              </p>
              <p className="text-[#8FA4C8] leading-relaxed font-['Plus_Jakarta_Sans'] text-sm">
                [CONTENIDO OFICIAL DNI — Completar con descripción del ICN, mandato legal, organismos bajo su rectoría y estructura de gobernanza criptográfica.]
              </p>
            </div>
            <div className="bg-[#051535] rounded-2xl border border-[#8B5CF6]/20 overflow-hidden">
              <div className="px-5 py-3 border-b border-white/8">
                <span className="text-xs font-bold tracking-widest text-[#8B5CF6] uppercase font-['JetBrains_Mono']">Estándares criptográficos</span>
              </div>
              <div className="divide-y divide-white/6">
                {ALGORITHMS.map((alg) => (
                  <div key={alg.name} className="flex items-center justify-between px-5 py-3">
                    <div>
                      <div className="text-white font-bold text-sm font-['JetBrains_Mono']">{alg.name}</div>
                      <div className="text-[#8FA4C8] text-xs font-['Plus_Jakarta_Sans']">{alg.category}</div>
                    </div>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded font-['JetBrains_Mono'] ${alg.status === "Activo" ? "bg-green-500/15 text-green-400" : "bg-yellow-500/15 text-yellow-400"}`}>
                      {alg.status}
                    </span>
                  </div>
                ))}
              </div>
              <div className="px-5 py-2 bg-[#8B5CF6]/5">
                <p className="text-[#8FA4C8] text-[11px] font-['Plus_Jakarta_Sans']">[DATOS REFERENCIALES — Sustituir con listado oficial]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#051535]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <SectionLabel accentColor="#8B5CF6">Capacidades</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">Servicios criptográficos</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map((c) => (
              <div key={c.title} className="group p-6 bg-[#071D49] border border-[#8B5CF6]/15 hover:border-[#8B5CF6]/40 rounded-xl transition-all">
                <div className="w-11 h-11 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center text-[#8B5CF6] mb-4 group-hover:bg-[#8B5CF6]/20 transition-colors">
                  {c.icon}
                </div>
                <h3 className="text-white font-bold text-sm mb-2 font-['Plus_Jakarta_Sans']">{c.title}</h3>
                <p className="text-[#8FA4C8] text-xs leading-relaxed font-['Plus_Jakarta_Sans']">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
