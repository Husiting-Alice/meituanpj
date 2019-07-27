<template>
<main id="dcMain">
  <ul id="dcLeftUl">
    <li class="dcLeftLi dcLeftLiActive" id="leftLi1" @click="changeLiText($event)">
      <img src="../../assets/img/tags.png" class="discountTags" />
      折扣
    </li>
    <li class="dcLeftLi" id="leftLi2" @click="changeLiText($event);changeRightContent($event)">购买须知</li>
    <li class="dcLeftLi" id="leftLi3" @click="changeLiText($event);changeRightContent($event)">家居鲜花</li>
    <li class="dcLeftLi" id="leftLi4" @click="changeLiText($event);changeRightContent($event)">包月鲜花</li>
    <li class="dcLeftLi" id="leftLi5" @click="changeLiText($event);changeRightContent($event)">节日鲜花</li>
    <li class="dcLeftLi" id="leftLi6" @click="changeLiText($event);changeRightContent($event)">店铺精选</li>
    <li class="dcLeftLi" id="leftLi7" @click="changeLiText($event);changeRightContent($event)">爱意表达</li>
    <li class="dcLeftLi" id="leftLi8" @click="changeLiText($event);changeRightContent($event)">高清定制</li>
    <li class="dcLeftLi" id="leftLi9" @click="changeLiText($event);changeRightContent($event)">生日祝福</li>
    <li class="dcLeftLi" id="leftLi10" @click="changeLiText($event);changeRightContent($event)">商务清点</li>
    <li class="dcLeftLi" id="leftLi11" @click="changeLiText($event);changeRightContent($event)">百合/康乃馨</li>
    <li class="dcLeftLi" id="leftLi12" @click="changeLiText($event);changeRightContent($event)">圣诞专区</li>
    <li class="dcLeftLi" id="leftLi13" @click="changeLiText($event);changeRightContent($event)">开业花篮</li>
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

    },
    methods:{
      changeLiText(e){
        $(e.target).addClass("dcLeftLiActive");
        $(e.target).siblings().removeClass("dcLeftLiActive");
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

      changeRightContent(e){
        console.log(e.currentTarget.id)
        if(e.currentTarget.id == "leftLi1"){
            console.log($("#li1").offset().top)
            $('#dcRightWrap').scrollTop = $("#li1").offset().top;

        }
        else if(e.currentTarget.id == "leftLi2"){
          console.log($("#li2").offset().top)
          $('#dcRightWrap').scrollTop = $("#li2").offset().top;
        }
        else if(e.currentTarget.id == "leftLi3"){
          console.log($("#li3").offset().top)
          $('#dcRightWrap').scrollTop = $("#li3").offset().top;
        }
        else if(e.currentTarget.id == "leftLi4"){
          $('#dcRightWrap').scrollTop = $("#li4").offset().top;
        }
        else if(e.currentTarget.id == "leftLi5"){
          $('#dcRightWrap').scrollTop = $("#li5").offset().top;
        }
        else if(e.currentTarget.id == "leftLi6"){
          $('#dcRightWrap').scrollTop = $("#li6").offset().top;
        }
        else if(e.currentTarget.id == "leftLi7"){
          $('#dcRightWrap').scrollTop = $('#dcRightWrap').top;
        }
        else if(e.currentTarget.id == "leftLi8"){
          $("#li8").scrollTop = 0;
        }
        else if(e.currentTarget.id == "leftLi9"){
          $("#li9").scrollTop = 0;
        }
        else if(e.currentTarget.id == "leftLi10"){
          $("#li10").scrollTop = 0;
        }
        else if(e.currentTarget.id == "leftLi11"){
          $("#li11").scrollTop = 0;
        }
        else if(e.currentTarget.id == "leftLi12"){
          $("#li12").scrollTop = 0;
        }
        else{
          $("#li13").scrollTop = 0;
        }

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
    padding:10px 10px 20px;
    font-size:13px;
    color: #666666;
    box-sizing:border-box;
    font-weight:bold;
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
    overflow:auto;
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

