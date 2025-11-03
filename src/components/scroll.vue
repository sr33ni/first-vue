<template>
      <p class="explore-link" id="to-top" @click="scrollToSection('to-down')">SCROLL TO EXPLORE</p>
</template>
<script setup>
function scrollToSection(id) {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>