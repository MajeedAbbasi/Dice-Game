import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button
        type="button"
        className="text-white bg-black hover:bg-white hover:text-black hover:border-2  hover:border-black 
        font-bold rounded-2xl text-2xl px-5 py-2.5 me-2 mb-2 w-[340px]"
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
