<template>
  <main id="shopContentMain">
    <ul id="shopContentUl">
      <li class="shopContentLi" id="reserveLi" @click="ifshowFooter($event)">
        <span class="textActive" @click="shopLiActive($event); msgs='dc'">
          点菜
        </span>
        <p class="iActive"></p>
      </li>

      <li class="shopContentLi" id="commentLi" @click="ifshowFooter($event)">
        <span @click="shopLiActive($event); msgs='pj'">
          评价
        </span>
        <p></p>
      </li>

      <li class="shopContentLi" id="businessesLi" @click="ifshowFooter($event)">
        <span @click="shopLiActive($event); msgs='sj'">
          商家
        </span>
        <p></p>
      </li>
    </ul>

    <component :is="msgs"></component>

  </main>
</template>
<script>
import reserve from './shopContentDianCai.vue'
import judge from './shopContentPingJia.vue'
import businesses from './shopContentShangJia.vue'
  export default{
    data(){
      return{
        msgs:'dc'

      }
    },
    mounted(){
       window.addEventListener('scroll',this.shophandleScroll,true);
    },
    methods:{
      shopLiActive(e){
        // console.log($(e.currentTarget));
        $('.shopContentLi span').removeClass("textActive");
        $(e.currentTarget).addClass("textActive");
        $('.shopContentLi p').removeClass("iActive");
        $(e.currentTarget).siblings('p').addClass("iActive");
      },
      ifshowFooter(event){

        console.log(event.currentTarget.id);
        // console.log($(event.currentTarget.id))
        if(event.currentTarget.id == "reserveLi"){
          $('#shopFooter').css({
            "display":"block"
          })
        }else{
          $('#shopFooter').css({
            "display":"none"
          })
        }

      },
      shophandleScroll(){
        if($(window).scrollTop() >= 130){
          $('#shopContentUl').css({
            "position":"fixed",
            "top":"0",
            "left":"0"
          })
        }else{
          $('#shopContentUl').css({
            "position":"static"
          })
        }
      }

    },
    components:{
      'dc':reserve,
      'pj':judge,
      'sj':businesses
    }
  }
</script>

<style scoped>
  #shopContentUl{
    width:100%;
    height:40px;
    background:#fff;
    display:flex;
    border-bottom:1px solid #eee;
    z-index:100;

  }
  #shopContentUl li{
    width:33.3%;
    height:40px;
    line-height:40px;
    text-align:center;
    display:flex;
    flex-direction:column;
    position:relative;


  }
  #shopContentUl li span{
    display:inline-block;
    font-size:16px;
    text-decoration:none;
    color:#666;
    font-weight:normal;
  }
  .textActive{
    color:#333 !important;
    font-weight:bold !important;

  }
  .iActive{
    background:#f8c74e !important;
  }
  #shopContentUl li p{
    display:inline-block;
    width:20px;
    height:2px;
    margin:0 auto;
    position:absolute;
    background:#fff;
    bottom:0;
    left:50%;
    transform:translate(-50%);


  }


</style>
