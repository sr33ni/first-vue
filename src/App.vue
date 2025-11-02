<script setup>
import { RouterView } from 'vue-router';
import HeaderSection from './components/HeaderBanner.vue';
import FooterSection from './components/FooterSection.vue';
</script>

<template>
<main>
    <HeaderSection />
      <RouterView />
  <FooterSection />

</main>

</template>

<style scoped></style>
