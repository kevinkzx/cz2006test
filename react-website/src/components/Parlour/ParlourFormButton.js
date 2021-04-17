import React, {useContext} from 'react';
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AuthContext from "../Context/AuthContext";
import {useAlert} from "react-alert";
import {NormalButton} from "../ButtonElements";

/**
 * Component for form to allow user to input address if they want to engage parlour.
 * Checks whether the user is logged in.
 * @param {object} props Address of the user input
 * @returns Form for user to input address.
 */
export default function FormDialog(props) {
	const [open, setOpen] = React.useState(false);
	const {user} = useContext(AuthContext);
	const alert = useAlert();

	/**
	 * Function to check if the user is logged in
	 */
	const handleClickOpen = () => {
		if (!user) {
			alert.show("Please log in first")
		} else {
			setOpen(true);
		}
	};

	/**
	 * Calls the booking function.
	 */
	const handleClose = () => {
		props.testBook();
		setOpen(false);
	};

	const handleCancel = () => {
		setOpen(false);
	};

	return (
		<div>
			<NormalButton onClick={handleClickOpen}>
				Click here to engage parlour
			</NormalButton>
			<Dialog open={open}
			        onClose={handleCancel}
			        aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Engaging of parlour</DialogTitle>
				<DialogContent>
					<DialogContentText>
						To engage this parlour, enter your address.
					</DialogContentText>
					<input type="text"
					       placeholder="Type your address"
					       onChange={event => props.setAddress(event.currentTarget.value)}/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCancel}
					        color="primary">
						Cancel
					</Button>
					<Button onClick={handleClose}
					        color="primary">
						Engage
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}