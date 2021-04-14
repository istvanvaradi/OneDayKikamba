import React from "react";
import "./Donate.css";
import DonateIMG from "../Pictures/donate.icon.webp";

function Donate() {
  return (
    <div id="donate" className="row text-center m-5 ">
      <div className="col-sm-6 col-xs-12">
        <h3>Bank Account </h3>
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
          <p>Click the PayPal icon to pay directly</p>
          <input type="hidden" name="hosted_button_id" value="U5EMFE7QR6RTL" />
          <input
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
    </div>
  );
}

export default Donate;
