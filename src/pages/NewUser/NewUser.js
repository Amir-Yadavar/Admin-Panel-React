import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function NewUser() {

  const [open, setOpen] = useState(true);



  return (
    <>
      <Dialog
        open={open}

        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Dashbord Admin panel Modal :"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Currently, no new user has registered. That's why there is nothing to display. You will be redirected to the main page.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to='/'>
            <Button autoFocus>
              Agree
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </>
  )
}
