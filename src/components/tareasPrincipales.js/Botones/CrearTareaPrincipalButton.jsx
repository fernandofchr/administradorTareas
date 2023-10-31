import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const  CrearTareaPrincipalButton = ({ ruta }) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(ruta); // Reemplaza '/ruta-de-destino' con la ruta a la que deseas navegar.
  };
  return (
    <Button
      variant='contained'
      color='primary'
      onClick={handleNavigation}
    >
      Crear Tarea Principal
    </Button>
  );
};

export default CrearTareaPrincipalButton;
