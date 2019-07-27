<template>
  <main id="entranceListMain">
    <!-- Ctrl键+E建 -->
    <ol id="listOl">
      <li>
        <router-link to="/index" class="listLiLink">
          <i class="iconfont bg1">&#xe61c;</i>
          <span class="listLiSpan">美食</span>
        </router-link>
      </li>

      <li>
        <router-link to="/index" class="listLiLink">
          <i class="iconfont bg2">&#xe66c;</i>
          <span class="listLiSpan">猫眼电影</span>
        </router-link>
      </li>

      <li>
        <router-link to="/index" class="listLiLink">
          <i class="iconfont bg3">&#xe655;</i>
          <span class="listLiSpan">酒店</span>
        </router-link>
      </li>

      <li>
        <router-link to="/index" class="listLiLink">
          <i class="iconfont bg4">&#xe675;</i>
          <span class="listLiSpan">休闲娱乐</span>
        </router-link>
      </li>


      <li>
        <router-link to="/index" class="listLiLink">
          <i class="iconfont bg5">&#xe622;</i>
          <span class="listLiSpan">外卖</span>
        </router-link>
      </li>

      <li>
        <router-link to="/index" class="listLiLink">
          <i class="iconfont bg6">&#xe6a8;</i>
          <span class="listLiSpan">KTV</span>
        </router-link>
      </li>

      <li>
        <router-link to="/index" class="listLiLink">
          <i class="iconfont bg7">&#xe7d4;</i>
          <span class="listLiSpan">周边游</span>
        </router-link>
      </li>

      <li>
        <router-link to="/index" class="listLiLink">
          <i class="iconfont bg8">&#xe600;</i>
          <span class="listLiSpan">丽人</span>
        </router-link>
      </li>

      <li >
        <router-link to="/index" class="listLiLink">
          <i class="iconfont bg9">&#xe613;</i>
          <span class="listLiSpan">小吃快餐</span>
        </router-link>
      </li>

      <li>
        <router-link to="/index" class="listLiLink">
          <i class="iconfont bg10">&#xe637;</i>
          <span class="listLiSpan">全部分类</span>
        </router-link>
      </li>
    </ol>
  </main>

<!-- 五种Sublime text 3同时快速编辑多行内容
2017年10月11日 16:05:08 Felicity_Gao 阅读数 1924
具体的五种方式：
1，鼠标选中多行，按下 Ctrl Shift L (Command Shift L) 即可同时编辑这些行；
2，鼠标选中文本，反复按 CTRL D (Command D) 即可继续向下同时选中下一个相同的文本进行同时编辑；
3，鼠标选中文本，按下 Alt F3 (Win) 或 Ctrl Command G(Mac) 即可一次性选择全部的相同文本进行同时编辑；
4，Shift 鼠标右键 (Win) 或 Option 鼠标左键 (Mac) 或使用鼠标中键可以用鼠标进行竖向多行选择；
5，Ctrl 鼠标左键(Win) 或 Command 鼠标左键(Mac) 可以手动选择同时要编辑。 -->
</template>
<script>
  export default{
    data(){
        return{
          // list:'这是list。。。'
        }
    }
  }
</script>

<style scoped>
#listOl{
  width:100%;
  display:flex;
  flex-wrap:wrap;
  background-color:#fff;

}
#listOl li{
  cursor:pointer;
  width:20%;
  margin:.2rem 0;



}
.listLiLink{
  color:#fff;
  display:flex;
  flex-direction:column;
  text-align:center;
  text-decoration:none;
  align-items:center;
}
.listLiLink i{
  padding:.02rem;
  width: .8rem;
  height: .8rem;
  line-height:.8rem;
  border-radius:50%;
  font-size:.5rem;
  margin-bottom: .14rem;

}
.listLiSpan{
  font-size: .24rem;
  color: #666;
}
.bg1,.bg5,.bg9{
  background-color:#fd9d21;
}
.bg2{
  background-color:#ff6767;
}
.bg3{
  background-color:#8a90fa;
}
.bg4,.bg6{
  background-color:#fed030;
}

.bg7{
  background-color:#4dc6ee;
}
.bg8{
  background-color:#ff80c2;
}

.bg10{
  background-color:#00d3be;
}

</style>
