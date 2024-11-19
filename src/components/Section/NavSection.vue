<template>
  <nav>
    <slot />
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
  place-content: center;
  gap: 10px;
}
</style>
