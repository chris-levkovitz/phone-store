import React, {Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Details from "./components/Details";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import {Switch, Route} from 'react-router-dom';
import Modal from './components/Model'


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch >
        <Route exact path="/" component={ProductList}/>
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route component={Default}/>
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
