
import Project from "./components/Project";
function Projects() {
  return (
    <div className="p-5 rounded-lg overflow-hidden">
      <h5 className="font-inter font-bold text-orange-400 text-lg mt-3">
        FEATURED PROJECTS
      </h5>
      <Project no="01" text="STOREIT" detail="Cloud Storage Platform"/>
      <Project no="02" text="Review Shield" detail="AI Fake Review Detection"/>
      <Project no="03" text="Drive Clone" detail="File Management System"/>
      <Project no="04" text="PIXELFORGE NEXUS" detail="Assignment Management Platform"/>
    </div>
  );
}

export default Projects;
