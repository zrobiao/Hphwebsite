<template>
  <div>
    <Header menu-title="资讯"></Header>
    <section class="top-banner">
      <img src="../../../static/img/detailPage_banner.jpg">
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import "../../common/css/reset.css"
import Header from "../../components/common/header.vue";
import Footer from "../../components/common/footer.vue";
export default {
  name: "app",
  components: { Header, Footer },
  data() {
    return {
      msg: "这里是资讯列表！"
    };
  }
};
</script>

<style>
.top-banner {
  width: 100%;
  height: 300px;
  position: relative;
}
.top-banner img {
  width: 100%;
  height: auto;
}
</style>
