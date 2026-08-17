import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

export function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function GoldLine() {
  return <div className="w-12 h-0.5 bg-[#C9A55C] mb-4" />;
}

export function SectionLabel({
  children,
  accentColor = "#C9A55C",
}: {
  children: React.ReactNode;
  accentColor?: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div className="w-1 h-4" style={{ backgroundColor: accentColor }} />
      <span
        className="text-xs font-bold tracking-[0.2em] uppercase font-['JetBrains_Mono']"
        style={{ color: accentColor }}
      >
        {children}
      </span>
    </div>
  );
}

interface BreadcrumbItem {
  label: string;
  href?: string;
  to?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-1.5 text-[12px] text-[#8FA4C8] font-['Plus_Jakarta_Sans'] mb-8">
      <Link to="/" className="hover:text-[#C9A55C] transition-colors">Inicio</Link>
      {items.map((item, i) => {
        const dest = item.to ?? item.href;
        return (
          <span key={i} className="flex items-center gap-1.5">
            <ChevronRight size={12} className="opacity-50" />
            {dest ? (
              <Link to={dest} className="hover:text-[#C9A55C] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-white font-medium">{item.label}</span>
            )}
          </span>
        );
      })}
    </nav>
  );
}

interface PageHeroProps {
  label: string;
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
  accentColor?: string;
}

export function PageHero({ label, title, description, breadcrumbs, accentColor = "#C9A55C" }: PageHeroProps) {
  return (
    <section className="relative bg-[#051535] border-b overflow-hidden" style={{ borderBottomColor: `${accentColor}25` }}>
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, ${accentColor} 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      {/* Left accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{
          background: `linear-gradient(to bottom, ${accentColor}99, ${accentColor}33, transparent)`,
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 py-14 md:py-20">
        <Breadcrumbs items={breadcrumbs} />
        <SectionLabel accentColor={accentColor}>{label}</SectionLabel>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl font-['Plus_Jakarta_Sans'] mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-[#8FA4C8] text-base md:text-lg leading-relaxed max-w-2xl font-['Plus_Jakarta_Sans']">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
