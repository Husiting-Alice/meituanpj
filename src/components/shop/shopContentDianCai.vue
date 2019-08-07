<template>
<main id="dcMain">
  <ul id="dcLeftUl">
    <li class="dcLeftLi dcLeftLiActive" id="leftLi1" @click="changeLiText($event)">
      <a @click.prevent="custormAnchor('li1')">
        <img src="../../assets/img/tags.png" class="discountTags" />
        折扣
      </a>
    </li>
    <li class="dcLeftLi" id="leftLi2" @click="changeLiText($event);">
      <a @click.prevent="custormAnchor('li2')">购买须知</a>
    </li>
    <li class="dcLeftLi" id="leftLi3" @click="changeLiText($event);">
      <a @click.prevent="custormAnchor('li3')">家居鲜花</a>
    </li>
    <li class="dcLeftLi" id="leftLi4" @click="changeLiText($event);">
      <a @click.prevent="custormAnchor('li4')">包月鲜花</a>
    </li>
    <li class="dcLeftLi" id="leftLi5" @click="changeLiText($event);">
      <a @click.prevent="custormAnchor('li5')">节日鲜花</a>
    </li>
    <li class="dcLeftLi" id="leftLi6" @click="changeLiText($event);">
      <a @click.prevent="custormAnchor('li6')">店铺精选</a>
    </li>
    <li class="dcLeftLi" id="leftLi7" @click="changeLiText($event);">
      <a @click.prevent="custormAnchor('li7')">爱意表达</a>
    </li>
    <li class="dcLeftLi" id="leftLi8" @click="changeLiText($event);">
      <a @click.prevent="custormAnchor('li8')">高清定制</a>
    </li>
    <li class="dcLeftLi" id="leftLi9" @click="changeLiText($event);">
      <a @click.prevent="custormAnchor('li9')">生日祝福</a>
    </li>
    <li class="dcLeftLi" id="leftLi10" @click="changeLiText($event);">
      <a @click.prevent="custormAnchor('li10')">商务清点</a>
    </li>
    <li class="dcLeftLi" id="leftLi11" @click="changeLiText($event);">
      <a @click.prevent="custormAnchor('li11')">百合/康乃馨</a>
    </li>
    <li class="dcLeftLi" id="leftLi12" @click="changeLiText($event);">
      <a @click.prevent="custormAnchor('li12')">圣诞专区</a>
    </li>
    <li class="dcLeftLi" id="leftLi13" @click="changeLiText($event);">
      <a @click.prevent="custormAnchor('li13')">开业花篮</a>
    </li>
  </ul>
  <section id="dcRightWrap">
    <p id="liText">{{liText}}</p>

    <ul id="dcRightUl">
      <li class="dcRightLi" v-for="(item,index) in shopLists.list1" id="li1">
          <img :src="item.imgUrl" class="goodsImg" />
          <div class="dcRightLiDiv">
            <p class="goodsTitle">
              {{item.shopName}}
            </p>
            <p class="announce">
              {{item.desc}}
            </p>
            <p class="sellState">
              <span class="monthly">{{item.monthly}}</span>
              <i class="appreciate">{{item.appreciate}}</i>
            </p>
            <p class="priceWrap">
              <span class="realPrice">￥{{item.price}}</span>
              <i class="historyPrice">￥{{item.historyprice}}</i>
            </p>
            <span class="discounts" v-if="item.more!=''">{{item.more}}</span>

            <span class="shopCarCounts">0</span>
            <span class="removeFromShopCar" @click="removeFromShopCar($event)"></span>
            <span class="addToShopCar" @click="addToShopCar($event)"></span>
          </div>
      </li>

      <li class="dcRightLi" v-for="(item,index) in shopLists.list2" id="li2">
          <img :src="item.imgUrl" class="goodsImg" />
          <div class="dcRightLiDiv">
            <p class="goodsTitle">
              {{item.shopName}}
            </p>
            <p class="announce">
              {{item.desc}}
            </p>
            <p class="sellState">
              <span class="monthly">{{item.monthly}}</span>
              <i class="appreciate">{{item.appreciate}}</i>
            </p>
            <p class="priceWrap">
              <span class="realPrice">￥{{item.price}}</span>
              <i class="historyPrice">￥{{item.historyprice}}</i>
            </p>
            <span class="discounts" v-if="item.more!=''">{{item.more}}</span>

            <span class="shopCarCounts">0</span>
            <span class="removeFromShopCar" @click="removeFromShopCar($event)"></span>
            <span class="addToShopCar" @click="addToShopCar($event)"></span>
          </div>
      </li>

      <li class="dcRightLi" v-for="(item,index) in shopLists.list3" id="li3">
          <img :src="item.imgUrl" class="goodsImg" />
          <div class="dcRightLiDiv">
            <p class="goodsTitle">
              {{item.shopName}}
            </p>
            <p class="announce">
              {{item.desc}}
            </p>
            <p class="sellState">
              <span class="monthly">{{item.monthly}}</span>
              <i class="appreciate">{{item.appreciate}}</i>
            </p>
            <p class="priceWrap">
              <span class="realPrice">￥{{item.price}}</span>
              <i class="historyPrice">￥{{item.historyprice}}</i>
            </p>
            <span class="discounts"  v-if="item.more!=''">{{item.more}}</span>

            <span class="shopCarCounts">0</span>
            <span class="removeFromShopCar" @click="removeFromShopCar($event)"></span>
            <span class="addToShopCar" @click="addToShopCar($event)"></span>
          </div>
      </li>

      <li class="dcRightLi" v-for="(item,index) in shopLists.list4" id="li4">
          <img :src="item.imgUrl" class="goodsImg" />
          <div class="dcRightLiDiv">
            <p class="goodsTitle">
              {{item.shopName}}
            </p>
            <p class="announce">
              {{item.desc}}
            </p>
            <p class="sellState">
              <span class="monthly">{{item.monthly}}</span>
              <i class="appreciate">{{item.appreciate}}</i>
            </p>
            <p class="priceWrap">
              <span class="realPrice">￥{{item.price}}</span>
              <i class="historyPrice">￥{{item.historyprice}}</i>
            </p>
            <span class="discounts" v-if="item.more!=''">{{item.more}}</span>

            <span class="shopCarCounts">0</span>
            <span class="removeFromShopCar" @click="removeFromShopCar($event)"></span>
            <span class="addToShopCar" @click="addToShopCar($event)"></span>
          </div>
      </li>

      <li class="dcRightLi" v-for="(item,index) in shopLists.list5" id="li5">
          <img :src="item.imgUrl" class="goodsImg" />
          <div class="dcRightLiDiv">
            <p class="goodsTitle">
              {{item.shopName}}
            </p>
            <p class="announce">
              {{item.desc}}
            </p>
            <p class="sellState">
              <span class="monthly">{{item.monthly}}</span>
              <i class="appreciate">{{item.appreciate}}</i>
            </p>
            <p class="priceWrap">
              <span class="realPrice">￥{{item.price}}</span>
              <i class="historyPrice">￥{{item.historyprice}}</i>
            </p>
            <span class="discounts" v-if="item.more!=''">{{item.more}}</span>

            <span class="shopCarCounts">0</span>
            <span class="removeFromShopCar" @click="removeFromShopCar($event)"></span>
            <span class="addToShopCar" @click="addToShopCar($event)"></span>
          </div>
      </li>

      <li class="dcRightLi" v-for="(item,index) in shopLists.list6" id="li6">
          <img :src="item.imgUrl" class="goodsImg" />
          <div class="dcRightLiDiv">
            <p class="goodsTitle">
              {{item.shopName}}
            </p>
            <p class="announce">
              {{item.desc}}
            </p>
            <p class="sellState">
              <span class="monthly">{{item.monthly}}</span>
              <i class="appreciate">{{item.appreciate}}</i>
            </p>
            <p class="priceWrap">
              <span class="realPrice">￥{{item.price}}</span>
              <i class="historyPrice">￥{{item.historyprice}}</i>
            </p>
            <span class="discounts" v-if="item.more!=''">{{item.more}}</span>

            <span class="shopCarCounts">0</span>
            <span class="removeFromShopCar" @click="removeFromShopCar($event)"></span>
            <span class="addToShopCar" @click="addToShopCar($event)"></span>
          </div>
      </li>

      <li class="dcRightLi" v-for="(item,index) in shopLists.list7" id="li7">
          <img :src="item.imgUrl" class="goodsImg" />
          <div class="dcRightLiDiv">
            <p class="goodsTitle">
              {{item.shopName}}
            </p>
            <p class="announce">
              {{item.desc}}
            </p>
            <p class="sellState">
              <span class="monthly">{{item.monthly}}</span>
              <i class="appreciate">{{item.appreciate}}</i>
            </p>
            <p class="priceWrap">
              <span class="realPrice">￥{{item.price}}</span>
              <i class="historyPrice">￥{{item.historyprice}}</i>
            </p>
            <span class="discounts" v-if="item.more!=''">{{item.more}}</span>

            <span class="shopCarCounts">0</span>
            <span class="removeFromShopCar" @click="removeFromShopCar($event)"></span>
            <span class="addToShopCar" @click="addToShopCar($event)"></span>
          </div>
      </li>

      <li class="dcRightLi" v-for="(item,index) in shopLists.list8" id="li8">
          <img :src="item.imgUrl" class="goodsImg" />
          <div class="dcRightLiDiv">
            <p class="goodsTitle">
              {{item.shopName}}
            </p>
            <p class="announce">
              {{item.desc}}
            </p>
            <p class="sellState">
              <span class="monthly">{{item.monthly}}</span>
              <i class="appreciate">{{item.appreciate}}</i>
            </p>
            <p class="priceWrap">
              <span class="realPrice">￥{{item.price}}</span>
              <i class="historyPrice">￥{{item.historyprice}}</i>
            </p>
            <span class="discounts" v-if="item.more!=''">{{item.more}}</span>

            <span class="shopCarCounts">0</span>
            <span class="removeFromShopCar" @click="removeFromShopCar($event)"></span>
            <span class="addToShopCar" @click="addToShopCar($event)"></span>
          </div>
      </li>

      <li class="dcRightLi" v-for="(item,index) in shopLists.list9" id="li9">
          <img :src="item.imgUrl" class="goodsImg" />
          <div class="dcRightLiDiv">
            <p class="goodsTitle">
              {{item.shopName}}
            </p>
            <p class="announce">
              {{item.desc}}
            </p>
            <p class="sellState">
              <span class="monthly">{{item.monthly}}</span>
              <i class="appreciate">{{item.appreciate}}</i>
            </p>
            <p class="priceWrap">
              <span class="realPrice">￥{{item.price}}</span>
              <i class="historyPrice">￥{{item.historyprice}}</i>
            </p>
            <span class="discounts" v-if="item.more!=''">{{item.more}}</span>

            <span class="shopCarCounts">0</span>
            <span class="removeFromShopCar" @click="removeFromShopCar($event)"></span>
            <span class="addToShopCar" @click="addToShopCar($event)"></span>
          </div>
      </li>

      <li class="dcRightLi" v-for="(item,index) in shopLists.list10" id="li10">
          <img :src="item.imgUrl" class="goodsImg" />
          <div class="dcRightLiDiv">
            <p class="goodsTitle">
              {{item.shopName}}
            </p>
            <p class="announce">
              {{item.desc}}
            </p>
            <p class="sellState">
              <span class="monthly">{{item.monthly}}</span>
              <i class="appreciate">{{item.appreciate}}</i>
            </p>
            <p class="priceWrap">
              <span class="realPrice">￥{{item.price}}</span>
              <i class="historyPrice">￥{{item.historyprice}}</i>
            </p>
            <span class="discounts" v-if="item.more!=''">{{item.more}}</span>

            <span class="shopCarCounts">0</span>
            <span class="removeFromShopCar" @click="removeFromShopCar($event)"></span>
            <span class="addToShopCar" @click="addToShopCar($event)"></span>
          </div>
      </li>

      <li class="dcRightLi" v-for="(item,index) in shopLists.list11" id="li11">
          <img :src="item.imgUrl" class="goodsImg" />
          <div class="dcRightLiDiv">
            <p class="goodsTitle">
              {{item.shopName}}
            </p>
            <p class="announce">
              {{item.desc}}
            </p>
            <p class="sellState">
              <span class="monthly">{{item.monthly}}</span>
              <i class="appreciate">{{item.appreciate}}</i>
            </p>
            <p class="priceWrap">
              <span class="realPrice">￥{{item.price}}</span>
              <i class="historyPrice">￥{{item.historyprice}}</i>
            </p>
            <span class="discounts" v-if="item.more!=''">{{item.more}}</span>

            <span class="shopCarCounts">0</span>
            <span class="removeFromShopCar" @click="removeFromShopCar($event)"></span>
            <span class="addToShopCar" @click="addToShopCar($event)"></span>
          </div>
      </li>

      <li class="dcRightLi" v-for="(item,index) in shopLists.list12" id="li12">
          <img :src="item.imgUrl" class="goodsImg" />
          <div class="dcRightLiDiv">
            <p class="goodsTitle">
              {{item.shopName}}
            </p>
            <p class="announce">
              {{item.desc}}
            </p>
            <p class="sellState">
              <span class="monthly">{{item.monthly}}</span>
              <i class="appreciate">{{item.appreciate}}</i>
            </p>
            <p class="priceWrap">
              <span class="realPrice">￥{{item.price}}</span>
              <i class="historyPrice">￥{{item.historyprice}}</i>
            </p>
            <span class="discounts" v-if="item.more!=''">{{item.more}}</span>

            <span class="shopCarCounts">0</span>
            <span class="removeFromShopCar" @click="removeFromShopCar($event)"></span>
            <span class="addToShopCar" @click="addToShopCar($event)"></span>
          </div>
      </li>

      <li class="dcRightLi" v-for="(item,index) in shopLists.list13" id="li13">
          <img :src="item.imgUrl" class="goodsImg" />
          <div class="dcRightLiDiv">
            <p class="goodsTitle">
              {{item.shopName}}
            </p>
            <p class="announce">
              {{item.desc}}
            </p>
            <p class="sellState">
              <span class="monthly">{{item.monthly}}</span>
              <i class="appreciate">{{item.appreciate}}</i>
            </p>
            <p class="priceWrap">
              <span class="realPrice">￥{{item.price}}</span>
              <i class="historyPrice">￥{{item.historyprice}}</i>
            </p>
            <span class="discounts" v-if="item.more!=''">{{item.more}}</span>

            <span class="shopCarCounts">0</span>
            <span class="removeFromShopCar" @click="removeFromShopCar($event)"></span>
            <span class="addToShopCar" @click="addToShopCar($event)"></span>
          </div>
      </li>

    </ul>
  </section>
     <!-- 固定购物车底部 -->
    <v-footer ref="myfooter"></v-footer>


</main>
</template>

<script>
  // import BScroll from 'better-scroll'
  import sFooter from './shopFooter.vue'
  export default{
    data(){
      return{
        liText:"折扣",
        shopLists:{},
        shopItemNUm:0,
        num:0,
        singlegoodsprice:0,
        singleHistoryPrice:0,
        subsinglep:0,
        subhistoryp:0,
        totalprice:0,
        totalhistoryprice:0,
        arr1:[],
        arr2:[]

      }
    },
    components:{
      'v-footer':sFooter
    },
    mounted(){
      var _this = this;
      this.$http.get('./data/shop.json')
      .then(function (response) {
          console.log(response)
          _this.shopLists = response.data.myshopList;

        })
        .catch(function (error) {
          console.log(error)
        })

        var dcR = document.getElementById('dcRightWrap');
        dcR.addEventListener('scroll', this.handleUlScroll)

    },
    methods:{
      changeColorByIndex(idx){
        var elems = document.getElementsByClassName('dcLeftLi');
        for(var i=0; i<elems.length; i++){
          elems[i].style.backgroundColor = "#f5f5f5";
        }
        var elm = document.getElementById('leftLi'+idx);
        elm.style.backgroundColor = "#fff";
      },
      handleUlScroll(){
        var dcR = document.getElementById('dcRightWrap');
        console.log(dcR.scrollTop)
        //207
        if(dcR.scrollTop <= 207){
          this.changeColorByIndex(1);
        }
        //713
        else if(dcR.scrollTop <= 713){
          this.changeColorByIndex(2);
        }
        //1093
        else if(dcR.scrollTop <= 1093){
          this.changeColorByIndex(3);
        }
        //1599
        else if(dcR.scrollTop <= 1599){
          this.changeColorByIndex(4);
        }
        //2105
        else if(dcR.scrollTop <= 2105){
          this.changeColorByIndex(5);
        }
        //3243
        else if(dcR.scrollTop <= 3243){
          this.changeColorByIndex(6);
        }
        //3623
        else if(dcR.scrollTop <= 3623){
          this.changeColorByIndex(7);
        }
        //4129
        else if(dcR.scrollTop <= 4129){
          this.changeColorByIndex(8);
        }
        //4341
        else if(dcR.scrollTop <= 4341){
          this.changeColorByIndex(9);
        }
        //5100
        else if(dcR.scrollTop <= 5100){
          this.changeColorByIndex(10);
        }
        //6491
        else if(dcR.scrollTop <= 6491){
          this.changeColorByIndex(11);
        }
        //7250
        else if(dcR.scrollTop <= 7250){
          this.changeColorByIndex(12);
        }
        //7561
        else{
          this.changeColorByIndex(13);
        }

      },
      changeLiText(e){
        $(e.target).parent().addClass("dcLeftLiActive");
        $(e.target).parent().siblings().removeClass("dcLeftLiActive");
        $('.dcLeftLi a').css("color","#666");
        $(e.target).css("color","#333");
        this.liText = $(e.target).text();
      },
      addToShopCar(e){
        this.$refs.myfooter.changeFooterStyle();
        this.num = parseInt($(e.currentTarget).siblings('.shopCarCounts').html());
        if(this.num >= 20){
          return;
        }
        this.num++;
         // 获取现价并计算总价然后设置值
         // 获取商品单价
        this.singlegoodsprice = $(e.currentTarget).siblings('.priceWrap').children('.realPrice').html().substring(1);


        // 某一项商品选择数量之后的总价
        // this.totalprice = parseInt(this.singlegoodsprice)*this.num;
        //
        //转化为一个整数
        this.singlegoodsprice = parseInt(this.singlegoodsprice);


        // 将获取的单价加到总价中
        this.$store.commit('endPrice',this.singlegoodsprice);

        // 传值给main.js去计算所有加购商品的总价
        // this.$store.state.totalprice = this.totalprice;


        // 获取历史价格、计算总的历史价格然后设置值
        this.singleHistoryPrice = $(e.currentTarget).siblings('.priceWrap').children('.historyPrice').html().substring(1);

        // 将获取到的历史价格转换为整数
        this.singleHistoryPrice = parseInt(this.singleHistoryPrice);



        // 计算单项商品加购之后总价
        // this.totalhistoryprice = parseInt(this.singleHistoryPrice)*this.num;

        // 计算历史价格从总价中减去
        // this.$store.state.totalhistoryprice = this.totalhistoryprice;
        this.$store.commit('endHistoryPrice',this.singleHistoryPrice);

        $(e.currentTarget).siblings('.shopCarCounts').html(this.num);
      },
      removeFromShopCar(e){
        this.num = parseInt($(e.currentTarget).siblings('.shopCarCounts').html());
        if(this.num <= 0){
          return;
        }
        this.num--;

        // 获取现价
        this.subsinglep = $(e.currentTarget).siblings('.priceWrap').children('.realPrice').html().substring(1);

        // 重新计算单向加购商品的总价
        // this.totalprice = parseInt(this.singlegoodsprice)*this.num;

        // 将取到的金额转换为负数
        this.subsinglep = -(parseInt(this.subsinglep));

        // 将总的金额减去现价
          this.$store.commit('endPrice',this.subsinglep);

        // 获取历史价格
        this.subhistoryp = $(e.currentTarget).siblings('.priceWrap').children('.historyPrice').html().substring(1);

        // 将获取到的历史价格转换为负数
        this.subhistoryp = -(parseInt(this.subhistoryp));

        // 将总的历史价格减去单项商品的历史价格
        this.$store.commit('endHistoryPrice',this.subhistoryp);

        $(e.currentTarget).siblings('.shopCarCounts').html(this.num);

      },

      custormAnchor(anchorName) {
        // 找到锚点
        let anchorElement = document.getElementById(anchorName);
        // document.getElementById(anchorName);
        // 如果对应id的锚点存在，就跳转到锚点
        if(anchorElement) {console.log(anchorElement); anchorElement.scrollIntoView(); }
      }

    }

  }
</script>

<style scoped>
  #dcMain{
    width:100%;
    background:#fff;
    padding-bottom:45px;
  }
  #dcLeftUl{
    width:80px;
    background-color: #f5f5f5;
    float:left;
    height:100vh;
    padding-bottom:30px;
  }
  .dcLeftLi{
    width:100%;
    font-size:13px;
    color: #666666;
    box-sizing:border-box;
    font-weight:bold;
  }
  .dcLeftLi a{
    font-size:13px;
    color: #666666;
    text-decoration:none;
    display:inline-block;
    padding: 10px 10px 20px;


  }
  .dcLeftLiActive{
    color:#333 !important;
    background:#fff !important;
  }
  .discountTags{
    width:15px;
    height:15px;
  }


  #dcRightWrap{
    width:calc(100% - 90px);
    margin-left:0.2rem;
    float:left;
    height:100vh;
    overflow:scroll;
    padding-bottom:50px;
  }
  #liText{
    color:#333;
    font-size:0.24rem;
    line-height:36px;
  }
  #dcRightUl{
    width:100%;

  }
  .dcRightLi{
    width:100%;
    padding-right:10px;
    box-sizing:border-box;
    margin-bottom:20px;
    overflow:hidden;
    display:flex;
    position:relative;

  }

  .goodsImg{
    width:75px;
    height:75px;
  }
  .dcRightLiDiv{
    width:calc(100% - 76px);
    padding-left:10px;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;

  }
  .goodsTitle{
    color:#333;
    font-size:16px;
    font-weight:bold;
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height:22px;
    width:100%;

  }


  .announce{
    width:100%;
    color:#666;
    font-size:12px;
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
    margin-top:2px;
    margin-bottom:3px;

  }

  .sellState{
    margin-bottom:3px;

  }
  .monthly{
    color:#666;
    font-size:12px;
    display:inline-block;
    margin-right:8px;

  }
  .appreciate{
    color:#666;
    font-size:12px;
    display:inline-block;
  }

  .realPrice{
    height: 21.5px;
    line-height: 21.5px;
    display: inline-block;
    color: #fb4e44;
    font-size: 18px;
    vertical-align: middle;
  }
  .historyPrice{
    color:#A9A9A9;
    font-size:12px;
    text-decoration:line-through;

  }
  .discounts{
    display:inline-block;
    border:1px solid #fb4e44;
    color:#fb4e44;
    font-size:12px;
    padding:1px 2px;
    box-sizing:border-box;
    width:50px;
    border-radius:5px;
    text-align:center;
    margin-top:3px;

  }

  .addToShopCar,
  .removeFromShopCar{
    width:25px;
    height:25px;
    position:absolute;
    bottom:6px;
    display:inline-block;

  }
  .addToShopCar{
    right:14px;
    background:url("../../assets/img/add.png") no-repeat;
    background-size:25px 25px;
  }
  .removeFromShopCar{
    right:68px;
    background:url("../../assets/img/subfromcar.png") no-repeat;
    background-size:25px 25px;

  }
  .shopCarCounts{
    display:inline-block;
    position:absolute;
    bottom:10px;
    font-size:16px;
    color:#333;
    right:45px;


  }

</style>

