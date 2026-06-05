export const steps = [
  {
    id: "personal",
    title: "Data Diri",
    description:
      "Lengkapi informasi dasar berikut untuk memulai proses rekomendasi.",
  },
  {
    id: "scores",
    title: "Nilai Rapor",
    description:
      "Ketik nilai rata-rata rapormu untuk setiap mata pelajaran. Skala 0 – 100.",
  },
  {
    id: "career",
    title: "Cita-cita",
    description:
      "Pilih satu profesi yang paling ingin kamu capai di masa depan. Pilih yang paling sesuai dengan mimpimu saat ini.",
  },
  {
    id: "jurusan",
    title: "Minat Jurusan",
    description:
      "Pilih satu kelompok jurusan yang paling menarik minatmu. Ini membantu model memahami kecenderunganmu lebih dalam.",
  },
  {
    id: "activities",
    title: "Kebiasaan & Aktivitas",
    description:
      "Ceritakan kebiasaan belajar dan aktivitasmu sehari-hari. Data ini digunakan langsung oleh model AI.",
  },
];

export const questions = {
  // Step 1: Data Diri
  personal: [
    {
      id: "full_name",
      question: "Nama Lengkap",
      type: "text",
      placeholder: "Masukkan nama lengkap anda",
    },
    {
      id: "gender",
      question: "Jenis Kelamin",
      type: "radio",
      options: ["Laki-Laki", "Perempuan"],
    },
    {
      id: "school",
      question: "Asal Sekolah",
      type: "text",
      placeholder: "Masukkan asal sekolah anda saat ini",
    },
    {
      id: "class",
      question: "Kelas",
      type: "radio",
      options: ["10", "11", "12"],
    },
  ],
  // Step 2: Nilai Rapor
  scores: [
    {
      id: "matematika",
      question: "Matematika",
      type: "number",
      placeholder: "0 / 100",
    },
    {
      id: "sejarah",
      question: "Sejarah",
      type: "number",
      placeholder: "0 / 100",
    },
    {
      id: "fisika",
      question: "Fisika",
      type: "number",
      placeholder: "0 / 100",
    },
    {
      id: "kimia",
      question: "Kimia",
      type: "number",
    },
    {
      id: "biologi",
      question: "Biologi",
      type: "number",
    },
    {
      id: "bahasa_inggris",
      question: "Bahasa Inggris",
      type: "number",
    },
    {
      id: "geografi",
      question: "Geografi",
      type: "number",
    },
  ],
  // Step 3: Cita-cita Karir
  career: [
    {
      id: "career",
      question: "Profesi yang kamu inginkan:",
      type: "radio",
      options: [
        "Akuntan",
        "Seniman",
        "Bankir",
        "Pengusaha",
        "Insinyur Konstruksi",
        "Desainer",
        "Dokter",
        "Game Developer",
        "Pegawai Pemerintah",
        "Pengacara",
        "Developer Properti",
        "Ilmuwan",
        "Studi Media Sosial",
        "Software Engineer",
        "Innvestor Saham",
        "Guru / Pendidik",
        "Penulis",
      ],
    },
  ],
  // Step 4: Minat Jurusan
  jurusan: [
    {
      id: "jurusan",
      question: "Minat Jurusan",
      type: "radio",
      options: [
        "Bisnis & Keuangan",
        "Sains & Kesehatan",
        "Seni & Kreatif",
        "Sosial & Hukum",
        "Teknik & Konstruksi",
        "Teknologi",
      ],
    },
  ],
  // Step 5: Kebiasaan & Aktivitas
  activities: [
    {
      id: "study_hours",
      question: "Jam belajar mandiri per minggu",
      type: "radio",
      options: [
        "Kurang dari 5 jam",
        "5 - 10 jam",
        "11 - 20 jam",
        "Lebih dari 20 jam",
      ],
    },
    {
      id: "extracurricular",
      question: "Aktif ekstrakurikuler?",
      type: "radio",
      options: ["Ya, aktif", "Tidak"],
    },
    {
      id: "work",
      question: "Sambil bekerja paruh waktu?",
      type: "radio",
      options: ["Ya", "Tidak"],
    },
    {
      id: "avg_absences",
      question: "Rata-rata absen per bulan",
      type: "radio",
      options: ["0 hari", "1 - 3 hari", "4 - 7 hari", "Lebih dari 7 hari"],
    },
  ],
};
