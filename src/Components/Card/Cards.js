import React from "react";
import { Button, Jumbotron, Spinner } from "react-bootstrap";
import "./style.css";

function Cards(props) {
  return (
    <Jumbotron className="Jumbotron">
      <h1 className="text-center">
        Let's make a better,
        <span className="text-center" style={{ color: "white" }}>
          more accessable world
        </span>
        together!
      </h1>
      <p className="text-center">
        <Button
          variant="warning"
          href="#donate"
          className="warning text-center"
        >
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Donate options
        </Button>
      </p>
    </Jumbotron>
  );
}

export default Cards;
