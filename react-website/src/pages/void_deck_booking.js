import React from 'react'
import Container from '@material-ui/core/Container';
import {Wrapper} from './InformationElements'


const void_deck_bookingPage = () => {
	return (
		<div>
			<Wrapper>

				<h1>Void deck booking</h1>

			</Wrapper>
			<Container>
				Get a permit from your Town Council and contact them to secure booking dates for the
				funeral. <br></br><br></br>
				&emsp;To submit an application, you must be: <br></br>
				&emsp;&emsp;• Over 21 years old <br></br>
				&emsp;&emsp;• A relative of the deceased <br></br>
				&emsp;&emsp;• A HDB resident of the Town Council that you are applying to <br></br><br></br>
				&emsp; The Town Council will advise you on the: <br></br>
				&emsp;&emsp;• Available HDB common spaces nearest to your block of residence <br></br>
				&emsp;&emsp;• Charges for utilities (i.e. water & electricity) <br></br><br></br>
				Proceed to your town council's office the next working day to get the permit and make payment.
				Bring along your NRIC, the death certificate and cash / NETS / credit card to make
				payment. <br></br><br></br>

				For list of Town Councils, click <a href="https://afd.org.sg/list-of-town-council-offices/"
				                                    target="_blank">here</a>.

			</Container>


		</div>


	)
}

export default void_deck_bookingPage;
