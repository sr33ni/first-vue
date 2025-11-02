<template>
      <p class="explore-link"  @click="scrollToSection('products')">SCROLL TO EXPLORE</p>
</template>
<script setup>
function scrollToSection(id) {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>