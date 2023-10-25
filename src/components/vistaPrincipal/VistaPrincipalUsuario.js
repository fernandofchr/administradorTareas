import React ,{useState,  useLayoutEffect}
from 'react';
import { Auth, DataStore } from 'aws-amplify';
import { NombreGrupo } from '../NombreGrupo';
import { useNavigate } from 'react-router-dom';
import { Usuarios } from '../../models';
import { Button } from '@aws-amplify/ui-react';

export default function VIstaPrincipalAdmin() {
  const [nombreGrupo, setNombreGrupo] = useState('');
  const [session, setSession] = useState(true);
  const [loadingData, setLoadingData] = useState(true);
  const [existe, setExiste] = useState("Si");
  const [registroCompleto, setregistroCompleto] = useState(false);
  const navigate = useNavigate();


  const handleSignOut = async () => { // Agrega la palabra clave async aquí
    try {
      await Auth.signOut();
      navigate('/');
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
  

  useLayoutEffect(() => {
    async function getData() {
      await Auth.currentAuthenticatedUser().then(async (data) => {
        setLoadingData(true);
        await setSession(true);
        await NombreGrupo(data.username, 'usuario', setNombreGrupo);

        setTimeout(async () => {
          DataStore.query(Usuarios, c => c.correo.eq(data.attributes.email)).then((e) => {
            const resp = e.length === 0 ? "No" : "Si";
            localStorage.setItem("registrado", resp);
            setExiste(resp);
            if (e.length > 0) {
              setregistroCompleto(e[0].registroCompleto);
            }
            setLoadingData(false);
          }).catch((err) => {
            setLoadingData(false);
            console.log(err);
          });
        }, 1200);
      }).catch((err) => {
        setSession(false);
        console.log(err);
      });
    }
    getData();
  }, []);

  return (
    <>
    {session? (
      <>
        <div>VIsta Principal del Usuario</div>
        <Button onClick={handleSignOut}>
          Salir Sesión
        </Button>
      </>
      
    ):(
      <div>Hola</div>
    )}
    </>
  )
}
