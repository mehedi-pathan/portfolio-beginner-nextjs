import { motion } from "framer-motion";
import React, { FunctionComponent } from "react";
import { ISkill } from "../types";

const Bar: FunctionComponent<{
  data: ISkill;
}> = ({ data: { Icon, level, name } }) => {
  const bar_width = `${level}%`; //bar level into a variable otherwise it won't work

  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: bar_width,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stifness: 100,
      },
    },
  };

  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-gray-600">
      <motion.div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green-600 to-blue-300"
        style={{ width: bar_width }} // declare the bar level using variable
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  );
};

export default Bar;
