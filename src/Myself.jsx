import Button from "./components/Button";
import { FiDownload } from "react-icons/fi";

function Myself() {
  return (
    <div className=" p-5 md:pl-10 pr-10">
      <h6 className="font-bebas text-2xl  md:ml-3">Hi, I'm__</h6>
      <h1 className="font-bebas text-8xl font-bold mt-5 tracking-wider md:text-11xl">
        Aditya
      </h1>
      <h3 className="font-bebas text-5xl font-black mt-1 tracking-wider">
        <span className="block md:text-7xl">Full stack</span>
        <span className="block md:text-7xl">Developer</span>
      </h3>
      <p className="font-inter font-medium mt-5 w-5/6 md:w-1/4">
        I build scalable web applications and digital experiences that are fast,
        secure and user focused.
      </p>

      <div className="mt-8 flex bg-amber-200 gap-5 w-fit">
        <Button text="View my work" bg="bg-black" tc="text-white" />
        <button className="flex items-center bg-[#F8F4EE] border-2 rounded-2xl font-inter font-semibold leading-none cursor-pointer text-xs px-2 py-3 whitespace-nowrap">
          DOWNLOAD RESUME
          <FiDownload className="text-sm ml-2 text-black" />
        </button>
      </div>
    </div>
  );
}

export default Myself;
