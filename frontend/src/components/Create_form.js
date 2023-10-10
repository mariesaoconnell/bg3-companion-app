import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function Create_form(props) {
	const [formData, setFormData] = useState({
		approve: [],
		disapprove: [],
		act_id: '',
		region_id: '',
		dialogue: '',
		dialogue_details: '',
		additional_details: '',
	});

	const onChange = (event) => {
		const { name, value, type } = event.target;

		if (type === 'checkbox') {
			const newArray = [...formData[name], value];
			if (formData[name].includes(value)) {
				const valueIndex = formData[name].indexOf(value);
				newArray.splice(valueIndex, 1);
			}
			setFormData((prevState) => ({ ...prevState, [name]: newArray }));
		} else {
			setFormData((prevState) => ({ ...prevState, [name]: value }));
		}
	};

	const submitData = async (data) => {
		try {
			const response = await fetch('http://localhost:3006/create-approval', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				// If HTTP status is not in the 200-299 range
				// Try to parse it as text for an error message, then throw it
				const errorMessage = await response.text();
				throw new Error(errorMessage);
			}

			// Handle response accordingly, maybe set some state or show a message
		} catch (error) {
			console.error('Error submitting data:', error);
			// Handle errors accordingly, maybe set some state or show an error message
		}
	};

	const onSubmit = (event) => {
		event.preventDefault();
		// Here you can handle the submission (e.g., send the formData to an API)
		submitData(formData);
	};

	return (
		<Form onSubmit={onSubmit}>
			<Form.Group>
				<Form.Label>Companions Who Approve:</Form.Label>
				<Container>
					<Form.Check
						inline
						label='Astarion'
						value='1'
						name='approve'
						type='checkbox'
						className='checkbox-approval'
						onChange={onChange}
					/>
					<Form.Check
						inline
						label='Gale'
						value='2'
						name='approve'
						type='checkbox'
						className='checkbox-approval'
						onChange={onChange}
					/>
					<Form.Check
						inline
						label='Karlach'
						value='3'
						name='approve'
						type='checkbox'
						className='checkbox-approval'
						onChange={onChange}
					/>
					<Form.Check
						inline
						label='Shadowheart'
						value='4'
						name='approve'
						type='checkbox'
						className='checkbox-approval'
						onChange={onChange}
					/>
					<Form.Check
						inline
						label="Lae'zel"
						value='6'
						name='approve'
						type='checkbox'
						className='checkbox-approval'
						onChange={onChange}
					/>
					<Form.Check
						inline
						label='Halsin'
						value='8'
						name='approve'
						type='checkbox'
						className='checkbox-approval'
						onChange={onChange}
					/>
					<Form.Check
						inline
						label='Wyll'
						value='5'
						name='approve'
						type='checkbox'
						className='checkbox-approval'
						onChange={onChange}
					/>
					<Form.Check
						inline
						label='Minthara'
						value='7'
						name='approve'
						type='checkbox'
						className='checkbox-approval'
						onChange={onChange}
					/>
				</Container>
			</Form.Group>
			<Form.Group>
				<Form.Label>Companions Who Disapprove:</Form.Label>
				<Container>
					<Form.Check
						inline
						label='Astarion'
						value='1'
						name='disapprove'
						type='checkbox'
						className='checkbox-disapproval'
						onChange={onChange}
					/>
					<Form.Check
						inline
						label='Gale'
						value='2'
						name='disapprove'
						type='checkbox'
						className='checkbox-disapproval'
						onChange={onChange}
					/>
					<Form.Check
						inline
						label='Karlach'
						value='3'
						name='disapprove'
						type='checkbox'
						className='checkbox-disapproval'
						onChange={onChange}
					/>
					<Form.Check
						inline
						label='Shadowheart'
						value='4'
						name='disapprove'
						type='checkbox'
						className='checkbox-disapproval'
						onChange={onChange}
					/>
					<Form.Check
						inline
						label="Lae'zel"
						value='6'
						name='disapprove'
						type='checkbox'
						className='checkbox-disapproval'
						onChange={onChange}
					/>
					<Form.Check
						inline
						label='Halsin'
						name='disapprove'
						value='8'
						type='checkbox'
						className='checkbox-disapproval'
						onChange={onChange}
					/>
					<Form.Check
						inline
						label='Wyll'
						value='5'
						name='disapprove'
						type='checkbox'
						className='checkbox-disapproval'
						onChange={onChange}
					/>
					<Form.Check
						inline
						label='Minthara'
						value='7'
						name='disapprove'
						type='checkbox'
						className='checkbox-disapproval'
						onChange={onChange}
					/>
				</Container>
			</Form.Group>
			<hr />
			<Form.Group>
				<Form.Label>Act:</Form.Label>
				<Container>
					<Form.Check
						inline
						label='Act 1'
						value='1'
						name='act_id'
						type='radio'
						className='radio-act'
						onChange={onChange}
					/>
					<Form.Check
						inline
						label='Act 2'
						value='2'
						name='act_id'
						type='radio'
						className='radio-act'
						onChange={onChange}
					/>
					<Form.Check
						inline
						label='Act 3'
						value='3'
						name='act_id'
						type='radio'
						className='radio-act'
						onChange={onChange}
					/>
				</Container>
			</Form.Group>
			<hr />
			<Form.Group>
				<Form.Label>Region:</Form.Label>
				<Container>
					<Form.Check
						inline
						label='Nautiloid'
						name='region_id'
						value='1'
						type='radio'
						className='radio-region'
						onChange={onChange}
					/>
					<Form.Check
						inline
						label='Wilderness'
						value='2'
						name='region_id'
						type='radio'
						className='radio-region'
						onChange={onChange}
					/>
					<Form.Check
						inline
						label='Shadow-Cursed Lands'
						value='3'
						name='region_id'
						type='radio'
						className='radio-region'
						onChange={onChange}
					/>
					<Form.Check
						inline
						label='Underdark'
						value='4'
						name='region_id'
						type='radio'
						className='radio-region'
						onChange={onChange}
					/>
					<Form.Check
						inline
						label="Baldur's Gate"
						value='5'
						name='region_id'
						type='radio'
						className='radio-region'
						onChange={onChange}
					/>
				</Container>
			</Form.Group>
			<hr />
			<Form.Group>
				<Form.Label>Dialogue:</Form.Label>
				<Form.Control
					as='textarea'
					placeholder='Insert the dialogue option(s) to choose...'
					name='dialogue'
					onChange={onChange}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Label>Dialogue Details:</Form.Label>
				<Form.Control
					as='textarea'
					placeholder='Insert any details or requirements needed to get to the dialogue referenced above...'
					name='dialogue_details'
					onChange={onChange}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Label>Additional Details:</Form.Label>
				<Form.Control
					as='textarea'
					placeholder='List any additional details that could be of any help...'
					name='additional_details'
					onChange={onChange}
				/>
			</Form.Group>

			<Button variant='primary' type='submit' size='lg'>
				Submit
			</Button>
		</Form>
	);
}

export default Create_form;
