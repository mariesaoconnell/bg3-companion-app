import React from 'react';
import Create_form from '../components/Create_form';

import { Container } from 'react-bootstrap';

function Create(props) {
  return (
		<Container>
			<h1 className='text-center my-5'>Add Dialogue Scene</h1>
			<Create_form />
		</Container>
	);
}

export default Create;
