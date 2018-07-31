import Vue from 'vue'

import App from './App.vue'
import store from './store/index.js'
import router from './router.js'
import {sync} from 'vuex-router-sync'

sync(store, router)

new Vue({
  el: '#app',
  router,
  store,
  render: h=>h(App)
})
