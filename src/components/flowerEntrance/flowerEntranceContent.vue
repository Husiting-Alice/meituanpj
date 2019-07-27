<template>
  <section class="flowerEntranceContent">
     <!-- v-show="{{this.$store.state.flowernavshow}}" -->

    <div id="menuFilterWrap">

        <ul id="titleUl">
        <li class="titleLi" @click="togglenavScreenSort(); msg='v-flowertotalsort'" >
          <router-link class="titleLink" to="">
          综合排序
          <i class="setBtnToDown" id="totalsortUpandDown"></i>
          </router-link>
        </li>
        <li class="titleLi">
          <router-link class="titleLink" to="">
            销量最高
          </router-link>
        </li>
        <li class="titleLi">
          <router-link class="titleLink" to="">
            距离最近
          </router-link>
        </li>
        <li class="titleLi filterLi" @click="togglenavScreenSort(); msg='v-flowerscreen'">
          <router-link class="titleLink" to="">
            筛选<i class="iconfont">&#xe612;</i>

          </router-link>
          <i class="filtertrangle" v-if="filtertrangleshow"></i>
        </li>
      </ul>

      <!-- 动态组件，最终渲染的内容由msg决定。点击以上菜单之后弹出的所有内容都渲染到这里 -->
      <component :is="msg"></component>


    </div>


    <!-- 商家以及菜单 -->
    <ol id="contentOl">
      <li class="contentLi" v-for="(item,index) in bList">
        <router-link to="/shop" @click.native="setBIndex(index)">
          <span class="businessesWrap">
            <img :src="item.picUrl" class="businessesPicture" />
            <img :src="item.brandTapUrl" class="businessesBrandTag" />
          </span>

          <div class="shopMsgBox">
            <h2 class="shopName">{{item.shopName}}</h2>
            <p class="p1">
              <span class="starWrap">
                <i class="star1" v-for="aa in item.starNum"></i>
              </span><span class="starWrap2">
                <i class="star2" v-for="bb in 5-item.starNum"></i>
              </span>

              <span class="score">{{item.wmPoiScore}}</span>
              <span class="monthlySales">{{item.monthSalesTip}}</span>

              <span class="timeDistanceWrap">
                <span class="time">{{item.deliveryTimeTip}}</span>
                <i v-if="item.distance != ''" class="verticalLine"></i>
                <span class="distance">{{item.distance}}</span>
              </span>
            </p>

            <p class="p2">
              <span class="send1">{{item.minPriceTip}}</span>
              <span class="send2">{{item.shippingFeeTip}}</span>
              <span class="send3">{{item.nightShippingFeeTip}}</span>
            </p>

            <span class="yelpWrap" v-if="item.yelp.yelpInfo != ''">
              <img :src="item.yelp.yelpIconSrc" class="promotionImg" />
              <span>{{item.yelp.yelpInfo}}</span>
            </span>

            <div class="p3wrap" id="ha">
              <p class="p3" v-for="i in item.discounts">
              <span style="display:inline-block;">
                <img :src="i.discountIconSrc" class="promotionImg" />
                <span>{{i.discountInfo}}</span>
              </span>
              </p>

              <span class="iconfont discountBtn" @click="hideSomeDiscount($event)" v-if="item.discounts.length > 2">&#xe638;</span>

            </div>

          </div>

        </router-link>

      </li>

    </ol>

  </section>


</template>

 <script>
 import flowertotalsort from './flowerTotalSort.vue'
 import flowerscreen from './flowerScreen.vue'
   export default{
    data(){
      return{
        msg:'v-flowertotalsort',
        bList:[],
        discountItemShow:false,
        filtertrangleshow:false

      }
    },
    mounted(){
      var _this = this;
      this.$http.get('./data/flowercakebusinesses.json')
      .then(function (response) {

          _this.bList = response.data.shopList;

        })
        .catch(function (error) {
          console.log(error)
        })

      window.addEventListener('scroll', this.handleScroll, true);

    },
    methods:{
      togglenavScreenSort(){
        $('#totalsortUpandDown').toggleClass('setBtnToUp');
        this.$store.commit('flownavsortfilttoggle');
        this.filtertrangleshow = !this.filtertrangleshow;
      },
      hideSomeDiscount(a){
        a.preventDefault();
        var h = $('.p3wrap p').height();
        // console.log($(a.target).siblings('p').length)
        console.log($(a.target).siblings('p').length)
        $(a.target).toggleClass('active');
        if($(a.target).hasClass('active')){
          $(a.target).parent().height(h*2);
        }else{
          $(a.target).parent().height(h*$(a.target).siblings('p').length)
        }

      },
      setBIndex(idx){
        this.$store.commit('setBusinessIndex',(idx))
      },
      handleScroll(){
        if($(window).scrollTop() >= 80){

          $('#menuFilterWrap').css({
            "position":"fixed",
            "top":"40px",
            "left":"0"
          })
        }else{

          $('#menuFilterWrap').css({
            "position":"static"
          })
        }

      }
    },
    components:{
      'v-flowertotalsort':flowertotalsort,
      'v-flowerscreen':flowerscreen
    }

  }
 </script>


 <style scoped>
 .active{
  transform:rotate(180deg);
 }
 .setBtnToDown{
  background:#fff;
  width:5px;
  height:5px;
  display:inline-block;
  border-right:1px solid #666;
  border-bottom:1px solid #666;
  transform:rotate(45deg) translateY(-50%);
  vertical-align:middle;
 }
 .setBtnToUp{
  border-bottom:none;
  border-right:none;
  border-top:1px solid #666;
  border-left:1px solid #666;
  transform:rotate(45deg) translateY(0);

 }

  .flowerEntranceContent{
    background-color:#fff;
   }

  #titleUl{
    width:100%;
    height:0.8rem;
    line-height:0.8rem;
    display:flex;
    border-top:1px solid #eee;
    border-bottom:1px solid #eee;
  }
  .titleLi{
    width:25%;
    text-align:center;
    cursor:pointer;
    position:relative;
  }
  .titleLi a{
    color:#666;
    font-size:0.28rem;
    text-decoration:none;

  }
  .filtertrangle{
    display:inline-block;
    width:8px;
    height:8px;
    transform:rotate(45deg);
    background-color:#fff;
    border-top:1px solid #e4e4e4;
    border-left:1px solid #e4e4e4;
    position:absolute;
    bottom:-5px;
    right:50%;
  }

  .titleLi a i{
    font-size:0.24rem;
  }

  #contentOl{
    z-index:2;
    width:calc(100% - 0.4rem);
    margin:0 auto;
    box-sizing:border-box;
  }
  #contentOl li{
    margin:0.2rem 0px 0.5rem;

  }
  #contentOl li a{
    width:100%;
    display:flex;
    text-decoration:none;

  }
  .businessesWrap{
    display:inline-block;
    position:relative;
    margin-right:0.2rem;
  }
  .businessesPicture{
    width:1.52rem;
    height:1.14rem;
  }
  .businessesBrandTag{
    position:absolute;
    right:0;
    top:0;
    width:0.52rem;
    height:0.28rem;

  }
  .shopMsgBox{
    width:calc(100% - 1.72rem);
  }
  .shopName{
    font-size:0.32rem;
    color:#333;
    white-space:nowrap;
    overflow:hidden;
    line-height:1.4;

  }
  .star1{
    display:inline-block;
    background:url('../../assets/img/index/stars.png') no-repeat;
    background-position: 40% 5.66%;
    background-size: 126% 379%;
    width: 12px;
    height: 12px;
  }
  .star2{
    display:inline-block;
    background:url('../../assets/img/index/stars.png') no-repeat;
    background-position: 40% 96.226%;
    background-size: 126% 379%;
    width: 12px;
    height: 12px;
  }
  .timeDistanceWrap{
    display:inline-block;
    float:right;

  }
  .verticalLine{
    width:1px;
    height:6px;
    display:inline-block;
    background: #ccc;
    vertical-align:middle;

  }
  .p1,.p2{
    color:#333;
    font-size:0.24rem;
    margin-top:4px;
  }
  .yelpWrap{
    margin-top:8px;
    color:#666;
    display:inline-block;
  }
  .p3wrap{
    width:100%;
    position:relative;
    overflow:hidden;
  }
  .p3{
    color:#666;
    font-size:0.24rem;
    line-height:18px;
  }

  .promotionImg{
    width:0.3rem;
    height:0.3rem;
  }
  .discountBtn{
    position:absolute;
    display:inline-block;
    width:0.2rem;
    height:0.2rem;
    top:0;
    right:2px;
    font-size:12px;
  }

  #menuFilterWrap{
    width:100%;
    background-color:#fff;
    z-index:5;
  }


 </style>



