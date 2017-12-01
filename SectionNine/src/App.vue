<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button @click="SeletectedComponent='Quote'">Quotes</button>
    <button @click="SeletectedComponent='New'">New</button>
    <button @click="SeletectedComponent='Author'">Author</button>
    <!-- keep alove and  -->
    <keep-alive>
      <component :is="SeletectedComponent"></component>
    </keep-alive>
    <!-- <component :is="SeletectedComponent"></component> -->
   <!-- <Quote>
     <h2 slot="title">This is a Quate</h2>
     <p slot="content">This is description</p>
   </Quote> -->

    
  </div>
</template>

<script>
import Quote from "./components/qoate.vue";
import Author from "./components/Author.vue";
import New from "./components/New.vue";
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      SeletectedComponent:'Quote'
    }
  },
  components: {
    Quote:Quote,
    Author:Author,
    New:New,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
