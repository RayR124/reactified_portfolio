import Navbar from './Navbar';
import Home from './Home';
import Works from './Works';

function App() {
  return (
    <div className="home">
      <Navbar />
      <div className="navbar">
        <Home />
        <div className="links">
          <Works />
        </div>
      </div>
    </div>
  );
}


export default App;
