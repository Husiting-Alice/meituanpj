<template>
  <main id="addrMain">
    <header class="mineHeader">
      <section class="av">
        <span id="avWrap">
          <img src="../../assets/img/mineav.png" />
        </span>

        <p id="nikeName">
          Pta663062710
        </p>

      </section>

    </header>

    <ul id="mineUl">
      <li class="mineLi">
        <span>
          <i class="iconfont icons">&#xe619;</i>
          <i>美团红包</i>
        </span>
        <i class="iconfont ic2">&#xe656;</i>
      </li>
      <li class="mineLi">
        <span>
          <i class="iconfont icons">&#xe620;</i>
          <i>收货地址</i>
        </span>
        <i class="iconfont ic2">&#xe656;</i>
      </li>
      <li class="mineLi">
        <span>
          <i class="iconfont icons">&#xe609;</i>
          <i>常见问题</i>
        </span>
        <i class="iconfont ic2">&#xe656;</i>
      </li>
      <li class="mineLi">
        <span>
          <i class="iconfont icons">&#xe63a;</i>
          <i>美团协议与说明</i>
        </span>
        <i class="iconfont ic2">&#xe656;</i>
      </li>
      <li class="mineLi">
        <span>
          <i class="iconfont icons">&#xe617;</i>
          <i>退出登录</i>
        </span>
        <i class="iconfont ic2">&#xe656;</i>
      </li>
    </ul>

    <p id="phonenumber">客服电话：10109777</p>
    <p id="serveTime">服务时间：9:00-23:00</p>



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
  #addrMain{
    width:100%;
    height:100vh;
    background: rgb(240, 240, 240);

  }
  .av{
    width: 100%;
    padding: 10% 0 5%;
    text-align:center;
    background:url('../../assets/img/minebg.png');
  }

  #avWrap{
    display:inline-block;
    width:20%;
    height:20%;
    margin:0 auto;
    border:4px solid #ffe699;
    border-radius:50%;

  }
  #nikeName{
    color:#333;
    font-size:16px;
    margin-top:8px;
  }
  #mineUl{
    background:#fff;

  }
  .mineLi{
    width:100%;
    padding:10px 0;
    padding-left:3%;
    border-bottom: 1px solid #e3e3e3;
    color:#333;
    font-size:14px;
    display:flex;
    justify-content:space-between;
    padding-right:22px;
    box-sizing:border-box;
  }
  .icons{
    color:#ccc;
    margin-right:6px;
  }
  .ic2{
    color:#888;
    font-size:16px;
  }
  #phonenumber,
  #serveTime{
    width:100%;
    text-align:center;
  }
  #phonenumber{
    background:#fff;
    color:#FFB000;
    font-size:14px;
    padding:10px 0;
    margin-top:20px;

  }
  #serveTime{
    color:#999;
    font-size:12px;
    padding:10px 0;

  }

</style>
