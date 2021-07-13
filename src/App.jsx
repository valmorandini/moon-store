import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './containers/ItemListContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ItemDetailContainer } from './containers/ItemDetailContainer';
import { CartContext, CartComponentContext } from './context/CartContext';

function App() {
  return (
      <CartComponentContext>
        <BrowserRouter>
          <NavBar></NavBar>
          <Switch>
            <div className="App">
              <Route exact path="/" component={ItemListContainer}/>
              <Route path="/category/:categoryName" component={ItemListContainer}/>
              <Route path="/item/:id" component={ItemDetailContainer}/>
            </div>
          </Switch>
        </BrowserRouter>
      </CartComponentContext>
  );
}

export default App;
