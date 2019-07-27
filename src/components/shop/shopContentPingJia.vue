<template>
<main id="pjMain">
  <div class="givePointsWrap">
    <section class="givePointLeft">
      <span class="points1">5</span>
      <p class="pointsDesc1">商家评分</p>
    </section>
    <section class="givePointCenter">
      <p id="qualityP">
        <span id="quality">质量</span>
        <span class="pointsStarWrap1">
          <i class="pointsStar1"></i>
          <i class="pointsStar1"></i>
          <i class="pointsStar1"></i>
          <i class="pointsStar1"></i>
          <i class="pointsStar1"></i>
        </span>
        <span id="qScore">5</span>
      </p>

      <p id="packageP">
        <span id="packages">包装</span>
        <span class="pointsStarWrap2">
          <i class="pointsStar2"></i>
          <i class="pointsStar2"></i>
          <i class="pointsStar2"></i>
          <i class="pointsStar2"></i>
          <i class="pointsStar2"></i>
        </span>
        <span id="pSscore">5</span>
      </p>

    </section>
    <section class="givePointRight">
      <span class="points2">5</span>
      <p class="pointsDesc2">配送评分</p>
    </section>

  </div>

  <div id="tagsWrap">
    <ul id="tagsUl">
      <li class="tagsLi tagsLiActive" @click="changeLiColor($event)">全部(<i>419</i>)</li>
      <li class="tagsLi" @click="changeLiColor($event)">好评(<i>416</i>)</li>
      <li class="tagsLi" @click="changeLiColor($event)">差评(<i>1</i>)</li>
      <li class="tagsLi" @click="changeLiColor($event)">有图评价(<i>82</i>)</li>
      <li class="tagsLi" @click="changeLiColor($event)">服务好(<i>19</i>)</li>
      <li class="tagsLi" @click="changeLiColor($event)">满意(<i>15</i>)</li>
      <li class="tagsLi" @click="changeLiColor($event)">家人喜欢(<i>9</i>)</li>
      <li class="tagsLi" @click="changeLiColor($event)">包装好(<i>4</i>)</li>
      <li class="tagsLi" @click="changeLiColor($event)">质量好(<i>3</i>)</li>
      <li class="tagsLi" @click="changeLiColor($event)">质量好(<i>3</i>)</li>
    </ul>
  </div>

  <div id="judgeWrap">
    <ol class="judgeOl">

      <li class="judgeLi" v-for="(item,index) in jList">
        <img :src="item.picUrl" alt="" class="pic" />
        <div class="judgeDiv">
          <p class="nikeNameWrap">
            <span class="nikeName">{{item.nickName}}</span>
            <span class="time">{{item.time}}</span>
          </p>
          <p class="dTime">{{item.deliverTime}}</p>
          <p class="comments" v-if="item.comments != ''">
            {{item.comments}}
          </p>

          <div class="images">
            <img :src="ii" alt="" v-for="ii in item.images" v-if="ii !=''" />
          </div>

          <p class="typeWrap" v-if="item.goodsType != ''">
            <img :src="item.typeUrl" />
            <span>{{item.goodsType}}</span>
          </p>

          <p class="tagWrap" v-if="item.commentsTag != ''">
            <img :src="item.tagUrl" />
            <span>{{item.commentsTag}}</span>
          </p>


          <p class="reply" v-if="item.reply !=''">
            {{item.reply}}
          </p>
        </div>
      </li>

    </ol>

  </div>

</main>
</template>

<script>
  export default{
    data(){
      return{
        jList:[]

      }
    },
    mounted(){
      var _this = this;
      this.$http.get('./data/judge.json')
      .then(function (response) {
          console.log(response)
          _this.jList = response.data.judgeList;

        })
        .catch(function (error) {
          console.log(error)
        })

    },
    methods:{
      changeLiColor(e){
        // console.log($(e.target));
        console.log($(e.currentTarget));
        $('.tagsLi').removeClass("tagsLiActive");
        $(e.currentTarget).addClass("tagsLiActive");

      }
    }
  }
</script>

<style scoped>
  #pjMain{
    background-color: #eee;
  }
  .givePointsWrap{
    display:flex;
    padding:0.3rem 0;
    margin-bottom:0.2rem;
    justify-content:space-between;
    background-color:#fff;
  }
  .givePointLeft,
  .givePointCenter,
  .givePointRight{
    padding:0 6%;
    display:flex;
    flex-direction:column;
    text-align:center;

  }
  .givePointCenter{
    border-right:1px solid #e4e4e4;
  }

  .points1,.points2{
    font-size:27px;
  }
  .points1{
    color:#FFB000;
  }
  .points2{
    color:#999;
  }
  .pointsDesc1,.pointsDesc2{
    color:#999;
    font-size:12px;
  }

  #qualityP,#packageP{
    width:100%;
    display:flex;
    align-items:center;
  }
  #qualityP{
    margin:3px 0px 10px;
  }
  #quality,#packages{
    font-size:13px;
    color:#666;
    margin-right:0.3rem;

  }
  .pointsStarWrap1,.pointsStarWrap2{
    display:inline-block;
    margin-right:0.3rem;
    font-size:0px;
  }
  .pointsStar1,.pointsStar2{
    display:inline-block;
    width:12px;
    height:12px;
    background:url('../../assets/img/starts.png') no-repeat;
    background-position: 40% 5.66%;
    background-size: 126% 379%;

  }
  #pSscore,#qScore{
    font-size: 14px;
    color: #FFB000;
  }


  #tagsWrap{
    background:#fff;
    width:100%;
    border-bottom:1px solid #eee;

  }
  #tagsUl{
    width:100%;
    padding:10px 14px 5px;
    box-sizing:border-box;
    padding-bottom:15px;

  }
  .tagsLi{
    background: #FFF;
    font-size: 13px;
    color: #666;
    display:inline-block;
    border:1px solid #bbb;
    border-radius: 26px;
    padding:3px 12px;
    margin:5px;
    vertical-align:middle;
    cursor:pointer;
  }
  .tagsLiActive{
    color: #FFB000;
    border-color: #FFB000;
  }

  #judgeWrap{
    background:#fff;
    width:100%;

  }
  .judgeOl{
    width:100%;
    padding:0 15px;
    overflow:hidden;
    box-sizing:border-box;
  }
  .judgeLi{
    width:100%;
    display:flex;
    padding:15px 15px 10px 0px;

  }

  .pic{
    width:0.8rem;
    height:0.8rem;
    border-radius: 50%;
    margin-right:0.28rem;
  }
  .judgeDiv{
    width:calc(100% - 1.1rem);
  }
  .nikeNameWrap{
    display:flex;
    justify-content:space-between;
    align-items:center;
  }

  .nikeName{
    color:#2F2F2F;
    font-size:16px;

  }
  .time{
    color:#898989;
    font-size:12px;

  }
  .dTime{
    color:#666;
    font-size:12px;
    margin-top:5px;

  }
  .comments{
    color:#2F2F2F;
    font-size:14px;
    padding:14px 0 8px;
  }
  .images{
    width:100%;
    display:flex;
    flex-wrap:wrap;
  }
  .images img{
    width:80px;
    height:80px;
    margin-right:4px;
  }
  .reply{
    width:100%;
    background: #f4f4f4;
    color:#666;
    border-radius:1px;
    padding:5px 8px;
    word-break:break-all;
    box-sizing:border-box;
    margin:10px 0;
    font-size:12px;
    line-height:16px;
  }

 .typeWrap,
 .tagWrap{
  width:100%;
  margin:4px 0px;
 }


 .typeWrap img,
 .tagWrap img{
    width:12px;
    height:12px;
    margin-right:10px;

 }
 .typeWrap span,
 .tagWrap span{
  color:#999;
  font-size:12px;

 }





</style>
