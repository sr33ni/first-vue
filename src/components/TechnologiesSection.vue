<script setup>
import {Vue3Marquee} from 'vue3-marquee'

const logos = [
  { id: 1, src: new URL('@/assets/img/Logo00.png', import.meta.url).href, alt: 'Logo 1' },
  { id: 2, src: new URL('@/assets/img/Logo01.png', import.meta.url).href, alt: 'Logo 2' },
  { id: 3, src: new URL('@/assets/img/Logo02.png', import.meta.url).href, alt: 'Logo 3' },
  { id: 4, src: new URL('@/assets/img/Logo03.png', import.meta.url).href, alt: 'Logo 4' },
  { id: 5, src: new URL('@/assets/img/Logo04.png', import.meta.url).href, alt: 'Logo 5' },
  { id: 6, src: new URL('@/assets/img/Logo05.png', import.meta.url).href, alt: 'Logo 6' },

]
</script>

<template>
  <div class="technologies-section">
    <h2>technologies</h2>
     <button>dsmple</button>
      <section class="logo-marquee">
    <Vue3Marquee :duration="25" :pauseOnHover="true" :gradient="false">
      <div v-for="logo in logos" :key="logo.id" class="logo-wrapper">
        <img :src="logo.src" :alt="logo.alt" class="logo-img" />
      </div>
    </Vue3Marquee>
        <Vue3Marquee :duration="25" :pauseOnHover="true" :gradient="false"direction="reverse">
      <div v-for="logo in logos" :key="logo.id" class="logo-wrapper">
        <img :src="logo.src" :alt="logo.alt" class="logo-img" />
      </div>
    </Vue3Marquee>
  </section>
  </div>

</template>
