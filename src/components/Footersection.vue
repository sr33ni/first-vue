<template>
  <footer class="footer-section">
    <div class="container">
      <div class="footer-top">
        <RouterLink to="/">
          <img src="@/assets/img/logo.png" alt="TechBank Logo" />
        </RouterLink>
        <a href="mailto:hi@techbank.com">hi@techbank.com</a>
      </div>

      <div class="footer-content">
        <div class="footer-logo-section">
          <h5>Engineering  <br>the Future</h5>
          <button type="button" class="footer-button" >
            Contact us
          </button>
        </div>

        <div class="footer-nav">
          <ul class="footer-links">
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/products">Products</RouterLink></li>
            <li><RouterLink to="/teams">Teams</RouterLink></li>
            <li><RouterLink to="/career">Career</RouterLink></li>
            <li><RouterLink to="/blog">Blog</RouterLink></li>
          </ul>
        </div>

        <div class="footer-address">
          <ul>
            <li>Offices</li>
            <li>Infopark<br>Kochi - Kerala</li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <ul class="social-icons">
          <li><img src="@/assets/img/LinkedinLogo.png" alt="Linkedin Logo" /></li>
          <li><img src="@/assets/img/InstagramLogo.png" alt="Instagram Logo" /></li>
          <li><img src="@/assets/img/XLogo.png" alt="X Logo" /></li>
          <li><img src="@/assets/img/YoutubeLogo.png" alt="Youtube Logo" /></li>
        </ul>

        <p>&copy; 2024 TechBank. All rights reserved.</p>

        <ul class="policy-links">
          <li><RouterLink to="/privacy-policy">Privacy Policy</RouterLink></li>
          <li><RouterLink to="/terms-and-conditions">Terms & Conditions</RouterLink></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

