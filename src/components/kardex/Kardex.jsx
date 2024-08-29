import * as React from 'react';
import axios from 'axios';
import MessageSnackBar from '../MessageSnackBar';
import FormKardex from "./FormKardex";
import GridKardex from "./GridKardex";
import ComboBox from '/src/components/ComboBox.jsx';
import { SiteProps } from '../dashboard/SiteProps';

export default function Kardex() {
  const row = {
    kar_id: 0,
    kar_fecha_hora: new Date(),
    kar_almacen_id: 0,
    kar_produccion_id: 0,
    kar_tipo_movimiento_id: 0,
    kar_descripcion: "",
    kar_estado: 0
  };

  const [selectedRow, setSelectedRow] = React.useState(row);
  const messageData = {
    open: false,
    severity: "success",
    text: ""
  };

  const [message, setMessage] = React.useState(messageData);
  const [kardex, setKardex] = React.useState([]);
  const [almacen, setAlmacen] = React.useState([]);
  const [produccion, setProduccion] = React.useState([]);
  const [tipoMovimiento, setTipoMovimiento] = React.useState([]);
  const [estado, setEstado] = React.useState([]);
  const [filteredKardex, setFilteredKardex] = React.useState([]);
  const [selectedAlmacen, setSelectedAlmacen] = React.useState(null);
  const [selectedProduccion, setSelectedProduccion] = React.useState(null);
  const [selectedMovimiento, setSelectedMovimiento] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${SiteProps.urlbase}/kardex`)
      .then(response => {
        const kardexData = response.data.map((item) => ({
          ...item,
          id: item.kar_id,
          kar_fecha_hora: new Date(item.kar_fecha_hora)
        }));
        setKardex(kardexData);
        setFilteredKardex(kardexData);
      })
      .catch(error => {
        console.error("Error al buscar kardex!", error);
      });
  }, []);

  React.useEffect(() => {
    axios.get(`${SiteProps.urlbase}/almacen`)
      .then(response => {
        setAlmacen(response.data);
      })
      .catch(error => {
        console.error("Error al buscar almacen!", error);
      });
  }, []);

  React.useEffect(() => {
    axios.get(`${SiteProps.urlbase}/produccion`)
      .then(response => {
        setProduccion(response.data);
      })
      .catch(error => {
        console.error("Error al buscar produccion!", error);
      });
  }, []);

  React.useEffect(() => {
    axios.get(`${SiteProps.urlbase}/tipo_movimiento`)
      .then(response => {
        setTipoMovimiento(response.data);
      })
      .catch(error => {
        console.error("Error al buscar tipo_movimiento!", error);
      });
  }, []);

  React.useEffect(() => {
    axios.get(`${SiteProps.urlbase}/estado`)
      .then(response => {
        setEstado(response.data);
      })
      .catch(error => {
        console.error("Error al buscar estado!", error);
      });
  }, []);

  React.useEffect(() => {
    handleFilterChange(selectedAlmacen, selectedProduccion, selectedMovimiento);
  }, [selectedAlmacen, selectedProduccion, selectedMovimiento, kardex]);

  const handleFilterChange = (almacen, produccion, movimiento) => {
    let filteredData = kardex;
    if (almacen) {
      filteredData = filteredData.filter(item => item.kar_almacen_id === almacen.id);
    }
    if (produccion) {
      filteredData = filteredData.filter(item => item.kar_produccion_id === produccion.id);
    }
    if (movimiento) {
      filteredData = filteredData.filter(item => item.kar_tipo_movimiento_id === movimiento.id);
    }
    setFilteredKardex(filteredData);
  };

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <MessageSnackBar message={message} setMessage={setMessage} />
      <ComboBox
        onAlmacenChange={(almacen) => setSelectedAlmacen(almacen)}
        onProduccionChange={(produccion) => setSelectedProduccion(produccion)}
        onMovimientoChange={(movimiento) => setSelectedMovimiento(movimiento)}
      />
      <FormKardex
        setMessage={setMessage}
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
        almacen={almacen}
        produccion={produccion}
        tipoMovimiento={tipoMovimiento}
        estado={estado}
      />
      <GridKardex
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
        kardex={filteredKardex}
      />
    </div>
  );
}



//funcional v2
// import * as React from 'react';
// import axios from 'axios';
// import MessageSnackBar from '../MessageSnackBar';
// import FormKardex from "./FormKardex";
// import GridKardex from "./GridKardex";
// import ComboBox from '/src/components/ComboBox.jsx';
// import { SiteProps } from '../dashboard/SiteProps';

// export default function Kardex() {
//   const row = {
//     kar_id: 0,
//     kar_fecha_hora: new Date(),
//     kar_almacen_id: 0,
//     kar_produccion_id: 0,
//     kar_tipo_movimiento_id: 0,
//     kar_descripcion: "",
//     kar_estado: 0
//   };

//   const [selectedRow, setSelectedRow] = React.useState(row);
//   const messageData = {
//     open: false,
//     severity: "success",
//     text: ""
//   };

//   const [message, setMessage] = React.useState(messageData);
//   const [kardex, setKardex] = React.useState([]);
//   const [almacen, setAlmacen] = React.useState([]);
//   const [produccion, setProduccion] = React.useState([]);
//   const [tipoMovimiento, setTipoMovimiento] = React.useState([]);
//   const [estado, setEstado] = React.useState([]);
//   const [filteredKardex, setFilteredKardex] = React.useState([]);

//   React.useEffect(() => {
//     axios.get(`${SiteProps.urlbase}/kardex`)
//       .then(response => {
//         const kardexData = response.data.map((item) => ({
//           ...item,
//           id: item.kar_id,
//           kar_fecha_hora: new Date(item.kar_fecha_hora)
//         }));
//         setKardex(kardexData);
//         setFilteredKardex(kardexData);
//       })
//       .catch(error => {
//         console.error("Error al buscar kardex!", error);
//       });
//   }, []);

//   React.useEffect(() => {
//     axios.get(`${SiteProps.urlbase}/almacen`)
//       .then(response => {
//         setAlmacen(response.data);
//       })
//       .catch(error => {
//         console.error("Error al buscar almacen!", error);
//       });
//   }, []);

//   React.useEffect(() => {
//     axios.get(`${SiteProps.urlbase}/produccion`)
//       .then(response => {
//         setProduccion(response.data);
//       })
//       .catch(error => {
//         console.error("Error al buscar produccion!", error);
//       });
//   }, []);

//   React.useEffect(() => {
//     axios.get(`${SiteProps.urlbase}/tipo_movimiento`)
//       .then(response => {
//         setTipoMovimiento(response.data);
//       })
//       .catch(error => {
//         console.error("Error al buscar tipo_movimiento!", error);
//       });
//   }, []);

//   React.useEffect(() => {
//     axios.get(`${SiteProps.urlbase}/estado`)
//       .then(response => {
//         setEstado(response.data);
//       })
//       .catch(error => {
//         console.error("Error al buscar estado!", error);
//       });
//   }, []);

//   const handleFilterChange = (selectedAlmacen, selectedProduccion, selectedMovimiento) => {
//     let filteredData = kardex;
//     if (selectedAlmacen) {
//       filteredData = filteredData.filter(item => item.kar_almacen_id === selectedAlmacen.id);
//     }
//     if (selectedProduccion) {
//       filteredData = filteredData.filter(item => item.kar_produccion_id === selectedProduccion.id);
//     }
//     if (selectedMovimiento) {
//       filteredData = filteredData.filter(item => item.kar_tipo_movimiento_id === selectedMovimiento.id);
//     }
//     setFilteredKardex(filteredData);
//   };

//   return (
//     <div style={{ height: '100%', width: '100%' }}>
//       <MessageSnackBar message={message} setMessage={setMessage} />
//       <ComboBox
//         onAlmacenChange={(almacen) => handleFilterChange(almacen, null, null)}
//         onProduccionChange={(produccion) => handleFilterChange(null, produccion, null)}
//         onMovimientoChange={(movimiento) => handleFilterChange(null, null, movimiento)}
//       />
//       <FormKardex
//         setMessage={setMessage}
//         selectedRow={selectedRow}
//         setSelectedRow={setSelectedRow}
//         almacen={almacen}
//         produccion={produccion}
//         tipoMovimiento={tipoMovimiento}
//         estado={estado}
//       />
//       <GridKardex
//         selectedRow={selectedRow}
//         setSelectedRow={setSelectedRow}
//         kardex={filteredKardex}
//       />
//     </div>
//   );
// }


//v1
// import * as React from 'react';
// import axios from 'axios';
// import MessageSnackBar from '../MessageSnackBar';
// import FormKardex from "./FormKardex";
// import GridKardex from "./GridKardex";
// import { SiteProps } from '../dashboard/SiteProps';
// import ComboBox from '/src/components/ComboBox.jsx';


// export default function Kardex() {
//   const row = {
//     kar_id: 0,
//     kar_fecha_hora: new Date(),
//     kar_almacen_id: 0,
//     kar_produccion_id: 0,
//     kar_tipo_movimiento_id: 0,
//     kar_descripcion: "",
//     kar_estado: 0
//   };

//   const [selectedRow, setSelectedRow] = React.useState(row);
//   const messageData = {
//     open: false,
//     severity: "success",
//     text: ""
//   };

//   const [message, setMessage] = React.useState(messageData);
//   const [kardex, setKardex] = React.useState([]);
//   const [almacen, setAlmacen] = React.useState([]);
//   const [produccion, setProduccion] = React.useState([]);
//   const [tipoMovimiento, setTipoMovimiento] = React.useState([]);
//   const [estado, setEstado] = React.useState([]);

//   React.useEffect(() => {
//     axios.get(`${SiteProps.urlbase}/kardex`)
//       .then(response => {
//         const kardexData = response.data.map((item) => ({
//           ...item,
//           id: item.kar_id,
//           kar_fecha_hora: new Date(item.kar_fecha_hora)
//         }));
//         setKardex(kardexData);
//         console.log(kardexData);
//       })
//       .catch(error => {
//         console.error("Error al buscar kardex!", error);
//       });
//   }, []);

//   React.useEffect(() => {
//     axios.get(`${SiteProps.urlbase}/almacen`)
//       .then(response => {
//         setAlmacen(response.data);
//         console.log(almacen);
//       })
//       .catch(error => {
//         console.error("Error al buscar almacen!", error);
//       });
//   }, []);

//   React.useEffect(() => {
//     axios.get(`${SiteProps.urlbase}/produccion`)
//       .then(response => {
//         setProduccion(response.data);
//         console.log(produccion);
//       })
//       .catch(error => {
//         console.error("Error al buscar produccion!", error);
//       });
//   }, []);

//   React.useEffect(() => {
//     axios.get(`${SiteProps.urlbase}/tipo_movimiento`)
//       .then(response => {
//         setTipoMovimiento(response.data);
//         console.log(tipoMovimiento);
//       })
//       .catch(error => {
//         console.error("Error al buscar tipo_movimiento!", error);
//       });
//   }, []);

//   React.useEffect(() => {
//     axios.get(`${SiteProps.urlbase}/estado`)
//       .then(response => {
//         setEstado(response.data);
//         console.log(estado);
//       })
//       .catch(error => {
//         console.error("Error al buscar estado!", error);
//       });
//   }, []);

//   return (
//     <div style={{ height: '100%', width: '100%' }}>
//     <ComboBox/> 
//       <MessageSnackBar message={message} setMessage={setMessage} />
//       <FormKardex
//         setMessage={setMessage}
//         selectedRow={selectedRow}
//         setSelectedRow={setSelectedRow}
//         almacen={almacen}
//         produccion={produccion}
//         tipoMovimiento={tipoMovimiento}
//         estado={estado}
//       />
//       <GridKardex
//         selectedRow={selectedRow}
//         setSelectedRow={setSelectedRow}
//         kardex={kardex}
//       />
//     </div>
//   );
// }