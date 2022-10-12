import React, { useState, useEffect, useRef } from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";

import parse from "html-react-parser";
import Option from "./Option";

const SingleQuiz = ({ questionData }) => {
  const [inputValue, setInputValue] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const { question, options, correctAnswer } = questionData;
  const didMountRef = useRef(false);

  const successMessage = () => {
    toast.success("Correct Answer", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const errorMessage = () => {
    toast.error("Wrong Answer!!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (didMountRef.current) {
      if (inputValue === correctAnswer) {
        successMessage();
      } else {
        errorMessage();
      }
    } else {
      didMountRef.current = true;
    }
  }, [inputValue, correctAnswer]);

  const parsedQuestion = parse(question);
  return (
    <div className="border-2 border-slate-700 p-6 my-5">
      <div>
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-semibold w-3/4">
            {parsedQuestion}
          </div>
          <EyeIcon
            onClick={() => setShowAnswer(!showAnswer)}
            className={`h-8 w-8 cursor-pointer hover:text-green-500 transition-all duration-300 ease-in-out ${
              showAnswer ? "text-green-500" : "text-gray-500"
            }`}
          />
        </div>
        {showAnswer && (
          <p className=" text-xl text-white font-medium mt-4">
            <span className="text-green-500">Correct Answer: </span>
            {correctAnswer}
          </p>
        )}{" "}
        {!showAnswer && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
            {options.map((option, index) => (
              <Option key={index} option={option} inputHandler={inputHandler} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleQuiz;
