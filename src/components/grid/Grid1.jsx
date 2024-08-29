import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';

import Orders from './Orders';
import Home from '../Home';

/**
 * Componente Grid1 que organiza y renderiza otros componentes utilizando Material-UI.
 * 
 * @returns {JSX.Element} Componente que contiene la estructura de la interfaz.
 */
export default function Grid1() {
    return (
        // Se puede descomentar el siguiente código para mostrar una cuadrícula con pedidos recientes
        // <Grid container spacing={3}>
        //     {/* Recent Orders */}
        //     <Grid item xs={12}>
        //         <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
        //             <Orders />
        //         </Paper>
        //     </Grid>
        // </Grid>

        <Home />
    );
}



// import React from 'react';

// const Grid1 = () => {
//   return (
//     <div>
//       {/* <h1>Contenido Principal</h1> */}
//     </div>
//   );
// };

// export default Grid1