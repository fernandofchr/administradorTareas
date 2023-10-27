import React, { useState } from 'react';
import { nuevaTarea } from './CrudMainTask'; // Asegúrate de importar correctamente tu función
import { TextField, TextareaAutosize, Button, Grid, Box } from '@mui/material';
import Footer from '../AppBar';

const CrearTareaPrincipal = () => {
  const [tarea, setTarea] = useState({
    titulo: '',
    descripcion: '',
    fechaVencimiento: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTarea({
      ...tarea,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await nuevaTarea(tarea);
      // La tarea se ha creado con éxito, ahora restablece los campos del formulario
      setTarea({
        titulo: '',
        descripcion: '',
        fechaVencimiento: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

    return (
        <>
        
          <>
          <Footer userGroups={"administrador"}/>
          <div className='container pt-3 pb-4 min-vh-100'>
            <div className='d-flex flex-column' style={{ marginBottom: '1rem' }}>
              <div className="pb-4">
                < div className='d-flex justify-content-center'>
        
                <div>
      <h2>Crear Nueva Tarea Principal</h2>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Título"
              name="titulo"
              value={tarea.titulo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextareaAutosize
              minRows={3}
              placeholder="Descripción"
              name="descripcion"
              value={tarea.descripcion}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Fecha de Vencimiento"
              type="date"
              name="fechaVencimiento"
              value={tarea.fechaVencimiento}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Box mt={2}>
          <Button type="submit" variant="contained" color="primary">
            Crear Tarea Principal
          </Button>
        </Box>
      </form>
    </div>
                  
                  
                </div>
              </div>
            </div>
          </div>
          </>

        </>
      )
};

export default CrearTareaPrincipal;
