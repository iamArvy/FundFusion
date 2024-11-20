<template>
  <DialogSection v-if="open" :close="openDialog">
    <template #header>Payment Form</template>
    <template #body>
      <form action="">
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
          <div id="progress">
            <div id="loader" widthProps="70">
              <span class="loading"></span>
            </div>
            <span>75% complete.</span>
          </div>
          <p>Target Fundraising Goal: $50,000</p>
          <p>Contributor updates: 150 contributors so far!</p>
          <p>Contact: windycityproject@example.com</p>
        </figcaption>
      </figure>
      <SingleInput placeholder="Amount" id="amountInput" @submit.prevent="openDialog">
        <template #button>
          <MainButton primary>Donate</MainButton>
        </template>
      </SingleInput>
    </div>
    <div id="rewards">
      <h3>Rewards</h3>
      <div>
        <ImageCard
          long
          v-for="(item, index) in rewards"
          :key="index"
          :src="item.img"
          :alt="item.title"
        >
          <template #name>{{ item.title }}</template>
          <template #description>
            <p>{{ item.description }}</p>
            <p>Amount: ${{ item.price }}</p></template
          >
        </ImageCard>
      </div>
    </div>
  </section>
  <SectionComponent header="Analytics">
    <swiper v-bind="swiperOptions" id="ann">
      <swiper-slide>
        <ContribComponent />
      </swiper-slide>
      <swiper-slide>
        <CampaignComponent />
      </swiper-slide>
      <swiper-slide>
        <SharesComponent />
      </swiper-slide>
    </swiper>
  </SectionComponent>
</template>

<script setup lang="ts">
import SingleInput from '@/components/Form/SingleInput.vue'
import ImageCard from '@/components/ImageCard.vue'
import MainButton from '@/components/MainButton.vue'
import DialogSection from '@/components/Section/DialogSection.vue'
import SectionComponent from '@/components/Section/SectionComponent.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { ref } from 'vue'
import ContribComponent from '@/components/ContribComponent.vue'
import CampaignComponent from '@/components/CampaignComponent.vue'
import SharesComponent from '../components/SharesComponent.vue'

const swiperOptions = ref({
  spaceBetween: 0,
  slidesPerView: 2,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})
const rewards = ref([
  {
    title: 'T-Shirt',
    description: 'High-quality cotton T-shirt',
    price: 20,
    img: '/rewards/1.png',
  },
  {
    title: 'Poster',
    description: 'Limited edition campaign poster',
    price: 10,
    img: '/rewards/2.png',
  },
])
const open = ref(false)
const openDialog = () => {
  open.value = !open.value
}
</script>

<style scoped>
#infoSection {
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem;
}
#info,
#info figcaption {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
#amountInput {
  width: 70%;
}
#loader {
  width: 70%;
  height: 6px;
  border-radius: 3px;
  background-color: var(--grey);
  position: relative;
}
#loader span {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 70%;
  background-color: var(--primary);
  border-radius: 1rem;
}
#rewards div > figure + figure {
  margin-top: 1rem;
}
p {
  font-size: 14px;
}
#progress {
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
}
#progress span {
  font-size: 10px;
}
</style>
