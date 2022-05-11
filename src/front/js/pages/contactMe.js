import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { ContactForm } from "../component/contactForm";

export const ContactMe = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container text-white pb-5">
      <main className="container mb-5">
        <h1 className="display-4" id="contact_me">
          Contact Me
        </h1>
        <hr className="featurette-divider mt-0" />
        <ContactForm />
      </main>
    </div>
  );
};
