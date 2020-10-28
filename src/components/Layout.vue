<template>
    <div class="nav-wrapper">

<div class="content">
  <slot>
  </slot>    
   <!--此标签会把写在  <Layout>
     <span>Statistics</span>
 </Layout>里面的内容自动传进来-->
</div>
<Nav/>
    </div>
</template>

<script lang="ts">
   
    export default {
         name:'Layout',
      
    }
</script>

<style lang="scss" scoped>
.nav-wrapper{
    border:black solid 1px ;
    display: flex;
   flex-direction:column;
   height: 100vh;   //撑起整个页面
}
.content{
    overflow:auto;   //出现滚动条
    flex-grow: 1;   //占据div的全部部分
}
</style>