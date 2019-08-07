<template>
  <main id="submitOrderMain">

    <header id="header" class="soHeader">
      <i class="iconfont" id="orderReturnIcon" @click="toShop">&#xe679;</i>
      <span id="headerText">提交订单</span>
    </header>

    <div id="sec1">
      <p id="addrWrp">
        <img src="../../assets/img/add2.png" class="icn" />
        <span>
          <router-link to="./addAddress">
            选择收货地址
          </router-link>
        </span>
        <i class="iconfont moreIcon">&#xe656;</i>
      </p>
      <p id="sendWrap">
        <img src="../../assets/img/clock.png" class="icn" />
        <span>
          立即送出
          <i id="aboutTime">(大约18:12送达)</i>
        </span>
        <i class="iconfont moreIcon">&#xe656;</i>
      </p>
    </div>

    <div id="sec2">
      <p id="shopWrap">
        <img src="../../assets/img/avt.jpg" id="avtr" />
        <span id="flTitle">鲜花坊(浪漫嫁日花店)</span>

        <img src="../../assets/img/self.png" id="self" />

      </p>
      <section id="goodWrap">
        <img src="../../assets/img/flowerentrance/f01.jpg" id="flower" />
        <div id="detailWrap">
          <p id="goodsNameWrap">
            <span id="goodsName">【毕业季鲜花】韩式混搭玫瑰康乃馨花束9053款</span>
            <i>￥236</i>
          </p>
          <p id="countsWrap">
            <span>X2</span>
            <i>￥308</i>
          </p>
        </div>
      </section>

      <p id="discounts">
        <img src="../../assets/img/index/jian.png" class="icn1"  />
        <span>满返商家代金券优惠</span>
        <i>返10元商家券</i>
      </p>

      <p id="feeWrap">
        <span id="feeTotal">共计￥396</span>
        <i id="feeSub">已优惠￥160</i>
        <span id="feeReal">小计<i>￥236</i></span>
      </p>
    </div>

    <div id="sec3">
      <p id="payWrap">
        <span>支付方式</span>
        <i>在线支付</i>
      </p>
      <p id="notesWrap">
        <span>备注</span>
        <span id="hobbyWrap">
          <i>口味、偏好等要求</i>
          <span class="iconfont">&#xe656;</span>
        </span>
      </p>
      <p id="ticketsWrap">
        <span>发票</span>
        <i id="noTicket">暂不支持开发票</i>
      </p>
    </div>



    <p id="help">
      <i class="iconfont">&#xe609;</i>
      <span>不清楚优惠规则？</span>
    </p>

    <footer>
      <span id="fDiscount">已优惠￥160</span>
      <span id="fTotal">
        <i id="fTotalText">合计</i>
        <i id="fTotalNum">￥236</i>
      </span>
      <span id="sm">提交订单</span>
    </footer>

  </main>

</template>



<script type="text/javascript">
  // 引入重置样式
  // import '../../assets/css/base.css'
  export default{
    data(){
      return{
        logoSrc:'./src/assets/logo.png',
        logoDesc:'美团外卖'
      }
    },
    methods:{
      toShop(){
        this.$router.replace({ path: '/shop' })

      }
    }
  }


</script>


<style scoped>
  #submitOrderMain{
    background-color: #f4f4f4;
    width:100%;
    min-height:100vh;
  }
  .soHeader{
    background-color:#fff;
    height:1rem;
    line-height:1rem;
    text-align:center;
    position:relative;

  }
  .soHeader i{
    width:0.8rem;
    height:100%;
    display:inline-block;
    position:absolute;
    left:0;

  }

  #headerText{
    display:inline-block;
    width:100%;
    color:#333;
    font-size:14px;

  }

  #sec1{
    background-color:#fff;
    margin:10px;
  }
  .icn{
    width:0.4rem;
    height:0.4rem;
  }
  .icn1{
    width:0.3rem;
    height:0.3rem;
  }
  .moreIcon{
    float:right;
  }

  #addrWrp{
    padding:15px 10px 13px 0;
    border-bottom:1px solid #eee;
    cursor:pointer;
  }
  #addrWrp span a{
    color:#FFB000;
    font-size:16px;
    text-decoration:none;
  }
  #sendWrap{
    padding:12px 10px 12px 0px;
    box-sizing:border-box;
  }
  #sendWrap span{
    font-size: 15px;
    color: #333333;
  }

  #aboutTime{
    font-size: 14px;
    color: #348BED;
  }

  #avtr{
    width:20px;
    height:20px;
    border-radius:50%;
  }



  #flTitle{
    color:#666;
    font-size:14px;
  }
  #self{
    width:1rem;
    height:0.3rem;
    float:right;
    margin-top:16px;

  }

  footer{
    width:100%;
    height:1rem;
    position:fixed;
    bottom:0;
    background:#fff;
    line-height:1rem;

  }

  #sm{
    background-color: #f8c74e;
    font-size: 16px;
    height:100%;
    width:2.5rem;
    display:inline-block;
    text-align:center;
    line-height:1rem;
    position:absolute;
    right:0;
    font-weight:bold;
    color:#333;
  }
  #fDiscount{
    color:#333;
    font-size:14px;
    display:inline-block;
    margin-left:0.3rem;

  }

  #fTotal{
    font-size:0px;
    float:right;
    margin-right:140px;
  }
  #fTotalText{
    font-size:16px;
    color:#333;

  }
  #fTotalNum{
    color:#FB4E44;
    font-size:16px;

  }
  #shopWrap{
    line-height:1rem;
    height:1rem;
    padding-left:10px;
    padding-right:10px;
    box-sizing:border-box;
  }

  #goodWrap{
    background-color: #f4f4f4;
    display:flex;
    padding:10px;
  }
   #flower{
    width:1.1rem;
    height:1.1rem;

  }
  #detailWrap{
    width:calc(100% - 55px);
  }
  #goodsNameWrap{
    display:flex;
    padding-left:10px;
    #color:#333;
    font-size:14px;
    display:flex;
    justify-content:space-between;
    margin-bottom:3px;
    padding-right:10px;
  }
  #goodsName{
    max-width:180px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  #goodsNameWrap i{
    font-size:14px;
    color:#333;

  }
  #countsWrap{
    padding-left:10px;
    box-sizing:border-box;
    display:flex;
    justify-content:space-between;
    color:#999;
    padding-right:10px;
  }
  #countsWrap i{
    text-decoration:line-through;
  }


  #feeWrap{
    width:100%;
    padding:12px 0;
    text-align:right;
    padding-right:10px;
    box-sizing:border-box;
    position:relative;
  }
  #feeWrap::before{
    content:'';
    width:12px;
    height:12px;
    background-color: #f4f4f4;
    border-radius: 50%;
    position:absolute;
    left:-16px;
    top:-6px;
  }
   #feeWrap::after{
    content:'';
    width:12px;
    height:12px;
    background-color:#f4f4f4;
    border-radius: 50%;
    position:absolute;
    right:-6px;
    top:-6px;
  }
  #feeTotal{
    color: #999999;
    font-size:12px;
  }
  #feeSub{
    color: #999999;
    font-size:12px;
    margin-left:18px;

  }
  #feeReal{
    color:#333;
    font-size:14px;
    margin-left:18px;

  }
  #feeReal i{
    color: #FB4E44;
    font-weight:bold;
  }


  #sec1,#sec3{
    background:#fff;
    margin:10px;
    padding-left:10px;
  }
  #sec2{
    background:#fff;
    margin:10px;
  }

  #discounts{
    padding:15px 0 3px 10px;
    box-sizing:border-box;
    border-bottom:3px dotted #eee;
  }

  #payWrap,
  #notesWrap,
  #ticketsWrap{
    width:100%;
    display:flex;
    justify-content:space-between;
    padding:12px 10px 12px 0px;
    box-sizing:border-box;
    font-size:14px;
    color:#333;

  }
  #payWrap,
  #notesWrap{
    border-bottom:1px solid #eee;
  }
  #hobbyWrap,#noTicket{
    color:#999;
  }

  #help{
    width:100%;
    font-size:14px;
    text-align:right;
    padding:12px 15px 12px 5px;
    box-sizing:border-box;
  }



</style>

 // <section id="goodWrap">
 //        <img src="../../assets/img/flowerentrance/f01.jpg" id="flower" />
 //        <div id="detailWrap">
 //          <p id="goodsNameWrap">
 //            <span id="goodsName">【毕业季鲜花】韩式混搭玫瑰康乃馨花束9053款</span>
 //            <i>￥236</i>
 //          </p>
 //          <p id="countsWrap">
 //            <span>X2</span>
 //            <i>￥308</i>
 //          </p>
 //        </div>
 //      </section>
