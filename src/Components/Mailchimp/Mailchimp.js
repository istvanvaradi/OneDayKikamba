import React from "react";
import Mailchimp from "react-mailchimp-form";
import "./Mailchimp.css";
export default function Signup() {
  return (
    <div id="mail">
      <Mailchimp
        className="chimpClass"
        action="https://gmail.us1.list-manage.com/subscribe/post?u=000b00127b20cf333b72a70d6&amp;id=f222248094"
        method="post"
        fields={[
          {
            name: "EMAIL",
            placeholder: "Email",
            type: "email",
            required: true,
          },
          {
            name: "FNAME",
            placeholder: "name",
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
          button: "Sign",
        }}
      />
    </div>
  );
}
