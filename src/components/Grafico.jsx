import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const Grafico = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Simula una carga de datos asincrónica
    setTimeout(() => {
      const data = {
        labels: ['Pendiente', 'En Progreso', 'Completada'],
        datasets: [
          {
            label: 'Estado de las Tareas',
            data: [20, 30, 15], // Cantidad de tareas en cada estado (datos de muestra)
            backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(54, 162, 235, 0.6)'],
          },
        ],
      };

      setChartData(data);
    }, 1000); // Simula una carga de datos asincrónica
  }, []);

  if (chartData === null) {
    return <div>Cargando...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
  }

  const options = {
    scales: {
      x: {
        type: 'category', // Configura la escala del eje X como categoría
      },
      y:{
        type:'category'
      }
    },
  };

  return (
    <div>
      <h1>Estado de las Tareas</h1>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default Grafico;
