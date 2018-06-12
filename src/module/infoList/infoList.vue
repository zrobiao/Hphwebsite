<template>
  <div>
    <Header menu-title="资讯"></Header>
    <section class="top-banner">
      <img src="../../../static/img/detailPage_banner.jpg">
    </section>
    <section class="container list-title">
      <h1><span></span>资讯列表</h1>
    </section>
    <section class="container">
      <ul class="row">
        <li class="col-lg-12 col-md-12 col-xs-12">
          <div class="list-imgbox col-lg-4 col-md-4 col-xs-4">
            <img >
          </div>
          <div class="list-txtbox col-lg-8 col-md-8 col-xs-8">
            <h4>资讯标题</h4>
            <p>这里是截取的一段文字这里是截取的一段文字这里是截取的一段文字这里是截取的一段文字这里是截取的一段文字这里是截取的一段文字这里是截取的一段文字这里是截取的一段文字</p>
            <div class="list-bottom">
              <p>2018-05-16</p>
              <p>Read More</p>
            </div>
          </div>
        </li>
      </ul>
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
