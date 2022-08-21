import React from "react";
import TaskBar from "./TaskBar";
import TimeDate from "./TimeDate";

export default function Header() {
  return (
    <header className="bg-slate-900 px-6 h-8 opacity-90 text-white flex justify-between items-center">
      <span>Username</span>
      <TaskBar />
      <TimeDate />
    </header>
  );
}
