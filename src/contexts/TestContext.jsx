import { createContext } from "react";
import useTestData from "../hooks/useTestData";

export const TestContext = createContext({
  loading: true,
  position: 0,
  itemsPerPage: 3,
  questions: [],
  answers: {},
  testDone: false,
  handleResetTest: () => {},
  handleGetCurrentAnswer: () => {},
  handleGetCurrentQuestions: () => {},
  handleSetQuestionsPerPage: () => {},
  handleNextQuestions: () => {},
  handlePreviousQuestions: () => {},
  handleSetAnswer: () => {},
  handleSkipQuestions: () => {},
  handleSubmitTest: () => {},
});

export const TestProvider = ({ children }) => {
  const {
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
  } = useTestData();

  const value = {
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

  return <TestContext.Provider value={value}>{children}</TestContext.Provider>;
};
