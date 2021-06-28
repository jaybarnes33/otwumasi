import { useState } from "react";
import { Image, Container, Navbar, Nav, Button } from "react-bootstrap";
import Link from "next/link";

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const [dark, setDark] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleToggle = () => {
    setDark(!dark);
    dark
      ? (document.documentElement.style.setProperty("--main-color", "#1e212d"),
        document.documentElement.style.setProperty("--text", "#f4f4f4"))
      : (document.documentElement.style.setProperty("--main-color", "#f4f4f4"),
        document.documentElement.style.setProperty("--text", "#1e212d"));
  };
  return (
    <header>
      <Navbar expand="lg" collapseOnSelect fixed="top">
        <Container>
          <Link href="/">
            <a>
              <Navbar.Brand>
                <Image className="logo" src="/images/dash.svg" />
              </Navbar.Brand>
            </a>
          </Link>
          <span
            className="btn-sm  toggler"
            onClick={(e) => {
              handleToggle();
            }}
          >
            <i className={`bi ${dark ? "bi-moon-fill" : "bi-sun-fill"}`}></i>
          </span>
          <Navbar.Toggle
            // className="form-control"
            style={{ maxWidth: "50px" }}
            aria-controls="navbar-nav"
            onClick={handleClick}
          >
            {!clicked ? (
              <i className="bi bi-filter-right"></i>
            ) : (
              <i className="bi bi-backspace"></i>
            )}
          </Navbar.Toggle>{" "}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link as={Link} href="#home">
                  <a>Home</a>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} href="#about">
                  <a>About</a>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} href="#services">
                  <a>Services</a>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} href="#skills">
                  <a>Skills</a>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} href="#projects">
                  <a>Projects</a>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
