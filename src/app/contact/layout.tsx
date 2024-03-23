import { Footer, GlobalFooter } from "@/app/_components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak | HIMARPL",
  description:
    "Kontak HIMARPL yang siap membantu hiruk pikuknya proses pendaftaran mahasiswa baru di program studi Rekayasa Perangkat Lunak Kampus UPI di Cibiru",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Footer />
      <GlobalFooter />
    </>
  );
}
