<template>
  <div>
    <ul>
      <li v-for="(item,index) in student">
        <p>{{item.name}}</p>
        <p>{{item.age}}</p>
        <p>{{item.sex}}</p>
      </li>

    </ul>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        student:[]
      }
    },
    mounted(){
      var _this = this;
      this.$http.get('./data/data.json')
        // , {
          // params: {
          //   user: 12345,
          //   pass:123
          // }
        // })
        .then(function (response) {
          console.log(response)
          _this.student = response.data.student

        })
        .catch(function (error) {
          console.log(error)
        })
        .then(function () {
          // always executed
        });
    }
  }
</script>
