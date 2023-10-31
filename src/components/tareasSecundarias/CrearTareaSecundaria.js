import React, { useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import { TareaSecundaria } from '../../models';
import { TextField, TextareaAutosize, Button, Grid, Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Footer from '../AppBar';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { nuevaTareaSecundaria } from '../tareasPrincipales.js/CrudMainTask';
import Swal from 'sweetalert2';

const CrearTareaSecundaria = () => {

  const location = useLocation();
  const tareaP = new URLSearchParams(location.search);
  const id = tareaP.get('id');
  const [titulo, setTitulo] = useState(tareaP.get('titulo'));
  const [fechaVencimiento, setfechaVencimiento] = useState(tareaP.get('fechaVencimiento'))
  
  const [tareaSecundaria, setTareaSecundaria] = useState({
          "estatus": "",
          "descripcion":"",
          "tareaprincipalID": id,
          "usuariosID":" usuarios.id",
          "fechaVencimiento": "",
          "comentarios": ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTareaSecundaria({
      ...tareaSecundaria,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await nuevaTareaSecundaria(tareaSecundaria, id); // Aquí debes pasar el ID de la tarea principal recién creada
      Swal.fire('Tarea secundaria registrada correctamente', '', 'success');
    } catch (error) {
      Swal.fire('Error al registrar la tarea secundaria', error.message, 'error');
    }
  };
  useEffect(() => {
    console.log(titulo);
    console.log(id);
    console.log(fechaVencimiento);

    const TareasSecundarias = async () => {
      const models = await DataStore.query(TareaSecundaria);
      console.log(models);
    };
    TareasSecundarias();
  }, [])


  return (
    <div>
      <Footer userGroups={'administrador'} />
      <div className="container pt-3 pb-4 min-vh-100">
        <div className="d-flex flex-column" style={{ marginBottom: '1rem' }}>
          <div className="pb-2">
            <div className="d-flex justify-content-center">
              <div>
                <Typography variant="h5" component="h2">
                  Crear Nueva Tarea Secundaria para "{titulo}"
                </Typography>
                <div className="d-flex justify-content-center" >
                  <AddTaskIcon color="success" sx={{ fontSize: 150   }}/>
                </div>
              </div>
              <div>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                      fullWidth
                        label="Descripcion"
                        name="descripcion"
                        value={tareaSecundaria.descripcion}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        minRows={3}
                        placeholder="Comentarios"
                        name="comentarios"
                        value={tareaSecundaria.comentarios}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                      fullWidth
                        label="Estatus"
                        name="estatus"
                        value={tareaSecundaria.estatus}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        minRows={3}
                        type='date'
                        placeholder="Fecha de Vencimiento"
                        name="fecha de vencimiento"
                        value={tareaSecundaria.fechaVencimiento}
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>
                  <Box mt={2}>
                    <Button fullWidth type="submit" variant="contained" color="primary">
                      Crear Tarea Secundaria
                    </Button>
                  </Box>
                </form>
              </div>
            </div>
          </div>
        </div>
            Render de tareas de la tarea principal
      </div>
    </div>
  );
};

export default CrearTareaSecundaria;
