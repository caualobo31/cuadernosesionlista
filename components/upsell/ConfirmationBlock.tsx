import { CheckCircle2 } from "lucide-react";

export default function ConfirmationBlock() {
  return (
    <div className="mb-4">
      <div className="bg-verde-100 rounded-xl p-5 text-center">
        <div className="w-[52px] h-[52px] bg-white rounded-full flex items-center justify-center mx-auto mb-3">
          <CheckCircle2 size={30} className="text-verde-700" aria-hidden="true" />
        </div>
        <p className="text-verde-900 text-lg font-medium mb-1">
          ¡Tu Kit Sesión Lista fue confirmado!
        </p>
        <p className="text-verde-700/85 text-xs">
          Estamos enviando el acceso a tu correo en los próximos minutos.
        </p>
      </div>

      <p className="text-texto-muted text-xs uppercase tracking-wider mt-5 mb-7 text-center">
        ANTES DE CERRAR ESTA PÁGINA, LEE LO SIGUIENTE
      </p>
    </div>
  );
}
