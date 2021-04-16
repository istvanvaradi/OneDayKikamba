import React from "react";
import { Button, Jumbotron, Spinner } from "react-bootstrap";
import "./Hero.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Cards(props) {
  Aos.init({ duration: 2000 });

  return (
    <Jumbotron className="Jumbotron">
      <h1 className="text-center">
        <span data-aos="fade-up-left">Let's make a better, </span>
        <span className="text-center" style={{ color: "white" }}>
          more accessible world
        </span>
        <span data-aos="fade-up-left"> together!</span>
      </h1>
      <p className="text-center">
        <Button
          data-aos="fade-left"
          variant="warning"
          href="#donate"
          className="warning  text-center"
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
      </p>
    </Jumbotron>
  );
}

export default Cards;
