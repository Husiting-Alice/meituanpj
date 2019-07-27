<template>
  <ul id="indexIconListUl">
    <li class="indexIconListLi">
        <router-link to="/flowerEntrance">
          <img src="../../assets/img/index/1.png"/>
          <p>美食</p>
        </router-link>
    </li>
    <li class="indexIconListLi">
      <router-link to="/flowerEntrance">
        <img src="../../assets/img/index/2.png"/>
        <p>美团超市</p>
      </router-link>
    </li>
    <li class="indexIconListLi">
      <router-link to="/flowerEntrance">
        <img src="../../assets/img/index/3.png"/>
        <p>生鲜果蔬</p>
      </router-link>
    </li>
    <li class="indexIconListLi">
      <router-link to="/flowerEntrance">
        <img src="../../assets/img/index/4.png"/>
        <p>美团专送</p>
      </router-link>
    </li>
    <li class="indexIconListLi">
      <router-link to="/flowerEntrance">
        <img src="../../assets/img/index/5.png"/>
        <p>下午茶</p>
      </router-link>
    </li>
    <li class="indexIconListLi">
      <router-link to="/flowerEntrance">
        <img src="../../assets/img/index/6.png"/>
        <p>汉堡披萨</p>
      </router-link>
    </li>
    <li class="indexIconListLi">
      <router-link to="/flowerEntrance">
        <img src="../../assets/img/index/7.png"/>
        <p>小吃馆</p>
      </router-link>
    </li>
    <li class="indexIconListLi">
      <router-link to="/flowerEntrance">
        <img src="../../assets/img/index/8.png"/>
        <p>家常菜</p>
      </router-link>
    </li>
    <li class="indexIconListLi">
      <router-link to="/flowerEntrance">
        <img src="../../assets/img/index/9.png"/>
        <p>鲜花蛋糕</p>
      </router-link>
    </li>
    <li class="indexIconListLi">
      <router-link to="/flowerEntrance">
        <img src="../../assets/img/index/10.png"/>
        <p>品牌连锁</p>
      </router-link>
    </li>
    <li>


      <!-- <h1>{{$store.state.count}}</h1> -->

      <!-- 这种写法错！！ <button type="button" @click="this.$store.commit('addCount')">点击这里</button> -->

      <!-- <button type="button" @click="addcounts()">点击这里</button> -->
    </li>
  </ul>

</template>

 <script>
   export default{
    data(){
      return{

      }
    }
    // ,
    // methods:{
    //   addcounts(){
    //     this.$store.commit('addCount');
    //     // this.$store.commit('addCount',10)
    //   }
    // }
  }
 </script>

 <style scoped>
   #indexIconListUl{
    width:100%;
    display:flex;
    flex-wrap:wrap;
    margin-top:1rem;
    padding-top:0.32rem;


   }
   .indexIconListLi{

    width:20%;
    display:inline-block;
    text-align:center;
    margin-bottom:0.32rem;
   }
   .indexIconListLi a{
    text-decoration:none;

   }

   .indexIconListLi img{
    width:0.88rem;
    height:0.88rem;
   }
   .indexIconListLi p{
    color:#333;
    font-size:0.24rem;
    margin-top:0.1rem;

   }
 </style>

