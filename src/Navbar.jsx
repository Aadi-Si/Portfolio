import { IoMenu } from "react-icons/io5";
import { FaDragon } from "react-icons/fa6";
function Navbar(){
    var NavArr = ["Home","About","Projects","Experience","Skills","Contact"]
return (
    <nav className="font-bebas text-4xl p-5 flex justify-between">
        <FaDragon />
        <IoMenu className="bg-black text-white p-1 rounded-md md:hidden"/>
    </nav>
)
}
export default Navbar