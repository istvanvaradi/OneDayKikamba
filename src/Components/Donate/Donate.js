import React from "react";
import "./Donate.css";
import DonateIMG from "../Pictures/donate.icon.webp";

function Donate() {
  return (
    <div id="donate" className="row text-center ">
      <div className="col-sm-6 col-xs-12">
        <h2 style={{ color: "#df7142" }}>For Regular Bank transfers</h2>
        One Day Kikamba
        <br /> 1630 Bulle <br />
        Switzerland <br />
        <br />
        CH97 0900 0000 1527 2878 0 <br />
        Postfinance SA Mingerstrasse 20
        <br /> 3030 Bern
        <br /> Switzerland
      </div>
      <div className="col-sm-6 col-xs-12">
        <form
          className="payform"
          action="https://www.paypal.com/donate"
          method="post"
          target="_top"
        >
          <h2 className="text-center mt-3" style={{ color: "#df7142" }}>
            Or Click the PayPal image
          </h2>
          <input type="hidden" name="hosted_button_id" value="U5EMFE7QR6RTL" />
          <input
            data-aos="slide-left"
            type="image"
            src={DonateIMG}
            border="0"
            className="img-fluid py-0"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
          />
          <img
            alt=""
            className=""
            border="0"
            src="https://www.paypal.com/en_CH/i/scr/pixel.gif"
            width=""
            height="1"
          />
        </form>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-xl-12">
            <h2 className="text-center">
              In case of any non-money donation idea send us an e-mail!
            </h2>
          </div>
          <div className="col-xl-12 mt-5">
            <a className="btncontact" href="mailto:onedaykikamba@gmail.com">
              E-mail Us!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate;
