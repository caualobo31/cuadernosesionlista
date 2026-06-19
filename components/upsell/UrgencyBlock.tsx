import CTAButton from "./CTAButton";

interface UrgencyBlockProps {
  checkoutUrl: string;
}

export default function UrgencyBlock({ checkoutUrl }: UrgencyBlockProps) {
  return (
    <section className="mb-12 md:mb-16">
      <div className="bg-verde-900 text-white rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white mb-4">
          Esta oferta solo aparece una vez
        </h2>
        <p className="text-lg text-verde-100 leading-relaxed max-w-xl mx-auto mb-6">
          Si cierras esta página, no volverás a verla por este precio. El cuaderno solo se ofrece junto a la compra del kit, en este momento exacto.
        </p>
        <CTAButton
          href="#oferta"
          text="SÍ, LO QUIERO POR $19"
          variant="white"
          fullWidth
        />
      </div>
    </section>
  );
}
