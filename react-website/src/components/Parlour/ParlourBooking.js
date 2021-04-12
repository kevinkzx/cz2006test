import React, {useContext, useState} from 'react'
import {useParams} from "react-router-dom";
import ParlourContext from "../Context/ParlourContext";
import ParlourForm from "./ParlourForm";
import {FormGrid} from "./ParlourElement";
import ParlourFormCaskets from "./ParlourFormCaskets";
import ParlourFormButton from "./ParlourFormButton";
import AuthContext from "../Context/AuthContext";
import {useAlert} from "react-alert";
import emailjs from "emailjs-com";

const ParlourBooking = () => {
	const {getParlour} = useContext(ParlourContext);
	let {slug} = useParams();
	const item = getParlour(slug);
	const alert = useAlert();
	const [generalPackages, setGeneralPackages] = useState(null);
	const [caskets, setCaskets] = useState(null);
	const [address, setAddress] = useState(null);

	const {
		query, user
	} = useContext(AuthContext);

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
		}
	};

	const sendEmail = (templateParams) => {
		emailjs.send('service_k995ykf', 'template_s4l8cue', templateParams, 'user_PCSCABHzVKDKmfFro8SMh')
		       .then(function (response) {
			       console.log('SUCCESS!', response.status, response.text);
		       }, function (error) {
			       console.log('FAILED...', error);
		       });
	}


	return (
		<div>
			<h1>Fill in the form below to engage a parlour</h1>
			<FormGrid>
				<ParlourForm setGeneralPackages={setGeneralPackages}/>
				<ParlourFormCaskets setCaskets={setCaskets}/>
				<ParlourFormButton setAddress={setAddress}
				                   testBook={testBook}/>
			</FormGrid>
		</div>
	);
};

export default ParlourBooking;