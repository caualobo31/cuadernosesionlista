import CTAButton from "./CTAButton";

interface ClosingProps {
  checkoutUrl: string;
  thankYouUrl: string;
}

export default function Closing({ checkoutUrl, thankYouUrl }: ClosingProps) {
  return (
    <section className="mb-12 md:mb-16 text-center">
      <h2 className="text-xl md:text-2xl font-bold text-verde-900 leading-tight mb-6">
        Tu próxima sesión
        <br />
        puede empezar diferente
      </h2>

      <CTAButton
        href={checkoutUrl}
        text="QUIERO AGREGAR EL CUADERNO"
        fullWidth
      />

      <div className="mt-6">
        <a
          href={thankYouUrl}
          className="text-sm text-texto-light underline hover:text-texto-muted transition-colors"
        >
          No, gracias. Sigo solo con el kit por ahora.
        </a>
      </div>
    </section>
  );
}
