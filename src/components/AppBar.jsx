  import * as React from 'react';
  import AppBar from '@mui/material/AppBar';
  import Box from '@mui/material/Box';
  import Toolbar from '@mui/material/Toolbar';
  import Typography from '@mui/material/Typography';
  import Button from '@mui/material/Button';

  import { useNavigate } from 'react-router-dom';
  import { Auth, DataStore } from 'aws-amplify';


  export default function Footer({userGroups}) {
    const navigate= useNavigate();
    const isAdmin = userGroups && userGroups.includes('administrador');
    const isLeader = userGroups && userGroups.includes('supervisor');
    console.log(isAdmin);
    
    const handleSignOut = async () => { // Agrega la palabra clave async aquí
      try {
        await Auth.signOut();
        navigate('/');
        await DataStore.clear();
              localStorage.clear();
              sessionStorage.clear();
      } catch (error) {
        console.log('error signing out: ', error);
      }
    }
    const handleButtonClick = (route) => {
      navigate(route);
    }

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            
            {isAdmin && (
              <><Typography variant="h6" component="div" sx={{ flexGrow: 1 }}  onClick={() => handleButtonClick('/inicio-admin')} >
                Administrador
              </Typography><Box sx={{ flexGrow: 2, display: 'flex', alignItems: 'center' }}>
                  <Button onClick={() => handleButtonClick('/tareas-principales')} variant="contained" color="secondary" sx={{ margin: '4px' }}>
                    Tareas Principales 
                  </Button>
                  <Button onClick={() => handleButtonClick('/admin')} variant="contained" color="secondary" sx={{ margin: '4px' }}>
                    Tareas Secundarias 
                  </Button>
                  <Button onClick={() => handleButtonClick('/admin-tabla-usuarios')} variant="contained" color="secondary" sx={{ margin: '4px' }}>
                    Usuarios 
                  </Button>
                </Box></>
            )}
            {isLeader && (
              <><Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Líder
              </Typography><Box sx={{ flexGrow: 2, display: 'flex', alignItems: 'center' }}>
                  <Button onClick={() => handleButtonClick('/leader')} variant="contained" color="secondary" sx={{ margin: '4px' }}>
                    Tareas Principlaes
                  </Button>
                  <Button onClick={() => handleButtonClick('/admin')} variant="contained" color="secondary" sx={{ margin: '4px' }}>
                    Tareas Secundarias 
                  </Button>
                </Box></>
            )}
            {!isAdmin && !isLeader && (
              <><Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Responsable
              </Typography><Box sx={{ flexGrow: 2, display: 'flex', alignItems: 'center' }}>
                  <Button onClick={() => handleButtonClick('/general')} variant="contained" color="secondary" sx={{ margin: '4px' }}>
                    Tareas Generales
                  </Button>
                </Box></>
            )}
            <Button onClick={handleSignOut} color="inherit">Cerrar Sesión</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
    
  }
