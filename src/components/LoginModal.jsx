// src/components/LoginModal.jsx
import React, { useState } from 'react';
import { Modal, Button, TextField } from '@mui/material';
import { sendOtp, verifyOtp } from '../services/api_service';


const LoginModal = ({ open, onClose }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSendOtp = async () => {
    try {
      await sendOtp(email);
      setOtpSent(true);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      await verifyOtp(email, otp);
      setErrorMessage('OTP verified successfully!');
      // Add login functionality here after verification
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="modal-content">
        <h2>Login</h2>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        {otpSent && (
          <div>
            <TextField
              label="OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              fullWidth
            />
            <Button onClick={handleVerifyOtp} variant="contained">Verify OTP</Button>
          </div>
        )}
        {!otpSent && (
          <Button onClick={handleSendOtp} variant="contained">Send OTP</Button>
        )}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>
    </Modal>
  );
};

export default LoginModal;
