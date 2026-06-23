import { GoArrowUpRight } from "react-icons/go";
function Button({text}){
    return (
        <div className="bg-black w-fit p-3 text-white font-inter rounded-2xl text-sm font-medium flex cursor-pointer">
            {text.toUpperCase()} <GoArrowUpRight className="text-xl ml-2 text-orange-300" />
        </div>
    )
}

export default Button;