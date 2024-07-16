import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const jalurMasuk = [
  {
    id: "snbp",
    title: "SNBP",
    description: "Seleksi Nasional Berbasis Prestasi",
    content:
      "Seleksi Nasional Berbasis Prestasi (SNBP) dilakukan berdasarkan hasil penelusuran rapor serta prestasi akademik dan non akademik siswa.",
    href: "/information/snbp",
  },
  {
    id: "snbt",
    title: "SNBT",
    description: "Seleksi Nasional Berbasis Tes",
    content:
      "Seleksi Nasional Berbasis Tes (SNBT) 2024 dilakukan berdasarkan hasil Ujian Tulis Berbasis Komputer (UTBK) dan dapat ditambah dengan kriteria lain.",
    href: "/information/snbt",
  },
  {
    id: "sm-upi-reguler",
    title: "SM-UPI Reguler",
    description: "Seleksi Mandiri UPI Reguler",
    content:
      "Berdasarkan hasil kombinasi hasil Tes Psikologis Bidang Minat, Tes Potensi Skolastik, Tes Literasi dan Tes Penalaran Matematika yang dilakukan oleh UPI.",
    href: "/information/sm-upi-reguler",
  },
  {
    id: "sm-upi-pi",
    title: "SM-UPI PI",
    description: "Seleksi Mandiri UPI Prestasi Istimewa",
    content:
      "Berdasarkan prestasi karya seni atau teknologi monumental, hafidz Al-Qur'an minimal 15 Juz, atau siswa yang memperoleh medali dalam bidang akademik maupun non-akademik",
    href: "/information/sm-upi-pi",
  },
];

export default async function InformationPage() {
  return (
    <main className="container flex min-h-screen flex-col gap-y-4">
      <section
        id="info-pendaftaran"
        className="relative flex min-h-screen flex-col items-start justify-center"
      >
        <h2 className="mt-2 scroll-m-20 text-balance border-b pb-2 font-serif text-4xl font-bold tracking-wide">
          Info Pendaftaran
        </h2>
        <p className="text-pretty leading-7 tracking-wide sm:text-balance md:w-[640px] [&:not(:first-child)]:mt-2">
          Informasi pendaftaran mahasiswa baru program studi Rekayasa Perangkat
          Lunak Kampus UPI di Cibiru yang meliputi informasi jalur masuk,
          seperti syarat, jadwal, dan ketentuan lainnya.
        </p>
        <div className="mt-4 grid w-full grid-cols-1 gap-4 sm:w-80 sm:grid-cols-2">
          <Link href="/information/snbt">
            <Button className="w-full">Info SNBT</Button>
          </Link>
          <Link href="/contact">
            <Button variant="secondary" className="w-full">
              Kontak
            </Button>
          </Link>
        </div>
        <div className="pointer-events-none absolute bottom-0 flex w-full justify-center pb-4">
          <ChevronDown className="mt-4 h-5 w-5" />
        </div>
      </section>
      <section id="jalur-masuk">
        <h2 className="mt-2 scroll-m-20 text-balance border-b pb-2 font-serif text-4xl font-bold tracking-wide">
          Jalur Masuk
        </h2>
        <p className="leading-7 tracking-wide text-muted-foreground [&:not(:first-child)]:mt-2">
          Jalur masuk resmi PTN Universitas Pendidikan Indonesia tahun 2024,
          khususnya untuk program studi Rekayasa Perangkat Lunak Kampus UPI di
          Cibiru adalah sebagai berikut.
        </p>
        <div className="mt-4 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {jalurMasuk.map((jalur) => (
            <Card key={jalur.id} className="flex flex-col justify-between">
              <div>
                <CardHeader>
                  <CardTitle className="font-serif font-bold tracking-wide">
                    {jalur.title}
                  </CardTitle>
                  <CardDescription>{jalur.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="leading-7 tracking-wide [&:not(:first-child)]:mt-2">
                    {jalur.content}
                  </p>
                </CardContent>
              </div>
              <CardFooter>
                <Link href={jalur.href} className="w-full">
                  <Button className="w-full" variant="outline">
                    Selengkapnya
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
