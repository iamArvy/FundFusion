<template>
  <section>
    <div id="info">
      <h1>Art: Sunset Serenity</h1>
      <p>Inspire, Create, Share: Your Donation Makes Art Possible</p>
      <figure>
        <img src="~/assets/images/sunset.jpg" alt="sunset" />
        <figcaption>
          <div id="loader">
            <div class="loading" widthProps="70"></div>
          </div>
          <p>Contributor updates: 150 contributors so far!</p>
          <p>Contact: windycityproject@example.com</p>
        </figcaption>
      </figure>
    </div>
    <div id="analytics"></div>

    <div id="contribution">
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
    </div>
  </section>
</template>

<script setup lang="ts">
import SingleInput from '@/components/Form/SingleInput.vue'
import MainButton from '@/components/MainButton.vue'
</script>

<style scoped></style>
