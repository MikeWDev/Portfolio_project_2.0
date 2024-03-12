import React, { useState } from "react";
import Button from "../../Components/Button";
import usePopUp from "../../Hooks/usePopUp";
import PopUp from "../../Components/PopUp";
const ContactForm = () => {
  const { popUp, visible, setVisible, setPopUp } = usePopUp();
  const [messageData, setMessageData] = useState({
    name: "",
    eMail: "",
    message: "",
  });
  function handlePopUp() {
    setVisible("visible-pop-up");
    setPopUp("ani");

    setTimeout(() => {
      setPopUp("");
      setVisible("opacity-pop-up");
    }, 4000);
  }
  const changeHandler = (e) => {
    setMessageData({ ...messageData, [e.target.name]: e.target.value });
  };

  const sendMessage = async () => {
    await fetch("http://localhost:3000/sendmessage", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(messageData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.succes) {
          handlePopUp();
          setMessageData({
            name: "",
            eMail: "",
            message: "",
          });
        } else {
          alert("Failed");
        }
      });
  };

  return (
    <div className="form">
      <div className="form-input">
        <label htmlFor="">Full name*</label>
        <input
          required
          onChange={changeHandler}
          value={messageData.name}
          name="name"
          type="text"
        />
      </div>
      <div className="form-input">
        <label htmlFor="">E-mail*</label>
        <input
          required
          onChange={changeHandler}
          value={messageData.eMail}
          name="eMail"
          type="email"
        />
      </div>
      <div className="form-input">
        <label htmlFor="">Message*</label>
        <textarea
          required
          onChange={changeHandler}
          value={messageData.message}
          name="message"
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div className="button-con">
        <Button
          class="primary"
          text="Submit"
          function={() => {
            sendMessage();
          }}
        />
      </div>
      <PopUp aniClass={popUp} visClass={visible} />
    </div>
  );
};

export default ContactForm;
