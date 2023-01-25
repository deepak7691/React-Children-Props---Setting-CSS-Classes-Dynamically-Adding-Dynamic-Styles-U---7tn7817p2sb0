import React, { useState, useEffect } from 'react'
import '../styles/App.css';
import ChildComponent from './ChildComponent';
const App = () => {
  const [input1, SetInput1] = useState(0)

  return (
    <div id="main">
      <ChildComponent input={
        <input id='input' onChange={(e) => {
          let res = e.target.value;
          res = Math.pow(res, 2);
          SetInput1(res)

        }} />}
      />

      <p id='output'>{input1}</p>
    </div>
  )
}


export default App;
