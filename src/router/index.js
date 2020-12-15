import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home';
import About from '@/views/About';
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '*',
      component: About
    },
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "about" */ '../views/Login/login.vue')
    }
  ]
});

router.beforeEach((to, from, next) => {
  next(true);
})
export default router;
