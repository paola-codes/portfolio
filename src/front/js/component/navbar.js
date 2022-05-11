import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Context } from "../store/appContext";

export const MyNavbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <Navbar
      className="bg-none pt-3 p-1 m-0 px-4 mb-3 navbarColor border-bottom"
      variant="dark"
      expand="lg"
      fixed="top"
      style={{ margin: "auto", marginTop: "10%" }}
    >
      <Container fluid className="m-0 p-0">
        <Navbar.Brand>
          <Link to="/" className="text-decoration-none text-white">
            <h1 className="d-inline-flex align-center text-white p-0 m-0 pt-1">
              Paola Sanchez's Portfolio
            </h1>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav text-white" />
        <Navbar.Collapse id="basic-navbar-nav text-white">
          <Nav className="ms-auto fs-2">
            <Link to="/" className="text-decoration-none text-white me-3">
              <Nav.Item>Home</Nav.Item>
            </Link>
            <Link
              to="/aboutMe"
              className="text-decoration-none text-white me-3"
            >
              <Nav.Item>About Me</Nav.Item>
            </Link>
            <Link to="/skills" className="text-decoration-none text-white me-3">
              <Nav.Item>Skills</Nav.Item>
            </Link>
            <Link
              to="/projects"
              className="text-decoration-none text-white me-3"
            >
              <Nav.Item>Projects</Nav.Item>
            </Link>
            <Link
              to="/contactMe"
              className="text-decoration-none text-white me-3"
            >
              <Nav.Item>Contact Me</Nav.Item>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
