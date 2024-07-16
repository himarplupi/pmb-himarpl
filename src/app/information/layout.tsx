import type { Metadata } from "next";

import { CTAContactSection } from "@/app/_components/cta-contact-section";
import { Footer } from "@/app/_components/footer";
import { GlobalFooter } from "@/app/_components/global-footer";

export const metadata: Metadata = {
  title: "Info Pendafataran | HIMARPL",
  description:
    "Informasi pendaftaran mahasiswa baru program studi Rekayasa Perangkat Lunak Kampus UPI di Cibiru yang meliputi informasi jalur masuk, seperti syarat, jadwal, dan ketentuan lainnya.",
};

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
