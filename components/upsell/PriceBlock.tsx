export default function PriceBlock() {
  return (
    <div className="bg-verde-900 rounded-xl p-6 text-center mb-5">
      <p className="text-[11px] tracking-widest text-verde-100/90 mb-2">
        SOLO EN ESTA PÁGINA
      </p>

      <p className="text-sm text-verde-100/80 mb-1.5">
        Valor real:{" "}
        <span className="line-through opacity-80">$47 USD</span>
      </p>

      <div className="flex items-baseline justify-center gap-1 mb-2">
        <span className="text-[52px] font-medium text-white leading-none">
          $19
        </span>
        <span className="text-lg font-medium text-verde-100">USD</span>
      </div>

      <span className="inline-block bg-coral-300 text-coral-900 text-[11px] font-medium px-2.5 py-1 rounded-md tracking-wide uppercase">
        OFERTA ÚNICA
      </span>

      <p className="mt-3 text-xs text-verde-100/80 leading-snug">
        Esta página aparece una sola vez. Si cierras o vuelves más tarde, este precio no estará disponible.
      </p>
    </div>
  );
}
