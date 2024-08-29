
import * as React from 'react';
// import PropTypes from 'prop-types';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableFooter from '@mui/material/TableFooter';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import IconButton from '@mui/material/IconButton';
// import FirstPageIcon from '@mui/icons-material/FirstPage';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import LastPageIcon from '@mui/icons-material/LastPage';

import MessageSnackBar from '../MessageSnackBar';
import FormTutorial from "./FormTutorial";
import GridTutorial from "./GridTutorial";
// import StackButtons from './components/StackButtons';

export default function Tutorial() {
  const row = {
    id: 0,
    title: "", 
    description: "",
    published: true
  }

  const [selectedRow, setSelectedRow] = React.useState(row);

  const messageData = {
    open:false,
    severity:"success",
    text:""
  }
  const [message, setMessage] = React.useState(messageData);
0
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <MessageSnackBar message={message} setMessage={setMessage} />
      <FormTutorial setMessage={setMessage} selectedRow={selectedRow} setSelectedRow={setSelectedRow} />
      <GridTutorial selectedRow={selectedRow} setSelectedRow={setSelectedRow}/>
    </div>
  );
}
