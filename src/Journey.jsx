import JourneyCard from "./components/JourneyCard";

const detail = [
  { year: "2023", text: "Started my journey in full stack web developement." },
  { year: "2024", text: "Built multiple projects and improved my skills." },
  { year: "2025", text: "Working on scalable applications and real-world products." },
  { year: "Future", text: "Continuing to learn, build and solve bigger problems." },
];

function Journey() {
  return (
    <section>
      <div className="p-5">
        <h5 className="font-inter font-bold text-orange-400 text-lg mt-3">
          MY JOURNEY
        </h5>
        <h2 className="font-inter mt-5 text-2xl font-black">
          GROWING EVERY DAY
        </h2>
      </div>

      <div className="relative pl-12 pr-5 space-y-5">
        {/* single continuous line for the whole timeline */}
        <div className="absolute left-5 top-5 bottom-15 w-2 bg-black rounded-full"></div>
        {detail.map(({ text, year }) => (
          <JourneyCard key={year} year={year} text={text} />
        ))}
      </div>
    </section>
  );
}

export default Journey;