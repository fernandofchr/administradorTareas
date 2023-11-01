import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import LoginAdmin from './components/login/LoginAdmin';
import LoginSupervisor from './components/login/LoginSupervisor';
import LoginUsuario from './components/login/LoginAdmin';
import VIstaPrincipalAdmin from './components/vistaPrincipal/VIstaPrincipalAdmin';
import VistaPrincipalLider from './components/vistaPrincipal/VistaPrincipalLider';
import VistaPrincipalUsuario from './components/vistaPrincipal/VistaPrincipalUsuario';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import CrearTareaPrincipal from './components/tareasPrincipales.js/CrearTareaPrincipal';
import CrearTareaSecundaria from './components/tareasSecundarias/CrearTareaSecundaria';
import TareasPrincipales from './components/tareasPrincipales.js/TareasPrincipales';
import TablaUsuarios from './components/tablaUsuarios/TablaUsuarios';
Amplify.configure(awsExports);

function Application() {
  // Puedes colocar lógica adicional aquí
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/admin-login" element={<LoginAdmin />} />
      <Route path="/supervisor-login" element={<LoginSupervisor />} />
      <Route path="/usuario-login" element={<LoginUsuario />} />
      <Route path="/inicio-admin" element={<VIstaPrincipalAdmin />} />
      <Route path="/inicio-supervisor" element={<VistaPrincipalLider />} />
      <Route path="/inicio-usuario" element={<VistaPrincipalUsuario />} />
      <Route path="/tareas-principales" element={<TareasPrincipales />} />
      <Route path="/crear-tarea" element={<CrearTareaPrincipal />} />
      <Route path="/crear-tarea-secundaria" element={<CrearTareaSecundaria />} />
      <Route path='/admin-tabla-usuarios' element={<TablaUsuarios/>}/>
    </Routes>

    
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Application />
    </Router>
);
