import React, {useContext, useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import ParlourContext from "../Context/ParlourContext";
import ParlourForm from "./ParlourForm";
import {FormGrid} from "./ParlourElement";
import ParlourFormCaskets from "./ParlourFormCaskets";
import ParlourFormButton from "./ParlourFormButton";
import AuthContext from "../Context/AuthContext";
import {useAlert} from "react-alert";

const ParlourBooking = () => {
	const {getParlour} = useContext(ParlourContext);
	let {slug} = useParams();
	const item = getParlour(slug);
	const alert = useAlert();
	const [generalPackages, setGeneralPackages] = useState("");
	const [caskets, setCaskets] = useState("");
	const [address, setAddress] = useState("");

	const {user, booking} = useContext(AuthContext);
	// if (!generalPackages && !caskets) {
	// 	alert.show("Please book at least one of the services.")
	// 	console.log("hello");
	// } else
	// if (user && !address) {
	// 	alert.show("Please enter an address");
	// } else {
	// 	const data = {
	// 		type: "parlour service",
	// 		generalPackages,
	// 		caskets,
	// 	};
	// 	console.log(data);
	// 	// booking();
	// }
	// useEffect(() => {
	// 	setGeneralPackages("");
	// 	setCaskets("");
	// 	// setAddress("");
	// }, []);

	useEffect(() => {
		console.log("hello")
	}, [address])


	return (
		<div>
			<h1>Fill in the form below to engage a parlour</h1>
			<FormGrid>
				<ParlourForm setGeneralPackages={setGeneralPackages}/>
				<ParlourFormCaskets setCaskets={setCaskets}/>
				<ParlourFormButton setAddress={setAddress}/>
			</FormGrid>
		</div>
	);
};

export default ParlourBooking;