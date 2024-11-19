<template>
  <div class="full-width">
    <div class="container">
      <div class="header">
        <h1><slot name="header" /></h1>
        <button @click="close">X</button>
      </div>
      <slot name="body" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'

onMounted(() => {
  document.body.style.overflow = 'hidden'
})

onBeforeUnmount(() => {
  document.body.style.overflow = 'auto'
})

defineProps<{
  close: () => void
}>()
</script>

<style scoped>
.full-width {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.199);
  z-index: 9999;
}
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 80vh;
  width: 40vw;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  overflow: auto;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 16px;
}
h1,
button {
  font-size: 16px;
}
button {
  font-size: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
}
</style>
