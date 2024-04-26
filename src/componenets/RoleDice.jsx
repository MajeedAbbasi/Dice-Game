import React, { useState } from "react";

const RoleDice = ({ currentDice, Roll, result, reset }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-[200px]">
      <div className="cursor-pointer">
        <img
          src={`/images/dice_${currentDice}.png`}
          alt="image not found"
          onClick={() => {
            Roll();
          }}
        />
      </div>
      <h1 className="font-semibold text-2xl">Click On Dice To Roll</h1>
      <div className="flex flex-col mt-5 ml-[10px]">
        <button
          className="text-black bg-white hover:bg-black hover:text-white border-2  border-black 
        font-bold rounded-2xl text-2xl pl-3 px-5 py-2.5 me-2 mb-2 w-[235px]"
          onClick={reset}
        >
          Reset Score
        </button>
        <button
          className="text-white bg-black hover:bg-white hover:text-black border-2  hover:border-black 
        font-bold rounded-2xl text-2xl px-5 py-2.5 me-2 mb-2 w-[235px]"
          onClick={result}
        >
          Show Result
        </button>
      </div>
    </div>
  );
};

export default RoleDice;
