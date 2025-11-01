<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// ✅ Import blog JSON data
import dataone from '../data/dataone.json'

// ✅ Convert image paths dynamically for Vite
const blogdatas = dataone.map(blog => ({
  ...blog,
  src: new URL(blog.src.replace('@/', '/src/'), import.meta.url).href
}))
</script>

<template>
  <section class="blog-section">
    <h6>From Insights to Innovation</h6>
    <h2>Our Latest Blogs</h2>

    <div class="blog-container container">
      <Swiper
        :modules="[Autoplay, Pagination, Navigation]"
        :loop="true"
        :autoplay="{ delay: 2500, disableOnInteraction: false }"
        :slides-per-view="3"
        :space-between="30"
        :pagination="{ clickable: true }"
        :navigation="blogdatas.length > 3"
        class="blogs-swiper"
      >
        <SwiperSlide
          v-for="blog in blogdatas"
          :key="blog.id"
          class="blog-slide"
        >
          <article class="blog-item">
            <img :src="blog.src" :alt="blog.alt" class="blog-image" />
            <label class="blog-label">{{ blog.label }}</label>
            <p class="blog-text">{{ blog.text }}</p>
          </article>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>