<template>
    <div class="nav-wrapper">
<div class="content">
    money
  
</div>
<Nav/>
    </div>
</template>

<script lang="ts">
    export default {
        name:'Money'
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