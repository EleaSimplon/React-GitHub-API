import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { BsSearch, BsFillLayersFill } from "react-icons/bs";
import { DiAtom } from "react-icons/di";

function NavBar () {

    return (
      
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/"><DiAtom /> React GitHub-API <DiAtom /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Card">Search User <BsSearch /></Nav.Link>
              <Nav.Link href="/CardList">Events <BsFillLayersFill /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar;