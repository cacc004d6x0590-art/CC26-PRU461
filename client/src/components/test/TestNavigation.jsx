import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestNavigation({
  currentStep,
  totalSteps,
  isStepComplete,
  onPrevious,
  onNext,
  loading,
}) {
  return (
    <section className="py-8 flex items-center justify-between">
      <button
        onClick={onPrevious}
        disabled={currentStep === 0}
        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
          currentStep === 0
            ? "bg-slate-100 text-slate-400 cursor-not-allowed"
            : "bg-white border-2 border-slate-200 text-slate-700 hover:border-blue-300 hover:shadow-lg"
        }`}
      >
        <ChevronLeft className="w-5 h-5" />
        Kembali
      </button>

      <div className="text-sm text-slate-600 hidden lg:block">
        {isStepComplete ? (
          <span className="text-green-600 font-medium">
            ✓ Semua pertanyaan terjawab
          </span>
        ) : (
          <span>Jawab semua pertanyaan untuk melanjutkan</span>
        )}
      </div>

      <button
        onClick={onNext}
        disabled={!isStepComplete || loading}
        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
          !isStepComplete || loading
            ? "bg-slate-100 text-slate-400 cursor-not-allowed"
            : "bg-linear-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl hover:shadow-blue-500/30"
        }`}
      >
        {loading
          ? "Memproses..."
          : currentStep === totalSteps - 1
            ? "Lihat Hasil"
            : "Lanjut"}
        <ChevronRight className="w-5 h-5" />
      </button>
    </section>
  );
}
