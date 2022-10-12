import React from "react";

const Option = ({ option, inputHandler }) => {
  return (
    <div className="bg-slate-700  p-5 rounded">
      <input
        onClick={inputHandler}
        type="radio"
        name="button"
        id={option}
        value={option}
        className="checked:after:bg-green-500"
      />
      <label className="ml-2 text-gray-200 " htmlFor={option}>
        {option}
      </label>
    </div>
  );
};

export default Option;
