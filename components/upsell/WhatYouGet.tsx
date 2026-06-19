import Image from "next/image";

const sessionParts = [
  {
    title: "EL PARA QUÉ CLÍNICO",
    desc: "Mecanismo de cambio e indicador de avance",
  },
  {
    title: "MATERIALES",
    desc: "Recurso del kit y complementos necesarios",
  },
  {
    title: "CÓMO CONDUCIR LA SESIÓN",
    desc: "Acogida, aplicación y cierre con frases sugeridas",
  },
  {
    title: "LECTURA CLÍNICA EN VIVO",
    desc: "Señales a observar y desdoblamientos esperados",
  },
  {
    title: "ADAPTACIONES POR EDAD",
    desc: "Ajustes para 4-6, 7-9 y 10-12 años",
  },
  {
    title: "CONTINUIDAD CLÍNICA",
    desc: "Cómo se conecta con la siguiente sesión",
  },
];

export default function WhatYouGet() {
  return (
    <section className="mb-12 md:mb-16">
      <h2 className="text-xl md:text-2xl font-bold text-verde-900 text-center mb-3">
        Mira lo que recibes en cada sesión
      </h2>
      <p className="text-sm text-texto-muted text-center max-w-xl mx-auto mb-8">
        Cada una de las 80 sesiones del cuaderno sigue la misma estructura clínica. Lista para aplicar desde la primera lectura.
      </p>

      {/* Card com mockup interno */}
      <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-black/[0.04] p-6 md:p-10 mb-6">
        <Image
          src="/imagens/pagina-interna.png"
          alt="Estructura de una sesión modelo del Cuaderno de 80 Sesiones Listas"
          width={800}
          height={600}
          className="w-full max-w-[640px] mx-auto h-auto rounded-lg"
        />
      </div>

      {/* Grid das 6 partes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {sessionParts.map(({ title, desc }) => (
          <div key={title} className="bg-verde-50 rounded-xl p-4">
            <p className="text-sm font-semibold text-verde-700 uppercase tracking-wide">
              {title}
            </p>
            <p className="text-sm text-texto-body mt-1">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
