<script setup>
import Swiper from 'swiper';
const branddatas = [
    {
        id: 1,
        src: new URL('@/assets/img/brand-second.png', import.meta.url).href, alt: 'Logo 1',
        label: "BLUE TIGERS",
        text: "Fueling the Future of Film, Sports, and Technology."
    },
    {
        id: 1,
        src: new URL('@/assets/img/brand-first.png', import.meta.url).href, alt: 'Logo 1',
        label: "KOCHI BLUE TIGERS",
        text: "A dynamic cricket team redefining the game with passion and power.."
    },
    {
        id: 1,
        src: new URL('@/assets/img/brand-third.png', import.meta.url).href, alt: 'Logo 1',
        label: "BLUE TIGERS lONDON",
        text: "A creative production house bringing bold stories to life"
    },
]
</script>

<template>
    <section class="brand-section">
        <h6>From One Root, Many Branches</h6>
        <h2>Our Connected Brands</h2>
        <ul class="brand-container">
            <li v-for="(brand, index) in branddatas" :key="index" class="brand-item">
                <article>
                    <img :src="brand.src" :alt="brand.alt" />
                </article>
            </li>
        </ul>

    </section>
</template>
<script setup></script>