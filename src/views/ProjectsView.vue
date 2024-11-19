<template>
  <SectionComponent header="Creative Projects" center>
    <NavSection>
      <MainButton
        grid
        v-for="(item, index) in gridButtons"
        :key="index"
        :active="currentGrid === index"
        @click="changeCurrentGrid(index)"
        >{{ item.text }}</MainButton
      >
    </NavSection>
  </SectionComponent>
  <GridSection id="grid">
    <ImageCard :src="item.img" :alt="item.name" v-for="(item, index) in gridItems" :key="index">
      <template #name>{{ item.name }}</template>
      <template #description
        ><p>{{ item.description }}</p></template
      >
    </ImageCard>
  </GridSection>
</template>

<script setup lang="ts">
import ImageCard from '@/components/ImageCard.vue'
import MainButton from '@/components/MainButton.vue'
import GridSection from '@/components/Section/GridSection.vue'
import NavSection from '@/components/Section/NavSection.vue'
import SectionComponent from '@/components/Section/SectionComponent.vue'
import { ref } from 'vue'

const gridButtons = [
  { text: 'Art', value: 0 },
  { text: 'Technology', value: 1 },
  { text: 'Education', value: 2 },
  { text: 'Environment', value: 3 },
]

const currentGrid = ref(0)
const changeCurrentGrid = (index: number) => {
  currentGrid.value = index
}

const gridItems = [
  {
    name: 'Art',
    description: 'Sunset Serenity',
    img: '/projects/1.png',
  },
  {
    name: 'Sculpture',
    description: 'Metal Harmony',
    img: '/projects/2.png',
  },
  {
    name: 'Photography',
    description: 'Rose Elegance',
    img: '/projects/3.png',
  },
  {
    name: 'Abstract',
    description: 'Color Chaos',
    img: '/projects/4.png',
  },
  {
    name: 'Pottery',
    description: 'patterned vase',
    img: '/projects/5.png',
  },
  {
    name: 'Portrait',
    description: 'Timeless Beauty',
    img: '/projects/6.png',
  },
  {
    name: 'Digital',
    description: 'future city',
    img: '/projects/7.png',
  },
  {
    name: 'textile',
    description: 'geometric wave',
    img: '/projects/8.png',
  },
  {
    name: 'watercolor',
    description: 'mountain peace',
    img: '/projects/9.png',
  },
]
</script>

<style scoped>
#grid > * {
  cursor: pointer;
  text-transform: capitalize;
}
#grid > *:hover > * > * {
  color: var(--primary);
}
p {
  text-transform: capitalize;
}
</style>
