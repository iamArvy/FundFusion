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
  background-color: transparent;
  border: 1px solid var(--secondary);
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 6px;
  padding: 5px;
  gap: 2px;
  /* width: 100%; */
  flex: 1;
}
input::placeholder {
  color: black;
}
</style>
