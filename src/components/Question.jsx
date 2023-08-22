import { useContext, useState } from "react";
import { TestContext } from "../contexts/TestContext";
import Choice from "./Choice";

const choices = [
  { text: "Very Inaccurate", score: 1 },
  { text: "Moderately Inaccurate", score: 2 },
  { text: "Neither Accurate Nor Inaccurate", score: 3 },
  { text: "Moderately Accurate", score: 4 },
  { text: "Very Accurate", score: 5 },
];

function Question({ question, currentAnswer }) {
  const [hoveredChoice, setHoveredChoice] = useState(null);
  const { handleSetAnswer } = useContext(TestContext);

  const handleHoveredChoice = (state) => {
    setHoveredChoice(state);
  };

  return (
    <div className="py-2">
      <h2 className="text-2xl font-bold antialiased tracking-tight [word-spacing:2px]">
        {question.text}
      </h2>
      {choices.map((choice, i) => (
        <Choice
          key={i}
          question={question}
          choice={choice}
          index={i}
          handleHoveredChoice={handleHoveredChoice}
          handleSetAnswer={handleSetAnswer}
          hoveredChoice={hoveredChoice}
          currentAnswer={currentAnswer}
        />
      ))}
    </div>
  );
}

export default Question;
