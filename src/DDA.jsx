import React, { useState, useCallback, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function DDA(props) {
    const { x1, y1, x2, y2 } = props;
    const [points, setPoints] = useState([]);

    const drawLineDDA = useCallback(() => {
        let dx = x2 - x1;
        let dy = y2 - y1;
        let steps = Math.abs(dx) > Math.abs(dy) ? Math.abs(dx) : Math.abs(dy);
        let xIncrement = dx / steps;
        let yIncrement = dy / steps;
        let newPoints = [];

        let x = x1;
        let y = y1;

        newPoints.push({ x: Math.round(x), originalY: y, y: Math.round(y) });
        for (let i = 1; i <= steps; i++) {
            x += xIncrement;
            y += yIncrement;
            newPoints.push({ x: Math.round(x), originalY: y, y: Math.round(y) });
        }
        setPoints(newPoints);
    }, [x1, y1, x2, y2, points]);

    //Update when input changes
    useEffect(() => {
        drawLineDDA();
    }, [drawLineDDA]);

    return (
        <div className="algorithm-container">
            <div className="line-container">
                <svg width="400" height="400">
                    {points.map((index) => (
                        <line
                        key={index}
                        x1={x1} y1={y1}
                        x2={x2} y2={y2}
                        style={{ stroke: 'black', strokeWidth: 1 }}
                        />
                    ))}
                </svg>
            </div>
            
            <TableContainer component={Paper} sx={{marginTop:'12px', maxHeight: '400px', overflow: 'auto'}}>
                <Table stickyHeader>
                    <TableHead style={{ position: 'sticky', top: 0, background: 'white', zIndex: 1 }}>
                        <TableRow>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>X Value</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Original Y</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Calculated Y</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {points.map((point, index) => (
                            <TableRow hover key={index}>
                                <TableCell align="center" sx={{ padding: '6px', lineHeight: '1' }}>{point.x}</TableCell>
                                <TableCell align="center" sx={{ padding: '6px', lineHeight: '1' }}>{point.originalY.toFixed(7)}</TableCell>
                                <TableCell align="center" sx={{ padding: '6px', lineHeight: '1' }}>{point.y}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}