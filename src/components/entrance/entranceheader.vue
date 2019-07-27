<template>
  <main id="entranceHeaderMain">
     <!-- {{header}} -->
     <header id="header" class="header">
        <section id="headerLeft">
          <span>广州</span>
          <i class="iconfont">&#xe638;</i>
        </section>

        <div id="headerCenter">
          <i class="iconfont">&#xe62b;</i>
          <span>输入商家/品类/商圈</span>
        </div>

        <section id="headerRight">
          <router-link to="./login">
            <i class="iconfont" id="myIcon" style="font-size:0.4rem;">&#xe617;</i>
            <span>我的</span>
          </router-link>

        </section>
     </header><!-- /header -->
  </main>
</template>


<script>

export default{
  data(){
    return{
      // header:'这是header。。。.......'
    }
  }
}


</script>

<style scoped>
  header{
    width:100%;
    height:1.01rem;
    background: #06c1ae;
    border-bottom: 1px solid #21897d;
    color:white;
    display:flex;
    flex-wrap:nowrap;
    text-align:center;
    justify-content:space-between;
  }
  #headerLeft{
    height:100%;
    line-height:1.01rem;
    font-size:0.32rem;
    padding:0 0.2rem;


  }
  #headerCenter{
    background-color:#05a494;
    color:#68d0b4;
    width:66%;
    height:0.61rem;
    line-height:0.61rem;
    margin-top:0.2rem;
    border-radius:0.06rem;
    font-size: .26rem;
    text-align:left;
    padding-left:0.1rem;

  }
  #headerRight{
    padding-top:0.2rem;
    vertical-align:center;
    width:0.94rem;

  }
  #headerRight a{
    display:flex;
    flex-direction:column;
    font-size:0.2rem;
    color:#fff;
    text-decoration:none;

  }

</style>


