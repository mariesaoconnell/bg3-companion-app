import React, { useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import DialogueCard from '../../components/search_components/DialogueCard';

function ByAct(props) {
	const [act, setAct] = useState({
		act: []
	});
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [results, setResults] = useState([]);

	const onChange = (event) => {
		const { name, value } = event.target;
    setAct((prevState) => ({
      ...prevState, [name]: value
    }))
  }

	const onSubmit = async (event) => {
		event.preventDefault();
		setIsSubmitted(true);
		setIsLoading(true);

		let url = `http://localhost:3006/approvals-by-act/${act.act}`;

		try {
			const response = await fetch(url);

			// Check if the response is ok (status in the range 200-299)
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const apiResults = await response.json();

			if (Array.isArray(apiResults.data)) {
				setResults(apiResults.data);
        console.log(results)
			} else {
				console.error('API did not return an array:', apiResults);
				setResults([]); // set to an empty array or handle in some other way
			}
		} catch (error) {
			console.error('Failed fetching data: ', error);
			// Optionally set some state here to indicate the error to the user
		}

		setAct({
			act: [],
		});

		setIsLoading(false);
	};

	return (
		<Container>
			<h1 className='text-center'>Search By Act</h1>
			<Container className=''>
				<Form onSubmit={onSubmit}>
					<Form.Group>
						<Form.Label>Search by Companion(s):</Form.Label>
						<Container className="d-flex justify-content-center">
							<Form.Check
								inline
								label='Act 1'
								value='1'
								name='act'
								type='radio'
								className='checkbox-approval'
								onChange={onChange}
								checked={act.act.includes('1')}
							/>
							<Form.Check
								inline
								label='Act 2'
								value='2'
								name='act'
								type='radio'
								className='checkbox-approval'
								onChange={onChange}
								checked={act.act.includes('2')}
							/>
							<Form.Check
								inline
								label='Act 3'
								value='3'
								name='act'
								type='radio'
								className='checkbox-approval'
								onChange={onChange}
								checked={act.act.includes('3')}
							/>

							<Button variant='primary' type='submit'>
								Search
							</Button>
						</Container>
					</Form.Group>
				</Form>
			</Container>
			<Container className='d-flex justify-content-center flex-wrap'>
				{!isSubmitted ? (
					<div>Select an Act</div>
				) : isLoading ? (
					<div>Loading...</div>
				) : results.length > 0 ? (
					Array.isArray(results) &&
					results.map((result) => (
						<DialogueCard key={result.id} data={result} />
					))
				) : (
					<h2>No Dialogue options found</h2>
				)}
			</Container>
		</Container>
	);
}

export default ByAct;
