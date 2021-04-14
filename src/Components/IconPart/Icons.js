import React from "react";
import { IoMdSchool } from "react-icons/io";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import Style from "./Icons.css";
function Icons(props) {
  return (
    <div className="d-flex justify-content-evenly row ikonok">
      <div className="col-md-4 text-center ">
        {" "}
        <IoMdSchool className="icon" size="5em" /> <h3>Education</h3>
        <p>We try to provide quality education for young people of Kikamba.</p>
      </div>
      <div className="col-md-4 text-center">
        <FaRegMoneyBillAlt className="icon" size="5em" />
        <h3>Finances</h3>
        <p>
          Any financial support means a lot. We try to provide all the knowledge
          we can, but we need help to be able to buy books and school
          properties.
        </p>
      </div>
      <div className="col-md-4 text-center">
        <IoFastFoodSharp className="icon" size="5em" />
        <h3>Food&Water</h3>
        <p className="text-center">
          We helped to build a will, that gave water to local people of Kikamba.
        </p>
      </div>
    </div>
  );
}

export default Icons;

/* <IoMdSchool className="icon" size="5em" />
<FaRegMoneyBillAlt className="icon" size="5em" />

<IoFastFoodSharp className="icon" size="5em" /> */
