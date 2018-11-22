
<template>
    <div class="box">
      <Top :title="title"/>
      <div>
        <Map :dw="dw"/>
      </div> 
      <div class="win"  id="allmap" >
        <Win :chosed="chosed"/>
      </div>        
    </div>  
</template>

<script>

let dingwei;

import Top from "../components/Top";
import Map from "../components/Map";
import Win from "../components/Win";

export default {
  name: "MapPage",
  data(){
    return{
      dw: dingwei,
      chosed: {},
      title: "分店"
    }    
  },
  components: { 
    Map,
    Win,
    Top
  },
}

</script>

<style>
.box {
  width: 100%;
}
.win{
  position: absolute;
  left: 0;
  right:0;
  bottom:0;
}
</style>