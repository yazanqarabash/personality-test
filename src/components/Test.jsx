import { useContext } from "react";
import { ProgressBar } from "../ui/ProgressBar";
import Question from "./Question";
import Buttons from "./Buttons";
import { TestContext } from "../contexts/TestContext";
import useWindowResize from "../hooks/useWindowResize";

function Test() {
  const {
    answers,
    questions,
    handleGetCurrentQuestions,
    handleGetCurrentAnswer,
    handleSetQuestionsPerPage,
  } = useContext(TestContext);

  // handle window resize
  useWindowResize(() => {
    if (window.innerWidth < 600) {
      handleSetQuestionsPerPage(1);
    } else {
      handleSetQuestionsPerPage(3);
    }
  });
  return (
    <div className="max-w-5xl mx-auto py-10 px-4 lg:px-0">
      <ProgressBar
        part={Object.keys(answers).length}
        whole={questions.length}
      />
      {handleGetCurrentQuestions().map((question) => (
        <Question
          key={question.id}
          question={question}
          currentAnswer={handleGetCurrentAnswer(question.id)}
        />
      ))}
      <div className="flex justify-center">
        <Buttons />
      </div>
    </div>
  );
}

export default Test;
