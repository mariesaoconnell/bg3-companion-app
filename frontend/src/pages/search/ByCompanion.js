import React, {useState} from 'react';
import {Form, Container, Button} from 'react-bootstrap';
import DialogueCard from '../../components/search_components/DialogueCard'

function ByCompanion(props) {

  const [companions, SetCompanions] = useState({
    companion: []
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);

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

			const onSubmit = async(event) => {
				event.preventDefault();
        setIsSubmitted(true);
        setIsLoading(true);
				console.log(companions)

        let url = `http://localhost:3006/companion-approvals/${companions.companion}`;

        try {
        const response = await fetch(url);

        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const apiResults = await response.json();
        if (Array.isArray(apiResults.data)) {
					setResults(apiResults.data);
				} else {
					console.error('API did not return an array:', apiResults);
					setResults([]); // set to an empty array or handle in some other way
				}
    } catch (error) {
        console.error('Failed fetching data: ', error);
        // Optionally set some state here to indicate the error to the user
    }

		SetCompanions({
			companion: [],
		});
		console.log(companions)
    setIsLoading(false);
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
								type='radio'
								className='checkbox-approval'
								onChange={onChange}
								checked={companions.companion.includes('1')}
							/>
							<Form.Check
								inline
								label='Gale'
								value='2'
								name='companion'
								type='radio'
								className='checkbox-approval'
								onChange={onChange}
								checked={companions.companion.includes('2')}
							/>
							<Form.Check
								inline
								label='Karlach'
								value='3'
								name='companion'
								type='radio'
								className='checkbox-approval'
								onChange={onChange}
								checked={companions.companion.includes('3')}
							/>
							<Form.Check
								inline
								label='Shadowheart'
								value='4'
								name='companion'
								type='radio'
								className='checkbox-approval'
								onChange={onChange}
								checked={companions.companion.includes('4')}
							/>
							<Form.Check
								inline
								label="Lae'zel"
								value='6'
								name='companion'
								type='radio'
								className='checkbox-approval'
								onChange={onChange}
								checked={companions.companion.includes('6')}
							/>
							<Form.Check
								inline
								label='Halsin'
								value='8'
								name='companion'
								type='radio'
								className='checkbox-approval'
								onChange={onChange}
								checked={companions.companion.includes('8')}
							/>
							<Form.Check
								inline
								label='Wyll'
								value='5'
								name='companion'
								type='radio'
								className='checkbox-approval'
								onChange={onChange}
								checked={companions.companion.includes('5')}
							/>
							<Form.Check
								inline
								label='Minthara'
								value='7'
								name='companion'
								type='radio'
								className='checkbox-approval'
								onChange={onChange}
								checked={companions.companion.includes('7')}
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
					<div>Select a Companion</div>
				) : isLoading ? (
					<div>Loading...</div>
				) : results.length > 0 ? (
					Array.isArray(results) &&
					results.map((result) => (
						<DialogueCard key={result.id} data={result} />
					))
				)
				: (<h2>No Dialogue options found</h2>)}
			</Container>
		</div>
	);
}

export default ByCompanion;
