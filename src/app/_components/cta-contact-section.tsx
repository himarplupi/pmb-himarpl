"use client";

import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { SiInstagram, SiWhatsapp } from "@icons-pack/react-simple-icons";

const templateText =
  "Halo, perkenalkan saya [nama kamu] dari [asal sekolah kamu] dan saya ingin bertanya tentang [tulis pertanyaan kamu]\n\n\n Terima kasih.";

export function CTAContactSection() {
  return (
    <section
      id="cta-contact"
      className="container mt-16 rounded-md bg-gradient-to-br from-[#295BFF] to-[#003bbf] py-16"
    >
      <Card className="mx-auto flex min-h-72 flex-col justify-between drop-shadow-xl lg:w-[768px]">
        <CardHeader>
          <CardTitle className="font-serif text-4xl font-bold tracking-wide lg:text-center">
            Masih Bingung?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-pretty lg:text-center">
            HIMARPL Kampus UPI di Cibiru siap membantu kamu dalam hiruk pikuknya
            proses pendaftaran mahasiswa baru. Silakan hubungi kontak kami
            dibawah ini.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col justify-evenly gap-4 sm:flex-row">
          <Link
            target="_blank"
            href={"https://wa.me/+6285885725027?text=" + templateText}
            className={cn(
              buttonVariants({
                variant: "outline",
              }),
              "w-full justify-start sm:justify-center",
            )}
          >
            {/* @ts-expect-error: Entahlah SimpleIcon gaje */}
            <SiWhatsapp color="default" className="mr-2 h-6 w-6" />
            {"Chat 1 (Bagas)"}
          </Link>
          <Link
            target="_blank"
            href={"https://wa.me/+6287784238404?text=" + templateText}
            className={cn(
              buttonVariants({
                variant: "outline",
              }),
              "w-full justify-start sm:justify-center",
            )}
          >
            {/* @ts-expect-error: Entahlah SimpleIcon gaje */}
            <SiWhatsapp color="default" className="mr-2 h-6 w-6" />
            {"Chat 2 (Roy)"}
          </Link>
          <Link
            target="_blank"
            href={"https://ig.me/m/himarpl"}
            className={cn(
              buttonVariants({
                variant: "outline",
              }),
              "w-full justify-start sm:justify-center",
            )}
          >
            {/* @ts-expect-error: Entahlah SimpleIcon gaje */}
            <SiInstagram color="default" className="mr-2 h-6 w-6" />
            DM Instagram
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
}
