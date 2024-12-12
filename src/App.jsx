import React, { useState } from 'react';
import { Button } from '@mui/material';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import ForYouPage from './components/ForYouPage';
import './App.css';

function App() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);
  
  const handleOpenRegister = () => setOpenRegister(true);
  const handleCloseRegister = () => setOpenRegister(false);

  return (
    <div>
      <header className="app-header">
        <h1>DailyHunt</h1>
        <div className="header-buttons">
          <Button variant="outlined" onClick={handleOpenLogin}>
            Login
          </Button>
          <Button variant="outlined" onClick={handleOpenRegister}>
            Register
          </Button>
        </div>
      </header>

      {/* Display the For You page and Cricket page */}
      <ForYouPage />
      <CricketPage /> {/* Ensure this is rendering properly */}

      <LoginModal open={openLogin} onClose={handleCloseLogin} />
      <RegisterModal open={openRegister} onClose={handleCloseRegister} />
    </div>
  );
}

export default App;
