import {
  Nav,
  Navbar,
  NavDropdown,
  Container,
} from "react-bootstrap";
import "./NavBar.scss";
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <> 
      <Navbar bg="navbar" expand="xl" sticky="top" className="navbar">
        <Navbar.Brand href="#home">
          <Link to="/" children={""}
          />

        </Navbar.Brand>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                {" "}
                <Link to="/" children={"Home"} />
              </Nav.Link>
              <Nav.Link>
                <Link to="/booking" children={"Agendamento"} />
              </Nav.Link>
              <Nav.Link>
                <Link to="/patient" children={"Paciente"} />
              </Nav.Link>
              <Nav.Link>
                <Link to="/consult" children={"Consulta"} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
