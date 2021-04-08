import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Components/About";
import Cards from "./Components/Card/Cards.js";
import Icons from "./Components/IconPart/Icons";
import Header from "./Components/Header";
import MidPart from "./Components/MidPart/MidPart";
import SmallCard from "./Components/SmallCard/SmallCard";
import Intro from "./Components/Intro/Intro";
import Donate from "./Components/Donate/Donate.js";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div>
      <Header />
      <Cards />
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
