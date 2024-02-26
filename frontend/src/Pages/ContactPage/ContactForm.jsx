import React from "react";
import Button from "../../Components/Button";

const ContactForm = () => {
  return (
    <form action="post">
      <div className="form-input">
        <label htmlFor="">Full name*</label>
        <input type="text" />
      </div>
      <div className="form-input">
        <label htmlFor="">E-mail*</label>
        <input type="email" />
      </div>
      <div className="form-input">
        <label htmlFor="">Message*</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div className="button-con">
        <Button class="primary" text="Submit" />
      </div>
    </form>
  );
};

export default ContactForm;
