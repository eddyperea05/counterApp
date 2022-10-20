import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {

const [counter,setCounter] = useState(value);

const handleAdd = ()=> setCounter(counter + 1)
const handleRest = ()=> setCounter(counter - 1)
const handleReset = ()=> setCounter(value)

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleRest}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default CounterApp;
CounterApp.propTypes = {
  value: PropTypes.number.isRequired
};
