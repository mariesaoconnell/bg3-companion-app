import React from 'react';
import {Card, Container} from 'react-bootstrap';

import '../../styles/dialogue-card.css';


function DialogueCard({data}) {

  return (
		<Card className='m-2' id='card-main' style={{ width: '100%' }}>
			<Card.Body>
				<Card.Title id='card-title'>
					Act {data.act} | Region: {data.region_name}
				</Card.Title>
				<Card.Text>
					<Container>
						<b>Approves:</b>
						<Container>
							{data.all_approvals ? (
								<>{data.all_approvals}</>
							) : (
								<>No Disapprovals</>
							)}
						</Container>
					</Container>

					<Container>
						<b>Disapproves:</b>
						<Container>
							{data.all_disapprovals ? (
								<>{data.all_disapprovals}</>
							) : (
								<>No Disapprovals</>
							)}
						</Container>
					</Container>

					<Container>
						<b>Dialogue:</b>
						<Container>{data.dialogue}</Container>
					</Container>

					<Container>
						<b>Dialogue Details:</b>
						<Container>
							{data.dialogue_details ? (
								<>{data.dialogue_details}</>
							) : (
								<>No Dialogue Details</>
							)}
						</Container>
					</Container>

					<Container>
						<b>Additional Details:</b>
						<Container>
							{data.additional_details ? (
								<>{data.additional_details}</>
							) : (
								<>No Additional Details</>
							)}
						</Container>
					</Container>
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default DialogueCard;
