import React, { useState } from 'react';

function DDA(props) {
  const [points, setPoints] = useState([]);
  
  const drawLineDDA = () => {
    const { x1, y1, x2, y2 } = props;
    let dx = x2 - x1;
    let dy = y2 - y1;
    let steps = Math.abs(dx) > Math.abs(dy) ? Math.abs(dx) : Math.abs(dy);
    let xIncrement = dx / steps;
    let yIncrement = dy / steps;
    let points = [];

    let x = x1;
    let y = y1;

    points.push({ x: Math.round(x), y: Math.round(y) });
    for (let i = 1; i <= steps; i++) {
      x += xIncrement;
      y += yIncrement;
      points.push({ x: Math.round(x), y: Math.round(y) });
    }
    setPoints(points);
  };

  return (
    <div>
      <button onClick={drawLineDDA}>Draw Line using DDA</button>
      <svg width="400" height="400">
        {points.map((point, index) => (
          <circle key={index} cx={point.x} cy={point.y} r="1" />
        ))}
      </svg>
    </div>
  );
}

function Bresenham(props) {
  const [points, setPoints] = useState([]);

  const drawLineBresenham = () => {
    const { x1, y1, x2, y2 } = props;
    let dx = Math.abs(x2 - x1);
    let dy = Math.abs(y2 - y1);
    let sx = x1 < x2 ? 1 : -1;
    let sy = y1 < y2 ? 1 : -1;
    let err = dx - dy;
    let points = [];
    let x = x1;
    let y = y1;

    while (true) {
      points.push({ x, y });
      if (x === x2 && y === y2) break;
      let e2 = 2 * err;
      if (e2 > -dy) {
        err -= dy;
        x += sx;
      }
      if (e2 < dx) {
        err += dx;
        y += sy;
      }
    }

    setPoints(points);
  };

  return (
    <div>
      <button onClick={drawLineBresenham}>Draw Line using Bresenham</button>
      <svg width="400" height="400">
        {points.map((point, index) => (
          <circle key={index} cx={point.x} cy={point.y} r="1" />
        ))}
      </svg>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h2>DDA Line Drawing Algorithm</h2>
      <DDA x1={10} y1={10} x2={100} y2={100} />
      <h2>Bresenham's Line Drawing Algorithm</h2>
      <Bresenham x1={10} y1={10} x2={100} y2={100} />
    </div>
  );
}