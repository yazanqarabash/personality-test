import { useState } from "react";
import Test from "./Test";
import { useContext } from "react";
import { TestContext } from "../contexts/TestContext";
import { DotLoader } from "react-spinners";
import { Button } from "@mui/material";

function LandingPage() {
  const [startTest, setStartTest] = useState(false);
  const { questions, loading } = useContext(TestContext);
  const handleStartTest = () => {
    setStartTest(true);
  };

  if (questions.length === 0) {
    return (
      <div className="h-full flex justify-center items-center">
        <DotLoader
          color="#ec4899"
          cssOverride={{ height: "80px", width: "80px" }}
          loading={loading}
        />
      </div>
    );
  }
  return (
    <>
      {startTest ? (
        <Test />
      ) : (
        <div className="h-full flex justify-center items-center flex-col bg-gradient-to-r from-white to-pink-300 p-16 md:p-20 text-center">
          <h1 className="text-pink-500 tracking-wide pb-1 text-3xl md:text-6xl mix-blend-color-burn">
            Welcome To This Personality Test!
          </h1>
          <h2 className="text-gray-600 text-base md:text-lg font-bold antialiased tracking-tight [word-spacing:4px]">
            This test will determine if you're an introvert or extrovert
          </h2>
          <div className="pt-2 md:pt-4">
            <Button
              disableElevation
              variant="contained"
              onClick={handleStartTest}
              sx={{ padding: { xs: "6px 16px", sm: "8px 22px" } }}
            >
              Start Test
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default LandingPage;
