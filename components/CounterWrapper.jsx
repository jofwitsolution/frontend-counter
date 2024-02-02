import React from "react";

const CounterWrapper = ({ children }) => {
  return (
    <main className="w-[600px] border-2 border-blue-400 h-[400px] shadow-lg flex flex-col items-center justify-center gap-y-[50px]">
      {children}
    </main>
  );
};

export default CounterWrapper;
