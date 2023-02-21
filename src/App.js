import Navbar from './Navbar';
import Home from './Home';
import Works from './Works';
import AboutMe from './AboutMe';
import React, { useState } from "react";

function App() {
  const [homeVisible, setHomeVisible] = useState(true);
  const [aboutMeVisible, setAboutMeVisible] = useState(false);
  const [worksVisible, setWorksVisible] = useState(false);

  function toggleHome() {
    setHomeVisible(true);
    setAboutMeVisible(false);
    setWorksVisible(false);
  }

  function toggleAboutMe() {
    setHomeVisible(false);
    setAboutMeVisible(true);
    setWorksVisible(false);
  }

  function toggleWorks() {
    setHomeVisible(false);
    setAboutMeVisible(false);
    setWorksVisible(true);
  }

  return (
    <div className="directory">
      <Navbar toggleHome={toggleHome} toggleAboutMe={toggleAboutMe} toggleWorks={toggleWorks} />
      <div className={`home ${homeVisible ? "" : "hidden"}`}>
        <Home />
      </div>
      <div className={`aboutMe ${aboutMeVisible ? "" : "hidden"}`}>
        <AboutMe />
      </div>
      <div className={`works ${worksVisible ? "" : "hidden"}`}>
        <Works />
      </div>
    </div>
  );
}

export default App;