import { GoArrowUpRight } from "react-icons/go";

function Project({
  no,
  text,
  detail,
  tech = [],
  link,
  onMouseEnter,
  onMouseMove,
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${text} GitHub repository`}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      className="
        group
        relative
        z-10
        block
        cursor-pointer
        border-x-2
        border-t-2
        border-black
        bg-[#F8F4EE]
        text-black
        no-underline
        transition-colors
        duration-300
        last:border-b-2
        hover:bg-orange-400
      "
    >
      {/* ================= PROJECT CONTENT ================= */}

      <div
        className="
          grid
          min-h-[105px]
          grid-cols-[65px_1fr_auto]
          items-center
          gap-4
          px-4
          py-4

          sm:grid-cols-[85px_1fr_auto]
          sm:px-6

          md:min-h-[125px]
          md:grid-cols-[110px_1fr_90px]
          md:gap-7
          md:px-8
          md:py-5

          lg:grid-cols-[130px_1fr_110px]
        "
      >
        {/* ================= PROJECT NUMBER ================= */}

        <div className="flex h-full items-center border-r-2 border-black">
          <h2
            className="
              font-bebas
              text-5xl
              leading-none
              font-black
              sm:text-6xl
              md:text-7xl
            "
          >
            {no}
          </h2>
        </div>

        {/* ================= PROJECT INFORMATION ================= */}

        <div>
          {/* Project title */}

          <h3
            className="
              w-fit
              font-bebas
              text-3xl
              leading-none
              font-black
              tracking-wide
              uppercase
              transition-transform
              duration-300
              group-hover:translate-x-2
              sm:text-4xl
              md:text-5xl
            "
          >
            {text}

            <span
              className="
                text-orange-500
                transition-colors
                duration-300
                group-hover:text-black
              "
            >
              .
            </span>
          </h3>

          {/* Project description */}

          <p
            className="
              mt-1.5
              font-inter
              text-xs
              font-medium
              sm:text-sm
            "
          >
            {detail}
          </p>

          {/* ================= TECHNOLOGY TAGS ================= */}

          {tech.length > 0 && (
            <div className="mt-3 hidden flex-wrap gap-2 md:flex">
              {tech.map((item) => (
                <span
                  key={item}
                  className="
                    border
                    border-black
                    bg-[#F8F4EE]
                    px-2
                    py-1
                    font-inter
                    text-[8px]
                    font-bold
                    tracking-[0.12em]
                    uppercase
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* ================= ROW ARROW ================= */}

        <div className="flex justify-end">
          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              border-2
              border-black
              bg-black
              text-white
              transition-all
              duration-300

              group-hover:-translate-y-1
              group-hover:translate-x-1
              group-hover:bg-[#F8F4EE]
              group-hover:text-black

              md:h-14
              md:w-14
            "
          >
            <GoArrowUpRight
              className="
                text-2xl
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
                md:text-3xl
              "
            />
          </div>
        </div>
      </div>
    </a>
  );
}

export default Project;