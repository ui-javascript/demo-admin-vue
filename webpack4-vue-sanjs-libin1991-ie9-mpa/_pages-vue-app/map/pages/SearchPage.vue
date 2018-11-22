
<template>
    <div class="box">
      <Top :title="title"/>
      <div>
        <Search />
      </div> 
    </div>  
</template>

<script>

import Top from "../components/Top";
import Search from "../components/Search";

export default {
  name: "SearchPage",
  data(){
    return{
      title: "搜索"
    }    
  },
  components: { 
    Search,
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