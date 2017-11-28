<template>
<div class="wrap">
    <h1>This is User Component</h1>
    <p>I am an awesome user</p>
    <p>Age is {{age}}</p>
    <button @click="changeMyName">Change my name</button>
    <hr>
<div class="col-md-6">
    <user-details 
    :name="name" 
    @nameWasChanged="name= $event" 
    :resetbyParent="resetFn"
    :myAge="age"></user-details>
   </div>
   <div class="col-md-6">
       <user-edit :myAge="age"
       @agewasChanged="age=$event"></user-edit>
   </div>
</div>
   
</template>
<script>

import UserDetails from './userDetails.vue';
import UserEdit from './userEdit.vue';
export default {
    data:function () {
    return {
      show:false,

      name:'Naime Hossain',
      age:24,
    }
  },
  components: {
      'user-details':UserDetails,
      'user-edit':UserEdit,
  },
  methods:{
      changeMyName(){
          this.name='md.naime hossain'
      },
      resetFn(){
            this.name='Naime Bhuiyan';
      }
  }
   
}
</script>
<style scoped>
  .wrap{
      background: #fff;
      overflow: hidden;
  }
  div{
      overflow: hidden;
  }
</style>

