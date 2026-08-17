import { NavLink, Outlet, useLocation } from "react-router";
import { Monitor, Lock, Search, Target, Globe, AlertTriangle, TrendingUp, Shield } from "lucide-react";
import { cn } from "../../components/shared";

export const AREAS = [
  {
    slug: "ciberseguridad",
    label: "Ciberseguridad",
    shortLabel: "Ciberseguridad",
    icon: <Monitor size={16} />,
    color: "#3B82F6",
    desc: "Defensa digital nacional",
  },
  {
    slug: "criptografia-nacional",
    label: "Criptografía Nacional",
    shortLabel: "Criptografía",
    icon: <Lock size={16} />,
    color: "#8B5CF6",
    desc: "Seguridad de comunicaciones",
  },
  {
    slug: "investigacion-ciberdelitos",
    label: "Investigación de Ciberdelitos",
    shortLabel: "Ciberdelitos",
    icon: <Search size={16} />,
    color: "#EF4444",
    desc: "Análisis de amenazas digitales",
  },
  {
    slug: "inteligencia-estrategica",
    label: "Inteligencia Estratégica",
    shortLabel: "Estratégica",
    icon: <Target size={16} />,
    color: "#C9A55C",
    desc: "Análisis de largo plazo",
  },
  {
    slug: "cooperacion-internacional",
    label: "Cooperación Internacional",
    shortLabel: "Internacional",
    icon: <Globe size={16} />,
    color: "#10B981",
    desc: "Alianzas con agencias aliadas",
  },
  {
    slug: "inteligencia-delictiva",
    label: "Inteligencia Delictiva",
    shortLabel: "Delictiva",
    icon: <AlertTriangle size={16} />,
    color: "#F59E0B",
    desc: "Crimen organizado y redes",
  },
  {
    slug: "inteligencia-prospectiva",
    label: "Inteligencia Prospectiva",
    shortLabel: "Prospectiva",
    icon: <TrendingUp size={16} />,
    color: "#06B6D4",
    desc: "Escenarios y tendencias futuras",
  },
  {
    slug: "contrainteligencia",
    label: "Contrainteligencia",
    shortLabel: "Contrainte.",
    icon: <Shield size={16} />,
    color: "#EC4899",
    desc: "Detección y neutralización",
  },
];

export function useCurrentArea() {
  const location = useLocation();
  const slug = location.pathname.split("/areas-de-trabajo/")[1]?.replace(/\/$/, "");
  return AREAS.find((a) => a.slug === slug) ?? null;
}

export default function AreasLayout() {
  const location = useLocation();
  const currentSlug = location.pathname.split("/areas-de-trabajo/")[1]?.replace(/\/$/, "");

  return (
    <div className="flex min-h-screen flex-col">
      {/* Persistent secondary sub-nav */}
      <div className="sticky top-[76px] z-40 bg-[#051535] border-b border-[#C9A55C]/15 shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          {/* Desktop: scrollable single row */}
          <div className="hidden sm:flex items-center gap-0 overflow-x-auto scrollbar-none py-0">
            {AREAS.map((area) => {
              const isActive = currentSlug === area.slug;
              return (
                <NavLink
                  key={area.slug}
                  to={`/areas-de-trabajo/${area.slug}`}
                  className={cn(
                    "flex items-center gap-2 px-4 py-3.5 text-[12.5px] font-semibold whitespace-nowrap border-b-2 transition-all duration-200 font-['Plus_Jakarta_Sans'] shrink-0",
                    isActive
                      ? "border-b-2 text-white"
                      : "border-transparent text-[#8FA4C8] hover:text-white hover:border-white/20"
                  )}
                  style={isActive ? { borderBottomColor: area.color, color: area.color } : {}}
                >
                  <span style={{ color: isActive ? area.color : undefined }}>{area.icon}</span>
                  {area.shortLabel}
                </NavLink>
              );
            })}
          </div>

          {/* Mobile: 2-col grid */}
          <div className="sm:hidden grid grid-cols-2 py-1">
            {AREAS.map((area) => {
              const isActive = currentSlug === area.slug;
              return (
                <NavLink
                  key={area.slug}
                  to={`/areas-de-trabajo/${area.slug}`}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2.5 text-[12px] font-semibold rounded-lg m-1 transition-all font-['Plus_Jakarta_Sans']",
                    isActive ? "bg-white/8 text-white" : "text-[#8FA4C8] hover:text-white hover:bg-white/5"
                  )}
                  style={isActive ? { color: area.color } : {}}
                >
                  <span style={{ color: isActive ? area.color : undefined }}>{area.icon}</span>
                  <span className="truncate">{area.shortLabel}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>

      {/* Page content */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
