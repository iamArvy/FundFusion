<template>
  <button>
    <slot />
  </button>
</template>

<script setup lang="ts"></script>

<style scoped>
button {
  background: transparent;
  padding: 0.5rem 1rem;
  border: 1px solid var(--secondary);
  cursor: pointer;
  border-radius: 20px;
}
</style>
