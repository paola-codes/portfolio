import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Me from "../../img/me.png";
import Tiktok from "../../img/tiktok.png";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container text-white pb-5">
      <main className="container mb-5">
        <div className="row mx-0 text-white">
          <div className="rounded bg-light bg-opacity-10 p-4 p-md-5">
            <div className="row featurette fs-2 mb-3 pb-2">
              <div className="col-md-5 text-center">
                <img className="mx-auto mb-4 w-75" src={Me}></img>
              </div>
              <div className="col-md-7 text-start">
                <h1 className="featurette-heading mb-0">Welcome to my page!</h1>
                <h2 className="my-2">
                  My name is Paola, I am front-end developer based in Florida,
                  US.
                </h2>
                <h2 className="mb-3">
                  I like to constantly learn new things and improve my coding
                  skills. I also hope to inspire more immigrant women like me to
                  join the tech industry!
                </h2>
                <h2>What I am doing right now:</h2>
                <h2 className="mb-3">
                  <ul style={{ listStyle: "none" }} className="ms-0 ps-0">
                    <li>
                      <i className="fas fa-book fs-6 me-2 " />
                      Currently working on a web app for a startup at MakeItMVP.
                    </li>
                    <li>
                      <i className="fas fa-pen fs-6 me-2" />
                      Learning Docker, Axios, and Cypress.
                    </li>
                    <li>
                      <i className="fas fa-briefcase fs-6 me-2"></i>
                      Looking for a Jr Developer job or internship.
                    </li>
                  </ul>
                </h2>
                <h2 className="m-0 mt-3">
                  Thanks for passing by
                  <i className="fas fa-heart ms-2 fs-6" />
                </h2>
              </div>
            </div>
          </div>
        </div>
        <h1 className="display-4 mt-5" id="about_me">
          Social Media
        </h1>
        <hr className="featurette-divider mt-0" />
        <div className="p-3 ps-4 p-md-4 mb-3 rounded bg-light bg-opacity-10">
          <div className="row row-cols-2 d-flex flex-row fs-2">
            <div className="col text-center">
              <a
                href="www.linkedin.com/in/paola-sanchez98"
                style={{ textDecoration: "none" }}
              >
                <span className="text-white">
                  <i className="fab fa-linkedin-in fs-4 me-2" />
                  paola-sanchez98
                </span>
              </a>
            </div>
            <div className="col text-center">
              <a
                href="https://github.com/paola-codes"
                style={{ textDecoration: "none" }}
              >
                <span className="text-white">
                  <i className="fab fa-github fs-4 me-2" />
                  paola-codes
                </span>
              </a>
            </div>
            <div className="col text-center">
              <a
                href="https://www.instagram.com/paola_codes/"
                style={{ textDecoration: "none" }}
              >
                <span className="text-white">
                  <i className="fab fa-instagram fs-4 me-2" />
                  paola_codes
                </span>
              </a>
            </div>
            <div className="col text-center">
              <a
                href="https://www.tiktok.com/@paola_codes"
                style={{ textDecoration: "none" }}
              >
                <span className="text-white">
                  <img src={Tiktok} width={20} className="me-2 mb-2" />
                  paola_codes
                </span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
