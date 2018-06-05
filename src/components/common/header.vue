<template>
  <header>
    <navbar>
      <a class="navbar-brand logo-link" slot="brand" href="index.html">
        <img src="../../assets/logo.png" class="img-responsive">
      </a>
      <template slot="collapse">
        <navbar-nav right>
          <li :class="[menuTitle==='首页'?'df-active':'','submenu-box']">
            <a href="index.html" class="submenu">首页</a>
          </li>
          <li :class="[menuTitle==='健康资源'?'df-active':'','submenu-box']">
            <a href="healthInfo.html" class="submenu">健康资源</a>
          </li>
          <li :class="[menuTitle==='资讯'?'df-active':'','submenu-box']">
            <a href="infoList.html" class="submenu">资讯</a>
          </li>
          <li :class="[menuTitle==='关于我们'?'df-active':'','submenu-box']">
            <a href="aboutUs.html" class="submenu">关于我们</a>
          </li>
        </navbar-nav>
      </template>
    </navbar>
  </header>
</template>
<script>
import '../../assets/bootstrap/css/bootstrap.min.css'
export default {
  psops: ['menu-title'],
  data () {
    return {}
  },
  created () {
    console.log(this.menuTitle)
  },
  methods: {},
  components: {}
}
</script>
<style>
.logo-link {
  padding: 4px 6px;
}
.logo-link img {
  /* padding: 4px 6px; */
}
</style>
