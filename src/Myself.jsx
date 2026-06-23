import Button from "./components/Button"
import { FiDownload } from "react-icons/fi";

function Myself(){
return(
    <div className=" p-5 bg-amber-200">
        <h6 className="font-bebas text-2xl">Hi, I'm__</h6>
        <h1 className="font-bebas text-8xl font-bold mt-5 tracking-wider">Aditya</h1>
        <h3 className="font-bebas text-5xl font-black mt-1 tracking-wider">
            <span className="block">Full stack</span>
            <span className="block">Developer</span>
        </h3>
        <p className="mt-5 text-lg font-inter w-5/6 ">I build scalable web applications and digital experiences that are fast, secure and user focused.</p>
        <div className="mt-8 flex justify-between bg-amber-500">
            <Button text="View my work"/>
            <button className="flex font-inter border-2 p-2 rounded-2xl bg-[#F8F4EE] font-semibold cursor-pointer">Download Resume <FiDownload className="ml-2 text-xl" />
</button>
        </div>

    </div>
)
}

export default Myself