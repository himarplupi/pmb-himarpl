import { CTAContactSection, Footer, GlobalFooter } from "@/app/_components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rekayasa Perangkat Lunak | HIMARPL",
  description:
    "Rekayasa Perangkat Lunak (Software Engineering) adalah salah satu program studi di UPI yang mempelajari cara merancang, mengembangkan, dan memelihara perangkat lunak.",
};

export default function SoftwareEngineeringLayout({
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
