import Vue from 'Vue'
import healthInfo from './healthInfo.vue'
import * as uiv from 'uiv'
import router from './router';

Vue.use(uiv)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(healthInfo)
})
