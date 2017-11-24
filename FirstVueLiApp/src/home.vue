<template>
   <div class="col">
       <p>Hello Mr./Mrs {{name}}</p>
       <hr>
       <button @click="knowTheStranger">Know the name</button>
   </div>
</template>
<script>
export default {
    data:function () {
    return {
      name: 'unkmown'
    }
  },
       methods:{
           knowTheStranger(){
               this.name='Naime Hossain'
           }
       }
}
</script>
