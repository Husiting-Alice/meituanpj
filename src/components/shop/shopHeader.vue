<template>
  <header id="header" class="shopHeader">
    <p id="returnIconWrap">
      <i class="iconfont" id="headerReturnIcon" @click="toEntrance()">&#xe679;</i>

    </p>

    <div id="headerMsg">
      <img src="../../assets/img/flowerentrance/f07.jpg" alt="" id="headerMsgLeftImg" />

      <section id="headerMsgRightBox">
        <p id="timeDistanceWrap">
          <span id="time">120分钟</span>
          <i id="line"></i>
          <span id="distance">2.9km</span>
        </p>

        <p id="announcement">公告：全国2000多加实体分店，提供最快的鲜公告：全国2000多加实体分店，提供最快的鲜..公告：全国2000多加实体分店，提供最快的鲜..公告：全国2000多加实体分店，提供最快的鲜..</p>

        <div id="vCarouselWrap">
          <section id="vCarousel">
            <!-- v-for绑定p -->

            <div class="carouselItem">
              <img src="../../assets/img/index/zhe.png" />
              <span id="dog">折扣商品2.53折起折扣商品2.53折起折扣商品2.53折起折扣商品2.53折起折扣商品2.53折起折扣商品2.53折起折扣商品2.53折起折扣商品2.53折起折扣商品2.53折起</span>
            </div>
            <div class="carouselItem">
              <img src="../../assets/img/index/jian.png" />
              <span>满100件5，满120减10，满200减30</span>
            </div>
            <div class="carouselItem">
              <img src="../../assets/img/index/piao.png" />
              <span>本店支持开发票</span>
            </div>
            <div class="carouselItem">
              <img src="../../assets/img/index/zhe.png" />
              <span id="dog">折扣商品2.53折起折扣商品2.53折起折扣商品2.53折起折扣商品2.53折起折扣商品2.53折起折扣商品2.53折起折扣商品2.53折起折扣商品2.53折起折扣商品2.53折起</span>
            </div>


          </section>

          <i class="iconfont" id="cInfoBtn">&#xe656;</i>

        </div>

      </section>

    </div>


  </header><!-- /header -->
</template>
<script>
  export default{
    data(){
      return{

      }
    },
    mounted:function(){
      this.setCarousel();

    },
    methods:{
      setCarousel(){
        var num=0;
        setInterval(function(){
          num++;
          // 每次显示多少张就在末尾补上多少张，3表示一共有3张
          if(num>3){
            num=0;
            $('#vCarousel').css({'top':-20*num+'px'});
            num=1;
          }
          $('#vCarousel').animate({'top':-20*num+'px'})
        },1000)
      },
      toEntrance(){
        this.$router.replace({path:'/flowerEntrance'})
      }


    }
  }
</script>

<style scoped>
  header{
    width:100%;
    background-color: rgb(46, 47, 59);
    color:#fff;
    padding-bottom:0.2rem;


  }
  #returnIconWrap{
    height:1rem;
    line-height:1rem;
    padding-left:0.2rem;
    box-sizing:border-box;

  }
  #headerReturnIcon{
    display:inline-block;
    cursor:pointer;

  }
  #headerMsg{
    width:100%;
    border-top:1px solid #eee;
    padding-left:0.2rem;
    padding-top:0.1rem;
    display:flex;
    box-sizing:border-box;
  }

  #headerMsgLeftImg{
    width:85px;
    height:64px
  }
  #headerMsgRightBox{
    margin-left:10px;
    width:calc(100% - 95px);

  }
  #timeDistanceWrap{
    width:100%;
    line-height:16px;
    margin-bottom:0.1rem;
  }

  #time{
    font-size:0.26rem;

  }
  #line{
    display:inline-block;
    background-color:#bcbcbc;
    width:1px;
    height:6px;
  }
  #distance{
    font-size:0.24rem;
  }
  #announcement{
    width:100%;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    padding-right:0.2rem;
    box-sizing:border-box;
    margin-bottom:0.1rem;

  }

  #vCarouselWrap{
    width:100%;
    height:20px;
    line-height:20px;
    overflow:hidden;
    font-size:0px;
    display:flex;
    position:relative;
  }
  #vCarousel{
    width:calc(100% - 20px);
    display:inline-block;
    position:absolute;
    top:0;
    left:0;

  }
  #cInfoBtn{
    vertical-align:middle;
    display:inline-block;
    width:20px;
    text-align:center;
    position:absolute;
    right:0;
    top:0;
  }
  .carouselItem{
    width:100%;
    height:20px;
    line-height:20px;
    vertical-align:middle;
    font-size:0.24rem;
    overflow:hidden;
    display:flex;
    align-items:center;

  }

  .carouselItem img{
    width:0.3rem;
    height:0.3rem;
    margin-right:0.1rem;
  }
  #dog{
    display:inline-block;
    overflow:hidden;
    text-overflow:ellipsis;
    width:calc(100% - 20px);
    height:20px;
    white-space:nowrap;

  }


</style>
