<template>
  <main>
    <header id="header" class="header">
    <section class="headerWrap">
      <span id="locationWrap" v-bind:class="locationWidthClass">
        <i class="iconfont">&#xe620;</i>
        <i class="iconfont" id="location">广州开发区科技...</i>
        <i class="iconfont">&#xe656;</i>
      </span>
      <span id="headerInputWrap" v-bind:class="inputWidthClass">
        <i class="iconfont searchIcon">&#xe62b;</i>
        <input type="text" id="headerInput" name="indexHeaderInut" placeholder="请输入商家或商品名称" />
      </span>
    </section>
  </header>
  </main>



</template>

 <script>
   export default{
    data(){
      return{
        locationWidthClass:'wbefore1',
        inputWidthClass:'wbefore2'

      }
    },
    mounted:function(){
      window.addEventListener('scroll',this.indexhandleScroll,true);
    },
    methods:{
      indexhandleScroll(){
        // vue不能直接操作dom！！！
        // var oInputWidth = document.getElementById('headerInputWrap');
        // var oLocationWidth = document.getElementById('locationWrap');
        // oInputWidth.style.width = 100%;
        // oLocationWidth.style.width = 0;
        // console.log($('.contentTitleSpan').offset().top+'~~~~~~~')
       if(($(document).scrollTop()+50 >= 233)){
         this.locationWidthClass = 'wafter1';
         this.inputWidthClass = 'wafter2';
         $('#menuFilterWrap').css({
          'position':'fixed',
          'top':'50px',
          'left':0
         })

       }else{
         this.locationWidthClass = 'wbefore1';
         this.inputWidthClass = 'wbefore2';
         $('#menuFilterWrap').css({
          'position':'static'
         })
       }

        let scTop = document.body.scrollTop+document.documentElement.scrollTop;
        if(scTop >= 300){
          this.locationWidthClass = 'wafter1';
          this.inputWidthClass = 'wafter2';

        }else{
          this.locationWidthClass = 'wbefore1';
          this.inputWidthClass = 'wbefore2';
        }

      }
    }


  }
 </script>

 <style scoped>
  #header{
    background:#1C1B20;
    width:100%;
    display:flex;
    flex-wrap:nowrap;
    position:fixed;
    top:0;
    max-width:750px;
    margin:0 auto;
    height:1rem;
    overflow:hidden;
    z-index:5;

  }
  .headerWrap{
    width:calc(100% - 0.4rem);
    height:50px;
    line-height:50px;
    margin:0 auto;
    display:flex;
    flex-wrap:nowrap;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;

  }
  #locationWrap{
    color:#fff;
    font-size:0;
    display:inline-block;
    overflow:hidden;
    height:100%;



  }
  #locationWrap i{
    font-size:0.32rem;
  }
  #location{
    font-size:0.32rem;
  }

  #headerInputWrap{

    display:inline-block;
    background:rgb(235, 235, 228);
    border-radius:1rem;
    position:relative;
    height:30px;
    line-height:30px;
    display:flex;
    flex-direction:row;
    overflow:hidden;


  }
  .searchIcon{
    display:inline-block;
    margin-left:0.2rem;
    width:0.3rem;
    height:0.34rem;


  }
  #headerInput{
    border:none;
    border-radius:1rem;
    width:calc(100% - 0.6rem);
    height:28px;
    line-height:28px;
    margin-top:1px;
    margin-left:0.1rem;
    outline:none;
    padding-left:0.04rem;
    background:rgb(235, 235, 228);
    font-size:14px;

  }

  .wbefore1{
    width:45%;
    transition:0.2s;

  }
  .wbefore2{
    width:55%;
    transition:0.2s;
  }

  .wafter1{
    width:0;
    transition:0.2s;


  }

  .wafter2{
    width:100%;
    transition:0.2s;

  }
  .isfixed{
    position:fixed;
    top:50px;
    left:0;
  }

 </style>
