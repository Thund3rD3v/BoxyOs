import React, { useContext } from "react";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faFlask,
  faCube,
  faChessBoard,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

// Context
import { WindowsContext } from "../../Contexts/WindowsContext";

export default function AppButtons() {
  const { openedWindows, setOpenedWindows } = useContext(WindowsContext);

  return (
    <div className="flex m-3 gap-6">
      <div className="flex flex-col items-center gap-6">
        <button
          className="text-center hover:opacity-80 flex flex-col items-center justify-center"
          onDoubleClick={() => {
            if (openedWindows.includes("Calculator")) {
              return;
            }
            setOpenedWindows((prev) => {
              return [...prev, "Calculator"];
            });
          }}
        >
          <FontAwesomeIcon icon={faCalculator} color="white" size="4x" />
          <span className="text-white text-md">Calculator</span>
        </button>
        <button
          className="text-center hover:opacity-80 flex flex-col items-center justify-center"
          onDoubleClick={() => {
            if (openedWindows.includes("TestWindow")) {
              return;
            }
            setOpenedWindows((prev) => {
              return [...prev, "TestWindow"];
            });
          }}
        >
          <FontAwesomeIcon icon={faFlask} color="white" size="4x" />
          <span className="text-white text-md">TestWindow</span>
        </button>
        <button
          className="text-center hover:opacity-80 flex flex-col items-center justify-center"
          onDoubleClick={() => {
            if (openedWindows.includes("Chess")) {
              return;
            }
            setOpenedWindows((prev) => {
              return [...prev, "Chess"];
            });
          }}
        >
          <FontAwesomeIcon icon={faChessBoard} color="white" size="4x" />
          <span className="text-white text-md">Chess</span>
        </button>
        <button
          className="text-center hover:opacity-80 flex flex-col items-center justify-center"
          onDoubleClick={() => {
            if (openedWindows.includes("Minecraft")) {
              return;
            }
            setOpenedWindows((prev) => {
              return [...prev, "Minecraft"];
            });
          }}
        >
          <FontAwesomeIcon icon={faCube} color="white" size="4x" />
          <span className="text-white text-md">Minecraft</span>
        </button>
      </div>
      <div className="flex flex-col items-center gap-6">
        <button
          className="text-center hover:opacity-80 flex flex-col items-center justify-center"
          onDoubleClick={() => {
            if (openedWindows.includes("Video")) {
              return;
            }
            setOpenedWindows((prev) => {
              return [...prev, "Video"];
            });
          }}
        >
          <FontAwesomeIcon
            icon={faVideo}
            className=" text-lime-500"
            size="4x"
          />
          <span className="text-white text-md">Video</span>
        </button>
      </div>
    </div>
  );
}
