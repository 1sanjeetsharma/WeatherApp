import Container from "react-bootstrap/Container";
import { myContext } from "./App";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import Add from "./Add";
// import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
    const { Loguser, setloguser } = useContext(myContext);
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Welcome, {Loguser.name}</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">WeatherApi</Nav.Link>
                        <Nav.Link href="#action2">App</Nav.Link>
                    </Nav>
                    <Add />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
