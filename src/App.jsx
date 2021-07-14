import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './containers/ItemListContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ItemDetailContainer } from './containers/ItemDetailContainer';
import { CartComponentContext } from './context/CartContext';
import { Cart } from './components/Cart';

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
              <Route path="/cart" component={Cart}/>
            </div>
          </Switch>
        </BrowserRouter>
      </CartComponentContext>
  );
}

export default App;
