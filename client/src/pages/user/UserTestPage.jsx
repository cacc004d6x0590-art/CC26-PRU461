import TestProgress from "../../components/test/TestProgress";
import TestStepContent from "../../components/test/TestStepContent";
import TestNavigation from "../../components/test/TestNavigation";
import { steps } from "../../data/user/test/testData";
import useTestForm from "../../hooks/useTestForm";
import { useNavigate } from "react-router-dom";

export default function UserTestPage() {
  const navigate = useNavigate();
  const {
    currentStep,
    currentQuestions,
    answers,
    progress,
    totalSteps,
    loading,

    handleAnswer,
    handleNext,
    handlePrevious,
    submitTest,

    isStepComplete,
  } = useTestForm();

  const onNext = async () => {
    if (loading) return;

    if (currentStep < totalSteps - 1) {
      handleNext();
    } else {
      try {
        const result = await submitTest();

        console.log("Backend Response:", result);

        sessionStorage.setItem(
          "test_result",
          JSON.stringify(result.prediction),
        );

        navigate("/user/result", {
          state: result.prediction,
        });
      } catch (error) {
        console.error(error);

        alert("Gagal mengirim data");
      }
    }
  };

  return (
    <>
      <TestProgress
        currentStep={currentStep}
        totalSteps={totalSteps}
        progress={progress}
        steps={steps}
      />

      <TestStepContent
        step={steps[currentStep]}
        questions={currentQuestions}
        answers={answers}
        onAnswer={handleAnswer}
      />

      <TestNavigation
        currentStep={currentStep}
        totalSteps={totalSteps}
        isStepComplete={isStepComplete}
        onPrevious={handlePrevious}
        onNext={onNext}
        loading={loading}
      />
    </>
  );
}
