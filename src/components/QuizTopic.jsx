import React from "react";
import { Link } from "react-router-dom";

const QuizTopic = ({ topicData }) => {
  const { name, logo, total, id } = topicData;
  return (
    <div className="bg-slate-700 rounded overflow-hidden">
      <div className=" bg-slate-900">
        <img className="w-full  block " src={logo} alt={name} />
      </div>
      <div className="p-5">
        <p className="text-white font-semibold text-3xl mb-4">{name}</p>
        <p className="text-white text-xl">Total: {total} Quiz</p>
      </div>
      <div className="flex justify-center my-6">
        <button className="w-2/3 bg-green-500 py-2 font-semibold text-xl text-white rounded hover:bg-green-600 transition-all duration-300 ease-in-out">
          <Link to={`/topics/${id}`}>Take Quiz</Link>
        </button>
      </div>
    </div>
  );
};

export default QuizTopic;
