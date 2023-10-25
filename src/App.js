import {Link} from 'react-router-dom';
import './App.css';
import { Button } from '@mui/material';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          ¿QUIEN QUIERE INGRESAR?
        </p>
        <Button>
          <Link to="/admin-login">Administrador</Link>
        </Button>
        <Button>   
          <Link to="/supervisor-login">Supervisor</Link>       
        </Button>
        <Button>
          <Link to="/usuario-login">Administrador</Link>
        </Button>
      </header>
    </div>
  );
}

export default App;
