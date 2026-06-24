import { GoArrowUpRight } from "react-icons/go";
function Project({no,text,detail}) {
  return (
    <div className="mt-10">
      <div className="flex">
        <div className="bg-red-400 p-5 flex items-center">
          <h2 className="font-bebas font-bold text-6xl">{no}</h2>
        </div>
        <div className="bg-green-400 p-5">
          <h3 className="font-bebas font-bold text-3xl tracking-wide">
            {text}
          </h3>
          <h5 className="font-inter font-semibold mt-2">{detail}</h5>
        </div>
        <div className="bg-yellow-300 p-5 flex items-center">
          <GoArrowUpRight className="text-2xl font-black" />
        </div>
      </div>
    </div>
  );
}

export default Project;
