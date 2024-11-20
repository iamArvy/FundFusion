<template>
  <div>
    <Bar :data="chartData" :options="chartOptions" />
  </div>
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
  labels: ['Jan', 'Feb', 'Mar', 'Apr'],
  datasets: [
    {
      label: 'Shares',
      backgroundColor: '#6875F5',
      data: [12, 10, 8, 4],
    },
  ],
})

const chartOptions = ref({
  responsive: true,
  plugins: {
    legend: { display: true },
    title: { display: true, text: 'Social Shares' },
  },
})
</script>

<style scoped>
div {
  width: 100%;
}
</style>
