<template>
  <button><slot /></button>
</template>

<script setup lang="ts"></script>

<style scoped>
button {
  background-color: rgba(99, 106, 232, 1);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: 400;
  color: white;
}
</style>
