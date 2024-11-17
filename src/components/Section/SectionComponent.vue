<template>
  <section :class="center ? 'center' : null">
    <h1 v-if="header">{{ header }}</h1>
    <p v-if="desc">{{ desc }}</p>
    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{
  center?: boolean
  header?: string
  desc?: string
}>()
</script>

<style scoped>
section {
  margin: 2rem 0;
}
section.center {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
h1 {
  text-transform: capitalize;
  margin: 1rem;
}
</style>
