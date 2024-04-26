import React from "react";

const Home = ({ toggle }) => {
  return (
    <>
      <div className="h-full w-full flex justify-center items-center">
        <div className="py-20 cover-50 fle ">
          <img className="mt-[180px] h-[800px]" src="/images/dices.png" />
        </div>
        <div className="mt-[200px] ">
          <h1 className="font-extrabold text-[150px]">DICE GAME</h1>
          <div className="ml-[500px] ">
            <button
              className="text-white bg-black hover:bg-white hover:text-black border-2  hover:border-black 
        font-bold rounded-2xl text-2xl px-5 py-2.5 me-2 mb-2 w-[340px]"
              onClick={toggle}
            >
              Play Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
