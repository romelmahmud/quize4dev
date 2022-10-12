import React from "react";
import { useLoaderData } from "react-router-dom";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const Statistics = () => {
  const data = useLoaderData();
  return (
    <div className="bg-slate-800 min-h-screen pt-24">
      <h1 className="text-3xl text-center font-bold text-green-500 mb-10">
        Chart:
      </h1>
      <div className="mx-auto max-w-6xl px-6 md:px-5 flex justify-center items-center">
        <div className="bg-slate-900 py-4 pr-4 w-80 rounded">
          <LineChart width={300} height={250} data={data.data}>
            <Line type="monotone" dataKey="total" stroke="#22c55e" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
