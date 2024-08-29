import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'; 

function AppBarComponent({ buttonLabel, onButtonClick, secondaryButtonLabel, onSecondaryButtonClick, switchComponent }) {
  return (
    <AppBar position="fixed" sx={{ width: '100%', backgroundColor: '#114232' }}>
      <Toolbar>
        <Typography 
          variant="h6" 
          sx={{ flexGrow: 1 }} 
          component={Link} 
          to="/" 
          style={{ textDecoration: 'none', color: 'inherit' }} 
        >
          Agro Application
        </Typography>
        {switchComponent && (
          <Box sx={{ marginRight: 2 }}>
            {switchComponent}
          </Box>
        )}
        {secondaryButtonLabel && (
          <Button color="inherit" onClick={onSecondaryButtonClick} sx={{ mr: 2 }}>
            {secondaryButtonLabel}
          </Button>
        )}
        <Button color="inherit" onClick={onButtonClick}>
          {buttonLabel}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default AppBarComponent;