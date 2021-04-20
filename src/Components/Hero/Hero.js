import React from "react";
import { Button, Jumbotron, Spinner } from "react-bootstrap";
import "./Hero.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Logo from "../Pictures/kikambalogo_sized.png";

function Cards(props) {
  Aos.init({ duration: 2000 });

  return (
    <Jumbotron className="Jumbotron">
      <h1 className="text-left">
        <span data-aos="fade-up-left">Let's make a better, </span>
        <span className="text-center" style={{ color: "white" }}>
          more accessible world
        </span>
        <span data-aos="fade-up-left"> together!</span>
      </h1>
      <Button
        data-aos="fade-left"
        variant="warning"
        href="#donate"
        className="warning btn-lg"
      >
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Donate
      </Button>
      <img
        className="fluid-image float-center"
        alt="w"
        src={Logo}
        style={{ width: "9rem" }}
      />{" "}
    </Jumbotron>
  );
}

export default Cards;
