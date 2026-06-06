import { Award, RotateCcw } from "lucide-react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useTitlePage from "../../hooks/useTitlePage";

export default function UserResultPage() {
  const location = useLocation();
  const navigate = useNavigate();

  useTitlePage("Hasil Rekomendasi Jurusan");

  const savedResult = sessionStorage.getItem("test_result");

  const result =
    location.state || (savedResult ? JSON.parse(savedResult) : null);

  if (!result) {
    return <Navigate to="/test" replace />;
  }

  const handleRetakeTest = () => {
    sessionStorage.removeItem("test_result");
    navigate("/test");
  };

  return (
    <div className="space-y-5">
      <section className="grid grid-cols-1 gap-6">
        <div className="bg-linear-to-br from-blue-600 to-cyan-600 rounded-2xl p-6 text-white shadow-xl overflow-hidden">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <div className="text-sm opacity-90">{result.major}</div>
              <div className="text-3xl font-bold">
                {Number(result.confidence).toFixed(2)}%
              </div>
            </div>
          </div>
          <p className="text-sm text-white/90">
            Tingkat keyakinan model terhadap rekomendasi ini
          </p>
        </div>
      </section>
      <section className="flex justify-center items-center mt-8">
        <button
          onClick={handleRetakeTest}
          className="cursor-pointer flex justify-center items-center gap-2 px-8 py-3 bg-transparent backdrop-blur-sm border-2 border-black text-black rounded-xl font-semibold hover:bg-white/30 transition-all"
        >
          <RotateCcw size={20} />
          Tes Ulang
        </button>
      </section>
    </div>
  );
}
