export default function TestInputQuestion({
  label,
  icon: Icon,
  type = "text",
  question,
  onChange,
  value,
}) {
  const isNumberField = type === "number";

  // Validation Score
  const hasScoreError =
    isNumberField &&
    value !== "" &&
    value !== undefined &&
    (Number(value) < 0 || Number(value) > 100);

  // Validation Text
  const hasTextError =
    type === "text" &&
    value !== "" &&
    value !== undefined &&
    value.trim().length < 4;

  const hasError = hasScoreError || hasTextError;

  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-2">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
        )}
        <input
          type={type}
          min={type === "number" ? 0 : undefined}
          max={type === "number" ? 100 : undefined}
          id={question.id}
          name={`question-${question.id}`}
          value={value || ""}
          onChange={(e) => {
            if (type === "number") {
              const value = e.target.value;
              if (value === "") {
                onChange(question.id, value);
                return;
              }
              onChange(question.id, value);
              return;
            }
            onChange(question.id, e.target.value);
          }}
          className={`w-full px-4 py-3.5 border-2 rounded-xl outline-none transition-all ${
            hasError
              ? "border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
              : "border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
          }`}
          placeholder={type == "number" ? "0 / 100" : question.placeholder}
        />
        {hasScoreError && (
          <p className="mt-2 text-sm text-red-500">
            Nilai harus berada di antara 0 - 100
          </p>
        )}
        {hasTextError && (
          <p className="mt-2 text-sm text-red-500">Minimal 4 karakter</p>
        )}
      </div>
    </div>
  );
}
