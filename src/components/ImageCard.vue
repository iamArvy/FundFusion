<template>
  <figure :class="long ? 'long' : 'short'">
    <img :src="src" :alt="alt" />
    <figcaption>
      <h2><slot name="name" /></h2>
      <div>
        <slot name="description" />
      </div>
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
defineProps<{
  src: string
  alt?: string
  long?: boolean
}>()
</script>

<style scoped>
figure {
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid var(--grey);
}

figcaption h2 {
  font-size: 16px;
  font-weight: 700;
  color: black;
}

figcaption div {
  font-size: 14px;
  font-weight: 400;
  color: var(--secondary);
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 5px 0;
}
.long {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}
</style>
