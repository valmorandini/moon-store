import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './containers/ItemListContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ItemDetailContainer } from './containers/ItemDetailContainer';

function App() {
  return (
      <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
        <div className="App">
          {/* <Route exact path="/" component={ItemListContainer}/> */}
          <ItemDetailContainer></ItemDetailContainer>
        </div>
      </Switch>
      </BrowserRouter>
  );
}

export default App;
