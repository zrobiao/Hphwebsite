<template>
  <div id="Amap"></div>
</template>
<script>
import AMap from 'AMap'
export default {
  data () {
    return{
      longitude:106.66435,
      latiude:26.725341,

    }
  },
  methods:{
  },
  created () {
    },
  mounted (){
    let map = new AMap.Map('Amap',{
      resizeEnable:true,
      zoom:16,
      center:[this.longitude,this.latiude]
    })
    let marker = new AMap.Marker({
      map:this.map,
      position:new AMap.LngLat(this.longitude,this.latiude),
      title:'贵阳好陪护'
    })
    map.add(marker)
  }
}
</script>
<style>
#Amap{
  height: 100%;
  width:100%;
}
</style>


