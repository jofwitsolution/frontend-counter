"use client";

import React, { useState } from "react";
import Title from "./Title";

const Counter = ({ title }) => {
  const [count, setCount] = useState(0);

  const countMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const countPlus = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };
  return (
    <main className="w-[600px] h-[400px] shadow-lg flex flex-col items-center justify-center gap-y-[50px]">
      <span className="text-[5rem] text-blue-500">{count}</span>
      <div className="flex gap-2">
        <button onClick={() => countMinus()} className="counter-btn">
          Count -
        </button>
        <button onClick={() => countPlus()} className="counter-btn">
          Count +
        </button>
      </div>
      <Title title={title} value={count} />
    </main>
  );
};

export default Counter;
