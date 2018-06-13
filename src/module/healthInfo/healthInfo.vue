<template>
  <div>
    <Header menu-title="健康资源"></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import "../../common/css/reset.css";
import "../../assets/icon/iconfont.css";
import Header from "../../components/common/header.vue";
import Footer from "../../components/common/footer.vue";
export default {
  name: "app",
  components: { Header, Footer },
  data() {
    return {
      msg: "这里是健康资讯！"
    };
  }
};
</script>

<style>

</style>
