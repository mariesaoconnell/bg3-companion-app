import React from 'react';
import Withers from '../assets/images/withers_cover.png';
import { Container, Ratio, Image } from 'react-bootstrap';

function Home(props) {
  return (
		<Container className='d-flex flex-column text-center' fluid>
			<h1 className='text-center mb-4' style={{fontSize: 50}}>
				Snaring your Bosom Companion's heart is just a swipe away!
			</h1>
			<Container className='d-block mx-auto' >
				<Ratio aspectRatio='16x9'>
					<Image
						className='rounded'
						src={Withers}
						alt='Withers'
					/>
				</Ratio>
        <p className='mt-3'>Long gone are the nights spent on the cold, hard camp floor. <br/> With Cinder and Withers as your wingman, you'll never have to worry about a cold sleeping bag!</p>
			</Container>
		</Container>
	);
}

export default Home;
