<template>
  <div>
    <Header menu-title="首页"></Header>
    <section>
      <carousel :indicators="indicators" :controls="controls" :interval="interval" ref="carousel">
        <slide v-for="(slide, index) in slides" :key="index">
          <div style="width: 100%;height: 400px;">
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
    <Footer></Footer>
  </div>
</template>

<script>
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
      interval: 5000,
      indicators: true,
      controls: false,
      slides: [
        {
          title: "滑动1",
          src: "../../../static/img/index_banner.jpg"
        },
        {
          title: "滑动2",
          src: "../../../static/img/index_banner.jpg"
        },
        {
          title: "滑动3",
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
</style>
