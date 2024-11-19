<template>
  <form>
    <div class="input" :class="solid ? 'solid' : 'transparent'">
      <slot name="icon" /><input type="email" name="" id="" :placeholder="placeholder" />
    </div>
    <slot name="button" />
  </form>
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineProps<{
  placeholder: string
  solid?: boolean
  transparent?: boolean
}>()
</script>

<style scoped>
form {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  /* background-color: red; */
}

input {
  background-color: transparent;
  border: none;
  padding: 0 10px;
  outline: none;
  font-size: 16px;
  flex: 1;
}
.input {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  gap: 2px;
  flex: 1;
}
.transparent {
  background-color: transparent;
  border: 1px solid var(--secondary);
  border-radius: 6px;
}
.solid {
  background-color: var(--grey);
  border-radius: 6px 0 0 6px;
}
input::placeholder {
  color: black;
}
</style>
