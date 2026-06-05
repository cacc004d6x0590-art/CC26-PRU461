import { Sparkles, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SECTION_AUTH = [
  {
    id: "login",
    heading: "Selamat Datang Kembali!",
    subHeading: "Masuk untuk melanjutkan ke dashboard",
  },
  {
    id: "register",
    heading: "Mulai Perjalananmu!",
    subHeading: "Daftar untuk mendapatkan rekomendasi jurusan",
  },
];

export default function AuthPage({ page, children }) {
  const section = SECTION_AUTH.find((item) => item.id === page);

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-600 via-purple-600 to-indigo-700 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <Link
        to="/"
        className="absolute top-8 left-8 flex items-center gap-2 text-white/80 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Kembali</span>
      </Link>

      <div className="relative w-full max-w-5xl grid md:grid-cols-2 gap-0 bg-white/10 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-2xl border border-white/20">
        <div className="hidden md:flex flex-col justify-center items-center p-12 bg-linear-to-br from-blue-600/40 to-purple-600/40 backdrop-blur-sm">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-xl">
            <Sparkles className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            JurusanKu AI
          </h2>
          <p className="text-white/90 text-center text-lg leading-relaxed">
            Temukan jurusan kuliah yang sesuai dengan minat dan kemampuanmu
            menggunakan teknologi AI
          </p>
          <div className="mt-8 space-y-4 w-full">
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span>Analisis minat & kemampuan</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span>Rekomendasi berbasis AI</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span>Prediksi prospek karier</span>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12 bg-white">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">
              {section?.heading}
            </h1>
            <p className="text-slate-600">{section?.subHeading}</p>
          </div>

          {children}

          {/* <div className="mt-6 text-center">
            <p className="text-slate-600">
              <button className="text-blue-600 hover:text-blue-700 font-semibold"></button>
            </p>
          </div>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-slate-500">
                  Atau lanjutkan dengan
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-md transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="font-medium text-slate-700">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-md transition-all">
                <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="font-medium text-slate-700">Facebook</span>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
