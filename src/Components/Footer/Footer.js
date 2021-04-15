import React from "react";
import "../Footer/Footer.css";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import Mailchimp from "../Mailchimp/Mailchimp";
import logo from "../Pictures/newsletter-kikamba.svg";
var date = new Date();
var year = date.getFullYear();

export default function Footer() {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container text-center">
          <div className="row">
            <div className="text-center col-sm-6 col-xs-12">
              <img
                alt="logo"
                className="img-fluid"
                src={logo}
                style={{ height: "160px" }}
              ></img>
              <h6 className="text">Signup to our newsletter</h6>
              <Mailchimp />
            </div>

            <div
              style={{ marginTop: "10rem" }}
              className="col-sm-6 col-xs-12 item-align-center"
            >
              <h5 style={{ color: "#df7142" }} className="text-center">
                Find us on Facebok or Instagram!
              </h5>
              <a href="https://www.facebook.com/One-Day-Kikamba-2354147188201977/">
                <i className="icon">
                  <FiFacebook />{" "}
                </i>
              </a>
              <a href="https://instagram.com/onedaykikamba?igshid=rru5ct0381yl">
                <i className="icon">
                  {" "}
                  <FiInstagram />{" "}
                </i>
              </a>
              <p className="text-center ">Or e-mail us!</p>
              <i className="text-center py-0">
                <HiOutlineMailOpen /> onedaykikamba@gmail.com
              </i>
            </div>
          </div>
          <p className="copyright">One Day Kikamba © {year} </p>
        </div>
      </footer>
    </div>
  );
}
