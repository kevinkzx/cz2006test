import React, {useRef, useContext} from 'react'
import {useParams} from "react-router-dom";
import PackageContext from "../Context/PackageContext";
import AuthContext from "../Context/AuthContext";
import { useAlert } from "react-alert";
import PackageForm from "./PackageForm";

const PackageBooking = () => {
	const {getPackage} = useContext(PackageContext);
	let {slug} = useParams();
	const item = getPackage(slug);
	const {user, email, booking} = useContext(AuthContext);
	const alert = useAlert();



	// const nameForm = useRef(null);

	// const handleClickEvent = () => {
	// 	const form = nameForm.current;
	//
	//
	// 	alert.show('Successfully booked this package');
	// };
	//
	//
	//
	// function isloggedin() {
	// 	return user !== null;
	// };
	//
	// function notloggedin() {
	// 	console.log("please log in");
	// 	alert.show('Please log in first!');
	// };


    return (
        <div>

            {/* <button onClick={testfunction}>Click here to book package</button> */}
            {/* <h1>Hello from package booking</h1> */}
            {/* <button onClick={() => isloggedin() ? handleClickEvent() : notloggedin()}>
                Click here to book package
            </button> */}
            <PackageForm/>
            {/* <form ref={nameForm}>
                <InputField label={'Enter Address here'} name={'address'}/>
            </form> */}
        </div>
    );
};

export default PackageBooking;
