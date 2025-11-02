import { createApp } from 'vue'
import './assets/styles/main.scss'
import App from './App.vue'
import router from './router'
import Vue3Marquee from 'vue3-marquee'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ObserveVisibility } from 'vue3-observe-visibility'

AOS.init({
  duration: 1000,
  once: true,
})

const app = createApp(App)

app.directive('observe-visibility', ObserveVisibility)
app.use(router)
.use(Vue3Marquee)
app.mount('#app')
