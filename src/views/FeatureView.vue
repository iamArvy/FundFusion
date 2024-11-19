<template>
  <div id="search">
    <SingleInput placeholder="Search campaigns..."></SingleInput>
  </div>
  <NavSection>
    <MainButton
      secondary
      :active="currentNav === index"
      v-for="(item, index) in navs"
      :key="index"
      @click="changeNav(index)"
    >
      <i class="bx" :class="item.icon"></i>

      {{ item.name }}
    </MainButton>
  </NavSection>
  <section id="hero" class="full-width">
    <div>
      <h1>Adventure: Join the Journey</h1>
      <p>Embark on a thrilling campaign to bring adventure to life with your support.</p>
      <MainButton primary> Impressed yet? Back the project! </MainButton>
    </div>
  </section>
  <GridSection id="grid">
    <ImageCard :src="item.img" :alt="item.name" v-for="(item, index) in gridItems" :key="index">
      <template #name>{{ item.name }}</template>
      <template #description
        ><p>Category: {{ item.category }}</p>
        <p>Raised: {{ item.raised }}</p>
        <MainButton transparent> Back the project </MainButton>
      </template>
    </ImageCard>
  </GridSection>
</template>

<script setup lang="ts">
import SingleInput from '@/components/Form/SingleInput.vue'
import ImageCard from '@/components/ImageCard.vue'
import MainButton from '@/components/MainButton.vue'
import GridSection from '@/components/Section/GridSection.vue'
import NavSection from '@/components/Section/NavSection.vue'
import { ref } from 'vue'

const navs = [
  { name: 'Featured', icon: 'bx-star' }, // A star icon for Featured items
  { name: 'AI feature', icon: 'bx-brain' }, // A brain icon for AI-related features
  { name: 'Redeem Reward', icon: 'bx-gift' }, // A gift icon for Redeem Reward
  { name: 'Play-&-Earn', icon: 'bx-joystick' }, // A controller icon for Play-&-Earn
  { name: 'Micro loans', icon: 'bx-credit-card' }, // A credit card icon for Micro Loans
  { name: 'Game Hub', icon: 'bx-game' }, // A game icon for Game Hub
  { name: 'Events', icon: 'bx-calendar' }, // A calendar icon for Events
  { name: 'Competition', icon: 'bx-trophy' }, // A trophy icon for Competition
  { name: 'Scholarships', icon: 'bx-bookmark' }, // A bookmark icon for Scholarships
]

const currentNav = ref(0)
const changeNav = (index: number) => {
  currentNav.value = index
}

const gridItems = [
  {
    name: 'Solar Car',
    category: 'Technology',
    raised: '$25,000 of $50,000',
    img: '/featured/1.png',
  },
  {
    name: 'Solar Car',
    category: 'Technology',
    raised: '$25,000 of $50,000',
    img: '/featured/2.png',
  },
  {
    name: 'Solar Car',
    category: 'Technology',
    raised: '$25,000 of $50,000',
    img: '/featured/3.png',
  },
  {
    name: 'Solar Car',
    category: 'Technology',
    raised: '$25,000 of $50,000',
    img: '/featured/4.png',
  },
  {
    name: 'Solar Car',
    category: 'Technology',
    raised: '$25,000 of $50,000',
    img: '/featured/5.png',
  },
  {
    name: 'Solar Car',
    category: 'Technology',
    raised: '$25,000 of $50,000',
    img: '/featured/6.png',
  },
]
</script>

<style scoped>
#hero {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('@/assets/featured-background.png');
  background-size: cover;
  background-position: center;
  height: 90vh;
}
#hero > * {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 4rem 0;
  color: white;
  gap: 1rem;
}
#hero h1 {
  font-size: 64px;
  font-weight: 700;
  font-family: 'Archivo', sans-serif;
}
#hero p {
  font-size: 24px;
  font-weight: 400;
}
#search {
  margin: 1rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  place-items: center;
}
#search > * {
  width: 70%;
}
nav {
  margin: 1rem 0;
}
</style>
