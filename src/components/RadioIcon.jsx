function RadioIcon({ isChecked, isHovered }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      className={`w-6 h-6 fill-current text-pink-500 ${
        isChecked && "scale-125"
      }`}
    >
      <ellipse
        cx="250"
        cy="250"
        fill="#fff"
        stroke={`${isChecked || isHovered ? "#ec4899" : "#4b5563"}`}
        strokeWidth="50"
        filter="none"
        paintOrder="fill"
        rx="190"
        ry="190"
      ></ellipse>
      {isChecked && <circle cx="250" cy="250" r="110"></circle>}
    </svg>
  );
}

export default RadioIcon;
