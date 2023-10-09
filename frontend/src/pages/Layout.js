import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavigationBar from '../components/NavigationBar';
function Layout(props) {
  return (
		<Container>
			<NavigationBar />

      <Container>
			  <Outlet />
      </Container>
		</Container>
	);
}

export default Layout;
