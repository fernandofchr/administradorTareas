import React, { useEffect, useState } from 'react';
import { DataStore } from 'aws-amplify';
import { TareaPrincipal } from '../../models'; // Asegúrate de importar tu modelo correctamente
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Button, TextField, Grid} from '@mui/material';
import ActualizarTareaPrincipalButton  from "./Botones/ActualizarTareaPrincipalButton.jsx"
import CrearTareaPrincipalButton  from "./Botones/CrearTareaPrincipalButton"
import EliminarTareaPrincipalButton  from "./Botones/EliminarTareaPrincipalButton.jsx"
import { eliminarTarea } from './CrudMainTask';
import { usNavigate, useNavigate } from 'react-router-dom';
import CrearTareaSecundaria from '../tareasSecundarias/CrearTareaSecundaria';



const TareasTable = () => {
  const navigate = useNavigate();
  const [tareas, setTareas] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [editedTask, setEditedTask] = useState({});
  const [campoEditado, setCampoEditado] = useState(null);
  const [tareaPrincipal, setTareaPrincipal] = useState({
    id: '',
    titulo: '',
    descripcion: '',
    fechaVencimiento: '',
    tareaPrincipalResponsableId:''
  });
  
  const userRole = 'administrador'; // Reemplaza esto con la lógica real para obtener el rol del usuario

  const renderBotones = (tarea) => {
    if (userRole === 'administrador' || userRole === 'lider') {
      return (
        <div className='d-flex justify-content-center'> 
          {userRole === 'administrador' && (
            <>
            <Button maxWidth='auto' variant='contained' color='primary' onClick={()=>{
              navigate(`/crear-tarea-secundaria?titulo=${tarea.titulo}&id=${tarea.id}&fechaVencimiento=${tarea.fechaVencimiento}`);
            }}>
              Añadir tareas Secundarias
            </Button>
            </>
          )}

          {userRole === 'administrador' && (
            <EliminarTareaPrincipalButton onClick={() => {
                  eliminarTarea(tarea.id);
                console.log('Eliminar tarea principal'+ tarea.id);
              }} />
          )}
        </div>
      );
    }
    return null; // Si el usuario no es administrador ni líder, no muestra botones
  };

  
  const listTareas = async () => {
    try {
      const models = await DataStore.query(TareaPrincipal);
      setTareas(models);
    } catch (error) {
      console.error('Error al recuperar las tareas:', error);
    }
  };

  useEffect(() => {
    listTareas();
    if (editingTask) {
      setTareaPrincipal({
        id: editingTask.id,
        titulo: editingTask.titulo,
        descripcion: editingTask.descripcion,
        fechaVencimiento: editingTask.fechaVencimiento,
        tareaPrincipalResponsableId: editingTask.tareaPrincipalResponsableId,
      });
    }
    console.log(editingTask);
  }, []);


  const handleEditTarea = (tarea, campo) => {
    setIsEditing(true);
    setEditingTask(tarea);
    setCampoEditado(campo);
    // Al hacer clic en "Editar Tarea", establece tareaPrincipal con los valores de editingTask.
    setTareaPrincipal({
      id: tarea.id,
      titulo: tarea.titulo,
      descripcion: tarea.descripcion,
      fechaVencimiento: tarea.fechaVencimiento,
      tareaPrincipalResponsableId: tarea.tareaPrincipalResponsableId,
    });
  };


  return (
    <div>
    {isEditing ? (
      <div>
        <h2>Editar Tarea</h2>
        <Grid container spacing={2}>
        <Grid item xs={12}>
        <TextField
          fullWidth
          label="Nuevo Título"
          value={tareaPrincipal.titulo}
          onChange={(e) => setTareaPrincipal({ ...tareaPrincipal, titulo: e.target.value })}
        />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Nueva Descripción"
            value={tareaPrincipal.descripcion}
            onChange={(e) => setTareaPrincipal({ ...tareaPrincipal, descripcion: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Nueva Fecha de Vencimiento"
            type="date"
            value={tareaPrincipal.fechaVencimiento}
            onChange={(e) => setTareaPrincipal({ ...tareaPrincipal, fechaVencimiento: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Nuevo Responsable"
            value={tareaPrincipal.tareaPrincipalResponsableId}
            onChange={(e) => setTareaPrincipal({ ...tareaPrincipal, tareaPrincipalResponsableId: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
        <Button
            variant="contained"
            color="primary"
            onClick={() => {console.log("hola");}}
          >
            Guardar Cambios
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => setIsEditing(false)}
          >
            Cancelar Edición
          </Button>
        </Grid>
        </Grid>
        
      </div>
    ) : (
      <div>
        
      </div>
    )}

    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Titulo</TableCell>
            <TableCell>Descripción</TableCell>
            <TableCell>Fecha limite</TableCell>
            <TableCell>Responsable</TableCell>
            <TableCell  style={{ width: '20px' }}>Acciones</TableCell>
            {/* Agrega más encabezados de columnas según tus necesidades */}
          </TableRow>
        </TableHead>
        <TableBody>
          {tareas.map((tarea) => (
            <TableRow key={tarea.id}>
              <TableCell>{tarea.id}</TableCell>
              <TableCell>{tarea.titulo}</TableCell>
              <TableCell>{tarea.descripcion}</TableCell>
              <TableCell>{tarea.fechaVencimiento}</TableCell>
              <TableCell>{tarea.tareaPrincipalResponsableId}</TableCell>
                <TableCell>
                {renderBotones(tarea)} 
                </TableCell>
                <TableCell>
                {isEditing && editingTask.id === tarea.id ? (
                    /* Botón de edición deshabilitado en modo de edición */
                    <Button disabled>Editar Tarea</Button>
                  ) : (
                    /* Botón de edición habilitado en modo de creación */
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleEditTarea(tarea, 'titulo')}
                    >
                      Editar Tarea
                    </Button>
                  )}
                </TableCell>

              {/* Agrega más celdas de datos según la estructura de tu modelo */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default TareasTable;
