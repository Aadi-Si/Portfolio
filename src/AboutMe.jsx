import { FaAsterisk } from "react-icons/fa";
function AboutMe() {
  return (
    <div className="p-5 md:pl-10 md:pr-10 border-t-2 border-b-2">
      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
        <div className=" lg:col-span-2 xl:xl:col-span-1 ">
          <h5 className="font-inter font-bold text-orange-400 text-lg md:text-xl mt-3">
            ABOUT ME
          </h5>
          <h2 className="font-inter font-black md:font-black mt-5 text-4xl md:text-7xl pl-5 xl:pl-30 md:mt-12 grid grid-cols-2 gap-y-5 md:block">
            <span className="block">BUILD</span>
            <span className="block xl:mt-2">LEARN</span>
            <span className="block xl:mt-2">GROW</span>
            <span className="block xl:mt-2">REPEAT</span>
          </h2>
        </div>
        <div className="md:p-5 mt-9">
          <img className="rounded-4xl md:rounded-full border-2 border-[#c8c7ee]" src="/rough.png" alt="" />
        </div>
        <div className="md:p-5 md:pl-10 md:col-span-2 lg:col-span-1">
          <p className="mt-5 md:mt-15 font-inter font-medium md:text-xl md:w-3/4 lg:w-full xl:w-3/4">
            I'm a Full Stack Developer who loves building modern web
            applications. I enjoy working with React, Express.js, MongoDB and
            Java to create seamless digital experiences.
          </p>
          <p className="mt-3 font-inter font-medium md:text-xl md:w-3/4">
            I'm passionate about clean code, intuitive UI/UX and solving
            real-world problems through technology.
          </p>
          <h2 className="mt-7 md:mt-10 font-WindSong text-3xl font-semibold">
            Aditya
          </h2>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default AboutMe;
