import React from "react";
import { Row } from "react-bootstrap";
import "./Intro.css";
import Cindy from "../Pictures/Cindy.png";
import Lara from "../Pictures/Lara.png";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Intro = () => {
  Aos.init({ duration: 2000 });
  return (
    <div className="conteiner  tex-center intro-section">
      <Row className=" text-center cindy">
        <div className="col-sm-6  col-xs-12">
          <h1 className="text-center ">
            <FaQuoteRight />
          </h1>
          <h1>Cindy</h1>
          <p data-aos="fade-up" className="text-center">
            I am an elementary school teacher. That tells a lot about me. I
            always advocate for equality of opportunity. The relationship I had
            with the children has profoundly affected me. That’s why I want to
            do everything I can to change the world as much as possible.
          </p>
        </div>
        <div className="col-sm-6 col-xs-12">
          <img src={Cindy} className="img-fluid rounded shadow-lg " />
        </div>
      </Row>
      <Row className=" text-center">
        <div className="col-sm-6 col-xs-12">
          <img src={Lara} className="img-fluid rounded shadow-lg " />
        </div>
        <div className="col-sm-6  col-xs-12">
          <h1 className="text-center m-5">
            {" "}
            <FaQuoteLeft />
          </h1>
          <h1>Lara</h1>
          <p data-aos="fade-up" className="text-center ">
            Passionate about travel since I was a child, my adventure in Kenya
            deeply moved me. I am also the mother of a little girl named Inaya.
            my motto: “We cannot change the world but we can change something in
            the world."
          </p>
        </div>
      </Row>
    </div>
  );
};

export default Intro;
