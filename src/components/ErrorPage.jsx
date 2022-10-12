import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-slate-600 min-h-screen flex justify-center items-center">
      <div className="">
        <div className="w-1/2 mx-auto">
          <img src="/error.svg" alt="" />
          <h2 className="text-white font-semibold text-2xl text-center mt-6">
            404 error page not Found!!!
          </h2>
          <Link
            to="/home"
            className="bg-green-500 p-2 rounded inline-block mt-2 ml-10 text-white"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
