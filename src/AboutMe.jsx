import {
  useLayoutEffect,
  useRef,
} from "react";

import gsap from "gsap";

import { FaAsterisk } from "react-icons/fa";

import { GoArrowUpRight } from "react-icons/go";

/* ================================================= */
/* ==================== ABOUT ME ==================== */
/* ================================================= */

function AboutMe() {
  /* ================================================= */
  /* ================= REFERENCES ===================== */
  /* ================================================= */

  const sectionRef = useRef(null);

  const contentRef = useRef(null);

  const leftContentRef = useRef(null);

  const cardWrapperRef = useRef(null);

  const cardRef = useRef(null);

  const orangeShapeRef = useRef(null);

  /* ================================================= */
  /* ============== ENTRANCE ANIMATION =============== */
  /* ================================================= */

  useLayoutEffect(() => {
    /*
      Store the current elements so that
      cleanup remains safe if the component
      is removed from the page.
    */

    const section =
      sectionRef.current;

    const content =
      contentRef.current;

    if (
      !section ||
      !content
    ) {
      return;
    }

    /*
      gsap.context keeps all GSAP animations
      scoped inside the About section.

      context.revert() automatically restores
      the elements during cleanup.
    */

    const context =
      gsap.context(() => {
        /* ============================================= */
        /* ============== GET ELEMENTS ================= */
        /* ============================================= */

        const topDetails =
          section.querySelector(
            ".about-top-details",
          );

        const smallHeading =
          section.querySelector(
            ".about-small-heading",
          );

        const statementLines =
          section.querySelectorAll(
            ".about-statement-line",
          );

        const decorativeLine =
          section.querySelector(
            ".about-decorative-line",
          );

        const decorativeArrow =
          section.querySelector(
            ".about-decorative-arrow",
          );

        const improvingText =
          section.querySelector(
            ".about-improving-text",
          );

        const portrait =
          section.querySelector(
            ".about-portrait",
          );

        const imageLabel =
          section.querySelector(
            ".about-image-label",
          );

        const developerInformation =
          section.querySelector(
            ".about-developer-information",
          );

        const informationRows =
          section.querySelectorAll(
            ".about-information-row",
          );

        const descriptionParagraphs =
          section.querySelectorAll(
            ".about-description",
          );

        const signature =
          section.querySelector(
            ".about-signature",
          );

        const bottomDecoration =
          section.querySelector(
            ".about-bottom-decoration",
          );

        /* ============================================= */
        /* ============== INITIAL STATES =============== */
        /* ============================================= */

        /*
          Hide the top section information.
        */

        gsap.set(
          topDetails,
          {
            y: -25,

            opacity: 0,
          },
        );

        /*
          Hide the small orange heading.
        */

        gsap.set(
          smallHeading,
          {
            x: -35,

            opacity: 0,
          },
        );

        /*
          Every statement line starts below
          its final position.

          The parent around every line uses
          overflow-hidden to create a clean
          typography reveal.
        */

        gsap.set(
          statementLines,
          {
            yPercent: 120,

            rotate: 4,

            opacity: 0,

            transformOrigin:
              "left bottom",
          },
        );

        /*
          Hide the decorative line,
          arrow, and supporting text.
        */

        gsap.set(
          decorativeLine,
          {
            scaleX: 0,

            transformOrigin:
              "left center",
          },
        );

        gsap.set(
          decorativeArrow,
          {
            x: -20,

            y: 20,

            rotate: -30,

            opacity: 0,
          },
        );

        gsap.set(
          improvingText,
          {
            x: -20,

            opacity: 0,
          },
        );

        /*
          Hide the orange decorative block.
        */

        gsap.set(
          orangeShapeRef.current,
          {
            scale: 0.5,

            rotate: -20,

            opacity: 0,

            transformOrigin:
              "center center",
          },
        );

        /*
          Keep the complete profile card
          slightly below its final position.
        */

        gsap.set(
          cardWrapperRef.current,
          {
            y: 90,

            opacity: 0,
          },
        );

        gsap.set(
          cardRef.current,
          {
            rotate: 1.5,

            scale: 0.96,

            transformOrigin:
              "center bottom",
          },
        );

        /*
          Hide the content inside the card.
        */

        gsap.set(
          portrait,
          {
            y: 45,

            scale: 0.94,

            opacity: 0,
          },
        );

        gsap.set(
          imageLabel,
          {
            x: 30,

            y: 20,

            scale: 0.8,

            opacity: 0,
          },
        );

        gsap.set(
          developerInformation,
          {
            x: 40,

            opacity: 0,
          },
        );

        gsap.set(
          informationRows,
          {
            x: 30,

            opacity: 0,
          },
        );

        gsap.set(
          descriptionParagraphs,
          {
            y: 25,

            opacity: 0,
          },
        );

        gsap.set(
          signature,
          {
            y: 25,

            opacity: 0,
          },
        );

        /*
          Hide the bottom decoration.
        */

        gsap.set(
          bottomDecoration,
          {
            y: 30,

            opacity: 0,
          },
        );

        /* ============================================= */
        /* ============ ANIMATION TIMELINE ============= */
        /* ============================================= */

        const timeline =
          gsap.timeline({
            paused: true,

            defaults: {
              ease:
                "power4.out",
            },
          });

        timeline

          /*
            Reveal the section information.
          */

          .to(
            topDetails,
            {
              y: 0,

              opacity: 1,

              duration: 0.65,
            },
          )

          /*
            Reveal the small orange heading.
          */

          .to(
            smallHeading,
            {
              x: 0,

              opacity: 1,

              duration: 0.65,
            },

            "-=0.4",
          )

          /*
            Reveal BUILD, LEARN, GROW,
            and REPEAT one after another.
          */

          .to(
            statementLines,
            {
              yPercent: 0,

              rotate: 0,

              opacity: 1,

              duration: 1,

              stagger: 0.11,

              ease:
                "power4.out",
            },

            "-=0.3",
          )

          /*
            Draw the black line.
          */

          .to(
            decorativeLine,
            {
              scaleX: 1,

              duration: 0.75,
            },

            "-=0.55",
          )

          /*
            Reveal the arrow.
          */

          .to(
            decorativeArrow,
            {
              x: 0,

              y: 0,

              rotate: 0,

              opacity: 1,

              duration: 0.65,

              ease:
                "back.out(1.7)",
            },

            "-=0.5",
          )

          /*
            Reveal the supporting text.
          */

          .to(
            improvingText,
            {
              x: 0,

              opacity: 1,

              duration: 0.55,
            },

            "-=0.45",
          )

          /*
            Reveal the orange decorative
            block behind the profile card.
          */

          .to(
            orangeShapeRef.current,
            {
              scale: 1,

              rotate: 6,

              opacity: 1,

              duration: 0.8,

              ease:
                "back.out(1.5)",
            },

            "-=1.15",
          )

          /*
            Move the complete profile card
            upward into its final position.
          */

          .to(
            cardWrapperRef.current,
            {
              y: 0,

              opacity: 1,

              duration: 1,

              ease:
                "power4.out",
            },

            "-=0.8",
          )

          /*
            Settle the card into position.
          */

          .to(
            cardRef.current,
            {
              rotate: 0,

              scale: 1,

              duration: 0.9,

              ease:
                "power4.out",
            },

            "<",
          )

          /*
            Reveal the portrait.
          */

          .to(
            portrait,
            {
              y: 0,

              scale: 1,

              opacity: 1,

              duration: 0.8,
            },

            "-=0.65",
          )

          /*
            Reveal the orange image label.
          */

          .to(
            imageLabel,
            {
              x: 0,

              y: 0,

              scale: 1,

              opacity: 1,

              duration: 0.55,

              ease:
                "back.out(1.7)",
            },

            "-=0.4",
          )

          /*
            Reveal the developer details.
          */

          .to(
            developerInformation,
            {
              x: 0,

              opacity: 1,

              duration: 0.7,
            },

            "-=0.65",
          )

          /*
            Reveal the information rows.
          */

          .to(
            informationRows,
            {
              x: 0,

              opacity: 1,

              duration: 0.55,

              stagger: 0.09,
            },

            "-=0.45",
          )

          /*
            Reveal both description
            paragraphs.
          */

          .to(
            descriptionParagraphs,
            {
              y: 0,

              opacity: 1,

              duration: 0.65,

              stagger: 0.1,
            },

            "-=0.35",
          )

          /*
            Reveal the signature.
          */

          .to(
            signature,
            {
              y: 0,

              opacity: 1,

              duration: 0.7,

              ease:
                "back.out(1.3)",
            },

            "-=0.45",
          )

          /*
            Reveal the final decoration.
          */

          .to(
            bottomDecoration,
            {
              y: 0,

              opacity: 1,

              duration: 0.7,
            },

            "-=0.25",
          );

        /* ============================================= */
        /* =========== VIEWPORT OBSERVER ============== */
        /* ============================================= */

        /*
          The observer watches the main About
          content instead of the complete section.

          rootMargin removes:
          - the upper 20% of the viewport
          - the lower 30% of the viewport

          Therefore, the animation cannot start
          when the About section merely touches
          the bottom edge of the screen.
        */

        const observer =
          new IntersectionObserver(
            ([entry]) => {
              if (
                !entry.isIntersecting
              ) {
                return;
              }

              /*
                Start the complete About
                animation only once.
              */

              timeline.play();

              observer.unobserve(
                content,
              );
            },

            {
              root: null,

              rootMargin:
                "-20% 0px -30% 0px",

              threshold: 0,
            },
          );

        observer.observe(
          content,
        );

        /*
          Store the observer on the content
          element so it can be disconnected
          during cleanup.
        */

        content.aboutObserver =
          observer;
      }, section);

    /* ================================================= */
    /* ===================== CLEANUP ==================== */
    /* ================================================= */

    return () => {
      /*
        Disconnect the viewport observer.
      */

      if (
        content.aboutObserver
      ) {
        content.aboutObserver.disconnect();
      }

      /*
        Remove all animations and restore
        the original element styles.
      */

      context.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="
        relative

        scroll-mt-20

        overflow-hidden

        border-y-2

        border-black

        bg-[#F8F4EE]

        px-5

        py-16

        md:px-10

        md:py-20

        lg:min-h-screen
      "
    >
      {/* ================================================= */}
      {/* ================= TOP DETAILS ==================== */}
      {/* ================================================= */}

      <div
        className="
          about-top-details

          flex

          items-center

          justify-between
        "
      >
        {/* Section label */}

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

              text-lg

              text-orange-400
            "
          />

          <p
            className="
              font-inter

              text-sm

              font-bold

              tracking-[0.18em]

              uppercase

              md:text-base
            "
          >
            About Me
          </p>
        </div>

        {/* Section number */}

        <p
          className="
            font-inter

            text-xs

            font-bold

            tracking-[0.2em]
          "
        >
          02 / ABOUT
        </p>
      </div>

      {/* ================================================= */}
      {/* ================= MAIN LAYOUT ===================== */}
      {/* ================================================= */}

      <div
        ref={contentRef}
        className="
          mt-14

          grid

          grid-cols-1

          items-center

          gap-12

          lg:grid-cols-[0.9fr_1.1fr]

          lg:gap-5
        "
      >
        {/* ================================================= */}
        {/* =================== LEFT SIDE ==================== */}
        {/* ================================================= */}

        <div
          ref={leftContentRef}
          className="
            relative
          "
        >
          {/* Small heading */}

          <p
            className="
              about-small-heading

              mb-5

              font-inter

              text-xs

              font-bold

              tracking-[0.25em]

              text-orange-500

              uppercase
            "
          >
            How I approach my work
          </p>

          {/* ================================================= */}
          {/* ================= MAIN STATEMENT ================= */}
          {/* ================================================= */}

          <h2
            className="
              font-bebas

              text-[19vw]

              leading-[0.77]

              font-black

              tracking-tight

              uppercase

              sm:text-[15vw]

              lg:text-[8.5vw]
            "
          >
            {/* BUILD */}

            <span
              className="
                block

                overflow-hidden
              "
            >
              <span
                className="
                  about-statement-line

                  block

                  will-change-transform
                "
              >
                Build.
              </span>
            </span>

            {/* LEARN */}

            <span
              className="
                block

                overflow-hidden
              "
            >
              <span
                className="
                  about-statement-line

                  block

                  will-change-transform
                "
              >
                Learn

                <span
                  className="
                    text-orange-400
                  "
                >
                  .
                </span>
              </span>
            </span>

            {/* GROW */}

            <span
              className="
                block

                overflow-hidden
              "
            >
              <span
                className="
                  about-statement-line

                  block

                  will-change-transform
                "
              >
                Grow.
              </span>
            </span>

            {/* REPEAT */}

            <span
              className="
                block

                overflow-hidden
              "
            >
              <span
                className="
                  about-statement-line

                  block

                  will-change-transform
                "
              >
                Repeat

                <span
                  className="
                    text-orange-400
                  "
                >
                  .
                </span>
              </span>
            </span>
          </h2>

          {/* ================================================= */}
          {/* ================= DECORATIVE LINE ================ */}
          {/* ================================================= */}

          <div
            className="
              mt-10

              flex

              items-center

              gap-4
            "
          >
            <span
              className="
                about-decorative-line

                h-[3px]

                w-20

                bg-black

                md:w-36
              "
            />

            <GoArrowUpRight
              className="
                about-decorative-arrow

                shrink-0

                text-3xl
              "
            />

            <p
              className="
                about-improving-text

                font-inter

                text-[10px]

                font-bold

                tracking-[0.2em]

                uppercase
              "
            >
              Always improving
            </p>
          </div>
        </div>

        {/* ================================================= */}
        {/* ================== RIGHT SIDE ==================== */}
        {/* ================================================= */}

        <div
          ref={cardWrapperRef}
          className="
            relative

            mx-auto

            w-full

            max-w-[760px]

            lg:mr-0
          "
        >
          {/* Orange decorative shape */}

          <div
            ref={orangeShapeRef}
            className="
              absolute

              -top-4

              -right-2

              h-24

              w-24

              rotate-6

              border-2

              border-black

              bg-orange-400

              md:h-32

              md:w-32
            "
          />

          {/* ================================================= */}
          {/* ================= CONTENT CARD =================== */}
          {/* ================================================= */}

          <div
            ref={cardRef}
            className="
              relative

              border-2

              border-black

              bg-[#F8F4EE]

              p-4

              shadow-[8px_8px_0px_#000]

              md:p-5
            "
          >
            {/* ================================================= */}
            {/* ================= IMAGE + DETAILS ================= */}
            {/* ================================================= */}

            <div
              className="
                grid

                grid-cols-1

                gap-7

                md:grid-cols-[0.78fr_1fr]

                md:items-end
              "
            >
              {/* ================================================= */}
              {/* ==================== PORTRAIT ===================== */}
              {/* ================================================= */}

              <div
                className="
                  about-portrait

                  relative

                  mx-auto

                  w-full

                  max-w-[310px]

                  overflow-hidden

                  border-2

                  border-black

                  md:mx-0
                "
              >
                <img
                  src="/rough.png"
                  alt="Illustrated portrait of Aditya"
                  className="
                    aspect-[4/5]

                    h-full

                    w-full

                    object-cover

                    transition-transform

                    duration-500

                    hover:scale-105
                  "
                />

                {/* Image label */}

                <div
                  className="
                    about-image-label

                    absolute

                    right-3

                    bottom-3

                    border-2

                    border-black

                    bg-orange-400

                    px-3

                    py-2

                    font-inter

                    text-[9px]

                    font-bold

                    tracking-[0.12em]

                    uppercase
                  "
                >
                  Aditya / 2026
                </div>
              </div>

              {/* ================================================= */}
              {/* ============= DEVELOPER INFORMATION ============== */}
              {/* ================================================= */}

              <div
                className="
                  about-developer-information
                "
              >
                <p
                  className="
                    font-inter

                    text-[10px]

                    font-bold

                    tracking-[0.2em]

                    text-orange-500

                    uppercase
                  "
                >
                  Currently
                </p>

                <h3
                  className="
                    mt-3

                    font-bebas

                    text-4xl

                    leading-none

                    uppercase

                    md:text-5xl
                  "
                >
                  Full Stack

                  <span
                    className="
                      block
                    "
                  >
                    Developer
                  </span>
                </h3>

                {/* ================================================= */}
                {/* ================= INFORMATION ROWS =============== */}
                {/* ================================================= */}

                <div
                  className="
                    mt-6

                    border-t-2

                    border-black
                  "
                >
                  {/* Location */}

                  <div
                    className="
                      about-information-row

                      flex

                      items-center

                      justify-between

                      gap-4

                      border-b-2

                      border-black

                      py-3
                    "
                  >
                    <span
                      className="
                        font-inter

                        text-[10px]

                        font-bold

                        tracking-wider

                        uppercase
                      "
                    >
                      Based in
                    </span>

                    <span
                      className="
                        font-inter

                        text-xs

                        font-semibold
                      "
                    >
                      India
                    </span>
                  </div>

                  {/* Focus */}

                  <div
                    className="
                      about-information-row

                      flex

                      items-center

                      justify-between

                      gap-4

                      border-b-2

                      border-black

                      py-3
                    "
                  >
                    <span
                      className="
                        font-inter

                        text-[10px]

                        font-bold

                        tracking-wider

                        uppercase
                      "
                    >
                      Focus
                    </span>

                    <span
                      className="
                        text-right

                        font-inter

                        text-xs

                        font-semibold
                      "
                    >
                      Web Experiences
                    </span>
                  </div>

                  {/* Mindset */}

                  <div
                    className="
                      about-information-row

                      flex

                      items-center

                      justify-between

                      gap-4

                      py-3
                    "
                  >
                    <span
                      className="
                        font-inter

                        text-[10px]

                        font-bold

                        tracking-wider

                        uppercase
                      "
                    >
                      Mindset
                    </span>

                    <span
                      className="
                        font-inter

                        text-xs

                        font-semibold
                      "
                    >
                      Keep Building
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* ================== DESCRIPTION =================== */}
            {/* ================================================= */}

            <div
              className="
                mt-7

                grid

                grid-cols-1

                gap-6

                border-t-2

                border-black

                pt-6

                md:grid-cols-[1.4fr_0.6fr]
              "
            >
              {/* About text */}

              <div>
                <p
                  className="
                    about-description

                    max-w-2xl

                    font-inter

                    text-sm

                    leading-7

                    font-medium

                    md:text-base
                  "
                >
                  I&apos;m a Full Stack Developer who
                  enjoys transforming ideas into fast,
                  scalable, and thoughtfully designed web
                  experiences. I work across the frontend
                  and backend to build products that are
                  both functional and enjoyable to use.
                </p>

                <p
                  className="
                    about-description

                    mt-3

                    max-w-2xl

                    font-inter

                    text-sm

                    leading-7
                  "
                >
                  I care about clean code, intuitive
                  interfaces, continuous learning, and
                  solving real-world problems through
                  technology.
                </p>
              </div>

              {/* ================================================= */}
              {/* ==================== SIGNATURE ==================== */}
              {/* ================================================= */}

              <div
                className="
                  about-signature

                  flex

                  flex-col

                  justify-end

                  md:items-end
                "
              >
                <p
                  className="
                    font-inter

                    text-[9px]

                    font-bold

                    tracking-[0.18em]

                    uppercase
                  "
                >
                  Designed & built by
                </p>

                <h4
                  className="
                    mt-2

                    font-WindSong

                    text-4xl

                    font-semibold
                  "
                >
                  Aditya
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* ================= BOTTOM DECORATION ============== */}
      {/* ================================================= */}

      <div
        className="
          about-bottom-decoration

          mt-16

          flex

          items-center

          gap-5
        "
      >
        <p
          className="
            font-bebas

            text-xl

            tracking-wider

            md:text-3xl
          "
        >
          CURIOSITY
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

            text-xl

            text-orange-400
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
            font-bebas

            text-xl

            tracking-wider

            md:text-3xl
          "
        >
          CRAFT
        </p>
      </div>
    </section>
  );
}

export default AboutMe;