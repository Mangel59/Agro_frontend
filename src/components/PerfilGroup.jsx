//AGREGAR

import React from 'react';
import { Box, Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import Persona from './personas/Persona.jsx';
import TipoIdentificacion from './TipoIdentificacion';

const PerfilGroup = ({ setCurrentModule }) => {
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center" p={2}>
      <Card sx={{ minWidth: 275, m: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Personas
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Gestión de personas - persona
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => setCurrentModule(<Persona />)}>OPEN</Button>
        </CardActions>
      </Card>
      
      <Card sx={{ minWidth: 275, m: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Tipo de Identificación
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Gestión de tipos de identificación - tipo_identificacion
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => setCurrentModule(<TipoIdentificacion />)}>OPEN</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default PerfilGroup;
