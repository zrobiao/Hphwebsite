<template>
  <div>
    <Header menu-title="健康资源"></Header>
    <section class="top-banner">
      <img src="../../../static/img/HeathAbout_banner.jpg">
    </section>
    <section class="info-content">
      <div class="index-titlebox">
        <h4>我们的优势</h4>
        <p></p>
      </div>
      <div class="container">
        <ul class="row">
          <li class="col-lg-4 col-md-4 col-xs-6">
            <div class="info-iconbox">
              <i class="iconfont">&#xe602;</i>
            </div>
            <h4>体检服务</h4>
          </li>
          <li class="col-lg-4 col-md-4 col-xs-6">
            <div class="info-iconbox">
              <i class="iconfont">&#xe69f;</i>
            </div>
            <h4>电子档案</h4>
          </li>
          <li class="col-lg-4 col-md-4 col-xs-6">
            <div class="info-iconbox">
              <i class="iconfont">&#xe68e;</i>
            </div>
            <h4>国内专家</h4>
          </li>
          <li class="col-lg-4 col-md-4 col-xs-6">
            <div class="info-iconbox">
              <i class="iconfont">&#xe603;</i>
            </div>
            <h4>基因测序</h4>
          </li>
          <li class="col-lg-4 col-md-4 col-xs-6">
            <div class="info-iconbox">
              <i class="iconfont">&#xe621;</i>
            </div>
            <h4>国际医疗通道</h4>
          </li>
          <li class="col-lg-4 col-md-4 col-xs-6">
            <div class="info-iconbox">
              <i class="iconfont">&#xe61e;</i>
            </div>
            <h4>进口肿瘤医药指导</h4>
          </li>
        </ul>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import "../../common/css/reset.css"
import  '../../assets/icon/iconfont.css'
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
.top-banner {
  width: 100%;
  height: 300px;
  position: relative;
}
.top-banner img {
  width: 100%;
  height: auto;
}
.index-titlebox{
  width:100%;
  text-align: center;
  padding:12px 0 8px;
}
.index-titlebox h4{
  font-size: 1.8rem;
  color:#525252;
  line-height: 2rem;
  margin:8px 0;
}
</style>
