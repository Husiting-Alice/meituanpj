<template>
  <ul id="indexNavUl">
    <li id="indexLi">
      <router-link to="./index">
        <i class="ai1"></i>
        <p>首页</p>
      </router-link>
    </li>
    <li id="orderLi">
      <router-link to="./order">
        <i class="ai2"></i>
        <p>订单</p>
      </router-link>
    </li>
    <li id="mineLi">
      <router-link to="./mine">
        <i class="ai3"></i>
        <p>我的</p>
      </router-link>
    </li>
  </ul>

</template>

 <script>
   export default{
    data(){
      return{


      }
    },
    methods:{
      changeImg(e){
        console.log(e.currentTarget.id);
        // if(e.currentTarget.id == "indexLi"){
        //   this.indexImgUrl = "./src/assets/img/index/indexhome2.png"
        //   this.orderUrl = "./src/assets/img/index/indexorder1.png"
        //   this.mineUrl = "./src/assets/img/index/indexmine1.png"

        // }

        // if(e.currentTarget.id == "orderLi"){
        //   this.orderUrl = "./src/assets/img/index/indexorder2.png"
        //   this.indexImgUrl = "./src/assets/img/index/indexhome1.png"
        //   this.mineUrl = "./src/assets/img/index/indexmine1.png"
        // }


        // if(e.currentTarget.id == "mineLi"){
        //   this.mineUrl = "./src/assets/img/index/indexmine2.png"
        //   this.indexImgUrl = "./src/assets/img/index/indexhome1.png"
        //   this.orderUrl = "./src/assets/img/index/indexorder1.png"

        // }

      }
    }
  }
 </script>

 <style>
  #indexNavUl{
    max-width:750px;
    margin:0 auto;
    position:fixed;
    left:0;
    bottom:0;
    right:0;
    z-index:5;
    display:flex;
    flex-direction:row;
    height:1rem;
    justify-content:space-between;
    background: #fafafa;
  }
  #indexNavUl li{
    display:flex;
    flex-direction:column;
    width:33.3%;
    text-align:center;

  }
  #indexNavUl li a{
    text-decoration:none;
    color: #999;
    margin-bottom: 3px;

  }
  #indexNavUl li a i{
    display:inline-block;
    width:0.6rem;
    height:0.6rem;
    font-size:0.4rem;
  }

  .ai1{
    background:url("../../assets/img/index/indexhome1.png") no-repeat;
    background-size:100% 100%;
  }
  .ai2{
    background:url("../../assets/img/index/indexorder1.png") no-repeat;
    background-size:100% 100%;
  }
  .ai3{
    background:url("../../assets/img/index/indexmine1.png") no-repeat;
    background-size:100% 100%;
  }
  #indexNavUl li a i img{
    width:100%;
    height:100%;
  }
  #indexNavUl li a p{
    font-size:0.24rem;
  }

  .router-link-exact-active .ai1{
    background:url("../../assets/img/index/indexhome2.png") no-repeat !important;
    background-size:100% 100% !important;
  }

  .router-link-active .ai2{
    background:url("../../assets/img/index/indexorder2.png") no-repeat !important;
    background-size:100% 100% !important;
  }

  .router-link-active .ai3{
    background:url("../../assets/img/index/indexmine2.png") no-repeat !important;
    background-size:100% 100% !important;
  }


 </style>

