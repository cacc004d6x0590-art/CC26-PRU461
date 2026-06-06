import { useState, useEffect } from "react";
import { questions, steps } from "../data/user/test/testData";
import { createTest } from "../services/testUserService";

const STORAGE_KEY = "major_recommendation_test";

const getSavedData = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
};

export default function useTestForm() {
  const [loading, setLoading] = useState(false);

  const [currentStep, setCurrentStep] = useState(() => {
    const step = getSavedData().currentStep || 0;
    return step >= 0 && step < steps.length ? step : 0;
  });
  const [answers, setAnswers] = useState(() => getSavedData().answers || {});
  const currentQuestions = questions[steps[currentStep].id];

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        currentStep,
        answers,
      }),
    );
  }, [currentStep, answers]);

  const handleAnswer = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const isStepComplete = currentQuestions.every((question) => {
    const answer = answers[question.id];

    if (answer === undefined || answer === "") {
      return false;
    }

    if (question.type === "number") {
      const score = Number(answer);
      return score >= 0 && score <= 100;
    }

    if (question.type === "text") {
      return answer.trim().length >= 4;
    }

    if (question.type === "radio") {
      return question.options.includes(answer);
    }

    return true;
  });

  const progress = ((currentStep + 1) / steps.length) * 100;

  const submitTest = async () => {
    try {
      setLoading(true);

      const result = await createTest(answers);

      localStorage.removeItem(STORAGE_KEY);
      setAnswers({});
      setCurrentStep(0);

      return result;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    currentStep,
    currentQuestions,
    answers,
    progress,
    totalSteps: steps.length,
    loading,

    handleAnswer,
    handleNext,
    handlePrevious,
    submitTest,

    isStepComplete,
  };
}
