<template>
  <footer>
    <div class="footer-topbox container">
      <div class="row">
        <div class="footer-toplt col-lg-5 col-md-5 col-xs-12" ref="leftBox">
          <div class="compinfo">
            <h2>深圳快康网络科技有限公司</h2>
            <p>地址：贵州省贵阳市</p>
            <p>电话：0851-12345678</p>
            <p>邮箱：1109993204@qq.com</p>
          </div>
          <div class="qrcodebox col-lg-12 col-md-12 col-xs-12">
            <p>微信公众号</p>
            <ul class=" col-lg-12 col-md-12 col-xs-12">
              <li class="qrcode col-lg-4 col-md-4 col-xs-5">
                <img src="../../../static/img/qrcode.png">
                <p>客户端</p>
              </li>
              <li class="qrcode col-lg-4 col-md-4 col-xs-5">
                <img src="../../../static/img/qrcode.png">
                <p>护工端</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-toprt col-lg-7 col-md-7 col-xs-12" :style="{height:footerLtH+'px',padding:0}">
          <amap></amap>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <p>Copyright&nbsp;@&nbsp;2016-2018&nbsp;www.kkpeihu.com.All&nbsp;Rights&nbsp;Reserved&nbsp;&nbsp;&nbsp;粤ICP备16046624号-1</p>
      </div>
    </div>
  </footer>
</template>
<script>
import "../../assets/bootstrap/css/bootstrap.min.css"
import Amap from './map.vue'
export default {
  data() {
    return {
      footerLtH: 0
    };
  },
  methods: {
    showLstHeight:function (){
      let leftHeight = this.$refs.leftBox.offsetHeight
      this.footerLtH = leftHeight
    }
  },
  created() {
    setTimeout(() => {
      this.showLstHeight()
    }, 500)
    },
  mounted() {
  },
  beforeUpdate() {

  },
  components: {
    Amap
  }
};
</script>
<style>
footer {
  background: #3b4a55;
  color: #fff;
}
.compinfo h2{
  font-size:2.6rem;
  margin:0;
  padding:20px 0 10px;
}
.compinfo p{
  margin:0;
  padding-bottom:6px;
}
.qrcodebox{
  padding:5px 0;
}
.qrcodebox p{
  padding-bottom:6px;
  margin-bottom:0;
}
.qrcodebox ul{
  padding:0;
  margin-bottom:0;
}
/* .qrcodebox li{
  padding:0 30px;
} */
.qrcodebox li img{
  width:100%;
  height:auto;
}
.qrcodebox li p{
  text-align:center;
  padding: 8px 0;
  margin:0;
}
.footer-bottom{
  background: #263643
}
.footer-bottom p{
  text-align: center;
  line-height: 1.4rem;
  padding:8px 0;
  font-size: 1.2rem;
  margin:0;
}
</style>
