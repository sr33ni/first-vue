import { createApp } from 'vue'
import './assets/styles/main.scss'
import App from './App.vue'
import router from './router'
import Vue3Marquee from 'vue3-marquee'
import ObserveDirective from './directives/v-observe.js'

const app = createApp(App)

app.directive('observe', ObserveDirective)
app.use(router)
.use(Vue3Marquee)
app.mount('#app')
