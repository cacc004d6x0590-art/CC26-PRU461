import TestInputQuestion from "./TestInputQuestion";
import TestRadioQuestion from "./TestRadioQuestion";

export default function TestQuestionCard({
  question,
  questionIndex,
  answer,
  onAnswer,
}) {
  return (
    <div className="bg-linear-to-br from-slate-50 to-white p-6 rounded-2xl border-2 border-slate-200">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-8 h-8 bg-linear-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold shrink-0">
          {questionIndex + 1}
        </div>
        <h3 className="text-lg font-semibold text-slate-800 flex-1">
          {question.question}
        </h3>
      </div>

      {/* Test Question Radio */}
      {question.type === "radio" && (
        <TestRadioQuestion
          question={question}
          value={answer}
          onChange={onAnswer}
        />
      )}

      {/* Test Question Input */}
      {question.type === "text" && (
        <TestInputQuestion
          question={question}
          value={answer}
          onChange={onAnswer}
        />
      )}

      {/* Test Question Number */}
      {question.type === "number" && (
        <TestInputQuestion
          type="number"
          placeholder="0/100"
          question={question}
          value={answer}
          onChange={onAnswer}
        />
      )}
    </div>
  );
}
