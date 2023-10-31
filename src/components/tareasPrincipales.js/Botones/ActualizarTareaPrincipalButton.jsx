import React from 'react';
import { Button } from '@mui/material';

const ActualizarTareaPrincipalButton = ({ onClick }) => {
  return (
    <Button
      maxWeight='auto'
      variant='contained'
      color='secondary'
      onClick={onClick}
    >
      Actualizar Tarea
    </Button>
  );
};

export default ActualizarTareaPrincipalButton;
