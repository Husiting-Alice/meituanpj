<template>
  <main id="orderMain">
    <ul id="orderUl">
       <li class="orderLi">
        <p class="BnameWrap">
          <img src="../../assets/img/entrancefoods1.jpg" class="oImg" />
          <span class="oName">垄上阁美食（请备注短号）</span>
          <i class="iconfont icns">&#xe656;</i>
        </p>

        <p class="foodsWrap">
          <span class="foodsName">
            兰豆炒腊肠饭
          </span>
          <i class="counts">
            X1
          </i>
        </p>

        <p class="timeWrap">
          <span class="time">
            2019-04-26 11:50
          </span>

          <i class="rpay">实付￥12.0</i>

        </p>

        <div class="finishWrap">
          <span class="finish">订单已完成</span>
          <button class="oneMore">再来一单</button>
          <button class="del">删除</button>

        </div>

      </li>

      <li class="orderLi">
        <p class="BnameWrap">
          <img src="../../assets/img/orderf2.jpg" class="oImg" />
          <span class="oName">擎督食府</span>
          <i class="iconfont icns">&#xe656;</i>
        </p>

        <p class="foodsWrap">
          <span class="foodsName">
            重庆酸辣粉
          </span>
          <i class="counts">
            X1
          </i>
        </p>

        <p class="timeWrap">
          <span class="time">
            2019-04-20 11:50
          </span>

          <i class="rpay">实付￥8.0</i>

        </p>

        <div class="finishWrap">
          <span class="finish">订单已完成</span>
          <button class="oneMore">再来一单</button>
          <button class="del">删除</button>

        </div>

      </li>
    </ul>

    <v-footer></v-footer>


  </main>

</template>

<script>
  import footer from '../index/indexNav.vue'
  export default{
    data(){
      return{

      }
    },
    components:{
      "v-footer":footer
    }
  }
</script>

<style scoped>
  #orderMain{
    width:100%;
    height:100vh;
    background: #f0f0f0;
  }
  #orderUl{
    width:100%;

  }
  .orderLi{
    width:100%;
    background:#fff;
    margin-bottom:10px;
    padding:0 10px 10px 15px;
    box-sizing:border-box;
  }
  .BnameWrap{
    padding:10px 0;
    border-bottom:1px solid #eee;
  }
  .oImg{
    width:35px;
    height:35px;
    border-radius:50%;
    margin-right:10px;
  }
  .oName{
    color:#323232;
    font-size:16px;
    vertical-align:middle;
  }
  .icns{
    color:#666;
    float:right;
    font-weight:bold;
    font-size:20px;
    margin-top:7px;

  }
  .foodsWrap{
    padding-top:10px;
    color:#000;
    font-size:14px;
  }

  .timeWrap{
    padding:10px 0;
    color:#999;
    border-bottom:1px solid #eee;
    font-size:12px;
    height:29px;
    line-height:29px;
  }

  .del{
    display: inline-block;
    float: right;
    color: #333;
    font-size:14px;
    border: solid 1px #ddd;
    text-align:center;
    padding:4px 10px;
    border-radius:3px;
    background:#fff;
    outline:none;


  }
  .oneMore{
    display: inline-block;
    float: right;
    color: #333;
    font-size:14px;
    border: solid 1px #FFD161;
    padding: 4px 10px;
    background-color: #FFD161;
    border-radius:3px;
    margin-right:5px;
    margin-bottom:5px;
    margin-left:15px;
    outline:none;

  }
  .finishWrap{
    padding:10px 0;
  }
  .finish{
    font-size:14px;
    color:#999;
  }



</style>
