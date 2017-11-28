<template>
<div class="wrap">
  <h3>You may edit the user details here</h3>
  <p>Age is {{myAge}}</p>
  <button @click="changeAge">edit age</button>
  <button @click="changeAgeChildToChild">edit age not in parent</button>
</div>
   
</template>
<script>

import {ChildToChilEvent} from '../main.js';
export default {
  
   props:{
        myAge:Number,
      },
      methods:{
        changeAge(){
          this.myAge=23;
          this.$emit('agewasChanged',this.myAge);
          
        },
          changeAgeChildToChild(){
          this.myAge=23;
          // ChildToChilEvent.$emit('agewasChangedbychild',this.myAge);
          ChildToChilEvent.changeAge(this.myAge);
          
        },
      }

   
}
</script>
<style scoped>
 .wrap{
     background:#03A9F4;
     min-height: 400px
 }
</style>