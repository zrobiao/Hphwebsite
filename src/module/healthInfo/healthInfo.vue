<template>
  <div>
    <Header menu-title="健康资源"></Header>
    <section class="top-banner">
      <img src="../../../static/img/HeathAbout_banner.jpg">
    </section>
    <section class="info-content">
      <!-- <div class="index-titlebox">
        <h4>我们的优势</h4>
        <p></p>
      </div> -->
      <div class="container">
        <ul class="row">
          <li class="col-lg-4 col-md-4 col-xs-6">
            <div class="info-bigbox">
              <div class="info-iconbox">
                <i class="iconfont" style="color:#eccf88">&#xe602;</i>
              </div>
              <h4>体检服务</h4>
            </div>
          </li>
          <li class="col-lg-4 col-md-4 col-xs-6">
            <div class="info-bigbox">
              <div class="info-iconbox">
                <i class="iconfont" style="color:#85bcff">&#xe69f;</i>
              </div>
              <h4>电子档案</h4>
            </div>
          </li>
          <li class="col-lg-4 col-md-4 col-xs-6">
            <div class="info-bigbox">
              <div class="info-iconbox">
                <i class="iconfont" style="color:#85bcff">&#xe68e;</i>
              </div>
              <h4>国内专家</h4>
            </div>
          </li>
          <li class="col-lg-4 col-md-4 col-xs-6">
            <div class="info-bigbox">
              <div class="info-iconbox">
                <i class="iconfont" style="color:#80d855">&#xe603;</i>
              </div>
              <h4>基因测序</h4>
            </div>
          </li>
          <li class="col-lg-4 col-md-4 col-xs-6">
            <div class="info-bigbox">
              <div class="info-iconbox">
                <i class="iconfont" style="color:#80d855">&#xe621;</i>
              </div>
              <h4>国际医疗通道</h4>
            </div>
          </li>
          <li class="col-lg-4 col-md-4 col-xs-6">
            <div class="info-bigbox">
              <div class="info-iconbox">
                <i class="iconfont" style="color:#f98a8a">&#xe61e;</i>
              </div>
              <h4>进口肿瘤医药指导</h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
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
.top-banner {
  width: 100%;
  height: 300px;
  position: relative;
}
.top-banner img {
  width: 100%;
  height: auto;
}
.index-titlebox {
  width: 100%;
  text-align: center;
  padding: 12px 0 8px;
}
.index-titlebox h4 {
  font-size: 1.8rem;
  color: #525252;
  line-height: 2rem;
  margin: 8px 0;
}
.info-content ul {
  margin: 50px 0;
}
.info-bigbox {
  width: 80%;
  margin: 0 auto 20px;
  text-align: center;
  padding: 15px;
  box-shadow: 0 0 4px rgba(70, 109, 122, 0.4);
  -webkit-box-shadow: 0 0 4px rgba(70, 109, 122, 0.4);
  -moz-box-shadow: 0 0 4px rgba(70, 109, 122, 0.4);
  -ms-box-shadow: 0 0 4px rgba(70, 109, 122, 0.4);
  cursor: pointer;
}
.info-bigbox:hover {
  transform: scale(1.1);
  -ms-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -o-transform: scale(1.1);
  -moz-transform: scale(1.1);
}
.info-iconbox i {
  font-size: 5rem;
}
.info-bigbox h4 {
  font-size: 2.4rem;
  color: #34b8de;
  text-align: center;
  padding: 20px 0 0;
}
</style>
