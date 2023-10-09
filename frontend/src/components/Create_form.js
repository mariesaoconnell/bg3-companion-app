import React, {useState} from 'react';
import {Form, Button, Container} from 'react-bootstrap';

function Create_form(props) {

    const [formData, setFormData] = useState({
        approve: [],
        disapprove: [],
        act: '',
        region: '',
        dialogue: '',
        dialogueDetails: '',
        additionalDetails: ''
    });

    const onChange = (event) => {
        const { name, value, type } = event.target;

        if (type === 'checkbox') {
            const newArray = [...formData[name], value];
            if (formData[name].includes(value)) {
                const valueIndex = formData[name].indexOf(value);
                newArray.splice(valueIndex, 1);
            }
            setFormData(prevState => ({ ...prevState, [name]: newArray }));
        } else {
            setFormData(prevState => ({ ...prevState, [name]: value }));
        }
    };

      const onSubmit = (event) => {
				event.preventDefault();
				console.log(formData);
				// Here you can handle the submission (e.g., send the formData to an API)
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
						name='act'
						type='radio'
						className='radio-act'
						onChange={onChange}
					/>
					<Form.Check
						inline
						label='Act 2'
						value='2'
						name='act'
						type='radio'
						className='radio-act'
						onChange={onChange}
					/>
					<Form.Check
						inline
						label='Act 3'
						value='3'
						name='act'
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
						label='NautiloclassName'
						name='region'
						value='1'
						type='radio'
						className='radio-region'
						onChange={onChange}
					/>
					<Form.Check
						inline
						label='Wilderness'
						value='2'
						name='region'
						type='radio'
						className='radio-region'
						onChange={onChange}
					/>
					<Form.Check
						inline
						label='Shadow-Cursed Lands'
						value='3'
						name='region'
						type='radio'
						className='radio-region'
						onChange={onChange}
					/>
					<Form.Check
						inline
						label='Underdark'
						value='4'
						name='region'
						type='radio'
						className='radio-region'
						onChange={onChange}
					/>
					<Form.Check
						inline
						label="Baldur's Gate"
						value='5'
						name='region'
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
					name='dialogueDetails'
					onChange={onChange}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Label>Additional Details:</Form.Label>
				<Form.Control
					as='textarea'
					placeholder='List any additional details that could be of any help...'
					name='additionalDetails'
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
