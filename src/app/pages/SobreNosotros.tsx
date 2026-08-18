import { CheckCircle, XCircle, Shield, Users, Eye, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { PageHero, SectionLabel } from "../components/shared";
import dniLogo from "@/imports/logo11.png";
import { YouTubeVideo } from '@/app/components/YouTubeVideo';

const DOES = [
  "Recolectar, procesar, analizar y difundir información de inteligencia estratégica.",
  "Coordinar las actividades de inteligencia y contrainteligencia del Sistema Nacional de Inteligencia.",
  "Prevenir y contrarrestar amenazas a la seguridad nacional y a las instituciones democráticas.",
  "Cooperar con organismos de inteligencia nacionales e internacionales autorizados.",
  "Proteger la soberanía territorial e integridad del Estado dominicano.",
  "Informar al Presidente de la República y a los órganos competentes del Estado.",
];

const DOES_NOT = [
  "Realizar labores de policía o funciones de orden público.",
  "Investigar delitos comunes ni ejercer funciones de persecución penal.",
  "Violar los derechos fundamentales de los ciudadanos dominicanos.",
  "Actuar fuera del marco legal establecido en la Ley No. 1-24.",
  "Vigilar a partidos políticos, sindicatos u organizaciones sociales por el ejercicio legítimo de sus derechos.",
  "Interferir en procesos electorales o en el ejercicio de libertades civiles.",
];

const PILLARS = [
  { icon: <Shield size={22} />, title: "Seguridad Nacional", desc: "Protegemos el Estado dominicano frente a amenazas externas e internas." },
  { icon: <Eye size={22} />, title: "Inteligencia Estratégica", desc: "Proveemos análisis de alto nivel para la toma de decisiones del Estado." },
  { icon: <Users size={22} />, title: "Coordinación Institucional", desc: "Articulamos los organismos del SNI bajo un mandato legal claro." },
  { icon: <Globe size={22} />, title: "Cooperación Internacional", desc: "Colaboramos con agencias aliadas para fortalecer la seguridad regional." },
];

export default function SobreNosotros() {
  return (
    <>
      <PageHero
        label="Institución"
        title="Sobre Nosotros"
        description="La Dirección Nacional de Inteligencia es el organismo rector del Sistema Nacional de Inteligencia de la República Dominicana, creado bajo mandato legal para proteger la soberanía y la democracia."
        breadcrumbs={[{ label: "Institución" }, { label: "Sobre Nosotros" }]}
      />

      {/* What is the DNI */}
      <section className="py-16 md:py-24 bg-[#071D49]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionLabel>¿Qué es la DNI?</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6 font-['Plus_Jakarta_Sans']">
                El organismo rector de la inteligencia dominicana
              </h2>
              <p className="text-[#8FA4C8] text-base leading-relaxed mb-5 font-['Plus_Jakarta_Sans']">
                La Dirección Nacional de Inteligencia (DNI) es el órgano coordinador del Sistema Nacional de Inteligencia (SNI), correspondiéndole coordinar las actividades de inteligencia y contrainteligencia relacionadas con la seguridad nacional que realicen los organismos militares, policiales y financieros del Estado.
              </p>
              <p className="text-[#8FA4C8] text-base leading-relaxed mb-8 font-['Plus_Jakarta_Sans']">
                Actúa conforme al Plan Anual de Inteligencia y los objetivos que trace el órgano coordinador, sin perjuicio de las respectivas leyes que regulan a cada institución del SNI.
              </p>
              <Link to="/rol-de-la-dni" className="inline-flex items-center gap-2 text-[#C9A55C] hover:text-[#D4B567] font-semibold text-sm font-['Plus_Jakarta_Sans'] transition-colors">
                Conocer el Rol de la DNI <ArrowRight size={15} />
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-52 h-52 md:w-64 md:h-64 rounded-full bg-[#C9A55C]/8 border border-[#C9A55C]/20 flex items-center justify-center">
                  <img src={dniLogo} alt="Escudo oficial de la DNI" className="w-40 h-40 md:w-52 md:h-52 object-contain" />
                </div>        {/* auiiii */}
                <div className="absolute inset-0 rounded-full border border-[#C9A55C]/10 scale-125" />
                <div className="absolute inset-0 rounded-full border border-[#C9A55C]/5 scale-150" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What DNI Does / Does Not */}
      <section className="py-16 md:py-20 bg-[#F5F7FA]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <SectionLabel>Alcance Institucional</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#071D49] font-['Plus_Jakarta_Sans']">
              Lo que hace la DNI — y lo que no hace
            </h2>
            <p className="text-[#071D49]/55 mt-3 max-w-xl mx-auto text-sm font-['Plus_Jakarta_Sans']">
              La transparencia sobre el alcance de nuestras funciones es esencial en una democracia constitucional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Does */}
            <div className="bg-[#071D49] border border-green-500/20 rounded-xl overflow-hidden">
              <div className="flex items-center gap-3 px-6 py-4 border-b border-green-500/20 bg-green-500/5">
                <CheckCircle size={18} className="text-green-400" />
                <span className="text-green-400 font-bold text-sm tracking-wide font-['Plus_Jakarta_Sans'] uppercase">La DNI sí hace</span>
              </div>
              <ul className="p-5 space-y-3">
                {DOES.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#C8D8F0] text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    <CheckCircle size={15} className="text-green-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Does Not */}
            <div className="bg-[#071D49] border border-red-500/20 rounded-xl overflow-hidden">
              <div className="flex items-center gap-3 px-6 py-4 border-b border-red-500/20 bg-red-500/5">
                <XCircle size={18} className="text-red-400" />
                <span className="text-red-400 font-bold text-sm tracking-wide font-['Plus_Jakarta_Sans'] uppercase">La DNI no hace</span>
              </div>
              <ul className="p-5 space-y-3">
                {DOES_NOT.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#C8D8F0] text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    <XCircle size={15} className="text-red-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional pillars */}
      <section className="py-16 md:py-20 bg-[#071D49]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <SectionLabel>Pilares Institucionales</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              Ejes de nuestra función constitucional
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PILLARS.map((p) => (
              <div key={p.title} className="group p-6 bg-[#051535] border border-[#C9A55C]/15 hover:border-[#C9A55C]/40 rounded-xl transition-all duration-300">
                <div className="w-11 h-11 rounded-lg bg-[#C9A55C]/10 flex items-center justify-center text-[#C9A55C] mb-4 group-hover:bg-[#C9A55C]/20 transition-colors">
                  {p.icon}
                </div>
                <h3 className="text-white font-bold mb-2 font-['Plus_Jakarta_Sans']">{p.title}</h3>
                <p className="text-[#8FA4C8] text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <div className="text-center mb-8">
            <SectionLabel>Video Institucional</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#071D49] font-['Plus_Jakarta_Sans']">
              Conozca nuestra institución
            </h2>
            <p className="text-[#071D49]/55 mt-2 text-sm font-['Plus_Jakarta_Sans']">[OFFICIAL INSTITUTIONAL VIDEO]</p>
          </div>
          <div className="rounded-xl overflow-hidden border border-[#071D49]/10 bg-[#F5F7FA]">
  <iframe
    width="100%"
    height="100%"
    style={{ aspectRatio: "16/9" }}
    src="https://www.youtube.com/embed/DB0kR7Tsotw"
    title="Video"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
         {/*  <div className="rounded-xl overflow-hidden border border-[#C9A55C]/20 bg-[#071D49]">
            <video
              controls
              preload="metadata"
              poster="VIDEO_POSTER_URL_HERE"
              className="w-full aspect-video"
            >
              <source src="https://youtu.be/DB0kR7Tsotw" type="video/mp4" />   
              Tu navegador no soporta el elemento de video.
            </video>
          </div> */}
        </div>
      </section>

      {/* CTA to other pages */}
      <section className="py-14 bg-[#071D49] border-t border-[#C9A55C]/15">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Nuestra Historia", to: "/historia", desc: "Trayectoria institucional desde sus orígenes" },
              { label: "Misión, Visión y Valores", to: "/mision-vision-valores", desc: "Principios que rigen nuestro actuar" },
              { label: "Marco Legal", to: "/marco-legal", desc: "Base jurídica que fundamenta la institución" },
            ].map((item) => (
              <Link key={item.to} to={item.to} className="group flex items-center justify-between p-5 bg-[#051535] border border-[#C9A55C]/15 hover:border-[#C9A55C]/40 rounded-xl transition-all duration-300">
                <div>
                  <div className="text-white font-semibold text-sm font-['Plus_Jakarta_Sans'] group-hover:text-[#C9A55C] transition-colors">{item.label}</div>
                  <div className="text-[#8FA4C8] text-xs mt-1 font-['Plus_Jakarta_Sans']">{item.desc}</div>
                </div>
                <ArrowRight size={16} className="text-[#C9A55C] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
