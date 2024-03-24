import HomeBG from "@/images/home-bg.jpg";
import { CTAContactSection, Footer, GlobalFooter } from "@/app/_components";
import Image from "next/image";
import { Circle } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function HomePage() {
  return (
    <>
      <main className="space-y-8">
        <BannerSection />

        <InformationSection />

        <section className="container"></section>

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

          <div className="mt-6 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link href="/information" className="sm:w-40">
              <Button className="w-full">Info Pendaftaran</Button>
            </Link>
            <Link href="/contact" className="sm:w-40">
              <Button variant="secondary" className="w-full">
                Kontak
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function InformationSection() {
  return (
    <section className="container">
      <div className="grid w-full grid-cols-1 gap-8 py-8 sm:grid-cols-2 sm:place-items-center lg:mx-auto lg:w-[900px]">
        <Card className="flex flex-col justify-between lg:w-96">
          <div>
            <CardHeader>
              <CardTitle className="text-center font-serif font-bold tracking-wide">
                SNBP
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-7 tracking-wide [&:not(:first-child)]:mt-2">
                Seleksi Nasional Berbasis Prestasi (SNBP) dilakukan dengan
                menggabungkan penilaian prestasi akademik dan non-akademik
                siswa.
              </p>
            </CardContent>
          </div>
          <CardFooter>
            <Link href="/information/snbp" className="w-full">
              <Button className="w-full" variant="outline">
                Selengkapnya
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="flex flex-col justify-between lg:w-96">
          <div>
            <CardHeader>
              <CardTitle className="text-center font-serif font-bold tracking-wide">
                SNBT
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-7 tracking-wide [&:not(:first-child)]:mt-2">
                Seleksi Nasional Berbasis Tes (SNBT) adalah seleksi masuk
                perguruan tinggi yang menggunakan hasil Ujian Tulis Berbasis
                Komputer (UTBK) sebagai dasar penilaiannya.
              </p>
            </CardContent>
          </div>
          <CardFooter>
            <Link href="/information/snbp" className="w-full">
              <Button className="w-full" variant="outline">
                Selengkapnya
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <div className="flex items-center sm:col-span-2 sm:gap-x-2 sm:place-self-end md:w-1/2">
          <span>
            <Circle
              className="hidden h-1 w-1 text-foreground sm:block"
              fill="hsl(var(--foreground))"
            />
          </span>

          <svg
            className="hidden border-foreground sm:block"
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

          <Link
            href="/information"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "w-full text-muted-foreground sm:w-fit",
            )}
          >
            Informasi Jalur Masuk Lainnya
          </Link>
        </div>
      </div>
    </section>
  );
}
