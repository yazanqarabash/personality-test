import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen, renderHook, act } from "@testing-library/react";
import Choice from "./Choice";
import useTestData from "../hooks/useTestData";

const defaultProps = {
  question: { id: 1 },
  choice: { text: "Very Inaccurate", score: 1 },
  handleSetAnswer: () => {},
  handleHoveredChoice: () => {},
  hoveredChoice: null,
  index: 0,
};

describe("Choice Component", () => {
  test("renders correctly", () => {
    render(<Choice {...defaultProps} />);
    const choiceElement = screen.getByText(/very inaccurate/i);
    expect(choiceElement).toBeInTheDocument();
    const inputElement = screen.getByRole("radio");
    expect(inputElement).toBeInTheDocument();
  });

  test("correct input attributes", () => {
    render(<Choice {...defaultProps} />);
    const inputElement = screen.getByRole("radio");
    expect(inputElement).toHaveAttribute("name", "1");
    expect(inputElement).toHaveAttribute("value", "1");
  });

  test("should set answer and update radio button color", () => {
    const { result } = renderHook(useTestData);
    act(() =>
      result.current.handleSetAnswer({
        target: { name: 1, value: "1" },
      })
    );
    render(
      <Choice
        currentAnswer={result.current.answers[1].score}
        {...defaultProps}
      />
    );
    const radioSVGElement = screen.getByTestId("radio-svg");
    expect(radioSVGElement).toHaveAttribute("stroke", "#ec4899");
  });
});
