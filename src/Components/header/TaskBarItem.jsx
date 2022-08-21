import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

export default function TaskBarItem({ handleClose, name, icon }) {
  return (
    <motion.div
      key={name}
      initial={{
        y: -10,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: -25,
        opacity: 0,
      }}
      className="hover:bg-white hover:bg-opacity-10 px-3 group border-b-2 border-b-sky-600"
      onClick={() => {
        handleClose(name);
      }}
    >
      <FontAwesomeIcon
        icon={icon}
        color="white"
        className="group-hover:hidden"
      />
      <FontAwesomeIcon
        icon={faClose}
        color="white"
        className="hidden group-hover:inline"
      />
    </motion.div>
  );
}
