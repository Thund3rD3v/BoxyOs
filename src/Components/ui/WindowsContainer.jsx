import { AnimatePresence } from "framer-motion";
import React, { useContext } from "react";
import { WindowsContext } from "../../Contexts/WindowsContext";

import Calculator from "../windows/Calculator/Calculator";
import Chess from "../windows/Chess/Chess";
import Minecraft from "../windows/Minecraft/Minecraft";
import TestWindow from "../windows/TestWindow/TestWindow";
import Video from "../windows/Video/Video";

const windows = {
  Calculator,
  Chess,
  Minecraft,
  TestWindow,
  Video,
};

export default function WindowsContainer() {
  const { openedWindows } = useContext(WindowsContext);

  return (
    <AnimatePresence>
      {Object.keys(windows).map((key) => {
        const Window = windows[key];
        return openedWindows.map((openedWindow) => {
          // Check if openedWindow is a valid window
          if (key === openedWindow) {
            return <Window key={`${Window.name}Active`} active={true} />;
          }
          return <Window key={Window.name} active={false} />;
        });
      })}
    </AnimatePresence>
  );
}
