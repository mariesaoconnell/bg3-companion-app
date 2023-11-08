import React from 'react';
import Withers from '../assets/images/withers_cover.png';
import { Container, Ratio, Image } from 'react-bootstrap';

function Home(props) {
  return (
		<Container className='d-flex flex-column p-5 text-center' fluid>
			<h1 className='text-center mb-4'>
				The Ultimate Guide to your Bosom Companion's Heart
			</h1>
			<div className='d-block mx-auto' style={{ width: 1000, height: 'auto' }}>
				<Ratio aspectRatio='16x9'>
					<Image
						className='rounded'
						src={Withers}
						alt='Withers'
					/>
				</Ratio>
        <p className='mt-3'>Don't get caught in Act III getting clowned on by Withers for spending nights alone!</p>
			</div>
		</Container>
	);
}

export default Home;
