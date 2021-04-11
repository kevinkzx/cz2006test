import React, {useRef, useContext}from 'react';
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
import { useAlert } from "react-alert";

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const {getPackage} = useContext(PackageContext);
    let {slug} = useParams();
    const item = getPackage(slug);
    const {user} = useContext(AuthContext);
    const alert = useAlert();
    const nameForm = useRef(null);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (useraddress) => {
        if (user === null){
            console.log('please log in first');
            alert.show('Please log in first!');
        }
        else {
            console.log(item.name);
            console.log(user.email);
            const form = nameForm.current;
            console.log(form['address'].value);
        };    
      setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    return (
      <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Click here to book package
        </Button>
        <Dialog open={open} onClose={handleCancel} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Booking of package</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To book this package, enter your address.
            </DialogContentText>
            <form ref ={nameForm}>
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
            <Button onClick={handleCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Book
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }