import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// Navbar component based on React Bootstrap documentation on GitHub - https://react-bootstrap.github.io/components/navbar/
// NavDropdown deleted.
export default class navbar extends React.Component {
    render() {     
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Town School Login</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#help">Help</Nav.Link>
         </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );//end return
}//end render
}//end export
