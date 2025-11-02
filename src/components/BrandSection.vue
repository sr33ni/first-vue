<template>
  <section class="brand-section">
    <h6>From One Root, Many Branches</h6>
    <h2>Our Connected Brands</h2>

    <div class="brand-container container">
      <Swiper
        :modules="[Pagination, Navigation]"
        :loop="false"
        :autoplay="{ delay: 2500, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        :navigation="true"
        :space-between="41"
        :slides-per-view="'auto'"
        :breakpoints="{
          500: {
            slidesPerView: 2,
            centeredSlides: true,
            spaceBetween: 16
          },
          640: {
            slidesPerView: 1.5,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 3,
            centeredSlides: false,
          }
        }"
        class="brands-swiper"
      >
        <SwiperSlide v-for="brand in branddatas" :key="brand.id" class="brands-swiper-slide">
          <div class="border-gradient">
            <article class="brand-item">
              <label>{{ brand.label }}</label>
              <p>{{ brand.text }}</p>
                      <ul class="social-icons">
          <li><img src="@/assets/img/LinkedinLogo.png" alt="Linkedin Logo" /></li>
          <li><img src="@/assets/img/InstagramLogo.png" alt="Instagram Logo" /></li>
          <li><img src="@/assets/img/XLogo.png" alt="X Logo" /></li>
          <li><img src="@/assets/img/YoutubeLogo.png" alt="Youtube Logo" /></li>
        </ul>
              <img :src="brand.src" :alt="brand.alt" />
            </article>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const branddatas = [
  {
    id: 1,
    src: new URL('@/assets/img/brand-second.png', import.meta.url).href,
    alt: 'Blue Tigers',
    label: 'BLUE TIGERS',
    text: 'Fueling the Future of Film, Sports, and Technology.'
  },
  {
    id: 2,
    src: new URL('@/assets/img/brand-first.png', import.meta.url).href,
    alt: 'Kochi Blue Tigers',
    label: 'KOCHI BLUE TIGERS',
    text: 'A dynamic cricket team redefining the game with passion and power.'
  },
  {
    id: 3,
    src: new URL('@/assets/img/brand-third.png', import.meta.url).href,
    alt: 'Blue Tigers London',
    label: 'BLUE TIGERS LONDON',
    text: 'A creative production house bringing bold stories to life.'
  }
]
</script>

<style scoped>
@media (min-width: 1299px) {
  :deep(.swiper-wrapper) {
    justify-content: center;
  }
}

</style>
