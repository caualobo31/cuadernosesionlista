import type { Metadata } from "next";
import TopBarConfirmation from "@/components/upsell/TopBarConfirmation";
import Hero from "@/components/upsell/Hero";
import WhatYouGet from "@/components/upsell/WhatYouGet";
import UrgencyBlock from "@/components/upsell/UrgencyBlock";
import PricingCard from "@/components/upsell/PricingCard";
import GuaranteeBlock from "@/components/upsell/GuaranteeBlock";
import FAQ from "@/components/upsell/FAQ";
import Closing from "@/components/upsell/Closing";
import Footer from "@/components/upsell/Footer";

export const metadata: Metadata = {
  title: "Cuaderno de 80 Sesiones Listas",
  robots: "noindex,nofollow",
};

const CHECKOUT_URL = "https://pay.hotmart.com/PLACEHOLDER"; // substituir antes do go-live
const THANKYOU_URL = "/thank-you";

export default function UpsellPage() {
  return (
    <>
      <TopBarConfirmation />
      <main className="bg-crema-bg min-h-screen py-6 md:py-10">
        <div className="max-w-2xl mx-auto px-5 md:px-6">
          <Hero checkoutUrl={CHECKOUT_URL} />
          <WhatYouGet />
          <UrgencyBlock checkoutUrl={CHECKOUT_URL} />
          <PricingCard checkoutUrl={CHECKOUT_URL} />
          <GuaranteeBlock />
          <FAQ />
          <Closing checkoutUrl={CHECKOUT_URL} thankYouUrl={THANKYOU_URL} />
          <Footer />
        </div>
      </main>
    </>
  );
}
