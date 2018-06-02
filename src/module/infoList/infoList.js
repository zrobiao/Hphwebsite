import Vue from 'Vue'
import infoList from './infoList.vue'
import * as uiv from 'uiv'

Vue.use(uiv)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(infoList)
})
