import React, { useState } from 'react';
import { nuevaTarea } from './CrudMainTask'; // Asegúrate de importar correctamente tu función
import { TextField, TextareaAutosize, Button, Grid, Box } from '@mui/material';
import Footer from '../AppBar';

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
