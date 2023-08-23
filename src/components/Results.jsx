import { useEffect, useState, useContext } from "react";
import { DotLoader } from "react-spinners";
import { deleteResults, getResults } from "../api/testApi";
import { TestContext } from "../contexts/TestContext";
import { calculateScoreLevel } from "../helpers/calculateScoreLevel";
import { Button } from "@mui/material";

function Results() {
  const [results, setResults] = useState([]);
  const { handleResetTest, loading } = useContext(TestContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getResults();
        setResults(result);
        // TODO handle results instead of deleting
        await Promise.all(result.map((item) => deleteResults(item.id)));
      } catch (error) {
        console.error("Error fetching or deleting results:", error);
      }
    }
    fetchData();
  }, []);

  if (results.length === 0) {
    return (
      <div className="h-full flex justify-center items-center">
        <DotLoader
          color="#ec4899"
          cssOverride={{ height: "100px", width: "100px" }}
          loading={loading}
        />
      </div>
    );
  }

  return (
    <>
      {results.map((result) => (
        <div
          key={result.id}
          className="h-full flex justify-center items-center flex-col bg-gradient-to-r from-white to-pink-300 p-16 md:p-20 text-center"
        >
          <h1 className="text-pink-500 tracking-wide pb-1 mix-blend-color-burn text-3xl md:text-6xl">
            {result.domain}
          </h1>
          <div className="flex">
            <span className="text-gray-600 text-base md:text-lg font-bold antialiased tracking-tight [word-spacing:4px]">
              score: {result.score} - {calculateScoreLevel(result.score)}
            </span>
          </div>
          <div className="pt-2 md:pt-4">
            <Button
              disableElevation
              variant="contained"
              sx={{ padding: { xs: "6px 16px", sm: "8px 22px" } }}
              onClick={handleResetTest}
            >
              Redo Test
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Results;
