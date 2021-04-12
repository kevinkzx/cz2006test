import React, {useContext, useRef} from 'react';
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useParams} from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import {useAlert} from "react-alert";
import ParlourContext from "../Context/ParlourContext";

export default function FormDialog(props) {
	const [open, setOpen] = React.useState(false);
	const {getParlour} = useContext(ParlourContext);
	let {slug} = useParams();
	const item = getParlour(slug);
	const {user} = useContext(AuthContext);
	const alert = useAlert();
	const nameForm = useRef(null);

	const handleClickOpen = () => {
		if (!user) {
			alert.show("Please log in first")
		} else {
			setOpen(true);
		}
	};

	const handleClose = () => {
		props.testBook();
		setOpen(false);
	};

	const handleCancel = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button variant="outlined"
			        color="primary"
			        onClick={handleClickOpen}>
				Click here to engage parlour
			</Button>
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
					       onChange={event => props.setAddress(event.target.value)}/>
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