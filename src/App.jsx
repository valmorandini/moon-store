import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './containers/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer greeting={'Moon Store'}></ItemListContainer>
    </div>
    
  );
}

export default App;
