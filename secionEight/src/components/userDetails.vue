<template>
<div class="wrap">
  <h3>You may view the user details here</h3>
  <p>User name: {{name}}</p>
  <p>My age is {{myAge}}</p>
  <hr>
  <button @click="switchName">Switch Name</button>
  <button @click="resetName">Reset Name</button>
  <button @click="resetbyParent()">Reset Name by Parent</button>

</div>
   
</template>
<script>

import {ChildToChilEvent} from '../main.js';
export default {

  //  props:['name'],
  props:{
    name:String,
    resetbyParent:Function,
    myAge:Number,
  },
   methods:{
     switchName(){
        this.name=this.name.split('').reverse().join('');
     },
     resetName(){
       this.name='naime';
       this.$emit('nameWasChanged',this.name);
     }
   },
   created(){
     ChildToChilEvent.$on('agewasChangedbychild',(age)=>{
       this.myAge=age;
     });
   }

   
}
</script>
<style scoped>
 .wrap{
     background:#00BCD4;
      min-height: 400px
 }
</style>

