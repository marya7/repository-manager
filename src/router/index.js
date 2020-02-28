import Vue from 'vue';
import VueRouter from 'vue-router';
import Search from '../views/Search.vue';
import Bookmarks from '../views/Bookmarks.vue';
import Repository from '../views/Repository.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Search',
    component: Search,
  },
  {
    path: '/bookmarks',
    name: 'Bookmarks',
    component: Bookmarks,
  },
  {
    path: '/repository/:id',
    name: 'Repository',
    component: Repository,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
