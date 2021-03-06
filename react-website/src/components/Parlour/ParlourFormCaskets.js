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

/**
 * This sets the value of the caskets inside the pop up form
 * @param {object} props the casket user chooses in the pop up form
 * @returns the value chosen by the user.
 */

function ConfirmationDialogRaw(props) {
	const {onClose, value: valueProp, open, ...other} = props;
	const [value, setValue] = React.useState(valueProp);
	const radioGroupRef = React.useRef(null);
	const {user} = useContext(AuthContext);
	const alert = useAlert();
	const {getParlour} = useContext(ParlourContext);
	let {slug} = useParams();
	const item = getParlour(slug);
	const caskets = item.caskets.concat("Nil");

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
			<DialogTitle id="confirmation-dialog-title">Caskets</DialogTitle>
			<DialogContent dividers>
				<RadioGroup
					ref={radioGroupRef}
					aria-label="ringtone"
					name="ringtone"
					value={value}
					//this sets the outside value to what the user choose in list
					onChange={handleChange}
				>
					{caskets.map((option) => (
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

/**
 * This changes the value after the user has chosen a casket from the pop up form.
 * @param {object} props the value that user choose in the pop up form
 * @returns the value that the user choose
 */

export default function ConfirmationDialog(props) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState('Nil');

	const handleClickListItem = () => {
		setOpen(true);
	};

	/**
	 * Sets the value of caskets to the one that user chooses.
	 * @param {object} newValue the casket that the user chose
	 */
	const handleBook = (newValue) => {
		setOpen(false);

		if (newValue) {
			setValue(newValue);
			if (newValue === "Nil") {
				props.setCaskets(null);
			} else {
				props.setCaskets(newValue);
			}
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
					<ListItemText primary="Caskets"
					              secondary={value}/>
				</ListItem>
				<ConfirmationDialogRaw
					classes={{
						paper: classes.paper,
					}}
					id="ringtone-menu"
					keepMounted
					open={open}
					onClose={handleBook}
					value={value}
				/>
			</List>
		</div>
	);

}