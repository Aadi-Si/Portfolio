import { useEffect, useRef } from "react";
import gsap from "gsap";

import { IoLogoReact } from "react-icons/io5";

import {
  FaJsSquare,
  FaNode,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";

import { FaJava } from "react-icons/fa6";
import { BsTypescript } from "react-icons/bs";

import {
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiGsap,
  SiPostman,
} from "react-icons/si";

import {
  BiLogoPostgresql,
  BiLogoSpringBoot,
} from "react-icons/bi";

import { TbBrandRedux } from "react-icons/tb";

/* ================================================= */
/* ================= TECHNOLOGIES =================== */
/* ================================================= */

const technologies = [
  {
    name: "React",
    icon: IoLogoReact,
  },

  {
    name: "JavaScript",
    icon: FaJsSquare,
  },

  {
    name: "Node.js",
    icon: FaNode,
  },

  {
    name: "TypeScript",
    icon: BsTypescript,
  },

  {
    name: "MongoDB",
    icon: SiMongodb,
  },

  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },

  {
    name: "Java",
    icon: FaJava,
  },

  {
    name: "Python",
    icon: FaPython,
  },

  {
    name: "Next.js",
    icon: SiNextdotjs,
  },

  {
    name: "PostgreSQL",
    icon: BiLogoPostgresql,
  },

  {
    name: "GSAP",
    icon: SiGsap,
  },

  {
    name: "Redux",
    icon: TbBrandRedux,
  },

  {
    name: "Spring Boot",
    icon: BiLogoSpringBoot,
  },

  {
    name: "Git",
    icon: FaGitAlt,
  },

  {
    name: "Postman",
    icon: SiPostman,
  },
];

/* ================================================= */
/* =============== INTERACTIVE HEADING ============== */
/* ================================================= */

function InteractiveHeading() {
  const headingRef = useRef(null);
  const orangeTextRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    const orangeText = orangeTextRef.current;

    if (!heading || !orangeText) {
      return;
    }

    /* ================================================= */
    /* ================= GET LETTERS ==================== */
    /* ================================================= */

    const blackLetters =
      heading.querySelectorAll(
        ".tech-heading-letter",
      );

    const orangeLetters =
      orangeText.querySelectorAll(
        ".tech-heading-orange-letter",
      );

    /* ================================================= */
    /* ============= INITIAL LETTER STATE ============== */
    /* ================================================= */

    /*
      Keep the black letters below their
      final position until the heading enters
      the middle activation area.
    */

    gsap.set(blackLetters, {
      yPercent: 130,

      rotate: 10,

      opacity: 0,

      transformOrigin:
        "center bottom",
    });

    /*
      Give the orange copy the same position.

      Both copies must remain aligned for the
      cursor spotlight effect to work correctly.
    */

    gsap.set(orangeLetters, {
      yPercent: 130,

      rotate: 10,

      transformOrigin:
        "center bottom",
    });

    /* ================================================= */
    /* ============ VIEWPORT ENTRY ANIMATION ========== */
    /* ================================================= */

    /*
      The observer area is reduced from the
      top and bottom.

      Therefore, the animation does not start
      when the Skills section merely touches
      the bottom of the viewport.

      It starts only when TECH STACK enters
      the middle portion of the screen.
    */

    const headingObserver =
      new IntersectionObserver(
        ([entry]) => {
          if (
            !entry.isIntersecting
          ) {
            return;
          }

          /* ============================================= */
          /* ========== BLACK LETTER ANIMATION ========== */
          /* ============================================= */

          gsap.to(blackLetters, {
            yPercent: 0,

            rotate: 0,

            opacity: 1,

            duration: 1.15,

            stagger: 0.055,

            ease: "power4.out",

            overwrite: true,
          });

          /* ============================================= */
          /* ========== ORANGE LETTER ANIMATION ========== */
          /* ============================================= */

          /*
            Animate the orange letters using
            exactly the same timing.

            This keeps the orange spotlight
            aligned with the black heading.
          */

          gsap.to(orangeLetters, {
            yPercent: 0,

            rotate: 0,

            duration: 1.15,

            stagger: 0.055,

            ease: "power4.out",

            overwrite: true,
          });

          /*
            The entrance animation should
            happen only once.
          */

          headingObserver.unobserve(
            heading,
          );
        },

        {
          /*
            The bottom 30% of the viewport
            cannot activate the animation.

            The top 20% is also ignored.

            This creates a controlled middle
            activation area.
          */

          rootMargin:
            "-20% 0px -30% 0px",

          /*
            Start when the heading touches
            the new activation area.
          */

          threshold: 0,
        },
      );

    headingObserver.observe(
      heading,
    );

    /* ================================================= */
    /* ============= CURSOR SPOTLIGHT DATA ============= */
    /* ================================================= */

    const spotlightPosition = {
      x:
        heading.offsetWidth /
        2,

      y:
        heading.offsetHeight /
        2,
    };

    /* ================================================= */
    /* ============= UPDATE ORANGE SPOTLIGHT =========== */
    /* ================================================= */

    const updateSpotlight = () => {
      const spotlightMask = `
        radial-gradient(
          circle 150px
          at ${spotlightPosition.x}px ${spotlightPosition.y}px,
          #000 0%,
          #000 45%,
          transparent 75%
        )
      `;

      orangeText.style.webkitMaskImage =
        spotlightMask;

      orangeText.style.maskImage =
        spotlightMask;

      orangeText.style.webkitMaskRepeat =
        "no-repeat";

      orangeText.style.maskRepeat =
        "no-repeat";
    };

    /* ================================================= */
    /* =================== MOUSE ENTER ================== */
    /* ================================================= */

    const handleMouseEnter = (
      event,
    ) => {
      const headingPosition =
        heading.getBoundingClientRect();

      spotlightPosition.x =
        event.clientX -
        headingPosition.left;

      spotlightPosition.y =
        event.clientY -
        headingPosition.top;

      updateSpotlight();

      gsap.to(
        orangeText,
        {
          opacity: 1,

          duration: 0.25,

          ease: "power2.out",

          overwrite: true,
        },
      );
    };

    /* ================================================= */
    /* =================== MOUSE MOVE =================== */
    /* ================================================= */

    const handleMouseMove = (
      event,
    ) => {
      const headingPosition =
        heading.getBoundingClientRect();

      const cursorX =
        event.clientX -
        headingPosition.left;

      const cursorY =
        event.clientY -
        headingPosition.top;

      gsap.to(
        spotlightPosition,
        {
          x: cursorX,

          y: cursorY,

          duration: 0.35,

          ease: "power3.out",

          overwrite: true,

          onUpdate:
            updateSpotlight,
        },
      );
    };

    /* ================================================= */
    /* =================== MOUSE LEAVE ================== */
    /* ================================================= */

    const handleMouseLeave =
      () => {
        gsap.to(
          orangeText,
          {
            opacity: 0,

            duration: 0.45,

            ease: "power2.out",

            overwrite: true,
          },
        );
      };

    /* ================================================= */
    /* ================= EVENT LISTENERS =============== */
    /* ================================================= */

    heading.addEventListener(
      "mouseenter",
      handleMouseEnter,
    );

    heading.addEventListener(
      "mousemove",
      handleMouseMove,
    );

    heading.addEventListener(
      "mouseleave",
      handleMouseLeave,
    );

    /*
      Create the spotlight mask before
      the first cursor movement.
    */

    updateSpotlight();

    /* ================================================= */
    /* ===================== CLEANUP ==================== */
    /* ================================================= */

    return () => {
      headingObserver.disconnect();

      heading.removeEventListener(
        "mouseenter",
        handleMouseEnter,
      );

      heading.removeEventListener(
        "mousemove",
        handleMouseMove,
      );

      heading.removeEventListener(
        "mouseleave",
        handleMouseLeave,
      );

      gsap.killTweensOf(
        blackLetters,
      );

      gsap.killTweensOf(
        orangeLetters,
      );

      gsap.killTweensOf(
        spotlightPosition,
      );

      gsap.killTweensOf(
        orangeText,
      );
    };
  }, []);

  /* ================================================= */
  /* ================= HEADING LETTERS =============== */
  /* ================================================= */

  const headingLetters =
    "TECH STACK".split("");

  return (
    <div
      ref={headingRef}
      className="
        relative

        cursor-crosshair

        overflow-hidden

        py-10

        md:py-14
      "
    >
      <div
        className="
          relative

          overflow-hidden

          py-2
        "
      >
        {/* ============================================= */}
        {/* =============== BLACK HEADING ============== */}
        {/* ============================================= */}

        <h2
          aria-label="Tech Stack"
          className="
            flex

            select-none

            items-center

            justify-center

            whitespace-nowrap

            text-center

            font-bebas

            text-[21vw]

            leading-[0.75]

            font-black

            tracking-[-0.02em]

            text-black

            uppercase

            sm:text-[18vw]

            md:text-[14vw]

            lg:text-[12.5vw]
          "
        >
          {headingLetters.map(
            (
              letter,
              index,
            ) => (
              <span
                key={`${letter}-${index}`}
                aria-hidden="true"
                className="
                  tech-heading-letter

                  inline-block

                  will-change-transform
                "
              >
                {letter === " "
                  ? "\u00A0"
                  : letter}
              </span>
            ),
          )}
        </h2>

        {/* ============================================= */}
        {/* ============== ORANGE HEADING ============== */}
        {/* ============================================= */}

        <h2
          ref={orangeTextRef}
          aria-hidden="true"
          className="
            pointer-events-none

            absolute

            inset-0

            flex

            select-none

            items-center

            justify-center

            whitespace-nowrap

            text-center

            font-bebas

            text-[21vw]

            leading-[0.75]

            font-black

            tracking-[-0.02em]

            text-orange-500

            uppercase

            opacity-0

            sm:text-[18vw]

            md:text-[14vw]

            lg:text-[12.5vw]
          "
        >
          {headingLetters.map(
            (
              letter,
              index,
            ) => (
              <span
                key={`orange-${letter}-${index}`}
                className="
                  tech-heading-orange-letter

                  inline-block

                  will-change-transform
                "
              >
                {letter === " "
                  ? "\u00A0"
                  : letter}
              </span>
            ),
          )}
        </h2>
      </div>
    </div>
  );
}

/* ================================================= */
/* ================= TECHNOLOGY ITEM ================ */
/* ================================================= */

function Technology({
  name,

  icon: Icon,

  onTechnologyEnter,

  onTechnologyLeave,
}) {
  const iconRef =
    useRef(null);

  const nameRef =
    useRef(null);

  /* ================================================= */
  /* =================== MOUSE ENTER ================== */
  /* ================================================= */

  const handleMouseEnter = (
    event,
  ) => {
    /*
      Move the shared black selection box
      to the selected technology.
    */

    onTechnologyEnter(
      event.currentTarget,
    );

    /*
      Stop previous icon and name animations.
    */

    gsap.killTweensOf([
      iconRef.current,

      nameRef.current,
    ]);

    /*
      Animate the selected technology icon.
    */

    gsap.to(
      iconRef.current,
      {
        color: "#F8F4EE",

        scale: 1.15,

        rotation: -5,

        y: -5,

        duration: 0.45,

        ease:
          "back.out(1.8)",

        overwrite: true,
      },
    );

    /*
      Reveal the technology name.
    */

    gsap.to(
      nameRef.current,
      {
        color: "#F8F4EE",

        opacity: 1,

        y: 0,

        duration: 0.35,

        ease:
          "power3.out",

        overwrite: true,
      },
    );
  };

  /* ================================================= */
  /* =================== MOUSE LEAVE ================== */
  /* ================================================= */

  const handleMouseLeave =
    () => {
      /*
        Restore the technology icon.
      */

      gsap.to(
        iconRef.current,
        {
          color: "#000000",

          scale: 1,

          rotation: 0,

          y: 0,

          duration: 0.4,

          ease:
            "power3.out",

          overwrite: true,
        },
      );

      /*
        Hide the technology name.
      */

      gsap.to(
        nameRef.current,
        {
          color: "#000000",

          opacity: 0,

          y: 7,

          duration: 0.25,

          ease:
            "power2.out",

          overwrite: true,
        },
      );

      /*
        Tell the grid that the cursor
        left the technology.
      */

      onTechnologyLeave();
    };

  return (
    <div
      onMouseEnter={
        handleMouseEnter
      }
      onMouseLeave={
        handleMouseLeave
      }
      className="
        relative

        z-10

        grid

        min-h-[105px]

        cursor-pointer

        place-content-center

        overflow-hidden

        p-5

        md:min-h-[145px]

        md:p-10
      "
    >
      {/* Technology icon */}

      <Icon
        ref={iconRef}
        className="
          relative

          z-30

          mx-auto

          text-5xl

          md:text-6xl
        "
      />

      {/* Technology name */}

      <p
        ref={nameRef}
        className="
          pointer-events-none

          absolute

          right-0

          bottom-2

          left-0

          z-30

          translate-y-[7px]

          text-center

          font-inter

          text-[8px]

          font-bold

          tracking-[0.15em]

          uppercase

          opacity-0

          md:bottom-3

          md:text-[10px]
        "
      >
        {name}
      </p>
    </div>
  );
}

/* ================================================= */
/* ================= TECHNOLOGY GRID ================ */
/* ================================================= */

function TechnologyGrid() {
  const gridRef =
    useRef(null);

  /*
    The shared moving black box.
  */

  const movingBoxRef =
    useRef(null);

  /*
    Timer used before hiding
    the selection box.
  */

  const hideTimerRef =
    useRef(null);

  /*
    Remember whether the black
    selection box is visible.
  */

  const boxVisibleRef =
    useRef(false);

  /* ================================================= */
  /* =============== MOVE SELECTION BOX ============== */
  /* ================================================= */

  const moveSelectionBox = (
    technologyElement,
  ) => {
    const grid =
      gridRef.current;

    const movingBox =
      movingBoxRef.current;

    if (
      !grid ||
      !movingBox ||
      !technologyElement
    ) {
      return;
    }

    /*
      Cancel any pending hide animation.
    */

    if (
      hideTimerRef.current
    ) {
      clearTimeout(
        hideTimerRef.current,
      );

      hideTimerRef.current =
        null;
    }

    /*
      Find the position of the grid
      and selected technology.
    */

    const gridPosition =
      grid.getBoundingClientRect();

    const technologyPosition =
      technologyElement.getBoundingClientRect();

    /*
      Calculate the technology position
      relative to the grid.
    */

    const targetX =
      technologyPosition.left -
      gridPosition.left;

    const targetY =
      technologyPosition.top -
      gridPosition.top;

    /*
      On the first hover, place the box
      directly under the selected technology.
    */

    if (
      !boxVisibleRef.current
    ) {
      boxVisibleRef.current =
        true;

      gsap.set(
        movingBox,
        {
          x: targetX,

          y: targetY,

          width:
            technologyPosition.width,

          height:
            technologyPosition.height,

          scale: 0.9,

          opacity: 0,
        },
      );

      gsap.to(
        movingBox,
        {
          scale: 1,

          opacity: 1,

          duration: 0.4,

          ease:
            "back.out(1.4)",

          overwrite: true,
        },
      );

      return;
    }

    /*
      Smoothly move the existing black
      box to the next technology.
    */

    gsap.to(
      movingBox,
      {
        x: targetX,

        y: targetY,

        width:
          technologyPosition.width,

        height:
          technologyPosition.height,

        scale: 1,

        opacity: 1,

        duration: 0.65,

        ease:
          "power4.out",

        overwrite: true,
      },
    );
  };

  /* ================================================= */
  /* =============== DELAYED BOX HIDE ================ */
  /* ================================================= */

  const hideSelectionBox =
    () => {
      /*
        Wait briefly before hiding.

        If another technology is entered
        during this delay, the timer is
        cancelled and the same box moves
        to the next technology.
      */

      hideTimerRef.current =
        setTimeout(() => {
          const movingBox =
            movingBoxRef.current;

          if (!movingBox) {
            return;
          }

          gsap.to(
            movingBox,
            {
              opacity: 0,

              scale: 0.94,

              duration: 0.35,

              ease:
                "power3.out",

              overwrite: true,

              onComplete:
                () => {
                  boxVisibleRef.current =
                    false;
                },
            },
          );
        }, 100);
    };

  /* ================================================= */
  /* ===================== CLEANUP ==================== */
  /* ================================================= */

  useEffect(() => {
    return () => {
      if (
        hideTimerRef.current
      ) {
        clearTimeout(
          hideTimerRef.current,
        );
      }

      gsap.killTweensOf(
        movingBoxRef.current,
      );
    };
  }, []);

  return (
    <div
      ref={gridRef}
      className="
        relative

        mt-10

        grid

        grid-cols-3

        md:mt-14

        md:grid-cols-5
      "
    >
      {/* ================================================= */}
      {/* ============== MOVING BLACK BOX ================== */}
      {/* ================================================= */}

      <div
        ref={movingBoxRef}
        className="
          pointer-events-none

          absolute

          top-0

          left-0

          z-[5]

          bg-black

          opacity-0

          shadow-[6px_6px_0px_#f97316]

          will-change-transform
        "
      />

      {/* ================================================= */}
      {/* ============== VERTICAL SEPARATORS ============== */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none

          absolute

          top-0

          left-1/3

          z-20

          h-full

          w-px

          -translate-x-1/2

          bg-[linear-gradient(to_bottom,transparent_0%,#d1d5db_5%,#d1d5db_95%,transparent_100%)]

          md:left-[20%]
        "
      />

      <div
        className="
          pointer-events-none

          absolute

          top-0

          left-2/3

          z-20

          h-full

          w-px

          -translate-x-1/2

          bg-[linear-gradient(to_bottom,transparent_0%,#d1d5db_5%,#d1d5db_95%,transparent_100%)]

          md:left-[40%]
        "
      />

      <div
        className="
          pointer-events-none

          absolute

          top-0

          left-[60%]

          z-20

          hidden

          h-full

          w-px

          -translate-x-1/2

          bg-[linear-gradient(to_bottom,transparent_0%,#d1d5db_5%,#d1d5db_95%,transparent_100%)]

          md:block
        "
      />

      <div
        className="
          pointer-events-none

          absolute

          top-0

          left-[80%]

          z-20

          hidden

          h-full

          w-px

          -translate-x-1/2

          bg-[linear-gradient(to_bottom,transparent_0%,#d1d5db_5%,#d1d5db_95%,transparent_100%)]

          md:block
        "
      />

      {/* ================================================= */}
      {/* ============= HORIZONTAL SEPARATORS ============= */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none

          absolute

          top-[20%]

          left-0

          z-20

          h-px

          w-full

          -translate-y-1/2

          bg-[linear-gradient(to_right,transparent_0%,#d1d5db_5%,#d1d5db_95%,transparent_100%)]

          md:top-[33.333%]
        "
      />

      <div
        className="
          pointer-events-none

          absolute

          top-[40%]

          left-0

          z-20

          h-px

          w-full

          -translate-y-1/2

          bg-[linear-gradient(to_right,transparent_0%,#d1d5db_5%,#d1d5db_95%,transparent_100%)]

          md:top-[66.666%]
        "
      />

      <div
        className="
          pointer-events-none

          absolute

          top-[60%]

          left-0

          z-20

          h-px

          w-full

          -translate-y-1/2

          bg-[linear-gradient(to_right,transparent_0%,#d1d5db_5%,#d1d5db_95%,transparent_100%)]

          md:hidden
        "
      />

      <div
        className="
          pointer-events-none

          absolute

          top-[80%]

          left-0

          z-20

          h-px

          w-full

          -translate-y-1/2

          bg-[linear-gradient(to_right,transparent_0%,#d1d5db_5%,#d1d5db_95%,transparent_100%)]

          md:hidden
        "
      />

      {/* ================================================= */}
      {/* ================= TECHNOLOGIES =================== */}
      {/* ================================================= */}

      {technologies.map(
        (technology) => (
          <Technology
            key={
              technology.name
            }
            name={
              technology.name
            }
            icon={
              technology.icon
            }
            onTechnologyEnter={
              moveSelectionBox
            }
            onTechnologyLeave={
              hideSelectionBox
            }
          />
        ),
      )}
    </div>
  );
}

/* ================================================= */
/* ==================== TECH STACK ================== */
/* ================================================= */

function TechStack() {
  return (
    <section
      id="skills"
      className="
        scroll-mt-20

        overflow-hidden

        border-y-2

        border-black

        bg-[#F8F4EE]

        px-5

        py-16

        md:px-10

        md:py-20
      "
    >
      <div className="mx-auto max-w-[1800px]">

        {/* ================================================= */}
        {/* ================= TOP INFORMATION =============== */}
        {/* ================================================= */}

        <div
          className="
            flex

            items-center

            justify-between

            border-b-2

            border-black

            pb-3
          "
        >
          <div
            className="
              flex

              items-center

              gap-3
            "
          >
            {/* Rotating orange symbol */}

            <span
              className="
                inline-block

                animate-[spin_10s_linear_infinite]

                text-lg

                leading-none

                text-orange-500

                md:text-2xl
              "
            >
              ✦
            </span>

            <p
              className="
                font-inter

                text-[9px]

                font-bold

                tracking-[0.22em]

                uppercase

                md:text-xs
              "
            >
              Tools behind the work
            </p>
          </div>
        </div>

        {/* ================================================= */}
        {/* ============== INTERACTIVE HEADING ============== */}
        {/* ================================================= */}

        <InteractiveHeading />

        {/* ================================================= */}
        {/* ================= BOTTOM DETAILS ================= */}
        {/* ================================================= */}

        <div
          className="
            flex

            items-center

            justify-between

            gap-5

            border-y-2

            border-black

            py-4
          "
        >
          <p
            className="
              font-inter

              text-[8px]

              font-bold

              tracking-[0.16em]

              uppercase

              md:text-[10px]

              md:tracking-[0.2em]
            "
          >
            Move your cursor across the type
          </p>

          <div
            className="
              hidden

              h-[2px]

              flex-1

              bg-black

              sm:block
            "
          />
        </div>

        {/* ================================================= */}
        {/* ================= TECHNOLOGY GRID ================ */}
        {/* ================================================= */}

        <TechnologyGrid />
      </div>
    </section>
  );
}

export default TechStack;