import { Check } from "lucide-react";

const items = [
  "80 sesiones estructuradas, una para cada recurso del kit",
  "Objetivo terapéutico claro en cada sesión",
  "Secuencia paso a paso: acogida, aplicación y cierre",
  "Preguntas guía para conducir al niño durante la actividad",
  "Adaptaciones por edad, de 4 a 12 años",
  "Qué registrar después de cada sesión para tu evolución clínica",
];

export default function Benefits() {
  return (
    <div className="mb-7">
      <p className="text-texto-dark text-sm font-medium tracking-wider uppercase mb-3">
        LO QUE RECIBES:
      </p>

      <ul className="flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 items-start">
            <Check
              size={18}
              className="text-verde-700 shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <p className="text-texto-dark text-sm">{item}</p>
          </li>
        ))}
      </ul>

      <p className="mt-3.5 text-texto-muted text-xs italic">
        Todo en PDF, con acceso inmediato junto al kit.
      </p>
    </div>
  );
}
