import React, {useContext, useState} from 'react'
import {useParams} from "react-router-dom";
import ParlourContext from "../Context/ParlourContext";
import ParlourForm from "./ParlourForm";
import {FormGrid, ParlourBookingWrapper} from "./ParlourElement";
import ParlourFormCaskets from "./ParlourFormCaskets";
import ParlourFormButton from "./ParlourFormButton";
import AuthContext from "../Context/AuthContext";
import {useAlert} from "react-alert";
import emailjs from "emailjs-com";
import {NormalButtonWrapper} from "../ButtonElements";

/**
 * This returns the name of the parlour, package, caskets and address of the user when they engage a parlour
 * @returns forms for the user to pick
 */
const ParlourBooking = () => {
	const {getParlour} = useContext(ParlourContext);
	let {slug} = useParams();
	const item = getParlour(slug);
	const alert = useAlert();
	const [generalPackages, setGeneralPackages] = useState(null);
	const [caskets, setCaskets] = useState(null);
	const [address, setAddress] = useState(null);

	/**
	 * Gets the user that is currently logged in
	 */
	const {
		query, user
	} = useContext(AuthContext);

	/**
	 * Checks if any of the field that the user input is empty
	 * If not empty, set data as package, casket chosen by user and address input and use sendEmail function
	 */
	const testBook = () => {
		if (!generalPackages && !caskets) {
			alert.show("Please select a service first");
		} else if (!address) {
			alert.show("Please write address");
		} else {
			const data = {
				generalPackages,
				caskets,
				address
			}
			query(data)
			const param = {
				...data,
				email: user.email,
				name: item.name
			}
			sendEmail(param);
			alert.show("Successful")
			setAddress(null);
		}
	};

	/**
	 * Uses the email api to send a confirmation email
	 * @param {*} templateParams template object to send email
	 */
	const sendEmail = (templateParams) => {
		emailjs.send('service_k995ykf', 'template_s4l8cue', templateParams, 'user_PCSCABHzVKDKmfFro8SMh')
		       .then(function (response) {
			       console.log('SUCCESS!', response.status, response.text);
		       }, function (error) {
			       console.log('FAILED...', error);
		       });
	};


	return (
		<FormGrid>
			<ParlourBookingWrapper>
				<ParlourForm setGeneralPackages={setGeneralPackages}/>
				<ParlourFormCaskets setCaskets={setCaskets}/>
				<NormalButtonWrapper>
					<ParlourFormButton setAddress={setAddress}
					                   testBook={testBook}/>
				</NormalButtonWrapper>
			</ParlourBookingWrapper>
		</FormGrid>
	);
};

export default ParlourBooking;