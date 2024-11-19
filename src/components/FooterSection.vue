<template>
  <!-- <footer> -->
  <section id="about">
    <LogoImg />
    <h1>FundFusion</h1>
  </section>
  <section id="newsletter">
    <h2 class="newletterText">Subscribe to our newsletter</h2>
    <SingleInput placeholder="Input you email" id="form" solid>
      <template #icon>
        <i class="bx bx-envelope"></i>
      </template>
      <template #button>
        <MainButton primary>Subscribe</MainButton>
      </template>
    </SingleInput>
  </section>
  <nav>
    <ul>
      <li v-for="(item, index) in nav" :key="index">
        <h2>{{ item.name }}</h2>
        <ul>
          <li v-for="(subitem, index) in item.subcategories" :key="index">
            <RouterLink :to="subitem.route">{{ subitem.name }}</RouterLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
  <section id="footer">
    <select name="lang" id="">
      <option value="">English</option>
      <option value="">Spanish</option>
    </select>
    <p>© 2024. All rights reserved.</p>
    <div id="socials"></div>
  </section>
  <!-- </footer> -->
</template>

<script setup lang="ts">
import SingleInput from './Form/SingleInput.vue'
import LogoImg from './LogoImg.vue'
import MainButton from './MainButton.vue'
const nav = [
  {
    name: 'Product',
    subcategories: [
      {
        name: 'Features',
        route: '/features',
      },
      {
        name: 'Pricing',
        route: '',
      },
    ],
  },
  {
    name: 'Resources',
    subcategories: [
      {
        name: 'Blog',
        route: '/blog',
      },
      {
        name: 'User guides',
        route: '/',
      },
      {
        name: 'Webinars',
        route: '/',
      },
    ],
  },
  {
    name: 'Company',
    subcategories: [
      {
        name: 'About us',
        route: '/about',
      },
      {
        name: 'Contact us',
        route: '/contact',
      },
    ],
  },
  {
    name: 'Plan & Pricing',
    subcategories: [
      {
        name: 'Personal',
        route: '',
      },
      {
        name: 'Start up',
        route: '',
      },
      {
        name: 'Organization',
        route: '',
      },
    ],
  },
]
</script>

<style scoped>
h1,
h2 {
  font-family: 'Archivo', sans-serif;
  font-weight: 700;
}
h1 {
  font-size: 32px;
}
h2 {
  font-size: 20px;
}
#about {
  display: flex;
  flex-direction: row;
  place-content: center;
  align-items: center;
  gap: 5px;
  margin: 3rem 0;
}
#newsletter {
  text-align: center;
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 10px;
}
#form {
  width: 400px;
  font-size: 16px;
}
form > * {
  height: 45px;
}
button {
  border-radius: 0 6px 6px 0;
  font-size: 16px;
}
nav {
  display: flex;
  place-content: center;
  width: 100%;
  margin: 2rem 0;
  font-size: 14px;
}
a {
  color: var(--secondary);
}
nav h2 {
  margin-bottom: 10px;
}
nav > ul {
  display: flex;
  flex-direction: row;
  /* gap: 10px; */
  place-items: flex-start;
  justify-content: space-evenly;
  width: 70%;
}
li > ul {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

#footer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 1rem;
  padding: 0 1rem;
}
#footer > * {
  display: flex;
  place-items: center;
  justify-content: center;
}
select {
  width: 127px;
  padding: 5px;
}
</style>
