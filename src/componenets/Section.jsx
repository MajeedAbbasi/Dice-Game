import React, { useState } from "react";
import RoleDice from "./RoleDice";

const Array = [1, 2, 3, 4, 5, 6];
const Section = () => {
  const [currentDice, setCurrentDice] = useState(1);
  const [select, setSelect] = useState();
  const [score, setScore] = useState(0);
  const [error, setError] = useState();
  const Roll = () => {
    if (!select) {
      setError("Please Select the number");
      return;
    } else {
      setError("");
    }
    const getRandomArbitrary = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min);
    };
    setCurrentDice(getRandomArbitrary(1, 7));
    setSelect(undefined);
  };

  const result = () => {
    setError("");
    if (select == currentDice) {
      setScore(score + 2);
    } else {
      setScore(score - 2);
    }
  };
  const reset = () => {
    setError("");
    setScore(0);
  };
  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-col items-center max-w-[300px]">
          <h1 className="font-bold text-[100px]">{score}</h1>
          <p className="font-bold text-[50px]">Total Score</p>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-red-600 text-2xl">{error}</h1>
          <div className="flex items-center justify-center gap-4 mr-5">
            {Array.map((value, index) => (
              <div
                key={index}
                isSelected={value === select}
                className={`box-border ${
                  value === select
                    ? "bg-black text-white"
                    : "bg-white text-black"
                } border-black h-32 w-32 p-4 border-4 hover:bg-black hover:text-white text-7xl font-bold pl-9 cursor-pointer`}
                onClick={() => setSelect(value, setError(""))}
              >
                {value}
              </div>
            ))}
          </div>
          <h1 className="relative font-bold text-4xl mt-2 left-[580px] ">{`${
            select ? "Selected: " + select : "Select Number"
          }`}</h1>
        </div>
      </div>
      <RoleDice
        currentDice={currentDice}
        Roll={Roll}
        result={result}
        reset={reset}
      />
      <div
        className=" bg-red-200 h-[18vh] w-[41vw] ml-[800px] mt-4 pl-4 pt-4 rounded-2xl
      "
      >
        <h1 className="font-bold text-3xl">How to Play</h1>
        <p className="font-bold text-2xl ">Select Any Number</p>
        <p className="font-bold text-2xl">Click On the Dice</p>
        <p className="font-bold text-2xl">
          After click on the dice if selected number is equal to dice number you
          will get some point as dice if you get wrong then 2point will be
          deducted.
        </p>
      </div>
    </>
  );
};

export default Section;
