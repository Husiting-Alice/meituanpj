<template>
  <footer id="shopFooter">
    <img :src="carUrl" alt="" id="shopCarImg">
    <span id="goodsCount" v-show="false">{{goodsNUm}}</span>


    <!-- <button type="button" @click="changeFooterStyle()">111111111</button> -->
    <span id="totalPrice" v-if="ifShowPrice">
      <i id="realPrice">￥{{this.$store.state.totalprice}}</i>
      <i id="historyPrice">￥{{this.$store.state.totalhistoryprice}}</i>
    </span>
    <!-- 用spanid给了它的兄弟？？？ -->
    <p id="freeDelivery">免配送费</p>

    <span id="minFee" v-if="ifShowMinFee">￥0起送</span>

    <span id="goToPay" v-if="ifShowGoToPay">
      <router-link to="/submitorder">去结算</router-link>
    </span>
  </footer>

</template>
<script>
  export default{
    data(){
      return{
        carUrl:'./src/assets/car.png',
        goodsNUm:1,
        ifShowPrice:false,
        ifShowMinFee:true,
        ifShowGoToPay:false,
        totalprice:0,
        totalhistoryprice:0

      }
    },
    // mounted:function(){
    //   this.changeFooterStyle();
    // },
    methods:{
      changeFooterStyle(){
        $('#freeDelivery').css("bottom","0.04rem");
        // freeDelivery.style.bottom = "0.04rem";
        this.carUrl = './src/assets/caractive.png';
        this.ifShowPrice = true;
        this.ifShowMinFee = false;
        this.ifShowGoToPay = true;


      }
    }
  }
</script>

<style scoped>
  #shopFooter{
    width:100%;
    height:1rem;
    background: #3b3b3c;
    color:#999;
    position:fixed;
    left:0;
    bottom:0;
  }
  #shopCarImg{
    width:1rem;
    height:1rem;
    position:absolute;
    left:0.2rem;
    top:-0.2rem;
  }
  #goodsCount{
    width:0.3rem;
    height:0.3rem;
    text-align:center;
    background:#FB4E44;
    display:inline-block;
    color:#fff;
    border-radius:50%;
    position:absolute;
    left:0.96rem;
    top:-0.2rem;
    font-size:0.2rem;

  }
  #freeDelivery{
    font-size:14px;
    position:absolute;
    display:inline-block;
    left:1.4rem;
    bottom:0.3rem;
  }
  #minFee{
    display:inline-block;
    font-size:16px;
    right:0.3rem;
    bottom:0.3rem;
    position:absolute;
  }
  #totalPrice{
    display:inline-block;
    position:absolute;
    left:1.3rem;
    top:2px;

  }
  #realPrice{
    font-size:24px;
    color:#fff;
    vertical-align:middle;

  }
  #historyPrice{
    text-decoration:line-through;
    font-size:12px;
  }
  #goToPay{
    background: #f8c74e;
    height:1rem;
    line-height:1rem;
    display:inline-block;
    position:absolute;
    top:0;
    right:0;
    padding:0 0.6rem;
  }
  #goToPay a{
    display:inline-block;
    width:100%;
    height:100%;
    text-decoration:none;
    background: #f8c74e;
    color: #333;
    font-size: 16px;


  }

  button{
    position:absolute;
    left:150px;
    top:0px;
  }

</style>
