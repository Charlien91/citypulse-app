'use client';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function CityChart({ cities }) {
  const data = {
    labels: cities.map((city) => city.name),
    datasets: [{
      label: 'Population',
      data: cities.map((city) => city.population),
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
    }],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return <Bar data={data} options={options} />;
}
