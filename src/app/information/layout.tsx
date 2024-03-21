import { CTAContactSection } from "@/app/_components/cta-contact-section";
import { Footer } from "../_components/footer";
import { GlobalFooter } from "../_components/global-footer";

export default function InformationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <CTAContactSection />
      <Footer />
      <GlobalFooter />
    </>
  );
}
