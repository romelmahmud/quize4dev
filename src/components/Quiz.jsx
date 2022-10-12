import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuiz from "./SingleQuiz";

const Quiz = () => {
  const data = useLoaderData();
  const quizData = data.data;
  const { name, logo, total, questions } = quizData;
  return (
    <div className="bg-slate-800 py-12">
      <div className="mx-auto max-w-6xl px-6 md:px-5 ">
        <div className=" ">
          <div className="flex items-center mb-7">
            <h1 className="text-white text-4xl font-bold ">{name}</h1>
            <p className="text-green-500 text-xl ml-12 font-semibold">
              Total: {total} Quiz
            </p>
          </div>
          <img
            src={logo}
            alt={name}
            className="shadow-2xl border-2 rounded border-green-500"
          />
          {questions.map((ques) => (
            <SingleQuiz key={ques.id} questionData={ques} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
