import { motion } from "framer-motion";
import Image from "next/image";
import React, { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { fadeInUp, stagger } from "../animations";
import { IProject } from "../types";

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetails: null | number;
  setShowDetails: (id: null | number) => void;
}> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    github_url,
    description,
    key_techs,
    id
  },
  showDetails,
  setShowDetails,
}) => {
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetails(id)}
        width="300"
        height="150"
        layout="responsive"
      />
      <p className="my-2 text-center">{name}</p>

      {showDetails === id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-300 rounded-lg md:grid-cols-2 gap-x-12 dark:text-white dark:bg-gray-900 md:p-10">
          <motion.div variants={stagger} initial="initial" animate="animate" className="border-2 border-gray-100">
            <motion.div variants={fadeInUp}>
              <Image
                src={image_path}
                alt={name}
                width="300"
                height="150"
                layout="responsive"
              />
            </motion.div>

            <div className="flex justify-center my-4 space-x-3">
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 dark:bg-gray-900"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 dark:bg-gray-900"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </div>
          </motion.div>

          <motion.div variants={stagger} initial="initial" animate="animate" >
            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medium ">
              {description}
            </motion.h3>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap mt-5 space-x-2 tracking-wider"
            >
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-400 rounded-t dark:bg-gray-900"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            onClick={() => setShowDetails(null)}
            className="absolute p-1 bg-gray-500 rounded-full top-3 right-3 focus:outline-none dark:bg-zinc-300"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
