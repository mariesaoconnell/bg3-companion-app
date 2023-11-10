import React, { useState } from 'react';
import Create_form from '../components/Create_form';
import SuccessMessage from '../components/user_messages/SuccessMessage';
import FailedMessage from '../components/user_messages/FailedMessage';
import { Container } from 'react-bootstrap';


function Create(props) {
	const [submitted, setSubmitted] = useState(false);

  return (
		<Container>


			{submitted === false ?
				(<>
					<h1 className='text-center my-5'>Add Dialogue Scene</h1>
					<Create_form setSubmitted={setSubmitted} />
				</> ) :

				(<>
					<SuccessMessage setSubmitted={setSubmitted}/>
				</>)

			}
		</Container>
	);
}

export default Create;
