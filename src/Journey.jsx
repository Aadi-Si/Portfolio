import {
  useLayoutEffect,
  useRef,
} from "react";

import gsap from "gsap";

import {
  ScrollTrigger,
} from "gsap/ScrollTrigger";

import {
  FaAsterisk,
} from "react-icons/fa";

import JourneyCard from "./components/JourneyCard";

/* ================================================= */
/* ================= REGISTER GSAP ================== */
/* ================================================= */

gsap.registerPlugin(
  ScrollTrigger
);

/* ================================================= */
/* ================= JOURNEY DATA =================== */
/* ================================================= */

const journeyDetails = [
  {
    year: "2023",

    label: "The Beginning",

    text:
      "Started my journey into full-stack web development, learning the foundations of frontend development and discovering my passion for building digital experiences.",
  },

  {
    year: "2024",

    label: "Building & Learning",

    text:
      "Built multiple full-stack projects, strengthened my skills in React, JavaScript, Node.js and databases, and started transforming ideas into functional applications.",
  },

  {
    year: "2025",

    label: "Real-World Growth",

    text:
      "Focused on scalable applications, production-ready products and complete user experiences while continuously improving my frontend and backend development skills.",
  },

  {
    year: "Future",

    label: "The Next Chapter",

    text:
      "Continuing to learn, experiment and build meaningful products while solving larger real-world problems through thoughtful design and technology.",

    isFuture: true,
  },
];

/* ================================================= */
/* ================= JOURNEY ======================== */
/* ================================================= */

function Journey() {
  const sectionRef =
    useRef(null);

  const timelineRef =
    useRef(null);

  /* ================================================= */
  /* ================= GSAP ANIMATIONS ================ */
  /* ================================================= */

  useLayoutEffect(() => {
    const context =
      gsap.context(() => {
        /*
          Main heading reveal.
        */

        gsap.from(
          ".journey-heading",
          {
            y: 90,

            opacity: 0,

            duration: 1,

            ease:
              "power4.out",

            scrollTrigger: {
              trigger:
                ".journey-heading",

              start:
                "top 85%",

              once: true,
            },
          }
        );

        /*
          Animate the timeline line
          from the top toward the bottom.
        */

        gsap.fromTo(
          timelineRef.current,

          {
            scaleY: 0,
          },

          {
            scaleY: 1,

            ease: "none",

            scrollTrigger: {
              trigger:
                sectionRef.current,

              start:
                "top 65%",

              end:
                "bottom 75%",

              scrub: 1,
            },
          }
        );

        /*
          Animate every timeline item.
        */

        gsap.utils
          .toArray(
            ".journey-item"
          )
          .forEach(
            (
              item,
              index
            ) => {
              const card =
                item.querySelector(
                  ".journey-card"
                );

              const marker =
                item.querySelector(
                  ".journey-marker"
                );

              const star =
                item.querySelector(
                  ".journey-star"
                );

              /*
                Cards enter from alternating sides.
              */

              gsap.from(
                card,
                {
                  x:
                    index % 2 ===
                    0
                      ? -100
                      : 100,

                  opacity: 0,

                  rotate:
                    index % 2 ===
                    0
                      ? -3
                      : 3,

                  duration: 1,

                  ease:
                    "power4.out",

                  scrollTrigger: {
                    trigger:
                      item,

                    start:
                      "top 82%",

                    once: true,
                  },
                }
              );

              /*
                Timeline marker reveal.
              */

              gsap.from(
                marker,
                {
                  scale: 0,

                  rotate:
                    -180,

                  duration:
                    0.8,

                  ease:
                    "back.out(1.8)",

                  scrollTrigger: {
                    trigger:
                      item,

                    start:
                      "top 78%",

                    once: true,
                  },
                }
              );

              /*
                Slowly rotate every asterisk.
              */

              gsap.to(
                star,
                {
                  rotate:
                    360,

                  duration:
                    10,

                  repeat:
                    -1,

                  ease:
                    "none",
                }
              );
            }
          );
      }, sectionRef);

    return () =>
      context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}

      id="journey"

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
      {/* ================ BACKGROUND TEXT ================ */}
      {/* ================================================= */}

      <p
        className="
          pointer-events-none

          absolute

          top-[20%]

          -right-10

          hidden

          rotate-90

          font-bebas

          text-[150px]

          leading-none

          font-black

          tracking-tight

          text-black/[0.025]

          uppercase

          xl:block
        "
      >
        Progress
      </p>

      {/* ================================================= */}
      {/* ================= SECTION HEADER ================ */}
      {/* ================================================= */}

      <div
        className="
          flex

          items-start

          justify-between
        "
      >
        <div>
          {/* Small label */}

          <div
            className="
              flex

              items-center

              gap-3
            "
          >
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
              My Journey
            </p>
          </div>

          {/* Main heading */}

          <div className="overflow-hidden">
            <h2
              className="
                journey-heading

                mt-5

                font-bebas

                text-[17vw]

                leading-[0.8]

                font-black

                tracking-tight

                uppercase

                sm:text-[13vw]

                lg:text-[8.5vw]
              "
            >
              Growing

              <span
                className="
                  block

                  text-orange-400
                "
              >
                Every Day.
              </span>
            </h2>
          </div>
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
          04 / JOURNEY
        </p>
      </div>

      {/* ================================================= */}
      {/* ================= INTRODUCTION =================== */}
      {/* ================================================= */}

      <div
        className="
          mt-10

          flex

          max-w-xl

          items-start

          gap-4

          md:ml-auto
        "
      >
        <span
          className="
            mt-2

            h-[3px]

            w-16

            shrink-0

            bg-black
          "
        />

        <p
          className="
            font-inter

            text-sm

            leading-7

            font-medium

            md:text-base
          "
        >
          Every project,
          challenge and lesson
          has shaped the developer
          I am becoming. This is
          the journey so far—and
          it is only getting
          started.
        </p>
      </div>

      {/* ================================================= */}
      {/* ================= TIMELINE ======================= */}
      {/* ================================================= */}

      <div
        className="
          relative

          mt-20

          space-y-14

          md:mt-28

          md:space-y-20
        "
      >
        {/* Timeline background line */}

        <div
          className="
            absolute

            top-0

            bottom-0

            left-[21px]

            w-[3px]

            bg-black/15

            md:left-1/2

            md:-translate-x-1/2
          "
        />

        {/* Animated orange progress line */}

        <div
          ref={
            timelineRef
          }

          className="
            absolute

            top-0

            bottom-0

            left-[21px]

            w-[3px]

            origin-top

            bg-orange-400

            md:left-1/2

            md:-translate-x-1/2
          "
        />

        {/* Journey cards */}

        {journeyDetails.map(
          (
            journey,
            index
          ) => (
            <JourneyCard
              key={
                journey.year
              }

              year={
                journey.year
              }

              label={
                journey.label
              }

              text={
                journey.text
              }

              index={
                index
              }

              isFuture={
                journey.isFuture
              }
            />
          )
        )}
      </div>

      {/* ================================================= */}
      {/* ================= BOTTOM MESSAGE ================= */}
      {/* ================================================= */}

      <div
        className="
          mt-24

          border-y-2

          border-black

          py-6

          md:mt-32
        "
      >
        <div
          className="
            flex

            items-center

            justify-between

            gap-5
          "
        >
          <p
            className="
              font-bebas

              text-2xl

              tracking-wide

              uppercase

              md:text-4xl
            "
          >
            The journey
            continues
          </p>

          <div
            className="
              h-[2px]

              flex-1

              bg-black
            "
          />

          <FaAsterisk
            className="
              shrink-0

              animate-[spin_10s_linear_infinite]

              text-xl

              text-orange-400

              md:text-3xl
            "
          />

          <div
            className="
              h-[2px]

              flex-1

              bg-black
            "
          />

          <p
            className="
              hidden

              font-bebas

              text-4xl

              tracking-wide

              uppercase

              md:block
            "
          >
            Keep building
          </p>
        </div>
      </div>
    </section>
  );
}

export default Journey;