import React from "react";
import ContactForm from "./ContactForm";
import SocialElement from "./SocialElement";
import NeonLight from "../../Components/NeonLight";
import { Envelope, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";

const ContactPage = () => {
  return (
    <section>
      <div id="contact" className="contact-con">
        <NeonLight />

        <div className="contact">
          <div className="main-heading">
            <h2>Contact</h2>
          </div>
          <div className="content-con">
            <div className="info-con">
              <div className="header-con">
                <div className="heading">
                  <h3>Drop Me a Message</h3>
                </div>
                <div className="sub-heading">
                  <p>
                    Let’s discuss on something <span>cool</span> together
                  </p>
                </div>
              </div>
              <div className="socials-con">
                <SocialElement
                  svg={<Envelope size={35} color="#fff" />}
                  data="mkocik.dev@gmail.com"
                />
                <SocialElement
                  svg={<WhatsappLogo size={35} color="#fff" />}
                  data="+44 7496481135"
                />
                <a href="https://www.instagram.com/mikekdevv/" target="_blank">
                  <SocialElement
                    svg={<InstagramLogo size={35} color="#fff" />}
                    data="mikekdevv"
                    link=""
                  />
                </a>
              </div>
            </div>
            <div className="form-con">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
