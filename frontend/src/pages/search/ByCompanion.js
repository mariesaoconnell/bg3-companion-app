import React, {useState} from 'react';
import {Form, Container, Button} from 'react-bootstrap';

function ByCompanion(props) {

  const [companions, SetCompanions] = useState({
    companion: []
  })

      const onChange = (event) => {
				const { name, value, type } = event.target;

				if (type === 'checkbox') {
					const newArray = [...companions[name], value];
					if (companions[name].includes(value)) {
						const valueIndex = companions[name].indexOf(value);
						newArray.splice(valueIndex, 1);
					}
					SetCompanions((prevState) => ({ ...prevState, [name]: newArray }));
				} else {
					SetCompanions((prevState) => ({ ...prevState, [name]: value }));
				}
			};

			const onSubmit = (event) => {
				event.preventDefault();
				console.log(companions);
				// Here you can handle the submission (e.g., send the formData to an API)
			};

  return (
		<div>
			<h1>Search By Companion</h1>
			<Container className='d-flex justify-content-center'>
				<Form onSubmit={onSubmit}>
					<Form.Group>
						<Form.Label>Search by Companion(s):</Form.Label>
						<Container>
							<Form.Check
								inline
								label='Astarion'
								value='1'
								name='companion'
								type='checkbox'
								className='checkbox-approval'
								onChange={onChange}
							/>
							<Form.Check
								inline
								label='Gale'
								value='2'
								name='companion'
								type='checkbox'
								className='checkbox-approval'
								onChange={onChange}
							/>
							<Form.Check
								inline
								label='Karlach'
								value='3'
								name='companion'
								type='checkbox'
								className='checkbox-approval'
								onChange={onChange}
							/>
							<Form.Check
								inline
								label='Shadowheart'
								value='4'
								name='companion'
								type='checkbox'
								className='checkbox-approval'
								onChange={onChange}
							/>
							<Form.Check
								inline
								label="Lae'zel"
								value='6'
								name='companion'
								type='checkbox'
								className='checkbox-approval'
								onChange={onChange}
							/>
							<Form.Check
								inline
								label='Halsin'
								value='8'
								name='companion'
								type='checkbox'
								className='checkbox-approval'
								onChange={onChange}
							/>
							<Form.Check
								inline
								label='Wyll'
								value='5'
								name='companion'
								type='checkbox'
								className='checkbox-approval'
								onChange={onChange}
							/>
							<Form.Check
								inline
								label='Minthara'
								value='7'
								name='companion'
								type='checkbox'
								className='checkbox-approval'
								onChange={onChange}
							/>
          <Button variant='primary' type='submit'>Search</Button>
						</Container>
					</Form.Group>
				</Form>
			</Container>
		</div>
	);
}

export default ByCompanion;
