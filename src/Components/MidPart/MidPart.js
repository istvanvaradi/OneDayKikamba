import React from "react-bootstrap";
import "./MidPart.css";
import Aos from "aos";
import "aos/dist/aos.css";
function MidPart() {
  Aos.init({ duration: 2000 });
  return (
    <div className="mid-section " data-aos="flip-up">
      <h1 className=" text-center">
        We cant help everybody, but everyone can help somebody!
      </h1>
    </div>
  );
}

export default MidPart;
