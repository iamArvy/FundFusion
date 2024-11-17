<template>
  <footer>
    <section id="newsletter">
      <p class="newletterText">Subscribe to our newsletter</p>
      <form>
        <div class="input">
          <span>H</span> <input type="email" name="" id="" placeholder="Input your email" />
        </div>
        <button>Subscribe</button>
      </form>
    </section>
    <section id="footer">
      <LogoImg />
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#others">Others</a></li>
        </ul>
      </nav>
    </section>
    <hr />
    <section id="others">
      <div id="lang"></div>
      <p>© 2023. All rights reserved.</p>
      <div id="socials"></div>
    </section>
  </footer>
</template>

<script setup lang="ts">
import LogoImg from './LogoImg.vue'
</script>

<style scoped>
#newsletter {
  /* background-color: #f2f2f2; */
  padding: 50px 0;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 10px;
}
#newsletter p {
  font-size: 20px;
  font-weight: 600;
}
form {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 400px;
  /* justify-content: center; */
}
form > * {
  height: 45px;
}
.input {
  flex: 1;
  background-color: transparent;
  border: 1px solid white;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 22px 0 0 22px;
}
button {
  border-radius: 0 22px 22px 0;
  background: rgba(99, 106, 232, 1);
  border: none;
  font-size: 16px;
  color: white;
  padding: 0.5rem 1rem;
}
input {
  background-color: transparent;
  border: none;
  color: white;
  font-weight: 400;
  padding: 0 10px;
  outline: none;
  font-size: 16px;
}

#footer {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
ul {
  display: flex;
  flex-direction: row;
  gap: 10px;
  place-items: center;
  justify-content: center;
}
</style>
