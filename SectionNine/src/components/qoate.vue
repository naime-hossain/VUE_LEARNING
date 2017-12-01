<template>
<div>
  <section class="title">
   <slot name="title"></slot>
   <span style="color:#607D8B"><slot  name="subtitle">The subtitle goes here</slot></span>
    
  </section>

   <section class="contents">
   <slot name="content"></slot>
    
  </section>
  
</div>
</template>

<script>

export default {

  data () {
    return {
     
    }
  },
  components: {
   
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
    background: #41b883;
    margin: 30px auto;
    box-shadow: 1px 1px 1px 1px #4caf5094;
    padding: 20px 30px;
    border-radius: 5px;
      min-height: 250px;

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
