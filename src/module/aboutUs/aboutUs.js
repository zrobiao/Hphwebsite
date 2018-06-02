import Vue from 'Vue'
import aboutUs from './aboutUs.vue'
import * as uiv from 'uiv'

Vue.use(uiv)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(aboutUs)
})
