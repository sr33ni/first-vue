
<template>
    <main>
        <HeaderSection />
        <AboutSection />
        <ProductsSection />
        <TechnologiesSection />
        <BrandSection />
        <Blogs />
    </main>

</template>
<script setup>
  import AboutSection from '../components/AboutSection.vue';
  import ProductsSection from '../components/ProductsSection.vue';
  import TechnologiesSection from '../components/TechnologiesSection.vue';
  import BrandSection from '../components/BrandSection.vue';
import Blogs from '@/components/Blogs.vue';
</script>

<style scoped></style>