import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Box, Typography, Card,CardContent, Avatar} from '@mui/material';
import { nuevoUsuario } from '../tareasPrincipales.js/CrudMainTask';
import { Usuarios } from '../../models';
import { DataStore } from 'aws-amplify';


const RegistrarUsuario = ( {userGroups, user} ) => {
    const [role, setRole] = useState()
    const [editMode, setEditMode] = useState(false);
    const [usuario, setUsuario] = useState({
      nombre: user.nombre,
      apellidoM:user.apellidoM,
      apellidoP:user.apellidoP,
      correo: user.correo,
      rol: userGroups
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUsuario({
        ...usuario,
        [name]: value,
      });
    };
  
    const handleEditarClick = () => {
      setEditMode(true);
    };
    const handleNoEditarClick = () => {
        setEditMode(false);
      };
  
    const handleGuardarClick = async () => {
        const existingUser = await DataStore.query(Usuarios, (c) => c.correo.eq(user.correo));
       try {
        if (existingUser.length > 0) {
            console.log(existingUser);
            // El usuario ya existe, actualiza sus datos
            await DataStore.save(Usuarios.copyOf(existingUser[0], (updatedUser) => {
              updatedUser.nombre = usuario.nombre;
              updatedUser.apellidoM = usuario.apellidoM;
              updatedUser.apellidoP = usuario.apellidoP;
              updatedUser.rol = usuario.rol;
            }));
          } else {
            // El usuario no existe, crea uno nuevo
            await nuevoUsuario(usuario);
          }
        
       } catch (error) {
        console.log(error);
       }
      setEditMode(false);
    };

    useEffect(() => {
      
      return () => {
      }
    }, [])

    function stringAvatar(name) {
        return {
          sx: {
            bgcolor: stringToColor(name),
          },
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
      }
      function stringToColor(string) {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
      }
    
  
    return (
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" align="center" color={"secondary"}>
              Perfil de Usuario
            </Typography>
            <Typography variant="subtitle1" align="center" color={"secondary"}>
              Recuerda que completar tu perfil te dará acceso a todas las funciones.
            </Typography>
            {editMode ? (
              <form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Nombre"
                      name="nombre"
                      value={usuario.nombre}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Apellido Materno"
                      name="apellidoM"
                      value={usuario.apellidoM}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Apellido Paterno"
                      name="apellidoP"
                      value={usuario.apellidoP}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      disabled
                      label="Correo Electrónico"
                      name="correo"
                      value={usuario.correo}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Rol"
                      name="rol"
                      value={usuario.rol}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
                <Box mt={2}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleGuardarClick}
                  >
                    Guardar Cambios
                  </Button>
                  <Button
                    fullWidth
                    variant="contained"
                    color="error"
                    onClick={handleNoEditarClick}
                  >
                    Cancelar
                  </Button>
                </Box>
              </form>
            ) : (
              <div>
                <Avatar {...stringAvatar(usuario.nombre+' '+usuario.apellidoP)} style={{alignItems: "rigth"}} />
                <Typography variant="subtitle1">Nombre: {usuario.nombre}</Typography>
                <Typography variant="subtitle1">
                  Apellido Paterno: {usuario.apellidoP}
                </Typography>
                <Typography variant="subtitle1">
                  Apellido Materno: {usuario.apellidoM}
                </Typography>
                <Typography variant="subtitle1">
                  Correo Electrónico: {usuario.correo}
                </Typography>
                <Typography variant="subtitle1">Rol: {usuario.rol}</Typography>
                <Box mt={2} display="flex" justifyContent="center">
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleEditarClick}
                  >
                    Editar
                  </Button>
                </Box>
              </div>
            )}
          </CardContent>
        </Card>
      );
  };

export default RegistrarUsuario;
