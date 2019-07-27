<template>
  <main id="loginMain">

    <section id="logoWrap">
      <div id="logoImgBox">
        <img :src="logoSrc" id="logoImg" />
      </div>
      <div id="logoName">{{logoDesc}}</div>
    </section>

    <section id="loginFormWrap">
      <div class="loginFormBox" id="form1">
        <input type="text" name="phoneNumber" placeholder="请输入手机号" autofocus="true" @blur="testNumber()" id="myNumber" />
        <span id="sends">发送验证码</span>
      </div>

      <div class="loginFormBox" id="form2">
        <input type="text" name="vertificationCode" placeholder="请输入短信验证码" />
      </div>

      <button type="submit" id="loginButton" @click="login()">
          登录
      </button>
    </section>

    <p id="readAnnounce">查看美团协议与说明</p>

    <div class="toast" v-show="toastShow">
      {{toastText}}
    </div>

  </main>

</template>



<script type="text/javascript">

  // 引入重置样式
  // import '../../assets/css/base.css'
  export default{
    data(){
      return{
        toastShow: false,
        toastText: '',
        logoSrc:'./src/assets/logo.png',
        logoDesc:'美团外卖'
      }
    },
    methods:{
      toast (str) {
        let v = this
        v.toastText = str
        v.toastShow = true
        setTimeout(function(){
          v.toastShow = false
        }, 1500)
      },
      testNumber(){
        // console.log($('#myNumber').val() === '')
        if($('#myNumber').val() === ''){
          this.toast('电话号码不能为空')
        }
        else if (!(/^1[34578]\d{9}$/.test($('#myNumber').val()))) {
          this.toast('电话号码格式错误')
      }
    },
    login(){
      if($('#myNumber').val() != '' && (/^1[34578]\d{9}$/.test($('#myNumber').val()))){
        this.$router.push({path:'/entrance'})
      }
    }
  }
}


</script>


<style scoped>
  .toast {
    position: fixed;
    z-index: 2000;
    left: 50%;
    top:45%;
    transition:all .5s;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    -o-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    text-align: center;
    border-radius: 5px;
    color:#FFF;
    background: rgba(17, 17, 17, 0.7);
    height: 45px;
    line-height: 45px;
    padding: 0 15px;
    max-width: 150px;
  }


  #loginMain{
    width:calc(100% - 40px);
    margin:0 auto;
    background-color:#fff;
  }
  #logoWrap{
    width: 100%;
    background-color:#fff;
    display:flex;
    flex-direction:column;
    margin-top: 1.18rem;
    margin-bottom: 1rem;

  }
  #logoImgBox{
    margin:0 auto;
    width:1.32rem;
    height:1.32rem;

  }
  #logoImg{
    width:100%;
    height:100%;
    margin: 0 auto;

  }
  #logoName{
    font-size: .37rem;
    text-align:center;
  }


  #loginFormWrap{
    width:100%;
    font-size:16px;
    padding:1.2em 0px;
    display:flex;
    flex-direction:column;
  }
  #form1{
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    justify-content:space-between;
  }
  #form2{
    margin-top:1em;
  }
  .loginFormBox{
      justify-content: space-around;
      border-bottom: 1px solid #e5e5e5;
      padding-bottom: .6em;
      height: 1.4em;
  }
  .loginFormBox input{
    border:none;
    outline:none;
    font-size: 1em;
    padding: 1px 0px;
    height:100%;

  }
  #sends{
    display:inline-block;
    font-size:.8em;
    color: #999;
    margin-left: .5em;
    padding:0.1em 0.6em;
    border-radius:2px;
    text-align:center;
    cursor:pointer;
    background-color:#dcdcdc;
    height:100%;

  }

  #loginButton{
      text-align: center;
      background: #e5e5e5;
      height: 2.6em;
      line-height: 2.6em;
      border-radius: .3em;
      width: 100%;
      display: block;
      border: none;
      cursor: pointer;
      margin-top:2em;
      cursor:pointer;
      font-size: 1em;
      color: #999;
  }
  #readAnnounce{
      display:inline-block;
      font-size: .27rem;
      color: #999;
      text-decoration:underline;
      text-align:center;
      position: fixed;
      bottom: 1.8rem;
      left:50%;
      transform:translateX(-50%);
  }



</style>
