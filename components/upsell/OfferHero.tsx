import Image from "next/image";

export default function OfferHero() {
  return (
    <div className="mb-7">
      <h1 className="text-texto-dark text-2xl md:text-3xl font-semibold leading-tight mb-3">
        Solo en esta página: agrega las 80 sesiones ya estructuradas que aplican, una por una, cada recurso de tu kit.
      </h1>
      <p className="text-texto-muted text-[15px] leading-relaxed mb-7">
        Tienes los 80 recursos en tus manos. Lo que sigue es saber cómo aplicar cada uno dentro de una sesión real, con objetivo claro, secuencia paso a paso, preguntas guía y cierre.
      </p>

      <div className="bg-crema-secondary rounded-xl p-6 text-center">
        <Image
          src="/imagens/mockup-cuaderno.png"
          alt="Cuaderno de 80 Sesiones Listas"
          width={360}
          height={240}
          className="mx-auto max-w-[320px] w-full h-auto"
          priority
        />
        <p className="mt-3 text-texto-dark text-[17px] font-medium">
          Cuaderno de 80 Sesiones Listas
        </p>
        <p className="text-texto-muted text-xs italic">
          Una sesión modelo para cada recurso del Kit Sesión Lista.
        </p>
      </div>
    </div>
  );
}
