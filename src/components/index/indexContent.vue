<template>
  <section class="indexContent">
    <p id="contentTitleP">
      <i class="contentTitleI1"></i>
      <span class="contentTitleSpan">附近商家</span>
      <i class="contentTitleI2"></i>

    </p>

    <div id="menuFilterWrap">

        <ul id="titleUl">
        <li class="titleLi" @click="toggleSort()">
          <router-link class="titleLink" to="/totalsort">
            综合排序<i class="iconfont">&#xe638;</i>

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
        <li class="titleLi filterLi" @click="toggleScreen()">
          <router-link class="titleLink" to="/screen">
            筛选<i class="iconfont">&#xe612;</i>

          </router-link>
        </li>
      </ul>

      <!-- 点击以上菜单之后弹出的所有内容都渲染到这里 -->
      <router-view></router-view>
    </div>


    <!-- 商家以及菜单 -->
    <ol id="contentOl">
      <li class="contentLi" v-for="(item,index) in inList">
        <router-link to="/flowerEntrance" @click.native="setBIndexaa(index)">
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

              <span class="iconfont discountBtn" @click="hideSomeDiscountaa($event)" v-if="item.discounts.length > 2">&#xe638;</span>

            </div>

          </div>

        </router-link>

      </li>

    </ol>

  </section>

  <!-- <div>这是content</div> -->

</template>

 <script>
   export default{
    data(){
      return{
        inList:[]

      }
    },

    mounted(){
      var _this = this;
      this.$http.get('./data/index.json')
      .then(function (response) {
          _this.inList = response.data.indexList;

        })
        .catch(function (error) {
          console.log(error)
        })
    },
    methods:{
      toggleScreen(){
        this.$store.commit('filtertoggleShow');
      },
      toggleSort(){
        this.$store.commit('sorttoggleShow');

      },
      hideSomeDiscountaa(a){
        a.preventDefault();
        var h = $('.p3wrap p').height();
        console.log($(a.target).siblings('p').length)
        $(a.target).toggleClass('active');
        if($(a.target).hasClass('active')){
          $(a.target).parent().height(h*2);
        }else{
          $(a.target).parent().height(h*$(a.target).siblings('p').length)
        }

      },
      setBIndexaa(idx){
        this.$store.commit('setBusinessIndex',(idx))
      }


    }
  }
 </script>


 <style scoped>

    .indexContent{
      background-color:#fff;
      padding-bottom:45px;
    }

    #contentTitleP{
     text-align:center;
     width:100%;
     margin:0.1rem 0;
   }
   .contentTitleI1,.contentTitleI2{
    width:1.2rem;
    height:0.02rem;
    background-color:#666;
    display:inline-block;
    vertical-align:middle;
   }
   .contentTitleSpan{
     font-size:0.32rem;
     color:#333;
     font-weight:800;
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
   }
   .titleLi a{
    color:#666;
    font-size:0.28rem;
    text-decoration:none;

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



