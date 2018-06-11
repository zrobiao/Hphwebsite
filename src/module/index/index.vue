<template>
  <div>
    <Header menu-title="首页"></Header>
    <section>
      <carousel :indicators="indicators" :controls="controls" :interval="interval" ref="carousel">
        <slide v-for="(slide, index) in slides" :key="index">
          <div style="width: 100%;" class="slider-box">
            <img :src="slide.src" class="img-responsive">
          </div>
        </slide>
        <template slot="indicators" slot-scope="props">
          <ol class="carousel-indicators custom-carousel-indicators">
            <li v-for="(slide, index) in slides" :class="{active:index === props.activeIndex}" @click="props.select(index)">
              <!-- Anything you like here -->
            </li>
          </ol>
        </template>
      </carousel>
    </section>
    <section class="container">
      <div class="index-titlebox">
        <h4>我们的优势</h4>
        <p></p>
      </div>
      <ul class="content row">
        <li class="col-lg-3 col-md-3 col-xs-6">
          <div class="index-libox">
            <div class="icon-box"><i class="iconfont hph-ali-icon1"></i></div>
            <p>专业服务<br/>培训上岗&nbsp;&nbsp;经验丰富</p>
          </div>
        </li>
        <li class="col-lg-3 col-md-3 col-xs-6">
          <div class="index-libox">
            <div class="icon-box">
              <i class="iconfont hph-ali-resource"></i>
            </div>
            <p>八大资源<br/>五星服务&nbsp;&nbsp;为您护航</p>
          </div>
        </li>
        <li class="col-lg-3 col-md-3 col-xs-6">
          <div class="index-libox">
            <div class="icon-box">
              <i class="iconfont hph-ali-zyfw"></i>
            </div>
            <p>多元化服务<br/>五星服务&nbsp;&nbsp;海量护工</p>
          </div>
        </li>
        <li class="col-lg-3 col-md-3 col-xs-6">
          <div class="index-libox">
            <div class="icon-box">
              <i class="iconfont hph-ali-anquan"></i>
            </div>
            <p>健康安心<br/>平台担保&nbsp;&nbsp;持证上岗</p>
          </div>
        </li>
      </ul>
    </section>
    <section class="index-middle">
      <div class="container">专业级的护工给你提供更加优质的护理服务……</div>
    </section>
    <section class="container">
      <ul class="row">
        <li class="col-lg-6 col-md-6 col-xs-12">
          <div class="nurs-wokerbox">
            <div>
              <h6>自营护工</h6>
              <p>专业培训、舒适培训</p>
            </div>
          </div>
        </li>
        <li class="col-lg-6 col-md-6 col-xs-12">
          <div class="nurs-wokerbox">
            <div>
              <h6>海量护工</h6>
              <p>共享服务、方便你我</p>
            </div>
          </div>
          <div class="nurs-wokerbox">
            <div>
              <h6>加盟护工</h6>
              <p>专业、专注、专项</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <section class="ent-content">
      <div class="index-titlebox">
        <h4>便捷入口</h4>
        <p></p>
      </div>
      <ul class="content row">
        <li class="col-lg-4 col-md-4 col-xs-12">
          <div class="ent-libox">
            <div class="icon-box">
              <i class="iconfont hph-ali-app6"></i>
            </div>
            <h3>APP直达</h3>
            <p>专业服务<br/>培训上岗&nbsp;&nbsp;经验丰富</p>
          </div>
        </li>
        <li class="col-lg-4 col-md-4 col-xs-12">
          <div class="ent-libox">
            <div class="icon-box">
              <i class="iconfont hph-ali-weixin-copy"></i>
            </div>
            <h3>微信直达</h3>
            <p>八大资源<br/>五星服务&nbsp;&nbsp;为您护航</p>
          </div>
        </li>
        <li class="col-lg-4 col-md-4 col-xs-12">
          <div class="ent-libox">
            <div class="icon-box">
              <i class="iconfont hph-ali-dianhuadiaoyan"></i>
            </div>
            <h3>电话直达</h3>
            <p>多元化服务<br/>五星服务&nbsp;&nbsp;海量护工</p>
          </div>
        </li>
      </ul>
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
  components: {
    Footer,
    Header
  },
  data() {
    return {
      msg: "这里是首页！",
      interval: 0,
      indicators: true,
      controls: false,
      slides: [
        {
          title: "滑动1",
          src: "../../../static/img/index_banner.jpg"
        }
      ]
    };
  },
  created() {}
};
</script>

<style>
/* slides样式 */
.slider-box{
  padding-bottom:26%;
}
.slider-box img{
  position: absolute;
  top:0;
  left:0;
}
.custom-carousel-indicators li{
  margin: 0 8px;
  border-radius: 50%;
  border:none;
  background: #fff;
  width: 15px;
  height: 15px;
}
.custom-carousel-indicators .active{
  border-radius: 50%;
  margin: 0 8px;
  width: 15px;
  height: 15px;
  background: #34b8de;
}
/* 我们的又是样式 */
.index-titlebox{
  width:100%;
  text-align: center;
  padding:12px 0 8px;
}
.index-titlebox h4{
  font-size: 1.6rem;
  color:#747474;
  line-height: 2rem;
  margin:8px 0;
}
.index-titlebox p{
  width:50px;
  height:2px;
  color: #34b8de;
  margin:0 auto;
}
.content{
  padding:12px 0;
}
.index-libox{
  background: #f3f7fa;
}
.icon-box{
  color: #34b8de;
  text-align: center;
  /* padding: 12px 0; */
}
.icon-box i{
  font-size: 4rem;
}
.index-libox p{
  text-align: center;
  color:#525252;
  line-height: 1.8rem;
  font-size: 1.4rem;
  padding: 8px 0 15px;
}
/* 中间banner */
.index-middle{
  padding-bottom:10%;
  /* background: url(../../static/index_middle.jpg) 0 0 no-repeat; */
  background: #34b8de;
}
.index-middle div{
  font-size:2.4rem;
  color:#fff;
}
/* 护工介绍 */


/* 便捷入口 */
.ent-libox h3{
  text-align: center;
  font-weight: 700;
  color: #525252;
}
.ent-libox p{
  text-align: center;
  color:#525252;
  line-height: 1.8rem;
  font-size: 1.4rem;
  padding: 8px 0 15px;
}
</style>
