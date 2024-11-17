<template>
  <main>
    <LogoImg />
    <div class="authType">
      <SecondaryButton style="width: 200px" @click="login = true" :active="login"
        >Sign In</SecondaryButton
      >
      <SecondaryButton style="width: 200px" @click="login = false" :active="!login"
        >Sign Up</SecondaryButton
      >
    </div>
    <AuthForm v-if="login">
      <FormInput type="email" placeholder="Email" />
      <FormInput type="password" placeholder="Password" />
      <PrimaryButton style="width: 200px">Sign In</PrimaryButton>
    </AuthForm>
    <AuthForm v-if="!login">
      <FormInput type="email" placeholder="Email" />
      <FormInput type="password" placeholder="Password" />
      <PrimaryButton style="width: 200px">Sign Up</PrimaryButton>
    </AuthForm>
    <div class="authButtons">
      <AuthButton>Continue with Google</AuthButton>
      <AuthButton>Continue with Facebook</AuthButton>
    </div>
    <div class="authLinks">
      <router-link to="/">Forgot your password?</router-link>
      <router-link to="/">Privacy Policy</router-link>
      <router-link to="/">Terms of Service</router-link>
    </div>
  </main>
</template>

<script setup lang="ts">
import PrimaryButton from '@/components/Buttons/PrimaryButton.vue'
import SecondaryButton from '@/components/Buttons/SecondaryButton.vue'
import LogoImg from '@/components/LogoImg.vue'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import AuthForm from '@/components/Form/AuthForm.vue'
import FormInput from '@/components/Form/FormInput.vue'
import AuthButton from '@/components/Buttons/AuthButton.vue'

const login = ref<boolean>(true)
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  place-items: center;
}
main > * {
  margin-top: 0.5rem;
}
.authType {
  display: flex;
  flex-direction: row;
}
.authLinks {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 14px;
  align-items: center;
}
.authButtons {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>
