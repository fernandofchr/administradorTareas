import React from 'react'
import Footer from '../AppBar'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, Button } from '@mui/material';

function TablaUsuarios() {
    return (
        <>
          <Footer userGroups={"administrador"}/>
            <div className='d-flex justify-content-center' style={{ padding: 10 }}>
                <Typography variant="h3" component="div">Usuarios</Typography>
            </div>
          <div className='container pt-3 pb-4'>
            <div className='d-flex flex-column' style={{ marginBottom: '1rem' }}>
              <div className="pb-4">
                <div className='d-flex justify-content-center'>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">ID</TableCell>
                                    <TableCell align="center">Nombre</TableCell>
                                    <TableCell align="center">Apellido Paterno</TableCell>
                                    <TableCell align="center">Apellido Materno</TableCell>
                                    <TableCell align="center">Correo</TableCell>
                                    <TableCell align="center">Rol</TableCell>
                                    <TableCell align="center"></TableCell>
                                    <TableCell align="center"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="center">1</TableCell>
                                    <TableCell align="center">Antonio</TableCell>
                                    <TableCell align="center">Domínguez</TableCell>
                                    <TableCell align="center">Rosales</TableCell>
                                    <TableCell align="center">antoniodomros@gmail.com</TableCell>
                                    <TableCell align="center">Admin</TableCell>
                                    <TableCell align="center">
                                        <Button>Editar rol</Button>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button color="error">Eliminar usuario</Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
              </div>
            </div>
          </div>
        </>
      )
}

export default TablaUsuarios