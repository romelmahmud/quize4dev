import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "./Header";
import QuizContainer from "./QuizContainer";

const Home = () => {
  const quizTopics = useLoaderData();

  return (
    <div className="bg-slate-800 ">
      <div className="mx-auto max-w-6xl px-6 md:px-5">
        <Header />
        <QuizContainer quizTopicsData={quizTopics.data} />
      </div>
    </div>
  );
};

export default Home;
