import React from 'react';
import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';

function NavigationBar(props) {
  return (
    <Navbar expand='lg'>
      <Container>
        <Navbar.Brand href='/'>Baldur's Gate Companion App</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/create'>Create</Nav.Link>
            <NavDropdown title="Search By">
              <NavDropdown.Item href='/search/act'>Act</NavDropdown.Item>
              <NavDropdown.Item href='/search/companion'>Companion</NavDropdown.Item>
              <NavDropdown.Item href='/search/view-all'>View All Approvals</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
