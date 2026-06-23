function Navbar(){
    var NavArr = ["Home","About","Projects","Experience","Skills","Contact"]
return (
    <div className="flex gap-50 p-5 font-bebas text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-xl">
        <h5 className="font-semibold">Aditya.</h5>
        <div className="flex gap-10">
            {NavArr.map((item,index)=>{
                return <span className="gap-10" key={index}>{item}</span>
            })}
        </div>
    </div>
)
}
export default Navbar