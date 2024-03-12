import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MidpointCircle from './MidpointCircle';

export default function App() {
  const [inputValues, setInputValues] = useState({ xCenter: 0, yCenter: 0, radius: 0 });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setInputValues({
      ...inputValues,
      [id]: value.trim() !== '' ? parseFloat(value) : '',
    });
  };

  return (
    <div>
      <div>
        <h1>Input Values:</h1>
        <div className="input-container">
          <div className="input-row">
            <p>X Center: </p>
            <TextField id="xCenter" value={inputValues.xCenter} onChange={handleInputChange} />
          </div>
          <div className="input-row">
            <p>Y Center: </p>
            <TextField id="yCenter" value={inputValues.yCenter} onChange={handleInputChange} />
          </div>
          <div className="input-row">
            <p>Radius:</p>
            <TextField id="radius" value={inputValues.radius} onChange={handleInputChange} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="algorithm-container">
          <h1>Midpoint Circle Drawing Algorithm</h1>
          <div className="line-container">
          {inputValues.xCenter !== '' && inputValues.yCenter !== '' && inputValues.radius !== '' ? (
              <MidpointCircle xCenter={inputValues.xCenter} yCenter={inputValues.yCenter} radius={inputValues.radius} />
            ) : (
              <MidpointCircle xCenter={0} yCenter={0} radius={0} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}