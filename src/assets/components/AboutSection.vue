<template>
    <section class="about-section container">
        <h2>About Us</h2>
        <p>
            TechBank is a blockchain product company creating decentralized tools like TechBank,<br /> Dbank, and
            Dwallet to simplify digital finance. We empower users with secure, transparent,<br /> and user-friendly
            solutions for managing assets in the Web3 world.
        </p>
        <ul class="stats-container">
            <li v-for="(stat, index) in stats" :key="index" class="stat-item">
                <article>
                    <h3 class="stat-value">{{ stat.value }}</h3>
                    <p class="stat-label">{{ stat.label }}</p>
                </article>
            </li>
        </ul>
    </section>
</template>

<script setup>
const stats = [
    { value: '4', label: 'Products' },
    { value: '2000+', label: 'Active Users' },
    { value: '1M+', label: 'Downloads' }
];
</script>