import { useContext, useState } from "react";
import RadioIcon from "./RadioIcon";
import { TestContext } from "../contexts/TestContext";

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

  return (
    <div className="py-2">
      <h2 className="text-2xl font-bold antialiased tracking-tight [word-spacing:2px]">
        {question.text}
      </h2>
      {choices.map((choice, i) => (
        <label
          className="flex items-center cursor-pointer text-gray-600 py-2"
          key={i}
        >
          <input
            type="radio"
            name={question.id}
            value={choice.score}
            checked={currentAnswer === choice.score}
            onChange={handleSetAnswer}
            className="hidden"
          />
          <span
            tabIndex={question.id}
            className="mr-3 focus:outline-none focus:ring-2 ring-pink-500/50 ring-offset-2"
            onMouseEnter={() => setHoveredChoice(i)}
            onMouseLeave={() => setHoveredChoice(null)}
          >
            <RadioIcon
              isChecked={currentAnswer === choice.score}
              isHovered={hoveredChoice === i}
            />
          </span>
          {choice.text}
        </label>
      ))}
    </div>
  );
}

export default Question;
