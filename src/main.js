import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* import Vant from 'vant';
import 'vant/lib/index.css';
import 'vant/lib/icon/local.css'; */

// 全局css
import './styles/common.css';
import './styles/reset.css';
import 'amfe-flexible';

Vue.config.productionTip = false;

/* Vue.use(Vant); */
console.log('main.js run ');
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
