import React from "react";

export default function CalculatorButton({ children, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="bg-gray-900 hover:opacity-80 w-1/4 py-1"
    >
      {children}
    </button>
  );
}
