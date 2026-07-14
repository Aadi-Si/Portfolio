import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

import Project from "./components/Project";

/* ================================================= */
/* ================= PROJECT DATA =================== */
/* ================================================= */

const projects = [
  {
    no: "01",
    text: "RedThread",
    detail: "A Real-Time Blood Donor Matching System",
    image: "/RedThread.png",
    tech: ["React", "Express", "BREVO API", "SUPABASE" , "Haversine Formula"],
    shape: "organic",

    // Replace this with your actual StoreIt GitHub URL
    link: "https://github.com/Aadi-Si/RedThread-Blood-And-Organ-Donar-Finder",
  },

  {
    no: "02",
    text: "STOREIT",
    detail: "Cloud Storage Platform",
    image: "/StoreIT.png",
    tech: ["REDUX", "EXPRESS", "SUPABASE", "MongoDB"],
    shape: "shield",

    // Replace this with your actual Review Shield GitHub URL
    link: "https://github.com/Aadi-Si/store_it",
  },

  {
    no: "03",
    text: "Review Shield",
    detail: "AI Fake Review Detection",
    image: "/Review.png",
    tech: ["flask", "SELENIUM", "BEAUTIFULSOUP","DISTILBERT"],
    shape: "folder",

    // Replace this with your actual Drive Clone GitHub URL
    link: "https://github.com/Aadi-Si/Review_Shield",
  },

  {
    no: "04",
    text: "ADB –Movie",
    detail: "Movie Website",
    image: "/movie.png",
    tech: ["TMDB API", "REDUX", "TAILWIND"],
    shape: "pixel",

    // Replace this with your actual PixelForge Nexus GitHub URL
    link: "https://github.com/Aadi-Si/React-Movie-Site",
  },
];

/* ================================================= */
/* ================= PROJECT SHAPES ================= */
/* ================================================= */

const getProjectShape = (shape) => {
  const shapes = {
    /*
      STOREIT

      Soft asymmetric shape inspired by
      cloud storage and fluid digital systems.
    */

    organic: `
      polygon(
        8% 3%,
        75% 0%,
        94% 9%,
        100% 35%,
        95% 76%,
        80% 96%,
        36% 100%,
        9% 89%,
        0% 60%,
        3% 22%
      )
    `,

    /*
      REVIEW SHIELD

      Angular shield-inspired shape.
    */

    shield: `
      polygon(
        50% 0%,
        94% 11%,
        100% 57%,
        86% 82%,
        50% 100%,
        14% 82%,
        0% 57%,
        6% 11%
      )
    `,

    /*
      DRIVE CLONE

      Creative folder-inspired shape.
    */

    folder: `
      polygon(
        0% 14%,
        29% 14%,
        37% 0%,
        74% 0%,
        100% 18%,
        96% 88%,
        78% 100%,
        10% 96%,
        0% 77%
      )
    `,

    /*
      PIXELFORGE NEXUS

      Stepped digital and pixel-inspired shape.
    */

    pixel: `
      polygon(
        10% 0%,
        75% 0%,
        75% 8%,
        92% 8%,
        92% 22%,
        100% 22%,
        100% 78%,
        91% 78%,
        91% 92%,
        72% 92%,
        72% 100%,
        17% 100%,
        17% 92%,
        5% 92%,
        5% 76%,
        0% 76%,
        0% 20%,
        10% 20%
      )
    `,
  };

  return shapes[shape] || shapes.organic;
};

/* ================================================= */
/* ================= PROJECTS ======================= */
/* ================================================= */

function Projects() {
  const sectionRef = useRef(null);

  const previewRef = useRef(null);

  const imageRef = useRef(null);

  const activeImageRef = useRef(projects[0].image);

  const [activeProject, setActiveProject] = useState(projects[0]);

  /* ================================================= */
  /* ================= INITIAL GSAP =================== */
  /* ================================================= */

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.set(previewRef.current, {
        autoAlpha: 0,
        scale: 0.75,
        rotate: -7,
      });

      gsap.set(imageRef.current, {
        scale: 1.08,
      });
    }, sectionRef);

    return () => {
      context.revert();
    };
  }, []);

  /* ================================================= */
  /* ================= SHOW PREVIEW =================== */
  /* ================================================= */

  const showPreview = (project, index) => {
    const preview = previewRef.current;

    const image = imageRef.current;

    if (!preview || !image) return;

    /*
      Alternate the preview rotation
      between projects.
    */

    const rotation = index % 2 === 0 ? -3 : 3;

    /*
      Change the screenshot only when
      another project becomes active.
    */

    if (activeImageRef.current !== project.image) {
      activeImageRef.current = project.image;

      gsap.killTweensOf(image);

      /*
        Animate the current screenshot out.
      */

      gsap.to(image, {
        autoAlpha: 0,
        scale: 1.16,
        y: -18,
        duration: 0.2,
        ease: "power2.in",

        onComplete: () => {
          /*
            Update the screenshot, project details,
            and preview shape.
          */

          setActiveProject(project);

          /*
            Prepare the new screenshot.
          */

          gsap.set(image, {
            autoAlpha: 0,
            scale: 0.92,
            y: 22,
          });

          /*
            Animate the new screenshot into view.
          */

          gsap.to(image, {
            autoAlpha: 1,
            scale: 1.08,
            y: 0,
            duration: 0.65,
            ease: "expo.out",
          });
        },
      });
    }

    /*
      Reveal the complete preview.
    */

    gsap.killTweensOf(preview);

    gsap.to(preview, {
      autoAlpha: 1,
      scale: 1,
      rotate: rotation,
      duration: 0.75,
      ease: "expo.out",
      overwrite: "auto",
    });
  };

  /* ================================================= */
  /* ================= MOVE PREVIEW =================== */
  /* ================================================= */

  const movePreview = (event) => {
    /*
      Disable the floating preview
      below desktop width.
    */

    if (window.innerWidth < 1024) {
      return;
    }

    const section = sectionRef.current;

    const preview = previewRef.current;

    if (!section || !preview) {
      return;
    }

    const sectionBounds = section.getBoundingClientRect();

    const previewWidth = preview.offsetWidth;

    const previewHeight = preview.offsetHeight;

    /*
      Mouse position relative to the
      complete Projects section.
    */

    const mouseX = event.clientX - sectionBounds.left;

    const mouseY = event.clientY - sectionBounds.top;

    /*
      Initially place the preview
      on the right side of the cursor.
    */

    let targetX = mouseX + 50;

    let targetY = mouseY - previewHeight / 2;

    /*
      Move the preview to the left side
      when there is insufficient space.
    */

    if (targetX + previewWidth > sectionBounds.width - 20) {
      targetX = mouseX - previewWidth - 50;
    }

    /*
      Prevent the preview from leaving
      the top of the section.
    */

    targetY = Math.max(80, targetY);

    /*
      Prevent the preview from leaving
      the bottom of the section.
    */

    targetY = Math.min(
      sectionBounds.height - previewHeight - 20,
      targetY,
    );

    /*
      Smooth cursor-following animation.
    */

    gsap.to(preview, {
      x: targetX,
      y: targetY,
      duration: 0.8,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  /* ================================================= */
  /* ================= HIDE PREVIEW =================== */
  /* ================================================= */

  const hidePreview = () => {
    const preview = previewRef.current;

    if (!preview) return;

    gsap.killTweensOf(preview);

    gsap.to(preview, {
      autoAlpha: 0,
      scale: 0.8,
      rotate: 0,
      duration: 0.45,
      ease: "power3.inOut",
      overwrite: "auto",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      onMouseLeave={hidePreview}
      className="
        relative
        overflow-visible
        border-b-2
        border-black
        bg-[#F8F4EE]
        px-5
        py-16
        md:px-10
        md:py-20
      "
    >
      {/* ================================================= */}
      {/* ================= SECTION HEADER ================ */}
      {/* ================================================= */}

      <div className="flex items-end justify-between">
        <div>
          <p
            className="
              font-inter
              text-xs
              font-bold
              tracking-[0.25em]
              text-orange-500
              uppercase
            "
          >
            Selected Work
          </p>

          <h2
            className="
              mt-3
              font-bebas
              text-6xl
              leading-none
              font-black
              tracking-tight
              uppercase
              md:text-8xl
            "
          >
            Featured

            <span className="text-orange-400">
              {" "}
              Projects.
            </span>
          </h2>
        </div>

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
          03 / PROJECTS
        </p>
      </div>

      {/* ================================================= */}
      {/* ================= PROJECT LIST =================== */}
      {/* ================================================= */}

      <div className="relative z-10 mt-10">
        {projects.map((project, index) => (
          <Project
            key={project.no}
            no={project.no}
            text={project.text}
            detail={project.detail}
            tech={project.tech}
            link={project.link}
            onMouseEnter={() => showPreview(project, index)}
            onMouseMove={movePreview}
          />
        ))}
      </div>

      {/* ================================================= */}
      {/* =========== SHARED FLOATING PREVIEW ============= */}
      {/* ================================================= */}

      <div
        ref={previewRef}
        className="
          pointer-events-none
          absolute
          top-0
          left-0
          z-50
          hidden
          w-97.5
          will-change-transform
          lg:block
          xl:w-115
        "
      >
        {/* ================= ORANGE OFFSET SHAPE ================= */}

        <div
          style={{
            clipPath: getProjectShape(activeProject.shape),
          }}
          className="
            absolute
            inset-0
            translate-x-5
            translate-y-5
            rotate-3
            bg-orange-400
            transition-[clip-path]
            duration-700
            ease-out
          "
        />

        {/* ================= BLACK DEPTH LAYER ================= */}

        <div
          style={{
            clipPath: getProjectShape(activeProject.shape),
          }}
          className="
            absolute
            inset-0
            translate-x-2
            translate-y-2
            bg-black
            transition-[clip-path]
            duration-700
            ease-out
          "
        />

        {/* ================= MAIN IMAGE FRAME ================= */}

        <div
          style={{
            clipPath: getProjectShape(activeProject.shape),
          }}
          className="
            relative
            overflow-hidden
            bg-[#F8F4EE]
            p-0.75
            transition-[clip-path]
            duration-700
            ease-out
          "
        >
          {/* ================= IMAGE MASK ================= */}

          <div
            style={{
              clipPath: getProjectShape(activeProject.shape),
            }}
            className="
              relative
              aspect-16/11
              overflow-hidden
              transition-[clip-path]
              duration-700
              ease-out
            "
          >
            {/* Project screenshot */}

            <img
              ref={imageRef}
              src={activeProject.image}
              alt={`${activeProject.text} project preview`}
              className="
                h-full
                w-full
                scale-[1.08]
                object-cover
                will-change-transform
              "
            />

            {/* Dark gradient */}

            <div
              className="
                absolute
                inset-0
                bg-linear-to-t
                from-black/75
                via-transparent
                to-transparent
              "
            />

            {/* ================= PROJECT INFORMATION ================= */}

            <div
              className="
                absolute
                right-12
                bottom-10
                left-12
                flex
                items-end
                justify-between
                text-white
              "
            >
              <div>
                <p
                  className="
                    font-inter
                    text-[8px]
                    font-bold
                    tracking-[0.25em]
                    text-orange-300
                    uppercase
                  "
                >
                  Selected Project
                </p>

                <h4
                  className="
                    mt-1
                    font-bebas
                    text-3xl
                    leading-none
                    tracking-wide
                    uppercase
                  "
                >
                  {activeProject.text}
                </h4>
              </div>

              <p className="font-bebas text-4xl leading-none">
                {activeProject.no}
              </p>
            </div>
          </div>
        </div>

        {/* ================= FLOATING LABEL ================= */}

        <div
          className="
            absolute
            -top-3
            left-[12%]
            -rotate-3
            border-2
            border-black
            bg-[#F8F4EE]
            px-4
            py-2
            shadow-[4px_4px_0px_#000]
          "
        >
          <p
            className="
              font-inter
              text-[8px]
              font-black
              tracking-[0.2em]
              uppercase
            "
          >
            Project Preview
          </p>
        </div>

        {/*
          The orange circular preview arrow was removed.

          The arrow inside every project row remains visible,
          and clicking anywhere on a project row opens its
          respective GitHub repository.
        */}
      </div>
    </section>
  );
}

export default Projects;