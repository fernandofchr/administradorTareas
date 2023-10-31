import {Link} from 'react-router-dom';
import './App.css';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, CardContent, Grid, Typography, CardActions } from '@mui/material';


function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <p>
          BIENVENIDO DE NUEVO ¿CÓMO DESEA INGRESAR?
        </p>
      </header>
    </div>
      <div className='contenedor' >
        < div className='d-flex justify-content-center'>
          <div className='cards'>
            <Grid  container spacing={6}>
              <Grid item xs={4}>
                <Card sx={{
                  maxWidth: 400,
                  backgroundColor: "var(--var-card-dark)",
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 8, backgroundColor: '#6495ED' }}></div>
                <div className='avatar' style={{ position: 'relative', padding: 20 }}>
                <Avatar sx={{bgcolor: "gray" }} aria-label="recipe">
                  <AdminPanelSettingsIcon/>
                </Avatar>
                </div>  
                  <CardContent>
                    <div className='typography'>
                    <Typography variant="h5" component="div">
                    Administrador
                    </Typography>
                    </div>
                  </CardContent>
                  <div className='espacio'></div>
                <div className='button-action'>
                <CardActions>
                  <Button size="small"><Link to="/admin-login">Iniciar sesión</Link></Button>
                </CardActions>
                </div>
                </Card>
              </Grid>
              <Grid item xs={4}>
              <Card sx={{ 
                maxWidth: 400,
                backgroundColor: "var(--var-card-dark)",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative' 
              }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 8, backgroundColor: '#3CB371' }}></div>
                <div className='avatar' style={{ position: 'relative', padding: 20 }}>
                <Avatar sx={{ bgcolor: "gray", alignItems: "center" }} aria-label="recipe">
                  <SupervisorAccountIcon/>
                </Avatar>
                </div>
                  <CardContent>
                    <div className='typography'>
                    <Typography variant="h5" className='typography'>
                    Supervisor
                    </Typography>
                    </div>
                  </CardContent>
                  <div className='espacio'></div>
                <div className='button-action'>
                <CardActions>
                  <Button size="small"><Link to="/supervisor-login">Iniciar sesión</Link> </Button>
                </CardActions>
                </div>
                </Card>
              </Grid>
              <Grid item xs={4}>
              <Card sx={{ 
                maxWidth: 400,
                backgroundColor: "var(--var-card-dark)",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative' 
               }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 8, backgroundColor: '#CD5C5C' }}></div>
                <div className='avatar' style={{ position: 'relative', padding: 20 }}>
                <Avatar sx={{ bgcolor: "gray" }} aria-label="recipe">
                  <AccountCircleIcon/>
                </Avatar>
                </div>
                  <CardContent>
                    <div className='typography'>
                    <Typography variant="h5" component="div">
                    Usuario
                    </Typography>
                    </div>
                  </CardContent>
                  <div className='espacio'></div>
                <div className='button-action'>
                <CardActions>
                  <Button size="small"><Link to="/usuario-login">Iniciar sesión</Link></Button>
                </CardActions>
                </div>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
