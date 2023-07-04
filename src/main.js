import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSplide from '@splidejs/vue-splide';

export const EventBus = new Vue();
// CSS 
import './css/app.css'
// Fontawesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'  
// import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
// import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

// Components
import RadioButton from '@/components/forms/RadioButton'

// Global Components
Vue.component('radio-button', RadioButton)

Vue.config.productionTip = false;
Vue.use( VueSplide );

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
