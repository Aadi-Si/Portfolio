import { IoMail } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import Button from "./components/Button";
function Connect() {
  return (
    <div className="p-5 rounded-lg overflow-hidden">
      <h5 className="font-inter font-bold text-orange-400 text-lg mt-3">
        FEATURED PROJECTS
      </h5>
      <h2 className="font-inter mt-8 text-2xl font-black">
        <span className="block">LET'S BUILD</span>
        <span className="block">SOMETHING AMAZING.</span>
      </h2>
      <p className="font-inter font-medium mt-5">
        I'm always open to discussing new opportunities, collaborations or just
        having a chat.
      </p>
      <div className="mt-5 p-5 border-2 border-[#c8c7ee] rounded-xl">
        <div className="flex items-center gap-5">
          <IoMail className="text-2xl" />
          <a
            className="font-inter font-medium"
            href="mailto:aadisi1907@gmail.com"
          >
            aadisi1907@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-5 mt-3">
          <IoLogoLinkedin className="text-2xl" />
          <a
            className="font-inter font-medium"
            href="https://www.linkedin.com/in/aditya-singh-ba88141a0/?skipRedirect=true"
          >
            Linkedin.com/in/aditya
          </a>
        </div>
        <div className="flex items-center gap-5 mt-3">
          <FaGithubSquare className="text-2xl" />
          <a
            className="font-inter font-medium"
            href="https://github.com/Aadi-Si"
          >
            GitHub.com/in/aditya
          </a>
        </div>
      </div>
      <div className="mt-7">
        <Button text="Let's Connect" bg="bg-black" tc="text-white" />
      </div>
    </div>
  );
}

export default Connect;
