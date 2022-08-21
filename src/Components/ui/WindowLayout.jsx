import React, { useContext, useState } from "react";
import { Rnd } from "react-rnd";

import { motion } from "framer-motion";

import { WindowsContext } from "../../Contexts/WindowsContext";

export default function WindowLayout({ title, name, size, children }) {
  const [windowPosition, setWindowPosition] = useState([25, 25]);

  const { setOpenedWindows } = useContext(WindowsContext);

  function handleClose() {
    setOpenedWindows((prev) => {
      let newArray = [...prev];

      let index = newArray.findIndex(function (window) {
        return window.name === name;
      });
      if (index !== -1) newArray.splice(index, 1);

      return newArray;
    });
  }

  function handleDrag(ev) {
    setWindowPosition([ev.x, ev.y]);
  }

  return (
    <Rnd
      default={{
        x: windowPosition[0],
        y: windowPosition[1],
        width: size[0],
        height: size[1],
      }}
      bounds="window"
      minWidth={size[0] - 25}
      minHeight={size[1] - 25}
      maxWidth={size[0] + 100}
      maxHeight={size[1] + 100}
      onDragStop={handleDrag}
      dragHandleClassName={"handle"}
    >
      <motion.div
        key={name}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col rounded bg-slate-800 text-white w-full h-full"
      >
        <div className="handle bg-slate-900 rounded-t p-2 flex justify-between">
          <span>{title}</span>
          <button onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {children}
      </motion.div>
    </Rnd>
  );
}
