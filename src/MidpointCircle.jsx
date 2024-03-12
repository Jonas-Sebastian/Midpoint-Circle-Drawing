import React, { useRef, useEffect } from 'react';

export default function MidpointCircle({ xCenter, yCenter, radius }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const centerX = xCenter;
    const centerY = yCenter;

    const midPointCircleDraw = (r) => {
        let x = r, y = 0;
        let P = 1 - r;

        const drawPoint = (x, y) => {
            // (x, y)
            context.beginPath();
            context.moveTo(centerX + x, centerY + y);
            context.lineTo(centerX + x, centerY + y + 1);
            context.stroke();
            // (-x, y)
            context.beginPath();
            context.moveTo(centerX - x, centerY + y);
            context.lineTo(centerX - x, centerY + y + 1);
            context.stroke();
            // (x, -y)
            context.beginPath();
            context.moveTo(centerX + x, centerY - y);
            context.lineTo(centerX + x, centerY - y - 1);
            context.stroke();
            // (-x, -y)
            context.beginPath();
            context.moveTo(centerX - x, centerY - y);
            context.lineTo(centerX - x, centerY - y - 1);
            context.stroke();
            // (y, x)
            context.beginPath();
            context.moveTo(centerX + y, centerY + x);
            context.lineTo(centerX + y, centerY + x + 1);
            context.stroke();
            // (-y, x)
            context.beginPath();
            context.moveTo(centerX - y, centerY + x);
            context.lineTo(centerX - y, centerY + x + 1);
            context.stroke();
            // (y, -x)
            context.beginPath();
            context.moveTo(centerX + y, centerY - x);
            context.lineTo(centerX + y, centerY - x - 1);
            context.stroke();
            // (-y, -x)
            context.beginPath();
            context.moveTo(centerX - y, centerY - x);
            context.lineTo(centerX - y, centerY - x - 1);
            context.stroke();
        };

        drawPoint(x, y);

        while (x > y) {
            y++;
            if (P <= 0)
            P = P + 2 * y + 1;
            else {
            x--;
            P = P + 2 * y - 2 * x + 1;
            }
            drawPoint(x, y);
        }
    };

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = 'black';
    midPointCircleDraw(radius);
    }, [xCenter, yCenter, radius]);

  return <canvas ref={canvasRef} width={1000} height={600} />;
}
