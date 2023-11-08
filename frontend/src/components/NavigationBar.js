import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';

function NavigationBar(props) {
  return (
		<Navbar expand='lg'>
			<Container>
				<Navbar.Brand href='/'>Finding Love in Faerûn</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse>
				<Container className='d-flex justify-content-evenly'>
					<Nav className='me-auto'>
						<Nav.Link href='/'>Home</Nav.Link>
						<Nav.Link href='/create'>Create</Nav.Link>
						<Nav.Link href='/search/act'>Act</Nav.Link>
						<Nav.Link href='/search/companion'>
							Companion
						</Nav.Link>
						<Nav.Link href='/search/view-all'>
							View All Approvals
						</Nav.Link>
					</Nav>
				</Container>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavigationBar;
