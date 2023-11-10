import React, { useState, useEffect } from 'react';
import { Form, Container, Button, Breadcrumb } from 'react-bootstrap';
import DialogueCard from '../../components/search_components/DialogueCard';
import '../../styles/by-companion.css';

import Astarion from '../../assets/images/astarion_pfp.png';
import Gale from '../../assets/images/gale_pfp.png';
import Shadowheart from '../../assets/images/shadowheart_pfp.png';
import Laezel from '../../assets/images/laezel_pfp.png';
import Halsin from '../../assets/images/halsin_pfp.png';
import Wyll from '../../assets/images/wyll_pfp.png';
import Karlach from '../../assets/images/karlach_pfp.png';
import Minthara from '../../assets/images/minthara_pfp.png';

function ByCompanion(props) {
  const [selectedCompanion, setSelectedCompanion] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
	const [companionName, setCompanionName] = useState('');

  const companionsArray = [
    { id: '1', name: 'Astarion', image: Astarion },
    { id: '2', name: 'Gale', image: Gale },
    { id: '4', name: 'Shadowheart', image: Shadowheart },
    { id: '6', name: 'Laezel', image: Laezel },
    { id: '3', name: 'Karlach', image: Karlach },
    { id: '5', name: 'Wyll', image: Wyll },
    { id: '8', name: 'Halsin', image: Halsin },
    { id: '7', name: 'Minthara', image: Minthara },
  ];

	  useEffect(() => {
			// Find the companion object with the matching id
			const selectedCompanionObject = companionsArray.find(
				(companion) => companion.id === selectedCompanion
			);

			// If a matching companion is found, log its name
			if (selectedCompanionObject) {
				console.log('Selected Companion:', selectedCompanionObject.name);
				setCompanionName(selectedCompanionObject.name)
			}
		}, [selectedCompanion, companionsArray]);

  const onChange = (event) => {
    const { value } = event.target;
    setSelectedCompanion(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setIsLoading(true);

    let url = `http://localhost:3006/companion-approvals/${selectedCompanion}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const apiResults = await response.json();
      if (Array.isArray(apiResults.data)) {
        setResults(apiResults.data);
      } else {
        console.error('API did not return an array:', apiResults);
        setResults([]);
      }
    } catch (error) {
      console.error('Failed fetching data: ', error);
    }

    setIsLoading(false);
  };

  return (
		<Container>
			<h1 className='text-center my-5'>
				{results.length > 0 ? (
					<p>Results for {companionName}</p>
				) : (
					<>Search By Companion</>
				)}
			</h1>
			<Container className='d-flex justify-content-center flex-wrap'>
				{!isSubmitted ? (
					<Container className='d-flex justify-content-center'>
						<Form onSubmit={onSubmit}>
							<Form.Group>
								<Container className='d-flex flex-wrap justify-content-center'>
									{companionsArray.map((companion) => (
										<label
											key={companion.id}
											className={`companion-label ${
												selectedCompanion === companion.id ? 'selected' : ''
											}`}>
											<input
												type='radio'
												name='companion'
												value={companion.id}
												checked={selectedCompanion === companion.id}
												onChange={onChange}
												style={{ display: 'none' }}
											/>
											<img
												src={companion.image}
												alt={companion.name}
												className={`companion-image m-3 rounded pe-auto ${
													selectedCompanion === companion.id
														? 'selected-image'
														: ''
												}`}
												style={{ height: 250, width: 250 }}
											/>
										</label>
									))}
								</Container>
							</Form.Group>
							<Container className='d-flex justify-content-end'>
								<Button variant='primary' type='submit'>
									Search
								</Button>
							</Container>
						</Form>
					</Container>
				) : isLoading ? (
					<div>Loading...</div>
				) : results.length > 0 ? (
					<>
						<Breadcrumb>
							<Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
							<Breadcrumb.Item href='/search/companion'>
								Search By Companion
							</Breadcrumb.Item>
							<Breadcrumb.Item active>
								Search Results for {companionName}
							</Breadcrumb.Item>
						</Breadcrumb>
						{Array.isArray(results) &&
							results.map((result) => (
								<DialogueCard key={result.id} data={result} />
							))}
					</>
				) : (
					<h2>No Dialogue options found</h2>
				)}
			</Container>
		</Container>
	);
}

export default ByCompanion;
