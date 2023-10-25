import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import LoginAdmin from './components/login/LoginAdmin';
import LoginSupervisor from './components/login/LoginSupervisor';
import LoginUsuario from './components/login/LoginAdmin';
import VIstaPrincipalAdmin from './components/vistaPrincipal/VIstaPrincipalAdmin';
import VistaPrincipalLider from './components/vistaPrincipal/VistaPrincipalLider';
import VistaPrincipalUsuario from './components/vistaPrincipal/VistaPrincipalUsuario';

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
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
    </Routes>

    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Application />
    </Router>
  </React.StrictMode>
);
