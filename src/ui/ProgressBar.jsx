import { Box, LinearProgress } from "@mui/material";

export function ProgressBar({ part, whole }) {
  const progress = Math.round((part / whole) * 100);
  return (
    <Box sx={{ width: "100%", marginBottom: "1rem" }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}
