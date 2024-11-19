<template>
  <section>
    <slot />
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 2rem 0;
  gap: 10px;
}
</style>
