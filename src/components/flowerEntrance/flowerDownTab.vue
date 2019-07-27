<template>
  <main id="dropdownWrap" v-show="this.$store.state.flowertabshow">
    <section class="fropdownLeft">
      <ul id="fropdownLeftUl">
        <li v-for="(item,index) in dropdownlist" @click="changeTab(index,$event)">
          <router-link to="">
            <!-- {{item}} -->
            {{item.title}}

            <span id="totalNumber">
              {{item.arr[0].num}}
            </span>

          </router-link>
        </li>
      </ul>
    </section>

    <section class="fropdownRight">
      <ul id="fropdownRightUl">
        <li v-for="(item,index) in my">
          <router-link to="">

            <!-- {{rText}} -->
            {{item.text}}
            <span id="itemNumber">
              {{item.num}}
              <!-- {{rNum}} -->
            </span>

          </router-link>
        </li>
      </ul>
    </section>
  </main>

</template>

<script>

  export default{
    data(){
      return{
        dropdownlist:[],
        rText:'',
        rNum:0,
        ii:0,
        my:[]

      }
    },
    mounted(){
      var _this = this;
      this.$http.get('./data/flowerDownTab.json')
      .then(function(response){
        console.log(response)
        _this.dropdownlist = response.data.lists;
        _this.my=_this.dropdownlist[_this.ii].arr

      })
      .catch(function(error){
        console.log(error)
      })

    },
    methods:{
      changeTab(index,e){
        console.log(e.currentTarget);
        $(e.currentTarget).siblings('li').children('a').removeClass("setLiActive");
        $(e.currentTarget).children('a').addClass("setLiActive");
        $(e.currentTarget).siblings('li').children('a').children('span').removeClass("setLiActive");
        $(e.currentTarget).children('a').children('span').addClass("setLiActive");
        console.log('index= '+index);
        this.ii = index;
        this.my=this.dropdownlist[this.ii].arr
        //{{item.title}}  {{item.arr[0].num}}

        // this.rText = this.dropdownlist[index].title;
        // this.rNum = this.dropdownlist[index].arr.num;

      }

    }

  }
</script>

<style scoped>
  .setLiActive{
    color: #FFB000 !important;
    font-weight: 600 !important;
  }

  .fropdownLeft{
    width:45%;
    background-color:#F4F4F4;
    float:left;

  }

  #fropdownLeftUl,#fropdownRightUl{
    width:100%;
    height:100%;
    overflow-y:auto;
    max-height:450px;

  }
  #fropdownLeftUl::-webkit-scrollbar{
    display:none;
  }
  #fropdownLeftUl::-o-scrollbar{
      display:none;
  }
  #fropdownRightUl::-webkit-scrollbar{
    display:none;
  }
  #fropdownRightUl::-o-scrollbar{
      display:none;
  }

  #fropdownLeftUl li,
  #fropdownRightUl li{
    padding: 0 15px;
    line-height:42px;
    cursor:pointer;
  }
  #fropdownLeftUl li a,
  #fropdownRightUl li a{
    color:#333;
    font-size:0.28rem;
    text-decoration:none;

  }
  #totalNumber,
  #itemNumber{
    color:#999;
    font-size:12px;
    float:right;
  }
  .fropdownRight{
    width:55%;
    overflow-y:auto;
    max-height:450px;
    background-color:#fff;
    float:left;

  }

</style>
