import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import ReactBootstrap, { Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <header className="App-header">
        <p>
         Moon Store
        </p>
      </header>
      
    </div>
    
  );
}

export default App;
