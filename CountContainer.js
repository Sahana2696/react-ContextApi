import React from 'react';
import React, { useState, useContext, useEffect } from 'react';
import { getData } from './action';
import { CountDisplay } from './CountDisplay';

import { StoreContext } from './store';
const CountContainer = (props) => {
  const { state, dispatch } = useContext(StoreContext);
  const [count, setCount] = useState(0);
  const ParentBtnClick = () => {
    console.log("You clicked button in view");
  }

  const InputChange=()=>{
console.log("Change executed");
  }

  return <CountDisplay 
  handleClick={ParentBtnClick}
  InputChange={InputChange}
  />
}
export { CountContainer };

