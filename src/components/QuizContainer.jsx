import React from "react";
import QuizTopic from "./QuizTopic";

const QuizContainer = ({ quizTopicsData }) => {
  console.log(quizTopicsData);
  return (
    <div className="py-14">
      <h1 className="text-4xl text-white font-bold">All Quiz Topics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {quizTopicsData.map((topic) => (
          <QuizTopic id={topic.id} topicData={topic} />
        ))}
      </div>
    </div>
  );
};

export default QuizContainer;
