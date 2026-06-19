import { CheckCircle2 } from "lucide-react";

export default function TopBarConfirmation() {
  return (
    <div className="bg-verde-900 py-3 text-center">
      <p className="text-white text-sm font-medium flex items-center justify-center gap-2 px-4">
        <CheckCircle2 size={18} aria-hidden="true" />
        ¡Tu Kit Sesión Lista fue confirmado y enviado a tu correo!
      </p>
    </div>
  );
}
