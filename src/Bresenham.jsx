import React, { useState, useCallback, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Bresenham(props) {
    const { x1, y1, x2, y2 } = props;
    const [points, setPoints] = useState([]);

    const drawLineBresenham = useCallback(() => {
        let x = x1;
        let y = y1;
        let dx = Math.abs(x2 - x1);
        let dy = Math.abs(y2 - y1);
        let P = 2 * dy - dx; // Decision value
        let sx = x1 < x2 ? 1 : -1;
        let sy = y1 < y2 ? 1 : -1;
        let newPoints = [];
    
        while (true) {
            newPoints.push({ x, y, P });
    
            if (x === x2 && y === y2) break;
    
            if (P < 0) {
                P += 2 * dy;
                x += sx;
            } else {
                P -= 2 * dx;
                y += sy;
            }
        }
    
        setPoints([...newPoints]);
    }, [x1, y1, x2, y2]);

    //Update when input changes
    useEffect(() => {
        drawLineBresenham();
    }, [drawLineBresenham]);

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
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>X Value</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Y Value</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>P Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {points.map((point, index) => (
                            <TableRow hover key={index}>
                                <TableCell align="center" sx={{ padding: '6px', lineHeight: '1' }}>{point.x}</TableCell>
                                <TableCell align="center" sx={{ padding: '6px', lineHeight: '1' }}>{point.y}</TableCell>
                                <TableCell align="center" sx={{ padding: '6px', lineHeight: '1' }}>{point.P}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}