import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import { SiteProps } from './dashboard/SiteProps';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Box from '@mui/material/Box';

export default function ComboBox({ onAlmacenChange, onProduccionChange, onMovimientoChange }) {
  const [movimiento, setMovimiento] = useState([]);
  const [almacen, setAlmacen] = useState([]);
  const [produccion, setProduccion] = useState([]);
  const [selectedAlmacen, setSelectedAlmacen] = useState(null);
  const [selectedProduccion, setSelectedProduccion] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    axios.get(`${SiteProps.urldinamica}/items/tipo_movimiento`)
      .then(response => {
        setMovimiento(response.data);
      })
      .catch(error => console.error('Error fetching tipo_movimiento:', error));

    axios.get(`${SiteProps.urldinamica}/items/almacen`)
      .then(response => {
        setAlmacen(response.data);
      })
      .catch(error => console.error('Error fetching almacen:', error));

    axios.get(`${SiteProps.urldinamica}/items/produccion`)
      .then(response => {
        setProduccion(response.data);
      })
      .catch(error => console.error('Error fetching produccion:', error));
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ display: 'flex', gap: 2, mb: 4 , pt:2 }}>
        <DateTimePicker
          label="Fecha Inicio (MM/DD/YYYY hh:mm)"
          value={startDate}
          onChange={(newValue) => {
            setStartDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} sx={{ width: 300}} />}
          ampm={false}
        />
        <DateTimePicker
          label="Fecha Fin (MM/DD/YYYY hh:mm)"
          value={endDate}
          onChange={(newValue) => {
            setEndDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} sx={{ width: 300}} />}
          ampm={false}
        />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, pb:2 }}>
        <Autocomplete
          disablePortal
          id="combo-box-almacen"
          options={almacen}
          getOptionLabel={(option) => option.nombre}
          sx={{ width: 300,display: 'flex' }}
          onChange={(event, newValue) => {
            setSelectedAlmacen(newValue);
            onAlmacenChange(newValue);
          }}
          renderInput={(params) => <TextField {...params} label="Almacén" />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-produccion"
          options={produccion}
          getOptionLabel={(option) => option.nombre}
          sx={{ width: 300,display: 'flex' }}
          onChange={(event, newValue) => {
            setSelectedProduccion(newValue);
            onProduccionChange(newValue);
          }}
          renderInput={(params) => <TextField {...params} label="Producción" />}
          disabled={!selectedAlmacen}
        />
        <Autocomplete
          disablePortal
          id="combo-box-tipo-movimiento"
          options={movimiento}
          getOptionLabel={(option) => option.nombre}
          sx={{ width: 300,display: 'flex' }}
          onChange={(event, newValue) => {
            onMovimientoChange(newValue);
          }}
          renderInput={(params) => <TextField {...params} label="Tipo Movimiento" />}
          disabled={!selectedProduccion}
        />
      </Box>
    </LocalizationProvider>
  );
}

