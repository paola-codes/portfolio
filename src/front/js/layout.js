import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";

import { AboutMe } from "./pages/aboutMe";
import { Skills } from "./pages/skills";
import { Projects } from "./pages/projects";
import { ContactMe } from "./pages/contactMe";

import injectContext from "./store/appContext";

import { MyNavbar } from "./component/navbar";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <MyNavbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/aboutMe">
              <AboutMe />
            </Route>
            <Route exact path="/skills">
              <Skills />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/contactMe">
              <ContactMe />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
