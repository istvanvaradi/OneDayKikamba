import React from "react";
import Mailchimp from "react-mailchimp-form";
import "./Mailchimp.css";

export default function Signup() {
  return (
    <div className="container text-center" id="mail">
      <Mailchimp
        className="chimpClass"
        action={process.env.REACT_APP_MAILCHIMP_KEY}
        method="post"
        fields={[
          {
            name: "EMAIL",
            placeholder: "E-mail",
            type: "email",
            required: true,
          },
          {
            name: "FNAME",
            placeholder: "Name",
            type: "text",
            required: true,
          },
        ]}
        // Change predetermined language
        messages={{
          sending: "Sending...",
          success: "Thank you for subscribing!",
          error: "An unexpected internal error has occurred.",
          empty: "It was not an email/typo",
          duplicate: "You already have subscribed",
          button: "Sign up!",
        }}
      />
    </div>
  );
}
