import { createApp } from 'vue'
import './assets/styles/main.scss'
import App from './App.vue'
import router from './router'
import Vue3Marquee from 'vue3-marquee'

const app = createApp(App)

app.use(router)
.use(Vue3Marquee)
app.mount('#app')
