
import { Nav, Navbar, NavDropdown, Container, Button, Stack } from 'react-bootstrap';
import "./NavBar.scss"
import { Link } from 'react-router-dom'
export const NavBar = () => {
    return (
        <>

            <Navbar bg="navbar" expand="xl" sticky="top" className='navbar'>
                "Nav icon = Home"
                <Container>
                    {/* Adicionar um logo fixo */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link > <Link to="/" children={"Home"} /></Nav.Link>
                            <Nav.Link><Link to="/boking" children={"Agendamento"} /></Nav.Link>
                            <Nav.Link>
                                <Link to="/consult" children={"Consulta"} />
                            </Nav.Link>

                        </Nav>
                        <Nav className=''>
                            <NavDropdown title="Login" id="basic-nav-dropdown" className='justify-content-end flex-grow-1 pe-3'>
                                <NavDropdown.Item>
                                    Input Login
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Input Password</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Input Button Submit</NavDropdown.Item>

                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}
