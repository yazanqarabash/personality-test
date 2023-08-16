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
    <div className="h-full flex justify-center items-center">
      {results.map((result) => (
        <div
          key={result.id}
          className="bg-gradient-to-r from-white to-pink-300 p-16 md:p-20 lg:p-40 rounded-e-3xl"
        >
          <h1 className="text-pink-500 tracking-wide pb-1 mix-blend-color-burn text-4xl md:text-6xl">
            {result.domain}
          </h1>
          <div className="flex">
            <span className="text-gray-600 antialiased text-base md:text-lg pl-1">
              score: {result.score} - {calculateScoreLevel(result.score)}
            </span>
          </div>
          <div className="pt-4 pl-1">
            <Button
              disableElevation
              variant="contained"
              sx={{ padding: { xs: "2px 15px", sm: "4px 22px" } }}
              onClick={handleResetTest}
            >
              Reset
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Results;
