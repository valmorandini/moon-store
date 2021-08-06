import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './containers/ItemListContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ItemDetailContainer } from './containers/ItemDetailContainer';
import { CartComponentContext } from './context/CartContext';
import { CartContainer } from './containers/CartContainer';
import { Checkout } from './containers/CheckoutContainer';
import { Error404 } from './components/Error404';
import { Footer } from './components/Footer';

function App() {
  return (
      <CartComponentContext>
        <BrowserRouter>
          <NavBar></NavBar>
          <div className="App">
          <Switch>
              <Route exact path="/" component={ItemListContainer}/>
              <Route exact path="/category/:categoryName" component={ItemListContainer}/>
              <Route exact path="/item/:id" component={ItemDetailContainer}/>
              <Route exact path="/cart" component={CartContainer}/>
              <Route exact path="/checkout" component={Checkout}/>
              <Route path="*" component={Error404}/>
          </Switch>
          </div>
        </BrowserRouter>
        <Footer></Footer>
      </CartComponentContext>
  );
}

export default App;
