import { useEffect, useState } from "react";
import { getQuestions } from "../api/testApi";
import { saveAnswer } from "../api/testApi";
import { calculateTestResult } from "../helpers/calculateTestResult";

function useTestData() {
  const [loading, setLoading] = useState(true);
  const [position, setPosition] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [answers, setAnswers] = useState({});
  const [questions, setQuestions] = useState([]);
  const [testDone, setTestDone] = useState(false);

  useEffect(() => {
    setLoading(true);
    getQuestions()
      .then((questions) => setQuestions(questions))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  // question related
  const handleSetAnswer = (event) => {
    const { name, value } = event.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: { questionID: name, score: parseInt(value) },
    }));
  };

  // test related
  const handleGetCurrentQuestions = () =>
    questions.slice(position, position + itemsPerPage);

  const handleSetQuestionsPerPage = (itemsPerPage) =>
    setItemsPerPage(itemsPerPage);

  const handleGetCurrentAnswer = (id) => (answers[id] ? answers[id].score : "");

  const handleResetTest = () => {
    setPosition(0);
    setAnswers({});
    setTestDone(!testDone);
  };

  // buttons related
  const handleNextQuestions = () => {
    if (position + itemsPerPage <= Object.keys(answers).length) {
      return setPosition(position + itemsPerPage);
    }
  };

  const handlePreviousQuestions = () => setPosition(position - itemsPerPage);

  const handleSkipQuestions = () => {
    const randomScore = () => parseInt(Math.floor(Math.random() * 5) + 1);
    const skippedAnswers = questions.reduce(
      (acc, question) => ({
        ...acc,
        [question.id]: { questionID: question.id, score: randomScore() },
      }),
      {}
    );
    setAnswers(skippedAnswers);
    setPosition(questions.length - itemsPerPage);
  };

  const handleSubmitTest = () => {
    setTestDone(!testDone);
    const testResult = calculateTestResult(answers);
    setLoading(true);
    saveAnswer(testResult)
      .then(() => console.log("Test result saved:", testResult))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  return {
    loading,
    position,
    itemsPerPage,
    questions,
    answers,
    testDone,
    handleSubmitTest,
    handleGetCurrentAnswer,
    handleGetCurrentQuestions,
    handleSetQuestionsPerPage,
    handleSetAnswer,
    handleResetTest,
    handleSkipQuestions,
    handleNextQuestions,
    handlePreviousQuestions,
  };
}

export default useTestData;
