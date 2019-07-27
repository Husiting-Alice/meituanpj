<template>
  <main id="indexWrap">

    <!-- 头部 -->
    <v-header></v-header>
    <!-- 图标 -->
    <v-iconlist></v-iconlist>
    <!-- 中间菜单 -->
    <v-content></v-content>
    <!-- 底部固定导航 -->
    <v-nav></v-nav>

  </main>
</template>

<script>
  // 当前路径要加./才行，不然报错找不到
  import iHeader from './indexheader.vue'
  import iList from './indexIconlist.vue'
  import iContent from './indexContent.vue'
  import iNav from './indexNav.vue'

  export default{
    data(){
      return{

      }
    },
    components:{
      'v-header':iHeader,
      'v-iconlist':iList,
      'v-content':iContent,
      'v-nav':iNav
    }
  }
</script>

<style scoped>
  #indexWrap{
    width:100%;
    background-color:#fff;
    overflow:display;
  }


</style>
