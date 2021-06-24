import Vue from 'vue'
import 'amfe-flexible'
import './assets/fonts/ArialRoundedMTBold.css'
import './main.css'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
