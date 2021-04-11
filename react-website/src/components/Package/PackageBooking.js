import React, {Component, useRef, useContext} from 'react'
import {useParams} from "react-router-dom";
import PackageContext from "../Context/PackageContext";
import AuthContext from "../Context/AuthContext";
import {useAlert} from "react-alert";
import InputField from "./InputField";
import fire from "../../firebase/fire";
import firebase from 'firebase';

const PackageBooking = () => {
	const {getPackage} = useContext(PackageContext);
	let {slug} = useParams();
	const item = getPackage(slug);
	// const result = localStorage.getItem('packageorder');
	const {user, booking} = useContext(AuthContext);
	const alert = useAlert();


	/*     function testfunction() {
			//console.log(user);
			//console.log(item.name);

			//user is not logged in
			if (user === null) {
				console.log("please log in");
				alert.show('Please log in first!');
			}
			else {
				var packageorder = {"name":item.name,"price":item.price};
				localStorage.setItem('packageorder', JSON.stringify(packageorder));
				var package_Order = JSON.parse(result);
				//package_Order is the object of the package.
				//can access the values of the object with package_Order.price package_Order.name
				console.log(package_Order.price);
				alert.show('Successfully booked this package');
			};
		}; */

	const nameForm = useRef(null);

	const handleClickEvent = () => {
		const form = nameForm.current;
		const data = {
			name: item.name,
			price: item.price,
			address: form['address'].value,
		}
		booking(data);
		alert.show('Successfully booked this package');
	};

	function isloggedin() {
		return user !== null;
	};

	function notloggedin() {
		console.log("please log in");
		alert.show('Please log in first!');
	};

	// function loggedin() {
	//     var packageorder = {"name":item.name,"price":item.price};
	//     localStorage.setItem('packageorder', JSON.stringify(packageorder));
	//     var package_Order = JSON.parse(result);
	//     //package_Order is the object of the package.
	//     //can access the values of the object with package_Order.price package_Order.name
	//     console.log(package_Order.price);
	//     alert.show('Successfully booked this package');
	// };

	return (
		<div>

			{/* <button onClick={testfunction}>Click here to book package</button> */}
			{/* <h1>Hello from package booking</h1> */}
			<button onClick={() => isloggedin() ? handleClickEvent() : notloggedin()}>
				Click here to book package
			</button>
			<form ref={nameForm}>
				<InputField label={'Enter Address here'}
				            name={'address'}/>
			</form>
		</div>
	);
};

export default PackageBooking;
