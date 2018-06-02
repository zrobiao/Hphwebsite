<template>
    <div id="app">
       <cell></cell>
       <h2>{{msg}}</h2>
    </div>
</template>

<script>
import cell from '../../components/HelloWorld.vue'
export default {
  name: 'app',
  components: { cell },
  data () {
    return {
      msg: '这里是资讯列表！'
    }
  }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
