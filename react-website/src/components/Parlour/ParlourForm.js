import React, {useRef, useContext} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {useParams} from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import ParlourContext from "../Context/ParlourContext";
import {useAlert} from "react-alert";


function ConfirmationDialogRaw(props) {
	const {onClose, value: valueProp, open, ...other} = props;
	const [value, setValue] = React.useState(valueProp);
	const radioGroupRef = React.useRef(null);
	const {user} = useContext(AuthContext);
	const alert = useAlert();
	const {getParlour} = useContext(ParlourContext);
	let {slug} = useParams();
	const item = getParlour(slug);
	const GP = item.generalPackages.concat("Nil");
	// console.log(GP);


	React.useEffect(() => {
		if (!open) {
			setValue(valueProp);
		}
	}, [valueProp, open]);

	const handleEntering = () => {
		if (radioGroupRef.current != null) {
			radioGroupRef.current.focus();
		}
	};

	const handleCancel = () => {
		onClose();
	};

	const handleOk = () => {
		onClose(value);
	};

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<Dialog
			disableBackdropClick
			disableEscapeKeyDown
			maxWidth="xs"
			//this sets the list to the list of stuff user can choose
			onEntering={handleEntering}
			aria-labelledby="confirmation-dialog-title"
			open={open}
			{...other}
		>
			<DialogTitle id="confirmation-dialog-title">General Packages</DialogTitle>
			<DialogContent dividers>
				<RadioGroup
					ref={radioGroupRef}
					aria-label="ringtone"
					name="ringtone"
					value={value}
					//this sets the outside value to what the user choose in list
					onChange={handleChange}
				>
					{GP.map((option) => (
						<FormControlLabel value={option}
						                  key={option}
						                  control={<Radio/>}
						                  label={option}/>
					))}
				</RadioGroup>
			</DialogContent>
			<DialogActions>
				<Button autoFocus
				        onClick={handleCancel}
				        color="primary">
					Cancel
				</Button>
				<Button onClick={handleOk}
				        color="primary">
					Ok
				</Button>
			</DialogActions>
		</Dialog>
	);
}

ConfirmationDialogRaw.propTypes = {
	onClose: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
	value: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
	paper: {
		width: '80%',
		maxHeight: 435,
	},
}));

export default function ConfirmationDialog(props) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState('Nil');
	const {user} = useContext(AuthContext);
	const alert = useAlert();

	const handleClickListItem = () => {
		setOpen(true);
	};

	const handleClose = (newValue) => {
		setOpen(false);

		if (newValue) {
			setValue(newValue);
		}
	};

	const handleBook = (newValue) => {
		// if (user === null) {
		// 	//console.log('please log in first');
		// 	alert.show('Please log in first!');
		// } else {
		// 	//console.log(newValue);
		// }
		setOpen(false);

		if (newValue) {
			setValue(newValue);
			if (newValue === "Nil") {
				props.setGeneralPackages(null);
			} else {
				props.setGeneralPackages(newValue);
			}
			// myorder.setGeneralP(newValue);
		}
	};


	return (
		<div className={classes.root}>
			<List component="div"
			      role="list">
				<ListItem
					button
					divider
					aria-haspopup="true"
					aria-controls="ringtone-menu"
					aria-label="phone ringtone"
					onClick={handleClickListItem}
					role="listitem"
				>
					<ListItemText primary="General Packages"
					              secondary={value}/>
				</ListItem>
				<ConfirmationDialogRaw
					classes={{
						paper: classes.paper,
					}}
					id="ringtone-menu"
					keepMounted
					open={open}
					//check if user is logged in here
					onClose={handleBook}
					value={value}
				/>
			</List>
		</div>
	);

}