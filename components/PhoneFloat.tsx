import * as React from 'react';
import Fab from '@mui/material/Fab';
import PhoneIcon from '@mui/icons-material/Phone';
import Link from 'next/link';



 const PhoneFloat = () => {


  return (
    <Fab href="tel:530-456-0400" variant="extended" style={{background: '#f9f9f9',gridColumn: '1/3'}}>
    <PhoneIcon sx={{ mr: 1, color:'#2c3e50' }} />
    <p style={{ color: '#2c3e50', whiteSpace: 'nowrap', }}>(530) 456-0400</p>
    </Fab>

);
}

  



export default PhoneFloat