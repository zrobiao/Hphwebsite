<template>
  <header>
    <navbar class="container hph-navbar">
      <a class="navbar-brand logo-link" slot="brand" href="index.html">
        <img src="../../assets/logo.png" class="img-responsive">
      </a>
      <template slot="collapse">
        <navbar-nav right>
          <li :class="[menuTxt==='首页'?'df-active':'','submenu-box']">
            <a href="index.html" class="submenu">首页</a>
          </li>
          <li :class="[menuTxt==='健康资源'?'df-active':'','submenu-box']">
            <a href="healthInfo.html" class="submenu">健康资源</a>
          </li>
          <li :class="[menuTxt==='资讯'?'df-active':'','submenu-box']">
            <a href="infoList.html" class="submenu">资讯</a>
          </li>
          <li :class="[menuTxt==='关于我们'?'df-active':'','submenu-box']">
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
  props: ['menuTitle'],
  data () {
    return {
      menuTxt:this.menuTitle,
    }
  },
  created () {
  },
  mounted (){
  },
  methods: {},
  components: {},
}
</script>
<style>
header{
  border-bottom:1px solid #e5e5e5;
}
.hph-navbar{
  background: #fff;
  border: none;
  margin-bottom: 6px;
}
.logo-link {
  padding: 4px 6px;
}
.logo-link img {
  /* padding: 4px 6px; */
  height: 100%;
}
.submenu-box:hover{
	border-bottom: 2px solid #34b8de;
}
.submenu-box>a{
  color:#525252!important;
  font-size: 1.6rem;
}
.df-active{
	border-bottom: 2px solid #34b8de;
}
.df-active>a{
	background-color: #fff!important;
  color:#34b8de!important;
}
</style>
