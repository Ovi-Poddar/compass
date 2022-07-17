import React from "react";

import {
  Nav,
  Navbar,
  Button,
  Form,
  FormControl,
  Container,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function TopNav() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <LinkContainer to={"/"}>
            <Navbar.Brand className="text-danger" href="/">
              <i class="bi bi-compass font-weight-bold"></i> Compass
            </Navbar.Brand>
          </LinkContainer>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="danger">
              <i class="bi bi-search"></i>
            </Button>
          </Form>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
            {/* link to login, signup and business homepage */}
            <LinkContainer to={"/businesshome"}>
              <Button variant="Dark" className="me-2" role="button">
                Business
              </Button>
            </LinkContainer>
            <LinkContainer to={"/login"}>
              <Button variant="success " className="me-2" role="button">
                Log In
              </Button>
            </LinkContainer>
            <LinkContainer to={"/signup"}>
              <Button variant="danger" className="me-2">
                Sign Up
              </Button>
            </LinkContainer>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="d-flex justify-content-center">
        <DropdownButton
          id="dropdown-basic-button"
          title="Restaurant"
          className="me-2"
          variant="light"
        >
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <DropdownButton
          id="dropdown-basic-button"
          title="Home Service"
          className="me-2"
          variant="light"
        >
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <DropdownButton
          id="dropdown-basic-button"
          title="Auto Serivice"
          className="me-2"
          variant="light"
        >
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <DropdownButton
          id="dropdown-basic-button"
          title="More"
          className="me-2"
          variant="light"
        >
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      </div>
    </>
  );
}
