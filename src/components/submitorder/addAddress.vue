<template>
  <main id="addrMain">
    <header id="header" class="addrHeader">
      <i class="iconfont">&#xe679;</i>
      <span id="headerText">地址列表</span>
    </header>

    <p id="warn">
      <i class="iconfont">&#xe620;</i>
      <span>超配送范围</span>
    </p>

    <ul id="addrUl">
      <li class="addrLi">
        <p class="addr">
          黄浦区开源大道科技企业加速器E1-1334
        </p>
        <p class="contact">
          钟丽 15112343359
        </p>
      </li>
      <li class="addrLi">
        <p class="addr">
          黄浦区开源大道科技企业加速器E2-1330
        </p>
        <p class="contact">
          钟丽 15112343359
        </p>
      </li>
    </ul>

    <footer>
      <router-link to="/addNewAddr" id="lnk">
        <span>
          <img src="../../assets/img/add2.png" />
          <i>新增收货地址</i>
        </span>
      </router-link>
    </footer>
  </main>

</template>

<script>
  export default{
    data(){
      return{

      }
    }
  }
</script>

<style scoped>
  #lnk{
    text-decoration:none;

  }
  .addrHeader{
    background-color:#fff;
    height:1rem;
    line-height:1rem;
    text-align:center;
    position:relative;
    border-bottom:2px solid #e2e2e2;


  }
  .addrHeader i{
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

  footer{
    width:100%;
    height:0.9rem;
    line-height:0.9rem;
    border-top:1px solid #e2e2e2;
    position:fixed;
    bottom:0;
    left:0;
    text-align:center;
  }
  footer span img{
    width:16px;
    height:16px;
    vertical-align:middle;
  }
  footer span i{
    font-size:16px;
    color:#000;

  }
  #warn{
    font-size:0px;
    margin-left:40px;
    margin-top:25px;
  }
  #warn i,
  #warn span{
    font-size:14px;
    color:#666;

  }

  #addrUl{
    margin-left:54px;
  }
  .addrLi{
    width:100%;
    margin:15px 0;
    padding-bottom:10px;
    border-bottom:1px solid #eee;

  }
  .addr{
    font-size:16px;
    color:#666;
  }
  .contact{
    color：:#666;
    font-size:14px;
    margin-top:6px;
  }


</style>
