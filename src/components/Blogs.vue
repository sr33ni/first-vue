<template>
  <section class="blog-section">
    <h6>From Insights to Innovation</h6>
    <h2>Our Latest Blogs</h2>

    <div class="blog-container container">
      <Swiper
        :modules="[Pagination, Navigation]"
        :loop="false"
        :pagination="{ clickable: true }"
        :navigation="true"
        :space-between="19"
        :slides-per-view="'auto'"
        :centered-slides="false"
        :slides-offset-before="16"
        :slides-offset-after="16"
        :breakpoints="{
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
            slidesOffsetBefore: 12,
            slidesOffsetAfter: 12
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24
          }
        }"
        class="blog-swiper"
      >
        <SwiperSlide
          v-for="blog in blogdatas"
          :key="blog.id"
          class="blog-slide"
        >
          <article class="blog-item">
            <img :src="blog.src" :alt="blog.alt" class="blog-image" />
            <div class="blog-details">
              <label class="blog-label">{{ blog.label }}</label>
              <p class="blog-text">{{ blog.text }}</p>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import dataone from '../data/dataone.json'

const blogdatas = dataone.map(blog => ({
  ...blog,
  src: new URL(blog.src.replace('@/', '/src/'), import.meta.url).href
}))
</script>

<style scoped>
</style>
