import { createWebHistory, createRouter } from 'vue-router';
import Home from '../pages/Home/index.vue';
import NotFound from '../pages/NotFound/index.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
