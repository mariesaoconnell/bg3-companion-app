import React, {useState, useEffect} from 'react';
import DialogueCard from '../../components/search_components/DialogueCard';
import { Container } from 'react-bootstrap';

function ViewAll(props) {
	const [isLoading, setIsLoading] = useState(true);
	const [results, setResults] = useState([]);

  useEffect(()=>{
    fetchAll();
  }, [])

  const fetchAll = async () => {

    let url = `http://localhost:3006/all-approvals`;

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

    setIsLoading(false);
  };
  return (
		<Container>
			<h1 className='text-center my-5'>View All Dialogues</h1>
			<Container className='d-flex flex-wrap mt-5'>
				{isLoading ? (
					<div>Loading...</div>
				) : (
					Array.isArray(results) &&
					results.map((result) => (
						<DialogueCard key={result.id} data={result} />
					))
				)}
			</Container>
		</Container>
	);
}

export default ViewAll;
