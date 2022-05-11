import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const AboutMe = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container text-white pb-5" style={{ height: "77vh" }}>
      <main className="container mb-5 pb-5">
        <h1 className="display-4" id="about_me">
          About Me
        </h1>
        <hr className="featurette-divider mt-0" />
        <div className="p-4 p-md-5 mb-3 rounded bg-light bg-opacity-10">
          <h2 className="mb-3">
            <i className="fas fa-laptop-code fs-6 me-2"></i>I am a front-end
            developer who is very fond of JavaScript and React.
          </h2>
          <h2 className="mb-3">
            <i className="fas fa-plane-departure fs-6 me-2"></i>Back in 2016, I
            came to the United States from Venezuela, and I am eternally
            grateful for what this country has given me and allowed me to
            achieve.
          </h2>
          <h2 className="mb-0">
            <i className="fas fa-chalkboard-teacher fs-6 me-2"></i>Currently, I
            am collaborating in a cool startup project at MakeItMVP, and as a
            mentor at 4Geeks Academy, the coding bootcamp that gave me the
            foundations and support to start my new career.
          </h2>
        </div>
      </main>
    </div>
  );
};
