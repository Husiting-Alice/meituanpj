<template>
  <main id="fNavMain">
    <nav>
      <ul id="navUl">
        <li class="navLi">
          <router-link to="" @click.native="changeActive($event)">
            <span class="liText textActive">浪漫鲜花</span>
            <i class="liLine iActive"></i>
          </router-link>
        </li>

        <li class="navLi">
          <router-link to="" @click.native="changeActive($event)">
            <span class="liText">鲜花蛋糕</span>
            <i class="liLine"></i>
          </router-link>
        </li>

        <li class="navLi">
          <router-link to="" @click.native="changeActive($event)">
            <span class="liText">甜蜜蛋糕</span>
            <i class="liLine"></i>
          </router-link>
        </li>

        <li class="navLi">
          <router-link to="" @click.native="changeActive($event)">
            <span class="liText">免配送费</span>
            <i class="liLine"></i>
          </router-link>
        </li>

        <li class="navLi">
          <router-link to="" @click.native="changeActive($event)">
            <span class="liText">跨天预订</span>
            <i class="liLine"></i>
          </router-link>
        </li>

        <li class="navLi">
          <router-link to="" @click.native="changeActive($event)">
            <span class="liText">特惠预订</span>
            <i class="liLine"></i>
          </router-link>
        </li>

        <li class="navLi" style="padding-right:10px;">
          <router-link to="" @click.native="changeActive($event)">
            <span class="liText">0元起送</span>
            <i class="liLine"></i>
          </router-link>
        </li>

      </ul>
      <span class="downBtn" @click="ifshowTab()">
        <i class="iconbf"></i>
        <router-link to="/flowerDownTab" @click="changeActive($event)">
          <i class="iconfont downIcon">&#xe638;</i>
        </router-link>
      </span>
    </nav>

    <!-- flowerDownTab的内容渲染到这里 -->
    <router-view></router-view>

  </main>
</template>

<script>
  export default{
    data(){
      return{

      }

    },
    mounted(){
      window.addEventListener('scroll', this.handleScrollss, true);
    },
    methods:{
      ifshowTab(){
        this.$store.commit('flowertabtoggleShow');
      },
      handleScrollss(){
        if($(window).scrollTop() >= 40){
          // console.log('111')
          $('nav').css({
            "position":"fixed",
            "top":"0",
            "left":"0"
          })
        }else{
          // console.log('222')
          $('nav').css({
            "position":"static"
          })
        }
      },
      changeActive(e){
        console.log(e.currentTarget);
        $(".navLi a").children("span").removeClass("textActive");
        $(e.currentTarget).children("span").addClass("textActive");

        $(".navLi a").children("i").removeClass("iActive");
        $(e.currentTarget).children("i").addClass("iActive");
      }

    }

  }
</script>

<style scoped>

  .liLine{
    display:inline-block;
    width:20px;
    height:1px;
    position:absolute;
    left:50%;
    transform:translateX(-50%);
    bottom:0;

  }
  .textActive{
    color: #FFB000 !important;
    font-weight: 600 !important;
  }
  .iActive{
    background: #FFB000 !important;
  }

  nav{
    width:100%;
    height:0.8rem;
    line-height:0.8rem;
    display:flex;
    justify-content:space-between;
    flex-wrap:nowrap;
    background: #fafafa;
    z-index:9;

  }
  #navUl{
    width:90%;
    height:100%;
    display:flex;
    overflow-x:auto;
    overflow-y:hidden;
    white-space:nowrap;
    -webkit-overflow-scrolling: touch;
    background: #fafafa;
    z-index:9;
  }
  #navUl::-webkit-scrollbar{
    display:none;
  }
  #navUl::-o-scrollbar{
      display:none;
  }

  .navLi{
    line-height:40px;
    margin:0 10px;
    box-sizing:border-box;
    position:relative;
  }

  .navLi a{
    color:#666;
    font-size:14px;
    text-decoration:none;

  }
  .downBtn{
    display:inline-block;
    text-align:center;
    width:10%;
    background: rgb(250, 250, 250);
    position:relative;
  }
  .downBtn a{
    color:#666;
    width:100%;
    text-decoration:none;
    display:inline-block;
    cursor:pointer;
    background: rgb(250, 250, 250);
  }
  .iconbf{
    display:inline-block;
    width:10px;
    height:100%;
    background-color:red;
    position:absolute;
    left:-10px;
    background: rgba(250, 250, 250, 0.8);
  }

  #fNavMain{
    z-index:5;
  }

</style>
