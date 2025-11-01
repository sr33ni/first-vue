<script setup>
import Vue3Marquee from 'vue3-marquee'

const logos = [
  { id: 1, src: new URL('@/assets/img/Logo00.png', import.meta.url).href, alt: 'Logo 1' },
  { id: 2, src: new URL('@/assets/img/Logo01.png', import.meta.url).href, alt: 'Logo 2' },
  { id: 3, src: new URL('@/assets/img/Logo02.png', import.meta.url).href, alt: 'Logo 3' },
  { id: 4, src: new URL('@/assets/img/Logo03.png', import.meta.url).href, alt: 'Logo 4' }
]
</script>

<template>
  <section class="marquee-section">
    <Vue3Marquee :pauseOnHover="true" :clone="true" :duration="20">
      <div v-for="logo in logos" :key="logo.id" class="logo-wrapper">
        <img :src="logo.src" :alt="logo.alt" class="logo" />
      </div>
    </Vue3Marquee>
  </section>
</template>

<style scoped>
.marquee-section {
  background: #000;
  padding: 2rem 0;
  overflow: hidden;
  width: 100%;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 3rem;
}

.logo {
  height: 60px;
  width: auto;
  filter: brightness(0) invert(1);
}
</style>
