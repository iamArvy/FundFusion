<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { RouterView } from 'vue-router'
import HeaderSection from './components/HeaderSection.vue'
import FooterSection from './components/FooterSection.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const showHeaderAndFooter = computed(() => route.name !== 'auth')
</script>

<template>
  <header class="full-width" v-if="showHeaderAndFooter">
    <HeaderSection />
  </header>
  <main>
    <RouterView />
  </main>
  <footer class="full-width" v-if="showHeaderAndFooter">
    <FooterSection />
  </footer>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&display=swap');
:root {
  --gradient: linear-gradient(to left, #0000ff, #00ffff);
  --primary: rgba(99, 106, 232, 1);
  --secondary: rgba(86, 94, 108, 1);
  --grey: rgba(243, 244, 246, 1);
  --headerheight: 60px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}
#app {
  font-family: 'poppins';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* text-align: center;
  /* color: #2c3e50; */
}
main {
  background-color: var(--bodybg);
  color: var(--bodytext);
  /* height: 100vh; */
}
main,
.full-width {
  --padding-inline: 30px;
  --content-max-width: 1280px;
  /* display: flex; */
  /* flex-direction: column; */
  /* overflow-y: auto; */
  display: grid;
  grid-template-columns:
    [full-width-start] minmax(var(--padding-inline), 1fr) [content-start] min(
      100% - (var(--padding-inline) * 2),
      var(--content-max-width)
    )
    [content-end] minmax(var(--padding-inline), 1fr) [full-width-end];
  /* grid-template-rows: repeat(1fr) ; */
  /* row-gap: 2rem; */
}
main > *:not(.full-width),
.full-width > *:not(.full-width) {
  grid-column: content;
}
main > .full-width {
  grid-column: full-width;
  /* display: grid; */
}
main {
  position: relative;
  margin-top: var(--headerheight);
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Poppins, sans-serif;
}
header {
  position: fixed;
  top: 0;
  width: 100%;
  height: var(--headerheight);
  z-index: 99; /* Ensure the header is above other elements */
}
main {
  flex: 1;
}
footer,
header {
  background-color: white;
  /* color: white; */
}
/* .section {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.artimg {
  max-height: 300px;
  min-height: 300px;
} */

a {
  text-decoration: none;
}
li {
  list-style: none;
}
.dialogcontent {
  position: fixed;
  inset: 0;
  top: 0;
  /* z-index: 99999; */
  background: white;
  display: flex; /* Enables Flexbox layout */
  justify-content: center; /* Centers items horizontally */
  align-items: center;
}
/* h2 {
  font-size: calc(1.325rem + 0.9vw);
}
h6,
.h6,
h5,
.h5,
h4,
.h4,
h3,
.h3,
h2,
.h2,
h1,
.h1 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}
h4 {
  font-size: calc(1.275rem + 0.3vw);
}
h5 {
  font-size: 1.25rem;
}
h6 {
  font-size: 1rem;
} */
</style>
