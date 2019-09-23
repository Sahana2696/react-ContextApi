import React, { Component } from 'react';
import { render } from 'react-dom';
import {CountContainer} from './CountContainer';
import { StoreProvider, StoreContext } from './store'
console.log(StoreContext);
import './style.css';
const App = () => {

  return (
    <div>
      <CountContainer />
    </div>
  );
}
render(
  <StoreProvider>
    <App />
  </StoreProvider>
,document.getElementById('root'));

