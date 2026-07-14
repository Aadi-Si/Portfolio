import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { IoMail } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaAsterisk } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

gsap.registerPlugin(ScrollTrigger);

/* ================================================= */
/* ================= CONTACT DATA =================== */
/* ================================================= */

const contactDetails = [
  {
    number: "01",
    label: "Email",
    value: "aadisi1907@gmail.com",
    href: "mailto:aadisi1907@gmail.com",
    icon: IoMail,
  },

  {
    number: "02",
    label: "LinkedIn",
    value: "linkedin.com/in/aditya-singh",
    href: "https://www.linkedin.com/in/aditya-singh-ba88141a0/",
    icon: IoLogoLinkedin,
  },

  {
    number: "03",
    label: "GitHub",
    value: "github.com/Aadi-Si",
    href: "https://github.com/Aadi-Si",
    icon: FaGithub,
  },
];

/* ================================================= */
/* ================= CONNECT ======================== */
/* ================================================= */

function Connect() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      /* Main heading animation */

      gsap.from(".connect-heading-line", {
        y: 120,
        rotate: 3,
        opacity: 0,

        duration: 1.1,

        stagger: 0.12,

        ease: "power4.out",

        scrollTrigger: {
          trigger: ".connect-heading",

          start: "top 82%",

          once: true,
        },
      });

      /* Introduction animation */

      gsap.from(".connect-intro", {
        y: 40,

        opacity: 0,

        duration: 0.8,

        ease: "power3.out",

        scrollTrigger: {
          trigger: ".connect-intro",

          start: "top 88%",

          once: true,
        },
      });

      /* Contact card animations */

      gsap.from(".contact-card", {
        y: 80,

        opacity: 0,

        rotate: 2,

        duration: 0.9,

        stagger: 0.12,

        ease: "power4.out",

        scrollTrigger: {
          trigger: ".contact-list",

          start: "top 82%",

          once: true,
        },
      });

      /* CTA animation */

      gsap.from(".connect-cta", {
        scale: 0.9,

        opacity: 0,

        y: 60,

        duration: 1,

        ease: "back.out(1.3)",

        scrollTrigger: {
          trigger: ".connect-cta",

          start: "top 88%",

          once: true,
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="
        relative
        overflow-hidden
        border-b-2
        border-black
        bg-[#F8F4EE]
        px-5
        py-16

        md:px-10
        md:py-24
      "
    >
      {/* ================================================= */}
      {/* ================= BACKGROUND TEXT ================ */}
      {/* ================================================= */}

      <p
        className="
          pointer-events-none
          absolute
          top-[25%]
          -right-20
          hidden
          rotate-90

          font-bebas
          text-[180px]
          leading-none
          font-black
          tracking-tight
          text-black/[0.025]
          uppercase

          xl:block
        "
      >
        Connect
      </p>

      {/* ================================================= */}
      {/* ================= TOP DETAILS ==================== */}
      {/* ================================================= */}

      <div className="flex items-center justify-between">
        {/* Section label */}

        <div className="flex items-center gap-3">
          <FaAsterisk
            className="
              animate-[spin_10s_linear_infinite]
              text-base
              text-orange-400
            "
          />

          <p
            className="
              font-inter
              text-xs
              font-black
              tracking-[0.25em]
              uppercase
            "
          >
            Let&apos;s Connect
          </p>
        </div>

        {/* Section number */}

        <p
          className="
            hidden
            font-inter
            text-xs
            font-bold
            tracking-[0.2em]

            md:block
          "
        >
          05 / CONTACT
        </p>
      </div>

      {/* ================================================= */}
      {/* ================= MAIN HEADING =================== */}
      {/* ================================================= */}

      <div
        className="
          mt-12
          grid
          grid-cols-1
          gap-10

          lg:grid-cols-[1.35fr_0.65fr]
          lg:items-end
        "
      >
        <div className="connect-heading">
          {/* First heading line */}

          <div className="overflow-hidden">
            <h2
              className="
                connect-heading-line

                font-bebas
                text-[19vw]
                leading-[0.77]
                font-black
                tracking-tight
                uppercase

                sm:text-[15vw]
                lg:text-[9vw]
              "
            >
              Let&apos;s Build
            </h2>
          </div>

          {/* Second heading line */}

          <div className="overflow-hidden">
            <h2
              className="
                connect-heading-line

                font-bebas
                text-[19vw]
                leading-[0.82]
                font-black
                tracking-tight
                text-orange-400
                uppercase

                sm:text-[15vw]
                lg:text-[9vw]
              "
            >
              Something
            </h2>
          </div>

          {/* Third heading line */}

          <div className="overflow-hidden">
            <h2
              className="
                connect-heading-line

                font-bebas
                text-[19vw]
                leading-[0.82]
                font-black
                tracking-tight
                uppercase

                sm:text-[15vw]
                lg:text-[9vw]
              "
            >
              Amazing.
            </h2>
          </div>
        </div>

        {/* ================================================= */}
        {/* ================= INTRODUCTION =================== */}
        {/* ================================================= */}

        <div className="connect-intro lg:pb-3">
          <div className="flex items-center gap-4">
            <span className="h-[3px] w-16 bg-black" />

            <GoArrowUpRight className="text-3xl" />

            <p
              className="
                font-inter
                text-[9px]
                font-black
                tracking-[0.2em]
                uppercase
              "
            >
              Open to opportunities
            </p>
          </div>

          <p
            className="
              mt-7
              max-w-md
              font-inter
              text-base
              leading-8
              font-medium

              md:text-lg
            "
          >
            Have an idea, an opportunity, or just want to talk about technology?
            I&apos;m always open to meaningful conversations and exciting
            collaborations.
          </p>

          {/* Availability */}

          <div
            className="
              mt-7
              flex
              w-fit
              items-center
              gap-3
              border-2
              border-black
              bg-white
              px-4
              py-3
              shadow-[4px_4px_0px_#000]
            "
          >
            <span className="relative flex h-3 w-3">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-green-500
                  opacity-70
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-3
                  w-3
                  rounded-full
                  bg-green-500
                "
              />
            </span>

            <p
              className="
                font-inter
                text-[9px]
                font-black
                tracking-[0.16em]
                uppercase
              "
            >
              Available for opportunities
            </p>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* ================= CONTACT CARDS ================== */}
      {/* ================================================= */}

      <div
        className="
          contact-list
          mt-20
          grid
          grid-cols-1
          gap-5

          md:grid-cols-3
        "
      >
        {contactDetails.map((contact) => {
          const Icon = contact.icon;

          return (
            <a
              key={contact.label}
              href={contact.href}
              target={
                contact.label === "Email"
                  ? undefined
                  : "_blank"
              }
              rel={
                contact.label === "Email"
                  ? undefined
                  : "noopener noreferrer"
              }
              className="
                contact-card
                group
                relative
                overflow-hidden

                border-2
                border-black

                bg-[#F8F4EE]

                p-5

                text-black
                no-underline

                shadow-[7px_7px_0px_#000]

                transition-[transform,box-shadow]
                duration-300

                hover:-translate-x-1
                hover:-translate-y-1

                hover:shadow-[11px_11px_0px_#000]

                md:p-7
              "
            >
              {/* Orange hover background */}

              <div
                className="
                  absolute
                  inset-0

                  origin-bottom
                  scale-y-0

                  bg-orange-400

                  transition-transform
                  duration-500

                  group-hover:scale-y-100
                "
              />

              {/* Card content */}

              <div className="relative z-10">
                {/* Number and arrow */}

                <div className="flex items-start justify-between">
                  <p
                    className="
                      font-bebas
                      text-2xl
                      font-black
                    "
                  >
                    {contact.number}
                  </p>

                  <GoArrowUpRight
                    className="
                      text-3xl

                      transition-transform
                      duration-300

                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </div>

                {/* Contact icon */}

                <div
                  className="
                    mt-12

                    flex
                    h-16
                    w-16

                    items-center
                    justify-center

                    border-2
                    border-black

                    bg-black
                    text-white

                    transition-colors
                    duration-300

                    group-hover:bg-[#F8F4EE]
                    group-hover:text-black
                  "
                >
                  <Icon className="text-3xl" />
                </div>

                {/* Contact information */}

                <div
                  className="
                    mt-8
                    border-t-2
                    border-black
                    pt-5
                  "
                >
                  <p
                    className="
                      font-inter
                      text-[9px]
                      font-black
                      tracking-[0.2em]
                      uppercase
                    "
                  >
                    {contact.label}
                  </p>

                  <p
                    className="
                      mt-2
                      overflow-hidden
                      font-inter
                      text-sm
                      font-semibold
                      text-ellipsis
                      whitespace-nowrap

                      lg:text-base
                    "
                  >
                    {contact.value}
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* ================================================= */}
      {/* ================= LARGE CTA ====================== */}
      {/* ================================================= */}

      <a
        href="mailto:aadisi1907@gmail.com"
        className="
          connect-cta
          group

          relative

          mt-24

          flex

          min-h-[220px]

          items-center

          justify-between

          overflow-hidden

          border-2

          border-black

          bg-orange-400

          p-6

          text-black

          no-underline

          shadow-[9px_9px_0px_#000]

          transition-[transform,box-shadow]

          duration-300

          hover:-translate-x-1

          hover:-translate-y-1

          hover:shadow-[13px_13px_0px_#000]

          md:min-h-[300px]

          md:p-12
        "
      >
        {/* Decorative background circle */}

        <div
          className="
            absolute

            -right-24

            -bottom-32

            h-80

            w-80

            rounded-full

            border-[40px]

            border-black/10

            transition-transform

            duration-700

            group-hover:scale-125

            md:h-[500px]

            md:w-[500px]
          "
        />

        {/* CTA text */}

        <div className="relative z-10">
          <p
            className="
              font-inter

              text-[9px]

              font-black

              tracking-[0.25em]

              uppercase
            "
          >
            Have a project in mind?
          </p>

          <h3
            className="
              mt-4

              font-bebas

              text-[15vw]

              leading-[0.8]

              font-black

              tracking-tight

              uppercase

              md:text-[8vw]
            "
          >
            Say Hello.
          </h3>
        </div>

        {/* CTA arrow */}

        <div
          className="
            relative

            z-10

            flex

            h-16

            w-16

            shrink-0

            items-center

            justify-center

            border-2

            border-black

            bg-black

            text-white

            transition-all

            duration-500

            group-hover:rotate-12

            group-hover:scale-110

            md:h-28

            md:w-28
          "
        >
          <GoArrowUpRight
            className="
              text-4xl

              transition-transform

              duration-300

              group-hover:translate-x-2

              group-hover:-translate-y-2

              md:text-6xl
            "
          />
        </div>
      </a>
    </section>
  );
}

export default Connect;