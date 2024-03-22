import { notFound } from "next/navigation";
import { Layout } from "./_components/layout";

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
          
        `,
      },
    ],
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

  return <Layout registrationType={registrationType} />;
}
