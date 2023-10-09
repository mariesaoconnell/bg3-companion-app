import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';

function NavigationBar(props) {
  return (
    <Navbar expand='lg'>
      <Container>
        <Navbar.Brand href='/'>Baldur's Gate Companion App</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse>
          <Nav className='me-auto'>
            <Nav.Link href='/home'>Home</Nav.Link>
            <Nav.Link href='/create'>Create</Nav.Link>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
