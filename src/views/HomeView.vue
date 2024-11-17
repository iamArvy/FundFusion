<script setup lang="ts">
import SecondaryButton from '@/components/Buttons/SecondaryButton.vue';
import TheWelcome from '../components/TheWelcome.vue'
import PrimaryButton from '@/components/Buttons/PrimaryButton.vue';
import SectionComponent from '@/components/Section/SectionComponent.vue';
import { ref } from 'vue';

const campaignDivs = [
  {
    'header': 'support our vision',
    'content': 'Join us in making a difference by funding our project. Every contribution counts!',
    'button': 'Back this project'
  },
  {
    'header': 'launch your campaign',
    'content': 'Join thousands of creators and bring your ideas to life. Start your campaign today and make a difference.',
    'button': 'Start a Campaign'
  }
]

const gallery = [
  '/gallery/1.png',
  '/gallery/2.png',
  '/gallery/3.png'
]

const status = [
  'Funding Goal: $12,000',
  'Amount Raised: $11,645',
  'Percentage Funded: 97%',
  'Countdown Timer: 20days'
]

const supporterList = [
  {
    'id': '001',
    'name': 'Alice Johnson',
    'amount': 500,
    'comment': 'Happy to Help',
    'action': 'view',
  },
  {
    'id': '002',
    'name': 'Bob Smith',
    'amount': 300,
    'comment': 'Great Support',
    'action': 'thanks',
  }
]

const campaignNavs = [
  'Art',
  'Environment',
  'Technology',
  'Education and Learning'
]

const currentCampaign = ref(0);
const changeCampaign = (index:number) => {
  currentCampaign.value = index
}
</script>

<template>
  <main>
    <SectionComponent id="welcome">
      <h1>Welcome!</h1>
      <p>Join the Movement. Together, We Can Achieve Anything.</p>
    </SectionComponent>
    <SectionComponent id="lola">
      <figure>
        <img src="../assets/lola.png" alt="" />
      </figure>
      <h1>Lola Mercy</h1>
      <p>Creative Director</p>
      <p>Joined: March 2023</p>
    </SectionComponent>
    <SectionComponent header="project funding status" :center="true" id="status">
      <ul>
        <li v-for="(item, index) in status" :key="index"><span>{{ item }}</span></li>
      </ul>
    </SectionComponent>
    <SectionComponent
      header="Project Description"
      desc="Fundfusion is a cutting-edge fintech platform designed to simplify, secure, and optimize the
          crowdfunding process."
      :center="true"
      id="projectDesc"
    />
    <SectionComponent header="media gallery" :center="true" id="gallery">
      <div>
        <img v-for="(item, index) in gallery" :key="index" :src="item" alt="" />
      </div>
    </SectionComponent>
    <SectionComponent header="support list" :center="true" id="list">
      <table>
        <th>
          <td>Supporter ID</td>
          <td>Name</td>
          <td>Contribution Amount</td>
          <td>Comment</td>
          <td>Actions</td>
        </th>
        <tr v-for="(item,index) in supporterList" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>${{ item.amount }}.00</td>
          <td>{{ item.comment }}!</td>
          <td><PrimaryButton class="tbutton">{{ item.action }}</PrimaryButton></td>
        </tr>
      </table>
    </SectionComponent>
    <SectionComponent header="featured campaigns" center id="campaigns">
      <nav>
        <SecondaryButton v-for="(nav, index) in campaignNavs" :key="index" :active="currentCampaign === index" @click="changeCampaign(index)">
          {{ nav }}
        </SecondaryButton>
      </nav>
    </SectionComponent>
    <SectionComponent id="campaignDivs">
      <ul>
        <li v-for="(item, index) in campaignDivs" :key="index">
        <h1>{{ item.header }}</h1>
        <p>{{ item.content }}</p>
        <PrimaryButton>{{ item.button }}</PrimaryButton>
        </li>
      </ul>
    </SectionComponent>
  </main>
</template>
<style scoped>
#gallery>div{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
table{
  width: 100%;
  border: 1px solid var(--grey);
}
th{
  background-color: var(--grey);
}
th, tr {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding: 5px 0;
}
.tbutton{
  width: 70px;
  /* display: flex; */
  padding: 5px 5px;
  text-transform: capitalize;
}
#campaignDivs li{
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 10px;
  margin: 3rem 0;
}
#campaignDivs h1{
  text-transform: capitalize;
  color: var(--primary);
  font-size: 48px;
  font-weight: 700;
}
</style>
