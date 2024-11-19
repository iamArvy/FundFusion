<template>
  <form @submit.prevent="login()">
    <slot />
  </form>
</template>

<script setup lang="ts">
import PrimaryButton from '@/components/MainButton.vue'
import router from '@/router'

const login = () => {
  // router.getRoutes().forEach((route) => {
  //   if (route.name === 'login') {
  //     router.push(route.path)
  //   }
  // })
  router.push('/')
}
</script>

<style scoped>
form {
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>
