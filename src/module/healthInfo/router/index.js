import Vue from 'vue'
import Router from 'vue-router'
import HealthInfo from './../healthInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HealthInfo',
      name: '健康资源',
      component: HealthInfo
    }
  ]
})
