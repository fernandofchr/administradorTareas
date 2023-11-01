import React, { useState, useEffect } from 'react';
import { nuevaTarea, nuevaTareaSecundaria } from '../tareasPrincipales.js/CrudMainTask'; // Asegúrate de importar tus funciones correctamente
import { Typography,TextField,Button,Grid,Select, MenuItem } from '@mui/material';
import { Usuarios } from '../../models';
import Swal from 'sweetalert2';
import Footer from '../AppBar';
import { useNavigate } from 'react-router-dom';
import { TareaPrincipal } from '../../models';
import { DataStore } from 'aws-amplify';

const CrearTareaPrincipal = () => {
  const [usuarios, setUsuarios] = useState([])
  const [tareaPrincipal, setTareaPrincipal] = useState({
    id: '',
    titulo: '',
    descripcion: '',
    fechaVencimiento: '',
    tareaPrincipalResponsableId:''
  });

  const [tareaSecundaria, setTareaSecundaria] = useState({
    descripcion: '',
    estatus: '',
  });
  
  const navigate= useNavigate();
  const [habilitarTareaSecundaria, setHabilitarTareaSecundaria] = useState(false);

  useEffect(() => {
    // Obtener la lista de usuarios registrados al cargar el componente
    const fetchUsuarios = async () => {
      try {
        const users = await DataStore.query(Usuarios);  
        await setUsuarios(users);
      } catch (error) {
        console.error('Error al obtener la lista de usuarios', error);
      }
    };
    fetchUsuarios();
    console.log(usuarios);
  }, []);

  const handleChangeTareaPrincipal = (e) => {
    const { name, value } = e.target;
    if (name === 'tareaPrincipalResponsableId') {
      // Establece el valor del responsable en la tarea principal
      setTareaPrincipal((prevTareaPrincipal) => ({
        ...prevTareaPrincipal,
        [name]: value,
      }));
    } else {
      setTareaPrincipal({
        ...tareaPrincipal,
        [name]: value,
      });
    }
  };
  

  const handleChangeTareaSecundaria = (e) => {
    const { name, value } = e.target;
    setTareaSecundaria({
      ...tareaSecundaria,
      [name]: value,
    });
  };

  const handleCrearTareaPrincipal = async () => {
    try {
      await nuevaTarea(tareaPrincipal, usuarios);
      setHabilitarTareaSecundaria(true);  
      await navigate(`/tareas-principales`)
      Swal.fire('Tarea principal registrada correctamente', '', 'success');
    } catch (error) {
      Swal.fire('Error al registrar la tarea principal', error.message, 'error');
    }
  };

  const handleCrearTareaSecundaria = async () => {
    try {
      await nuevaTareaSecundaria(tareaSecundaria, tareaPrincipal.id); // Aquí debes pasar el ID de la tarea principal recién creada
      Swal.fire('Tarea secundaria registrada correctamente', '', 'success');
    } catch (error) {
      Swal.fire('Error al registrar la tarea secundaria', error.message, 'error');
    }
  };

  return (
    <>
    <Footer userGroups={"administrador"} />
      <div className="d-flex justify-content-center">
        <div>
          <Typography variant="h4" component="h2">
            Creador de Tareas
          </Typography>
          <div>
            <Typography variant="h6">Tarea Principal</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
            <TextField
              fullWidth
              label="Título"
              name="titulo"
              value={tareaPrincipal.titulo}
              onChange={handleChangeTareaPrincipal}
            /></Grid>
            <Grid item xs={12}>
            <TextField
              fullWidth
              minRows={3}
              placeholder="Descripción"
              name="descripcion"
              value={tareaPrincipal.descripcion}
              onChange={handleChangeTareaPrincipal}
            /></Grid>
            <Grid item xs={12}>
            <TextField
              fullWidth
              label="Fecha de Vencimiento"
              type="date"
              name="fechaVencimiento"
              value={tareaPrincipal.fechaVencimiento}
              onChange={handleChangeTareaPrincipal}
            />
            </Grid>
            <Grid item xs={12}>
            <Select
              fullWidth
              label="Responsable"
              name="tareaPrincipalResponsableId"
              value={tareaPrincipal.tareaPrincipalResponsableId}
              onChange={handleChangeTareaPrincipal}>
                  {usuarios.map((user) => (
                    <MenuItem key={user.id} value={user.id}>
                      {user.nombre} {user.apellidoP} {user.id}
                    </MenuItem>
                  ))}
                </Select>
            </Grid>
            <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleCrearTareaPrincipal}
            >
              Crear Tarea Principal
            </Button>
            </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrearTareaPrincipal;
