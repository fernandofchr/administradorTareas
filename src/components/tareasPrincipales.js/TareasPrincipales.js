import React from 'react'
import CrearTareaPrincipal from '../tareasPrincipales.js/CrearTareaPrincipal'
import Footer from '../AppBar'

import TareasTable from './TareasTable'
import { Typography, Button } from '@mui/material'
import ActualizarTareaPrincipalButton  from "./Botones/ActualizarTareaPrincipalButton.jsx"
import  CrearTareaPrincipalButton  from "./Botones/CrearTareaPrincipalButton"
import  EliminarTareaPrincipalButton  from "./Botones/EliminarTareaPrincipalButton.jsx"
import { useNavigate } from 'react-router-dom'

function TareasPrincipales() {
const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/crear-tarea'); // Reemplaza '/ruta-de-destino' con la ruta a la que deseas navegar.
  };
    return (
        <>
          <Footer userGroups={"administrador"}/>
          <div className='container pt-3 pb-4'>
            <div className='d-flex flex-column' style={{ marginBottom: '1rem' }}>
              <div className="pb-4">
              <Typography variant="h3" component="h2" className='d-flex justify-content-center'>
                    Lista de Tareas Principales
              </Typography>
                < div className='d-flex justify-content-center'>
                <Button onClick={handleNavigation} variant="contained" color="success">Crear tarea </Button>
                </div>
                < div className='d-flex justify-content-center'>
                  <TareasTable/>
                </div>
              </div>
            </div>
          </div>
          </>
      )
}

export default TareasPrincipales