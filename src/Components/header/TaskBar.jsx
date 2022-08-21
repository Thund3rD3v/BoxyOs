import React, { useContext } from "react";

import {
  faCalculator,
  faGears,
  faFlask,
  faChessBoard,
} from "@fortawesome/free-solid-svg-icons";

import { AnimatePresence } from "framer-motion";

import TaskBarItem from "./TaskBarItem";

import { WindowsContext } from "../../Contexts/WindowsContext";

export default function TaskBar() {
  const { openedWindows, setOpenedWindows } = useContext(WindowsContext);

  function handleClose(name) {
    setOpenedWindows((prev) => {
      let newArray = [...prev];

      let index = newArray.findIndex(function (window) {
        return window.name === name;
      });
      if (index !== -1) newArray.splice(index, 1);

      return newArray;
    });
  }

  return (
    <div className="flex gap-2">
      <AnimatePresence>
        {openedWindows.map((window) => {
          if (window.name === "Calculator") {
            return (
              <TaskBarItem
                key="Calculator"
                handleClose={handleClose}
                name="Calculator"
                icon={faCalculator}
              />
            );
          }
          if (window.name === "TestWindow") {
            return (
              <TaskBarItem
                key="TestWindow"
                handleClose={handleClose}
                name="TestWindow"
                icon={faFlask}
              />
            );
          }
          if (window.name === "Settings") {
            return (
              <TaskBarItem
                key="Settings"
                handleClose={handleClose}
                name="Settings"
                icon={faGears}
              />
            );
          }
          if (window.name === "Chess") {
            return (
              <TaskBarItem
                key="Chess"
                handleClose={handleClose}
                name="Chess"
                icon={faChessBoard}
              />
            );
          }

          return (
            <TaskBarItem
              key="Minecraft"
              handleClose={handleClose}
              name="Minecraft"
              icon={faGears}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
}
