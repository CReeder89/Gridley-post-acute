import { useEffect, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { red, green } from '@mui/material/colors';
import FormControlLabel from '@mui/material/FormControlLabel';

const POPUP_VERSION = '1.9.5'; // Update this version each time you change the popup content

const Popup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  useEffect(() => {
    // Check if the current popup version has been acknowledged
    const acknowledgedVersion = localStorage.getItem('popupAcknowledgedVersion');
    if (acknowledgedVersion !== POPUP_VERSION) {
      setIsVisible(true);
    }
  }, []);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleClose = () => {
    if (isChecked) {
      // Store the current version as acknowledged in local storage
      localStorage.setItem('popupAcknowledgedVersion', POPUP_VERSION);
      setIsVisible(false);
    } else {
      alert("Please check the box to confirm you understand.");
    }
  };

  if (!isVisible) return null;

  return (
    <div style={overlayStyle}>
      <div style={popupStyle}>
        <h2 style={popupTitleStyle}>Website Improvements Underway</h2>
        <p style={popupTextStyle}>
          We are actively working on enhancing our website. Below are some of the improvements in progress:
        </p>
        <ul style={popupListStyle}>
          <li>Gallery page currently uses placeholder images</li>
          <li>Adding images to staff on "Meet the Staff" page</li>
          <li>Adding more facility images</li>
          <li>Contact form functionality is working but not yet targeting the final email</li>
          <li>Logo needs reworking; current version has a temporary background removal</li>
          <li>Testimonials are currently filler, not actual quotes or people</li>
        </ul>

        <p><strong>Accessibility Assistance</strong></p>
        <p style={popupTextStyle}>
        
        If you are experiencing difficulty using this website due to a disability or if you require assistance with any information, please call us directly at <strong>(530) 456-0400</strong>. Our team is ready to help ensure you have full access to all information and services.
        </p>
        
      </div>

      <div style={checkboxContainerStyle}>

          <div>
        <FormControlLabel 
        label="I understand"
        control={<Checkbox
          {...label}
          defaultChecked ={isChecked}
          onChange={handleCheckboxChange}
          sx={{
            color: red[800],
            '&.Mui-checked': {
              color: green[600],
            },
          }}
        />}/>
          </div>
        
        <button onClick={handleClose} style={buttonStyle}>
          Close
        </button>
        </div>
    </div>
  );
};

// Styles
const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1003,
  flexDirection: 'column',
  gap: '10px'
  
};

const popupStyle: React.CSSProperties = {
  width: '90%',
  maxWidth: '500px',
  maxHeight: '75%',
  backgroundColor: '#fff',
  borderRadius: '8px',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  textAlign: 'center',
  overflow: 'scroll'
};

const popupTitleStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  color: '#2c3e50',
  marginBottom: '15px',
};

const popupTextStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: '#333',
  marginBottom: '10px',
};

const popupListStyle: React.CSSProperties = {
  textAlign: 'left',
  padding: '0 20px',
  color: '#333',
  marginBottom: '20px',
  lineHeight: '1.6',
};

const checkboxContainerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  alignContent: 'center',
  marginBottom: '20px',
  gap: '20px',
  background: 'white',
  width: '90%',
  maxWidth: '500px',
  borderRadius: '8px',
  padding: '5px'
};

const checkboxLabelStyle: React.CSSProperties = {
  marginLeft: '10px',
  color: '#000',
  fontSize: '1rem',
};

const buttonStyle: React.CSSProperties = {
  padding: '10px 20px',
  backgroundColor: '#3498db',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1rem',
};

export default Popup;
