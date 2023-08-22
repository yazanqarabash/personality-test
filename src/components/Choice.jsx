import RadioIcon from "./RadioIcon";

function Choice({
  question,
  choice,
  currentAnswer,
  handleSetAnswer,
  handleHoveredChoice,
  hoveredChoice,
  index,
}) {
  return (
    <label className="flex items-center cursor-pointer text-gray-600 py-2">
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
        onMouseEnter={() => handleHoveredChoice(index)}
        onMouseLeave={() => handleHoveredChoice(null)}
      >
        <RadioIcon
          isChecked={currentAnswer === choice.score}
          isHovered={hoveredChoice === index}
        />
      </span>
      {choice.text}
    </label>
  );
}

export default Choice;
