import Vue from 'vue';
import VueRouter from 'vue-router';
import Repositories from '../views/Repositories.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Repositories',
    component: Repositories,
  },
  {
    path: '/bookmarks',
    name: 'Bookmarks',
    component: () => import('../views/Bookmarks.vue'),
  },
  {
    path: '/repository/:id',
    name: 'RepositoryDetail',
    component: () => import('../views/RepositoryDetail.vue'),
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
