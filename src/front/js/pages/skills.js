import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Skills = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container text-white pb-5">
      <main className="container mb-5">
        <h1 className="display-4" id="about_me">
          Skills
        </h1>
        <hr className="featurette-divider mt-0" />
        <div className="p-4 p-md-5 mb-3 rounded bg-light bg-opacity-10 mb-5">
          <table className="table bg-none fs-2 fs-md-1 text-white text-start table-borderless">
            <tbody>
              <tr>
                <td>JavaScript</td>
                <td>REST APIs</td>
                <td>{"Python & Flask"}</td>
              </tr>
              <tr>
                <td>{"HTML/CSS"}</td>
                <td>{"GIT & Figma"}</td>
                <td>{"SQLAlchemy & MongoDB"}</td>
              </tr>
              <tr>
                <td>{"Bootstrap & Material UI"}</td>
                <td>{"React & JQuery"}</td>
                <td>{"Collaboration & Communication"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};
