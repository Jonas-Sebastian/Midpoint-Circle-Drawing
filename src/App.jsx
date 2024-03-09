import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import DDA from './DDA'; // Import DDA component
import Bresenham from './Bresenham'; // Import Bresenham component

export default function App() {
  const [inputValues, setInputValues] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setInputValues({
        ...inputValues,
        [id]: value,
    });
  };

  const parseInputValues = () => {
    return {
      x1: parseFloat(inputValues.x1),
      y1: parseFloat(inputValues.y1),
      x2: parseFloat(inputValues.x2),
      y2: parseFloat(inputValues.y2),
    };
  };

  return (
    <div>
      <div>
        <h1>Input Values:</h1>
        <div className="input-container">
          <div className="input-row">
            <p>X1: </p>
            <TextField id="x1" value={inputValues.x1} onChange={handleInputChange} />
          </div>
          <div className="input-row">
            <p>Y1: </p>
            <TextField id="y1" value={inputValues.y1} onChange={handleInputChange} />
          </div>
          <div className="input-row">
            <p>X2:</p>
            <TextField id="x2" value={inputValues.x2} onChange={handleInputChange} />
          </div>
          <div className="input-row">
            <p>Y2:</p>
            <TextField id="y2" value={inputValues.y2} onChange={handleInputChange} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="algorithm-container">
          <h2>DDA Line Drawing Algorithm</h2>
          <div className="line-container">
            {inputValues.x1 !== '' && inputValues.y1 !== '' && inputValues.x2 !== '' && inputValues.y2 !== '' ? (
              <DDA {...parseInputValues()} />
            ) : (
              <DDA x1={0} y1={0} x2={0} y2={0} />
            )}
          </div>
        </div>
        <div className="algorithm-container">
          <h2>Bresenham's Line Drawing Algorithm</h2>
          <div className="line-container">
            {inputValues.x1 !== '' && inputValues.y1 !== '' && inputValues.x2 !== '' && inputValues.y2 !== '' ? (
              <Bresenham {...parseInputValues()} />
            ) : (
              <Bresenham x1={0} y1={0} x2={0} y2={0} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}