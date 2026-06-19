export default function GuaranteeBlock() {
  return (
    <section className="mb-12 md:mb-16">
      <div className="bg-ambar-bg rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6">
        {/* Selo circular */}
        <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-white rounded-full border-4 border-dashed border-ambar-600 flex flex-col items-center justify-center text-ambar-800 font-bold">
          <span className="text-5xl leading-none">30</span>
          <span className="text-sm tracking-widest mt-1">DÍAS</span>
          <span className="text-xs mt-1">GARANTÍA</span>
        </div>

        {/* Texto */}
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-bold text-ambar-800 mb-3">
            Compra sin riesgo
          </h3>
          <p className="text-base text-ambar-800/85 leading-relaxed">
            Tienes 30 días para usar el cuaderno, aplicar las sesiones y ver en la práctica lo que hace por tu trabajo clínico. Si por cualquier motivo no quedas satisfecha, solo pides el reembolso. Sin burocracia, sin preguntas.
          </p>
          <p className="mt-3 italic text-sm text-ambar-800">
            El riesgo es nuestro. El resultado es tuyo.
          </p>
        </div>
      </div>
    </section>
  );
}
