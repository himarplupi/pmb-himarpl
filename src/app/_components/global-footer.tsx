"use client";

import Image from "next/image";
import LogoUPICibiru from "@/images/logo-upi-cibiru.png";
import LogoHIMARPL from "@/images/logo-landscape-dark.png";

export function GlobalFooter() {
  return (
    <footer className="container mt-6">
      <div className="md:px-8">
        <div className="flex flex-col items-center gap-2">
          <Image
            src={LogoUPICibiru}
            alt="logo Kampus UPI di Cibiru"
            width={200}
          />
          <Image src={LogoHIMARPL} alt="logo HIMARPL" width={256} />
        </div>

        <div>
          <p className="max-w-[512px] text-balance text-sm leading-5 text-muted-foreground [&:not(:first-child)]:mt-2">
            Ruang HIMARPL Gedung Sekretariat Jalan Raya Cibiru Km. 15 Bandung
            40393
          </p>
        </div>
      </div>
    </footer>
  );
}
