<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
  <knowName>
        </knowName>
 
  </div>
</template>

<script>
export default {
  name: 'app',
  data:function () {
    return {
      msg: 'Welcome to My Vue.js App'
    }
  },

}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
