<script setup>
import { RouterView } from 'vue-router';
import HeaderSection from './components/HeaderBanner.vue';
</script>

<template>
<main>
    <HeaderSection />
      <RouterView />
  <FooterSection />

</main>

</template>

<style scoped></style>
