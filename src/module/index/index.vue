<template>
  <div id="app">
    <Header menu-title="首页"></Header>
    <h2>{{msg}}</h2>
    <footer></footer>
  </div>
</template>

<script>
import Header from '../../components/common/header.vue'
import footer from '../../components/common/footer.vue'
export default {
  name: 'app',
  components: {
    footer,
    Header
  },
  data () {
    return {
      msg: '这里是首页！'
    }
  }
}
</script>

<style>

</style>
