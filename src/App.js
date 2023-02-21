import Navbar from './Navbar';
import Home from './Home';
import Works from './Works';
import AboutMe from './AboutMe';
import React, { useState } from "react";

function App() {
  const [homeVisible, setHomeVisible] = useState(true);
  const [aboutMeVisible, setAboutMeVisible] = useState(false);
  const [worksVisible, setWorksVisible] = useState(false);

  function toggleHome(e) {
    e.preventDefault();
    setHomeVisible(true);
    setAboutMeVisible(false);
    setWorksVisible(false);
  }

  function toggleAboutMe(e) {
    e.preventDefault();
    setHomeVisible(false);
    setAboutMeVisible(true);
    setWorksVisible(false);
  }

  function toggleWorks(e) {
    e.preventDefault();
    setHomeVisible(false);
    setAboutMeVisible(false);
    setWorksVisible(true);
  }

  return (
    <div className="directory">
      <Navbar />
      <div className={`home ${homeVisible ? "" : "hidden"}`} onClick={() => { toggleHome() }}>
        <Home />
      </div>
      <div className={`aboutMe ${aboutMeVisible ? "" : "hidden"}`} onClick={() => { toggleAboutMe() }}>
        <AboutMe />
      </div>
      <div className={`works ${worksVisible ? "" : "hidden"}`} onClick={() => { toggleWorks() }}>
        <Works />
      </div>
    </div>
  );
}

export default App;