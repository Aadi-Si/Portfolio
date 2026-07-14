import { FiDownload } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";

import {
  SiReact,
  SiJavascript,
  SiExpress,
  SiPostgresql,
  SiPostman,
  SiSpringboot,
} from "react-icons/si";

function Myself() {
  /* ================================================= */
  /* ================ SMOOTH SCROLL ================== */
  /* ================================================= */

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");

    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        scroll-mt-20
        overflow-hidden
        px-5
        pt-20
        md:px-10
      "
    >
      {/* ================================================= */}
      {/* ============== FLOATING TECH ICONS ============== */}
      {/* ================================================= */}

      {/* React — top left */}

      <div className="absolute top-[20%] left-[7%] z-20 hidden animate-[float_4s_ease-in-out_infinite] lg:flex">
        <div
          className="
            -rotate-6
            rounded-2xl
            border-2
            border-black
            bg-[#F8F4EE]
            p-4
            shadow-[6px_6px_0px_#000]
            transition-all
            duration-300
            hover:rotate-0
            hover:scale-110
          "
        >
          <SiReact className="text-5xl" />
        </div>
      </div>

      {/* Express — top right */}

      <div className="absolute top-[22%] right-[7%] z-20 hidden animate-[float_5s_ease-in-out_infinite] lg:flex">
        <div
          className="
            rotate-6
            rounded-2xl
            border-2
            border-black
            bg-[#F8F4EE]
            px-5
            py-4
            shadow-[6px_6px_0px_#000]
            transition-all
            duration-300
            hover:rotate-0
            hover:scale-110
          "
        >
          <SiExpress className="text-5xl" />
        </div>
      </div>

      {/* PostgreSQL — middle left */}

      <div className="absolute top-[57%] left-[9%] z-20 hidden animate-[float_5.5s_ease-in-out_infinite] lg:flex">
        <div
          className="
            rotate-6
            rounded-2xl
            border-2
            border-black
            bg-[#F8F4EE]
            p-4
            shadow-[6px_6px_0px_#000]
            transition-all
            duration-300
            hover:rotate-0
            hover:scale-110
          "
        >
          <SiPostgresql className="text-5xl" />
        </div>
      </div>

      {/* JavaScript — middle right */}

      <div className="absolute top-[57%] right-[9%] z-20 hidden animate-[float_4.5s_ease-in-out_infinite] lg:flex">
        <div
          className="
            -rotate-6
            rounded-2xl
            border-2
            border-black
            bg-[#F8F4EE]
            p-4
            shadow-[6px_6px_0px_#000]
            transition-all
            duration-300
            hover:rotate-0
            hover:scale-110
          "
        >
          <SiJavascript className="text-5xl" />
        </div>
      </div>

      {/* Postman — bottom left */}

      <div className="absolute bottom-[9%] left-[20%] z-20 hidden animate-[float_6s_ease-in-out_infinite] lg:flex">
        <div
          className="
            rotate-3
            rounded-2xl
            border-2
            border-black
            bg-[#F8F4EE]
            p-3
            shadow-[5px_5px_0px_#000]
            transition-all
            duration-300
            hover:rotate-0
            hover:scale-110
          "
        >
          <SiPostman className="text-4xl" />
        </div>
      </div>

      {/* Spring Boot — bottom right */}

      <div className="absolute right-[20%] bottom-[9%] z-20 hidden animate-[float_5.5s_ease-in-out_infinite] lg:flex">
        <div
          className="
            -rotate-3
            rounded-2xl
            border-2
            border-black
            bg-[#F8F4EE]
            p-3
            shadow-[5px_5px_0px_#000]
            transition-all
            duration-300
            hover:rotate-0
            hover:scale-110
          "
        >
          <SiSpringboot className="text-4xl" />
        </div>
      </div>

      {/* ================================================= */}
      {/* ================= MAIN CONTENT =================== */}
      {/* ================================================= */}

      <div
        className="
          relative
          z-10
          flex
          min-h-[calc(100vh-80px)]
          flex-col
          items-center
          justify-center
          pb-16
          text-center
        "
      >
        {/* ================================================= */}
        {/* ==================== NAME ======================== */}
        {/* ================================================= */}

        <div className="mb-5 flex flex-col items-center">
          <p className="font-inter text-xs font-bold tracking-[0.35em] uppercase md:text-sm">
            Hi, I&apos;m
          </p>

          <div className="mt-2 flex items-center gap-4 md:gap-6">
            {/* Left line */}

            <span className="h-0.5 w-8 bg-black md:w-16" />

            {/* Name */}

            <h2 className="font-bebas text-5xl leading-none tracking-[0.12em] uppercase md:text-7xl">
              Aditya
            </h2>

            {/* Right line */}

            <span className="h-0.5 w-8 bg-black md:w-16" />
          </div>
        </div>

        {/* ================================================= */}
        {/* ================= MAIN HEADING =================== */}
        {/* ================================================= */}

        <h1
          className="
            font-bebas
            text-[22vw]
            leading-[0.78]
            font-black
            tracking-tight
            uppercase

            sm:text-[18vw]

            lg:text-[13vw]
          "
        >
          <span className="block">
            Full Stack
          </span>

          <span className="block">
            Developer
          </span>
        </h1>

        {/* ================================================= */}
        {/* ================= DESCRIPTION ==================== */}
        {/* ================================================= */}

        <p
          className="
            mt-10
            max-w-xl
            font-inter
            text-sm
            leading-6
            font-medium

            sm:text-base
            sm:leading-7
          "
        >
          I build scalable web applications and digital experiences that are
          fast, secure, and user-focused.
        </p>

        {/* ================================================= */}
        {/* ==================== BUTTONS ===================== */}
        {/* ================================================= */}

        {/* ================= BUTTONS ================= */}

<div className="mt-7 flex flex-wrap items-center justify-center gap-5">
  {/* ================= VIEW MY WORK ================= */}

  <button
    type="button"
    onClick={scrollToProjects}
    className="
      group
      inline-flex
      cursor-pointer
      items-center
      justify-center
      gap-2
      whitespace-nowrap
      rounded-2xl
      border-[3px]
      border-black
      bg-[#F8F4EE]
      px-4
      py-3
      font-inter
      text-xs
      font-bold
      text-black
      shadow-[5px_5px_0px_#000]
      transition-[transform,box-shadow]
      duration-150
      ease-out

      hover:-translate-x-0.5
      hover:-translate-y-0.5
      hover:shadow-[7px_7px_0px_#000]

      active:translate-x-[3px]
      active:translate-y-[3px]
      active:shadow-none

      focus-visible:outline-3
      focus-visible:outline-offset-4
      focus-visible:outline-blue-400
    "
  >
    VIEW MY WORK

    <GoArrowUpRight
      className="
        text-base
        text-orange-500
        transition-transform
        duration-300

        group-hover:translate-x-1
        group-hover:-translate-y-1
      "
    />
  </button>

  {/* ================= DOWNLOAD RESUME ================= */}

  <a
    href="/Aditya-Singh-Resume.pdf"
    download="Aditya-Singh-Resume.pdf"
    className="
      group
      inline-flex
      cursor-pointer
      items-center
      justify-center
      gap-2
      whitespace-nowrap
      rounded-2xl
      border-[3px]
      border-black
      bg-[#F8F4EE]
      px-4
      py-3
      font-inter
      text-xs
      font-bold
      text-black
      no-underline
      shadow-[5px_5px_0px_#000]
      transition-[transform,box-shadow]
      duration-150
      ease-out

      hover:-translate-x-0.5
      hover:-translate-y-0.5
      hover:shadow-[7px_7px_0px_#000]

      active:translate-x-[3px]
      active:translate-y-[3px]
      active:shadow-none

      focus-visible:outline-3
      focus-visible:outline-offset-4
      focus-visible:outline-blue-400
    "
  >
    DOWNLOAD RESUME

    <FiDownload
      className="
        text-base
        transition-transform
        duration-300

        group-hover:translate-y-1
      "
    />
  </a>
</div>
      </div>

      {/* ================================================= */}
      {/* ================= BOTTOM DETAILS ================= */}
      {/* ================================================= */}

      <div
        className="
          absolute
          right-5
          bottom-5
          left-5
          z-20

          flex
          items-end
          justify-between

          md:right-10
          md:bottom-8
          md:left-10
        "
      >
        <p className="font-bebas text-xl tracking-wider md:text-3xl">
          ©2026
        </p>

        <p className="font-inter text-[10px] font-bold tracking-[0.15em] md:text-xs">
          ADITYA / INDIA
        </p>
      </div>
    </section>
  );
}

export default Myself;