function JourneyCard({ year, text }) {
  return (
    <div className="relative">
      <div className="absolute -left-9 top-5 w-6 h-6 rounded-full bg-black"></div>
      <div className="border-2 border-[#c8c8c7] rounded-lg p-5">
        <h5 className="font-inter font-bold">{year}</h5>
        <p className="font-inter font-medium mt-2">{text}</p>
      </div>
    </div>
  );
}

export default JourneyCard;