<template>
  <header id="header" class="fHeader">
    <div id="searchWrap">
      <span class="iconfont searchIcon">&#xe62b;</span>
      <input id="searchInput" type="text" name="search" placeholder="请输入商家或商品名称" />
    </div>



  </header>


</template>

<script>
  export default{

  }
</script>

<style scoped>
.fHeader{
  width:100%;
  height:0.8rem;
  padding-top:5px;
  box-sizing:border-box;
  background: #fafafa;
  z-index:3;
}
#searchWrap{
  width:calc(100% - 0.4rem);
  margin:0 auto;
  height:0.6rem;
  line-height:0.6rem;
  border-radius:15px;
  display:flex;
  background: #e4e4e4;

}
.searchIcon{
  width:0.3rem;
  height:0.3rem;
  display:inine-block;
  margin:0 0.1rem 0 0.2rem;

}
#searchInput{
  height:100%;
  width:calc(100% - 0.76rem);
  border-radius:20px;
  border:none;
  outline:none;
  vertical-align:middle;
  background: #e4e4e4;
  font-size: 14px;

}

</style>
