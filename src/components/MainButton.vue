<template>
  <button :class="buttonClass"><slot /></button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  auth?: boolean
  primary?: boolean
  secondary?: boolean
  transparent?: boolean
  active?: boolean
}>()

// Computed class for button based on props
const buttonClass = computed(() => {
  return {
    'btn-primary': props.primary,
    'btn-secondary': props.secondary,
    'btn-auth': props.auth,
    'btn-transparent': props.transparent,
    'btn-active': props.active,
  }
})
</script>

<style scoped>
button {
  border-radius: 8px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: none;
  /* font-size: 1rem; */
  font-weight: 400;
  text-transform: capitalize;
}

.btn-primary {
  background-color: rgba(99, 106, 232, 1);
  color: white;
}

.btn-secondary {
  background: transparent;
  color: var(--secondary-color);
  font-size: 14px;
  /* line-height: 22px; */
}

.btn-secondary:hover {
  border-bottom: 3px solid var(--secondary);
  border-radius: 5px;
}
.btn-secondary.btn-active {
  color: var(--primary);
  border-bottom: 3px solid var(--primary);
  border-radius: 5px;
}

.btn-auth {
  background: transparent;
  color: var(--secondary);
  border: 1px solid var(--secondary);
  border-radius: 20px;
}

/* .btn-auth:hover {
  border-bottom: 3px solid var(--secondary);
  border-radius: 5px;
} */

.btn-transparent {
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
  font-size: 14px;
  /* line-height: 22px; */
}

/* .btn-transparent:hover {
  border-bottom: 3px solid var(--secondary);
  border-radius: 5px;
} */
</style>
