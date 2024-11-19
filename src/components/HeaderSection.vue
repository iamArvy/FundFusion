<template>
  <section>
    <div id="logo">
      <LogoImg />
      <span>FundFusion</span>
    </div>
    <ul>
      <li v-for="(item, index) in navs" :key="index">
        <RouterLink :to="item.route">{{ item.name }}</RouterLink>
      </li>
    </ul>
    <div id="inputs">
      <!-- <SingleInput id="search" placeholder="Search">
        <template #icon>O</template>
      </SingleInput> -->
      <img src="../assets/userImg.png" alt="" />
    </div>
  </section>
</template>

<script setup lang="ts">
import SingleInput from './Form/SingleInput.vue'
import LogoImg from './LogoImg.vue'

const navs = [
  { name: 'home', route: '/' },
  { name: 'about us', route: '/about' },
  { name: 'featured', route: '/featured' },
  { name: 'projects', route: '/projects' },
  { name: 'contact', route: '/contact' },
  { name: 'blog', route: '/blog' },
]
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
#search {
  /* width: 100px; */
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
  grid-template-columns: 1fr 1fr 1fr;
}
ul {
  text-transform: capitalize;
  display: flex;
  flex-direction: row;
  place-items: center;
  justify-content: space-between;
  color: var(--primary);
  text-decoration: unset;
}
</style>
