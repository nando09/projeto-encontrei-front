import Vue from 'vue';
import App from './App';
import router from './router';
import BootstrapVue from 'bootstrap-vue';
import VueMask from 'di-vue-mask';
import VueSweetalert2 from 'vue-sweetalert2';

import '../node_modules/bootstrap-vue/dist/bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'sweetalert2/dist/sweetalert2.min.css';


Vue.use(BootstrapVue);
Vue.use(VueMask);
Vue.config.productionTip = false
Vue.use(VueSweetalert2);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
