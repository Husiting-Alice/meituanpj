<template>
  <main id="entranceContentMain">
    <section id="contentWrap">
      <div id="guessULike">
       猜你喜欢
     </div>
     <ol id="contentOl">

       <li v-for="(item,index) in eList">
         <router-link to="">
           <img :src="item.imgUrl">
           <div class="contentDivRight">
            <section class="foodName">{{item.shopName}}</section>
            <section class="foodTitle">{{item.addr}}</section>
            <section class="foodDesc">
              <i class="foodDescI">
                <span class="money">{{item.price}}</span>

                <span class="subSpan" v-if="item.subPrice != ''">
                  <i class="subPrice">{{item.subPrice}}</i>
                </span>
                <span class="marcketPrice" v-if="item.doorPrice != ''">{{item.doorPrice}}</span>
              </i>

              <i class="sellNum">{{item.hasSell}}</i>
            </section>
           </div>
         </router-link>
       </li>
     </ol>

     <div id="seeAll">
       <span>查看全部团购</span>
       <span class="iconfont">&#xe656;</span>
     </div>
    </section>


  </main>
</template>
<script>
  export default{
    data(){
        return{
          eList:[]
          // content:'这是。。。content'
        }
    },
   mounted(){
      var _this = this;
      this.$http.get('./data/entrance.json')
      .then(function (response) {
          // console.log(response)
          _this.eList = response.data.eList;

        })
        .catch(function (error) {
          console.log(error)
        })

    }
  }
</script>

<style scoped>

  #entranceContentMain{
    width:100%;
    background-color:#fff;
    margin-top:.20rem;
  }
  #contentWrap{
    width:calc(100% - 20px);
    margin:0 auto;
  }
  #guessULike{
    padding: .28rem 0;
    font-size:0.34rem;
    color:#333;
    border-bottom: 0.02rem solid #DDD8CE;

  }
  #contentOl{
    width:100%;
  }
  #contentOl li{
    padding:.2rem 0;
    border-bottom: 0.02rem solid #DDD8CE;
  }
  #contentOl li a{
    color:#333;
    text-decoration:none;
    display:flex;
    flex-wrap:nowrap;

  }
  #contentOl li a img{
    width: 1.8rem;
    height: 1.64rem;
  }

  .contentDivRight{
    margin-left:.2rem;
    width:calc(100% - 2rem);
  }
  .foodName{
    padding-top: .1rem;
    margin-bottom: .12rem;
    font-size: .3rem;
    font-weight: 400;
    color: #333;
  }
  .foodTitle{
    color:#666;
    font-size:0.24rem;
    margin-bottom:.32rem;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
    overflow:hidden;

  }
  .foodDesc{
    color:#666;
    font-size:0.24rem;
    overflow:hidden;

  }
  .foodDesc i{
    display:inline-block;

  }
  .foodDescI{
    vertical-align:sub;
    float:left;
  }
  .sellNum{

    font-size: .24rem;
    color:#666;
    float:right;
  }
  .money{
    font-size: .38rem;
    color: #06c1ae;
  }
  .money::after{
    content:"元";
    font-size: .26rem;
    color: #06c1ae;
  }
  .marcketPrice{
    font-size: .24rem;
  }
  .marcketPrice::before{
    content:'门市价:';
  }
  .marcketPrice::after{
    content:'元';
  }

  .sellNum::before{
    content:"已售";
  }
  .subSpan{
    display:inline-block;
    border: .02rem solid #f90;
    color: #f90;
    border-radius:0.06rem;
  }
  .subPrice{
    font-size: .22rem;
    padding:2px 5px;
  }

  #seeAll{
    width:100%;
    color: #06c1ae;
    display:flex;
    justify-content:space-between;
    line-height: .8rem;
    font-size: .3rem;
  }




</style>
