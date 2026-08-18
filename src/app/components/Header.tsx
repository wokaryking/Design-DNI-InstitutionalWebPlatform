import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import {
  Search, Menu, X, ChevronDown, Lock,
  Monitor, Target, Globe, AlertTriangle, TrendingUp, Shield,
} from "lucide-react";
import dniLogo from "@/imports/logo11.png";
import { cn } from "./shared";

const INSTITUCION_ITEMS = [
  { label: "Sobre Nosotros", to: "/sobre-nosotros", desc: "Quiénes somos y nuestra estructura" },
  { label: "Nuestra Historia", to: "/historia", desc: "Origen y trayectoria institucional" },
  { label: "Misión, Visión y Valores", to: "/mision-vision-valores", desc: "Nuestros principios rectores" },
  { label: "Marco Legal", to: "/marco-legal", desc: "Ley No. 1-24 y normativa vigente" },
  { label: "El Rol de la DNI", to: "/rol-de-la-dni", desc: "Función y alcance institucional" },
  { label: "¿Qué es la Inteligencia?", to: "/que-es-la-inteligencia", desc: "Educación ciudadana" },
];

const AREAS_ITEMS = [
  { label: "Ciberseguridad", to: "/areas-de-trabajo/ciberseguridad", desc: "Defensa digital nacional", icon: <Monitor size={15} /> },
  { label: "Criptografía Nacional", to: "/areas-de-trabajo/criptografia-nacional", desc: "Seguridad de comunicaciones", icon: <Lock size={15} /> },
  { label: "Investigación de Ciberdelitos", to: "/areas-de-trabajo/investigacion-ciberdelitos", desc: "Análisis de amenazas digitales", icon: <Search size={15} /> },
  { label: "Inteligencia Estratégica", to: "/areas-de-trabajo/inteligencia-estrategica", desc: "Análisis de largo plazo", icon: <Target size={15} /> },
  { label: "Cooperación Internacional", to: "/areas-de-trabajo/cooperacion-internacional", desc: "Alianzas con agencias aliadas", icon: <Globe size={15} /> },
  { label: "Inteligencia Delictiva", to: "/areas-de-trabajo/inteligencia-delictiva", desc: "Crimen organizado y redes", icon: <AlertTriangle size={15} /> },
  { label: "Inteligencia Prospectiva", to: "/areas-de-trabajo/inteligencia-prospectiva", desc: "Escenarios y tendencias futuras", icon: <TrendingUp size={15} /> },
  { label: "Contrainteligencia", to: "/areas-de-trabajo/contrainteligencia", desc: "Detección y neutralización", icon: <Shield size={15} /> },
];

const INSTITUCION_PATHS = INSTITUCION_ITEMS.map((i) => i.to);
const AREAS_PATHS = AREAS_ITEMS.map((i) => i.to);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isInInstitucion = INSTITUCION_PATHS.includes(location.pathname);
  const isInAreas = AREAS_PATHS.some((p) => location.pathname.startsWith(p)) || location.pathname.startsWith("/areas-de-trabajo");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // Close dropdown on nav
  useEffect(() => {
    setActiveDropdown(null);
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#030E28] border-b border-white/8 hidden md:flex items-center justify-between px-8 py-1.5 text-[11px] text-[#8FA4C8]">
        <div className="flex items-center gap-2">
          <span className="text-xs">🇩🇴</span>
          <span className="font-['JetBrains_Mono'] tracking-wider">República Dominicana</span>
        </div>
        <div className="flex items-center gap-5">
          <Link to="/" className="hover:text-white transition-colors">Portal Ciudadano</Link>
          <div className="flex items-center gap-2">
            <button className="hover:text-[#C9A55C] transition-colors font-semibold text-white">ES</button>
            <span className="opacity-30">|</span>
            <button className="hover:text-[#C9A55C] transition-colors">EN</button>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        ref={headerRef}
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#071D49]/98 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.6)] border-b border-white/10"
            : "bg-[#071D49] border-b border-white/8"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-[68px] md:h-[76px]">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src={dniLogo}
              alt="Dirección Nacional de Inteligencia — República Dominicana"
              className="object-contain"
              style={{ width: "48px", height: "48px" }}
            />
            <div className="hidden sm:block">
              <div className="text-white font-bold text-[15px] leading-tight font-['Plus_Jakarta_Sans']">
                Dirección Nacional
              </div>
              <div className="text-[#C9A55C] text-[11px] font-semibold tracking-wide font-['Plus_Jakarta_Sans'] leading-tight">
                de Inteligencia
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center">
            <Link
              to="/"
              className={cn(
                "px-4 py-2 text-[13.5px] font-medium font-['Plus_Jakarta_Sans'] tracking-wide transition-colors",
                location.pathname === "/" ? "text-[#C9A55C]" : "text-[#C8D8F0] hover:text-white"
              )}
            >
              Inicio
            </Link>

            {/* Institución dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setActiveDropdown("institucion")}
                onClick={() => setActiveDropdown(activeDropdown === "institucion" ? null : "institucion")}
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 text-[13.5px] font-medium font-['Plus_Jakarta_Sans'] tracking-wide transition-colors",
                  isInInstitucion || activeDropdown === "institucion"
                    ? "text-[#C9A55C]"
                    : "text-[#C8D8F0] hover:text-white"
                )}
              >
                Institución
                <ChevronDown
                  size={13}
                  className={cn("transition-transform duration-200", activeDropdown === "institucion" && "rotate-180")}
                />
              </button>

              {activeDropdown === "institucion" && (
                <div
                  className="absolute top-full left-0 mt-1 w-72 bg-[#051535] border border-[#C9A55C]/20 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="px-4 py-3 border-b border-white/8">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#C9A55C] uppercase font-['JetBrains_Mono']">
                      Institución
                    </span>
                  </div>
                  <div className="p-2">
                    {INSTITUCION_ITEMS.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className={cn(
                          "group flex flex-col px-4 py-3 rounded-lg transition-all duration-150",
                          location.pathname === item.to
                            ? "bg-[#C9A55C]/10 border border-[#C9A55C]/25"
                            : "hover:bg-white/5"
                        )}
                      >
                        <span className={cn(
                          "text-[13px] font-semibold transition-colors font-['Plus_Jakarta_Sans']",
                          location.pathname === item.to ? "text-[#C9A55C]" : "text-white group-hover:text-[#C9A55C]"
                        )}>
                          {item.label}
                        </span>
                        <span className="text-[11px] text-[#8FA4C8] mt-0.5 font-['Plus_Jakarta_Sans']">
                          {item.desc}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Áreas de Trabajo mega-menu */}
            <div className="relative">
              <button
                onMouseEnter={() => setActiveDropdown("areas")}
                onClick={() => setActiveDropdown(activeDropdown === "areas" ? null : "areas")}
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 text-[13.5px] font-medium font-['Plus_Jakarta_Sans'] tracking-wide transition-colors",
                  isInAreas || activeDropdown === "areas" ? "text-[#C9A55C]" : "text-[#C8D8F0] hover:text-white"
                )}
              >
                Áreas de Trabajo
                <ChevronDown
                  size={13}
                  className={cn("transition-transform duration-200", activeDropdown === "areas" && "rotate-180")}
                />
              </button>

              {activeDropdown === "areas" && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[580px] bg-[#051535] border border-[#C9A55C]/20 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="px-5 py-3 border-b border-white/8">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#C9A55C] uppercase font-['JetBrains_Mono']">
                      Áreas de Trabajo
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-0 p-3">
                    {AREAS_ITEMS.map((item) => (
                      <Link
                        key={item.label}
                        to={item.to}
                        className={cn(
                          "group flex items-start gap-3 px-3 py-2.5 rounded-lg transition-colors",
                          location.pathname === item.to ? "bg-white/8" : "hover:bg-white/5"
                        )}
                      >
                        <div className="mt-0.5 w-7 h-7 rounded-md bg-[#C9A55C]/10 flex items-center justify-center text-[#C9A55C] shrink-0 group-hover:bg-[#C9A55C]/20 transition-colors">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-[12.5px] font-semibold text-white group-hover:text-[#C9A55C] transition-colors font-['Plus_Jakarta_Sans'] leading-tight">
                            {item.label}
                          </div>
                          <div className="text-[11px] text-[#8FA4C8] mt-0.5 font-['Plus_Jakarta_Sans']">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* SNI with tooltip */}
            <div className="relative group">
              <Link
                to="/sni"
                className={cn(
                  "px-4 py-2 text-[13.5px] transition-colors font-medium font-['Plus_Jakarta_Sans'] tracking-wide",
                  location.pathname === "/sni" ? "text-[#C9A55C]" : "text-[#C8D8F0] hover:text-white"
                )}
              >
                SNI
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-[#051535] border border-[#C9A55C]/20 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-10">
                <span className="text-[11px] text-[#C9A55C] font-['JetBrains_Mono']">Sistema Nacional de Inteligencia</span>
              </div>
            </div>

            <Link
              to="/trabaja-con-nosotros"
              className={cn(
                "px-4 py-2 text-[13.5px] font-medium font-['Plus_Jakarta_Sans'] tracking-wide transition-colors",
                location.pathname === "/trabaja-con-nosotros" ? "text-[#C9A55C]" : "text-[#C8D8F0] hover:text-white"
              )}
            >
              Trabaja con Nosotros
            </Link>

            <Link
              to="/contacto"
              className={cn(
                "px-4 py-2 text-[13.5px] font-medium font-['Plus_Jakarta_Sans'] tracking-wide transition-colors",
                location.pathname === "/contacto" ? "text-[#C9A55C]" : "text-[#C8D8F0] hover:text-white"
              )}
            >
              Contacto
            </Link>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 md:gap-3">
            <button
              onClick={() => { setSearchOpen(!searchOpen); setActiveDropdown(null); }}
              className="w-9 h-9 flex items-center justify-center text-[#8FA4C8] hover:text-white hover:bg-white/6 rounded-lg transition-all"
              aria-label="Buscar"
            >
              <Search size={17} />
            </button>

            <div className="hidden md:flex items-center gap-1 text-[12px] text-[#8FA4C8] border border-white/12 rounded-md px-2.5 py-1">
              <button className="hover:text-[#C9A55C] transition-colors font-semibold text-white">ES</button>
              <span className="opacity-30 text-[10px]">|</span>
              <button className="hover:text-[#C9A55C] transition-colors">EN</button>
            </div>

            <Link
              to="/canal-confidencial"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#C9A55C] hover:bg-[#D4B567] text-[#071D49] text-[12px] font-bold rounded-md transition-all duration-200 tracking-wider uppercase font-['Plus_Jakarta_Sans'] shadow-[0_0_16px_rgba(201,165,92,0.2)]"
            >
              <Lock size={12} />
              Canal Confidencial
            </Link>

            <button
              className="lg:hidden w-9 h-9 flex items-center justify-center text-[#8FA4C8] hover:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-white/8 px-6 md:px-10 py-3 bg-[#030E28]">
            <div className="max-w-[1400px] mx-auto flex items-center gap-3">
              <Search size={15} className="text-[#8FA4C8] shrink-0" />
              <input
                autoFocus
                type="text"
                placeholder="Buscar en el portal DNI..."
                className="flex-1 bg-transparent text-white placeholder-[#8FA4C8]/50 text-sm outline-none font-['Plus_Jakarta_Sans']"
              />
              <button onClick={() => setSearchOpen(false)} className="text-[#8FA4C8] hover:text-white">
                <X size={15} />
              </button>
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#051535] border-t border-white/10 px-5 py-4">
            <Link
              to="/"
              className="block px-3 py-3 text-[#C8D8F0] hover:text-white hover:bg-white/5 rounded-lg text-sm font-medium font-['Plus_Jakarta_Sans']"
            >
              Inicio
            </Link>

            <div>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === "inst" ? null : "inst")}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-3 hover:bg-white/5 rounded-lg text-sm font-medium font-['Plus_Jakarta_Sans'] transition-colors",
                  isInInstitucion ? "text-[#C9A55C]" : "text-[#C8D8F0] hover:text-white"
                )}
              >
                Institución
                <ChevronDown size={14} className={cn("transition-transform", mobileExpanded === "inst" && "rotate-180")} />
              </button>
              {mobileExpanded === "inst" && (
                <div className="ml-4 mb-1 border-l border-[#C9A55C]/20 pl-3 space-y-0.5">
                  {INSTITUCION_ITEMS.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={cn(
                        "block px-3 py-2 text-[13px] rounded-md font-['Plus_Jakarta_Sans'] transition-colors",
                        location.pathname === item.to
                          ? "text-[#C9A55C] bg-[#C9A55C]/10"
                          : "text-[#8FA4C8] hover:text-white hover:bg-white/5"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === "areas" ? null : "areas")}
                className="w-full flex items-center justify-between px-3 py-3 text-[#C8D8F0] hover:text-white hover:bg-white/5 rounded-lg text-sm font-medium font-['Plus_Jakarta_Sans']"
              >
                Áreas de Trabajo
                <ChevronDown size={14} className={cn("transition-transform", mobileExpanded === "areas" && "rotate-180")} />
              </button>
              {mobileExpanded === "areas" && (
                <div className="ml-4 mb-1 border-l border-[#C9A55C]/20 pl-3 space-y-0.5">
                  {AREAS_ITEMS.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className={cn(
                        "flex items-center gap-2 px-3 py-2 text-[13px] rounded-md font-['Plus_Jakarta_Sans'] transition-colors",
                        location.pathname === item.to ? "text-[#C9A55C] bg-[#C9A55C]/10" : "text-[#8FA4C8] hover:text-white hover:bg-white/5"
                      )}
                    >
                      <span className="text-[#C9A55C]">{item.icon}</span>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/sni"
              className={cn(
                "block px-3 py-3 hover:bg-white/5 rounded-lg text-sm font-medium font-['Plus_Jakarta_Sans'] transition-colors",
                location.pathname === "/sni" ? "text-[#C9A55C]" : "text-[#C8D8F0] hover:text-white"
              )}
            >
              Sistema Nacional de Inteligencia
            </Link>
            <Link
              to="/trabaja-con-nosotros"
              className={cn(
                "block px-3 py-3 hover:bg-white/5 rounded-lg text-sm font-medium font-['Plus_Jakarta_Sans'] transition-colors",
                location.pathname === "/trabaja-con-nosotros" ? "text-[#C9A55C]" : "text-[#C8D8F0] hover:text-white"
              )}
            >
              Trabaja con Nosotros
            </Link>
            <Link
              to="/contacto"
              className={cn(
                "block px-3 py-3 hover:bg-white/5 rounded-lg text-sm font-medium font-['Plus_Jakarta_Sans'] transition-colors",
                location.pathname === "/contacto" ? "text-[#C9A55C]" : "text-[#C8D8F0] hover:text-white"
              )}
            >
              Contacto
            </Link>

            <div className="border-t border-white/10 mt-3 pt-3">
              <Link
                to="/canal-confidencial"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-[#C9A55C] hover:bg-[#D4B567] text-[#071D49] text-sm font-bold rounded-lg tracking-wider uppercase font-['Plus_Jakarta_Sans']"
              >
                <Lock size={14} /> Canal Confidencial
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
