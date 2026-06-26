import { GoDot, GoDotFill } from "react-icons/go";
import { IoLogoReact } from "react-icons/io5";
import { FaJsSquare } from "react-icons/fa";
import { BsTypescript } from "react-icons/bs";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiGsap } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { TbBrandRedux } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
const TechStack = () => {
  return (
    <div className="p-5 md:pl-10 md:pr-10 border-2">
      <button className="font-inter border-2 p-2 rounded-2xl bg-[#F8F4EE] font-semibold cursor-pointer flex">
        Based in India <GoDotFill className="ml-1 text-2xl text-orange-400 " />
      </button>
      <div className="mt-5 flex justify-evenly border-2 border-[#c8c8c7] rounded-lg overflow-hidden font-bebas tracking-widest">
        <div className="flex-1 border-r-2 border-[#c8c8c7] p-5 pl-15">
          <h3>
            <span className="block font-bold text-4xl">02 +</span>
            <span className="block font-bold text-md mt-2">YEARS OF</span>
            <span className="block font-bold text-md">LEARNING</span>
          </h3>
        </div>
        <div className="flex-1 p-5 pl-15">
          <h3>
            <span className="block font-bold text-4xl">10 +</span>
            <span className="block font-bold text-md mt-2">PROJECTS</span>
            <span className="block font-bold text-md">LEARNING</span>
          </h3>
        </div>
      </div>
      <div className="mt-8">
        <h4 className="font-inter font-black text-2xl md:text-8xl md:font-black text-center md:p-5">
          <span className="block">TECH STACK</span>
          <span className="block "> I WORK WITH</span>
        </h4>
        <div className="relative mt-5 md:mt-15 grid grid-cols-3 md:grid-cols-5">
          {/* Vertical separators */}

          <div className="pointer-events-none absolute left-1/3 md:left-[20%] top-0 h-full w-px -translate-x-1/2 bg-[linear-gradient(to_bottom,transparent_0%,#d1d5db_5%,#d1d5db_95%,transparent_100%)]" />

          <div className="pointer-events-none absolute left-2/3 md:left-[40%] top-0 h-full w-px -translate-x-1/2 bg-[linear-gradient(to_bottom,transparent_0%,#d1d5db_5%,#d1d5db_95%,transparent_100%)]" />

          {/* These only exist on desktop (5 columns) */}
          <div className="pointer-events-none absolute hidden md:block left-[60%] top-0 h-full w-px -translate-x-1/2 bg-[linear-gradient(to_bottom,transparent_0%,#d1d5db_5%,#d1d5db_95%,transparent_100%)]" />

          <div className="pointer-events-none absolute hidden md:block left-[80%] top-0 h-full w-px -translate-x-1/2 bg-[linear-gradient(to_bottom,transparent_0%,#d1d5db_5%,#d1d5db_95%,transparent_100%)]" />

          {/* Horizontal separators */}

          <div className="pointer-events-none absolute top-[20%] md:top-[33.333%] left-0 h-px w-full -translate-y-1/2 bg-[linear-gradient(to_right,transparent_0%,#d1d5db_5%,#d1d5db_95%,transparent_100%)]" />

          <div className="pointer-events-none absolute top-[40%] md:top-[66.666%] left-0 h-px w-full -translate-y-1/2 bg-[linear-gradient(to_right,transparent_0%,#d1d5db_5%,#d1d5db_95%,transparent_100%)]" />

          {/* These only exist on mobile (5 rows) */}
          <div className="pointer-events-none absolute md:hidden top-[60%] left-0 h-px w-full -translate-y-1/2 bg-[linear-gradient(to_right,transparent_0%,#d1d5db_5%,#d1d5db_95%,transparent_100%)]" />

          <div className="pointer-events-none absolute md:hidden top-[80%] left-0 h-px w-full -translate-y-1/2 bg-[linear-gradient(to_right,transparent_0%,#d1d5db_5%,#d1d5db_95%,transparent_100%)]" />

          <div className="grid place-content-center p-5 md:p-1">
            <IoLogoReact className="text-5xl md:text-6xl" />
          </div>

          <div className="grid place-content-center p-5 md:p-10">
            <FaJsSquare className="text-5xl md:text-6xl" />
          </div>

          <div className="grid place-content-center p-5 md:p-10 ">
            <FaNode className="text-5xl md:text-6xl" />
          </div>

          <div className="grid place-content-center p-5 md:p-10 b">
            <BsTypescript className="text-5xl md:text-6xl" />
          </div>

          <div className="grid place-content-center p-5 md:p-10 ">
            <SiMongodb className="text-5xl md:text-6xl" />
          </div>

          <div className="grid place-content-center p-5 md:p-10">
            <SiTailwindcss className="text-5xl md:text-6xl" />
          </div>

          <div className="grid place-content-center p-5 md:p-10 b">
            <FaJava className="text-5xl md:text-6xl" />
          </div>

          <div className="grid place-content-center p-5 md:p-10">
            <FaPython className="text-5xl md:text-6xl" />
          </div>

          <div className="grid place-content-center p-5 md:p-10 b">
            <SiNextdotjs className="text-5xl md:text-6xl" />
          </div>

          <div className="grid place-content-center p-5 md:p-10 bg">
            <BiLogoPostgresql className="text-5xl md:text-6xl" />
          </div>

          <div className="grid place-content-center p-5 md:p-10">
            <SiGsap className="text-5xl md:text-6xl" />
          </div>

          <div className="grid place-content-center p-5 md:p-10 b">
            <TbBrandRedux className="text-5xl md:text-6xl" />
          </div>

          <div className="grid place-content-center p-5 md:p-10">
            <BiLogoSpringBoot className="text-5xl md:text-6xl" />
          </div>

          <div className="grid place-content-center p-5 md:p-1">
            <FaGitAlt className="text-5xl md:text-6xl" />
          </div>

          <div className="grid place-content-center p-5 md:p-10">
            <SiPostman className="text-5xl md:text-6xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
