import Navbar from './Navbar';
import Home from './Home';
import Works from './Works';
import AboutMe from './AboutMe';

function App() {
  return (
    <div className="directory">
      <Navbar />
      <div className="home">
        <Home />
        <div className="works">
          <Works />
          <div className="aboutMe">
            <AboutMe />
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
