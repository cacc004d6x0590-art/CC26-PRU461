export default function TestSliderQuestion({ question, value, onChange }) {
  return (
    <div className="ml-11 space-y-4">
      <input
        type="range"
        min={question.min}
        max={question.max}
        value={value || 50}
        onChange={(e) => onChange(question.id, e.target.value)}
        // onChange={(e) => handleAnswer(question.id, parseInt(e.target.value))}
        className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
      />
      <div className="flex justify-between text-sm text-slate-600">
        <span>Tidak Sama Sekali</span>
        <div className="text-2xl font-bold text-blue-600">{value || 50}%</div>
        <span>Sangat Tinggi</span>
      </div>
    </div>
  );
}
