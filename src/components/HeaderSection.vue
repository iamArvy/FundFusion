<template>
  <section>
    <div id="logo">
      <LogoImg />
      <span>FundFusion</span>
    </div>
    <nav>
      <RouterLink v-for="(item, index) in navs" :key="index" :to="item.route"
        ><MainButton secondary :active="isRoute(item.route)"
          ><i class="bx" :class="item.icon"></i><span> {{ item.name }}</span></MainButton
        ></RouterLink
      >
    </nav>
    <div id="inputs">
      <!-- <SingleInput id="search" placeholder="Search">
        <template #icon>O</template>
      </SingleInput> -->
      <img src="../assets/userImg.png" alt="" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import SingleInput from './Form/SingleInput.vue'
import LogoImg from './LogoImg.vue'
import MainButton from './MainButton.vue'

const navs = [
  { name: 'home', route: '/', icon: 'bx-home' },
  { name: 'about us', route: '/about', icon: 'bx-info-circle' },
  { name: 'featured', route: '/featured', icon: 'bx-cog' },
  { name: 'projects', route: '/projects', icon: 'bx-layer' },
  { name: 'contact', route: '/contact', icon: 'bx-envelope' },
  { name: 'blog', route: '/blog', icon: 'bx-news' },
]

const isRoute = (route: string) => {
  return route === useRoute().path
}
</script>

<style scoped>
img {
  border-radius: 50%;
}
#inputs {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}
#logo {
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  font-size: 28px;
}
#logo img {
  width: 28px;
}
section {
  padding: 10px;
  display: grid;
  grid-template-columns: 0.4fr 1fr 0.4fr;
}
nav {
  text-transform: capitalize;
  display: flex;
  flex-direction: row;
  place-items: center;
  justify-content: space-evenly;
  color: var(--secondary);
  width: 100%;
  text-decoration: unset;
  gap: 10px;
}
nav > a {
  color: var(--secondary);
}
nav > a > button {
  font-size: 14px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
}
</style>
