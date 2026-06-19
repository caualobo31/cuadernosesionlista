"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    q: "¿Cómo accedo a este material?",
    a: "Inmediatamente después del pago, recibes el cuaderno junto con el Kit Sesión Lista en el mismo correo. Es un PDF de alta calidad listo para imprimir o usar en pantalla.",
  },
  {
    q: "¿Necesito haber abierto el kit antes de usar el cuaderno?",
    a: "No. El cuaderno funciona desde el primer recurso que decidas aplicar. Cada sesión es autocontenida y te indica qué recurso del kit necesitas.",
  },
  {
    q: "¿Sirve si recién estoy empezando con niños?",
    a: "Sí. Cada sesión incluye fundamento clínico, frases sugeridas y lectura clínica en vivo. Está pensado tanto para psicólogas que recién empiezan como para profesionales con años de consulta.",
  },
  {
    q: "¿Puedo comprar este cuaderno después por este precio?",
    a: "No. Esta oferta solo existe en esta página, una única vez. Si cierras o vuelves más tarde, el cuaderno no estará disponible por $19.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-verde-900 text-center mb-3">
        ¿Aún tienes alguna duda?
      </h2>
      <p className="text-lg text-texto-muted text-center mb-8">
        Respondemos las preguntas más comunes aquí.
      </p>

      <ul className="space-y-3">
        {faqs.map(({ q, a }, i) => {
          const isOpen = openIndex === i;
          return (
            <li
              key={q}
              className="bg-white rounded-xl border border-black/[0.06] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-base md:text-lg font-semibold text-verde-900 pr-4">
                  {q}
                </span>
                {isOpen ? (
                  <X size={20} className="text-verde-700 shrink-0" aria-hidden="true" />
                ) : (
                  <Plus size={20} className="text-verde-700 shrink-0" aria-hidden="true" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                  isOpen ? "max-h-[400px]" : "max-h-0"
                }`}
              >
                <p className="px-5 pb-5 text-texto-body text-base leading-relaxed">
                  {a}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
