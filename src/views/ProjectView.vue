<template>
  <DialogSection v-if="open" :close="openDialog">
    <template #header>Payment Form</template>
    <template #body>
      <form action="">
        <SingleInput placeholder="Amount"></SingleInput>
        <div id="payment"></div>
      </form>
    </template>
  </DialogSection>
  <section id="infoSection">
    <div id="info">
      <h1>Art: Sunset Serenity</h1>
      <p>Inspire, Create, Share: Your Donation Makes Art Possible</p>
      <figure>
        <img src="/projects/1.png" alt="sunset" />
        <figcaption>
          <div id="loader">
            <div class="loading" widthProps="70"></div>
          </div>
          <p>Contributor updates: 150 contributors so far!</p>
          <p>Contact: windycityproject@example.com</p>
        </figcaption>
      </figure>
      <MainButton primary @click="openDialog">Contribute</MainButton>
    </div>
    <div id="analytics"></div>

    <!-- <div id="contribution">
      <h2>Contribution Details</h2>
      <SingleInput placeholder="Custom Amount"></SingleInput>
      <div id="amounts">
        <MainButton primary>$10</MainButton>
        <MainButton primary>$25</MainButton>
      </div>
    </div>
    <div id="payment">
      <h2>Select Payment Method</h2>
      <form action="">
        <div class="checkBoxes">
          <input type="checkbox" name="credit" id="" /><label for="credit">Credit Card</label>
        </div>
        <div class="checkBoxes">
          <input type="checkbox" name="paypal" id="" /><label for="paypal"></label>PayPal
        </div>
        <MainButton primary>Link Credit Card</MainButton>
      </form>
      <MainButton primary>Confirm Contribution</MainButton>
    </div> -->
  </section>
</template>

<script setup lang="ts">
import SingleInput from '@/components/Form/SingleInput.vue'
import MainButton from '@/components/MainButton.vue'
import DialogSection from '@/components/Section/DialogSection.vue'
import { ref } from 'vue'

const open = ref(false)
const openDialog = () => {
  open.value = !open.value
}
</script>

<style scoped>
#infoSection {
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}
</style>
