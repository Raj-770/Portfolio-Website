import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Feedbacks from "./components/Feedbacks";
import Loader from "./components/Loader";
import Tech from "./components/Tech";
import Works from "./components/Works";
import { StarsCanvas } from "./components/canvas";

const App = () => {
  document.body.style.zoom = "95%";
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience /> */}
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="z-0 relative">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
