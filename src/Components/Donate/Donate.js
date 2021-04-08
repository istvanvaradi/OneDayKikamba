import React from "react";
import "./Donate.css";
import DonateIMG from "../Pictures/donate.icon.png";
import OtherOptions from "./OtherOptions";

function Donate() {
  return (
    <div className="py-5 ml-5">
      <br />
      <div className="row">
        <div className="col-sm-6 col-xs-12 ">
          <OtherOptions className=""></OtherOptions>
        </div>
        <div className="col-sm-6 col-xs-12">
          <form
            action="https://www.paypal.com/donate"
            method="post"
            target="_top"
          >
            <input
              type="hidden"
              name="hosted_button_id"
              value="4NX4U9JSQ29HG"
            />
            <input
              type="image"
              src={DonateIMG}
              border="0"
              name="submit"
              className="img-fluid"
              title="PayPal - The safer, easier way to pay online!"
              alt="Donate with PayPal button"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypal.com/en_HU/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Donate;
