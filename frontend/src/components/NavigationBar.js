import React from 'react';
import {Nav, Navbar, Container, Image} from 'react-bootstrap';
import '../styles/navigation.css';
import Logo from '../assets/images/cinder_logo.png';

function NavigationBar(props) {
  return (
		<Navbar expand='lg' className='main-navbar pb-3 ' >
			<Container>
				<Navbar.Brand href='/'>
					<Image src={Logo} style={{ height: 75 }} />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse>
					<Container className=''>
						<Nav className='me-auto d-flex justify-content-evenly'>
							<Nav.Link href='/' className='nav-text'>
								Home
							</Nav.Link>
							<Nav.Link href='/create' className='mx-4 nav-text'>
								Create
							</Nav.Link>
							<Nav.Link href='/search/act' className='mx-4 nav-text'>
								Act 🔎
							</Nav.Link>
							<Nav.Link href='/search/companion' className='mx-4 nav-text'>
								Companion 🔎
							</Nav.Link>
							<Nav.Link href='/search/view-all' className='mx-4 nav-text'>
								View All Approvals 🔎
							</Nav.Link>
						</Nav>
					</Container>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavigationBar;
