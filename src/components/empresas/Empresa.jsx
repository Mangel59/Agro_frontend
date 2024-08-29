// import * as React from "react";
// import axios from "../axiosConfig";
// import MessageSnackBar from "../MessageSnackBar";
// import FormEmpresa from "./FormEmpresa";
// import GridEmpresa from "./GridEmpresa";
// import { SiteProps } from "../dashboard/SiteProps";

// export default function Empresa() {
//   const row = {
//     id: 0,
//     tipoIdentificacion: 0,
//     identificacion: "",
//     apellido: "",
//     nombre: "",
//     genero: true,
//     fechaNacimiento: "",
//     estrato: 0,
//     direccion: "",
//     celular: "",
//     estado: 0,
//   };

//   const [selectedRow, setSelectedRow] = React.useState(row);
//   const messageData = {
//     open: false,
//     severity: "success",
//     text: "",
//   };

//   const [message, setMessage] = React.useState(messageData);
//   const [empresas, setEmpresas] = React.useState([]);

//   const [openForm, setOpenForm] = React.useState(false); //Abrir FormEmpresa

//   React.useEffect(() => {
//     axios
//       .get(`${SiteProps.urlbasev1}/empresas/all`)
//       .then((response) => {
//         const empresaData = response.data.map((item) => ({
//           ...item,
//           id: item.id,
//         }));
//         setEmpresas(empresaData);
//         console.log(empresaData);
//       })
//       .catch((error) => {
//         console.error("Error al buscar empresas!", error);
//       });
//   }, []);

//   // Abre el formulario automáticamente cuando el componente se monta
//   React.useEffect(() => {
//     setOpenForm(true);
//   }, []);

//   return (
//     <div style={{ height: "100%", width: "100%" }}>
//       <MessageSnackBar message={message} setMessage={setMessage} />
//       <FormEmpresa
//         setMessage={setMessage}
//         selectedRow={selectedRow}
//         setSelectedRow={setSelectedRow}
//         empresas={empresas}
//         open={openForm}
//         setOpen={setOpenForm}
//       />
//       <GridEmpresa
//         selectedRow={selectedRow}
//         setSelectedRow={setSelectedRow}
//         empresas={empresas}
//       />
//     </div>
//   );
// }

import * as React from "react";
// import axios from "../axiosConfig";
import axios from "axios";
import MessageSnackBar from "../MessageSnackBar";
import FormEmpresa from "./FormEmpresa";
import GridEmpresa from "./GridEmpresa";
import { SiteProps } from "../dashboard/SiteProps";

export default function Empresa() {
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

  const [selectedRow, setSelectedRow] = React.useState(row);
  const messageData = {
    open: false,
    severity: "success",
    text: "",
  };

  const [message, setMessage] = React.useState(messageData);
  const [empresas, setEmpresas] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`${SiteProps.API_URL}/empresas`)
      .then((response) => {
        const empresaData = response.data.map((item) => ({
          ...item,
          id: item.id,
        }));
        setEmpresas(empresaData);
        console.log(empresaData);
      })
      .catch((error) => {
        console.error("Error al buscar empresas!", error);
      });
  }, []);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <MessageSnackBar message={message} setMessage={setMessage} />
      <FormEmpresa
        setMessage={setMessage}
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
        empresas={empresas}
      />
      <GridEmpresa
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
        empresas={empresas}
      />
    </div>
  );
}
