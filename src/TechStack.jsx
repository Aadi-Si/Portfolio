import { GoDot, GoDotFill } from "react-icons/go";
const TechStack = () => {
  return (
    <div className="p-5 bg-blue-300">
        <button className="font-inter border-2 p-2 rounded-2xl bg-[#F8F4EE] font-semibold cursor-pointer flex">Based in India <GoDotFill className="ml-1 text-2xl text-orange-400 "/></button>
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
    </div>
  );
};

export default TechStack;