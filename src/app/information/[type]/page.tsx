import { notFound } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { SidebarNav, Content } from "./_components";

export type RegistrationItem = {
  id: string;
  title: string;
  href: string;
  content: string;
};

export type RegistrationType = {
  id: string;
  title: string;
  description: string;
  items: RegistrationItem[];
  href: string;
};

export const registrationTypes: RegistrationType[] = [
  {
    id: "snbp",
    title: "SNBP",
    description: "Seleksi Nasional Berbasis Prestasi",
    items: [
      {
        id: "gambaran",
        title: "Gambaran Umum",
        href: "/information/snbp",
        content:
          "<h2>SNBP</h2><p>Seleksi Nasional Berbasis Prestasi (SNBP) dilakukan berdasarkan hasil penelusuran prestasi akademik dengan menggunakan rapor serta prestasi akademik dan non akademik siswa. Rapor yang digunakan adalah semester satu sampai dengan semester lima bagi SMA/SMK/MA dengan masa belajar tiga tahun atau semester satu sampai dengan semester tujuh bagi SMK dengan masa belajar empat tahun. Adapaun prestasi akademik maupun non akademik siswa yang dinilai adalah tiga prestasi terbaik.</p><p>Pengelolaan dan pengolahan data untuk kepentingan seleksi jalur SNBP dilakukan oleh Panitia Seleksi Nasional Penerimaan Mahasiswa Baru (SNPMB) Tahun 2024 bersama Balai Pengelolaan Pengujian Pendidikan (BPPP) Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemendikbudristek). Peserta SNBP tidak dipungut biaya apapun. Biaya penyelenggaraan SNBP sepenuhnya ditanggung oleh pemerintah.</p><h2>Tujuan</h2><p>Memberikan kesempatan kepada siswa SMA/SMK/MA di dalam dan luar negeri (Sekolah Republik Indonesia/SRI) yang memiliki prestasi unggul untuk menempuh pendidikan tinggi di Perguruan Tinggi Negeri (PTN). PTN adalah perguruan tinggi yang diselenggarakan oleh pemerintah, meliputi PTN Akademik, PTN Vokasi, dan/atau Perguruan Tinggi Keagamaan Islam Negeri (PTKIN).</p><p>Memberikan peluang kepada PTN untuk mendapatkan calon mahasiswa baru yang mempunyai prestasi akademik tinggi dengan kuota minimum 20% dengan biaya ditanggung pemerintah.</p>",
      },
    ],
    href: "/information/snbp",
  },
  {
    id: "snbt",
    title: "SNBT",
    description: "Seleksi Nasional Berbasis Tes",
    items: [
      {
        id: "gambaran",
        title: "Gambaran Umum",
        href: "/information/snbt",
        content:
          "<h2>SNBT</h2><p>Seleksi Nasional Berbasis Tes (SNBT) 2024 merupakan seleksi masuk perguruan tinggi yang dilakukan berdasarkan hasil Ujian Tulis Berbasis Komputer (UTBK) dan dapat ditambah dengan kriteria lain sesuai dengan ketentuan yang ditetapkan PTN Akademik, PTN Vokasi, atau Perguruan Tinggi Keagamaan Agama Islam Negeri (PTKIN) yang bersangkutan. Seleksi dapat diikuti oleh siswa lulusan tahun 2022, 2023, dan 2024 dari pendidikan menengah (SMA/MA/SMK dan sederajat), serta lulusan Paket C tahun 2022, 2023, dan 2024 dengan umur maksimal 25 tahun (per 1 Juli 2024). Biaya penyelenggaraan SNBT ditanggung oleh peserta dan disubsidi oleh pemerintah.</p><h2>Tujuan</h2><ol><li>Memprediksi calon mahasiswa yang mampu menyelesaikan studi di Perguruan Tinggi Negeri (PTN) dengan baik dan tepat waktu. PTN adalah perguruan tinggi yang diselenggarakan oleh pemerintah, meliputi PTN Akademik, PTN Vokasi, dan/atau Perguruan Tinggi Keagamaan Islam Negeri (PTKIN).</li><li>Memberi kesempatan bagi calon mahasiswa untuk mengikuti tes secara fleksibel dengan memilih lokasi tes yang sesuai.</li><li>Menyeleksi calon mahasiswa yang diprediksi mampu menyelesaikan studi di PTN dengan baik dan tepat waktu berdasarkan hasil UTBK dan/atau kriteria lain yang ditetapkan bersama oleh PTN.</li><li>Memberi kesempatan bagi calon mahasiswa untuk memilih PTN secara lintas wilayah.</li></ol>",
      },
    ],
    href: "/information/snbt",
  },
];

export default async function RegistrationTypes({
  params: { type },
}: {
  params: { type: string };
}) {
  const registrationType = registrationTypes.find((t) => t.id === type);

  if (!registrationType) {
    return notFound();
  }

  return (
    <div className="container mt-16 space-y-6 p-10 pb-10">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">
          {registrationType.title}
        </h2>
        <p className="text-muted-foreground">{registrationType.description}</p>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="lg:w-1/5">
          <SidebarNav items={registrationType.items} />
        </aside>
        <div className="flex-1">
          <Content items={registrationType.items} />
        </div>
      </div>
    </div>
  );
}
