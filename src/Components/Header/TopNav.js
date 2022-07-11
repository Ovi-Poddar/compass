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

import { useNavigate } from "react-router-dom";

export default function TopNav() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <LinkContainer to={"/"}>
            <Navbar.Brand className="text-danger" href="/">
              <i className="bi bi-compass font-weight-bold"></i> Compass
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
              <i className="bi bi-search"></i>
            </Button>
          </Form>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/*               
              <Nav.Link href="/createbusiness">Create Business</Nav.Link> */}
              {/* <Nav.Link href="/contact">Contact Us</Nav.Link> */}
            </Nav>
            <LinkContainer to={"/createbusiness"}>
              <Button variant="info " className="me-2" role="button">
                Create Business
              </Button>
            </LinkContainer>

            {!localStorage.getItem("token") ? ( // if user is not logged in
              <>
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
              </>
            ) : (
              <Button variant="danger" className="me-2 " onClick={handleLogout}>
                Log Out
              </Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="d-flex justify-content-center">
        <DropdownButton
          id="dropdown-basic-button"
          title="Restaurent"
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
