import { MapPin, Mail, Phone, Twitter, Facebook, Instagram, Youtube, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { PageHero, SectionLabel } from "../components/shared";

// ─── Editable content placeholders ───────────────────────────────────────────

const SEDE = {
  address: "[Dirección oficial de la DNI — Completar con dirección exacta]",
  city: "Santo Domingo, República Dominicana",
  mapEmbedUrl: "MAP_EMBED_URL_HERE",
  mapsLink: "https://maps.app.goo.gl/8ARFcxFX37AiBMr88",
};

const CORREOS = [
  {
    label: "Comunicaciones institucionales",
    email: "CORREO_INSTITUCIONAL@dni.gob.do",
    desc: "Para consultas generales y comunicaciones oficiales.",
  },
  {
    label: "Recursos humanos",
    email: "RRHH@dni.gob.do",
    desc: "Para asuntos relacionados con postulaciones y personal.",
  },
];

const EMERGENCIAS = {
  number: "NÚMERO_EMERGENCIAS_24/7",
  tel: "tel:+1809XXXXXXX",
  note: "Servicio disponible las 24 horas, los 7 días de la semana.",
};

const REDES = [
  { platform: "Twitter / X", icon: <Twitter size={20} />, handle: "@HANDLE_OFICIAL", url: "TWITTER_URL_HERE", color: "#1DA1F2" },
  { platform: "Facebook", icon: <Facebook size={20} />, handle: "DNI República Dominicana", url: "FACEBOOK_URL_HERE", color: "#1877F2" },
  { platform: "Instagram", icon: <Instagram size={20} />, handle: "@HANDLE_OFICIAL", url: "INSTAGRAM_URL_HERE", color: "#E4405F" },
  { platform: "YouTube", icon: <Youtube size={20} />, handle: "Canal oficial DNI", url: "YOUTUBE_URL_HERE", color: "#FF0000" },
];

// ─── Map placeholder ──────────────────────────────────────────────────────────

function MapPlaceholder() {
  return (
    <div className="relative w-full aspect-[16/7] rounded-xl border border-[#C9A55C]/15 overflow-hidden">
      <iframe
        title="Ubicación DNI"
        width="100%"
        height="100%"
        style={{ border: 0, display: "block" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://maps.google.com/maps?q=Direcci%C3%B3n+Nacional+de+Inteligencia+Santo+Domingo+Dominican+Republic&output=embed&z=16"
      />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Contacto() {
  return (
    <>
      <PageHero
        label="Contacto"
        title="Contacto"
        description="La Dirección Nacional de Inteligencia pone a disposición de los ciudadanos e instituciones los canales oficiales a través de los cuales pueden comunicarse con la organización."
        breadcrumbs={[{ label: "Contacto" }]}
      />

      {/* Core message strip */}
      <div className="bg-[#030E28] border-b border-[#C9A55C]/15 py-4">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
          <p className="text-[#C9A55C] text-sm font-semibold font-['Plus_Jakarta_Sans'] tracking-wide">
            Estamos disponibles. Somos accesibles.
          </p>
        </div>
      </div>

      {/* Contact cards grid */}
      <section className="py-14 md:py-20 bg-[#071D49]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-6">

            {/* 1. Sede */}
            <div className="lg:col-span-2 p-6 md:p-8 bg-[#051535] border border-[#C9A55C]/15 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#C9A55C]/10 flex items-center justify-center text-[#C9A55C]">
                  <MapPin size={20} />
                </div>
                <div>
                  <SectionLabel>Ubicación</SectionLabel>
                  <h2 className="text-white text-xl font-extrabold font-['Plus_Jakarta_Sans'] -mt-2">Sede institucional</h2>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div>
                  <p className="text-[#C8D8F0] text-sm leading-relaxed font-['Plus_Jakarta_Sans'] mb-1">
                    {SEDE.address}
                  </p>
                  <p className="text-[#8FA4C8] text-sm font-['Plus_Jakarta_Sans']">{SEDE.city}</p>
                  <a
                    href={SEDE.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 border border-[#C9A55C]/40 hover:bg-[#C9A55C]/10 text-[#C9A55C] text-xs font-bold rounded-lg uppercase tracking-wider font-['Plus_Jakarta_Sans'] transition-all"
                  >
                    <ExternalLink size={13} />
                    Ver ubicación
                  </a>
                </div>
                <MapPlaceholder />
              </div>
            </div>

            {/* 2. Correos */}
            <div className="p-6 md:p-8 bg-[#051535] border border-[#C9A55C]/15 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#C9A55C]/10 flex items-center justify-center text-[#C9A55C]">
                  <Mail size={20} />
                </div>
                <div>
                  <SectionLabel>Electrónico</SectionLabel>
                  <h2 className="text-white text-xl font-extrabold font-['Plus_Jakarta_Sans'] -mt-2">Correos oficiales</h2>
                </div>
              </div>
              <div className="space-y-4">
                {CORREOS.map((c) => (
                  <div key={c.label} className="p-4 bg-[#071D49] rounded-xl border border-white/8 hover:border-[#C9A55C]/25 transition-all group">
                    <p className="text-[#C9A55C] text-xs font-bold uppercase tracking-wider font-['JetBrains_Mono'] mb-1">{c.label}</p>
                    <a
                      href={`mailto:${c.email}`}
                      className="text-white font-semibold text-sm font-['Plus_Jakarta_Sans'] group-hover:text-[#C9A55C] transition-colors flex items-center gap-2"
                    >
                      {c.email}
                      <ArrowRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <p className="text-[#8FA4C8] text-xs mt-1 font-['Plus_Jakarta_Sans']">{c.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#8FA4C8] text-xs mt-4 font-['Plus_Jakarta_Sans']">
                [Reemplazar con correos oficiales de la DNI cuando estén disponibles]
              </p>
            </div>

            {/* 3. Emergencias */}
            <div className="p-6 md:p-8 bg-[#051535] border border-red-500/20 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500/60 via-red-400/80 to-red-500/60" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold tracking-[0.2em] text-red-400 uppercase font-['JetBrains_Mono']">Urgente</span>
                    <span className="px-2 py-0.5 bg-red-500/15 border border-red-500/30 text-red-400 text-[10px] font-bold rounded font-['JetBrains_Mono'] animate-pulse">24/7</span>
                  </div>
                  <h2 className="text-white text-xl font-extrabold font-['Plus_Jakarta_Sans']">Emergencias 24/7</h2>
                </div>
              </div>

              <div className="p-5 bg-red-500/8 border border-red-500/20 rounded-xl mb-4">
                <p className="text-red-300 text-xs font-['JetBrains_Mono'] mb-1 uppercase tracking-wider">Línea de emergencia</p>
                <p className="text-white text-2xl font-extrabold font-['JetBrains_Mono'] tracking-wider">
                  {EMERGENCIAS.number}
                </p>
                <p className="text-[#8FA4C8] text-xs mt-2 font-['Plus_Jakarta_Sans']">{EMERGENCIAS.note}</p>
              </div>

              <a
                href={EMERGENCIAS.tel}
                className="flex items-center justify-center gap-2 w-full py-3 bg-red-500 hover:bg-red-400 text-white font-bold text-sm rounded-xl uppercase tracking-widest font-['Plus_Jakarta_Sans'] transition-all"
              >
                <Phone size={15} />
                Llamar ahora
              </a>
              <p className="text-[#8FA4C8] text-xs mt-3 text-center font-['Plus_Jakarta_Sans']">
                [Reemplazar con el número oficial de emergencias de la DNI]
              </p>
            </div>

            {/* 4. Redes Sociales */}
            <div className="lg:col-span-2 p-6 md:p-8 bg-[#051535] border border-[#C9A55C]/15 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#C9A55C]/10 flex items-center justify-center text-[#C9A55C]">
                  <ExternalLink size={20} />
                </div>
                <div>
                  <SectionLabel>Digital</SectionLabel>
                  <h2 className="text-white text-xl font-extrabold font-['Plus_Jakarta_Sans'] -mt-2">Redes sociales</h2>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {REDES.map((red) => (
                  <a
                    key={red.platform}
                    href={red.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-4 bg-[#071D49] rounded-xl border border-white/8 hover:border-white/20 transition-all"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                      style={{ backgroundColor: `${red.color}18`, color: red.color }}
                    >
                      {red.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-white text-xs font-bold font-['Plus_Jakarta_Sans'] group-hover:text-[#C9A55C] transition-colors">{red.platform}</p>
                      <p className="text-[#8FA4C8] text-[11px] font-['JetBrains_Mono'] truncate">{red.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
              <p className="text-[#8FA4C8] text-xs mt-4 font-['Plus_Jakarta_Sans']">
                [Reemplazar con los handles y URLs oficiales de las redes sociales de la DNI]
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Canal Confidencial notice */}
      <section className="py-10 bg-[#051535] border-t border-[#C9A55C]/10">
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 p-5 md:p-6 bg-[#071D49] border border-[#C9A55C]/20 rounded-2xl">
            <div>
              <p className="text-[#C9A55C] text-xs font-bold uppercase tracking-widest font-['JetBrains_Mono'] mb-1">Servicio separado</p>
              <h3 className="text-white font-extrabold text-sm font-['Plus_Jakarta_Sans'] mb-1">Canal Confidencial</h3>
              <p className="text-[#8FA4C8] text-xs font-['Plus_Jakarta_Sans']">
                Para reportes confidenciales y denuncias anónimas, utilice el Canal Confidencial.
                Este es un servicio independiente con protocolos de seguridad especializados.
              </p>
            </div>
            <Link
              to="#canal-confidencial"
              className="shrink-0 flex items-center gap-2 px-5 py-2.5 bg-[#C9A55C] hover:bg-[#D4B567] text-[#071D49] font-bold text-xs rounded-lg uppercase tracking-wider font-['Plus_Jakarta_Sans'] transition-all"
            >
              Acceder
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-12 bg-[#071D49]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="text-[#8FA4C8] text-xs uppercase tracking-widest font-['JetBrains_Mono'] mb-5">También puede visitar</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Inicio", to: "/" },
              { label: "Sobre Nosotros", to: "/sobre-nosotros" },
              { label: "Sistema Nacional de Inteligencia", to: "/sni" },
              { label: "Áreas de Trabajo", to: "/areas-de-trabajo/ciberseguridad" },
              { label: "Marco Legal", to: "/marco-legal" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-2 border border-white/12 hover:border-[#C9A55C]/40 hover:bg-[#C9A55C]/5 text-[#C8D8F0] hover:text-[#C9A55C] text-xs font-semibold rounded-lg font-['Plus_Jakarta_Sans'] transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
