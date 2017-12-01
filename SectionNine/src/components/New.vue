<template>
<div>

   <h2>New Quote</h2>
   <button @click="increase++">Increase</button>
   <p>{{increase}}</p>
</div>
</template>

<script>

export default {

  data () {
    return {
     increase:0,
    }
  },
  components: {
   
  },
  destroyed(){
      console.log('Destroyed');
  },
  deactivated () {
      console.log('deactivated');
  },
  activated () {
      console.log('activated');
  }
}
</script>

<style scoped>
div {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #35495e;
    margin-top: 60px;
    background: #009688;
    margin: 30px auto;
    box-shadow: 1px 1px 1px 1px #4caf5094;
    padding: 20px 30px;
    border-radius: 5px;
    min-height: 250px;

}


</style>
