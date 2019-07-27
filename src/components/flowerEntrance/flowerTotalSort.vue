<template>
  <ul class="totalsortUl" v-show="this.$store.state.flowernavsortfiltshow">
    <li class="totalsortLi" style="border:none;" id="square1Father">
      <span id="square1"></span>
      <router-link to="">
        综合排序
      </router-link>
    </li>
    <li class="totalsortLi">
      <router-link to="">
        速度最快
      </router-link>
    </li>
    <li class="totalsortLi">
      <router-link to="">
        评分最高
      </router-link>
    </li>
    <li class="totalsortLi">
      <router-link to="">
        起送价最低
      </router-link>
    </li>
    <li class="totalsortLi">
      <router-link to="">
        配送费最低
      </router-link>
    </li>
    <li class="totalsortLi">
      <router-link to="">
        人均高到低
      </router-link>
    </li>
    <li class="totalsortLi">
      <router-link to="">
        人均低到高
      </router-link>
    </li>
  </ul>
</template>

<script>
  export default{
    data(){
      return{

      }
    }
  }
</script>

<style scoped>
 .totalsortUl{
  width:100%;
  background-color:#fff;
 }
 .totalsortLi{
  border-top:1px solid #eee;
  padding-left:0.3rem;
  height:0.84rem;
  line-height:0.84rem;


 }
 .totalsortLi a{
  color:#333;
  font-size:0.28rem;
  text-decoration:none;

 }
 #square1Father{
  position:relative;
 }
 #square1{
  position:absolute;
  border-top:1px solid #e4e4e4;
  border-left:1px solid #e4e4e4;
  top:-2px;
  left:9%;
  display:inline-block;
  width:8px;
  height:8px;
  transform:rotate(45deg) translateY(-50%);
  background-color:#fff;
 }



</style>
