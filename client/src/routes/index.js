import { createWebHistory, createRouter } from 'vue-router';
import Home from '../pages/Home/index.vue';
import Auth from '../pages/Auth/index.vue';
import Detail from '../pages/Detail/index.vue';
import Create from '../pages/Create/index.vue';
import Hub from '../pages/Hub/index.vue';
import NotFound from '../pages/NotFound/index.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Auth',
    component: Auth,
  },
  {
    path: '/hub',
    name: 'Hub',
    component: Hub,
  },
  {
    path: '/create/',
    name: 'Create',
    component: Create,
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
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
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
