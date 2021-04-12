import React from 'react';
import HeroSection from "../HeroSection";
import Title from "../Parlour/Title";
import {Tab} from "semantic-ui-react";
import {Container} from "@material-ui/core";

const CremationBurialInfo = () => {
	const panes = [
		{
			menuItem: 'Cremation procedures',
			render: () => <Tab.Pane attached={false}>
				<Container>
					<strong>THE PROCESS:</strong> <br/>
					1. After cremation, the cremated remains will be made
					more fine to facilitate scattering, as powdered ashes.<br></br>
					2. The powdered ashes will be contained in an ash
					scattering canister and transported to the ash
					scattering facility.<br></br>
					3. Ashes would be transported to the columbarium.<br></br>
					4. Family members would choose where they wish to
					place the urn.

					<br></br>
					<br></br>

					<strong>CREMATION LOCATIONS:</strong><br></br>
					<strong>1. Mandai Crematorium and Columbarium Complex</strong><br></br>
					300 Mandai Road, Singapore 779393<br></br>
					Number: 62747390<br></br>
					<br></br>

					Booking Hours:<br></br>
					Mondays to Sundays 8:30am-4:30pm <br></br>
					Office closed for lunch from 1:00-2:00pm<br></br>
					<br></br>

					Documents required for verification before booking:<br></br>
					• Death Certificate<br></br>
					• Permit to Cremate<br></br>
					• Identification of Next-of-Kin and Applicant (NRIC, Passport, etc),
					or letter of Authorisation if applicant is not Next-of-Kin<br></br><br></br>

					Please read the terms and conditions of the Mandai Crematorium before making a booking.<br></br>

					<br></br>
					<strong>2. Kong Meng San Phor Kark See Monastery</strong><br></br>
					<br></br>
					88 Bright Hill Drive<br></br>
					<br></br>
					Number 60484738<br></br>
					<br></br>

					Booking Hours:
					Mondays to Sundays 9:00am-3:00pm<br></br>
					<br></br>
					Fees:
					S300 (Cremation only)<br></br>
					$400 (Cremation urn storage)
				</Container>
			</Tab.Pane>
		},
		{
			menuItem: 'In-land scattering',
			render: () => <Tab.Pane attached={false}>
				<Container>
					<strong>THE PROCESS:</strong> <br></br>
					1. After cremation, the cremated remains will be made
					more fine to facilitate scattering, as powdered ashes.<br></br>

					2. The powdered ashes will be contained in an ash scattering
					canister and transported to the ash scattering facility.<br></br>

					3. Upon arrival. Next-of-Kin 1 Funeral Director will walk
					towards the ash scattering zone and conduct the scattering
					of ashes within designated zone.<br></br>

					4. The ash scattering surface, which will be covered with
					pebbles and creepers, will be watered periodically
					and over time, ashes will flow and percolate into the soil
					underneath through gravel bed.<br></br>

					<br></br>


					<strong>LOCATIONS FOR SCATTERING:</strong><br></br>
					1. Choa Chu Kang Cemetery Complex <br></br>
					Chinese Cemetery Path 17<br></br>
					<br></br>
					2. Mandai Crematorium and Columbarium Complex <br></br>
					300 Mandai Road Singapore 779393
				</Container>
			</Tab.Pane>,
		},
		{
			menuItem: 'Ash-scattering at sea',
			render: () => <Tab.Pane attached={false}>
				<Container>
					Ashes of the deceased may be scattered at sea. The Maritime Port Authority (MPA) has designated a
					site
					located
					about 2.8km South of Pulau Semakau where sea burial can be conducted.
					This can be done daily from 7:00am-7:00pm.<br></br>
					<br></br>
					For more information, please contact the MPA's Port Marine Safety Control Centre at 63258493.
				</Container>
			</Tab.Pane>,
		},

		{
			menuItem: 'Burial',
			render: () => <Tab.Pane attached={false}>
				<Container>
					<strong>BURIAL LOCATIONS: </strong> <br></br>


					Currently, the Choa Chu Kang Cemetery Complex is the only cemetery in Singapore still open for
					burials.
					<br></br>
					<br></br>
					Choa Chu Kang Cemetery Booking Office <br></br>910 Choa Chu Kang Road Singapore 699819 <br></br>
					Number: 64488392 <br></br>
					<br></br>

					Booking hours: Mondays to Sundays 8:30am-4:30pm <br></br>
					Closed for lunch from 1:00-2:00pm <br></br><br></br>
					Documents required for verification before booking: <br></br>
					&emsp;• Death Certificate <br></br>
					&emsp;• Permit to Bury <br></br>
					&emsp;• Identification Papers of Next-of-Kin and Applicant (NRIC, Passport, etc), or Letter of
					Authorisation if applicant is not Next-of-Kin <br></br><br></br>

					Please read the terms and conditions before making a booking. <br></br><br></br>

					<strong>BURIAL FEES:</strong> <br></br><br></br>
					Choa Chu Kang Muslim Cemetery <br></br>
					$140 (Child under 10) <br></br>
					$315 (Adult) <br></br><br></br>

					Choa Chu Kang Ahmadiyya Jama'at Cemetery <br></br>
					$140 (Child under 10) <br></br>
					$315 (Adult) <br></br><br></br>

					Choa Chu Kang Jewish Cemetery <br></br>
					$140 (Child under 10) <br></br>
					$315 (Adult) <br></br><br></br>

					Choa Chu Kang Parsi Cemetery <br></br>
					$140 (Child under 10) <br></br>
					$315 (Adult) <br></br><br></br>

					Choa Chu Kang Bahai Cemetery <br></br>
					$140 (Child under 10) <br></br>
					$315 (Adult) <br></br><br></br>

					All other cemeteries other than those listed <br></br>
					$420 (Child under 10) <br></br>
					$940 (Adult) <br></br>

				</Container>
			</Tab.Pane>,
		},

	]

	return (
		<>
			<HeroSection HeroHeader="Cremation and Burial Procedures."
			             HeroPara="Click the button to see the process of cremation or burial."
			             getStartedButton="cremation"
			             scroll={true}/>
			<div id="cremation">
				<Title title="Cremation and Burial Information"/>
			</div>
			<Tab menu={{color: 'green', secondary: true, pointing: true, attached: false}}
			     panes={panes}/>
		</>
	);
};

export default CremationBurialInfo;