import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  robots: "noindex,nofollow",
  title: "Acceso confirmado",
};

export default function ThankYouPage() {
  return (
    <main className="bg-crema-bg min-h-screen flex items-center justify-center py-10 px-5">
      <div className="max-w-[480px] mx-auto text-center">
        <div className="w-[60px] h-[60px] bg-verde-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={32} className="text-verde-700" aria-hidden="true" />
        </div>
        <h1 className="text-texto-dark text-2xl font-semibold mb-2">
          ¡Todo listo!
        </h1>
        <p className="text-texto-muted text-sm leading-relaxed">
          Revisa tu correo en los próximos minutos para acceder a tu Kit Sesión Lista.
        </p>
      </div>
    </main>
  );
}
