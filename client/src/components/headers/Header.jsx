import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import AiBadge from "../others/AiBadge";

export default function Header({ page }) {
  return (
    <header className="space-y-8 p-8">
      <nav className="w-full flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="px-4 py-2 bg-linear-to-r from-blue-100 to-purple-100 text-blue-700 rounded-xl font-medium"
          >
            <Home />
          </Link>
        </div>
        <AiBadge />
      </nav>
      {page ? (
        <div className="flex flex-col items-center justify-center text-center gap-3">
          <h1 className="font-bold text-5xl">
            Hasil Rekomendasi <span className="text-blue-600">Jurusan</span>
          </h1>
          <p className="text-[15px] text-gray-700">
            Berikut hasil analisis AI berdasarkan jawaban yang telah kamu isi
            untuk menemukan jurusan yang paling sesuai dengan potensimu.
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center gap-3">
          <h1 className="font-bold text-5xl">
            Tes Rekomendasi <span className="text-blue-600">Jurusan</span>
          </h1>
          <p className="text-[15px] text-gray-700">
            Isi formulir berikut dengan jujur dan teliti. Tidak ada jawaban yang
            salah dan setiap informasi membantumu mendapat rekomendasi terbaik.
          </p>
        </div>
      )}
    </header>
  );
}
