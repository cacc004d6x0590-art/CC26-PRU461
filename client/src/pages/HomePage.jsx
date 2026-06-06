import { Link } from "react-router-dom";
import {
  Sparkles,
  Brain,
  Target,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  const features = [
    {
      icon: Brain,
      title: "Analisis Minat",
      description:
        "Sistem AI menganalisis minat dan passion kamu secara mendalam",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      title: "Analisis Kemampuan",
      description: "Evaluasi kemampuan akademik dan skill yang kamu miliki",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Sparkles,
      title: "Rekomendasi Jurusan AI",
      description:
        "Dapatkan rekomendasi jurusan terbaik berbasis machine learning",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: TrendingUp,
      title: "Prediksi Prospek Karier",
      description: "Lihat prospek karier masa depan dari jurusan pilihan",
      gradient: "from-cyan-500 to-blue-500",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Ikuti Tes",
      description: "Kerjakan tes minat dan kemampuan",
    },
    {
      number: "02",
      title: "Dapatkan Rekomendasi",
      description: "Terima rekomendasi jurusan terbaik untukmu",
    },
  ];

  const testimonials = [
    {
      name: "Andi Pratama",
      role: "Siswa SMAN 1 Jakarta",
      content:
        "Aplikasi ini sangat membantu! Saya jadi lebih yakin memilih jurusan Teknik Informatika.",
      avatar: "AP",
      rating: 5,
    },
    {
      name: "Siti Nurhaliza",
      role: "Siswa SMAN 3 Bandung",
      content:
        "Rekomendasi yang diberikan sangat akurat dengan minat saya. Recommended!",
      avatar: "SN",
      rating: 5,
    },
    {
      name: "Budi Santoso",
      role: "Siswa SMAN 5 Surabaya",
      content:
        "Interface-nya user friendly dan tesnya tidak membosankan. Terima kasih!",
      avatar: "BS",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br overflow-x-hidden from-slate-50 via-blue-50 to-purple-50">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                JurusanKu AI
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#fitur"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Fitur
              </a>
              <a
                href="#cara-kerja"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Cara Kerja
              </a>
              <a
                href="#testimoni"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Testimoni
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-25 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">
                  Powered by AI Technology
                </span>
              </div>

              <h1 className="lg:text-5xl text-4xl font-bold leading-tight">
                Temukan Jurusan Kuliah yang{" "}
                <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Sesuai dengan Minat dan Kemampuanmu
                </span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed">
                Sistem rekomendasi berbasis AI yang membantu siswa SMA kelas 12
                menemukan jurusan kuliah terbaik berdasarkan analisis minat,
                kemampuan, dan prospek karier masa depan.
              </p>

              <div className="flex flex-col lg:flex-row gap-4">
                <Link
                  to="/test"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all text-lg font-semibold"
                >
                  Mulai Tes Sekarang
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="flex items-start lg:items-center gap-8 text-center">
                <div>
                  <div className="sm:text-2xl lg:text-3xl font-bold text-slate-800">
                    10,000+
                  </div>
                  <div className="text-sm text-slate-600">Siswa Terdaftar</div>
                </div>
                <div className="w-px h-12 bg-slate-300"></div>
                <div>
                  <div className="sm:text-2xl lg:text-3xl font-bold text-slate-800">
                    95%
                  </div>
                  <div className="text-sm text-slate-600">Akurasi AI</div>
                </div>
                <div className="w-px h-12 bg-slate-300"></div>
                <div>
                  <div className="sm:text-2xl lg:text-3xl font-bold text-slate-800">
                    50+
                  </div>
                  <div className="text-sm text-slate-600">Jurusan</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-blue-500 to-purple-500 rounded-3xl opacity-20 blur-3xl"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-slate-200">
                <div className="inline-block bg-gray-100 text-center align-middle w-full rounded-2xl">
                  <div className="flex items-center justify-center w-full h-full">
                    <img
                      src="https://images.unsplash.com/photo-1618758992779-47151c11b39c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwQUklMjB0ZWNobm9sb2d5JTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3ODE2ODE0NHww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-6 right-0 bg-white rounded-2xl shadow-xl p-4 border border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-linear-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-600">Match Rate</div>
                      <div className="text-2xl font-bold text-slate-800">
                        98.5%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="fitur" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Fitur Unggulan
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Teknologi AI terdepan untuk membantu kamu menemukan jurusan yang
              tepat
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-linear-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all cursor-pointer"
              >
                <div
                  className={`w-14 h-14 bg-linear-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="cara-kerja" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Cara Kerja
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Tiga langkah mudah untuk menemukan jurusan impianmu
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all">
                  <div className="text-6xl font-bold text-transparent bg-linear-to-br from-blue-600 to-purple-600 bg-clip-text mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimoni" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Apa Kata Mereka?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ribuan siswa telah menemukan jurusan impian mereka
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">JurusanKu AI</span>
              </div>
              <p className="text-slate-400">
                Platform rekomendasi jurusan kuliah berbasis AI untuk siswa
                Indonesia
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produk</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Fitur
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cara Kerja
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Testimoni
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Karier
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Dukungan</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pusat Bantuan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Kontak
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privasi
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2026 JurusanKu AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
