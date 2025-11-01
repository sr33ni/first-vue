<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const branddatas = [
  {
    id: 1,
    src: new URL('@/assets/img/brand-second.png', import.meta.url).href,
    alt: 'Blue Tigers',
    label: "BLUE TIGERS",
    text: "Fueling the Future of Film, Sports, and Technology."
  },
  {
    id: 2,
    src: new URL('@/assets/img/brand-first.png', import.meta.url).href,
    alt: 'Kochi Blue Tigers',
    label: "KOCHI BLUE TIGERS",
    text: "A dynamic cricket team redefining the game with passion and power."
  },
  {
    id: 3,
    src: new URL('@/assets/img/brand-third.png', import.meta.url).href,
    alt: 'Blue Tigers London',
    label: "BLUE TIGERS LONDON",
    text: "A creative production house bringing bold stories to life."
  }
]
</script>

<template>
  <section class="brand-section">
    <h6>From One Root, Many Branches</h6>
    <h2>Our Connected Brands</h2>

    <div class="brand-container  container">
      <Swiper
        :modules="[Autoplay, Pagination,Navigation]"
        :loop="true"
        :autoplay="{ delay: 2500, disableOnInteraction: false }"
        :slides-per-view="'auto'"
        :space-between="30"
        :pagination="{ clickable: true }"
        :navigation="true"
        :breakpoints="{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }"
        class="brands-swiper"
      >
        <SwiperSlide v-for="brand in branddatas" :key="brand.id">
          <article class="brand-item">
            <label>{{ brand.label }}</label>
            <p>{{ brand.text }}</p>
            <img :src="brand.src" :alt="brand.alt" />
          </article>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
<style scoped>

</style>