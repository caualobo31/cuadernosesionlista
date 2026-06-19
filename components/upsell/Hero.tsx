import Image from "next/image";
import {
  Sparkles,
  Target,
  ListChecks,
  HelpCircle,
  Users,
  ClipboardCheck,
  Zap,
  Shield,
  Lock,
} from "lucide-react";
import CTAButton from "./CTAButton";

const benefits = [
  { icon: Target, text: "Objetivo terapéutico claro en cada sesión" },
  { icon: ListChecks, text: "Secuencia paso a paso: acogida, aplicación y cierre" },
  { icon: HelpCircle, text: "Preguntas guía para conducir al niño" },
  { icon: Users, text: "Adaptaciones para edades de 4 a 12 años" },
  { icon: ClipboardCheck, text: "Qué registrar después de cada sesión" },
];

const trustItems = [
  { icon: Zap, label: "Acceso inmediato" },
  { icon: Shield, label: "Garantía de 30 días" },
  { icon: Lock, label: "Pago seguro" },
];

interface HeroProps {
  checkoutUrl: string;
}

export default function Hero({ checkoutUrl }: HeroProps) {
  return (
    <section className="mb-12 md:mb-16">
      {/* Eyebrow */}
      <div className="flex justify-center mb-3">
        <span className="bg-coral-100 px-4 py-1.5 rounded-full text-coral-700 text-sm font-semibold inline-flex items-center gap-2">
          <Sparkles size={16} aria-hidden="true" />
          OFERTA EXCLUSIVA SOLO EN ESTA PÁGINA
        </span>
      </div>

      {/* Pergunta provocativa */}
      <p className="text-base text-texto-muted font-medium text-center mb-4">
        ¿Y si entraras a la próxima sesión sabiendo exactamente cómo aplicar cada recurso?
      </p>

      {/* H1 */}
      <h1 className="text-center max-w-2xl mx-auto mb-5">
        <span className="block text-3xl md:text-4xl font-semibold leading-[1.1] tracking-tight text-verde-900">
          Una sesión lista
        </span>
        <span className="block text-lg md:text-xl font-medium leading-snug text-verde-700 mt-2">
          para cada uno de los <span className="text-coral-600 font-semibold">80 recursos</span> de tu kit
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-sm md:text-base text-texto-body leading-relaxed text-center mb-8">
        Una sesión modelo paso a paso. Objetivo, secuencia, preguntas guía, cierre y adaptaciones por edad. Para cada uno de los 80 recursos del Kit Sesión Lista.
      </p>

      {/* Mockup hero */}
      <div className="flex justify-center mb-8">
        <Image
          src="/imagens/mockup principal.png"
          alt="Cuaderno de 80 Sesiones Listas"
          width={600}
          height={420}
          priority
          className="w-full max-w-[520px] h-auto"
        />
      </div>

      {/* Benefit bullets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
        {benefits.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-verde-100 flex items-center justify-center shrink-0">
              <Icon size={18} className="text-verde-700" aria-hidden="true" />
            </div>
            <p className="text-sm font-medium text-texto-dark">{text}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <CTAButton
        href="#oferta"
        text="QUIERO AGREGAR LAS 80 SESIONES"
        fullWidth
      />

      {/* Trust badges */}
      <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 text-sm text-texto-muted mt-4">
        {trustItems.map(({ icon: Icon, label }) => (
          <span key={label} className="flex items-center gap-1.5">
            <Icon size={16} aria-hidden="true" />
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}
