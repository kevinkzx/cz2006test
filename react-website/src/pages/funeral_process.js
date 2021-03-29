import React from 'react'
import Container from '@material-ui/core/Container';
import {Title, Wrapper} from './InformationElements'
import 'semantic-ui-css/components/button.min.css'
import 'semantic-ui-css/components/icon.min.css'


const funeral_processPage = () => {
	return (
		<div>
			<Wrapper>
				<Title>
					Funeral process
				</Title>
			</Wrapper>
			<Container>
				<h3>Step 1: Decide on a funeral home</h3><br/>
				<h3>Step 2: Obtain a Certificate of Cause of Death (CCOD)</h3><br/>
				<strong>At the hospital</strong><br/>
				A doctor at the hospital will certify the
				cause of death if it is known and it's natural. You'll need the ID of the deceased for this.
				The CCOD will then be issued on the spot. <br/><br/>
				<strong>At home</strong><br/>
				Get your family doctor or neighbourhood GP to make a house call to certify the death.
				Some clinics have 24-hour house-call services you can tap on.
				If the doctor cannot certify the cause of death, the body needs to be sent to the mortuary. <br/><br/>

				<h3>Step 3: Register the death</h3>

				<div>The CCOD is then used to register the death.
				     You can do this at the Neighbourhood Police Centre / Posts or the Citizen Services Centre, ICA
				     Building.
					<br/>Remember to bring these documents:<br/>

					&emsp;• CCOD Deceased's ID such as IC, passport, or birth certificate <br/>
					&emsp;• Informant's ID
				</div>
				<br/><br/>

				<h3>Step 4: Arrange for the wake and funeral</h3>

				<br/> &emsp;• Number of days <br/> &emsp;• Location <br/> &emsp;• Type of casket <br/> &emsp;• Funeral
				Package <br/><br/>
				<h3>Step 5: Choosing burial or cremation</h3>
			</Container>


		</div>


	)
}

export default funeral_processPage;
