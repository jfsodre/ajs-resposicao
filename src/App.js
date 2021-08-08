import React, { useState } from 'react'
import 'rsuite/dist/styles/rsuite-default.css';
import { LineChart, Line } from '@rsuite/charts';
import { Container } from '@material-ui/core';

export default function App() {
  
  // Sample Data
  const atendimentos = [
    ['00:00', 10, 9],
    ['02:00', 2, 1],
    ['04:00', 3, 0],
    ['06:00', 5, 0],
    ['08:00', 5, 6],
    ['10:00', 4, 5],
    ['14:00', 4, 5],
    ['16:00', 2, 6],
    ['18:00', 2, 7],
    ['20:00', 10, 10],
    ['22:00', 5, 7],
  ];
  
  return (
    <Container maxWidth="sm">
      <h4>Gráfico de Linhas - Atendimentos </h4>
      <LineChart name="atendimentos" data={atendimentos}>
        <Line name="Pediatria" />
        <Line name="Clínico Geral" />
      </LineChart>  
      </Container>

  );
}
