<template>
  <main id="newMain">
    <p>
      <span>联系人：</span>
      <input type="text" name="contact" autofocus />
    </p>
    <p id="sexWrap">
      <span id="mWrap"><i id="circle1"></i><i>先生</i></span>
      <span id="wmWrap"><i id="circle2"></i><i>女士</i></span>
    </p>
    <p>
      <span>手机号：</span>
      <input type="text" name="phone" />
    </p>
    <p>
      <span>收货地址：</span>
      <input type="text" name="addr" />
    </p>
    <p>
      <span>门牌号：</span>
      <input type="text" name="door" />
    </p>
    <span id="saveBtn" @click="toIndex">保存</span>
    <span id="returnBtn">返回</span>
  </main>


</template>

<script>
  export default{
    data(){
      return{

      }
    },
    methods:{
      toIndex(){
        this.$router.replace({path:'/index'})
      }
    }
  }
</script>

<style scoped>
  p{
    width:100%;
    margin-left: 15px;
    height: 52.5px;
    line-height: 52.5px;
    border-bottom: .5px solid #e4e4e4;
    font-size: 16px;
  }
  input{
    border:none;
    width:70%;
    height:30px;
    outline:none;
  }

  #saveBtn{
    background:#FFD266;
    display:block;
    width:90%;
    margin-left:5%;
    opacity:0.5;
    text-align:center;
    height: 40px;
    line-height: 40px;
    border-radius:4px;
    margin-top:25px;
    cursor:pointer;
  }
  #returnBtn{
    border:1px solid #FFD266;
    background:#fff;
    display:block;
    width:90%;
    margin-left:5%;
    text-align:center;
    height: 40px;
    line-height: 40px;
    border-radius:4px;
    margin-top:15px;
    cursor:pointer;
  }
  #sexWrap{
    text-align:center;

  }

  #mWrap,
  #wmWrap{

    vertical-align: middle;
    align-items:center;

  }
  #mWrap{
    margin-right:15px;
  }
  #circle1,
  #circle2{
    width: 17px;
    height: 17px;
    margin-right:10px;
    display:inline-block;
  }
  #mWrap{
    background:url("../../assets/img/circle.png") no-repeat;
    background-size: 17px 17px;
  }
  #wmWrap{
    background:url("../../assets/img/circleActive.png") no-repeat;
    background-size: 17px 17px;
  }



</style>
// <span id="mWrap"><i id="circle1"></i>先生</span>
// <span id="wmWrap"><i id="circle2"></i>女士</span>
