import TestQuestionCard from "./TestQuestionCard";

export default function TestStepContent({
  step,
  questions,
  answers,
  onAnswer,
  // children,
}) {
  return (
    <section className="w-full mx-auto pt-8">
      <div className="bg-white w-full rounded-3xl shadow-xl border border-slate-200 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            {step.title}
          </h2>
          <p className="text-slate-600">{step.description}</p>
        </div>

        {/* Test Question Card */}
        <div className="space-y-8">
          {questions.map((question, qIndex) => (
            <TestQuestionCard
              key={question.id}
              question={question}
              questionIndex={qIndex}
              answer={answers[question.id]}
              onAnswer={onAnswer}
            />
          ))}
        </div>
      </div>

      {/* {children} */}
    </section>
  );
}
