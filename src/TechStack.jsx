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
    <div className="p-5">
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
        <h4 className="font-inter font-bold">TECH I WORK WITH</h4>
        <div className="flex text-5xl gap-5 flex-wrap mt-5">
          <IoLogoReact className="" />
          <FaJsSquare  className=""/>
          <BsTypescript  className=""/>
          <FaNode  className=""/>
          <SiMongodb  className=""/>
          <SiTailwindcss  />
          <FaJava  />
          <FaPython  />
          <SiNextdotjs  />
          <BiLogoPostgresql  />
          <SiGsap  />
          <BiLogoSpringBoot  />
          <TbBrandRedux  />
          <FaGitAlt  />
          <SiPostman />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
