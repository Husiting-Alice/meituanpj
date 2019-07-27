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
      const jsonp = require('jsonp');

      jsonp('../../data/test.php', null, (err, data) => {
        if (err) {
          console.error(err.message);
        } else {
          console.log(data);
        }
      });
    }

  }
</script>
