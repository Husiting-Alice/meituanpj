<template>
  <div>
    <!-- <h1>{{msg}}</h1> -->
    <!-- <view-router></view-router> -->
    <router-view></router-view>

    <!-- <router-link to="/login">login</router-link> -->
  </div>
</template>

<script>
   // 有占位符的时候才需要这样写
  // import login from './components/login/login.vue'
  export default {

    data () {
      return {
        // msg: '11111111111111'
        //
      }
    }
  }
</script>
