import Axios from 'axios';
import store from './store'
import Vue from 'vue';
import App from './App.vue';
import router from './router';


Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');

const serverHost = "http://127.0.0.1:8000";

Vue.prototype.$http = Axios;
Vue.prototype.$serverHost = serverHost;
Vue.prototype.$router = router;

const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}
