import { useState, useRef } from "react";
import { Link, useSearchParams } from "react-router";
import {
  CheckCircle, ChevronDown, ChevronUp,
  Flag, Star, Award, Target, Zap, Shield,
  Upload, AlertCircle, Loader2, Send, X, FileText, Image,
  ArrowLeft, RefreshCw,
  Brain, Lock, Globe, Search, UserCheck, GraduationCap,
} from "lucide-react";
import { PageHero, SectionLabel, cn } from "../components/shared";
import { supabase, isSupabaseConfigured } from "../../lib/supabase";

// ─── Area slug → label mapping ────────────────────────────────────────────────

const AREA_LABELS: Record<string, string> = {
  "ciberseguridad": "Ciberseguridad",
  "criptografia-nacional": "Criptografía Nacional",
  "investigacion-ciberdelitos": "Investigación de Ciberdelitos",
  "inteligencia-estrategica": "Inteligencia Estratégica",
  "cooperacion-internacional": "Cooperación Internacional",
  "inteligencia-delictiva": "Inteligencia Delictiva",
  "inteligencia-prospectiva": "Inteligencia Prospectiva",
  "contrainteligencia": "Contrainteligencia",
};

// ─── Profiles ─────────────────────────────────────────────────────────────────

const PROFILES = [
  { icon: <Brain size={22} />, title: "Analistas de Inteligencia", desc: "Profesionales capaces de procesar información compleja, identificar patrones y producir análisis estratégicos de alto nivel." },
  { icon: <Lock size={22} />, title: "Ingenieros de Ciberseguridad", desc: "Especialistas en seguridad de sistemas, redes y comunicaciones, con experiencia en detección y respuesta a incidentes." },
  { icon: <Shield size={22} />, title: "Criptógrafos", desc: "Expertos en cifrado, seguridad matemática y protección de comunicaciones sensibles del Estado." },
  { icon: <Globe size={22} />, title: "Lingüistas", desc: "Profesionales con dominio de idiomas estratégicos para apoyar labores de análisis y coordinación internacional." },
  { icon: <Search size={22} />, title: "Especialistas OSINT", desc: "Analistas con capacidad para recopilar y procesar información de fuentes abiertas de forma sistemática y rigurosa." },
  { icon: <UserCheck size={22} />, title: "Psicólogos", desc: "Profesionales que apoyan procesos de evaluación, bienestar institucional y análisis de comportamiento." },
];

// ─── Selection process ────────────────────────────────────────────────────────

const SELECTION_STEPS = [
  { num: "01", title: "Convocatoria", desc: "Se publican las posiciones disponibles a través de los canales oficiales de la DNI. Cada convocatoria detalla los requisitos específicos del perfil buscado." },
  { num: "02", title: "Pruebas de competencia", desc: "Los candidatos realizan evaluaciones técnicas y de aptitud acordes a la posición. Las pruebas varían según el área y nivel del puesto." },
  { num: "03", title: "Verificación de antecedentes", desc: "Se realiza una verificación exhaustiva del historial personal, académico y profesional del candidato. Esta etapa es determinante en el proceso." },
  { num: "04", title: "Entrevistas", desc: "Los candidatos que superan las fases anteriores participan en entrevistas estructuradas con el equipo evaluador de la institución." },
  { num: "05", title: "Pruebas de integridad", desc: "Se aplican evaluaciones específicas para verificar la solidez ética y moral del candidato, conforme a los estándares institucionales." },
  { num: "06", title: "Formación institucional", desc: "Los candidatos seleccionados ingresan a un período de formación y adaptación a los procedimientos, valores y cultura institucional de la DNI." },
];

// ─── Requirements ─────────────────────────────────────────────────────────────

const REQUIREMENTS = [
  {
    icon: <Flag size={22} />,
    title: "Nacionalidad",
    desc: "Debe ser dominicano de nacimiento u origen.",
  },
  {
    icon: <Award size={22} />,
    title: "Mayor de edad",
    desc: "Ser mayor de edad y contar con su cédula de identidad.",
  },
  {
    icon: <Zap size={22} />,
    title: "Condiciones Físicas",
    desc: "Poseer las condiciones físicas necesarias para el puesto al cual esté aplicando.",
  },
  {
    icon: <Star size={22} />,
    title: "Ética",
    desc: "Cumplir con las condiciones éticas y morales que rigen el accionar de la institución.",
  },
  {
    icon: <Shield size={22} />,
    title: "Integridad",
    desc: "Pasar las pruebas de integridad de la institución.",
  },
  {
    icon: <Target size={22} />,
    title: "Aptitudes",
    desc: "Poseer las aptitudes y méritos académicos según la posición a la cual aplica.",
  },
];

// ─── Validation ───────────────────────────────────────────────────────────────

interface FormData {
  first_name: string;
  last_name: string;
  national_id: string;
  birth_date: string;
  email: string;
  phone: string;
  photo: File | null;
  cv: File | null;
  requirements_confirmed: boolean;
}

interface FormErrors {
  [key: string]: string;
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.first_name.trim()) errors.first_name = "El nombre es obligatorio.";
  if (!data.last_name.trim()) errors.last_name = "Los apellidos son obligatorios.";

  if (!data.national_id.trim()) {
    errors.national_id = "La cédula es obligatoria.";
  } else if (!/^\d{3}-?\d{7}-?\d$/.test(data.national_id.replace(/-/g, ""))) {
    errors.national_id = "Ingrese una cédula válida (formato 001-0000000-0).";
  }

  if (!data.birth_date) {
    errors.birth_date = "La fecha de nacimiento es obligatoria.";
  } else {
    const dob = new Date(data.birth_date);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear() -
      (today < new Date(today.getFullYear(), dob.getMonth(), dob.getDate()) ? 1 : 0);
    if (age < 18) errors.birth_date = "Debe ser mayor de 18 años para aplicar.";
  }

  if (!data.email.trim()) {
    errors.email = "El correo electrónico es obligatorio.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Ingrese un correo electrónico válido.";
  }

  if (!data.phone.trim()) {
    errors.phone = "El número de teléfono es obligatorio.";
  } else {
    const digits = data.phone.replace(/\D/g, "");
    if (digits.length !== 10 || !["809", "829", "849"].includes(digits.slice(0, 3))) {
      errors.phone = "Ingrese un número dominicano válido (809/829/849 + 7 dígitos).";
    }
  }

  if (!data.photo) {
    errors.photo = "La foto 2x2 es obligatoria.";
  } else {
    if (!["image/jpeg", "image/png", "image/webp"].includes(data.photo.type)) {
      errors.photo = "Solo se permiten imágenes JPG, PNG o WEBP.";
    } else if (data.photo.size > 5 * 1024 * 1024) {
      errors.photo = "La imagen no puede superar los 5 MB.";
    }
  }

  if (!data.cv) {
    errors.cv = "El currículum vitae es obligatorio.";
  } else {
    if (data.cv.type !== "application/pdf") {
      errors.cv = "El currículum debe estar en formato PDF.";
    } else if (data.cv.size > 10 * 1024 * 1024) {
      errors.cv = "El archivo no puede superar los 10 MB.";
    }
  }

  if (!data.requirements_confirmed) {
    errors.requirements_confirmed = "Debe confirmar que cumple los requisitos mínimos.";
  }

  return errors;
}

// ─── File Upload Field ────────────────────────────────────────────────────────

interface FileFieldProps {
  id: string;
  label: string;
  accept: string;
  acceptLabel: string;
  maxSizeLabel: string;
  icon: React.ReactNode;
  file: File | null;
  error?: string;
  onChange: (file: File | null) => void;
}

function FileField({ id, label, accept, acceptLabel, maxSizeLabel, icon, file, error, onChange }: FileFieldProps) {
  const ref = useRef<HTMLInputElement>(null);

  function formatSize(bytes: number) {
    return bytes < 1024 * 1024 ? `${(bytes / 1024).toFixed(0)} KB` : `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  return (
    <div data-error={error ? true : undefined}>
      <label className="block text-[#C8D8F0] text-sm font-semibold mb-1.5 font-['Plus_Jakarta_Sans']">
        {label} <span className="text-[#C9A55C]">*</span>
      </label>

      <input
        ref={ref}
        id={id}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => { onChange(e.target.files?.[0] ?? null); e.target.value = ""; }}
      />

      {file ? (
        <div className="flex items-center gap-3 px-4 py-3 bg-[#0A2560] border border-[#C9A55C]/30 rounded-lg">
          <div className="w-9 h-9 rounded-lg bg-[#C9A55C]/10 flex items-center justify-center text-[#C9A55C] shrink-0">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-xs font-semibold font-['Plus_Jakarta_Sans'] truncate">{file.name}</p>
            <p className="text-[#8FA4C8] text-[11px] font-['Plus_Jakarta_Sans'] mt-0.5">{formatSize(file.size)}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => ref.current?.click()}
              className="text-[11px] text-[#C9A55C] hover:text-[#D4B567] font-semibold font-['Plus_Jakarta_Sans'] transition-colors"
            >
              Cambiar
            </button>
            <button
              type="button"
              onClick={() => onChange(null)}
              className="w-6 h-6 rounded flex items-center justify-center text-[#8FA4C8] hover:text-red-400 hover:bg-red-400/10 transition-all"
              aria-label="Eliminar archivo"
            >
              <X size={13} />
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => ref.current?.click()}
          className={cn(
            "w-full flex flex-col items-center justify-center gap-2 px-4 py-5 border-2 border-dashed rounded-lg transition-all group",
            error
              ? "border-red-500/50 bg-red-500/5 hover:border-red-500/70"
              : "border-white/15 bg-transparent hover:border-[#C9A55C]/50 hover:bg-[#C9A55C]/5"
          )}
        >
          <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center transition-colors", error ? "bg-red-500/10 text-red-400" : "bg-white/8 text-[#C9A55C] group-hover:bg-[#C9A55C]/15")}>
            <Upload size={18} />
          </div>
          <div className="text-center">
            <p className={cn("text-sm font-semibold font-['Plus_Jakarta_Sans']", error ? "text-red-400" : "text-[#C8D8F0]")}>
              Seleccionar archivo
            </p>
            <p className="text-[#8FA4C8] text-xs mt-0.5 font-['Plus_Jakarta_Sans']">
              {acceptLabel} · Máx. {maxSizeLabel}
            </p>
          </div>
        </button>
      )}

      {error && (
        <p className="flex items-center gap-1.5 text-red-400 text-xs mt-1.5 font-['Plus_Jakarta_Sans']">
          <AlertCircle size={12} /> {error}
        </p>
      )}
    </div>
  );
}

// ─── Shared field helpers (must be outside ApplicationForm to avoid remount) ──

function inputCls(err?: string) {
  return cn(
    "w-full bg-[#071D49] border rounded-lg px-4 py-3 text-white text-sm placeholder-[#8FA4C8]/40 outline-none transition-all focus:ring-2 font-['Plus_Jakarta_Sans']",
    err
      ? "border-red-500/60 focus:ring-red-500/25"
      : "border-white/12 focus:border-[#C9A55C]/60 focus:ring-[#C9A55C]/20"
  );
}

function Field({
  id, label, required, error, children,
}: { id: string; label: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div data-error={error ? true : undefined}>
      <label htmlFor={id} className="block text-[#C8D8F0] text-sm font-semibold mb-1.5 font-['Plus_Jakarta_Sans']">
        {label} {required && <span className="text-[#C9A55C]">*</span>}
      </label>
      {children}
      {error && (
        <p className="flex items-center gap-1.5 text-red-400 text-xs mt-1.5 font-['Plus_Jakarta_Sans']">
          <AlertCircle size={12} /> {error}
        </p>
      )}
    </div>
  );
}

// ─── Application Form ─────────────────────────────────────────────────────────

function ApplicationForm({ originArea }: { originArea: string | null }) {
  const [form, setForm] = useState<FormData>({
    first_name: "", last_name: "", national_id: "", birth_date: "",
    email: "", phone: "", photo: null, cv: null, requirements_confirmed: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [referenceNumber, setReferenceNumber] = useState<string | null>(null);

  const set = <K extends keyof FormData>(field: K, value: FormData[K]) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const clearError = (field: string) =>
    setErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validation = validateForm(form);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      const firstEl = document.querySelector("[data-error]");
      firstEl?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setSubmitting(true);
    setSubmitError(null);

    if (!isSupabaseConfigured) {
      await new Promise((r) => setTimeout(r, 1400));
      setReferenceNumber(`DNI-${Date.now().toString(36).toUpperCase()}`);
      setSubmitted(true);
      setSubmitting(false);
      return;
    }

    try {
      const ref = `DNI-${Date.now().toString(36).toUpperCase()}`;
      let photo_path: string | null = null;
      let cv_path: string | null = null;

      if (form.photo) {
        const ext = form.photo.name.split(".").pop();
        const path = `photos/${ref}-photo.${ext}`;
        const { error } = await supabase!.storage.from("applications").upload(path, form.photo, { upsert: false });
        if (error) throw new Error("No fue posible subir la foto. Intente nuevamente.");
        photo_path = path;
      }

      if (form.cv) {
        const path = `cvs/${ref}-cv.pdf`;
        const { error } = await supabase!.storage.from("applications").upload(path, form.cv, { upsert: false });
        if (error) throw new Error("No fue posible subir el currículum. Intente nuevamente.");
        cv_path = path;
      }

      const { error: dbError } = await supabase!.from("applications").insert({
        reference_number: ref,
        first_name: form.first_name,
        last_name: form.last_name,
        national_id: form.national_id,
        birth_date: form.birth_date,
        email: form.email,
        phone: form.phone,
        origin_area: originArea ?? null,
        photo_path,
        cv_path,
        requirements_confirmed: form.requirements_confirmed,
        status: "received",
      });
      if (dbError) throw new Error("No fue posible enviar la solicitud. Intente nuevamente.");

      setReferenceNumber(ref);
      setSubmitted(true);
    } catch (err: unknown) {
      setSubmitError(err instanceof Error ? err.message : "Error inesperado. Intente nuevamente.");
    } finally {
      setSubmitting(false);
    }
  }

  // ── Success state ────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <div className="text-center py-12 px-6 max-w-lg mx-auto">
        <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={32} className="text-green-400" />
        </div>
        <h3 className="text-white text-2xl font-extrabold mb-3 font-['Plus_Jakarta_Sans']">
          Solicitud enviada correctamente.
        </h3>
        <p className="text-[#8FA4C8] mb-6 font-['Plus_Jakarta_Sans'] leading-relaxed">
          La información fue recibida exitosamente. Nuestro equipo evaluará su perfil y se comunicará con usted a través de los canales oficiales de la DNI.
        </p>
        {referenceNumber && (
          <div className="inline-flex flex-col items-center px-7 py-4 bg-[#C9A55C]/10 border border-[#C9A55C]/30 rounded-xl mb-8">
            <span className="text-[#8FA4C8] text-[11px] uppercase tracking-widest font-['JetBrains_Mono'] mb-1">Número de seguimiento</span>
            <span className="text-[#C9A55C] text-2xl font-extrabold font-['JetBrains_Mono']">{referenceNumber}</span>
            <span className="text-[#8FA4C8] text-xs mt-1 font-['Plus_Jakarta_Sans']">Conserve este número para futuras consultas</span>
          </div>
        )}
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A55C] hover:bg-[#D4B567] text-[#071D49] font-bold text-sm rounded-lg uppercase tracking-wider font-['Plus_Jakarta_Sans'] transition-all"
        >
          <ArrowLeft size={15} />
          Volver al sitio
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">

      {/* Origin area badge (read-only context) */}
      {originArea && AREA_LABELS[originArea] && (
        <div className="flex items-center gap-3 px-4 py-3 bg-[#C9A55C]/8 border border-[#C9A55C]/25 rounded-lg">
          <div className="w-1.5 h-1.5 rounded-full bg-[#C9A55C] shrink-0" />
          <span className="text-[#C8D8F0] text-xs font-['Plus_Jakarta_Sans']">
            Solicitando aplicar al área de:{" "}
            <span className="text-[#C9A55C] font-bold">{AREA_LABELS[originArea]}</span>
          </span>
        </div>
      )}

      {/* Name row */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Field id="first_name" label="Nombres" required error={errors.first_name}>
          <input
            id="first_name" type="text" placeholder="Juan"
            value={form.first_name}
            onChange={(e) => { set("first_name", e.target.value); clearError("first_name"); }}
            className={inputCls(errors.first_name)}
          />
        </Field>
        <Field id="last_name" label="Apellidos" required error={errors.last_name}>
          <input
            id="last_name" type="text" placeholder="Pérez García"
            value={form.last_name}
            onChange={(e) => { set("last_name", e.target.value); clearError("last_name"); }}
            className={inputCls(errors.last_name)}
          />
        </Field>
      </div>

      {/* ID + DOB row */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Field id="national_id" label="Cédula de identidad" required error={errors.national_id}>
          <input
            id="national_id" type="text" placeholder="001-0000000-0"
            value={form.national_id}
            onChange={(e) => { set("national_id", e.target.value); clearError("national_id"); }}
            className={inputCls(errors.national_id)}
          />
        </Field>
        <Field id="birth_date" label="Fecha de nacimiento" required error={errors.birth_date}>
          <input
            id="birth_date" type="date"
            value={form.birth_date}
            onChange={(e) => { set("birth_date", e.target.value); clearError("birth_date"); }}
            className={inputCls(errors.birth_date)}
          />
        </Field>
      </div>

      {/* Contact row */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Field id="email" label="Correo electrónico" required error={errors.email}>
          <input
            id="email" type="email" placeholder="correo@ejemplo.com"
            value={form.email}
            onChange={(e) => { set("email", e.target.value); clearError("email"); }}
            className={inputCls(errors.email)}
          />
        </Field>
        <Field id="phone" label="Número de teléfono" required error={errors.phone}>
          <input
            id="phone" type="tel" placeholder="809-000-0000"
            value={form.phone}
            onChange={(e) => { set("phone", e.target.value); clearError("phone"); }}
            className={inputCls(errors.phone)}
          />
        </Field>
      </div>

      {/* File uploads */}
      <div className="grid sm:grid-cols-2 gap-4">
        <FileField
          id="photo"
          label="Foto 2x2"
          accept="image/jpeg,image/png,image/webp"
          acceptLabel="JPG, PNG o WEBP"
          maxSizeLabel="5 MB"
          icon={<Image size={18} />}
          file={form.photo}
          error={errors.photo}
          onChange={(f) => { set("photo", f); clearError("photo"); }}
        />
        <FileField
          id="cv"
          label="Currículum Vitae"
          accept="application/pdf"
          acceptLabel="PDF"
          maxSizeLabel="10 MB"
          icon={<FileText size={18} />}
          file={form.cv}
          error={errors.cv}
          onChange={(f) => { set("cv", f); clearError("cv"); }}
        />
      </div>

      {/* Confirmation checkbox */}
      <div data-error={errors.requirements_confirmed ? true : undefined}>
        <button
          type="button"
          onClick={() => { set("requirements_confirmed", !form.requirements_confirmed); clearError("requirements_confirmed"); }}
          className="flex items-start gap-3 text-left group w-full"
        >
          <div className={cn(
            "mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-all",
            form.requirements_confirmed
              ? "bg-[#C9A55C] border-[#C9A55C]"
              : errors.requirements_confirmed
                ? "border-red-500/70 hover:border-[#C9A55C]/60"
                : "border-white/30 hover:border-[#C9A55C]/60"
          )}>
            {form.requirements_confirmed && <CheckCircle size={13} className="text-[#071D49]" />}
          </div>
          <span className="text-[#C8D8F0] text-sm leading-relaxed font-['Plus_Jakarta_Sans']">
            Confirmo que cumplo con los requisitos mínimos establecidos.{" "}
            <span className="text-[#C9A55C]">*</span>
          </span>
        </button>
        {errors.requirements_confirmed && (
          <p className="flex items-center gap-1.5 text-red-400 text-xs mt-2 font-['Plus_Jakarta_Sans']">
            <AlertCircle size={12} /> {errors.requirements_confirmed}
          </p>
        )}
      </div>

      {/* Submission error */}
      {submitError && (
        <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
          <AlertCircle size={18} className="text-red-400 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-red-300 text-sm font-['Plus_Jakarta_Sans']">{submitError}</p>
            <button
              type="button"
              onClick={() => setSubmitError(null)}
              className="flex items-center gap-1.5 text-red-400 hover:text-red-300 text-xs mt-2 font-semibold font-['Plus_Jakarta_Sans'] transition-colors"
            >
              <RefreshCw size={11} /> Intentar nuevamente
            </button>
          </div>
        </div>
      )}

      {/* Submit */}
      <div className="pt-1">
        <button
          type="submit"
          disabled={submitting}
          className="w-full flex items-center justify-center gap-2.5 py-4 bg-[#C9A55C] hover:bg-[#D4B567] disabled:opacity-60 disabled:cursor-not-allowed text-[#071D49] font-extrabold text-sm rounded-xl transition-all tracking-widest uppercase font-['Plus_Jakarta_Sans'] shadow-[0_4px_20px_rgba(201,165,92,0.2)]"
        >
          {submitting
            ? <><Loader2 size={17} className="animate-spin" /> Enviando solicitud...</>
            : <><Send size={15} /> Enviar Solicitud</>
          }
        </button>

        {/* Privacy notice */}
        <p className="text-[#8FA4C8] text-xs text-center mt-3 leading-relaxed font-['Plus_Jakarta_Sans']">
          La información proporcionada es de carácter confidencial y será utilizada
          exclusivamente para fines del proceso de postulación, conforme a las
          disposiciones legales vigentes en materia de protección de datos personales.
        </p>
      </div>
    </form>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: "¿Quién puede aplicar a la DNI?",
    a: "Pueden aplicar ciudadanos dominicanos de nacimiento u origen, mayores de edad con cédula de identidad vigente, que cumplan con todos los requisitos mínimos establecidos. [RESPUESTA OFICIAL DNI — completar con condiciones adicionales]"
  },
  {
    q: "¿Cuáles son los pasos del proceso de selección?",
    a: "El proceso incluye: convocatoria pública, pruebas de competencia, verificación de antecedentes, entrevistas, pruebas de integridad y período de formación institucional. Cada etapa es eliminatoria. [RESPUESTA OFICIAL DNI]"
  },
  {
    q: "¿Qué ocurre después de enviar mi solicitud?",
    a: "Recibirá una confirmación con un número de seguimiento. Si su perfil es seleccionado para avanzar, será contactado por los canales oficiales de la DNI. [RESPUESTA OFICIAL DNI — especificar plazos]"
  },
  {
    q: "¿Qué documentos adicionales debo presentar?",
    a: "Además de los requeridos en el formulario, podrían solicitarse certificados académicos, antecedentes penales y otros documentos según la posición. [RESPUESTA OFICIAL DNI]"
  },
  {
    q: "¿Cómo se protege la información que proporciono?",
    a: "Toda la información suministrada es tratada con carácter confidencial y solo será utilizada para fines del proceso de postulación, conforme a las disposiciones legales vigentes. [RESPUESTA OFICIAL DNI]"
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("border rounded-xl overflow-hidden transition-all duration-200", open ? "border-[#C9A55C]/40" : "border-white/10 hover:border-white/20")}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
        aria-expanded={open}
      >
        <span className={cn("text-sm font-semibold font-['Plus_Jakarta_Sans'] transition-colors", open ? "text-[#C9A55C]" : "text-white")}>
          {q}
        </span>
        {open
          ? <ChevronUp size={15} className="text-[#C9A55C] shrink-0" />
          : <ChevronDown size={15} className="text-[#8FA4C8] shrink-0" />
        }
      </button>
      {open && (
        <div className="px-5 pb-4 border-t border-white/8 pt-4">
          <p className="text-[#8FA4C8] text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{a}</p>
        </div>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TrabajaConNosotros() {
  const [searchParams] = useSearchParams();
  const originArea = searchParams.get("from");
  const originLabel = originArea ? (AREA_LABELS[originArea] ?? null) : null;

  return (
    <>
      <PageHero
        label="Recursos Humanos"
        title="Trabaja con Nosotros"
        description={
          originLabel
            ? `Ha sido dirigido desde el área de ${originLabel}. Complete el formulario a continuación para iniciar su postulación.`
            : "Para iniciar un proceso de aplicación para formar parte de la DNI es necesario cumplir con los siguientes requisitos."
        }
        breadcrumbs={[
          ...(originArea ? [{ label: "Áreas de Trabajo", to: `/areas-de-trabajo/${originArea}` }] : []),
          { label: "Trabaja con Nosotros" },
        ]}
      />

      {/* Requirements section */}
      <section className="py-14 md:py-20 bg-[#071D49]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <SectionLabel>Requisitos</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              Requisitos mínimos para aplicar
            </h2>
            <p className="text-[#8FA4C8] mt-3 max-w-xl mx-auto text-sm font-['Plus_Jakarta_Sans']">
              Para iniciar un proceso de aplicación para formar parte de la DNI es necesario cumplir con los siguientes requisitos.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {REQUIREMENTS.map((r) => (
              <div
                key={r.title}
                className="flex gap-4 p-5 bg-[#051535] border border-[#C9A55C]/15 hover:border-[#C9A55C]/35 rounded-xl transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#C9A55C]/10 flex items-center justify-center text-[#C9A55C] shrink-0 group-hover:bg-[#C9A55C]/20 transition-colors">
                  {r.icon}
                </div>
                <div>
                  <div className="text-white font-bold text-sm mb-1 font-['Plus_Jakarta_Sans']">{r.title}</div>
                  <div className="text-[#8FA4C8] text-xs leading-relaxed font-['Plus_Jakarta_Sans']">{r.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profiles section */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <SectionLabel>Perfiles Buscados</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#071D49] font-['Plus_Jakarta_Sans']">
              ¿Cuál es tu perfil?
            </h2>
            <p className="text-[#071D49]/55 mt-3 max-w-xl mx-auto text-sm font-['Plus_Jakarta_Sans']">
              La DNI busca profesionales con vocación de servicio, integridad y capacidades especializadas en distintas disciplinas.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROFILES.map((p) => (
              <div
                key={p.title}
                className="group p-6 bg-[#F5F7FA] border border-[#071D49]/10 hover:border-[#C9A55C]/40 rounded-xl transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-[#C9A55C]/10 flex items-center justify-center text-[#C9A55C] mb-4 group-hover:bg-[#C9A55C]/20 transition-colors">
                  {p.icon}
                </div>
                <h3 className="text-[#071D49] font-bold text-sm mb-2 font-['Plus_Jakarta_Sans']">{p.title}</h3>
                <p className="text-[#071D49]/60 text-xs leading-relaxed font-['Plus_Jakarta_Sans']">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#071D49]/40 text-xs mt-8 font-['Plus_Jakarta_Sans']">
            Entre otros perfiles según las necesidades institucionales. Si tu especialidad no aparece, postúlate igualmente.
          </p>
        </div>
      </section>

      {/* Selection process section */}
      <section className="py-14 md:py-20 bg-[#051535]">
        <div className="max-w-[1000px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <SectionLabel>Proceso de Selección</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              ¿Cómo es el proceso?
            </h2>
            <p className="text-[#8FA4C8] mt-3 text-sm max-w-lg mx-auto font-['Plus_Jakarta_Sans']">
              El proceso de selección de la DNI está diseñado para garantizar la idoneidad, integridad y capacidad de cada candidato.
            </p>
          </div>
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-[#C9A55C]/50 via-[#C9A55C]/20 to-transparent hidden md:block" />
            <div className="space-y-4">
              {SELECTION_STEPS.map((step, i) => (
                <div key={step.num} className="flex gap-5 p-5 bg-[#071D49] border border-[#C9A55C]/15 hover:border-[#C9A55C]/35 rounded-xl transition-all group relative">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold font-['JetBrains_Mono'] shrink-0 bg-[#051535] border-2 border-[#C9A55C]/60 text-[#C9A55C] group-hover:border-[#C9A55C] group-hover:bg-[#C9A55C]/10 transition-all z-10">
                    {step.num}
                  </div>
                  <div className="pt-1 flex-1">
                    <h3 className="text-white font-bold text-sm mb-1.5 font-['Plus_Jakarta_Sans'] group-hover:text-[#C9A55C] transition-colors">{step.title}</h3>
                    <p className="text-[#8FA4C8] text-xs leading-relaxed font-['Plus_Jakarta_Sans']">{step.desc}</p>
                  </div>
                  {i < SELECTION_STEPS.length - 1 && (
                    <div className="absolute -bottom-2.5 left-[30px] w-px h-3 bg-[#C9A55C]/30 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 text-center">
            <a
              href="#formulario"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C9A55C] hover:bg-[#D4B567] text-[#071D49] font-bold text-sm rounded-xl uppercase tracking-widest font-['Plus_Jakarta_Sans'] transition-all shadow-[0_0_20px_rgba(201,165,92,0.2)]"
            >
              <GraduationCap size={15} />
              Iniciar mi postulación
            </a>
          </div>
        </div>
      </section>

      {/* Application form section */}
      <section id="formulario" className="py-14 md:py-24 bg-[#051535]">
        <div className="max-w-[680px] mx-auto px-6 md:px-10">
          <div className="text-center mb-8">
            <SectionLabel>Formulario de Aplicación</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              Iniciar postulación
            </h2>
            <p className="text-[#8FA4C8] mt-2 text-sm font-['Plus_Jakarta_Sans']">
              Complete todos los campos requeridos. Los campos marcados con{" "}
              <span className="text-[#C9A55C]">*</span> son obligatorios.
            </p>
            {!isSupabaseConfigured && (
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <AlertCircle size={13} className="text-yellow-400" />
                <span className="text-yellow-300 text-xs font-['JetBrains_Mono']">Modo demo — Supabase no configurado</span>
              </div>
            )}
          </div>

          <div className="bg-[#071D49] border border-[#C9A55C]/15 rounded-2xl p-6 md:p-8">
            <ApplicationForm originArea={originArea} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 bg-[#071D49]">
        <div className="max-w-[800px] mx-auto px-6 md:px-10">
          <div className="text-center mb-8">
            <SectionLabel>Preguntas Frecuentes</SectionLabel>
            <h2 className="text-xl md:text-2xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              Dudas sobre el proceso
            </h2>
          </div>
          <div className="space-y-2 bg-[#051535] rounded-2xl p-4 md:p-6">
            {FAQS.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>
    </>
  );
}
