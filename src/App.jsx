import { useState } from "react";

import AboutMe from "./AboutMe";
import Journey from "./Journey";
import Myself from "./Myself";
import Navbar from "./Navbar";
import Projects from "./Projects";
import TechStack from "./TechStack";
import Connect from "./Connect";
import Footer from "./Footer";

import Loader from "./components/Loader";

function App() {
  // Controls whether the loader is visible
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* ================= LOADER ================= */}

      {isLoading && (
        <Loader
          onComplete={() => {
            setIsLoading(false);
          }}
        />
      )}

      {/* ================= PORTFOLIO ================= */}

      <main>
        <Navbar />

        <Myself />

        <TechStack />

        <AboutMe />

        <Projects />

        <Journey />

        <Connect />

        <Footer />
      </main>
    </>
  );
}

export default App;