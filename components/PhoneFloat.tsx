import * as React from 'react';
import Fab from '@mui/material/Fab';
import PhoneIcon from '@mui/icons-material/Phone';

export default function PhoneFloat() {
  return (
      <Fab variant="extended" style={{background: '#f9f9f9'}}>
      <PhoneIcon sx={{ mr: 1, color:'#2c3e50' }} />
      <p style={{ color: '#2c3e50'}}>(530) 456-0400</p>
      </Fab>

  );
}
