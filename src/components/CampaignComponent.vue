<template>
  <Line :data="chartData" :options="chartOptions" />
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale)

const chartData = ref({
  labels: ['Jan', 'Feb', 'Mar', 'Apr'],
  datasets: [
    {
      label: 'Visits',
      borderColor: '#6875F5',
      data: [5, 10, 15, 5],
      fill: false,
      tension: 0.4,
    },
  ],
})

const chartOptions = ref({
  responsive: true,
  plugins: {
    legend: { display: true },
    title: { display: true, text: 'Campaign Visits' },
  },
})
</script>

<style scoped></style>
