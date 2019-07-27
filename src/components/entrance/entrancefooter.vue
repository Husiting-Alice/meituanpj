<template>
  <main id="entranceFooterMain">
    <section id="btnWrap">
      <div id="loginBtn">
        <router-link to="/login">登录</router-link>
      </div>
      <div id="registBtn">注册</div>

      <div id="cityWrap">
        <span id="cityText">城市:</span>
        <section id="city">广州</section>
      </div>
    </section>

    <ul id="footerUl">
      <li>
        <router-link to="/index">
            首页
        </router-link>
      </li>
      <li>
        <router-link to="/mine">
            我的
        </router-link>
      </li>
      <li>
        <router-link to="">
            美团下载
        </router-link>
      </li>
      <li>
        <router-link to="">
            电脑版
        </router-link>
      </li>
      <li style="border:none;">
        <router-link to="">
            帮助
        </router-link>
      </li>
    </ul>

    <ol id="footerOl">
      <li style="padding-left:0rem;"><router-link to="" style="color:#666;">友情链接：</router-link></li>
      <li style="padding-left:0rem;"><router-link to="">猫眼电影</router-link></li>
      <li><router-link to="">大众点评</router-link></li>
      <li><router-link to="">美团旅行</router-link></li>
      <li><router-link to="">榛果民宿</router-link></li>
      <li><router-link to="">大众点评下载</router-link></li>
      <li><router-link to="">美团收银官网</router-link></li>
      <li><router-link to="">美团点评餐饮学院</router-link></li>
      <li><router-link to="">快驴进货商家合作</router-link></li>
    </ol>

    <div id="copyright">
      <i id="copyrightI"></i>
      <span id="copyrightSpan">©2019 美团网 京ICP证070791号</span>
    </div>

  </main>
</template>
<script>
  export default{
    data(){
        return{
          // footer:'这是。。。footer'
        }
    }
  }
</script>

<style scoped>
  #entranceFooterMain{
    width:calc(100% - 0.4rem);
    margin:0 auto;
    padding-top:0.4rem;
  }
  #btnWrap{
    width:100%;
    margin-bottom:.4rem;
  }
  #loginBtn,#registBtn,#city{
    border: .02rem solid #06c1ae;
    padding: .1rem .3rem;
    text-align:center;
    display:inline-block;
    border-radius:0.06rem;
    cursor:pointer;

  }
  #loginBtn a{
    text-decoration:none;
    background: 0;
    color: #06c1ae;
    font-size:0.28rem;

  }
  #registBtn{
    margin-left:0.12rem;
  }
  #cityWrap{
    display:inline-block;
    float:right;
    font-size: .28rem;
    color:#333;
    vertical-align:middle;


  }
  #city{
    padding:.1rem .5rem;
  }
  #footerUl{
    width:100%;
    display:flex;
  }
  #footerUl li{
    display:inline-block;
    width:20%;
    text-align:center;
    border-right:0.02rem solid #06c1ae;
    box-sizing:border-box;
    -moz-box-sizing:border-box;
    -webkit-box-sizing:border-box;


  }
  #footerUl li a{
    text-decoration:none;
    color:#06c1ae;
    cursor:pointer;

  }

  #footerOl{
    width:cac(100% - 0.4rem);
    margin:0.3rem 0.2rem;
    text-align:center;

  }


  #footerOl li{
    display:inline-block;
    padding-left:.36rem;
    text-align:center;
    font-size: .24rem;
    margin-bottom:0.12rem;
  }

  #footerOl li a{
    color:#06c1ae;
    text-decoration:none;
  }

  #copyright{
    width:100%;
    position:relative;
    height:0.4rem;
    line-height:0.4rem;
    margin-bottom:0.3rem;
  }
  #copyrightI{
    display:inline-block;
    width:100%;
    height:0.02rem;
    background:#999;
    position:absolute;
    top:50%;
    left:0;
    z-index:1;

  }
  #copyrightSpan{
    position:absolute;
    left:50%;
    transform:translateX(-50%);
    z-index:2;
    padding:0.02rem 0.4rem;
    text-align:center;
    background-color: #f0efed;
    color:#999;
    white-space: nowrap;
  }


</style>
