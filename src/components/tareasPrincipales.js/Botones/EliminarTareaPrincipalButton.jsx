import React from 'react';
import { Button } from '@mui/material';

const EliminarTareaPrincipalButton = ({ onClick }) => {
  return (
    <Button
      variant="contained" color="error" maxWeight='auto'
      onClick={onClick}
    >
      Eliminar Tarea
    </Button>
  );
};

export default EliminarTareaPrincipalButton;
