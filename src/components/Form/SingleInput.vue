<template>
  <form>
    <div class="input">
      <slot name="icon" /><input type="email" name="" id="" :placeholder="placeholder" />
    </div>
    <slot name="button" />
  </form>
</template>

<script setup lang="ts">
defineProps<{
  placeholder: string
}>()
</script>

<style scoped>
form {
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background-color: red; */
}

input {
  background-color: transparent;
  border: none;
  padding: 0 10px;
  outline: none;
  font-size: 16px;
}
.input {
  background-color: transparent;
  border: 1px solid var(--grey);
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  padding: 5px;
  gap: 2px;
}
</style>
