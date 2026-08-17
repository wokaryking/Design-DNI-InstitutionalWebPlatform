import { Link } from "react-router";
import { ArrowRight, Users } from "lucide-react";

interface AreaCTAProps {
  areaSlug: string;
  areaLabel: string;
  accentColor?: string;
}

export function AreaCTA({ areaSlug, areaLabel, accentColor = "#C9A55C" }: AreaCTAProps) {
  return (
    <div className="bg-[#051535] border-y border-white/8 py-5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
            style={{ backgroundColor: `${accentColor}18`, color: accentColor }}
          >
            <Users size={18} />
          </div>
          <div>
            <p className="text-white text-sm font-semibold font-['Plus_Jakarta_Sans'] leading-tight">
              ¿Te interesa trabajar en esta área?
            </p>
            <p className="text-[#8FA4C8] text-xs font-['Plus_Jakarta_Sans'] mt-0.5">
              Forma parte del equipo de {areaLabel} de la DNI.
            </p>
          </div>
        </div>
        <Link
          to={`/trabaja-con-nosotros?from=${areaSlug}`}
          className="flex items-center gap-2 px-5 py-2.5 font-bold text-xs rounded-lg uppercase tracking-wider font-['Plus_Jakarta_Sans'] transition-all whitespace-nowrap shrink-0"
          style={{ backgroundColor: accentColor, color: "#071D49" }}
        >
          Formulario de Aplicación
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
