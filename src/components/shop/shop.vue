<template>
  <main id="shopWrap">

    <!-- 头部 -->
    <v-header></v-header>
    <!-- 内容 -->
    <v-shopcontent></v-shopcontent>

    <!-- 固定购物车底部 -->
    <!-- <v-footer></v-footer> -->

  </main>
</template>

<script>
  // 当前路径要加./才行，不然报错找不到
  import sHeader from './shopHeader.vue'
  import sContent from './shopContent.vue'
  // import sFooter from './shopFooter.vue'


  export default{
    data(){
      return{

      }
    },
    components:{
      'v-header':sHeader,
      'v-shopcontent':sContent
      // 'v-footer':sFooter
    }
  }
</script>

<style scoped>
#shopWrap{
  width:100%;
  background-color:#fff;
  overflow:display;
}

</style>
