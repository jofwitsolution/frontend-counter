import React from "react";

const Title = ({ title, value }) => {
  return (
    <div className="flex gap-2">
      <span className="font-semibold">{title}</span>
      <span>{value}</span>
    </div>
  );
};

export default Title;
