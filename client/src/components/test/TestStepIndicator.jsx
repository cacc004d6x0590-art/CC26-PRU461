import { Check } from "lucide-react";

export default function TestStepIndicator({ step, index, currentStep }) {
  return (
    <div
      className={`text-center p-2 rounded-lg transition-all ${
        index === currentStep
          ? "bg-blue-50 border-2 border-blue-300"
          : index < currentStep
            ? "bg-green-50 border-2 border-green-300"
            : "bg-slate-50 border-2 border-slate-200"
      }`}
    >
      <div
        className={`w-8 h-8 mx-auto mb-1 rounded-full flex items-center justify-center ${
          index < currentStep
            ? "bg-green-500 text-white"
            : index === currentStep
              ? "bg-blue-600 text-white"
              : "bg-slate-300 text-slate-600"
        }`}
      >
        {index < currentStep ? <Check className="w-5 h-5" /> : index + 1}
      </div>
      <div className="text-xs font-medium text-slate-700">{step.title}</div>
    </div>
  );
}
