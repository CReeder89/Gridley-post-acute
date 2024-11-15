import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { SnackbarContentProps } from '@mui/material';
import { useEffect, useState } from 'react';

interface AlertProps {
    message: string;
    onClose: any
}

const SuccessAlert: React.FC<AlertProps> = ({ message, onClose }) => {




    const [open, setOpen] = useState(false)
  


    useEffect(() => {
        if (message !== '') {
            setOpen(true)
        }else{
            setOpen(false)
        }
    }, [message]);


    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }
        

        onClose()
    
    };

    return (

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}  anchorOrigin={{ vertical: 'bottom', horizontal:'right' }}>
            <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
            >
                {message}
            </Alert>
        </Snackbar>

    );
}


export default SuccessAlert