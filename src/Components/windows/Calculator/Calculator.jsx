import React, { useState } from "react";
import WindowLayout from "../../ui/WindowLayout";
import CalculatorButton from "./CalculatorButton";

export default function Calculator() {
  const [calculatorValue, setCalculatorValue] = useState("");

  function handleClick(ev) {
    if (ev.target.innerText === "=") {
      const answer = eval(calculatorValue);
      setCalculatorValue(answer);
      return;
    }
    if (ev.target.innerText === "AC") {
      setCalculatorValue("");
      return;
    }
    setCalculatorValue((prev) => {
      return prev + ev.target.innerText;
    });
  }

  return (
    <WindowLayout title="Calculator" name="Calculator" size={[400, 300]}>
      <div className="p-2 h-full">
        <input className="w-full bg-gray-900 mb-1" value={calculatorValue} />
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <CalculatorButton handleClick={handleClick}>{"("}</CalculatorButton>
            <CalculatorButton handleClick={handleClick}>{")"}</CalculatorButton>
            <CalculatorButton handleClick={handleClick}>%</CalculatorButton>
            <CalculatorButton handleClick={handleClick}>AC</CalculatorButton>
          </div>
          <div className="flex gap-1">
            <CalculatorButton handleClick={handleClick}>7</CalculatorButton>
            <CalculatorButton handleClick={handleClick}>8</CalculatorButton>
            <CalculatorButton handleClick={handleClick}>8</CalculatorButton>
            <CalculatorButton handleClick={handleClick}>/</CalculatorButton>
          </div>
          <div className="flex gap-1">
            <CalculatorButton handleClick={handleClick}>4</CalculatorButton>
            <CalculatorButton handleClick={handleClick}>5</CalculatorButton>
            <CalculatorButton handleClick={handleClick}>6</CalculatorButton>
            <CalculatorButton handleClick={handleClick}>*</CalculatorButton>
          </div>
          <div className="flex gap-1">
            <CalculatorButton handleClick={handleClick}>1</CalculatorButton>
            <CalculatorButton handleClick={handleClick}>2</CalculatorButton>
            <CalculatorButton handleClick={handleClick}>3</CalculatorButton>
            <CalculatorButton handleClick={handleClick}>-</CalculatorButton>
          </div>
          <div className="flex gap-1">
            <CalculatorButton handleClick={handleClick}>0</CalculatorButton>
            <CalculatorButton handleClick={handleClick}>.</CalculatorButton>
            <CalculatorButton handleClick={handleClick}>=</CalculatorButton>
            <CalculatorButton handleClick={handleClick}>+</CalculatorButton>
          </div>
        </div>
      </div>
    </WindowLayout>
  );
}
