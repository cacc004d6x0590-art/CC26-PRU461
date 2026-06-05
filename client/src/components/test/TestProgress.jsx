import TestStepIndicator from "./TestStepIndicator";

export default function TestProgress({
  currentStep,
  totalSteps,
  progress,
  steps,
}) {
  return (
    <section className="bg-white border border-slate-200 rounded-2xl">
      <div className="mx-auto px-6 py-4">

        <div className="mb-3 flex items-center justify-between text-sm">
          <span className="font-medium text-slate-700">
            Langkah {currentStep + 1} dari {totalSteps}
          </span>
          <span className="text-slate-600">
            {Math.round(progress)}% Selesai
          </span>
        </div>

        <div className="w-full bg-slate-200 rounded-full h-3">
          <div
            className="bg-linear-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {steps.map((step, index) => (
            <TestStepIndicator
              key={step.title}
              step={step}
              index={index}
              currentStep={currentStep}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
