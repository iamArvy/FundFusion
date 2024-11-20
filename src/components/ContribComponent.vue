<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
const chartData = ref({
  labels: ['August', 'September', 'October', 'November'],
  datasets: [
    {
      label: 'Individuals',
      backgroundColor: '#6875F5',
      data: [20, 30, 40, 50],
    },
    {
      label: 'Corporates',
      backgroundColor: '#F56565',
      data: [25, 35, 45, 55],
    },
    {
      label: 'NGOs',
      backgroundColor: '#48BB78',
      data: [30, 40, 50, 60],
    },
  ],
})

const chartOptions = ref({
  responsive: true,
  plugins: {
    legend: { display: true },
    title: { display: true, text: 'Backer Contributions' },
  },
})
</script>

<style scoped></style>
