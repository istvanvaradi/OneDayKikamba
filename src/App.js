import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Components/About";
import Hero from "./Components/Hero/Hero.js";
import Icons from "./Components/IconPart/Icons";
import Navbar from "./Components/Navbar/Navbar";
import MidPart from "./Components/MidPart/MidPart";
import SmallCard from "./Components/SmallCard/SmallCard";
import Intro from "./Components/Intro/Intro";
import Donate from "./Components/Donate/Donate.js";
import Footer from ".//Components/Footer/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Icons />
      <SmallCard />
      <MidPart />
      <Intro />
      <Donate />
      <Footer />
    </div>
  );
}

export default App;
