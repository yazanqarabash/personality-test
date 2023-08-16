import { ButtonGroup, Button } from "@mui/material";
import { useContext } from "react";
import { TestContext } from "../contexts/TestContext";

function Buttons() {
  const {
    position,
    itemsPerPage,
    answers,
    questions,
    handleSubmitTest,
    handlePreviousQuestions,
    handleNextQuestions,
    handleSkipQuestions,
  } = useContext(TestContext);

  const handleNextButtonState = () => {
    const currentQuestions = questions.slice(position, position + itemsPerPage);
    return currentQuestions.filter((item) => !answers[item.id]).length !== 0;
  };

  const handleBackButtonState = () => position < itemsPerPage;

  const isAllQuestionsAnswered = () =>
    Object.keys(answers).length >= questions.length;

  return (
    <ButtonGroup disableElevation variant="contained">
      {isAllQuestionsAnswered() && (
        <Button
          onClick={handleSubmitTest}
          sx={{ padding: { xs: "6px 16px", sm: "8px 22px" } }}
        >
          See Results
        </Button>
      )}
      <>
        <Button
          disabled={handleBackButtonState()}
          onClick={handlePreviousQuestions}
          sx={{ padding: { xs: "6px 16px", sm: "8px 22px" } }}
        >
          Back
        </Button>
        {isAllQuestionsAnswered &&
          !(position === questions.length - itemsPerPage) && (
            <Button
              disabled={handleNextButtonState()}
              onClick={handleNextQuestions}
              sx={{ padding: { xs: "6px 16px", sm: "8px 22px" } }}
            >
              Next
            </Button>
          )}
        <Button
          onClick={handleSkipQuestions}
          sx={{ padding: { xs: "6px 16px", sm: "8px 22px" } }}
        >
          Skip
        </Button>
      </>
    </ButtonGroup>
  );
}

export default Buttons;
