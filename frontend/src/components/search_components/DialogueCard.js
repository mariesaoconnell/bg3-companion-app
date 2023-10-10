import React from 'react';
import {Card, Container} from 'react-bootstrap';

function DialogueCard({data}) {
  console.log('From Dialogue Card', data)
  return (
		<Card className="m-2" style={{ width: '18rem' }}>
			<Card.Body>
				<Card.Title>
					Act {data.act} | Region: {data.region_name}
				</Card.Title>
				<Card.Text>
					<Container>
						<b>Approves:</b>
						<Container>
							{data.companion_name}
						</Container>
					</Container>

					<Container>
						<b>Disapproves:</b>
						<Container>
							{data.disapprove ? <>data.disapproves</> : <>No Disapprovals</>}
						</Container>
					</Container>

					<Container>
						<b>Dialogue:</b>
						<Container>
							{data.dialogue}
						</Container>
					</Container>

					<Container>
						<b>Dialogue Details:</b>
						<Container>
							{data.dialogue_details ? <>{data.dialogue_details}</> : <>No Dialogue Details</>}
						</Container>
					</Container>

					<Container>
						<b>Additional Details:</b>
						<Container>
							{data.additional_details ? <>{data.additional_details}</> : <>No Additional Details</>}

						</Container>
					</Container>
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default DialogueCard;
