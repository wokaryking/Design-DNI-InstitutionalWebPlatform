import { useState } from "react";
import { FileText, Download, ExternalLink, BookOpen, Scale, Shield, ChevronRight } from "lucide-react";
import { PageHero, SectionLabel } from "../components/shared";

type DocType = "Constitución" | "Ley" | "Reglamento" | "Convenio" | "Decreto";

interface LegalDocument {
  title: string;
  type: DocType;
  description: string;
  date: string;
  url: string;
  official: boolean;
}

const DOCUMENTS: LegalDocument[] = [
  {
    title: "Constitución de la República Dominicana",
    type: "Constitución",
    description: "Texto constitucional que establece el marco de derechos fundamentales, la organización del Estado y los límites del ejercicio del poder público.",
    date: "Proclamada el 26 de enero de 2010",
    url: "DOCUMENT_URL_HERE",
    official: true,
  },
  {
    title: "Ley No. 1-24 — Crea la Dirección Nacional de Inteligencia",
    type: "Ley",
    description: "Ley que establece la creación, organización, atribuciones y límites de la Dirección Nacional de Inteligencia y del Sistema Nacional de Inteligencia de la República Dominicana.",
    date: "2024",
    url: "DOCUMENT_URL_HERE",
    official: true,
  },
  {
    title: "Ley No. 53-07 — Crímenes y Delitos de Alta Tecnología",
    type: "Ley",
    description: "Legislación que tipifica los crímenes y delitos cometidos a través del uso de tecnologías de la información y comunicación, relevante para las operaciones de ciberseguridad.",
    date: "23 de abril de 2007",
    url: "DOCUMENT_URL_HERE",
    official: true,
  },
  {
    title: "[OFFICIAL LEGAL DOCUMENT 4]",
    type: "Reglamento",
    description: "[OFFICIAL DESCRIPTION — Descripción del reglamento o normativa correspondiente. El equipo jurídico de la DNI debe proveer el texto oficial.]",
    date: "FECHA_PLACEHOLDER",
    url: "DOCUMENT_URL_HERE",
    official: false,
  },
  {
    title: "[OFFICIAL LEGAL DOCUMENT 5]",
    type: "Decreto",
    description: "[OFFICIAL DESCRIPTION — Descripción del decreto o resolución institucional relevante para el marco legal de la DNI.]",
    date: "FECHA_PLACEHOLDER",
    url: "DOCUMENT_URL_HERE",
    official: false,
  },
  {
    title: "[OFFICIAL LEGAL DOCUMENT 6]",
    type: "Convenio",
    description: "[OFFICIAL DESCRIPTION — Convenio o acuerdo internacional suscrito por la República Dominicana relevante para las actividades de inteligencia.]",
    date: "FECHA_PLACEHOLDER",
    url: "DOCUMENT_URL_HERE",
    official: false,
  },
];

const TYPE_COLORS: Record<DocType, string> = {
  "Constitución": "#C9A55C",
  "Ley": "#3B82F6",
  "Reglamento": "#10B981",
  "Convenio": "#8B5CF6",
  "Decreto": "#EF4444",
};

const SAFEGUARDS = [
  { icon: <Scale size={20} />, title: "Control Judicial", desc: "Las actuaciones de la DNI están sujetas al control de los tribunales competentes de la República." },
  { icon: <Shield size={20} />, title: "Supervisión Legislativa", desc: "El Congreso Nacional ejerce supervisión sobre las actividades de inteligencia en los términos establecidos por ley." },
  { icon: <BookOpen size={20} />, title: "Marco Constitucional", desc: "Todo acto de inteligencia debe respetar los derechos fundamentales consagrados en la Constitución." },
  { icon: <FileText size={20} />, title: "Rendición de Cuentas", desc: "La DNI reporta periódicamente a los órganos del Estado autorizados conforme a la Ley No. 1-24." },
];

export default function MarcoLegal() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const filtered = activeFilter === "Todos" ? DOCUMENTS : DOCUMENTS.filter(d => d.type === activeFilter);

  return (
    <>
      <PageHero
        label="Institución"
        title="Marco Legal"
        description="La Dirección Nacional de Inteligencia actúa estrictamente dentro del marco constitucional y legal de la República Dominicana. Aquí encontrará los fundamentos jurídicos que rigen nuestra institución."
        breadcrumbs={[{ label: "Institución" }, { label: "Marco Legal" }]}
      />

      {/* Intro */}
      <section className="py-16 md:py-20 bg-[#071D49]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { icon: <Scale size={22} />, title: "Legalidad", desc: "Toda actuación de la DNI tiene sustento en la ley vigente y en la Constitución de la República." },
              { icon: <Shield size={22} />, title: "Derechos Fundamentales", desc: "El ejercicio de la inteligencia nunca puede vulnerar los derechos constitucionales de los ciudadanos." },
              { icon: <BookOpen size={22} />, title: "Transparencia Legal", desc: "El marco normativo de la DNI es público y está a disposición de todos los ciudadanos." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 bg-[#051535] border border-[#C9A55C]/15 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-[#C9A55C]/10 flex items-center justify-center text-[#C9A55C] shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm mb-1 font-['Plus_Jakarta_Sans']">{item.title}</h3>
                  <p className="text-[#8FA4C8] text-xs leading-relaxed font-['Plus_Jakarta_Sans']">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Library */}
      <section className="py-16 md:py-24 bg-[#051535]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="mb-10">
            <SectionLabel>Biblioteca Jurídica</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              Documentos Legales
            </h2>
            <p className="text-[#8FA4C8] mt-2 text-sm font-['Plus_Jakarta_Sans'] max-w-xl">
              Consulte la normativa que rige las actividades de inteligencia en la República Dominicana.
            </p>
          </div>

          {/* Filter bar */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["Todos", "Constitución", "Ley", "Reglamento", "Convenio", "Decreto"].map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-full text-[12px] font-semibold font-['Plus_Jakarta_Sans'] transition-all border ${
                  activeFilter === f
                    ? "bg-[#C9A55C] text-[#071D49] border-[#C9A55C]"
                    : "text-[#8FA4C8] border-white/10 hover:border-[#C9A55C]/40 hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filtered.map((doc, i) => (
              <div
                key={i}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 p-5 bg-[#071D49] border border-[#C9A55C]/15 hover:border-[#C9A55C]/35 rounded-xl transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${TYPE_COLORS[doc.type]}15`, color: TYPE_COLORS[doc.type] }}>
                  <FileText size={20} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded font-['JetBrains_Mono']"
                      style={{ backgroundColor: `${TYPE_COLORS[doc.type]}15`, color: TYPE_COLORS[doc.type] }}
                    >
                      {doc.type}
                    </span>
                    {!doc.official && (
                      <span className="text-[10px] text-[#8FA4C8] font-['JetBrains_Mono'] italic">[pendiente de contenido oficial]</span>
                    )}
                  </div>
                  <h3 className="text-white font-semibold text-sm font-['Plus_Jakarta_Sans'] group-hover:text-[#C9A55C] transition-colors">{doc.title}</h3>
                  <p className="text-[#8FA4C8] text-xs mt-1 leading-relaxed font-['Plus_Jakarta_Sans']">{doc.description}</p>
                  <p className="text-[#C9A55C]/60 text-[10px] mt-1 font-['JetBrains_Mono']">{doc.date}</p>
                </div>

                <div className="flex gap-2 shrink-0">
                  <a
                    href={doc.url}
                    className="flex items-center gap-1.5 px-4 py-2 text-[12px] font-semibold text-[#C9A55C] border border-[#C9A55C]/30 hover:bg-[#C9A55C]/10 rounded-lg transition-all font-['Plus_Jakarta_Sans']"
                  >
                    <ExternalLink size={13} /> Consultar
                  </a>
                  <a
                    href={doc.url}
                    download
                    className="flex items-center gap-1.5 px-4 py-2 text-[12px] font-semibold text-[#071D49] bg-[#C9A55C] hover:bg-[#D4B567] rounded-lg transition-all font-['Plus_Jakarta_Sans']"
                  >
                    <Download size={13} /> Descargar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safeguards */}
      <section className="py-16 md:py-20 bg-[#071D49]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <SectionLabel>Garantías Ciudadanas</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              Mecanismos de control y supervisión
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SAFEGUARDS.map((s) => (
              <div key={s.title} className="p-6 bg-[#051535] border border-[#C9A55C]/15 hover:border-[#C9A55C]/40 rounded-xl transition-all group">
                <div className="w-10 h-10 rounded-lg bg-[#C9A55C]/10 flex items-center justify-center text-[#C9A55C] mb-4 group-hover:bg-[#C9A55C]/20 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-white font-bold mb-2 text-sm font-['Plus_Jakarta_Sans']">{s.title}</h3>
                <p className="text-[#8FA4C8] text-xs leading-relaxed font-['Plus_Jakarta_Sans']">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
