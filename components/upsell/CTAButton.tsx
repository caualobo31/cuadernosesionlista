import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  href: string;
  text: string;
  variant?: "coral" | "white";
  fullWidth?: boolean;
}

export default function CTAButton({
  href,
  text,
  variant = "coral",
  fullWidth = false,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-8 py-4 md:py-5 text-base md:text-lg font-bold tracking-wide rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    coral:
      "bg-coral-600 text-white shadow-[0_4px_20px_rgba(216,90,48,0.35)] hover:bg-coral-700 hover:shadow-[0_6px_28px_rgba(216,90,48,0.45)] focus:ring-coral-300 focus:ring-offset-crema-bg",
    white:
      "bg-white text-verde-900 shadow-[0_4px_20px_rgba(255,255,255,0.2)] hover:bg-crema-warm focus:ring-white focus:ring-offset-verde-900",
  };

  const width = fullWidth ? "w-full" : "w-full md:w-auto";

  return (
    <a
      href={href}
      {...(!href.startsWith("#") && { target: "_blank", rel: "noopener noreferrer" })}
      className={`${base} ${variants[variant]} ${width}`}
    >
      {text}
      <ArrowRight size={20} aria-hidden="true" />
    </a>
  );
}
