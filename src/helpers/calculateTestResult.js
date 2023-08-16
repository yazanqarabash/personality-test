export const calculateTestResult = (answers) => {
  const totalScore = Object.values(answers).reduce(
    (acc, answer) => acc + answer.score,
    0
  );
  return {
    domain: totalScore < 36 ? "Introvert" : "Extrovert",
    score: totalScore,
  };
};
