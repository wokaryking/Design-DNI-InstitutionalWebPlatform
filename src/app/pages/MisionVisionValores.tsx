import { Target, Eye, Heart, Zap, Scale, Users, Star, Shield, CheckCircle } from "lucide-react";
import { PageHero, SectionLabel } from "../components/shared";

const VALORES = [
  { icon: <Zap size={20} />, title: "Eficacia", desc: "Actuamos con precisión y efectividad en el cumplimiento de nuestra misión institucional." },
  { icon: <Scale size={20} />, title: "Necesidad", desc: "Nuestras acciones son estrictamente necesarias para los fines de seguridad nacional establecidos en la ley." },
  { icon: <Target size={20} />, title: "Idoneidad", desc: "Empleamos únicamente los medios adecuados y proporcionales a cada situación." },
  { icon: <Star size={20} />, title: "Especialización", desc: "Desarrollamos capacidades técnicas e intelectuales de excelencia en el campo de la inteligencia." },
  { icon: <Shield size={20} />, title: "Proporcionalidad", desc: "Calibramos nuestras actuaciones al nivel de amenaza, evitando excesos o arbitrariedades." },
  { icon: <Users size={20} />, title: "Coordinación", desc: "Trabajamos articulados con los organismos del SNI bajo un comando institucional unificado." },
];

const PRINCIPIOS = [
  "Respeto irrestricto a la Constitución de la República Dominicana",
  "Protección de los derechos fundamentales de los ciudadanos",
  "Sometimiento pleno al Estado democrático de Derecho",
  "Rendición de cuentas ante los poderes del Estado",
  "Transparencia dentro de los límites que impone la confidencialidad",
  "Apoliticidad e imparcialidad institucional",
];

export default function MisionVisionValores() {
  return (
    <>
      <PageHero
        label="Institución"
        title="Misión · Visión · Valores"
        description="Los principios que definen el ser y el actuar de la Dirección Nacional de Inteligencia en el servicio a la nación dominicana."
        breadcrumbs={[{ label: "Institución" }, { label: "Misión, Visión y Valores" }]}
      />

      {/* Misión */}
      <section className="py-16 md:py-24 bg-[#ffffff]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionLabel>Misión</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 font-['Plus_Jakarta_Sans'] text-[#110d0d]">
                Nuestra razón de ser
              </h2>
              <blockquote className="border-l-4 border-[#C9A55C] pl-6 py-2 mb-6">
                <p className="text-white text-lg md:text-xl leading-relaxed font-['Plus_Jakarta_Sans'] font-light italic text-[#060606]">
                  "Realizar actividades de inteligencia y contrainteligencia para la seguridad nacional e interior, a los fines de prevenir y contrarrestar cualquier riesgo, amenaza o agresión a la Constitución de la República, a las instituciones democráticas y a la seguridad y defensa de la nación."
                </p>
              </blockquote>
              <p className="text-sm font-['JetBrains_Mono'] tracking-wide text-[#141415]">
                — Ley No. 1-24, Artículo correspondiente
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 flex items-center justify-center bg-[#14141500]">
                <div className="absolute inset-0 rounded-full border border-[#051535]/15 animate-pulse bg-[#285fd600]" />
                <div className="absolute inset-6 rounded-full border border-[#051535]/20 bg-[#00000000]" />
                <div className="absolute inset-12 rounded-full bg-[#C9A55C]/10 border border-[#051535]/30 flex items-center justify-center text-[#0c0c0c]">
                  <Target size={44} className="text-[#C9A55C]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A55C]/30 to-transparent" />

      {/* Visión */}
      <section className="py-16 md:py-24 bg-[#051535]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="lg:order-2">
              <SectionLabel>Visión</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 font-['Plus_Jakarta_Sans']">
                Hacia dónde nos dirigimos
              </h2>
              <blockquote className="border-l-4 border-[#C9A55C] pl-6 py-2 mb-6">
                <p className="text-white text-lg md:text-xl leading-relaxed font-['Plus_Jakarta_Sans'] font-light italic">
                  "Ser una agencia de inteligencia organizada y moderna, con buena planificación y estructura organizacional, con misiones claramente definidas y cuyos resultados puedan ser evaluados."
                </p>
              </blockquote>
              <p className="text-[#8FA4C8] text-sm font-['JetBrains_Mono'] tracking-wide">
                — Visión institucional de la DNI
              </p>
            </div>
            <div className="lg:order-1 flex justify-center">
              <div className="relative w-64 h-64 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-[#3B82F6]/15 animate-pulse" />
                <div className="absolute inset-6 rounded-full border border-[#3B82F6]/20" />
                <div className="absolute inset-12 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/30 flex items-center justify-center">
                  <Eye size={44} className="text-[#3B82F6]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A55C]/30 to-transparent" />

      {/* Valores */}
      <section className="py-16 md:py-24 bg-[#ffffff]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <SectionLabel>Valores</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-['Plus_Jakarta_Sans'] mb-4 text-[#051535]">
              Principios que guían nuestro actuar
            </h2>
            <p className="max-w-2xl mx-auto text-base font-['Plus_Jakarta_Sans'] text-[#000000]">
              "Ejercer sus atribuciones con apego al marco constitucional y legal vigente y pleno respeto de los derechos fundamentales, bajo los principios de:"
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALORES.map((v, i) => (
              <div
                key={v.title}
                className="group p-6 bg-[#051535] border border-[#C9A55C]/15 hover:border-[#C9A55C]/40 rounded-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A55C]/10 flex items-center justify-center text-[#C9A55C] group-hover:bg-[#C9A55C]/20 transition-colors">
                    {v.icon}
                  </div>
                  <div className="text-[11px] font-['JetBrains_Mono'] text-[#C9A55C]/60">0{i + 1}</div>
                </div>
                <h3 className="text-white font-bold text-lg mb-2 font-['Plus_Jakarta_Sans']">{v.title}</h3>
                <p className="text-[#8FA4C8] text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principios institucionales */}
      <section className="py-16 md:py-20 bg-[#051535]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <SectionLabel>Principios Institucionales</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-5 font-['Plus_Jakarta_Sans']">
                Compromisos constitucionales irrenunciables
              </h2>
              <p className="text-[#8FA4C8] text-base leading-relaxed font-['Plus_Jakarta_Sans']">
                La DNI fundamenta su actuación en principios constitucionales que garantizan que el ejercicio de la inteligencia se realice siempre en beneficio de la democracia, nunca en su detrimento.
              </p>
            </div>
            <ul className="space-y-3">
              {PRINCIPIOS.map((p, i) => (
                <li key={i} className="flex items-start gap-3 p-4 bg-[#071D49] border border-[#C9A55C]/10 hover:border-[#C9A55C]/30 rounded-lg transition-all">
                  <CheckCircle size={16} className="text-[#C9A55C] mt-0.5 shrink-0" />
                  <span className="text-[#C8D8F0] text-sm font-['Plus_Jakarta_Sans']">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section className="py-16 border-t border-[#C9A55C]/15 bg-[#f9f9ff]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <Heart size={32} className="text-[#C9A55C] mx-auto mb-5 opacity-70" />
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 font-['Plus_Jakarta_Sans'] text-[#051535]">
            Nuestro compromiso con la nación
          </h2>
          <p className="text-base md:text-lg leading-relaxed font-['Plus_Jakarta_Sans'] text-[#030303]">
            Cada acción de la Dirección Nacional de Inteligencia está fundamentada en la defensa de la Constitución, el respeto a los derechos humanos y el fortalecimiento del Estado democrático de Derecho de la República Dominicana.
          </p>
        </div>
      </section>
    </>
  );
}
