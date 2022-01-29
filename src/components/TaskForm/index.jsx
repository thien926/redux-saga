import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { withStyles } from '@mui/styles';
import React from 'react';
import styles from './styles';

function TaskForm(props) {
    const { open, handleClose } = props;
    return <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Đăng nhập</DialogTitle>
        <DialogContent>
            {/* <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
      </DialogContentText> */}
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Tài khoản"
                type="text"
                fullWidth
                variant="standard"
            />
            <TextField
                margin="dense"
                id="password"
                label="Mật khẩu"
                type="password"
                fullWidth
                variant="standard"
            />

            {/* <TextField
          margin="dense"
          id="borndate"
          label="Ngày sinh"
          type="date"
          fullWidth
          variant="standard"
          defaultValue="2017-05-24"
      /> */}

        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} variant="contained" color="error">HỦY</Button>
            <Button onClick={handleClose} variant="contained" color="primary">ĐĂNG NHẬP</Button>
        </DialogActions>
    </Dialog>;
}

export default withStyles(styles)(TaskForm);
