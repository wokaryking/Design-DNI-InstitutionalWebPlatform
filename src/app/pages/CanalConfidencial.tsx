import { useState, useRef } from "react";
import { Shield, Lock, AlertTriangle, CheckCircle, XCircle, Phone, ArrowRight, Upload, X, Eye, EyeOff, Copy, Check, ChevronDown, ChevronUp, FileText, Wifi, RefreshCw, BookOpen, UserCheck, AlertOctagon } from "lucide-react";
import { Link } from "react-router";
import { SectionLabel } from "../components/shared";

// ─── Constants ────────────────────────────────────────────────────────────────

const REPORT_CATEGORIES = [
  { id: "espionaje", label: "Espionaje", icon: <Eye size={22} />, desc: "Actividades de recolección de información por agentes extranjeros o nacionales contra el Estado dominicano." },
  { id: "sabotaje", label: "Sabotaje a infraestructuras críticas", icon: <AlertTriangle size={22} />, desc: "Acciones que comprometan la energía, agua, telecomunicaciones, transporte u otras infraestructuras esenciales." },
  { id: "terrorismo", label: "Amenazas terroristas", icon: <Shield size={22} />, desc: "Información sobre grupos o planes que busquen causar daño masivo a personas, instituciones o la nación." },
  { id: "ciberataques", label: "Ciberataques", icon: <Wifi size={22} />, desc: "Ataques contra sistemas gubernamentales, infraestructuras críticas digitales o instituciones del Estado." },
  { id: "ciberdelito", label: "Delito cibernético", icon: <FileText size={22} />, desc: "Crímenes digitales de relevancia para la seguridad nacional, como espionaje digital o ataques coordinados." },
];

const SECURITY_FEATURES = [
  "Conexión cifrada HTTPS / TLS",
  "Protección contra envíos duplicados",
  "Validación en servidor",
  "Protección CSRF",
  "Rate limiting activo",
  "Verificación CAPTCHA",
];

const STEPS = ["Identidad", "Categoría", "Detalles", "Archivos", "Revisión", "Envío"];

// ─── Sub-components ───────────────────────────────────────────────────────────

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-8">
      {STEPS.map((label, i) => (
        <div key={label} className="flex items-center">
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-['JetBrains_Mono'] transition-all ${
              i < current ? "bg-[#C9A55C] text-[#071D49]" :
              i === current ? "bg-[#C9A55C]/20 border-2 border-[#C9A55C] text-[#C9A55C]" :
              "bg-white/5 border border-white/20 text-[#8FA4C8]"
            }`}>
              {i < current ? <Check size={13} /> : String(i + 1).padStart(2, "0")}
            </div>
            <span className={`text-[9px] mt-1 font-['Plus_Jakarta_Sans'] tracking-wide hidden sm:block ${
              i === current ? "text-[#C9A55C]" : i < current ? "text-[#C9A55C]/70" : "text-[#8FA4C8]/50"
            }`}>{label}</span>
          </div>
          {i < STEPS.length - 1 && (
            <div className={`w-8 md:w-12 h-px mx-1 transition-all ${i < current ? "bg-[#C9A55C]/60" : "bg-white/10"}`} />
          )}
        </div>
      ))}
    </div>
  );
}

function SecurityBadge() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-4 border border-[#C9A55C]/20 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-white/3 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Lock size={14} className="text-[#C9A55C]" />
          <span className="text-[#C9A55C] text-xs font-bold uppercase tracking-widest font-['JetBrains_Mono']">Canal protegido</span>
          <span className="text-[#8FA4C8] text-xs font-['Plus_Jakarta_Sans']">· Información tratada de forma confidencial</span>
        </div>
        {open ? <ChevronUp size={14} className="text-[#8FA4C8]" /> : <ChevronDown size={14} className="text-[#8FA4C8]" />}
      </button>
      {open && (
        <div className="px-4 pb-4 border-t border-white/8">
          <p className="text-[#8FA4C8] text-xs font-['Plus_Jakarta_Sans'] mb-3 mt-3">Medidas de seguridad implementadas en este canal:</p>
          <div className="grid grid-cols-2 gap-2">
            {SECURITY_FEATURES.map((f) => (
              <div key={f} className="flex items-center gap-2 text-xs text-[#8FA4C8] font-['Plus_Jakarta_Sans']">
                <CheckCircle size={11} className="text-[#C9A55C] shrink-0" />
                {f}
              </div>
            ))}
          </div>
          <p className="text-[#8FA4C8]/50 text-[10px] mt-3 font-['Plus_Jakarta_Sans']">La implementación técnica completa (E2E encryption, secure file handling, audit logging) se activa en producción.</p>
        </div>
      )}
    </div>
  );
}

function FileUploadZone({ files, onAdd, onRemove }: {
  files: File[];
  onAdd: (f: File[]) => void;
  onRemove: (i: number) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const dropped = Array.from(e.dataTransfer.files).filter(f => f.size <= 10 * 1024 * 1024);
    if (dropped.length) onAdd(dropped);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files || []).filter(f => f.size <= 10 * 1024 * 1024);
    if (selected.length) onAdd(selected);
    e.target.value = "";
  };

  const formatSize = (bytes: number) => bytes < 1024 * 1024
    ? `${(bytes / 1024).toFixed(0)} KB`
    : `${(bytes / (1024 * 1024)).toFixed(1)} MB`;

  return (
    <div>
      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
          dragOver ? "border-[#C9A55C]/60 bg-[#C9A55C]/5" : "border-white/15 hover:border-white/30"
        }`}
      >
        <Upload size={28} className="text-[#8FA4C8] mx-auto mb-3" />
        <p className="text-[#C8D8F0] text-sm font-['Plus_Jakarta_Sans'] mb-1">Arrastra archivos aquí o haz clic para seleccionar</p>
        <p className="text-[#8FA4C8] text-xs font-['Plus_Jakarta_Sans']">PDF, imágenes, videos, documentos · Máximo 10 MB por archivo</p>
        <input ref={inputRef} type="file" multiple accept=".pdf,.jpg,.jpeg,.png,.mp4,.mov,.doc,.docx,.txt" className="hidden" onChange={handleChange} />
      </div>

      {files.length > 0 && (
        <div className="mt-3 space-y-2">
          {files.map((f, i) => (
            <div key={i} className="flex items-center justify-between px-4 py-3 bg-white/5 border border-white/10 rounded-lg">
              <div className="flex items-center gap-3 min-w-0">
                <FileText size={15} className="text-[#C9A55C] shrink-0" />
                <div className="min-w-0">
                  <p className="text-[#C8D8F0] text-xs font-['Plus_Jakarta_Sans'] truncate">{f.name}</p>
                  <p className="text-[#8FA4C8] text-[10px] font-['JetBrains_Mono']">{formatSize(f.size)}</p>
                </div>
              </div>
              <button onClick={() => onRemove(i)} className="text-[#8FA4C8] hover:text-red-400 transition-colors ml-2 shrink-0">
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CaptchaPlaceholder({ verified, onVerify }: { verified: boolean; onVerify: () => void }) {
  return (
    <div className="border border-white/15 rounded-xl p-4 flex items-center justify-between bg-white/3">
      <div className="flex items-center gap-3">
        {verified
          ? <CheckCircle size={20} className="text-green-400" />
          : <div className="w-5 h-5 border-2 border-[#8FA4C8] rounded cursor-pointer hover:border-[#C9A55C] transition-colors" onClick={onVerify} />
        }
        <div>
          <p className="text-[#C8D8F0] text-sm font-['Plus_Jakarta_Sans']">{verified ? "Verificación completada" : "No soy un robot"}</p>
          <p className="text-[#8FA4C8] text-[10px] font-['Plus_Jakarta_Sans']">{verified ? "Puedes enviar la información." : "Verificación de seguridad requerida · hCaptcha / reCAPTCHA"}</p>
        </div>
      </div>
      <div className="text-[#8FA4C8]/40 text-[9px] font-['JetBrains_Mono'] text-right">
        <div>CAPTCHA</div>
        <div>PENDIENTE</div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

type ReportMode = "anonymous" | "identified" | null;

interface FormData {
  mode: ReportMode;
  category: string;
  description: string;
  date: string;
  location: string;
  additionalInfo: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
}

function generateTrackingNumber(): string {
  // NOTE: In production this must be generated server-side after secure submission.
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const segment = (len: number) => Array.from({ length: len }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  return `DNI-${segment(4)}-${segment(4)}-${segment(4)}`;
}

export default function CanalConfidencial() {
  const [formActive, setFormActive] = useState(false);
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    mode: null, category: "", description: "", date: "", location: "",
    additionalInfo: "", contactName: "", contactEmail: "", contactPhone: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState("");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const startForm = () => {
    setFormActive(true);
    setStep(0);
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };

  const goBack = () => {
    if (step > 0) setStep(s => s - 1);
    else { setFormActive(false); setStep(0); }
  };

  const handleSubmit = async () => {
    if (!captchaVerified) return;
    setIsSubmitting(true);
    setSubmitError(null);
    // BACKEND: Replace this timeout with an actual secure API call to the DNI backend.
    // The endpoint must implement: CSRF validation, rate limiting, E2E encryption,
    // server-side validation, secure file handling, and tracking number generation.
    await new Promise(r => setTimeout(r, 2000));
    // For now we generate the tracking number client-side as a UI placeholder.
    // In production: the tracking number MUST come from the server after secure storage.
    const tracking = generateTrackingNumber();
    setTrackingNumber(tracking);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const copyTracking = () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(trackingNumber).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }).catch(() => fallbackCopy());
      } else {
        fallbackCopy();
      }
    } catch {
      fallbackCopy();
    }
  };

  const fallbackCopy = () => {
    const el = document.createElement("textarea");
    el.value = trackingNumber;
    el.style.position = "fixed";
    el.style.opacity = "0";
    document.body.appendChild(el);
    el.focus();
    el.select();
    try { document.execCommand("copy"); } catch { /* silent */ }
    document.body.removeChild(el);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetForm = () => {
    setFormActive(false); setStep(0); setSubmitted(false);
    setFormData({ mode: null, category: "", description: "", date: "", location: "", additionalInfo: "", contactName: "", contactEmail: "", contactPhone: "" });
    setFiles([]); setCaptchaVerified(false); setSubmitError(null); setTrackingNumber("");
  };

  const canProceed = () => {
    if (step === 0) return formData.mode !== null;
    if (step === 1) return formData.category !== "";
    if (step === 2) return formData.description.trim().length >= 20;
    if (step === 3) return true;
    if (step === 4) return true;
    if (step === 5) return captchaVerified && !isSubmitting;
    return true;
  };

  const selectedCategory = REPORT_CATEGORIES.find(c => c.id === formData.category);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 bg-[#051535] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C9A55C]/4 blur-3xl" />
        </div>
        <div className="relative max-w-[900px] mx-auto px-6 md:px-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#C9A55C]/10 border border-[#C9A55C]/25 rounded-full mb-6">
            <Lock size={13} className="text-[#C9A55C]" />
            <span className="text-[#C9A55C] text-xs font-bold uppercase tracking-widest font-['JetBrains_Mono']">Canal Confidencial</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white font-['Plus_Jakarta_Sans'] mb-4 leading-tight">
            Tu información puede<br />
            <span className="text-[#C9A55C]">salvar vidas.</span>
          </h1>
          <p className="text-[#C8D8F0] text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8 font-['Plus_Jakarta_Sans']">
            Canal seguro para aportar información relevante para la seguridad nacional de la República Dominicana.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={startForm}
              className="flex items-center justify-center gap-2 px-7 py-3.5 bg-[#C9A55C] hover:bg-[#D4B567] text-[#071D49] font-bold text-sm rounded-xl uppercase tracking-widest font-['Plus_Jakarta_Sans'] transition-all shadow-[0_0_24px_rgba(201,165,92,0.25)]"
            >
              <Lock size={15} />
              Reportar información
            </button>
            <a
              href="#que-reportar"
              className="flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 hover:border-[#C9A55C]/50 text-[#C8D8F0] hover:text-[#C9A55C] font-semibold text-sm rounded-xl font-['Plus_Jakarta_Sans'] transition-all"
            >
              ¿Qué información puedo reportar?
              <ChevronDown size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── Important notice ── */}
      <div className="bg-[#071D49] border-y border-[#C9A55C]/20 py-5">
        <div className="max-w-[1000px] mx-auto px-6 md:px-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#C9A55C]/10 border border-[#C9A55C]/25 flex items-center justify-center shrink-0">
              <AlertTriangle size={18} className="text-[#C9A55C]" />
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-sm font-['Plus_Jakarta_Sans'] mb-0.5">Este no es un sistema de querellas comunes.</p>
              <p className="text-[#8FA4C8] text-sm font-['Plus_Jakarta_Sans']">
                Para denunciar delitos ordinarios o emergencias, contacta al <strong className="text-[#C8D8F0]">9-1-1</strong> o a la <strong className="text-[#C8D8F0]">Policía Nacional</strong>. Este canal es exclusivamente para información relevante a la seguridad nacional.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a href="tel:911" className="flex items-center gap-1.5 px-3 py-1.5 bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-bold rounded-lg font-['JetBrains_Mono'] hover:bg-red-500/25 transition-all">
                <Phone size={11} /> 9-1-1
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── What to report ── */}
      <section id="que-reportar" className="py-16 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <SectionLabel>Orientación</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#071D49] font-['Plus_Jakarta_Sans']">¿Qué puedes reportar?</h2>
            <p className="text-[#071D49]/55 mt-3 text-sm max-w-lg mx-auto font-['Plus_Jakarta_Sans']">
              Este canal está diseñado para recibir información sobre amenazas a la seguridad del Estado dominicano.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {REPORT_CATEGORIES.map((cat) => (
              <div key={cat.id} className="p-6 bg-[#F5F7FA] border border-[#071D49]/10 rounded-xl hover:border-[#C9A55C]/35 hover:shadow-sm transition-all group">
                <div className="w-11 h-11 rounded-xl bg-[#C9A55C]/10 flex items-center justify-center text-[#C9A55C] mb-4 group-hover:bg-[#C9A55C]/20 transition-colors">
                  {cat.icon}
                </div>
                <h3 className="text-[#071D49] font-bold text-sm mb-2 font-['Plus_Jakarta_Sans']">{cat.label}</h3>
                <p className="text-[#071D49]/55 text-xs leading-relaxed font-['Plus_Jakarta_Sans']">{cat.desc}</p>
              </div>
            ))}
            <div className="p-6 bg-[#F5F7FA] border border-[#071D49]/10 rounded-xl flex flex-col justify-center items-center text-center">
              <p className="text-[#071D49]/55 text-xs font-['Plus_Jakarta_Sans'] mb-2">¿No encuentras tu categoría?</p>
              <p className="text-[#071D49]/75 text-sm font-semibold font-['Plus_Jakarta_Sans']">Selecciona la más cercana al describir la situación.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What NOT to report ── */}
      <section className="py-14 bg-[#051535]">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <div className="text-center mb-8">
            <SectionLabel>Importante</SectionLabel>
            <h2 className="text-2xl font-extrabold text-white font-['Plus_Jakarta_Sans']">¿Qué NO debes reportar aquí?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { label: "Delitos comunes", desc: "Robos, asaltos, riñas, accidentes. Llama al 9-1-1 o visita la Policía Nacional.", redirect: "9-1-1", tel: "tel:911" },
              { label: "Emergencias médicas", desc: "Accidentes, heridas, enfermedades. Llama inmediatamente al 9-1-1.", redirect: "9-1-1", tel: "tel:911" },
              { label: "Quejas de servicios", desc: "Para quejas sobre servicios públicos o instituciones, usa los canales de contacto correspondientes.", redirect: "Contacto general", tel: "/contacto" },
            ].map((item) => (
              <div key={item.label} className="p-5 bg-[#071D49] border border-red-500/15 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle size={16} className="text-red-400 shrink-0" />
                  <span className="text-white font-bold text-sm font-['Plus_Jakarta_Sans']">{item.label}</span>
                </div>
                <p className="text-[#8FA4C8] text-xs leading-relaxed font-['Plus_Jakarta_Sans'] mb-4">{item.desc}</p>
                <a href={item.tel} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-bold rounded-lg font-['JetBrains_Mono'] hover:bg-red-500/20 transition-all">
                  <ArrowRight size={11} /> {item.redirect}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Confidentiality model ── */}
      <section className="py-16 md:py-20 bg-[#F5F7FA]">
        <div className="max-w-[800px] mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <SectionLabel>Privacidad</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#071D49] font-['Plus_Jakarta_Sans']">Anonimato garantizado</h2>
            <p className="text-[#071D49]/55 mt-3 text-sm max-w-lg mx-auto font-['Plus_Jakarta_Sans']">
              Puedes reportar información sin revelar tu identidad. Elige cómo deseas proceder.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="p-6 bg-white border border-[#071D49]/10 rounded-xl shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-[#C9A55C]/10 flex items-center justify-center text-[#C9A55C] mb-4">
                <EyeOff size={22} />
              </div>
              <h3 className="text-[#071D49] font-extrabold text-base mb-2 font-['Plus_Jakarta_Sans']">Reporte anónimo</h3>
              <p className="text-[#071D49]/65 text-sm leading-relaxed font-['Plus_Jakarta_Sans'] mb-4">
                No se te pedirá ningún dato personal. Al finalizar recibirás un número de seguimiento para consultar el estado de tu reporte.
              </p>
              <ul className="space-y-1.5">
                {["Sin nombre ni datos personales", "Número de seguimiento generado", "Envío cifrado", "Acceso solo al personal autorizado"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-xs text-[#071D49]/65 font-['Plus_Jakarta_Sans']">
                    <CheckCircle size={12} className="text-[#C9A55C] shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-white border border-[#071D49]/10 rounded-xl shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-[#071D49]/8 flex items-center justify-center text-[#071D49] mb-4">
                <Eye size={22} />
              </div>
              <h3 className="text-[#071D49] font-extrabold text-base mb-2 font-['Plus_Jakarta_Sans']">Reporte identificado</h3>
              <p className="text-[#071D49]/65 text-sm leading-relaxed font-['Plus_Jakarta_Sans'] mb-4">
                Puedes proporcionar tus datos de contacto de forma voluntaria. Esto permite que la DNI pueda contactarte si necesita información adicional.
              </p>
              <ul className="space-y-1.5">
                {["Datos de contacto opcionales", "Facilita el seguimiento del caso", "Información protegida legalmente", "Puede acelerar el procesamiento"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-xs text-[#071D49]/65 font-['Plus_Jakarta_Sans']">
                    <CheckCircle size={12} className="text-[#071D49]/30 shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center text-[#071D49]/45 text-xs mt-6 font-['Plus_Jakarta_Sans']">
            La elección es tuya. Ningún método de reporte es superior al otro.
          </p>
        </div>
      </section>

      {/* ── Usage guide ── */}
      <section className="py-16 md:py-20 bg-[#071D49]">
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <SectionLabel>Guía de Utilización</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">¿Cómo funciona el canal?</h2>
            <p className="text-[#8FA4C8] mt-3 text-sm max-w-lg mx-auto font-['Plus_Jakarta_Sans']">
              El proceso está diseñado para ser sencillo, seguro y accesible para cualquier ciudadano.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { n: "01", icon: <BookOpen size={18} />, title: "Infórmate", desc: "Lee la guía sobre qué información es relevante para la seguridad nacional antes de comenzar." },
              { n: "02", icon: <EyeOff size={18} />, title: "Elige tu modo", desc: "Decide si quieres reportar de forma anónima o proporcionar datos de contacto voluntariamente." },
              { n: "03", icon: <Shield size={18} />, title: "Selecciona la categoría", desc: "Identifica el tipo de información que deseas aportar entre las categorías disponibles." },
              { n: "04", icon: <FileText size={18} />, title: "Describe la situación", desc: "Proporciona una descripción clara y objetiva. Solo incluye lo que sabes con certeza." },
              { n: "05", icon: <Upload size={18} />, title: "Adjunta evidencia", desc: "Si dispones de archivos relevantes (imágenes, documentos), puedes adjuntarlos de forma segura." },
              { n: "06", icon: <CheckCircle size={18} />, title: "Recibe confirmación", desc: "Recibirás un número de seguimiento único que te permite verificar que tu reporte fue recibido." },
            ].map((step) => (
              <div key={step.n} className="flex gap-4 p-5 bg-[#051535] border border-[#C9A55C]/15 rounded-xl hover:border-[#C9A55C]/30 transition-all group">
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="w-9 h-9 rounded-full bg-[#C9A55C]/10 border border-[#C9A55C]/40 flex items-center justify-center text-[#C9A55C] group-hover:bg-[#C9A55C]/20 transition-colors">
                    {step.icon}
                  </div>
                  <span className="text-[#C9A55C]/50 text-[9px] font-bold font-['JetBrains_Mono']">{step.n}</span>
                </div>
                <div className="pt-1">
                  <h3 className="text-white font-bold text-sm mb-1 font-['Plus_Jakarta_Sans']">{step.title}</h3>
                  <p className="text-[#8FA4C8] text-xs leading-relaxed font-['Plus_Jakarta_Sans']">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── User responsibilities ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <SectionLabel>Responsabilidades</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#071D49] font-['Plus_Jakarta_Sans']">Responsabilidades del usuario</h2>
            <p className="text-[#071D49]/55 mt-3 text-sm max-w-lg mx-auto font-['Plus_Jakarta_Sans']">
              El uso responsable de este canal es fundamental para la eficacia de las labores de inteligencia nacional.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {[
              { icon: <CheckCircle size={18} />, color: "text-green-600", bg: "bg-green-500/8 border-green-500/20", title: "Proporciona información veraz", desc: "Reporta únicamente información que conozcas de primera mano o de la que tengas fundamento razonable. No especules ni inventes." },
              { icon: <CheckCircle size={18} />, color: "text-green-600", bg: "bg-green-500/8 border-green-500/20", title: "Usa el canal para su propósito", desc: "Este canal es exclusivo para información relevante a la seguridad nacional. No lo uses para quejas personales, conflictos vecinales u otros asuntos ordinarios." },
              { icon: <CheckCircle size={18} />, color: "text-green-600", bg: "bg-green-500/8 border-green-500/20", title: "Sé específico y objetivo", desc: "Proporciona detalles concretos: fechas, lugares, personas involucradas (si las conoces). Evita generalizaciones o suposiciones." },
              { icon: <CheckCircle size={18} />, color: "text-green-600", bg: "bg-green-500/8 border-green-500/20", title: "Guarda tu número de seguimiento", desc: "Una vez completado el envío, conserva el número de seguimiento que recibirás. Es tu único medio de referencia para ese reporte." },
            ].map((item) => (
              <div key={item.title} className={`flex gap-4 p-5 rounded-xl border ${item.bg}`}>
                <div className={`${item.color} shrink-0 mt-0.5`}>{item.icon}</div>
                <div>
                  <h3 className="text-[#071D49] font-bold text-sm mb-1 font-['Plus_Jakarta_Sans']">{item.title}</h3>
                  <p className="text-[#071D49]/60 text-xs leading-relaxed font-['Plus_Jakarta_Sans']">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-4 p-5 bg-[#F5F7FA] border border-[#071D49]/10 rounded-xl">
            <AlertOctagon size={20} className="text-[#C9A55C] shrink-0 mt-0.5" />
            <div>
              <h3 className="text-[#071D49] font-bold text-sm mb-1 font-['Plus_Jakarta_Sans']">Consecuencias del uso indebido</h3>
              <p className="text-[#071D49]/65 text-xs leading-relaxed font-['Plus_Jakarta_Sans']">
                El uso de este canal para presentar información falsa, difamatoria o malintencionada puede constituir una infracción legal conforme a la legislación dominicana vigente. La DNI se reserva el derecho de tomar las acciones correspondientes ante reportes de mala fe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Form flow ── */}
      <div ref={formRef} className="bg-[#051535]">
        {formActive && !submitted && (
          <div className="max-w-[720px] mx-auto px-6 md:px-10 py-14 md:py-20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#C9A55C]/10 border border-[#C9A55C]/25 rounded-full mb-4">
                <Lock size={12} className="text-[#C9A55C]" />
                <span className="text-[#C9A55C] text-[11px] font-bold uppercase tracking-widest font-['JetBrains_Mono']">Proceso de reporte seguro</span>
              </div>
              <StepIndicator current={step} />
            </div>

            <div className="p-6 md:p-8 bg-[#071D49] border border-white/8 rounded-2xl">

              {/* Step 0: Choose mode */}
              {step === 0 && (
                <div>
                  <h3 className="text-white font-extrabold text-lg font-['Plus_Jakarta_Sans'] mb-2">¿Cómo deseas reportar?</h3>
                  <p className="text-[#8FA4C8] text-sm font-['Plus_Jakarta_Sans'] mb-6">Elige cómo quieres identificarte. Ambas opciones son seguras.</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { id: "anonymous" as ReportMode, icon: <EyeOff size={24} />, label: "Anónimamente", sub: "Sin datos personales · Número de seguimiento generado" },
                      { id: "identified" as ReportMode, icon: <Eye size={24} />, label: "Con mis datos", sub: "Datos de contacto opcionales · Facilita seguimiento" },
                    ].map(opt => (
                      <button
                        key={opt.id!}
                        onClick={() => setFormData(d => ({ ...d, mode: opt.id }))}
                        className={`text-left p-5 rounded-xl border transition-all ${
                          formData.mode === opt.id
                            ? "border-[#C9A55C] bg-[#C9A55C]/8"
                            : "border-white/12 hover:border-white/25 bg-[#051535]"
                        }`}
                      >
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                          formData.mode === opt.id ? "bg-[#C9A55C]/15 text-[#C9A55C]" : "bg-white/5 text-[#8FA4C8]"
                        }`}>{opt.icon}</div>
                        <div className={`font-bold text-sm mb-1 font-['Plus_Jakarta_Sans'] ${formData.mode === opt.id ? "text-[#C9A55C]" : "text-white"}`}>{opt.label}</div>
                        <div className="text-[#8FA4C8] text-xs font-['Plus_Jakarta_Sans']">{opt.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 1: Category */}
              {step === 1 && (
                <div>
                  <h3 className="text-white font-extrabold text-lg font-['Plus_Jakarta_Sans'] mb-2">Tipo de información</h3>
                  <p className="text-[#8FA4C8] text-sm font-['Plus_Jakarta_Sans'] mb-6">Selecciona la categoría que mejor describe la información que deseas aportar.</p>
                  <div className="space-y-3">
                    {REPORT_CATEGORIES.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => setFormData(d => ({ ...d, category: cat.id }))}
                        className={`w-full text-left flex items-start gap-4 p-4 rounded-xl border transition-all ${
                          formData.category === cat.id
                            ? "border-[#C9A55C] bg-[#C9A55C]/8"
                            : "border-white/10 hover:border-white/25 bg-[#051535]"
                        }`}
                      >
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          formData.category === cat.id ? "bg-[#C9A55C]/15 text-[#C9A55C]" : "bg-white/5 text-[#8FA4C8]"
                        }`}>{cat.icon}</div>
                        <div>
                          <div className={`font-bold text-sm font-['Plus_Jakarta_Sans'] ${formData.category === cat.id ? "text-[#C9A55C]" : "text-white"}`}>{cat.label}</div>
                          <div className="text-[#8FA4C8] text-xs mt-0.5 font-['Plus_Jakarta_Sans']">{cat.desc}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Details */}
              {step === 2 && (
                <div>
                  <h3 className="text-white font-extrabold text-lg font-['Plus_Jakarta_Sans'] mb-2">Describe la información</h3>
                  <p className="text-[#8FA4C8] text-sm font-['Plus_Jakarta_Sans'] mb-6">Proporciona solo la información relevante. No incluyas datos que no sean necesarios.</p>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-[#C8D8F0] text-xs font-bold uppercase tracking-wider font-['JetBrains_Mono'] mb-2">
                        Descripción <span className="text-[#C9A55C]">*</span>
                      </label>
                      <textarea
                        value={formData.description}
                        onChange={e => setFormData(d => ({ ...d, description: e.target.value }))}
                        rows={5}
                        placeholder="Describe la información de forma clara y precisa. Incluye qué ocurrió, quiénes están involucrados (si lo sabes), y por qué crees que es relevante para la seguridad nacional."
                        className="w-full bg-[#051535] border border-white/12 focus:border-[#C9A55C]/60 rounded-xl px-4 py-3 text-[#C8D8F0] text-sm placeholder-[#8FA4C8]/50 font-['Plus_Jakarta_Sans'] outline-none transition-colors resize-none"
                      />
                      <p className="text-[#8FA4C8]/50 text-[10px] mt-1 font-['Plus_Jakarta_Sans']">Mínimo 20 caracteres · {formData.description.length} escritos</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#C8D8F0] text-xs font-bold uppercase tracking-wider font-['JetBrains_Mono'] mb-2">Fecha aproximada</label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={e => setFormData(d => ({ ...d, date: e.target.value }))}
                          className="w-full bg-[#051535] border border-white/12 focus:border-[#C9A55C]/60 rounded-xl px-4 py-3 text-[#C8D8F0] text-sm font-['Plus_Jakarta_Sans'] outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[#C8D8F0] text-xs font-bold uppercase tracking-wider font-['JetBrains_Mono'] mb-2">Localización (opcional)</label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={e => setFormData(d => ({ ...d, location: e.target.value }))}
                          placeholder="Ciudad, provincia o lugar"
                          className="w-full bg-[#051535] border border-white/12 focus:border-[#C9A55C]/60 rounded-xl px-4 py-3 text-[#C8D8F0] text-sm placeholder-[#8FA4C8]/50 font-['Plus_Jakarta_Sans'] outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[#C8D8F0] text-xs font-bold uppercase tracking-wider font-['JetBrains_Mono'] mb-2">Información adicional (opcional)</label>
                      <textarea
                        value={formData.additionalInfo}
                        onChange={e => setFormData(d => ({ ...d, additionalInfo: e.target.value }))}
                        rows={3}
                        placeholder="Cualquier otro detalle relevante..."
                        className="w-full bg-[#051535] border border-white/12 focus:border-[#C9A55C]/60 rounded-xl px-4 py-3 text-[#C8D8F0] text-sm placeholder-[#8FA4C8]/50 font-['Plus_Jakarta_Sans'] outline-none transition-colors resize-none"
                      />
                    </div>
                    {formData.mode === "identified" && (
                      <div className="pt-4 border-t border-white/8">
                        <p className="text-[#C9A55C] text-xs font-bold uppercase tracking-wider font-['JetBrains_Mono'] mb-4">Datos de contacto (opcionales)</p>
                        <div className="space-y-4">
                          <input type="text" value={formData.contactName} onChange={e => setFormData(d => ({ ...d, contactName: e.target.value }))} placeholder="Nombre completo (opcional)" className="w-full bg-[#051535] border border-white/12 focus:border-[#C9A55C]/60 rounded-xl px-4 py-3 text-[#C8D8F0] text-sm placeholder-[#8FA4C8]/50 font-['Plus_Jakarta_Sans'] outline-none transition-colors" />
                          <input type="email" value={formData.contactEmail} onChange={e => setFormData(d => ({ ...d, contactEmail: e.target.value }))} placeholder="Correo electrónico (opcional)" className="w-full bg-[#051535] border border-white/12 focus:border-[#C9A55C]/60 rounded-xl px-4 py-3 text-[#C8D8F0] text-sm placeholder-[#8FA4C8]/50 font-['Plus_Jakarta_Sans'] outline-none transition-colors" />
                          <input type="tel" value={formData.contactPhone} onChange={e => setFormData(d => ({ ...d, contactPhone: e.target.value }))} placeholder="Teléfono (opcional)" className="w-full bg-[#051535] border border-white/12 focus:border-[#C9A55C]/60 rounded-xl px-4 py-3 text-[#C8D8F0] text-sm placeholder-[#8FA4C8]/50 font-['Plus_Jakarta_Sans'] outline-none transition-colors" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 3: Attachments */}
              {step === 3 && (
                <div>
                  <h3 className="text-white font-extrabold text-lg font-['Plus_Jakarta_Sans'] mb-2">Archivos adjuntos</h3>
                  <p className="text-[#8FA4C8] text-sm font-['Plus_Jakarta_Sans'] mb-6">Este paso es opcional. Adjunta evidencia o documentos que consideres relevantes.</p>
                  <FileUploadZone
                    files={files}
                    onAdd={newFiles => setFiles(f => [...f, ...newFiles])}
                    onRemove={i => setFiles(f => f.filter((_, idx) => idx !== i))}
                  />
                  <p className="text-[#8FA4C8]/50 text-xs mt-4 font-['Plus_Jakarta_Sans']">
                    Los archivos adjuntos serán procesados de forma segura. No compartas archivos que contengan malware u otro contenido dañino.
                  </p>
                </div>
              )}

              {/* Step 4: Review */}
              {step === 4 && (
                <div>
                  <h3 className="text-white font-extrabold text-lg font-['Plus_Jakarta_Sans'] mb-2">Revisa tu reporte</h3>
                  <p className="text-[#8FA4C8] text-sm font-['Plus_Jakarta_Sans'] mb-6">Verifica la información antes de enviarla. Puedes regresar para hacer cambios.</p>
                  <div className="space-y-4">
                    {[
                      { label: "Modo de reporte", value: formData.mode === "anonymous" ? "Anónimo" : "Identificado" },
                      { label: "Categoría", value: selectedCategory?.label ?? "—" },
                      { label: "Descripción", value: formData.description || "—" },
                      { label: "Fecha", value: formData.date || "No especificada" },
                      { label: "Localización", value: formData.location || "No especificada" },
                      ...(files.length > 0 ? [{ label: "Archivos", value: `${files.length} archivo(s)` }] : []),
                      ...(formData.mode === "identified" && formData.contactEmail ? [{ label: "Correo de contacto", value: formData.contactEmail }] : []),
                    ].map(row => (
                      <div key={row.label} className="flex gap-4 p-3 bg-[#051535] rounded-lg">
                        <span className="text-[#8FA4C8] text-xs font-bold uppercase tracking-wider font-['JetBrains_Mono'] w-32 shrink-0 pt-0.5">{row.label}</span>
                        <span className="text-[#C8D8F0] text-sm font-['Plus_Jakarta_Sans'] break-words flex-1">{row.value}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    className="mt-4 flex items-center gap-1.5 text-[#8FA4C8] hover:text-[#C9A55C] text-xs font-['Plus_Jakarta_Sans'] transition-colors"
                  >
                    <RefreshCw size={11} /> Editar información
                  </button>
                </div>
              )}

              {/* Step 5: CAPTCHA + Submit */}
              {step === 5 && (
                <div>
                  <h3 className="text-white font-extrabold text-lg font-['Plus_Jakarta_Sans'] mb-2">Verificación y envío</h3>
                  <p className="text-[#8FA4C8] text-sm font-['Plus_Jakarta_Sans'] mb-6">Completa la verificación de seguridad para enviar tu reporte.</p>

                  <CaptchaPlaceholder verified={captchaVerified} onVerify={() => setCaptchaVerified(true)} />

                  <div className="mt-4">
                    <button
                      onClick={() => setPrivacyOpen(!privacyOpen)}
                      className="flex items-center gap-2 text-[#8FA4C8] text-xs font-['Plus_Jakarta_Sans'] hover:text-[#C8D8F0] transition-colors"
                    >
                      {privacyOpen ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                      Información sobre privacidad y seguridad
                    </button>
                    {privacyOpen && (
                      <div className="mt-3 p-4 bg-[#051535] rounded-xl border border-white/8">
                        <p className="text-[#8FA4C8] text-xs leading-relaxed font-['Plus_Jakarta_Sans']">
                          La información aportada será tratada de forma confidencial por el personal autorizado de la DNI, conforme a la Ley No. 1-24 del Sistema Nacional de Inteligencia y la normativa de protección de datos aplicable. El canal está protegido mediante cifrado y medidas técnicas de seguridad. Los datos de contacto, si se proporcionaron, solo serán usados para dar seguimiento al reporte.
                        </p>
                      </div>
                    )}
                  </div>

                  {submitError && (
                    <div className="mt-4 flex items-center gap-3 p-4 bg-red-500/8 border border-red-500/25 rounded-xl">
                      <XCircle size={16} className="text-red-400 shrink-0" />
                      <p className="text-red-300 text-sm font-['Plus_Jakarta_Sans']">{submitError}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/8">
                <button
                  onClick={goBack}
                  className="flex items-center gap-2 px-4 py-2.5 border border-white/15 hover:border-white/30 text-[#8FA4C8] hover:text-white text-sm font-semibold rounded-xl font-['Plus_Jakarta_Sans'] transition-all"
                >
                  ← {step === 0 ? "Cancelar" : "Anterior"}
                </button>

                {step < 5 ? (
                  <button
                    onClick={() => setStep(s => s + 1)}
                    disabled={!canProceed()}
                    className="flex items-center gap-2 px-6 py-2.5 bg-[#C9A55C] hover:bg-[#D4B567] disabled:opacity-40 disabled:cursor-not-allowed text-[#071D49] text-sm font-bold rounded-xl font-['Plus_Jakarta_Sans'] transition-all"
                  >
                    Continuar <ArrowRight size={14} />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!canProceed() || isSubmitting}
                    className="flex items-center gap-2 px-6 py-2.5 bg-[#C9A55C] hover:bg-[#D4B567] disabled:opacity-40 disabled:cursor-not-allowed text-[#071D49] text-sm font-bold rounded-xl font-['Plus_Jakarta_Sans'] transition-all"
                  >
                    {isSubmitting ? (
                      <><RefreshCw size={14} className="animate-spin" /> Enviando de forma segura...</>
                    ) : (
                      <><Lock size={14} /> Enviar información</>
                    )}
                  </button>
                )}
              </div>
            </div>

            <SecurityBadge />
          </div>
        )}

        {/* ── Success screen ── */}
        {submitted && (
          <div className="max-w-[600px] mx-auto px-6 md:px-10 py-20 text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-green-400" />
            </div>
            <h2 className="text-white text-2xl font-extrabold font-['Plus_Jakarta_Sans'] mb-2">Información recibida</h2>
            <p className="text-[#8FA4C8] text-sm font-['Plus_Jakarta_Sans'] mb-8">Tu información ha sido recibida de forma segura. Será revisada por el personal autorizado de la DNI.</p>

            <div className="p-6 bg-[#071D49] border border-[#C9A55C]/25 rounded-2xl mb-6">
              <p className="text-[#8FA4C8] text-xs uppercase tracking-widest font-['JetBrains_Mono'] mb-2">Número de seguimiento</p>
              <p className="text-[#C9A55C] text-2xl font-extrabold font-['JetBrains_Mono'] tracking-wider mb-3">{trackingNumber}</p>
              <p className="text-[#8FA4C8] text-xs font-['Plus_Jakarta_Sans'] mb-4">Conserva este número para consultar el estado de tu reporte.</p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={copyTracking}
                  className="flex items-center gap-2 px-4 py-2 bg-[#C9A55C]/15 border border-[#C9A55C]/30 hover:bg-[#C9A55C]/25 text-[#C9A55C] text-xs font-bold rounded-lg font-['Plus_Jakarta_Sans'] transition-all"
                >
                  {copied ? <><Check size={12} /> Copiado</> : <><Copy size={12} /> Copiar número</>}
                </button>
              </div>
            </div>

            <div className="p-4 bg-[#071D49]/50 border border-white/8 rounded-xl mb-6 text-left">
              <p className="text-[#8FA4C8] text-xs font-['Plus_Jakarta_Sans'] leading-relaxed">
                <strong className="text-[#C8D8F0]">Nota importante:</strong> La generación del número de seguimiento en producción se realizará en el servidor tras la recepción segura del reporte. La implementación del backend (cifrado E2E, almacenamiento seguro y consulta de seguimiento) se activa en la siguiente fase del proyecto.
              </p>
            </div>

            <button
              onClick={resetForm}
              className="px-6 py-3 border border-white/20 hover:border-[#C9A55C]/50 text-[#8FA4C8] hover:text-[#C9A55C] text-sm font-semibold rounded-xl font-['Plus_Jakarta_Sans'] transition-all"
            >
              Volver al Canal Confidencial
            </button>
          </div>
        )}

        {/* ── CTA strip (when form not active) ── */}
        {!formActive && !submitted && (
          <div className="py-16 md:py-20">
            <div className="max-w-[700px] mx-auto px-6 md:px-10 text-center">
              <SectionLabel>Actúa ahora</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans'] mb-4">¿Tienes información relevante?</h2>
              <p className="text-[#8FA4C8] mb-8 font-['Plus_Jakarta_Sans']">
                Tu aportación puede contribuir a proteger a la República Dominicana. El proceso es seguro, confidencial y puede realizarse de forma anónima.
              </p>
              <button
                onClick={startForm}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A55C] hover:bg-[#D4B567] text-[#071D49] font-bold text-sm rounded-xl uppercase tracking-widest font-['Plus_Jakarta_Sans'] transition-all shadow-[0_0_24px_rgba(201,165,92,0.2)]"
              >
                <Lock size={15} />
                Reportar información
              </button>
              <p className="text-[#8FA4C8]/45 text-xs mt-5 font-['Plus_Jakarta_Sans']">
                Para emergencias o delitos comunes llama al{" "}
                <a href="tel:911" className="text-red-400 hover:underline">9-1-1</a>
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ── Quick links ── */}
      <section className="py-10 bg-white border-t border-[#071D49]/8">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="text-[#071D49]/45 text-xs uppercase tracking-widest font-['JetBrains_Mono'] mb-4">También puede visitar</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Inicio", to: "/" },
              { label: "Sobre Nosotros", to: "/sobre-nosotros" },
              { label: "Marco Legal", to: "/marco-legal" },
              { label: "Contacto", to: "/contacto" },
              { label: "Trabaja con Nosotros", to: "/trabaja-con-nosotros" },
            ].map(link => (
              <Link key={link.to} to={link.to} className="px-4 py-2 border border-[#071D49]/12 hover:border-[#C9A55C]/50 hover:bg-[#C9A55C]/5 text-[#071D49]/70 hover:text-[#C9A55C] text-xs font-semibold rounded-lg font-['Plus_Jakarta_Sans'] transition-all">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
