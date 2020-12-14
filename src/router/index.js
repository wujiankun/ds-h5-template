import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import Home from '@/views/Home';


let router = new Router({
  routes: [
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/',
      component: () => import(/* webpackChunkName: "about" */ '../views/Login/login.vue')
    }
  ]
});

router.beforeEach((to, from, next) => {
  next(true);
})
export default router;
