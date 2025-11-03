<template>
  <section class="hero-banner">
    <div class="hero-content container">
      <article class="box-to-observe" v-observe-visibility="{ callback: onVisibilityChanged, threshold: 0.1 }">
        <img
          src="@/assets/img/sticker.png"
          alt="Holographic sticker"
          class="sticker"
        />
        <p>
          At TechBank, we’re pioneering the technologies of <br> tomorrow. From blockchain
          to AI, we’re building the <br> digital landscape of the future, today.
        </p>
      </article>

      <h1 class="box-to-observe"  v-observe-visibility="{ callback: onVisibilityChanged, threshold: 0.1 }">Engineering <br />the F<span class="plus-star">u</span>ture</h1>

      <div class="banner-content">
        <p>
          Empowering Businesses, Enabling Growth<br />
          TechBank’s Products for Success
        </p>
        <button class="btn_tag arrow-circle efx-slide" >View Products</button>
      </div>
    </div>
  </section>
</template>


<script setup>

import { ref } from 'vue'

const isVisible = ref(false)

function onVisibilityChanged(isVisibleNow, entry) {
  isVisible.value = isVisibleNow
  if (isVisibleNow) {
    entry.target.classList.add('active')
  } else {
    entry.target.classList.remove('active')
  }
}
</script>