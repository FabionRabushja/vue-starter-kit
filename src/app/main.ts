import Vue from 'vue';
import AppComponent from './ui/app.component';
import router from './router';
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  router,
  render: (h) => h(AppComponent),
}).$mount('#app');
