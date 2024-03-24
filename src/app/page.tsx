import HomeBG from "@/images/home-bg.jpg";
import { CTAContactSection, Footer, GlobalFooter } from "@/app/_components";
import Image from "next/image";
import { Circle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function HomePage() {
  return (
    <>
      <main className="space-y-8">
        <BannerSection />

        <section className="container ">
          <h2 className="text-pretty font-serif text-4xl font-bold">
            Informasi Jalur Masuk Resmi RPL UPI
          </h2>
          <p className="leading-7 tracking-wide text-muted-foreground md:w-[512px] [&:not(:first-child)]:mt-2">
            Jalur masuk resmi PTN Universitas Pendidikan Indonesia tahun 2024
            salah satunya adalah SNBT.
          </p>
          <div className="mt-4 flex flex-col justify-evenly gap-4 sm:flex-row md:w-[512px]">
            <Link
              href={"/information/snbt"}
              className={cn(
                buttonVariants(),
                "w-full justify-start sm:justify-center",
              )}
            >
              {"Seleksi Nasional Berbasis Tes (SNBT)"}
            </Link>
            <Link
              href={"/information"}
              className={cn(
                buttonVariants({
                  variant: "secondary",
                }),
                "w-full justify-start sm:justify-center",
              )}
            >
              {"Info Jalur Masuk Lainnya"}
            </Link>
          </div>
        </section>

        <CTAContactSection />
      </main>
      <Footer />
      <GlobalFooter />
    </>
  );
}

function BannerSection() {
  return (
    <div className="md:container">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute -z-50 h-full w-full">
          <div className="absolute z-10 h-full w-full bg-gradient-to-b from-background to-background/25 opacity-75"></div>
          <Image
            fill
            src={HomeBG}
            alt="Foto Pengurus HIMARPL"
            className="object-cover object-center brightness-50"
          />
        </div>
        <div className="flex min-h-screen flex-col justify-center px-8 md:items-center md:p-0">
          <h2 className="mt-2 scroll-m-20 pb-2 font-serif text-4xl font-bold uppercase tracking-wide md:w-[768px] md:text-center md:text-5xl lg:w-[800px] lg:text-6xl">
            Informasi Penerimaan Mahasiwa Baru
          </h2>
          <div className="flex items-center gap-x-2 sm:pr-32 md:w-[700px] md:px-36 lg:w-[800px]">
            <span>
              <Circle
                className="h-1 w-1 text-foreground"
                fill="hsl(var(--foreground))"
              />
            </span>

            <svg
              className="border-foreground"
              width="100%"
              height="1"
              viewBox="0 0 50 1"
              preserveAspectRatio="none"
            >
              <line
                x1="0"
                y1="0.5"
                x2="50"
                y2="0.5"
                stroke="hsl(var(--foreground))"
                strokeWidth="1"
              />
            </svg>

            <p className="text-nowrap leading-7 tracking-wide text-foreground">
              RPL Kampus UPI di Cibiru
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
