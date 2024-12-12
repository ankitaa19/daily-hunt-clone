// src/components/Header.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

const Header = ({ onLoginClick, onRegisterClick }) => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Daily Hunt
          </Typography>
          <Button color="inherit" onClick={onLoginClick}>
            Login
          </Button>
          <Button color="inherit" onClick={onRegisterClick}>
            Register
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
