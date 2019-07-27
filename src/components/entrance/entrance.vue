<template>
  <main id="entranceMain">

    <v-header></v-header>
    <v-banner></v-banner>
    <v-iconlist></v-iconlist>
    <v-content></v-content>
    <v-footer></v-footer>

    <!-- <router-view></router-view> -->

    <!-- 头部 -->
    <!-- <v-header :is="entrheader"></v-header> -->

    <!-- banner -->
    <!-- <v-banner :is="entrbanner"></v-banner> -->

    <!-- 中间图标 -->
    <!-- <v-iconlist :is="entrlist"></v-iconlist> -->

    <!-- 猜你喜欢 -->
    <!-- <v-content :is="entrcontent"></v-content> -->

    <!-- footer -->
    <!-- <v-footer :is="entrfooter"></v-footer> -->
  </main>

</template>

<script>
import ebanner from './entranceBanner.vue'
import eheader from './entranceheader.vue'
import elist from './entrancelist.vue'
import econtent from './entrancecontent.vue'
import efooter from './entrancefooter.vue'
    export default{
        data(){
            return{
                // entrheader:eheader,
                // entrbanner:ebanner,
                // entrlist:elist,
                // entrcontent:econtent,
                // entrfooter:efooter

            }
        },
        components:{
            // import进来的.vue就是一个组件了！！不用再
            // 占位符：{template:templateid}
            'v-header':eheader,
            'v-banner':ebanner,
            'v-iconlist':elist,
            'v-content':econtent,
            'v-footer':efooter
        }
    }


</script>

<style scoped>
  #entranceMain{
    background-color:#f0efed;
    height:100%;
  }

</style>
