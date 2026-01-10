import React from "react";

const SubmitBtn = ({ text, className }) => {
  return (
    <div className={`w-full rounded-sm bg-primary text-white px-4 text-center py-1 mx-auto global-cursor-pointer global-transition-all  hover:bg-accent ${className}`}>{text}</div>
  );
};

export default SubmitBtn;
