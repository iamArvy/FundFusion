<template>
  <button :class="active ? 'active' : null">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  active?: boolean
}>()
</script>

<style scoped>
button {
  background: transparent;
  border: none;
  color: var(--secondary-color);
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 14px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

button:hover {
  border-bottom: 3px solid var(--secondary);
  border-radius: 5px;
}
button.active {
  color: var(--primary);
  border-bottom: 3px solid var(--primary);
  border-radius: 5px;
}
</style>
