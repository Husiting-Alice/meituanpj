<template>

  <main>
    <!-- 搜索栏 -->
    <v-search></v-search>
    <!-- 水平滚动条菜单栏 -->
    <v-nav></v-nav>
    <!-- 商家内容以及过滤条件导航 -->
    <v-content></v-content>


  </main>

</template>

<script>
  // 当前路径要加./才行，不然报错找不到
  import fSearch from './flowerEntranceSearch.vue'
  import fNav from './flowerEntranceNav.vue'
  import fContent from './flowerEntranceContent.vue'


  export default{
    data(){
      return{

      }
    },
    components:{
      'v-search':fSearch,
      'v-nav':fNav,
      'v-content':fContent
    }
  }
</script>
