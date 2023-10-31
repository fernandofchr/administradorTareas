import React ,{useState,  useLayoutEffect, useEffect}
from 'react';
import { Auth, DataStore } from 'aws-amplify';
import { NombreGrupo } from '../NombreGrupo';
import { useNavigate } from 'react-router-dom';
import { Usuarios } from '../../models';

import RegistrarUsuario from '../login/RegistroUsuario';
import Footer from '../AppBar';
import Grafico from '../Grafico';
import CrearTareaPrincipal from '../tareasPrincipales.js/CrearTareaPrincipal';
import TareasPrincipales from '../tareasPrincipales.js/TareasPrincipales';

export default function VIstaPrincipalAdmin() {
  
  const [nombreGrupo, setNombreGrupo] = useState('');
  const [session, setSession] = useState(true);
  const [correo, setCorreo] = useState("")
  const [userData, setUserData] = useState({})
  const [loadingData, setLoadingData] = useState(true);
  const [existe, setExiste] = useState("Si");
  const [registroCompleto, setregistroCompleto] = useState(false);
  const navigate = useNavigate();

  
  useLayoutEffect(() => {
    async function fetchData() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setCorreo(user.attributes.email);
        setSession(true);

        const usuarios = await DataStore.query(Usuarios, (c) => c.correo.eq(correo));
        if (usuarios.length > 0) {
          setUserData(usuarios[0]);
        }

        await NombreGrupo(user.username, 'administrador', setNombreGrupo);
      } catch (error) {
        console.error('Error al cargar datos del usuario:', error);
        setSession(false);
      } finally {
        setLoadingData(false);
      }
    }

    fetchData();
  }, [correo]);

  useEffect(() => {
    async function getData() {
      
      console.log(correo);
    }
  }, [])
   
   

  return (
    <>
    {session && nombreGrupo && userData ? (
      <>
      <Footer userGroups={nombreGrupo}/>
      <div className='container pt-3 pb-4 min-vh-100'>
        <div className='d-flex flex-column' style={{ marginBottom: '1rem' }}>
          <div className="pb-4">
            < div className='d-flex justify-content-center'>
              <RegistrarUsuario userGroups={nombreGrupo} user={userData}/>
            </div>
          </div>
        </div>
      </div>
      </>
    ):(
      <div>Cargando ...</div>
    )}
    </>
  )
}
