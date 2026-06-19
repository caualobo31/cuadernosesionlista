import Image from "next/image";
import { Check, CreditCard, Smartphone, Building2 } from "lucide-react";
import CTAButton from "./CTAButton";

const features = [
  "80 sesiones estructuradas, una por recurso del kit",
  "Cada sesión con objetivo, secuencia, preguntas guía y cierre",
  "Lectura clínica en vivo: qué observar durante la aplicación",
  "Adaptaciones para edades de 4 a 12 años",
  "Continuidad clínica: cómo se conecta con la próxima sesión",
  "Acceso inmediato junto al kit, en PDF",
];

interface PricingCardProps {
  checkoutUrl: string;
}

export default function PricingCard({ checkoutUrl }: PricingCardProps) {
  return (
    <section id="oferta" className="mb-12 md:mb-16">
      <div className="relative bg-white rounded-3xl shadow-[0_8px_40px_rgba(4,52,44,0.12)] border-2 border-verde-700 p-8 md:p-10 text-center">
        {/* Badge absoluto */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="bg-coral-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap">
            OFERTA ÚNICA
          </span>
        </div>

        {/* Eyebrow */}
        <p className="text-sm text-verde-700 font-semibold uppercase tracking-wider mb-2">
          AGREGAR A TU PEDIDO
        </p>

        {/* Nome do produto */}
        <h3 className="text-lg md:text-xl font-bold text-verde-900 mb-1">
          Cuaderno de 80 Sesiones Listas
        </h3>
        <p className="text-sm text-texto-muted italic mb-6">
          Una sesión modelo para cada recurso del kit
        </p>

        {/* Mockup pequeno */}
        <div className="flex justify-center mb-6">
          <Image
            src="/imagens/mockup principal.png"
            alt=""
            width={240}
            height={180}
            className="w-full max-w-[200px] h-auto"
            aria-hidden="true"
          />
        </div>

        {/* Bloco de preço */}
        <div className="mb-6">
          <span className="block text-sm text-texto-muted line-through mb-1">
            De $47 USD
          </span>
          <span className="block text-5xl md:text-6xl font-bold text-verde-900 leading-none">
            $19 USD
          </span>
          <span className="block text-sm text-texto-muted mt-2">
            Pago único · acceso inmediato
          </span>
          <span className="inline-block bg-verde-100 text-verde-800 px-3 py-1 rounded-full text-sm font-semibold mt-3">
            Ahorras $28 USD
          </span>
        </div>

        {/* Features */}
        <ul className="flex flex-col gap-3 text-left mb-6">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <Check
                size={18}
                className="text-verde-700 shrink-0 mt-1"
                aria-hidden="true"
              />
              <p className="text-sm text-texto-dark">{f}</p>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <CTAButton
          href={checkoutUrl}
          text="QUIERO AGREGAR AHORA"
          fullWidth
        />

        {/* Métodos de pagamento */}
        <div className="flex items-center justify-center gap-3 text-xs text-texto-muted mt-4">
          <CreditCard size={16} aria-hidden="true" />
          <Smartphone size={16} aria-hidden="true" />
          <Building2 size={16} aria-hidden="true" />
          <span>Tarjeta · OXXO · Efecty · Transferencia</span>
        </div>

        <p className="text-xs text-texto-muted text-center mt-3">
          Compra 100% segura procesada por Hotmart
        </p>
      </div>
    </section>
  );
}
