<template>
<div class="wrap">
  <h3>You may view the user details here</h3>
  <p>User name: {{name}}</p>
  <hr>
  <button @click="switchName">Switch Name</button>
</div>
   
</template>
<script>


export default {

  //  props:['name'],
  props:{
    name:String
  },
   methods:{
     switchName(){
        this.name=this.name.split('').reverse().join('');
     }
   }

   
}
</script>
<style scoped>
 .wrap{
     background:#00BCD4;
      min-height: 400px
 }
</style>

