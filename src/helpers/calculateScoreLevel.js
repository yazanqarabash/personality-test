export const calculateScoreLevel = (score) => {
  return score <= 12 ? "low" : score <= 24 ? "neutral" : "high";
};
