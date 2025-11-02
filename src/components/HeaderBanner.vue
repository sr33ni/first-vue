<template>
    <header class="header-banner container">
        <nav class="nav-bar">
            <ul class="nav-links">
                <li class="logo">
                    <RouterLink to="/"><img src="../assets/img/logo.png" alt="TechBank Logo" /></RouterLink>
                </li>
                <ul>
                    <li><a href="#"  @click="scrollToSection('about')">About</a></li>
                    <li><a href="#"  @click="scrollToSection('products')">Products</a></li>
                    <li><a href="#">Teams</a></li>
                    <li><a href="#">Career</a></li>
                    <li><a href="#"  @click="scrollToSection('blogs')">Blog</a></li>
                </ul>
                <li class="buttons">
                    <RouterLink to="/contactus"><button type="button" class="header-button">Contact us</button></RouterLink>
                </li>
            </ul>
        </nav>

    </header>
</template>
<script setup>
function scrollToSection(id) {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>