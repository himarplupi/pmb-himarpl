import { YouTubeEmbed } from "@next/third-parties/google";

export default async function SoftwareEngineeringPage() {
  return (
    <main className="container flex min-h-screen flex-col gap-y-4">
      <section className="mt-16 flex flex-col items-center justify-between gap-x-4 gap-y-8 md:mt-0 md:min-h-screen md:flex-row">
        <div className="w-fit md:w-[512px]">
          <h2 className="mt-2 scroll-m-20 text-balance border-b pb-2 font-serif text-4xl font-bold tracking-wide">
            Program Studi Rekayasa Perangkat Lunak (RPL)
          </h2>
          <p className="text-pretty leading-7 tracking-wide sm:text-balance [&:not(:first-child)]:mt-2">
            Rekayasa Perangkat Lunak (Software Engineering) adalah salah satu
            program studi di UPI yang terakreditasi B dengan fokus pembelajaran
            mempelajari cara merancang, mengembangkan, dan memelihara perangkat
            lunak.
          </p>
        </div>
        <div className="aspect-video w-full overflow-hidden rounded border border-muted md:w-64 lg:w-96">
          <YouTubeEmbed videoid="CYYT7pAcp-c" />
        </div>
      </section>
      <section>
        <h2 className="mt-4 scroll-m-20 text-balance border-b pb-2 font-serif text-4xl font-bold tracking-wide">
          Deskripsi
        </h2>
        <p className="text-pretty leading-7 tracking-wide [&:not(:first-child)]:mt-2">
          Program Studi S1 Rekayasa Perangkat Lunak adalah salah satu program
          studi yang berada di Kampus UPI di Cibiru yang berlokasi di Jl. Raya
          Cibiru KM 15 Kabupaten Bandung. Di dalam Program Studi Rekayasa
          Perangkat lunak, mahasiswa akan mempelajari bidang ilmu terkait
          Software Engineering (pengembangan software, manajemen software,
          proses engineering, perangkat engineering dan metodologi), Data
          Engineering (data modelling, manajemen data berbasis pengetahuan,
          penerapan manajemen data), Pemrograman Multimedia & Game (Game
          Development, animasi 2D & 3D), dan Ubiquitous Computing (Internet of
          Things, Augmented Reality, Cloud Computing). Selain itu untuk menambah
          kompetensi para mahasiswa Program Studi Rekayasa Perangkat Lunak akan
          dibekali pula dengan wawasan kewirausahaan, kemandirian, serta kerja
          sama tim agar para lulusannya mampu berkompetisi di dunia industry
          maupun pendidikan teknologi informasi dan komunikasi (TIK)
        </p>

        <p className="text-pretty leading-7 tracking-wide [&:not(:first-child)]:mt-2">
          Program Studi Rekayasa Perangkat Lunak berdiri dengan membawa semangat
          Universitas Pendidikan Indonesia, yakni “Leading and Outstanding”
          dalam berkontribusi terhadap Pendidikan dan Pengajaran, Penelitian,
          serta Pengabdian Kepada Masyarakat terkait perkembangan teknologi
          perangkat lunak dalam skala nasional maupun internasional. Berdasarkan
          surat putusan Rektor Universitas Pendidikan Indonesia tanggal 15 April
          2019 dengan No:4442/UN40/HK/2019 tentang pendirian Program Studi
          Rekayasa Perangkat Lunak (Prodi RPL).
        </p>

        <p className="text-pretty leading-7 tracking-wide [&:not(:first-child)]:mt-2">
          Program Studi Rekayasa Perangkat Lunak diharapkan mampu menjawab
          tantangan pemerintah terhadap Sumber Daya Manusia (SDM) di bidang TIK
          yang termaktub dalam siaran Pers Kominfo Nomor 96/HM/KOMINFO/04/2018,
          pemerintah berupaya meningkatkan daya saing dan produktvitas SDM
          tenaga kerja Indonesia di era global melalui upaya peningkatan
          kompetensi dan penyetaraan kualifikasi tenaga kerja Indonesia. Lulusan
          Program Studi Rekayasa Perangkat Lunak mempunyai peluang untuk bekerja
          sebagai:
        </p>

        <h3 className="mt-4 scroll-m-20 font-serif text-2xl font-medium tracking-tight">
          IT Professional:
        </h3>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Requirement engineer</li>
          <li>Analis Sistem (System Analyst)</li>
          <li>Analis Sistem Bisnis (Business System Analyst)</li>
          <li>Perancang Sistem (System Designer)</li>
          <li>Programmer</li>
          <li>Arsitek Aplikasi (Application Architect)</li>
          <li>
            Manajer Proyek pengembangan sistem informasi (Project Manager)
          </li>
          <li>Perancang antarmuka pengguna (UI designer)</li>
        </ul>

        <h3 className="mt-4 scroll-m-20 font-serif text-2xl font-medium tracking-tight">
          Technopreneur:
        </h3>
        <p className="text-pretty leading-7 tracking-wide [&:not(:first-child)]:mt-2">
          Konsultan IT, menyediakan jasa pengembangan sistem informasi (software
          specialist).
        </p>

        <h3 className="mt-4 scroll-m-20 font-serif text-2xl font-medium tracking-tight">
          Akademisi:
        </h3>
        <p className="text-pretty leading-7 tracking-wide [&:not(:first-child)]:mt-2">
          Dosen/Guru, Peneliti di Lembaga Pemerintahan maupun Perusahaan Swasta,
          seperti: Apple, Google, Facebook, dll.
        </p>
      </section>
    </main>
  );
}
