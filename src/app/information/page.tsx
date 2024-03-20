import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Footer } from "../_components/footer";

const jalurMasuk = [
  {
    id: "snbp",
    title: "SNBP",
    description: "Seleksi Nasional Berbasis Prestasi",
    content:
      "Seleksi Nasional Berbasis Prestasi (SNBP) dilakukan berdasarkan hasil penelusuran rapor serta prestasi akademik dan non akademik siswa.",
    url: "/information/snbp",
  },
  {
    id: "snbt",
    title: "SNBT",
    description: "Seleksi Nasional Berbasis Tes",
    content:
      "Seleksi Nasional Berbasis Tes (SNBT) 2024 dilakukan berdasarkan hasil Ujian Tulis Berbasis Komputer (UTBK) dan dapat ditambah dengan kriteria lain.",
    url: "/information/snbt",
  },
  {
    id: "sm-upi-reguler",
    title: "SM-UPI Reguler",
    description: "Seleksi Mandiri UPI Reguler",
    content:
      "Berdasarkan hasil kombinasi hasil Tes Psikologis Bidang Minat, Tes Potensi Skolastik, Tes Literasi dan Tes Penalaran Matematika yang dilakukan oleh UPI.",
    url: "/information/sm-upi-reguler",
  },
  {
    id: "sm-upi-pi",
    title: "SM-UPI PI",
    description: "Seleksi Mandiri UPI Prestasi Istimewa",
    content:
      "Berdasarkan prestasi karya seni atau teknologi monumental, hafidz Al-Qur'an minimal 15 Juz, atau siswa yang memperoleh medali dalam bidang akademik maupun non-akademik",
    url: "/information/sm-upi-pi",
  },
];

const articlePmb = [
  {
    id: 1,
    title: "Selamat datang mahasiswa RPL angkatan 24 jalur SNBP!",
    slug: "selamat-datang-mahasiswa-rpl-angkatan-24-jalur-snbp",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti quam ipsam dolor sequi vel. Inventore quo dolorum dolor fugiat consequatur cum, vitae quasi totam perspiciatis itaque error, asperiores quas perferendis ducimus quisquam culpa eos, iure facilis provident est ipsum blanditiis ad! Iusto natus cumque a eius mollitia et quasi, illum dolores ducimus inventore omnis reprehenderit ipsum neque aperiam blanditiis aspernatur voluptatum distinctio officiis culpa iure pariatur eligendi deserunt. Voluptas nulla atque molestiae aut libero voluptatibus doloremque vero magnam corrupti, cum consequuntur doloribus dolor, assumenda pariatur. Necessitatibus ipsam impedit aliquam quos error asperiores mollitia in quo. Dolor animi commodi obcaecati distinctio.",
    category: {
      title: "Berita",
      slug: "berita",
    },
    tags: [
      {
        title: "PMB",
        slug: "pmb",
      },
      {
        title: "SNBP",
        slug: "snbp",
      },
    ],
    author: {
      name: "Andika Eka Kurnia",
      image:
        "https://images.unsplash.com/photo-1708353273691-0186eaa03dc2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxMDkxMDUxOQ&ixlib=rb-4.0.3&q=80&w=300",
      username: "dikdns",
    },
    publishedAt: new Date("2024-03-26"),
  },
  {
    id: 2,
    title: "Selamat datang mahasiswa RPL angkatan 24 jalur SNBP!",
    slug: "selamat-datang-mahasiswa-rpl-angkatan-24-jalur-snbp",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti quam ipsam dolor sequi vel. Inventore quo dolorum dolor fugiat consequatur cum, vitae quasi totam perspiciatis itaque error, asperiores quas perferendis ducimus quisquam culpa eos, iure facilis provident est ipsum blanditiis ad! Iusto natus cumque a eius mollitia et quasi, illum dolores ducimus inventore omnis reprehenderit ipsum neque aperiam blanditiis aspernatur voluptatum distinctio officiis culpa iure pariatur eligendi deserunt. Voluptas nulla atque molestiae aut libero voluptatibus doloremque vero magnam corrupti, cum consequuntur doloribus dolor, assumenda pariatur. Necessitatibus ipsam impedit aliquam quos error asperiores mollitia in quo. Dolor animi commodi obcaecati distinctio.",
    category: {
      title: "Berita",
      slug: "berita",
    },
    tags: [
      {
        title: "PMB",
        slug: "pmb",
      },
      {
        title: "SNBP",
        slug: "snbp",
      },
    ],
    author: {
      name: "Andika Eka Kurnia",
      image:
        "https://images.unsplash.com/photo-1708353273691-0186eaa03dc2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxMDkxMDUxOQ&ixlib=rb-4.0.3&q=80&w=300",
      username: "dikdns",
    },
    publishedAt: new Date("2024-03-26"),
  },
];

export default async function InformationPage() {
  return (
    <main className="container flex min-h-screen flex-col gap-y-4">
      <section
        id="info-pendaftaran"
        className="relative flex min-h-screen flex-col items-start justify-center"
      >
        <h2 className="mt-2 scroll-m-20 text-balance border-b pb-2 font-serif text-4xl font-medium tracking-wide">
          Info Pendaftaran
        </h2>
        <p className="text-pretty leading-7 tracking-wide sm:w-[640px] sm:text-balance [&:not(:first-child)]:mt-2">
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
        <h2 className="mt-2 scroll-m-20 text-balance border-b pb-2 font-serif text-4xl font-medium tracking-wide">
          Jalur Masuk
        </h2>
        <p className="text-muted-foreground leading-7 tracking-wide [&:not(:first-child)]:mt-2">
          Jalur masuk resmi PTN Universitas Pendidikan Indonesia tahun 2024,
          khususnya untuk program studi Rekayasa Perangkat Lunak Kampus UPI di
          Cibiru adalah sebagai berikut.
        </p>
        <div className="mt-4 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {jalurMasuk.map((jalur) => (
            <Card key={jalur.id} className="flex flex-col justify-between">
              <div>
                <CardHeader>
                  <CardTitle className="font-serif font-medium tracking-wide">
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
                <Link href={jalur.url} className="w-full">
                  <Button className="w-full" variant="outline">
                    Selengkapnya
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section id="cta-berita" className="mt-12">
        <Card className="flex flex-col justify-between">
          <div>
            <CardHeader>
              <CardTitle className="mt-2 scroll-m-20 text-balance border-b pb-2 font-serif text-4xl font-medium tracking-wide">
                Berita Maba
              </CardTitle>
              <CardDescription>
                Berita terkini dari HIMARPL terkait penerimaan mahasiswa baru
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-y-6 divide-y">
              {articlePmb.map((article) => (
                <div key={article.id} className="flex flex-col gap-y-2 pt-4">
                  <span className="flex items-center gap-x-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={article.author.image} alt="Avatar" />
                    </Avatar>
                    <span className="text-muted-foreground">
                      {article.author.name}
                    </span>
                    <Circle
                      className="text-muted-foreground h-2 w-2"
                      fill="hsl(var(--muted-foreground))"
                    />
                    <span className="text-muted-foreground">
                      {article.publishedAt.toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </span>
                  <Link
                    href={`/news/@${article.author.username}/${article.slug}`}
                  >
                    <h3 className="text-balance text-lg font-medium tracking-wide">
                      {article.title}
                    </h3>
                    <p className="line-clamp-3 text-balance text-sm leading-5 tracking-wide lg:w-[768px]">
                      {article.content}
                    </p>
                  </Link>
                </div>
              ))}
            </CardContent>
          </div>
          <CardFooter>
            <Link href="/news">
              <Button className="w-full" variant="outline">
                Berita Maba Lainnya
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </section>

      <Footer />
    </main>
  );
}
