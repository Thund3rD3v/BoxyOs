import { AnimatePresence } from "framer-motion";
import React, { useContext } from "react";
import { WindowsContext } from "../../Contexts/WindowsContext";

export default function WindowsContainer() {
  const { openedWindows } = useContext(WindowsContext);

  return (
    <AnimatePresence>
      {openedWindows.map((OpenedWindow, index) => {
        return <OpenedWindow key={index} />;
      })}
    </AnimatePresence>
  );
}
