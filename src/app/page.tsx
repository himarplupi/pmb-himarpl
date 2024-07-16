import Image from "next/image";
import Link from "next/link";
import { Circle } from "lucide-react";

import { CTAContactSection, Footer, GlobalFooter } from "@/app/_components";
import { articles } from "@/app/news/_components/data";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import HomeBG from "@/images/home-bg.jpg";
import { calculateReadTime, cn, getContent } from "@/lib/utils";
import { YouTubeEmbed } from "@next/third-parties/google";

export default async function HomePage() {
  return (
    <>
      <main className="space-y-8">
        <BannerSection />

        <InformationSection />

        <NewsSection />

        <section className="container min-h-screen py-8">
          <h2 className="mt-2 scroll-m-20 pb-2 text-center font-serif text-4xl font-bold tracking-wide">
            Profil Rekayasa Perangkat Lunak (RPL)
          </h2>

          <div className="mx-auto mt-4 aspect-video w-full overflow-hidden rounded border border-muted md:w-[512px] lg:w-[628px]">
            <YouTubeEmbed videoid="CYYT7pAcp-c" />
          </div>

          <div className="mt-4 flex justify-center">
            <Link
              href="/software-engineering"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "mx-auto w-full text-muted-foreground sm:w-64",
              )}
            >
              Mengenal RPL
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

          <div className="mt-6 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link
              href="/information"
              className={cn(buttonVariants(), "sm:w-40")}
            >
              Info Pendaftaran
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "sm:w-40",
              )}
            >
              Kontak
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
      <div className="grid w-full grid-cols-1 gap-8 pb-8 pt-12 sm:grid-cols-2 sm:place-items-center lg:mx-auto lg:w-[900px]">
        <Card className="flex h-full flex-col justify-between lg:w-96">
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
            <Link
              href="/information/snbp"
              className={cn(buttonVariants({ variant: "outline" }), "w-full")}
            >
              Selengkapnya
            </Link>
          </CardFooter>
        </Card>
        <Card className="flex h-full flex-col justify-between lg:w-96">
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
            <Link
              href="/information/snbp"
              className={cn(buttonVariants({ variant: "outline" }), "w-full")}
            >
              Selengkapnya
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

function NewsSection() {
  return (
    <section className="container py-8">
      <Card className="mx-auto max-w-[850px]">
        <CardHeader>
          <CardTitle>Berita Terbaru</CardTitle>
        </CardHeader>

        <CardContent>
          {articles.map((article) => (
            <div
              key={article.id}
              className="flex flex-col gap-y-2 rounded py-4"
            >
              <span className="flex items-center gap-x-2">
                <Avatar className="h-5 w-5">
                  <AvatarImage
                    src={article.author.image}
                    alt={article.author.name + " picture"}
                  />
                </Avatar>
                <span className="truncate text-sm text-muted-foreground">
                  {article.author.name}
                </span>
                <Circle
                  className="h-1 w-1 text-muted-foreground md:h-2 md:w-2"
                  fill="hsl(var(--muted-foreground))"
                />
                <span className="text-nowrap text-sm text-muted-foreground">
                  {article.publishedAt.toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </span>
              <Link href={`/news/@${article.author.username}/${article.slug}`}>
                <div className="flex-grow justify-between gap-x-4 sm:flex">
                  <div className="w-fit">
                    <h3 className="line-clamp-2 text-pretty font-serif text-xl font-bold capitalize leading-7 sm:text-2xl">
                      {article.title}
                    </h3>
                    <p className="line-clamp-3 text-pretty text-sm leading-5 tracking-wide">
                      {getContent(article.content)}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex gap-x-2">
                  <Badge variant="secondary" className="truncate font-normal">
                    {article.tags[0]?.title ?? ""}
                  </Badge>
                  <span className="text-nowrap text-sm text-muted-foreground">
                    {calculateReadTime(article.content)} menit baca
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </CardContent>

        <CardFooter>
          <Link
            href="/news"
            className={cn(buttonVariants({ variant: "secondary" }))}
          >
            Berita Lainnya
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
}
