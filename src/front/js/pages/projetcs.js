import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import RecipeDiary from "../../img/RecipeDiary.png";
import SalesOrganizer from "../../img/SalesOrganizer.png";
import RoadBros from "../../img/RoadBros.png";

export const Projects = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container text-white pb-5">
      <main className="containe mb-5">
        <h1 className="display-4" id="projects">
          Projects
        </h1>
        <hr className="featurette-divider mt-0" />
        <div className="rounded bg-light bg-opacity-10 p-4 p-md-5">
          <div className="row featurette fs-2">
            <div className="col-md-7">
              <h1 className="featurette-heading mb-0">
                <i className="fas fa-road fs-5 me-2"></i>RoadBros
              </h1>
              <span className="fs-2 fst-italic">
                "The road assistance app."
              </span>
              <h2 className="my-2">
                Roadside assistance app that allows users to be clients or
                truckers, add vehicles, make service requests, view past
                services, and manage current ones.
              </h2>
              <h2 className="mt-3">
                Made with: JavaScript, React, Bootstrap, SQLAlchemy, and Flask.
              </h2>
              <a
                href="https://github.com/paola-codes/RoadBros.git"
                style={{ textDecoration: "none", color: "white" }}
              >
                <h3 className="mb-1">
                  <i className="fas fa-link fs-6 me-2" />
                  GitHub Repo
                </h3>
              </a>
              <a
                href="https://roadbros.herokuapp.com/"
                style={{ textDecoration: "none", color: "white" }}
              >
                <h3 className="mb-4">
                  <i className="fas fa-play fs-6 me-2" />
                  Try it out!
                </h3>
              </a>
            </div>
            <div className="col-md-5">
              <img className="img-fluid" src={RoadBros}></img>
            </div>
          </div>

          <hr className="featurette-divider my-4" />
          <div class="row featurette mt-4 pt-4">
            <div class="col-md-7 order-md-2">
              <h1 className="featurette-heading mb-0">
                <i className="fas fa-address-book fs-5 me-2"></i>SalesOrganizer
              </h1>
              <span className="fs-2 fst-italic">
                "Tracking deals and contacts made simple."
              </span>
              <h2 className="my-2">
                Tool to create, view, edit, filter, and delete customers. You
                can also update the sale statuses of each customer to track
                progress.
              </h2>
              <h2 className="mt-3">
                Made with: JavaScript, React, Bootstrap, SQLAlchemy, and Flask.
              </h2>
              <a
                href="https://github.com/paola-codes/SalesOrganizer.git"
                style={{ textDecoration: "none", color: "white" }}
              >
                <h3 className="mb-1">
                  <i className="fas fa-link fs-6 me-2" />
                  GitHub Repo
                </h3>
              </a>
              <a
                href="https://salesorganizer.herokuapp.com/"
                style={{ textDecoration: "none", color: "white" }}
              >
                <h3 className="mb-4">
                  <i className="fas fa-play fs-6 me-2" />
                  Try it out!
                </h3>
              </a>
            </div>
            <div className="col-md-5 order-md-1">
              <img className="img-fluid" src={SalesOrganizer}></img>
            </div>
          </div>

          <hr className="featurette-divider my-4" />
          <div className="row featurette mt-4 pt-4">
            <div className="col-md-7">
              <h1 className="featurette-heading mb-0">
                <i className="fas fa-book fs-5 me-2"></i>RecipeDiary
              </h1>
              <span className="fs-2 fst-italic">
                "Keep all your personal recipes in one place"
              </span>
              <h2 className="my-2">
                App to create, view, edit, delete, and filter all your favorite
                own recipes.
              </h2>
              <h2 className="mt-3">
                Made with: JavaScript, React, Bootstrap, SQLAlchemy, and Flask.
              </h2>
              <a
                href="https://github.com/paola-codes/RecipeDiary.git"
                style={{ textDecoration: "none", color: "white" }}
              >
                <h3 className="mb-1">
                  <i className="fas fa-link fs-6 me-2" />
                  GitHub Repo
                </h3>
              </a>
              <a
                href="https://recipediary1.herokuapp.com/"
                style={{ textDecoration: "none", color: "white" }}
              >
                <h3 className="mb-4">
                  <i className="fas fa-play fs-6 me-2" />
                  Try it out!
                </h3>
              </a>
            </div>
            <div className="col-md-5">
              <img className="img-fluid" src={RecipeDiary}></img>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
