<template>
 <main id="screenMain" v-show="this.$store.state.menushow">
   <div id="screenWrap">
    <p class="screenBlock1">

      <span>
          <img src="../../assets/img/index/moto.png" height="20" width="20" /> 美团专送
      </span>
    </p>

    <section class="screenBlock2">

      <p>商家特色(可多选)</p>
      <ul class="specialUl">
        <li class="specialLi"><router-link to="">免费配送</router-link></li>
        <li class="specialLi"><router-link to="">0元起送</router-link></li>
        <li class="specialLi"><router-link to="">新商家</router-link></li>
        <li class="specialLi"><router-link to="">品牌商家</router-link></li>
        <li class="specialLi"><router-link to="">点评高分</router-link></li>
        <li class="specialLi"><router-link to="">跨天预订</router-link></li>
        <li class="specialLi"><router-link to="">支持开发票</router-link></li>
      </ul>
    </section>

    <section class="screenBlock2">
      <p>人均价</p>
      <ul class="specialUl">
        <li class="specialLi"><router-link to="">20元以下</router-link></li>
        <li class="specialLi"><router-link to="">20-40元</router-link></li>
        <li class="specialLi"><router-link to="">40元以上</router-link></li>
      </ul>
    </section>

    <section class="screenBlock3">
      <p>优惠活动(单选)</p>
      <ul class="activityUl">
        <li class="activityLi">
          <router-link to="">
            <i class="screenPromotionImg">
              <img src="../../assets/img/index/piao.png" />
            </i>
            <span class="screenPromotionText">优惠商家</span>
          </router-link>
        </li>
        <li class="activityLi">
          <router-link to="">
            <i class="screenPromotionImg">
              <img src="../../assets/img/index/piao.png" />
            </i>
            <span class="screenPromotionText">优惠商家</span>
          </router-link>
        </li>
        <li class="activityLi">
          <router-link to="">
            <i class="screenPromotionImg">
              <img src="../../assets/img/index/piao.png" />
            </i>
            <span class="screenPromotionText">优惠商家</span>
          </router-link>
        </li>
        <li class="activityLi">
          <router-link to="">
            <i class="screenPromotionImg">
              <img src="../../assets/img/index/piao.png" />
            </i>
            <span class="screenPromotionText">优惠商家</span>
          </router-link>
        </li>
        <li class="activityLi">
          <router-link to="">
            <i class="screenPromotionImg">
              <img src="../../assets/img/index/piao.png" />
            </i>
            <span class="screenPromotionText">优惠商家</span>
          </router-link>
        </li>
        <li class="activityLi">
          <router-link to="">
            <i class="screenPromotionImg">
              <img src="../../assets/img/index/piao.png" />
            </i>
            <span class="screenPromotionText">优惠商家</span>
          </router-link>
        </li>
        <li class="activityLi">
          <router-link to="">
            <i class="screenPromotionImg">
              <img src="../../assets/img/index/piao.png" />
            </i>
            <span class="screenPromotionText">优惠商家</span>
          </router-link>
        </li>
        <li class="activityLi">
          <router-link to="">
            <i class="screenPromotionImg">
              <img src="../../assets/img/index/piao.png" />
            </i>
            <span class="screenPromotionText">优惠商家</span>
          </router-link>
        </li>
        <li class="activityLi">
          <router-link to="">
            <i class="screenPromotionImg">
              <img src="../../assets/img/index/piao.png" />
            </i>
            <span class="screenPromotionText">优惠商家</span>
          </router-link>
        </li>
        <li class="activityLi">
          <router-link to="">
            <i class="screenPromotionImg">
              <img src="../../assets/img/index/piao.png" />
            </i>
            <span class="screenPromotionText">优惠商家</span>
          </router-link>
        </li>

      </ul>
    </section>

  </div>
  <p id="screenBtmWrap">
    <span id="clearScreen">清除筛选</span>
    <span id="finish" @click="hideScreen()">完成</span>
  </p>

 </main>

</template>

<script>
  export default{
    data(){
      return{
        // show:true

      }
    },
    methods:{
      hideScreen(){

        this.$store.commit('filtertoggleShow');


      }
    }
  }
</script>

<style scoped>

#screenMain{
  position:relative;
  height:400px;


}
#screenWrap{
  width:100%;
  background-color:#fff;
  height:100%;
  position:relative;
  overflow:auto;

}
.screenBlock1{
  width:100%;
  padding:0.3rem 0;
  border-bottom:1px solid #eee;

}
.screenBlock1 span{
  display:inline-block;
  font-size:0.26rem;
  color:#333;
  border:1px solid #ccc;
  padding:0.1rem 0.24rem;
  margin-left:0.3rem;
  border-radius:0.02rem;
  text-align:center;

}
.screenBlock1 span img{
  vertical-align:bottom;
}
.screenBlock2,.screenBlock3{
  padding-left:0.3rem;
  box-sizing:border-box;
  border-bottom:1px solid #eee;
}

.screenBlock2 p,.screenBlock3 p{
  color:#999;
  font-size:0.26rem;
  margin:0.2rem 0;
}
.specialUl{
  width:100%;
  display:flex;
  flex-wrap:wrap;
}
.specialUl li{
  width:33.33%;
  margin-bottom:0.4rem;

}
.specialUl li a{
  color:#333;
  display:inline-block;
  text-align:center;
  font-size:0.26rem;
  height:32px;
  line-height:32px;
  width:100px;
  border-radius:0.02rem;
  border:1px solid #ccc;

}

.screenPromotionImg{
  display:inline-block;
  width:0.3rem;
  height:0.3rem;
}
.screenPromotionImg img{
  width:100%;
  height:100%;
}
.screenPromotionText{
  color:#333;
  font-size:0.26rem;
}
.activityUl{
  width:100%;
  display:flex;
  flex-wrap:wrap;
}
.activityUl li{
  width:50%;
  height:30px;
  margin-bottom:0.1rem;
}
.activityLi a{
  text-decoration:none;
}
.specialLi a{
  text-decoration:none;
}

#screenBtmWrap{
  width:100%;
  font-size:0;
  position:absolute;
  bottom:-1px;
}

#clearScreen,#finish{
  display:inline-block;
  width:50%;
  height:1rem;
  line-height:1rem;
  text-align:center;
  font-size:0.32rem;

}
#clearScreen{
  background-color:#fff;
}

#finish{
  background-color: #FFD161;

}





</style>
