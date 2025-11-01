import { createRouter, createWebHistory } from 'vue-router';
import LandingView from '@/view/LandingView.vue';
import ContactUs from '@/view/ContactUs.vue';

const routes = [
  { path: '/', name: 'page', component: LandingView },
  { path: '/contactus', name: 'ContactUs', component: ContactUs }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;