import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Layout } from "./_components/layout";

type Props = {
  params: { type: string };
};

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
          "<h2>SNBP</h2></p><img src='https://raw.githubusercontent.com/himarplupi/assets-himarpl/main/pmb/logo-snbp.jpg' alt='Logo SNBP'/><p>Seleksi Nasional Berbasis Prestasi (SNBP) dilakukan berdasarkan hasil penelusuran prestasi akademik dengan menggunakan rapor serta prestasi akademik dan non akademik siswa. Rapor yang digunakan adalah semester satu sampai dengan semester lima bagi SMA/SMK/MA dengan masa belajar tiga tahun atau semester satu sampai dengan semester tujuh bagi SMK dengan masa belajar empat tahun. Adapaun prestasi akademik maupun non akademik siswa yang dinilai adalah tiga prestasi terbaik.<p>Pengelolaan dan pengolahan data untuk kepentingan seleksi jalur SNBP dilakukan oleh Panitia Seleksi Nasional Penerimaan Mahasiswa Baru (SNPMB) Tahun 2024 bersama Balai Pengelolaan Pengujian Pendidikan (BPPP) Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemendikbudristek). Peserta SNBP tidak dipungut biaya apapun. Biaya penyelenggaraan SNBP sepenuhnya ditanggung oleh pemerintah.</p><h2>Tujuan</h2><p>Memberikan kesempatan kepada siswa SMA/SMK/MA di dalam dan luar negeri (Sekolah Republik Indonesia/SRI) yang memiliki prestasi unggul untuk menempuh pendidikan tinggi di Perguruan Tinggi Negeri (PTN). PTN adalah perguruan tinggi yang diselenggarakan oleh pemerintah, meliputi PTN Akademik, PTN Vokasi, dan/atau Perguruan Tinggi Keagamaan Islam Negeri (PTKIN).</p><p>Memberikan peluang kepada PTN untuk mendapatkan calon mahasiswa baru yang mempunyai prestasi akademik tinggi dengan kuota minimum 20% dengan biaya ditanggung pemerintah.</p>",
      },
      {
        id: "jadwal-pelaksanaan",
        title: "Jadwal Pelaksanaan",
        content:
          "<H2>Jadwal Kegiatan</H2><TABLE><thead><TR><TH>No</TH><TH>Kegiatan</TH><TH>Tanggal</TH></TR></thead></tbody><TR><TD>1</TD><TD>Registrasi Akun SNPMB Sekolah</TD><TD>08 Januari - 08 Februari 2024</TD></TR><TR><TD>2</TD><TD>Registrasi Akun SNPMB Siswa</TD><TD>08 Januari - 15 Februari 2024</TD></TR><TR><TD>3</TD><TD>Pengisian PDSS</TD><TD>09 Januari - 09 Februari 2024</TD></TR><TR><TD>4</TD><TD>Pendaftaran SNBP</TD><TD>14 - 28 Februari 2024</TD></TR><TR><TD>5</TD><TD>Pengumuman Hasil SNBP</TD><TD>26 Maret 2024</TD></TR></tbody></TABLE><p>Seluruh kegiatan pada hari yang sudah ditentukan akan diakhiri pada pukul 15.00 WIB.</p>",
        href: "/information/snbp/jadwal-pelaksanaan",
      },
      {
        id: "persyaratan",
        title: "Persyaratan",
        content:
          "<h2>Persyaratan Sekolah</h2><ol><li>SMA/MA/SMK yang mempunyai Nomor Pokok Sekolah Nasional (NPSN).</li><li>Memiliki akun SNPMB Sekolah untuk pengisian PDSS.</li><li>Ketentuan akreditasi untuk alokasi siswa eligible:<ul><li>Akreditasi A: 40% terbaik di sekolah</li><li>Akreditasi B: 25% terbaik di sekolah</li><li>Akreditasi C dan lainnya: 5% terbaik di sekolah</li></ul></li><li>Mengisi PDSS dan data siswa yang diisikan hanya yang eligible sesuai dengan ketentuan.</li></ol><h2>Persyaratan Siswa Pendaftar (Siswa <em>Eligible</em>)</h2><ol><li>Merupakan siswa SMA/MA/SMK kelas terakhir pada tahun 2024 yang memiliki prestasi unggul.</li><li>Warga Negara Indonesia (WNI) dan memiliki Nomor Induk Kependudukan (NIK).</li><li>Memiliki NISN dan terdaftar di PDSS.</li><li>Memiliki nilai rapor yang telah diisikan di PDSS sesuai dengan ketentuan.</li><li>Memiliki akun SNPMB Siswa untuk pendaftaran SNBP.</li><li>Wajib mengunggah PORTOFOLIO bagi yang memilih program studi Bidang Seni &amp; Olahraga.</li><li>Memiliki kesehatan yang memadai sehingga tidak mengganggu kelancaran proses studi.</li><li>Memiliki prestasi akademik dan memenuhi persyaratan yang ditentukan oleh masing-masing PTN.</li><li>Siswa yang telah dinyatakan lulus seleksi jalur SNBP 2024, SNBP 2023, dan Seleksi Nasional Masuk Perguruan Tinggi Negeri (SNMPTN) 2022 <strong>tidak dapat mengikuti UTBK-SNBT 2024.</strong></li><li>Siswa yang dinyatakan lulus seleksi jalur SNBP 2024 <strong>tidak dapat mengikuti seleksi Jalur Mandiri di PTN manapun.</strong></li></ol>",
        href: "/information/snbp/persyaratan",
      },
      {
        id: "tahapan-pendaftaran",
        title: "Tahapan Pendaftaran",
        content: `<h2>Tahapan Pendaftaran</h2><ol><li>Siswa eligible yang telah memiliki data di PDSS melakukan pendaftaran SNBP melalui laman <a target="_blank" href="https://portal-snpmb.bppp.kemdikbud.go.id"><strong>https://portal-snpmb.bppp.kemdikbud.go.id</strong></a> dengan menggunakan akun SNPMB Siswa.</li><li>Siswa pendaftar harus membaca dan memahami ketentuan SNBP tentang ketentuan memilih program studi dan memahami persyaratan yang ditetapkan oleh PTN yang dituju.</li><li>Siswa pendaftar pada program studi bidang Seni dan Olahraga wajib mengunggah portofolio dan dokumen bukti keterampilan yang telah disahkan oleh Kepala Sekolah menggunakan pedoman yang dapat diunduh dari laman <a target="_blank" href="https://snpmb.bppp.kemdikbud.go.id"><strong>https://portal-snpmb.bppp.kemdikbud.go.id.</strong></a></li><li>Siswa pendaftar wajib mencetak Kartu Peserta SNBP sebagai tanda bukti yang sah menjadi peserta SNBP 2024.</li><li>Daftar ulang di PTN tempat calon mahasiswa diterima mengikuti ketentuan PTN yang dituju</li></ol>`,
        href: "/information/snbp/tahapan-pendaftaran",
      },
      {
        id: "pilihan-program-studi",
        title: "Pilihan Program Studi",
        content: `<h2>Pilihan Program Studi</h2><ol>
        <li>Setiap siswa yang eligible diizinkan dapat memilih program studi di PTN Akademik, PTN Vokasi, dan/atau PTKIN.</li>
        <li>Setiap siswa dapat memilih <strong>2 (dua) program studi dari satu atau dua PTN</strong></li>
        <li>Jika memilih <strong>dua</strong> program studi, <strong>salah satu pilihan program studi harus berada di PTN pada Provinsi yang sama dengan SMA/SMK/MA asalnya</strong></li>
        <li>Jika memilih<strong> satu</strong> program studi, <strong>dapat memilih PTN yang berada di Provinsi manapun.</strong></li>
        <li>Daftar program studi dan daya tampung SNBP 2024 dapat dilihat pada laman <strong><a target="_blank" href="https://snpmb.bppp.kemdikbud.go.id">https://snpmb.bppp.kemdikbud.go.id.</a></strong></li></ol>`,
        href: "/information/snbp/pilihan-program-studi",
      },
      {
        id: "portofolio",
        title: "Portofolio",
        content: `<h2>Portofolio SNBP 2024</h2><ol>
        <li>Olahraga</li>
        <li>Seni Rupa, Desain, dan Kriya</li>
        <li>Seni Tari</li>
        <li>Seni Musik</li>
        <li>Seni Karawitan</li>
        <li>Etnomusikologi</li>
        <li>Teater</li>
        <li>Fotografi</li>
        <li>Film dan Televisi</li>
        <li>Seni Pedalangan</li>
        <li>Sendratasik</li>
      </ol>`,
        href: "/information/snbp/portofolio",
      },
      {
        id: "beasiswa-kip-kuliah",
        title: "Beasiswa KIP-Kuliah",
        content: `
        <h2>Peserta Pelamar Beasiswa KIP-Kuliah</h2>
        <ol>
	<li>Siswa pendaftar dari keluarga kurang mampu secara ekonomi dapat mengajukan bantuan biaya pendidikan skema Kartu Indonesia Pintar Kuliah (KIP Kuliah)</li>
	<li>Calon peserta yang mengajukan bantuan biaya pendidikan skema KIP Kuliah terlebih dahulu harus mempelajari prosedur pendaftaran program KIP Kuliah</li>
	<li>Pendaftaran KIP Kuliah di Kemendikbudristek hanya berlaku untuk pilihan prodi di PTN Akademik dan PTN Vokasi saja</li>
	<li>Informasi detail mengenai KIP Kuliah di Kemendikbudristek dapat diakses melalui laman <strong><a target="_blank" href="https://puslapdik.kemdikbud.go.id/">https://puslapdik.kemdikbud.go.id/</a></strong>; sedangkan informasi detaik KIP Kuliah di Kemenag dapat diakses melalui laman <a target="_blank" href="https://kip-kuliah.kemenag.go.id/"><strong>https://kip-kuliah.kemenag.go.id/</strong></a></li>
</ol>`,
        href: "/information/snbp/beasiswa-kip-kuliah",
      },
      {
        id: "layanan-bantuan",
        title: "Layanan Bantuan",
        content: `<h2>Layanan Bantuan SNBP</h2>
        <ol>
	<li>Layanan Email: <a target="_blank" href="https://halo-snpmb.bppp.kemdikbud.go.id">https://halo-snpmb.bppp.kemdikbud.go.id</a></li>
	<li>Call Center: (021) 3104041 atau 0804 1 450 450</li>
	<li>Instagram: <a target="_blank" href="https://www.instagram.com/_snpmbbppp/">@_snpmbbppp</a></li>
</ol>
`,
        href: "/information/snbp/layanan-bantuan",
      },
      {
        id: "berkas",
        title: "Berkas",
        content: `<h2>Berkas SNBP 2024</h2>
        <ul>
          <li><a href="https://raw.githubusercontent.com/himarplupi/assets-himarpl/main/pmb/leaflet-SNBP-2024_compressed.pdf">Leaflet SNBP 2024</a></li>
        </ul>`,
        href: "/information/snbp/berkas",
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
          "<h2 id='snbt'>SNBT</h2><img src='https://raw.githubusercontent.com/himarplupi/assets-himarpl/main/pmb/logo-snbt.jpg' alt='logo SNBT'></img><p>Seleksi Nasional Berbasis Tes (SNBT) 2024 merupakan seleksi masuk perguruan tinggi yang dilakukan berdasarkan hasil Ujian Tulis Berbasis Komputer (UTBK) dan dapat ditambah dengan kriteria lain sesuai dengan ketentuan yang ditetapkan PTN Akademik, PTN Vokasi, atau Perguruan Tinggi Keagamaan Agama Islam Negeri (PTKIN) yang bersangkutan. Seleksi dapat diikuti oleh siswa lulusan tahun 2022, 2023, dan 2024 dari pendidikan menengah (SMA/MA/SMK dan sederajat), serta lulusan Paket C tahun 2022, 2023, dan 2024 dengan umur maksimal 25 tahun (per 1 Juli 2024). Biaya penyelenggaraan SNBT ditanggung oleh peserta dan disubsidi oleh pemerintah.</p><h2>Tujuan</h2><ol><li>Memprediksi calon mahasiswa yang mampu menyelesaikan studi di Perguruan Tinggi Negeri (PTN) dengan baik dan tepat waktu. PTN adalah perguruan tinggi yang diselenggarakan oleh pemerintah, meliputi PTN Akademik, PTN Vokasi, dan/atau Perguruan Tinggi Keagamaan Islam Negeri (PTKIN).</li><li>Memberi kesempatan bagi calon mahasiswa untuk mengikuti tes secara fleksibel dengan memilih lokasi tes yang sesuai.</li><li>Menyeleksi calon mahasiswa yang diprediksi mampu menyelesaikan studi di PTN dengan baik dan tepat waktu berdasarkan hasil UTBK dan/atau kriteria lain yang ditetapkan bersama oleh PTN.</li><li>Memberi kesempatan bagi calon mahasiswa untuk memilih PTN secara lintas wilayah.</li></ol>",
      },
      {
        id: "jadwal-pelaksanaan",
        title: "Jadwal Pelaksanaan",
        content: `
        <h2>Jadwal Pelaksanaan</h2>
        <table border="1" cellpadding="1" cellspacing="1">
        <thead>
          <tr>
            <th class="text-align-center" scope="col">No</th>
            <th class="text-align-center" scope="col">Kegiatan</th>
            <th class="text-align-center" scope="col">Tanggal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-align-center">1</td>
            <td>Pembuatan Akun SNPMB</td>
            <td>08 Januari - 15 Februari 2024</td>
          </tr>
          <tr>
            <td class="text-align-center">2</td>
            <td>Pendaftaran UTBK-SNBT</td>
            <td>21 Maret - 05 April 2024</td>
          </tr>
          <tr>
            <td class="text-align-center">3</td>
            <td>Pelaksanaan UTBK Gelombang 1</td>
            <td>30 April dan 02 - 07 Mei 2024</td>
          </tr>
          <tr>
            <td class="text-align-center">4</td>
            <td>Pelaksanaan UTBK Gelombang 2</td>
            <td>14 - 20 Mei 2024</td>
          </tr>
          <tr>
            <td class="text-align-center">5</td>
            <td>Pengumuman Hasil SNBT</td>
            <td>13 Juni 2024</td>
          </tr>
          <tr>
            <td class="text-align-center">6</td>
            <td>Masa Unduh Sertifikat UTBK</td>
            <td>17 Juni - 31 Juli 2024</td>
          </tr>
        </tbody>
      </table>`,
        href: "/information/snbt/jadwal-pelaksanaan",
      },
      {
        id: "persyaratan",
        title: "Persyaratan",
        content: `
        <h2>Persyaratan Peserta</h2>
        <ol>
	<li>Memiliki&nbsp;<strong>Akun SNPMB Siswa</strong></li>
	<li>Warga Negara Indonesia (WNI) yang memiliki Nomor Induk Kependudukan (NIK).</li>
	<li>Siswa SMA/SMK/MA Kelas 12 pada tahun 2024 atau Peserta Didik Paket C tahun 2024 dengan umur maksimal 25 tahun (per 1 Juli 2024). Siswa yang belum mempunyai ijazah harus membawa Surat Keterangan Siswa Kelas 12 sekurang-kurangnya disertai dengan:<br>
  <ul>
      <li>
      identitas, meliputi Nama, Kelas, NISN, dan NPSN
      </li>
      <li>
      pas foto terbaru (berwarna)
      </li>
      <li>
      tanda tangan Kepala Sekolah/Madrasah
      </li>
      <li>
      stempel/cap sekolah
      </li>
  </ul></li>
	<li>Siswa lulusan SMA/SMK/MA sederajat tahun 2022 dan 2023 atau lulusan Paket C tahun 2022 dan 2023 dengan umur maksimal 25 tahun (<strong>per 1 Juli 2024)</strong>.</li>
	<li>Bagi lulusan SMA sederajat dari luar negeri harus memiliki ijazah yang sudah disetarakan.</li>
	<li>Bagi peserta yang memilih program studi bidang Seni dan /atau Olahraga&nbsp;<strong>wajib mengunggah portofolio</strong>.</li>
	<li><strong>Tidak lulus jalur SNBP 2024, SNBP 2023 atau SNMPTN 2022.</strong></li>
	<li>Memiliki kesehatan yang memadai sehingga tidak mengganggu kelancaran proses studi.</li>
	<li>Bagi peserta berkebutuhan khusus tuna netra wajib mengunggah&nbsp;<strong>Surat Pernyataan Tuna Netra</strong></li>
	<li>Membayar biaya pendaftaran UTBK bagi peserta non pelamar KIP Kuliah</li>
	<li>Peserta SNBT hanya diperbolehkan mengikuti UTBK 2024 sebanyak satu kali</li>
	<li>Hasil UTBK 2024 hanya berlaku untuk mengikuti SNBT dan penerimaan di PTN tahun 2024</li></ol>`,
        href: "/information/snbt/persyaratan",
      },
      {
        id: "tahapan-pendaftaran",
        title: "Tahapan Pendaftaran",
        content: `
        <h2>Tahapan Pendaftaran</h2>
    <p>Secara umum tahapan pendaftaran UTBK-SNBT sebagai berikut:</p>
    <ol>
      <li><strong>Login Portal SNPMB dan Memilih Menu Pendaftaran UTBK-SNBT</strong>

      <ul>
        <li>Masuk ke laman <strong><a target="_blank" href="https://portal-snpmb.bppp.kemdikbud.go.id">https://portal-snpmb.bppp.kemdikbud.go.id</a> </strong>menggunakan akun SNPMB</li>
      </ul>
      </li>
      <li><strong>Melengkapi Biodata</strong>
      <ul>
        <li>mengisi dan melengkapi biodata</li>
        <li>unggah pas foto berwarna terbaru</li>
        <li>verifikasi biodata</li>
        <li>unduh dan unggah pernyataan tunanetra dan/atau hambatan visual</li>
      </ul>
      </li>
      <li><strong>Memilih Program Studi dan Mengunggah Portofolio</strong>
      <ul>
        <li>Mengunggah portofolio wajib bagi peserta yang memilih program studi Bidang Seni dan/atau Olahraga</li>
      </ul>
      </li>
      <li><strong>Memilih Pusat UTBK</strong>
      <ul>
        <li>Memperoleh slip pembayaran biaya UTBK bagi peserta non pelamar KIP Kuliah</li>
      </ul>
      </li>
      <li><strong>Melakukan Pembayaran</strong>
      <ul>
        <li>Lembaga dan mekanisme pembayaran akan diinformasikan lebih lanjut</li>
      </ul>
      </li>
      <li><strong>Mencetak Kartu Peserta UTBK-SNBT</strong>
      <ul>
        <li>Login ke laman <strong><a target="_blank" href="https://portal-snpmb.bppp.kemdikbud.go.id">https://portal-snpmb.bppp.kemdikbud.go.id</a></strong> memilih menu pendaftaran UTBK-SNBT untuk unduh&nbsp;<strong>Kartu Peserta UTBK</strong></li>
      </ul>
      </li>
    </ol>`,
        href: "/information/snbt/tahapan-pendaftaran",
      },
      {
        id: "materi-utbk-snbt",
        title: "Materi UTBK-SNBT",
        content: `
        <h2>Materi UTBK-SNBT</h2>
        <ol>
          <li>Tes Potensi Skolastik (TPS)</li>
          <li>Literasi dalam Bahasa Indonesia dan Literasi dalam Bahasa Inggris</li>
          <li>Penalaran Matematika</li>
        </ol>`,
        href: "/information/snbt/materi-utbk-snbt",
      },
      {
        id: "biaya-utbk-snbt",
        title: "Biaya UTBK-SNBT",
        content: `
        <h2>Biaya UTBK-SNBT</h2>
        <ol>
          <li>Biaya UTBK sebesar <strong>Rp200.000,- (dua ratus ribu rupiah)</strong></li>
          <li>Biaya yang sudah dibayarkan tidak dapat ditarik kembali dengan alasan apa pun.</li>
        </ol>
        `,
        href: "/information/snbt/biaya-utbk-snbt",
      },
      {
        id: "pilihan-program-studi",
        title: "Pilihan Program Studi",
        content: `
        <h2>Ketentuan Pilihan Program Studi</h2>
        <ol>
          <li>Setiap peserta <strong>bebas memilih program studi di PTN Akademik, PTN Vokasi, dan/atau PTKIN.</strong></li>
          <li>Setiap peserta diperbolehkan <strong>memilih maksimal 4 (empat) program studi yang terdiri dari 2 (dua) pilihan Program Akademik (Sarjana) dan 2 (dua) pilihan Program Vokasi (Diploma Tiga dan Diploma Empat/Sarjana Terapan) </strong>dengan ketentuan sebagaimana tabel terlampir.</li>
          <li>Urutan dalam pemilihan program studi menyatakan prioritas pilihan.</li>
        </ol>
        <table border="1" cellpadding="1" cellspacing="1">
          <thead>
            <tr>
              <th class="text-align-center" scope="col">Jumlah Pilihan</th>
              <th class="text-align-center" scope="col">Ketentuan Pilihan</th>
              <th class="text-align-center" scope="col">Contoh Alternatif Pilihan Program Studi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 PIlihan Program Studi</td>
              <td>Bebas memilih di program apapun</td>
              <td>
              <ul>
                <li>1 Diploma Tiga; <strong>atau</strong></li>
                <li>1 Diploma Empat/Sarjana Terapan; <strong>atau</strong></li>
                <li>1 Sarjana</li>
              </ul>
              </td>
            </tr>
            <tr>
              <td>2 Pilihan Program Studi</td>
              <td>Bebas memilih di program apapun</td>
              <td>
              <ul>
                <li>2 Diploma Tiga; <strong>atau</strong></li>
                <li>2 Diploma Empat/Sarjana Terapan; <strong>atau</strong></li>
                <li>2 Sarjana; <strong>atau</strong></li>
                <li>1 Diploma Tiga dan 1 Sarjana; <strong>atau</strong></li>
                <li>1 Diploma Empat/Sarjana Terapan dan 1 Sarjana</li>
              </ul>
              </td>
            </tr>
            <tr>
              <td>3 Pilihan Program Studi</td>
              <td>
              <p>2 program akademik dan 1 program vokasi <strong>atau</strong></p>

              <p>1 program akademik dan 2 program vokasi</p>
              </td>
              <td>
              <ul>
                <li>2 Sarjana dan 1 Diploma Tiga; <strong>atau</strong></li>
                <li>2 Sarjana dan 1 Diploma Empat/Sarjana Terapan; <strong>atau</strong></li>
                <li>1 Sarjana dan 2 Diploma Tiga; <strong>atau</strong></li>
                <li>1 Sarjana dan 2 Diploma Empat/Sarjana Terapan</li>
              </ul>
              </td>
            </tr>
            <tr>
              <td>4 Pilihan Program Studi</td>
              <td>
              <p>2 program akademik <strong>dan</strong> 2 program vokasi,</p>

              <p><strong>minimal ada 1 program Diploma Tiga</strong></p>
              </td>
              <td>
              <ul>
                <li>2 Sarjana, 1 Diploma Tiga, dan 1 Diploma Empat/Sarjana Terapan; <strong>atau</strong></li>
                <li>2 Sarjana dan 2 Diploma Tiga</li>
              </ul>
              </td>
            </tr>
          </tbody>
        </table>`,
        href: "/information/snbt/pilihan-program-studi",
      },
      {
        id: "portofolio",
        title: "Portofolio",
        content: `
        <h2>Portofolio SNBT 2024</h2>
        <ol>
          <li>Olahraga</li>
          <li>Seni Rupa, Desain, dan Kriya</li>
          <li>Seni Tari</li>
          <li>Seni Musik</li>
          <li>Seni Karawitan</li>
          <li>Etnomusikologi</li>
          <li>Teater</li>
          <li>Fotografi</li>
          <li>Film dan Televisi</li>
          <li>Seni Pedalangan</li>
          <li>Sendratasik</li>
        </ol>
      `,
        href: "/information/snbt/portofolio",
      },
      {
        id: "beasiswa-kip-kuliah",
        title: "Beasiswa KIP-Kuliah",
        content: `
        <h2>Peserta Pelamar Beasiswa KIP-Kuliah</h2>
        <ul>
          <li>Informasi detail mengenai KIP Kuliah dapat dilihat pada Pusat Layanan Pembiayaan Pendidikan melalui laman <strong><a href="https://puslapdik.kemdikbud.go.id/">https://puslapdik.kemdikbud.go.id/</a></strong></li>
          <li>Informasi detail KIP Kuliah di Kemenag dapat diakses melalui laman <strong><a href="https://kip-kuliah.kemenag.go.id/">https://kip-kuliah.kemenag.go.id/</a></strong></li>
        </ul>`,
        href: "/information/snbt/beasiswa-kip-kuliah",
      },
      {
        id: "layanan-bantuan",
        title: "Layanan Bantuan",
        content: `
        <h2>Layanan Bantuan SNBT 2024</h2>
        <ol>
          <li>Layanan Email: <strong><a target="_blank" href="https://halo-snpmb.bppp.kemdikbud.go.id">https://halo-snpmb.bppp.kemdikbud.go.id</a></strong></li>
          <li>Call Center:
          <ul>
            <li>(021) 3104041</li>
            <li>0804 1 450 450</li>
          </ul>
          </li>
        </ol>`,
        href: "/information/snbt/layanan-bantuan",
      },
      {
        id: "berkas",
        title: "Berkas",
        content: `
          <h2>Berkas SNBT 2024</h2>
          <ul>
            <li><a href="https://raw.githubusercontent.com/himarplupi/assets-himarpl/main/pmb/leaflet-SNBT-2024_compressed.pdf">Leaflet SNBT 2024</a></li>
          </ul>`,
        href: "/information/snbt/berkas",
      },
    ],
    href: "/information/snbt",
  },
  {
    id: "sm-upi-reguler",
    description: "Seleksi Mandiri UPI Reguler",
    title: "SM-UPI Reguler",
    href: "/information/sm-upi-reguler",
    items: [
      {
        id: "gambaran",
        title: "Gambaran Umum",
        href: "/information/sm-upi-reguler",
        content: `
          <h2>Seleksi Mandiri UPI Reguler</h2>
          <p>Seleksi Mandiri Reguler Universitas Pendidikan Indonesia Tahun 2023 adalah seleksi yang dilakukan oleh UPI secara mandiri yang ditetapkan berdasarkan hasil kombinasi hasil Tes Psikologis Bidang Minat, Tes Potensi Skolastik, Tes Literasi (Literasi dalam Bahasa Indonesia dan dalam Bahasa Inggris) dan Tes Penalaran Matematika yang dilakukan oleh Universitas Pendidikan Indonesia. Untuk beberapa program sudi, selain didasarkan pada hasil Tes, akan dilakukan juga Ujian Keterampilan dan/atau Wawancara. Biaya penyelenggaraan SM UPI dibebankan kepada peserta seleksi.</p>
          <h2>Tujuan</h2>
          <p>Seleksi Mandiri Reguler Universitas Pendidikan Indonesia (SM UPI) Tahun 2023 bertujuan untuk memperoleh calon mahasiswa unggul dengan memberi kesempatan kepada masyarakat secara lebih luas untuk menjadi mahasiswa UPI, dan berkontribusi dalam meningkatkan kualitas pendidikan. Seleksi Mandiri UPI dilakukan untuk memfasilitasi masih banyaknya calon mahasiswa yang berpotensi tinggi namun belum dapat lulus pada seleksi SNBP, UTBK-SNBT, dan UTBK-SMM PTN Barat. Melalui kesempatan mengikuti seleksi mandiri di UPI diharapkan calon mahasiswa yang berpotensi tinggi tersebut dapat mengapai cita-citanya dan berkontribusi dalam pembangunan nasional, khususnya dalam bidang pendidikan.</p>
        `,
      },
      {
        id: "jadwal-pelaksanaan",
        title: "Waktu Pendaftaran",
        href: "/information/sm-upi-reguler/waktu-pendaftaran",
        content: `
        <h2>Waktu Pendaftaran</h2>
        <table>
          <thead>
              <tr>
                  <th>No</th>
                  <th>Kegiatan</th>
                  <th>Tanggal</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>1</td>
                  <td>Pengambilan Nomor Bayar</td>
                  <td>16 Mei - 30 Juni 2023</td>
              </tr>
              <tr>
                  <td>2</td>
                  <td>Pembayaran Biaya Pendaftaran</td>
                  <td>16 Mei 2023 - 30 Juni 2023 Pukul 15.00 WIB</td>
              </tr>
              <tr>
                  <td>3</td>
                  <td>Pengisian biodata peserta</td>
                  <td>16 Mei 2023 - 30 Juni 2023 Pukul 23.59 WIB</td>
              </tr>
              <tr>
                  <td>4</td>
                  <td>Pencetakan Kartu Peserta</td>
                  <td>16 Mei 2023 - 30 Juni 2023 Pukul 23.59 WIB</td>
              </tr>
          </tbody>
      </table>
        `,
      },
      {
        id: "persyaratan",
        title: "Persyaratan",
        href: "/information/sm-upi-reguler/persyaratan",
        content: `
        <h2>Persyaratan Umum</h2>
        <p>Peserta SM UPI harus memenuhi persyaratan umum sebagai berikut:</p>
        <ul>
            <li>Lulusan SMA/MA/SMK/Paket C tahun 2023, 2022, dan 2021.</li>
            <li>Mempunyai kesehatan fisik dan mental yang tidak mengganggu kelancaran belajar di program studi pilihannya.</li>
        </ul>
        <h2>Persyaratan Khusus</h2>
        <p>Peserta SM UPI harus memenuhi persyaratan khusus sebagai berikut:</p>
        <ul>
            <li>Pendaftar yang memilih program studi Pendidikan IPA (International Program on Science Education/IPSE) mampu berbahasa Inggris secara aktif (perkuliahan diselenggarakan dalam Bahasa Inggris).</li>
            <li>Pendaftar yang memilih program studi Ilmu Pendidikan Agama Islam mampu membaca Alqur'an.</li>
        </ul>
        `,
      },
      {
        id: "ketentuan",
        title: "Ketentuan",
        href: "/information/sm-upi-reguler/ketentuan",
        content: `
        <h2>Ketentuan Pendaftaran</h2>
        <ol>
          <li>
          Pendaftar SM UPI dapat memilih 2 (dua) Program Studi pada kelompok
          bidang minat yang sama maupun berbeda, yakni Bidang Minat Kependidikan
          dan/atau Non-Kependidikan.          
          </li>
          <li>
          Pendaftaran dilakukan secara <em>online</em> pada laman 
          <a href="https://pmb.upi.edu" target="_blank">https://pmb.upi.edu</a>
          </li>
          <li>
          Setiap pendaftar hanya diberikan satu kali kesempatan untuk melakukan
          pendaftaran secara daring (<em>online</em>).
          </li>
          <li>
          Jika peserta ingin mengubah kembali pilihan program studi setelah proses
          pendaftaran selesai dilakukan, maka pendaftar harus melakukan proses dari
          awal serta melakukan pembayaran uang pendaftaran kembali ke bank. 
          </li>
          <li>
          Mengisi Form Pernyataan Kesediaan Membayar Biaya Pendidikan dan
          mengunggahnya pada proses pendaftaran SM UPI. 
          </li>
        </ol>
        `,
      },
      {
        id: "mekanisme",
        title: "Mekanisme",
        href: "/information/sm-upi-reguler/mekanisme",
        content: `
        <h2>Mekanisme Pendaftaran</h2>
        <p>
        Setelah peserta masuk pada laman <a href="https://pmb.upi.edu">https://pmb.upi.edu</a>, proses pendaftaran selanjutnya dilakukan berdasarkan tahap berikut: 
        </p>
        <ol>
            <li>
                <strong>Ambil Nomor Bayar</strong><br>
                Peserta dapat meng-klik tombol "Ambil No Bayar" yang disediakan kemudian isikan data yang diminta untuk memperoleh nomor bayar.
            </li>
            <li>
                <strong>Bayar Biaya Pendaftaran</strong><br>
                Setelah mendapatkan Nomor Bayar, Pendaftar menyetorkan biaya pendaftaran dan seleksi masuk melalui Teller Bank Negera Indonesia (BNI), Bank Mandiri, Bank Jabar Banten (BJB) di cabang manapun atau dengan metode lain (seperti e-Banking dan melalui ATM) dengan menyebutkan/memasukkan Nomor Bayar PMB SM UPI. Setelah biaya disetorkan, peserta akan mendapatkan bukti pembayaran dan PIN.
            </li>
            <li>
                <strong>Lengkapi Biodata sampai Memperoleh No Seleksi</strong><br>
                Lengkapi biodata dengan cara log-in menggunakan nomor bayar dan PIN yang diperoleh, lanjutkan pengisian form sampai memperoleh nomor seleksi.
            </li>
            <li>
                <strong>Cetak Kartu Peserta dan Cek Lokasi Ujian</strong><br>
                Peserta harus mencetak kartu peserta (secara fisik) untuk diperlihatkan kepada pengawas saat pelaksanaan ujian. Kartu Peserta akan digunakan untuk syarat mengikuti ujian. Pada Kartu Peserta terdapat Informasi Jadwal dan Lokasi Ujian.
            </li>
            <li>
                <strong>Cek Informasi Ujian</strong><br>
                Peserta diharapkan dapat selalu mengakses laman <a href="https://pmb.upi.edu" target="_blank">https://pmb.upi.edu</a> dan akun pendaftaran masing-masing untuk mendapatkan informasi terbaru terkait ujian. Peserta juga dapat melihat informasi hasil tes seleksi melalui laman <a href="https://pmb.upi.edu" target="_blank">https://pmb.upi.edu</a> pada akun pendaftaran masing-masing.
            </li>
        </ol>`,
      },
      {
        id: "biaya",
        title: "Biaya",
        href: "/information/sm-upi-reguler/biaya",
        content: `
        <h2>Biaya Pendaftaran 2023</h2>
        <ul>
          <li>
            Biaya pendaftaran SM UPI 2023 adalah sebesar Rp 350.000,- (Tiga Ratus Lima Puluh Ribu Rupiah).
          </li>
          <li>
            Biaya yang sudah dibayarkan tidak dapat ditarik kembali dengan alasan apa pun.
          </li>
        </ul>
        <h2>Biaya Pendidikan SM-UPI (Rekayasa Perangkat Lunak Kampus UPI di Cibiru) 2023</h2>
        <table>
          <thead>
            <tr>
              <th align="center">No</th>
              <th align="center">Nama</th>
              <th align="center">Biaya</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="center">1</td>
              <td>Registrasi</td>
              <td align="right">Rp 1.500.000,-</td>
            </tr>
            <tr>
              <td align="center">2</td>
              <td>Penyelenggara Pembelajaran</td>
              <td align="right">Rp 5.460.000,-</td>
            </tr>
            <tr>
              <td align="center">3</td>
              <td>Pengembangan Fasilitas dan Mutu Akademik</td>
              <td align="right">Rp 7.500.000,-</td>
            </tr>
            <tr>
              <td align="center">4</td>
              <td>Pengembangan Lembaga</td>
              <td align="right">Rp 15.000.000,-</td>
            </tr>
            <tr>
              <td align="center">5</td>
              <td>Jumlah</td>
              <td align="right">Rp 29.460.000,-</td>
            </tr>
          </tbody>
        </table>
        `,
      },
      {
        id: "berkas",
        title: "Berkas",
        href: "/information/sm-upi-reguler/berkas",
        content: `
        <h2>Berkas SM-UPI Reguler 2023</h2>
        <ul>
          <li>
            <a href="https://raw.githubusercontent.com/himarplupi/assets-himarpl/main/pmb/panduan-sm-upi-2023.pdf">Panduan Seleksi Mandiri UPI Reguler 2023</a>
          </li>
          <li>
            <a href="https://raw.githubusercontent.com/himarplupi/assets-himarpl/main/pmb/biaya-pendidikan-sm-upi-2023.pdf">Biaya Pendidikan Seleksi Mandiri UPI Reguler 2023</a>
          </li>
          <li>
            <a href="https://raw.githubusercontent.com/himarplupi/assets-himarpl/main/pmb/tahapan-registrasi-sm-upi-2023.pdf">Tahapan Registrasi Seleksi Mandiri UPI 2023</a>
          </li>
        </ul>
        `,
      },
    ],
  },
  {
    id: "sm-upi-pi",
    description: "Seleksi Mandiri UPI Prestasi Istimewa",
    title: "SM-UPI Prestasi Istimewa",
    href: "/information/sm-upi-pi",
    items: [
      {
        id: "gambaran",
        title: "Gambaran Umum",
        href: "/information/sm-upi-pi",
        content: `
          <h2>Seleksi Mandiri UPI Prestasi Istimewa</h2>
          <p>
            Seleksi calon mahasiswa baru berdasarkan Prestasi Istimewa (PI) diperlukan Universitas
            Pendidikan Indonesia untuk meningkatkan perolehan prestasi akademik dan non-akademik
            mahasiswa UPI pada tingkat nasional maupun internasional. Selain itu merupakan bentuk
            penghargaan kepada siswa yang berprestasi dan menunjukan keunggulan dengan
            mendapatkan pengakuan dari masyarakat.
          </p>
          <p>
            Siswa yang dapat mendaftar pada seleksi PI adalah siswa yang memiliki prestasi karya seni
            atau teknologi monumental yang mendapatkan pengakuan masyarakat, hafidz Al-Qur’an
            minimal 15 Juz, atau siswa yang memperoleh medali dalam bidang akademik maupun nonakademik pada kompetisi tingkat kabupaten/kota, provinsi, nasional dan internasional seperti
            peraih medali Olimpiade, MTQ, dan pertandingan olahraga. 
          </p>
          <h2>Tujuan</h2>
          <p>
            Penerimaan mahasiswa baru UPI melalui jalur Prestasi Istimewa (PI) bertujuan
            memberikan penghargaan kepada siswa yang memiliki prestasi istimewa yang
            ditunjukan melalui karya seni atau teknologi monumental yang mendapat pengakuan
            masyarakat atau berupa prestasi akademik maupun non-akademik pada kompetisi di
            tingkat nasional maupun internasional. Melalui seleksi calon mahasiswa baru PI ini
            diharapkan dapat meningkatkan keunggulan dan prestasi mahasiswa UPI pada tingkat
            nasional maupun internasional. 
          </p>
        `,
      },
      {
        id: "waktu-pendaftaran",
        title: "Waktu Pendaftaran",
        href: "/information/sm-upi-pi/waktu-pendaftaran",
        content: `
          <h2>Waktu Pendaftaran</h2>
          <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Kegiatan</th>
                    <th>Tanggal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Pengambilan Nomor Bayar</td>
                    <td>16 Mei - 30 Juni 2023</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Pembayaran Biaya Pendaftaran</td>
                    <td>16 Mei 2023 - 30 Juni 2023 Pukul 15.00 WIB</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Pengisian biodata peserta</td>
                    <td>16 Mei 2023 - 30 Juni 2023 Pukul 23.59 WIB</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Pencetakan Kartu Peserta</td>
                    <td>16 Mei 2023 - 30 Juni 2023 Pukul 23.59 WIB</td>
                </tr>
            </tbody>
        </table>
        `,
      },
      {
        id: "persyaratan",
        title: "Persyaratan",
        href: "/information/sm-upi-pi/persyaratan",
        content: `
          <h2>Persyaratan Umum</h2>
          <ul>
            <li>
            Siswa memiliki karya seni, desain dan/atau teknologi monumental yang
            mendapatkan pengakuan masyarakat dibuktikan dengan surat keterangan
            dan/atau sertifikat dari lembaga yang berwenang (seperti Kepala Sekolah)
            dan/atau informasi dari media (dibuktikan dengan <em>link web</em> yang relevan); atau 
            </li>
            <li>
            Siswa <em>hafidz</em> Al-Qur'an minimal 15 Juz dibuktikan dengan Sertifikat/Surat Keterangan dan uji kinerja khusus; atau
            </li>
            <li>
            Siswa memiliki prestasi juara berupa medali (emas, perak atau perunggu) atau
            ranking (1, 2 atau 3) lima tahun terakhir pada olimpiade/kejuaraan akademik,
            kejuaraan olahraga, seni, desain, dan/atau keagamaan [seperti Musabaqoh
            Tilawatil Quran (MTQ)] tingkat provinsi/nasional/internasional dibuktikan
            dengan surat keterangan dan/atau sertifikat dari lembaga yang berwenang dan
            uji validasi khusus
            </li>
            <li>
            Lulusan SMA/MA/SMK/Paket C tahun 2023, 2022, 2021 dan 2020. 
            </li>
            <li>
            Mempunyai kesehatan fisik dan mental yang tidak mengganggu kelancaran belajar di program studi pilihannya.
            </li>
          </ul>
          <h2>Persyaratan Khusus</h2>
          <p>
          Pada beberapa program studi, peserta harus memenuhi persyaratan khusus sebagai
          berikut:
          </p>
          <ul>
              <li>
              Pendaftar yang memilih program studi Pendidikan IPA (<em>International Program on Science Education</em>/IPSE) mampu berbahasa Inggris secara aktif
                (perkuliahan diselenggarakan dalam Bahasa Inggris).                 
              </li>
              <li>
              Pendaftar yang memilih program studi Ilmu Pendidikan Agama Islam mampu membaca Alqur'an.
              </li>
          </ul>
        `,
      },
      {
        id: "ketentuan",
        title: "Ketentuan",
        href: "/information/sm-upi-pi/ketentuan",
        content: `
          <h2>Ketentuan Pendaftaran</h2>
          <ol>
              <li>
                  Pendaftar PI hanya dapat memilih 1 (satu) Program Studi.
              </li>
              <li>
                  Pendaftaran dilakukan secara daring (online) pada laman <a href="https://pmb.upi.edu" target="_blank">https://pmb.upi.edu</a>.
              </li>
              <li>
                  Uang yang sudah disetor ke bank tidak dapat diminta kembali.
              </li>
              <li>
                  Setiap pendaftar hanya diberikan satu kali kesempatan untuk melakukan pendaftaran secara daring (online).
              </li>
              <li>
                  Jika peserta ingin mengubah pilihan program studi setelah proses pendaftaran selesai dilakukan, maka pendaftar harus melakukan proses dari awal serta melakukan pembayaran uang pendaftaran kembali ke bank.
              </li>
          </ol>
        `,
      },
      {
        id: "mekanisme",
        title: "Mekanisme",
        href: "/information/sm-upi-pi/mekanisme",
        content: `
<h2>Mekanisme Pendaftaran</h2>
<p>
Setelah peserta masuk pada laman <a href="http://app.pmb.upi.edu/sm-pi/" target="_blank">http://app.pmb.upi.edu/sm-pi/</a>, proses pendaftaran
selanjutnya dilakukan berdasarkan tahap berikut: 
</p>
<ol>
    <li>
        <strong>Ambil Nomor Bayar</strong><br>
        Peserta dapat meng-klik tombol "Ambil No Bayar" yang disediakan kemudian isikan data yang diminta untuk memperoleh nomor bayar.
    </li>
    <li>
        <strong>Bayar Biaya Pendaftaran</strong><br>
        Setelah mendapatkan Nomor Bayar, Pendaftar menyetorkan biaya pendaftaran dan seleksi masuk melalui Teller Bank Negera Indonesia (BNI), Bank Mandiri, Bank Jabar Banten (BJB) di cabang manapun atau dengan metode lain (seperti e-Banking dan melalui ATM) dengan menyebutkan/memasukkan Nomor Bayar PMB SM UPI. Setelah biaya disetorkan, peserta akan mendapatkan bukti pembayaran dan PIN.
    </li>
    <li>
        <strong>Lengkapi Biodata sampai Memperoleh No Seleksi</strong><br>
        Lengkapi biodata dengan cara log-in menggunakan nomor bayar dan PIN yang diperoleh, lanjutkan pengisian form sampai memperoleh nomor seleksi.
    </li>
    <li>
        <strong>Cetak Kartu Peserta dan Cek Lokasi Ujian</strong><br>
        Peserta harus mencetak kartu peserta (secara fisik) untuk diperlihatkan kepada pengawas saat pelaksanaan ujian. Kartu Peserta akan digunakan untuk syarat mengikuti ujian. Pada Kartu Peserta terdapat Informasi Jadwal dan Lokasi Ujian.
    </li>
    <li>
        <strong>Cek Informasi Ujian</strong><br>
        Peserta diharapkan dapat selalu mengakses laman <a href="https://pmb.upi.edu" target="_blank">https://pmb.upi.edu</a> dan akun pendaftaran masing-masing untuk mendapatkan informasi terbaru terkait ujian. Peserta juga dapat melihat informasi hasil tes seleksi melalui laman <a href="https://pmb.upi.edu" target="_blank">https://pmb.upi.edu</a> pada akun pendaftaran masing-masing.
    </li>
</ol>
`,
      },
      {
        id: "biaya",
        title: "Biaya",
        href: "/information/sm-upi-pi/biaya",
        content: `
        <h2>Biaya Pendaftaran 2023</h2>
        <ul>
          <li>
            Biaya pendaftaran PI UPI 2023 adalah sebesar Rp 350.000,- (Tiga Ratus Lima Puluh Ribu Rupiah).
          </li>
          <li>
            Biaya yang sudah dibayarkan tidak dapat ditarik kembali dengan alasan apa pun.
          </li>
        </ul>
        <h2>Biaya Pendidikan SM-UPI (Rekayasa Perangkat Lunak Kampus UPI di Cibiru) 2023</h2>
        <table>
          <thead>
            <tr>
              <th align="center">No</th>
              <th align="center">Nama</th>
              <th align="center">Biaya</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="center">1</td>
              <td>Registrasi</td>
              <td align="right">Rp 1.500.000,-</td>
            </tr>
            <tr>
              <td align="center">2</td>
              <td>Penyelenggara Pembelajaran</td>
              <td align="right">Rp 5.460.000,-</td>
            </tr>
            <tr>
              <td align="center">3</td>
              <td>Pengembangan Fasilitas dan Mutu Akademik</td>
              <td align="right">Rp 7.500.000,-</td>
            </tr>
            <tr>
              <td align="center">4</td>
              <td>Pengembangan Lembaga</td>
              <td align="right">Rp 15.000.000,-</td>
            </tr>
            <tr>
              <td align="center">5</td>
              <td>Jumlah</td>
              <td align="right">Rp 29.460.000,-</td>
            </tr>
          </tbody>
        </table>`,
      },
      {
        id: "berkas",
        title: "Berkas",
        href: "/information/sm-upi-pi/berkas",
        content: `
        <h2>Berkas SM-UPI Prestasi Istimewa 2023</h2>
        <ul>
          <li>
            <a href="https://raw.githubusercontent.com/himarplupi/assets-himarpl/main/pmb/panduan-pi-upi-2023.pdf">Panduan Seleksi Mandiri UPI Prestasi Istimewa 2023</a>
          </li>
          <li>
            <a href="https://raw.githubusercontent.com/himarplupi/assets-himarpl/main/pmb/biaya-pendidikan-sm-upi-2023.pdf">Biaya Pendidikan Seleksi Mandiri UPI Prestasi Istimewa 2023</a>
          </li>
          <li>
            <a href="https://raw.githubusercontent.com/himarplupi/assets-himarpl/main/pmb/tahapan-registrasi-sm-upi-2023.pdf">Tahapan Registrasi Seleksi Mandiri UPI 2023</a>
          </li>
        </ul>
        `,
      },
    ],
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const registrationType = registrationTypes.find((t) => t.id === params.type);

  return {
    title: registrationType?.title + " | HIMARPL",
    description: registrationType?.description,
  };
}

export default async function RegistrationTypes({
  params: { type },
}: {
  params: { type: string };
}) {
  const registrationType = registrationTypes.find((t) => t.id === type);

  if (!registrationType) {
    return notFound();
  }

  return <Layout registrationType={registrationType} />;
}
