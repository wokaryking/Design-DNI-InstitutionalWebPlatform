import { Link } from "react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import dniLogo from "@/imports/logodni.png";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#030E28] border-t border-[#C9A55C]/20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={dniLogo}
                alt="DNI — Dirección Nacional de Inteligencia"
                className="object-contain"
                style={{ width: "52px", height: "52px" }}
              />
              <div>
                <div className="text-white font-bold font-['Plus_Jakarta_Sans'] text-[14px] leading-tight">
                  Dirección Nacional<br />de Inteligencia
                </div>
                <div className="text-[#C9A55C] text-[10px] tracking-wide font-['Plus_Jakarta_Sans'] mt-0.5">
                  República Dominicana
                </div>
              </div>
            </div>
            <p className="text-[#8FA4C8] text-sm leading-relaxed mb-5 font-['Plus_Jakarta_Sans']">
              Organismo rector del Sistema Nacional de Inteligencia de la República Dominicana.
            </p>
            <div className="flex gap-3">
              {["FB", "X", "YT", "IN"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#C9A55C]/20 border border-white/10 hover:border-[#C9A55C]/40 flex items-center justify-center text-[#8FA4C8] hover:text-[#C9A55C] text-[10px] font-bold transition-all font-['JetBrains_Mono']"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Institución links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 font-['Plus_Jakarta_Sans'] tracking-wide">Institución</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Sobre Nosotros", to: "/sobre-nosotros" },
                { label: "Nuestra Historia", to: "/historia" },
                { label: "Misión, Visión y Valores", to: "/mision-vision-valores" },
                { label: "Marco Legal", to: "/marco-legal" },
                { label: "El Rol de la DNI", to: "/rol-de-la-dni" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-[#8FA4C8] hover:text-[#C9A55C] text-sm transition-colors font-['Plus_Jakarta_Sans']">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Transparencia */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 font-['Plus_Jakarta_Sans'] tracking-wide">Transparencia</h4>
            <ul className="space-y-2.5">
              {[
                "Portal de Transparencia",
                "Informes Públicos",
                "Preguntas Frecuentes",
                "Solicitud de Información",
                "Acceso a Datos",
              ].map((l) => (
                <li key={l}>
                  <a href="#" className="text-[#8FA4C8] hover:text-[#C9A55C] text-sm transition-colors font-['Plus_Jakarta_Sans']">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 font-['Plus_Jakarta_Sans'] tracking-wide">Contacto</h4>
            <div className="space-y-3">
              {[
                { icon: <MapPin size={13} />, text: "Av. México esq. Pedro Henríquez Ureña, Santo Domingo, D.N." },
                { icon: <Phone size={13} />, text: "+1 (809) 000-0000" },
                { icon: <Mail size={13} />, text: "info@dni.gov.do" },
              ].map((c, i) => (
                <div key={i} className="flex gap-2.5 text-[#8FA4C8] text-sm font-['Plus_Jakarta_Sans']">
                  <span className="text-[#C9A55C] mt-0.5 shrink-0">{c.icon}</span>
                  {c.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#C9A55C]/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#8FA4C8] text-xs font-['JetBrains_Mono']">
            © 2026 Dirección Nacional de Inteligencia — República Dominicana. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-[#8FA4C8] text-xs font-['Plus_Jakarta_Sans']">
            <a href="#" className="hover:text-[#C9A55C] transition-colors">Términos de Uso</a>
            <a href="#" className="hover:text-[#C9A55C] transition-colors">Privacidad</a>
            <a href="#" className="hover:text-[#C9A55C] transition-colors">Accesibilidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
