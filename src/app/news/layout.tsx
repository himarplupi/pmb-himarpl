import { CTAContactSection, Footer, GlobalFooter } from "@/app/_components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Berita | HIMARPL",
  description:
    "Berita terbaru dari HIMARPL seputar penerimaan mahasiswa baru Rekayasa Perangkat Lunak Kampus UPI di Cibiru",
};

export default function NewsLayout({
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
