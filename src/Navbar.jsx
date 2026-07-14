import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import { IoMenu, IoClose } from "react-icons/io5";
import { FaDragon } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

/* ================================================= */
/* ================= NAVIGATION DATA ================ */
/* ================================================= */

const navItems = [
  {
    name: "Home",
    id: "home",
    number: "01",
  },
  {
    name: "Skills",
    id: "skills",
    number: "02",
  },
  {
    name: "About",
    id: "about",
    number: "03",
  },
  {
    name: "Projects",
    id: "projects",
    number: "04",
  },
  {
    name: "Journey",
    id: "journey",
    number: "05",
  },
  {
    name: "Contact",
    id: "contact",
    number: "06",
  },
];

/* ================================================= */
/* ===================== NAVBAR ===================== */
/* ================================================= */

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  /*
    Home remains active when the website
    initially loads.
  */

  const [activeSection, setActiveSection] =
    useState("home");

  const mobileMenuRef = useRef(null);

  /* ================================================= */
  /* ================= SMOOTH SCROLL ================== */
  /* ================================================= */

  const scrollToSection = (sectionId) => {
    const section =
      document.getElementById(sectionId);

    if (!section) {
      console.warn(
        `The section with id="${sectionId}" was not found.`,
      );

      return;
    }

    /*
      Highlight the clicked navigation item
      immediately.
    */

    setActiveSection(sectionId);

    /*
      Smoothly move to the selected section.
    */

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    /*
      Close the mobile navigation after selecting
      a section.
    */

    setMenuOpen(false);
  };

  /* ================================================= */
  /* ============= ACTIVE SECTION TRACKING =========== */
  /* ================================================= */

  useEffect(() => {
    /*
      The navbar has a height of 80px.

      The active section changes when the beginning
      of a section crosses this imaginary point.

      Increase this number if you want the navbar
      highlight to change slightly earlier.

      Decrease this number if you want it to
      change later.
    */

    const ACTIVATION_POINT = 140;

    const updateActiveSection = () => {
      /*
        Find every section using the IDs
        from navItems.
      */

      const sections = navItems
        .map((item) => {
          return document.getElementById(
            item.id,
          );
        })
        .filter(Boolean);

      /*
        Stop if no matching section exists.
      */

      if (sections.length === 0) return;

      /*
        Home is the default active section.
      */

      let currentSection = sections[0].id;

      /*
        Check which section has most recently
        crossed the activation point.

        Because the sections are checked from
        top to bottom, the latest matching
        section becomes active.
      */

      sections.forEach((section) => {
        const sectionPosition =
          section.getBoundingClientRect();

        if (
          sectionPosition.top <=
          ACTIVATION_POINT
        ) {
          currentSection = section.id;
        }
      });

      /*
        The Contact section may be shorter than
        the browser screen.

        Because of this, its top may not reach
        the activation point.

        When the user reaches the bottom of the
        website, Contact is activated manually.
      */

      const reachedPageBottom =
        window.innerHeight +
          window.scrollY >=
        document.documentElement.scrollHeight -
          5;

      if (reachedPageBottom) {
        currentSection =
          sections[sections.length - 1].id;
      }

      /*
        Update React state only when the active
        section changes.
      */

      setActiveSection(
        (previousSection) => {
          if (
            previousSection ===
            currentSection
          ) {
            return previousSection;
          }

          return currentSection;
        },
      );
    };

    /*
      Find the correct active section immediately
      after the website loads.
    */

    updateActiveSection();

    /*
      Update the active section whenever
      the page is scrolled.
    */

    window.addEventListener(
      "scroll",
      updateActiveSection,
      {
        passive: true,
      },
    );

    /*
      Recalculate section positions whenever
      the browser is resized.
    */

    window.addEventListener(
      "resize",
      updateActiveSection,
    );

    /*
      Remove event listeners when the Navbar
      component is removed.
    */

    return () => {
      window.removeEventListener(
        "scroll",
        updateActiveSection,
      );

      window.removeEventListener(
        "resize",
        updateActiveSection,
      );
    };
  }, []);

  /* ================================================= */
  /* ================ MOBILE ANIMATION =============== */
  /* ================================================= */

  useEffect(() => {
    const menu = mobileMenuRef.current;

    if (!menu) return;

    if (menuOpen) {
      /*
        Prevent the page behind the mobile
        menu from scrolling.
      */

      document.body.style.overflow = "hidden";

      /*
        Make the mobile menu visible.
      */

      gsap.set(menu, {
        display: "flex",
      });

      /*
        Animate the complete mobile menu
        from the top.
      */

      gsap.fromTo(
        menu,
        {
          yPercent: -100,
        },
        {
          yPercent: 0,

          duration: 0.75,

          ease: "power4.out",
        },
      );

      /*
        Animate every navigation item.
      */

      gsap.fromTo(
        ".mobile-nav-item",
        {
          y: 70,

          opacity: 0,

          rotate: 2,
        },
        {
          y: 0,

          opacity: 1,

          rotate: 0,

          duration: 0.65,

          stagger: 0.08,

          delay: 0.2,

          ease: "power4.out",
        },
      );
    } else {
      /*
        Restore normal page scrolling.
      */

      document.body.style.overflow = "";

      /*
        Animate the menu out of the screen.
      */

      gsap.to(menu, {
        yPercent: -100,

        duration: 0.55,

        ease: "power3.inOut",

        onComplete: () => {
          gsap.set(menu, {
            display: "none",
          });
        },
      });
    }

    /*
      Cleanup.
    */

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ================================================= */}
      {/* ================= MAIN NAVBAR ==================== */}
      {/* ================================================= */}

      <nav
        className="
          fixed
          top-0
          right-0
          left-0

          z-[100]

          flex

          h-20

          items-center

          justify-between

          bg-[#F8F4EE]/95

          px-5

          backdrop-blur-md

          md:px-10
        "
      >
        {/* ================================================= */}
        {/* ===================== LOGO ======================= */}
        {/* ================================================= */}

        <button
          type="button"
          aria-label="Go to home section"
          onClick={() => {
            scrollToSection("home");
          }}
          className="
            group

            flex

            cursor-pointer

            items-center

            gap-3

            border-0

            bg-transparent
          "
        >
          {/* Logo icon */}

          <div
            className="
              flex

              h-11

              w-11

              items-center

              justify-center

              border-2

              border-black

              bg-orange-400

              shadow-[4px_4px_0px_#000]

              transition-all

              duration-300

              group-hover:-translate-x-1

              group-hover:-translate-y-1

              group-hover:shadow-[7px_7px_0px_#000]
            "
          >
            <FaDragon className="text-xl" />
          </div>

          {/* Logo information */}

          <div className="text-left">
            <p
              className="
                font-bebas

                text-2xl

                leading-none

                font-black

                tracking-wide
              "
            >
              ADITYA

              <span className="text-orange-400">
                .
              </span>
            </p>

            <p
              className="
                mt-1

                hidden

                font-inter

                text-[7px]

                font-black

                tracking-[0.18em]

                uppercase

                sm:block
              "
            >
              Full Stack Developer
            </p>
          </div>
        </button>

        {/* ================================================= */}
        {/* ================= DESKTOP LINKS ================== */}
        {/* ================================================= */}

        <div
          className="
            hidden

            items-center

            border-2

            border-black

            bg-[#F8F4EE]

            lg:flex
          "
        >
          {navItems.map((item, index) => {
            /*
              Check whether this navigation item
              belongs to the currently visible
              section.
            */

            const isActive =
              activeSection === item.id;

            return (
              <button
                key={item.id}
                type="button"
                aria-current={
                  isActive
                    ? "page"
                    : undefined
                }
                onClick={() => {
                  scrollToSection(item.id);
                }}
                className={`
                  group

                  relative

                  cursor-pointer

                  overflow-hidden

                  border-0

                  px-4

                  py-3

                  font-inter

                  text-[9px]

                  font-black

                  tracking-[0.12em]

                  uppercase

                  transition-colors

                  duration-300

                  ${
                    isActive
                      ? "bg-orange-400 text-black"
                      : "bg-transparent text-black hover:text-white"
                  }

                  ${
                    index !==
                    navItems.length - 1
                      ? "border-r-2 border-black"
                      : ""
                  }
                `}
              >
                {/* ========================================= */}
                {/* ========== BLACK HOVER LAYER ============ */}
                {/* ========================================= */}

                {!isActive && (
                  <span
                    className="
                      absolute

                      inset-0

                      origin-bottom

                      scale-y-0

                      bg-black

                      transition-transform

                      duration-300

                      group-hover:scale-y-100
                    "
                  />
                )}

                {/* Navigation name */}

                <span className="relative z-10">
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* ================================================= */}
        {/* ================= MOBILE BUTTON ================== */}
        {/* ================================================= */}

        <button
          type="button"
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          onClick={() => {
            setMenuOpen(
              (currentState) =>
                !currentState,
            );
          }}
          className="
            relative

            z-[120]

            flex

            h-11

            w-11

            cursor-pointer

            items-center

            justify-center

            border-2

            border-black

            bg-black

            text-white

            shadow-[4px_4px_0px_#f97316]

            transition-all

            duration-300

            hover:-translate-x-1

            hover:-translate-y-1

            hover:shadow-[7px_7px_0px_#f97316]

            lg:hidden
          "
        >
          {menuOpen ? (
            <IoClose className="text-3xl" />
          ) : (
            <IoMenu className="text-3xl" />
          )}
        </button>
      </nav>

      {/* ================================================= */}
      {/* ================= MOBILE MENU ==================== */}
      {/* ================================================= */}

      <div
        ref={mobileMenuRef}
        className="
          fixed

          inset-0

          z-[90]

          hidden

          flex-col

          bg-orange-400

          px-5

          pt-28

          pb-8

          md:px-10

          lg:hidden
        "
      >
        {/* ================================================= */}
        {/* ============== MOBILE MENU HEADING ============== */}
        {/* ================================================= */}

        <div
          className="
            flex

            items-center

            justify-between

            border-b-2

            border-black

            pb-5
          "
        >
          <p
            className="
              font-inter

              text-[9px]

              font-black

              tracking-[0.25em]

              uppercase
            "
          >
            Navigation
          </p>

          <p
            className="
              font-inter

              text-[9px]

              font-black

              tracking-[0.2em]
            "
          >
            MENU / 2026
          </p>
        </div>

        {/* ================================================= */}
        {/* =============== MOBILE NAVIGATION =============== */}
        {/* ================================================= */}

        <div
          className="
            mt-4

            flex

            flex-1

            flex-col

            justify-center
          "
        >
          {navItems.map((item) => {
            const isActive =
              activeSection === item.id;

            return (
              <button
                key={item.id}
                type="button"
                aria-current={
                  isActive
                    ? "page"
                    : undefined
                }
                onClick={() => {
                  scrollToSection(item.id);
                }}
                className={`
                  mobile-nav-item

                  group

                  flex

                  cursor-pointer

                  items-center

                  justify-between

                  border-0

                  border-b-2

                  border-black

                  py-3

                  text-left

                  transition-all

                  duration-300

                  ${
                    isActive
                      ? "bg-black px-3 text-orange-400"
                      : "bg-transparent"
                  }
                `}
              >
                {/* Navigation number */}

                <span
                  className="
                    font-inter

                    text-[9px]

                    font-black

                    tracking-[0.2em]
                  "
                >
                  {item.number}
                </span>

                {/* Navigation name */}

                <span
                  className="
                    font-bebas

                    text-4xl

                    leading-none

                    font-black

                    uppercase

                    transition-transform

                    duration-300

                    group-hover:translate-x-3

                    sm:text-5xl
                  "
                >
                  {item.name}
                </span>

                {/* Navigation arrow */}

                <GoArrowUpRight
                  className="
                    text-3xl

                    transition-transform

                    duration-300

                    group-hover:translate-x-1

                    group-hover:-translate-y-1
                  "
                />
              </button>
            );
          })}
        </div>

        {/* ================================================= */}
        {/* ================= MOBILE FOOTER ================== */}
        {/* ================================================= */}

        <div
          className="
            flex

            items-center

            justify-between

            border-t-2

            border-black

            pt-5
          "
        >
          <p
            className="
              font-inter

              text-[8px]

              font-black

              tracking-[0.18em]

              uppercase
            "
          >
            Aditya / India
          </p>

          <p
            className="
              font-inter

              text-[8px]

              font-black

              tracking-[0.18em]

              uppercase
            "
          >
            Full Stack Developer
          </p>
        </div>
      </div>
    </>
  );
}

export default Navbar;