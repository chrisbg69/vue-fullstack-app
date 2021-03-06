import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuelidate from 'vuelidate';
import Toasted from 'vue-toasted';
import AppSocket from './plugins/socket';
import filters from './filters';

import AppHero from './components/shared/AppHero';
import AppSpinner from './components/shared/AppSpinner';
import Paginate from 'vuejs-paginate';





Vue.config.productionTip = false;

Vue.component('AppHero', AppHero);
Vue.component('AppSpinner', AppSpinner);
Vue.component('paginate', Paginate);

Vue.use(vuelidate);
Vue.use(Toasted);
Vue.use(AppSocket, {connection: 'http://localhost:3001'});

filters()


new Vue({  
  router,
  store,
  vuelidate,  
  render: h => h(App),
}).$mount('#app');