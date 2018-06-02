<template>
  <div class="hello">
    <h2>跳转链接</h2>
    <ul>
      <li>
        <a href="index.html">首页</a>
      </li>
      <li>
        <a href="healthInfo.html">健康资源</a>
      </li>
      <li>
        <a href="infoList.html">资讯</a>
      </li>
      <li>
        <a href="aboutUs.html">关于我们</a>
      </li>
    </ul>
    <btn @click="alert" type="primary">Click to open an alert modal</btn>
  </div>
</template>

<script>
import '../assets/bootstrap/css/bootstrap.min.css'
import {Alert} from 'uiv'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Alert
  },
  methods: {
    alert () {
      this.$alert({
        title: 'Title',
        content: 'This is an alert message.'
      }, (msg) => {
        // callback after modal dismissed
        this.$notify(`You selected ${msg}.`)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
