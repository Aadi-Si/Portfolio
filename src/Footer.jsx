import { FaAsterisk } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t-2
        border-black
        bg-black
        px-5
        pt-16
        text-[#F8F4EE]

        md:px-10
        md:pt-20
      "
    >
      {/* ================================================= */}
      {/* ================= TOP DETAILS ==================== */}
      {/* ================================================= */}

      <div
        className="
          flex
          flex-col
          gap-10

          border-b
          border-white/30

          pb-12

          md:flex-row
          md:items-start
          md:justify-between
        "
      >
        {/* ================= CLOSING MESSAGE ================= */}

        <div>
          {/* Small footer label */}

          <div className="flex items-center gap-3">
            <FaAsterisk
              className="
                animate-[spin_10s_linear_infinite]
                text-orange-400
              "
            />

            <p
              className="
                font-inter
                text-[9px]
                font-black
                tracking-[0.25em]
                uppercase
              "
            >
              UNTIL NEXT TIME
            </p>
          </div>

          {/* Main closing message */}

          <h2
            className="
              mt-5

              font-bebas

              text-5xl
              leading-[0.85]

              font-black

              tracking-wide

              uppercase

              sm:text-6xl

              md:text-8xl
            "
          >
            <span className="block">
              Thanks for
            </span>

            <span className="block">
              stopping by

              <span className="text-orange-400">
                .
              </span>
            </span>
          </h2>
        </div>

        {/* ================= BACK TO TOP ================= */}

        <a
          href="#"
          aria-label="Go back to the top of the page"
          className="
            group

            flex

            w-fit

            items-center

            gap-5

            border-2

            border-[#F8F4EE]

            px-5

            py-4

            text-[#F8F4EE]

            no-underline

            transition-all

            duration-300

            hover:-translate-x-1

            hover:-translate-y-1

            hover:bg-orange-400

            hover:text-black

            hover:shadow-[6px_6px_0px_#F8F4EE]
          "
        >
          <span
            className="
              font-inter

              text-[9px]

              font-black

              tracking-[0.2em]

              uppercase
            "
          >
            Back to top
          </span>

          <GoArrowUpRight
            className="
              text-xl

              transition-transform

              duration-300

              group-hover:translate-x-1

              group-hover:-translate-y-1
            "
          />
        </a>
      </div>

      {/* ================================================= */}
      {/* ================= LARGE BRAND ==================== */}
      {/* ================================================= */}

      <div
        className="
          overflow-hidden

          py-14

          md:py-16
        "
      >
        <h3
          className="
            whitespace-nowrap

            text-center

            font-bebas

            text-[24vw]

            leading-[0.7]

            font-black

            tracking-[-0.03em]

            uppercase

            md:text-[20vw]
          "
        >
          ADITYA

          <span className="text-orange-400">
            .
          </span>
        </h3>
      </div>

      {/* ================================================= */}
      {/* ================= FOOTER BOTTOM ================== */}
      {/* ================================================= */}

      <div
        className="
          flex

          flex-col

          gap-5

          border-t

          border-white/30

          py-7

          md:flex-row

          md:items-center

          md:justify-between
        "
      >
        {/* Copyright */}

        <p
          className="
            font-inter

            text-[9px]

            font-bold

            tracking-[0.15em]

            text-white/60

            uppercase
          "
        >
          © {currentYear} Aditya. All rights reserved.
        </p>

        {/* Built with */}

        <p
          className="
            font-inter

            text-[9px]

            font-bold

            tracking-[0.15em]

            text-white/60

            uppercase
          "
        >
          Designed & built with

          <span className="mx-2 text-orange-400">
            ◆
          </span>

          curiosity and code
        </p>

        {/* Location */}

        <p
          className="
            font-inter

            text-[9px]

            font-bold

            tracking-[0.15em]

            text-white/60

            uppercase
          "
        >
          India / {currentYear}
        </p>
      </div>
    </footer>
  );
}

export default Footer;