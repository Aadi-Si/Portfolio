import { FaAsterisk } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

function JourneyCard({
  year,
  text,
  label,
  index,
  isFuture = false,
}) {
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`
        journey-item
        relative
        grid
        grid-cols-[45px_1fr]
        items-center
        gap-4

        md:grid-cols-[1fr_90px_1fr]
        md:gap-7
      `}
    >
      {/* ================================================= */}
      {/* =============== LEFT TIMELINE SIDE ============== */}
      {/* ================================================= */}

      <div
        className={`
          hidden
          md:block

          ${
            isLeft
              ? "md:col-start-1"
              : "md:col-start-3"
            }
        `}
      >
        {isLeft && (
          <JourneyContent
            year={year}
            text={text}
            label={label}
            isFuture={isFuture}
          />
        )}
      </div>

      {/* ================================================= */}
      {/* ================= TIMELINE CENTER ================ */}
      {/* ================================================= */}

      <div
        className="
          relative
          z-20

          col-start-1

          flex
          items-center
          justify-center

          md:col-start-2
        "
      >
        {/* Outer marker */}

        <div
          className={`
            journey-marker

            relative

            flex
            h-11
            w-11

            items-center
            justify-center

            border-2
            border-black

            shadow-[4px_4px_0px_#000]

            md:h-14
            md:w-14

            ${
              isFuture
                ? "bg-black text-orange-400"
                : "bg-orange-400 text-black"
            }
          `}
        >
          <FaAsterisk
            className="
              journey-star

              text-base

              md:text-xl
            "
          />
        </div>
      </div>

      {/* ================================================= */}
      {/* ============== RIGHT TIMELINE SIDE ============== */}
      {/* ================================================= */}

      <div
        className={`
          col-start-2

          md:col-start-3

          ${
            isLeft
              ? "md:hidden"
              : ""
          }
        `}
      >
        <JourneyContent
          year={year}
          text={text}
          label={label}
          isFuture={isFuture}
        />
      </div>
    </div>
  );
}

/* ================================================= */
/* ================= CARD CONTENT =================== */
/* ================================================= */

function JourneyContent({
  year,
  text,
  label,
  isFuture,
}) {
  return (
    <article
      className="
        journey-card

        group

        relative

        overflow-hidden

        border-2
        border-black

        bg-[#F8F4EE]

        p-5

        shadow-[7px_7px_0px_#000]

        transition-[transform,box-shadow]

        duration-300

        hover:-translate-x-1

        hover:-translate-y-1

        hover:shadow-[11px_11px_0px_#000]

        md:p-7
      "
    >
      {/* ================================================= */}
      {/* ================ LARGE BACKGROUND YEAR ========== */}
      {/* ================================================= */}

      <p
        className="
          pointer-events-none

          absolute

          -right-3

          -bottom-7

          font-bebas

          text-[100px]

          leading-none

          font-black

          text-black/[0.05]

          transition-transform

          duration-500

          group-hover:-translate-x-3

          md:text-[140px]
        "
      >
        {year === "Future"
          ? "∞"
          : year.slice(-2)}
      </p>

      {/* ================================================= */}
      {/* ================= ORANGE CORNER ================== */}
      {/* ================================================= */}

      <div
        className={`
          absolute

          top-0
          right-0

          h-4
          w-16

          border-b-2
          border-l-2
          border-black

          transition-all

          duration-300

          group-hover:w-24

          ${
            isFuture
              ? "bg-black"
              : "bg-orange-400"
          }
        `}
      />

      {/* ================================================= */}
      {/* ================= CARD HEADER ==================== */}
      {/* ================================================= */}

      <div
        className="
          relative

          flex

          items-start

          justify-between

          gap-5
        "
      >
        <div>
          {/* Journey category */}

          <p
            className="
              font-inter

              text-[8px]

              font-black

              tracking-[0.25em]

              text-orange-500

              uppercase

              md:text-[9px]
            "
          >
            {label}
          </p>

          {/* Year */}

          <h3
            className="
              mt-2

              font-bebas

              text-5xl

              leading-none

              font-black

              tracking-wide

              uppercase

              md:text-7xl
            "
          >
            {year}

            <span className="text-orange-400">
              .
            </span>
          </h3>
        </div>

        {/* Arrow */}

        <div
          className="
            mt-4

            flex

            h-10
            w-10

            shrink-0

            items-center

            justify-center

            border-2
            border-black

            bg-black

            text-white

            transition-all

            duration-300

            group-hover:bg-orange-400

            group-hover:text-black

            md:h-12
            md:w-12
          "
        >
          <GoArrowUpRight
            className="
              text-xl

              transition-transform

              duration-300

              group-hover:translate-x-1

              group-hover:-translate-y-1

              md:text-2xl
            "
          />
        </div>
      </div>

      {/* ================================================= */}
      {/* ================= DESCRIPTION ==================== */}
      {/* ================================================= */}

      <div
        className="
          relative

          mt-6

          border-t-2

          border-black

          pt-5
        "
      >
        <p
          className="
            max-w-md

            font-inter

            text-sm

            leading-7

            font-medium

            md:text-base
          "
        >
          {text}
        </p>

        {/* Bottom decoration */}

        <div
          className="
            mt-6

            flex

            items-center

            gap-3
          "
        >
          <span
            className="
              h-[2px]

              w-10

              bg-black

              transition-all

              duration-300

              group-hover:w-20
            "
          />

          <span
            className="
              font-inter

              text-[8px]

              font-black

              tracking-[0.18em]

              uppercase
            "
          >
            Keep growing
          </span>
        </div>
      </div>
    </article>
  );
}

export default JourneyCard;