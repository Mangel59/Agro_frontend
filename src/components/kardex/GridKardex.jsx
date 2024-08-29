/**
 * 
 */



import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'kar_id', headerName: 'ID', width: 90, type: 'number' },
  {
    field: 'kar_fecha_hora',
    headerName: 'Fecha y Hora',
    width: 200,
    type: 'dateTime',
    valueGetter: (params) => new Date(params.value)
  },
  { field: 'kar_almacen_id', headerName: 'Almacén', width: 150, type: 'number' },
  { field: 'kar_produccion_id', headerName: 'Producción', width: 150, type: 'number' },
  { field: 'kar_tipo_movimiento_id', headerName: 'Tipo Movimiento', width: 150, type: 'number' },
  { field: 'kar_descripcion', headerName: 'Descripción', width: 250, type: 'string' },
  { field: 'kar_estado', headerName: 'Estado', width: 120, type: 'number' }
];

export default function GridKardex(props) {
  return (
    <DataGrid
      rows={props.kardex}
      onRowSelectionModelChange={(id) => {
        const selectedIDs = new Set(id);
        const selectedRowData = props.kardex.filter((row) =>
          selectedIDs.has(row.id)
        );
        props.setSelectedRow(selectedRowData[0]);
        console.log(props.selectedRow);
      }}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5,10,20,50]}
    />
  );
}
