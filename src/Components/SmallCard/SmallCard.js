import React from "react";
import { Card } from "react-bootstrap";
import Superhero from "../Pictures/IMG_0120.jpg";
import image1 from "../Pictures/resized_img/child_group.png";
import image2 from "../Pictures/resized_img/superman.jpg";
import image3 from "../Pictures/Games.JPG";
import "../SmallCard/SmallCard.css";
function SmallCard() {
  return (
    <div>
      <h1 className="text-center py-5" style={{ color: "#df7142" }}>
        You can help them to become heroes at school!{" "}
      </h1>
      <div className="d-flex justify-content-around m-5">
        <div className="row">
          <div className="col-sm-6 col-md-3 d-flex justify-content-around">
            <Card
              className="card "
              style={{ width: "12rem" }}
              data-aos="slide-right"
            >
              <Card.Img variant="top" src={image1} />
              <Card.Body className="cardB"></Card.Body>
            </Card>
          </div>
          <div className="col-sm-6 col-md-3 d-flex justify-content-center">
            <Card
              data-aos="fade-in"
              className="card"
              style={{ width: "12rem" }}
            >
              <Card.Img variant="top" src={Superhero} />
              <Card.Body></Card.Body>
            </Card>
          </div>{" "}
          <div className="col-sm-6 col-md-3 d-flex justify-content-center">
            <Card
              data-aos="fade-in"
              className="card"
              style={{ width: "12rem" }}
            >
              <Card.Img className="rounded" variant="top" src={image2} />
              <Card.Body></Card.Body>
            </Card>
          </div>{" "}
          <div className="col-sm-6 col-md-3 d-flex justify-content-center">
            <Card
              className="card"
              style={{ width: "12rem" }}
              data-aos="slide-left"
            >
              <Card.Img variant="top" src={image3} />
              <Card.Body></Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallCard;
