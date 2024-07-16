import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

import { ContactForm } from "@/app/_components";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactBG from "@/images/contact-bg.jpg";
import ContactBG2 from "@/images/contact-bg-2.jpg";
import { cn } from "@/lib/utils";
import { SiInstagram, SiWhatsapp } from "@icons-pack/react-simple-icons";

export default async function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col gap-y-4 pb-16">
      <section className="container mt-16 bg-gradient-to-br from-primary to-primary/75 py-8">
        <Card className="relative mx-auto overflow-hidden border-none md:w-[718px] md:pl-64">
          <div className="absolute left-0 top-0 hidden h-full w-64 p-0 md:block">
            <Image
              src={ContactBG}
              alt="Contact Phone Background"
              fill
              className="object-cover object-center brightness-50"
            />
          </div>
          <CardHeader>
            <CardTitle className="mt-2 scroll-m-20 text-balance border-b pb-2 text-center font-serif font-bold leading-7 tracking-wide">
              Hubungi Advokasi HIMARPL
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </section>

      <section className="container py-8">
        <Card className="relative mx-auto overflow-hidden border-none md:w-[718px] md:pr-64">
          <div className="absolute right-0 top-0 hidden h-full w-64 p-0 md:block">
            <Image
              src={ContactBG2}
              alt="Contact Phone Background"
              fill
              className="object-cover object-center brightness-50"
            />
          </div>
          <CardHeader>
            <CardTitle className="mt-2 scroll-m-20 text-balance border-b pb-2 text-center font-serif font-bold leading-7 tracking-wide">
              Informasi Kontak HIMARPL Lainnya
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-y-4">
              <Link
                target="_blank"
                href={"https://wa.me/+6285885725027"}
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-full justify-start px-4 text-muted-foreground",
                )}
              >
                {/* @ts-expect-error: Entahlah SimpleIcon gaje */}
                <SiWhatsapp color="default" className="mr-2 h-6 w-6" />
                {"Chat 1 (Bagas)"}
              </Link>
              <Link
                target="_blank"
                href={"https://wa.me/+6287784238404"}
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-full justify-start px-4 text-muted-foreground",
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
                    variant: "ghost",
                  }),
                  "w-full justify-start px-4 text-muted-foreground",
                )}
              >
                {/* @ts-expect-error: Entahlah SimpleIcon gaje */}
                <SiInstagram color="default" className="mr-2 h-6 w-6" />
                DM Instagram
              </Link>
              <Link
                target="_blank"
                href={"mailto:himarpl@upi.edu"}
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-full justify-start px-4 text-muted-foreground",
                )}
              >
                <Mail className="mr-2 h-6 w-6 text-foreground" />
                Email
              </Link>
              <span
                className={cn(
                  "flex w-full justify-start px-4 text-muted-foreground",
                )}
              >
                <span>
                  <MapPin className="mr-2 h-6 w-6 text-foreground" />
                </span>
                <span className="text-sm">
                  Ruang HIMARPL Gedung Sekretariat Jalan Raya Cibiru Km. 15
                  Bandung 40393
                </span>
              </span>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
