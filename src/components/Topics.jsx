import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizContainer from "./QuizContainer";

const Topics = () => {
  const quizTopics = useLoaderData();

  return (
    <div className="bg-slate-800 ">
      <div className="mx-auto max-w-6xl px-6 md:px-5">
        <QuizContainer quizTopicsData={quizTopics.data} />
      </div>
    </div>
  );
};

export default Topics;
