import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Persona from './personas/Persona.jsx';

export default function Home() {
  const [currentModule, setCurrentModule] = React.useState("persona");

  const components = {
    persona: <Persona />,
    // Otros módulos...
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
        <Typography variant="h6" gutterBottom>
          Current Module: {currentModule}
        </Typography>
        {components[currentModule]}
      </Paper>
    </Box>
  );
}
