<template>
<main id="sjMain">
  <p id="addrWrap">
    <img src="../../assets/img/shop/businesses/01.png" class="ic" />
    <!-- {{this.$store.state.businessIndex}} -->
    <!-- businessesList -->

    <span>{{businessesList[this.$store.state.businessIndex].address}}</span>
    <i class="iconfont" id="iphone">&#xe744;</i>
  </p>

  <p id="securityWrap">
    <img src="../../assets/img/shop/businesses/02.png" class="ic" />
    <span>查看食品安全档案</span>
  </p>

  <p id="deliveryTimeWrap">
    <img src="../../assets/img/shop/businesses/03.png" class="ic" />
    <span>{{businessesList[this.$store.state.businessIndex].deliveryTimeArea}}</span>
  </p>

  <p id="announceWrap">
    <img src="../../assets/img/shop/businesses/04.png" class="ic" />
    <span id="announceSpan">
      {{businessesList[this.$store.state.businessIndex].announcement}}
    </span>
    <i class="iconfont" id="moreAnnounce">&#xe656;</i>
  </p>

  <div id="servicesWrap">
    <section id="sLeft">
      <img src="../../assets/img/shop/businesses/05.png" class="ic" />
      <span>商家服务</span>
    </section>

    <section id="sRight">
      <p v-for="iii in businessesList[this.$store.state.businessIndex].services">
        <img :src="iii.serviceIconSrc" class="promote" />
        <span>{{iii.serviceInfo}}</span>
      </p>


    </section>
  </div>



  <div id="accountServiceWrap">
     <p v-for="jjj in businessesList[this.$store.state.businessIndex].discounts" class="accountServiceP">
      <i>
        <img :src="jjj.discountIconSrc" class="promote" />
      </i>
      <span>{{jjj.discountInfo}}</span>
     </p>

     <p v-for="iii in businessesList[this.$store.state.businessIndex].services" class="accountServiceP">
      <img :src="iii.serviceIconSrc" class="promote" />
      <span>{{iii.serviceInfo}}</span>
    </p>
  </div>

</main>
</template>

<script>
  export default{
    data(){
      return{
        businessesList:[]
        // ,myList:{}

      }
    },
    mounted(){
      var _this = this;

      /*不需要这样写的，这样相当于一次性把所有数据读进来，然后根据
      flowerEntrance传进来的下标再去获取。。。
      直接调用后台接口即可，不需要在前端进行判断。否则页面加载会很慢。
      this.$http.get('./data/flowercakebusinesses'+param1+'.json'+param2)
      如果一定要在前端模拟此功能，
      可以将每条数据放在不同的json中*/

      this.$http.get('./data/flowercakebusinesses.json')
      this.$http.get('./data/flowercakebusinesses.json')
      .then(function (response) {
          console.log(response)
          _this.businessesList = response.data.shopList;

          // _this.myList = businessesList[this.$store.state.businessIndex];

        })
        .catch(function (error) {
          console.log(error)
        })

    }
  }
</script>

<style scoped>
  #sjMain{
    width:100%;
    padding:0 15px;
    box-sizing:border-box;

  }

  .ic{
    width:14px;
    height:16px;
    margin-right:10px;
  }

  #addrWrap,
  #securityWrap,
  #deliveryTimeWrap{
    width:100%;
  }
  #addrWrap{
    margin-top:18px;
  }
  #securityWrap,
  #deliveryTimeWrap{
    padding:18px 0;
  }

  #securityWrap,
  #deliveryTimeWrap{
    border-bottom: 1px solid #eee;
  }
  span{
    color:#333;
    font-size:14px;
  }
  #iphone{
    color:#666;
    float:right;
  }

  #announceWrap{
    width:100%;
    overflow:hidden;
    padding:18px 0;
    display:flex;
    align-items:center;
    justify-content:space-between;
  }

  #announceSpan{
    width:calc(100% - 34px);
    display:inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right:8px;
    box-sizing:border-box;

  }
  #moreAnnounce{
    font-size:12px;
  }

  #servicesWrap{
    width:100%;
    display:flex;
    margin-bottom:18px;
    flex-wrap:nowrap;

  }

  #sRight{
    margin-left:10px;

  }

  .promote{
    width:15px;
    height:15px;
    margin-right:6px;
  }
  #accountServiceWrap{
    border-bottom:1px solid #eee;
    padding-bottom:18px;
  }
  .accountServiceP{
    width:100%;
    display:flex;
    margin-bottom:6px;

  }


</style>
