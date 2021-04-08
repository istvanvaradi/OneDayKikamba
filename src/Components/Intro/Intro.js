import react from "react";
import { Row } from "react-bootstrap";
import styles from "./Intro.css";
import Cindy from "../Pictures/Cindy.png";
import Lara from "../Pictures/Lara.png";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

function Intro() {
  return (
    <div>
      <Row className=" text-center m-5">
        <div className="col-sm-6  col-xs-12">
          <h1 className="text-center m-5">
            <FaQuoteRight />
            <h1>Cindy</h1>
          </h1>

          <h4 className="text-center m-5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.{" "}
          </h4>
        </div>
        <div className="col-sm-6 col-xs-12">
          <img src={Cindy} className="img-fluid rounded shadow-lg " />
        </div>
      </Row>
      <Row className=" text-center m-5">
        <div className="col-sm-6 col-xs-12">
          <img src={Lara} className="img-fluid rounded shadow-lg " />
        </div>
        <div className="col-sm-6  col-xs-12">
          <h1 className="text-center m-5">
            {" "}
            <FaQuoteLeft />
          </h1>
          <h1>Lara</h1>
          <h4 className="m-5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.{" "}
          </h4>
        </div>
      </Row>
    </div>
  );
}

export default Intro;
