// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/bootstrap/css/bootstrap.min.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import * as uiv from 'uiv'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(uiv)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
