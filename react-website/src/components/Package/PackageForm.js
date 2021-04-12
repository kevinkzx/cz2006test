import React, {useContext, useRef} from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PackageContext from "../Context/PackageContext";
import {useParams} from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import {useAlert} from "react-alert";
import emailjs from "emailjs-com";

export default function FormDialog() {
	const [open, setOpen] = React.useState(false);
	const {getPackage} = useContext(PackageContext);
	let {slug} = useParams();
	const item = getPackage(slug);
	const {user, booking} = useContext(AuthContext);
	const alert = useAlert();
	const nameForm = useRef(null);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		if (user === null) {
			console.log('please log in first');
			alert.show('Please log in first!');
		} else {
			const form = nameForm.current;
			if (!form['address'].value) {
				console.log("Please enter address");
				alert.show("Please enter an address.")
			} else {
				const data = {
					name: item.name,
					price: item.price,
					address: form['address'].value,
					type: "package"
				};
				booking(data, "Users");
				const param = {
					...data,
					email: user.email,
					religion: item.religion,
					location: item.location,
					days: item.days,
					transportation: item.transportation ? "Included" : "Not included",
					casket: item.casket,
					eco: item.eco ? "Yes" : "No",
					provider: item.parlour
				}
				sendEmail(param);
				alert.show("Successful booking.")
			}
		}

		setOpen(false);
	};

	const sendEmail = (templateParams) => {
		emailjs.send('service_k995ykf', 'template_qp377on', templateParams, 'user_PCSCABHzVKDKmfFro8SMh')
		       .then(function (response) {
			       console.log('SUCCESS!', response.status, response.text);
		       }, function (error) {
			       console.log('FAILED...', error);
		       });
	}

	const handleCancel = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button variant="outlined"
			        color="primary"
			        onClick={handleClickOpen}>
				Click here to book package
			</Button>
			<Dialog open={open}
			        onClose={handleCancel}
			        aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Booking of package</DialogTitle>
				<DialogContent>
					<DialogContentText>
						To book this package, enter your address.
					</DialogContentText>
					<form ref={nameForm}>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label="Address"
							type="Address"
							fullWidth
							name={'address'}
						/>
					</form>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCancel}
					        color="primary">
						Cancel
					</Button>
					<Button onClick={handleClose}
					        color="primary">
						Book
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}