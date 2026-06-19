import { ShieldCheck } from "lucide-react";

export default function Guarantee() {
  return (
    <div className="bg-ambar-bg rounded-xl p-5 flex gap-3 items-start mb-6">
      <ShieldCheck
        size={32}
        className="text-ambar-text shrink-0"
        aria-hidden="true"
      />
      <div>
        <h3 className="text-ambar-textDark text-[15px] font-medium mb-1">
          Garantía total de 30 días
        </h3>
        <p className="text-ambar-textMid text-xs leading-snug">
          Si por cualquier razón el material no te sirve, te devolvemos los $19 sin preguntas.
        </p>
      </div>
    </div>
  );
}
