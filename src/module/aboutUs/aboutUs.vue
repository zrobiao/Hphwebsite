<template>
  <div>
    <Header menu-title="关于我们"></Header>
    <section class="top-banner">
      <img src="../../../static/img/aboutUs_banner.jpg">
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../../components/common/header.vue";
import Footer from "../../components/common/footer.vue";
export default {
  name: "app",
  components: { Header, Footer },
  data() {
    return {
      msg: "这里是关于我们"
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
