import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

import { FaAsterisk } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

/* ================================================= */
/* ================= LOADER ========================= */
/* ================================================= */

function Loader({ onComplete }) {
  const loaderRef = useRef(null);
  const cardRef = useRef(null);
  const percentageRef = useRef(null);
  const progressRef = useRef(null);

  const [loadingText, setLoadingText] = useState(
    "Building the experience",
  );

  useLayoutEffect(() => {
    /*
      This object stores the percentage value.

      GSAP changes this value from 0 to 100.
    */

    const counter = {
      value: 0,
    };

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      /* ================================================= */
      /* ================= INITIAL STATE ================== */
      /* ================================================= */

      gsap.set(".loader-header-item", {
        y: -30,
        opacity: 0,
      });

      gsap.set(".loader-decoration", {
        scale: 0,
        rotate: -90,
      });

      gsap.set(".loader-main-card", {
        scale: 0.85,
        rotate: -3,
        opacity: 0,
      });

      gsap.set(".loader-small-text", {
        y: 25,
        opacity: 0,
      });

      gsap.set(".loader-word", {
        y: 35,
        opacity: 0,
      });

      gsap.set(progressRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      /* ================================================= */
      /* ================= ENTRANCE ======================= */
      /* ================================================= */

      timeline

        /* Header enters */

        .to(".loader-header-item", {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.1,
        })

        /* Decorative shapes appear */

        .to(
          ".loader-decoration",
          {
            scale: 1,
            rotate: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: "back.out(1.8)",
          },
          "-=0.4",
        )

        /* Main card enters */

        .to(
          ".loader-main-card",
          {
            scale: 1,
            rotate: 0,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.25)",
          },
          "-=0.35",
        )

        /* Small text enters */

        .to(
          ".loader-small-text",
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
          },
          "-=0.4",
        )

        /* Bottom words enter */

        .to(
          ".loader-word",
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
          },
          "-=0.3",
        );

      /* ================================================= */
      /* ================= LOADING ANIMATION ============== */
      /* ================================================= */

      timeline.to(
        counter,
        {
          value: 100,

          duration: 1.8,

          ease: "power2.inOut",

          onUpdate: () => {
            const currentValue = Math.round(
              counter.value,
            );

            /*
              Update the number without causing
              React to render on every animation frame.
            */

            if (percentageRef.current) {
              percentageRef.current.textContent =
                currentValue
                  .toString()
                  .padStart(2, "0");
            }

            /*
              Change the status near the end.
            */

            if (currentValue >= 92) {
              setLoadingText(
                "Experience ready",
              );
            }
          },
        },
        "-=0.2",
      );

      /* Animate progress bar */

      timeline.to(
        progressRef.current,
        {
          scaleX: 1,

          duration: 1.8,

          ease: "power2.inOut",
        },
        "<",
      );

      /* ================================================= */
      /* ================= COMPLETION ===================== */
      /* ================================================= */

      timeline

        /*
          Make the percentage briefly expand
          after reaching 100%.
        */

        .to(
          ".loader-percentage",
          {
            scale: 1.08,

            duration: 0.18,

            ease: "power2.out",
          },
        )

        .to(
          ".loader-percentage",
          {
            scale: 1,

            duration: 0.25,

            ease: "back.out(2)",
          },
        )

        /*
          Make the main card react
          like a physical neo-brutalist object.
        */

        .to(
          cardRef.current,
          {
            x: -5,

            y: -5,

            boxShadow:
              "14px 14px 0px #000",

            duration: 0.2,
          },
        )

        .to(
          cardRef.current,
          {
            x: 0,

            y: 0,

            boxShadow:
              "8px 8px 0px #000",

            duration: 0.25,

            ease: "back.out(2)",
          },
        )

        /* Small pause before revealing the website */

        .to({}, {
          duration: 0.35,
        })

        /* ================================================= */
        /* ================= EXIT =========================== */
        /* ================================================= */

        /*
          Card moves toward the viewer.
        */

        .to(
          ".loader-main-card",
          {
            scale: 1.08,

            rotate: 2,

            duration: 0.45,

            ease: "power3.in",
          },
        )

        /*
          Everything inside disappears.
        */

        .to(
          ".loader-content",
          {
            opacity: 0,

            scale: 0.9,

            duration: 0.3,
          },
          "-=0.2",
        )

        /*
          The orange transition block grows
          until it covers the screen.
        */

        .to(
          ".loader-transition-block",
          {
            scale: 25,

            rotate: 45,

            duration: 0.75,

            ease: "power4.inOut",
          },
        )

        /*
          Remove the loader from the screen.
        */

        .to(loaderRef.current, {
          yPercent: -100,

          duration: 0.8,

          ease: "power4.inOut",

          onComplete: () => {
            if (onComplete) {
              onComplete();
            }
          },
        });
    }, loaderRef);

    /*
      Prevent scrolling while loader is visible.
    */

    document.body.style.overflow = "hidden";

    return () => {
      context.revert();

      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="
        fixed
        inset-0
        z-[9999]

        flex
        min-h-screen
        items-center
        justify-center

        overflow-hidden

        bg-[#F8F4EE]

        px-5
        py-6

        md:px-10
      "
    >
      {/* ================================================= */}
      {/* ================= BACKGROUND GRID ================ */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          opacity-[0.07]

          [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]

          [background-size:40px_40px]
        "
      />

      {/* ================================================= */}
      {/* ================= DECORATIVE SHAPES ============== */}
      {/* ================================================= */}

      {/* Orange square */}

      <div
        className="
          loader-decoration

          absolute
          top-[12%]
          left-[8%]

          hidden

          h-20
          w-20

          rotate-6

          border-2
          border-black

          bg-orange-400

          shadow-[6px_6px_0px_#000]

          md:block
        "
      />

      {/* Black circle */}

      <div
        className="
          loader-decoration

          absolute
          top-[15%]
          right-[10%]

          hidden

          h-16
          w-16

          rounded-full

          border-2
          border-black

          bg-black

          md:block
        "
      />

      {/* Bottom symbol */}

      <FaAsterisk
        className="
          loader-decoration

          absolute
          right-[10%]
          bottom-[12%]

          hidden

          text-6xl

          text-orange-400

          md:block
        "
      />

      {/* Bottom outlined square */}

      <div
        className="
          loader-decoration

          absolute
          bottom-[12%]
          left-[9%]

          hidden

          h-16
          w-16

          -rotate-6

          border-4
          border-black

          bg-transparent

          md:block
        "
      />

      {/* ================================================= */}
      {/* ================= MAIN WRAPPER =================== */}
      {/* ================================================= */}

      <div
        className="
          loader-content

          relative
          z-10

          w-full

          max-w-5xl
        "
      >
        {/* ================================================= */}
        {/* ================= TOP HEADER ==================== */}
        {/* ================================================= */}

        <div
          className="
            flex

            items-center

            justify-between

            border-y-2

            border-black

            py-4
          "
        >
          <p
            className="
              loader-header-item

              font-inter

              text-[9px]

              font-black

              tracking-[0.2em]

              uppercase

              md:text-xs
            "
          >
            Portfolio System
          </p>

          <div
            className="
              loader-header-item

              flex

              items-center

              gap-3
            "
          >
            <span
              className="
                h-3

                w-3

                animate-pulse

                rounded-full

                bg-orange-400
              "
            />

            <p
              className="
                font-inter

                text-[9px]

                font-black

                tracking-[0.2em]

                uppercase

                md:text-xs
              "
            >
              Initializing
            </p>
          </div>

          <p
            className="
              loader-header-item

              font-inter

              text-[9px]

              font-black

              tracking-[0.2em]

              md:text-xs
            "
          >
            2026
          </p>
        </div>

        {/* ================================================= */}
        {/* ================= MAIN CARD ===================== */}
        {/* ================================================= */}

        <div
          ref={cardRef}
          className="
            loader-main-card

            relative

            mt-10

            overflow-hidden

            border-2

            border-black

            bg-[#F8F4EE]

            p-5

            shadow-[8px_8px_0px_#000]

            md:mt-12

            md:p-10
          "
        >
          {/* Orange corner */}

          <div
            className="
              absolute

              top-0

              right-0

              h-5

              w-24

              border-b-2

              border-l-2

              border-black

              bg-orange-400

              md:h-7

              md:w-40
            "
          />

          {/* Main percentage */}

          <div
            className="
              flex

              items-end

              justify-center
            "
          >
            <div
              className="
                loader-percentage

                flex

                items-start

                font-bebas

                leading-[0.7]

                font-black
              "
            >
              <span
                ref={percentageRef}
                className="
                  text-[42vw]

                  tracking-[-0.04em]

                  sm:text-[30vw]

                  lg:text-[20vw]
                "
              >
                00
              </span>

              <span
                className="
                  ml-2

                  font-inter

                  text-2xl

                  font-black

                  text-orange-400

                  md:text-5xl
                "
              >
                %
              </span>
            </div>
          </div>

          {/* Loading status */}

          <div
            className="
              loader-small-text

              mt-7

              flex

              items-center

              justify-between

              gap-5
            "
          >
            <p
              className="
                font-inter

                text-[9px]

                font-black

                tracking-[0.2em]

                uppercase

                md:text-xs
              "
            >
              {loadingText}
            </p>

            <GoArrowUpRight
              className="
                shrink-0

                text-2xl
              "
            />
          </div>

          {/* Progress bar */}

          <div
            className="
              mt-5

              h-5

              overflow-hidden

              border-2

              border-black

              bg-[#F8F4EE]

              md:h-7
            "
          >
            <div
              ref={progressRef}
              className="
                h-full

                w-full

                origin-left

                bg-orange-400
              "
            />
          </div>
        </div>

        {/* ================================================= */}
        {/* ================= BOTTOM WORDS ================== */}
        {/* ================================================= */}

        <div
          className="
            mt-10

            grid

            grid-cols-2

            border-2

            border-black

            bg-[#F8F4EE]

            md:grid-cols-4
          "
        >
          {[
            "Design",
            "Code",
            "Create",
            "Build",
          ].map(
            (
              word,
              index,
            ) => (
              <div
                key={word}
                className={`
                  loader-word

                  flex

                  items-center

                  justify-between

                  gap-3

                  px-4

                  py-4

                  ${
                    index !== 3
                      ? "md:border-r-2 md:border-black"
                      : ""
                  }

                  ${
                    index < 2
                      ? "border-b-2 border-black md:border-b-0"
                      : ""
                  }

                  ${
                    index % 2 === 0
                      ? "border-r-2 border-black md:border-r-2"
                      : ""
                  }
                `}
              >
                <p
                  className="
                    font-inter

                    text-[9px]

                    font-black

                    tracking-[0.18em]

                    uppercase

                    md:text-xs
                  "
                >
                  {word}
                </p>

                <span
                  className="
                    text-orange-400
                  "
                >
                  {index === 0
                    ? "✦"
                    : index === 1
                      ? "●"
                      : index === 2
                        ? "◆"
                        : "↗"}
                </span>
              </div>
            ),
          )}
        </div>
      </div>

      {/* ================================================= */}
      {/* ================= EXIT SHAPE ===================== */}
      {/* ================================================= */}

      <div
        className="
          loader-transition-block

          pointer-events-none

          absolute

          top-1/2

          left-1/2

          z-50

          h-20

          w-20

          -translate-x-1/2

          -translate-y-1/2

          scale-0

          border-2

          border-black

          bg-orange-400
        "
      />
    </div>
  );
}

export default Loader;