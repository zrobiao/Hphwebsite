<template>
  <div>
    <Header menu-title="关于我们"></Header>
    <section class="top-banner">
      <img src="../../../static/img/aboutUs_banner.jpg">
    </section>
    <section class="about-infocontent">
      <div class="index-titlebox">
        <h4>公司介绍</h4>
        <p></p>
      </div>
      <div class="container about-infobox">
        <p>深圳市快康网络技术有限公司是一家基于互联网的护理服务公司，好陪护是公司开发的医院护理产品。公司旨在对护理有需求的客户，提供“以人为中心”，最适合的专业护理服务。快康好陪护建立统一的准入门槛、执业标准和执业规范以及健全的培训体系和监督考评体系，让病患及家属拥有健康身心。</p>
        <div class="about-imgbanner">
          <img src="../../assets/aboutUs_middle.jpg" class="img-responsive">
        </div>
      </div>
    </section>
    <section class="about-cultruebox">
      <div class="index-titlebox">
        <h4>公司文化、价值观</h4>
        <p></p>
      </div>
      <div class="container">
        <ul class="row about-cultrue">
          <li class="col-lg-3 col-md-3 col-xs-6 c-number">
            <div class="about-liimgbox">
              <i class="iconfont">&#xe6a7;</i>
            </div>
            <p>建立了一个专业的网络护理平台，使客户能享受到更便捷、舒适、贴心的服务</p>
          </li>
          <li class="col-lg-3 col-md-3 col-xs-6 e-number">
            <p>专职、专业培训师，专业服务团队，带给客户家人般关爱的同时帮助客户早日康复是公司服务的宗旨</p>
            <div class="about-liimgbox">
              <i class="iconfont">&#xe6a8;</i>
            </div>
          </li>
          <li class="col-lg-3 col-md-3 col-xs-6 c-number">
            <div class="about-liimgbox">
              <i class="iconfont">&#xe6a9;</i>
            </div>
            <p>为住院患者提供优质、高效、专业的陪护服务</p>
          </li>
          <li class="col-lg-3 col-md-3 col-xs-6 e-number">
            <p>快康公司视员工为公司最重要的部分，为员工提供的不仅仅是吸引力强的薪资，还有新技能和获得新的资质以及公司管理层晋升机会</p>
            <div class="about-liimgbox">
              <i class="iconfont">&#xe6aa;</i>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="about-jobcontent">
      <div class="index-titlebox">
        <h4>招聘信息</h4>
        <p></p>
      </div>
      <div class="container">
        <ul class="row">
          <li class="col-lg-4 col-md-4 col-xs-12">
            <div class="job-box">
              <h5>加盟护工</h5>
              <div class="job-txtbox">
                <p>地点：贵州贵阳</p>
                <button type="button">加入我们</button>
              </div>
            </div>
          </li>
          <li class="col-lg-4 col-md-4 col-xs-12">
            <div class="job-box">
              <h5>加盟护工</h5>
              <div class="job-txtbox">
                <p>地点：贵州贵阳</p>
                <button type="button">加入我们</button>
              </div>
            </div>
          </li>
          <li class="col-lg-4 col-md-4 col-xs-12">
            <div class="job-box">
              <h5>加盟护工</h5>
              <div class="job-txtbox">
                <p>地点：贵州贵阳</p>
                <button type="button">加入我们</button>
              </div>
            </div>
          </li>
          <li class="col-lg-12 col-md-12 col-xs-12">
            <p class="about-joblink">如果你有更多疑问请投递&nbsp;<a>1109993204@qq.com</a>&nbsp;了解更多</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="about-linkus">
      <div class="index-titlebox">
        <h4>联系我们</h4>
        <p></p>
      </div>
      <div class="container">
        <ul class="row">
          <li class="col-lg-6 col-md-6 col-xs-12 text-center">
            <h4 class="about-linkh4">
              <i class="iconfont">&#xe635;</i>客服电话</h4>
            <p class="about-linkp">
              <span>96028</span>转
              <span>2</span>
            </p>
            <p class="about-linkp1">7*24小时在线</p>
          </li>
          <li class="col-lg-6 col-md-6 col-xs-12 text-center">
            <h4 class="about-linkh4">
              <i class="iconfont">&#xe629;</i>公司电话</h4>
            <p class="about-linkp">
              <span>0851-234567891</span>
            </p>
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
/* 标题样式 */
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
.index-titlebox p {
  width: 50px;
  height: 2px;
  background: #34b8de;
  margin: 0 auto;
}
/* 公司介绍 */
.about-infobox {
  margin: 30px auto;
}
.about-infobox p {
  font-size: 1.4rem;
  line-height: 2rem;
  text-align: center;
  padding: 10px 0;
}
/* 公司文化、价值观 */
.about-cultrue {
  margin: 30px 0;
}
.about-cultrue li {
  padding: 15px 30px;
  margin-bottom: 15px;
}
.about-cultrue li p {
  font-size: 1.4rem;
  color: #fff;
  line-height: 1.8rem;
  text-align: center;
  height: 100px;
}
.about-liimgbox {
  text-align: center;
}
.about-liimgbox i {
  font-size: 8rem;
  font-weight: 500;
  color: #fff;
}
.c-number {
  background: #6fc6de;
}
.e-number {
  background: #34b8de;
}
/* 招聘信息 */
.about-jobcontent {
  background: #edf3f5;
}
.job-box {
  width: 80%;
  margin: 12px auto;
  background: #fff;
  padding: 12px;
}
.job-box:hover{
  box-shadow: 0 0 8px rgba(70, 109, 122, 0.4);
  -webkit-box-shadow: 0 0 8px rgba(70, 109, 122, 0.4);
  -moz-box-shadow: 0 0 8px rgba(70, 109, 122, 0.4);
  -ms-box-shadow: 0 0 8px rgba(70, 109, 122, 0.4);
  border-radius: 4px;
}
.job-box h5 {
  font-size: 2rem;
  padding: 12px 0 15px 10px;
  border-bottom: solid 1px #edf3f5;
  margin:0;
}
.job-txtbox {
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-content: center;
  padding-top:20px;
}
.job-txtbox p{
 margin-bottom: 0;
 line-height: 34px;
}
.job-txtbox button{
 border:none;
 background: #34b8de;
 border-radius: 4px;
 padding:0 12px;
 color:#fff;
 line-height: 34px;
}
.about-joblink{
  margin:50px 0;
  text-align: center;
  font-size: 1,4rem;
}
/* 联系我们 */
.about-linkus li{
  margin:50px 0;
}
.about-linkh4{
  font-size: 2.4rem;
  color:#525252;
  font-weight: 700;
}
.about-linkh4 i{
  padding-right:10px;
  font-size: 2.8rem;
  color:#525252;
  font-weight: 700;
}
.about-linkp{
  font-size: 1.6rem;
  color:#525252;
}
.about-linkp span{
  font-size: 2.2rem;
  color:#ff4e00;
  padding:0 6px;
}
</style>
