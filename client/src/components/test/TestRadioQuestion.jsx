export default function TestRadioQuestion({ question, value, onChange }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 lg:gap-3 auto-rows-fr">
      {question.options?.map((option) => (
        <label
          key={option}
          className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
            value === option
              ? "border-blue-500 bg-blue-50"
              : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
          }`}
        >
          <input
            type="radio"
            name={`question-${question.id}`}
            value={option}
            checked={value === option}
            onChange={(e) => onChange(question.id, e.target.value)}
            className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500"
          />
          <span className="font-medium text-slate-700">{option}</span>
        </label>
      ))}
    </div>
  );
}
