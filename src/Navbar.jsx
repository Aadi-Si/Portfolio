import { IoMenu } from "react-icons/io5";

function Navbar(){
    var NavArr = ["Home","About","Projects","Experience","Skills","Contact"]
return (
    <nav className="font-bebas text-4xl p-5 flex justify-between bg-blue-300">
        <h5>Aditya.</h5>
        <IoMenu className="bg-black text-white p-1 rounded-md "/>
    </nav>
)
}
export default Navbar