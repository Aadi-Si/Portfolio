import { GoArrowUpRight } from "react-icons/go";
function Button({ text ,bg, tc}) {
  return (
    <div className={`${bg} w-fit px-2 py-3 ${tc} font-inter rounded-2xl text-xs font-semibold flex cursor-pointer whitespace-nowrap items-center`}>
        {text.toUpperCase()} <GoArrowUpRight className="text-sm ml-2 text-orange-300" />
    </div>
  );
}

export default Button;
