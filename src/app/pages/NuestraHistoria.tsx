import { Calendar } from "lucide-react";
import { PageHero, SectionLabel } from "../components/shared";

const MILESTONES = [
  {
    date: "FECHA_PLACEHOLDER_1",
    era: "Fundación",
    title: "EVENTO_HISTÓRICO_TÍTULO_1",
    description: "[OFFICIAL HISTORY CONTENT — Primer hito institucional de la Dirección Nacional de Inteligencia. El equipo de comunicaciones de la DNI debe proveer la descripción oficial de este momento fundacional.]",
    tag: "Origen",
    tagColor: "#C9A55C",
  },
  {
    date: "FECHA_PLACEHOLDER_2",
    era: "Consolidación",
    title: "EVENTO_HISTÓRICO_TÍTULO_2",
    description: "[OFFICIAL HISTORY CONTENT — Descripción oficial del segundo hito. Incluir aquí los detalles sobre la evolución temprana de la institución y sus primeras capacidades operativas.]",
    tag: "Marco Legal",
    tagColor: "#3B82F6",
  },
  {
    date: "FECHA_PLACEHOLDER_3",
    era: "Modernización",
    title: "EVENTO_HISTÓRICO_TÍTULO_3",
    description: "[OFFICIAL HISTORY CONTENT — Período de transformación institucional. Describir los avances en capacidades técnicas, formación del personal y desarrollo organizacional.]",
    tag: "Transformación",
    tagColor: "#10B981",
  },
  {
    date: "FECHA_PLACEHOLDER_4",
    era: "Expansión",
    title: "EVENTO_HISTÓRICO_TÍTULO_4",
    description: "[OFFICIAL HISTORY CONTENT — Expansión de las capacidades de cooperación internacional y fortalecimiento del Sistema Nacional de Inteligencia.]",
    tag: "Cooperación",
    tagColor: "#8B5CF6",
  },
  {
    date: "2024",
    era: "Era Digital",
    title: "Promulgación de la Ley No. 1-24",
    description: "La Ley No. 1-24 establece el marco jurídico moderno de la Dirección Nacional de Inteligencia, consolidando su rol como organismo rector del Sistema Nacional de Inteligencia y definiendo sus atribuciones, límites y mecanismos de supervisión.",
    tag: "Ley No. 1-24",
    tagColor: "#C9A55C",
  },
  {
    date: "2026",
    era: "Presente",
    title: "Etapa institucional actual",
    description: "[OFFICIAL HISTORY CONTENT — Descripción de la etapa contemporánea de la institución, sus capacidades actuales, logros recientes y visión de futuro.]",
    tag: "Actualidad",
    tagColor: "#EF4444",
  },
];

export default function NuestraHistoria() {
  return (
    <>
      <PageHero
        label="Institución"
        title="Nuestra Historia"
        description="La trayectoria de la Dirección Nacional de Inteligencia refleja la evolución del Estado dominicano en su compromiso con la seguridad democrática y la soberanía nacional."
        breadcrumbs={[{ label: "Institución" }, { label: "Nuestra Historia" }]}
      />

      {/* Intro */}
      <section className="py-16 md:py-20 bg-[#071D49]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <SectionLabel>Introducción</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-5 font-['Plus_Jakarta_Sans']">
                Una institución al servicio de la nación dominicana
              </h2>
              <p className="text-[#8FA4C8] text-base leading-relaxed mb-4 font-['Plus_Jakarta_Sans']">
                [OFFICIAL HISTORY CONTENT — Introducción general a la historia institucional de la Dirección Nacional de Inteligencia. El equipo de comunicaciones debe proveer el texto oficial que describa los orígenes, evolución y contexto histórico de la institución.]
              </p>
              <p className="text-[#8FA4C8] text-base leading-relaxed font-['Plus_Jakarta_Sans']">
                [OFFICIAL DESCRIPTION — Contexto histórico adicional sobre el desarrollo del Sistema Nacional de Inteligencia y el rol de la DNI en la historia reciente de la República Dominicana.]
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { value: "32+", label: "Años de servicio", note: "[OFFICIAL DATE PLACEHOLDER]" },
                { value: "1", label: "Ley fundamental", note: "Ley No. 1-24" },
                { value: "SNI", label: "Sistema coordinado", note: "6 organismos integrados" },
              ].map((s) => (
                <div key={s.label} className="p-5 bg-[#051535] border border-[#C9A55C]/15 rounded-xl">
                  <div className="text-3xl font-extrabold text-[#C9A55C] font-['Plus_Jakarta_Sans']">{s.value}</div>
                  <div className="text-white font-semibold text-sm mt-1 font-['Plus_Jakarta_Sans']">{s.label}</div>
                  <div className="text-[#8FA4C8] text-xs mt-0.5 font-['JetBrains_Mono']">{s.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-[#051535]">
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <SectionLabel>Línea del Tiempo</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              Hitos Institucionales
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A55C]/60 via-[#C9A55C]/30 to-transparent" />

            <div className="space-y-10">
              {MILESTONES.map((m, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content side */}
                  <div className={`flex-1 pl-14 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest font-['JetBrains_Mono'] mb-3`}
                      style={{ backgroundColor: `${m.tagColor}15`, color: m.tagColor, border: `1px solid ${m.tagColor}30` }}
                    >
                      {m.tag}
                    </div>
                    <div className="text-[#8FA4C8] text-xs font-['JetBrains_Mono'] mb-2 flex items-center gap-1.5 md:justify-end">
                      <Calendar size={11} className="text-[#C9A55C]" />
                      {m.date} · {m.era}
                    </div>
                    <div className={`bg-[#071D49] border border-[#C9A55C]/15 rounded-xl p-5 hover:border-[#C9A55C]/30 transition-all ${i % 2 !== 0 && "md:text-left"}`}>
                      <h3 className="text-white font-bold text-base mb-2 font-['Plus_Jakarta_Sans']">{m.title}</h3>
                      <p className="text-[#8FA4C8] text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{m.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-6 md:left-1/2 top-8 -translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-4 h-4 rounded-full border-2 bg-[#051535]" style={{ borderColor: m.tagColor }}>
                      <div className="w-2 h-2 rounded-full m-[2px]" style={{ backgroundColor: m.tagColor }} />
                    </div>
                  </div>

                  {/* Empty side for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video section */}
      <section className="py-16 md:py-20 bg-[#071D49]">
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <div className="text-center mb-8">
            <SectionLabel>Archivo Audiovisual</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              Historia en imágenes
            </h2>
            <p className="text-[#8FA4C8] mt-2 text-sm font-['Plus_Jakarta_Sans']">[OFFICIAL HISTORICAL VIDEO]</p>
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
