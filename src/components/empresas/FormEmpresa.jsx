//Modificado
//Karla Daniela Kopp
//Fecha de modificación: 16/08/2024

import * as React from "react";
import axios from 'axios'; 
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import StackButtons from "../StackButtons";
import { SiteProps } from '../dashboard/SiteProps';

export default function FormEmpresa(props) {
  const [open, setOpen] = React.useState(false);
  const [methodName, setMethodName] = React.useState("");

  const create = () => {
    const row = {
      id: 0,
      nombre: "",
      descripcion: "",
      estado: 0,
      celular: "",
      correo: "",
      contacto: "",
      tipoIdentificacionId: 0,
      personaId: 0,
      identificacion: ""
    };
    props.setSelectedRow(row);
    setMethodName("Add");
    setOpen(true);
    console.log("create() " + JSON.stringify(row));
  };

  const update = () => {
    if (props.selectedRow.id === 0) {
      console.log("Select row");
      const messageData = {
        open: true,
        severity: "error",
        text: "Select row!",
      };
      props.setMessage(messageData);
      return;
    }
    setMethodName("Update");
    setOpen(true);
    console.log("update() " + JSON.stringify(props.selectedRow));
  };

  const deleteRow = () => {
    if (props.selectedRow.id === 0) {
      console.log("Select row");
      const messageData = {
        open: true,
        severity: "error",
        text: "Select row!",
      };
      props.setMessage(messageData);
      return;
    }
    setMethodName("Delete");
    setOpen(true);
    console.log("deleteRow() " + JSON.stringify(props.selectedRow));
  };

  const handleSubmit = () => {
    let url = `${SiteProps.urlbasev1}/empresas`;
    let method = methodName === "Add" ? "POST" : methodName === "Update" ? "PUT" : "DELETE";
    let finalUrl = methodName === "Delete" ? `${url}/delete/${props.selectedRow.id}` : url;

    axios({
      method: method,
      url: finalUrl,
      data: methodName !== "Delete" ? props.selectedRow : {}
    })
      .then((response) => {
        const messageData = {
          open: true,
          severity: "success",
          text: `${methodName} successful!`,
        };
        props.setMessage(messageData);
        setOpen(false);
      })
      .catch((error) => {
        const messageData = {
          open: true,
          severity: "error",
          text: `${methodName} failed!`,
        };
        props.setMessage(messageData);
        console.error(`${methodName} error!`, error);
      });
  };

  return (
    <div>
      <Button variant="outlined" onClick={create}>
        Add Empresa
      </Button>
      <Button variant="outlined" onClick={update}>
        Update Empresa
      </Button>
      <Button variant="outlined" onClick={deleteRow}>
        Delete Empresa
      </Button>
      
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{methodName} Empresa</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {methodName === "Delete"
              ? "Are you sure you want to delete this empresa?"
              : "Please fill out the form below to add/update the empresa."}
          </DialogContentText>
          {methodName !== "Delete" && (
            <>
              <TextField
                autoFocus
                margin="dense"
                id="nombre"
                label="Nombre"
                type="text"
                fullWidth
                variant="standard"
                value={props.selectedRow.nombre}
                onChange={(e) =>
                  props.setSelectedRow({ ...props.selectedRow, nombre: e.target.value })
                }
              />
              <TextField
                margin="dense"
                id="descripcion"
                label="Descripción"
                type="text"
                fullWidth
                variant="standard"
                value={props.selectedRow.descripcion}
                onChange={(e) =>
                  props.setSelectedRow({ ...props.selectedRow, descripcion: e.target.value })
                }
              />
              <FormControl fullWidth>
                <InputLabel id="estado-label">Estado</InputLabel>
                <Select
                  labelId="estado-label"
                  id="estado"
                  value={props.selectedRow.estado}
                  onChange={(e) =>
                    props.setSelectedRow({ ...props.selectedRow, estado: e.target.value })
                  }
                >
                  <MenuItem value={1}>Activo</MenuItem>
                  <MenuItem value={0}>Inactivo</MenuItem>
                </Select>
              </FormControl>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit}>{methodName}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}