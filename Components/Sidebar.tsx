import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Image
        src="/assets/portfolio_img.jpg"
        // src="https://images.unsplash.com/photo-1523504754200-45cd634649d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        alt="user avatar"
        className="mx-auto rounded-full"
        width="128"
        height="128"
        layout="intrinsic"
        quality="100"
      />

      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-orange-300">Mehedi </span>Pathan
      </h3>

      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-gray-700">
        Web Developer
      </p>

      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-gray-700"
        href="/assets/mehedi_pathan_resume.pdf"
        download="mehedi_pathan_resume.pdf"
      >
        <GiTie className="w-6 h-6" /> Download Resume
      </a>

      {/* social icons  */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-orange-500 md:w-full">
        <a href="#">
          <AiOutlineTwitter className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="#">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="#">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-gray-700"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Bogura, Bangladesh</span>
        </div>
        <p className="my-2">contact@mehedipathan.com</p>
        <a href="tel:+8801622839616" className="my-2">
          +880-162-283-9616
        </a>
      </div>
      <button
        className="w-8/12 px-4 py-2 my-2 text-white rounded-full bg-gradient-to-r from-orange-300 to-yellow-400 focus:outline-none"
        onClick={() => window.open("mailto:contact.mehedipathan.com")} //mail box open function added "just on click"
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-4 py-2 my-2 text-white rounded-full bg-gradient-to-r from-orange-300 to-yellow-400 focus:outline-none"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
