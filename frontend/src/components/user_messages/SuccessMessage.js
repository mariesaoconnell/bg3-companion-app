import React, { useEffect } from 'react';
import CritSuccess from '../../assets/images/critical_success.png';
import { Container } from 'react-bootstrap';

function SuccessMessage({ setSubmitted }) {

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setSubmitted(false);
		}, 10000);

		return () => clearTimeout(timeoutId);
	}, [setSubmitted]);

	return (
		<Container className='d-flex justify-content-center'>
			<img
				src={CritSuccess}
				style={{ height: 500 }}
				alt='Critical Success: Dialogue Submitted'
			/>
		</Container>
	);
}

export default SuccessMessage;
