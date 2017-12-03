<template>
  <div id="app" class="container">
    <app-header :quoteCount="quotes.length" :maxQuote="maxQuote"></app-header>
    <create-quote :quotes="quotes" @quotesAdded="AddQuote"></create-quote>
   <quote-grid :quotes="quotes" @QuoteDeleted="deleteQuote"></quote-grid>
    <div class="row">
       <div class="alert alert-info text-center">
      <p>Click on the quote to delete it</p>
       </div>
    </div>
  </div>
</template>

<script>
import CreateQuote from './components/CreateQuote.vue';
import QuoteGrid from './components/QuoteGrid.vue';
import Header from './components/Header.vue';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      quotes:[
        'This is a simple placeholder Quote',
   
      ],
      maxQuote:10
    }
  },
  methods:{
    AddQuote(quote){
      if (this.quotes.length>=this.maxQuote) {
        return alert('Please Delete some quote First To add new');
      }
      this.quotes.push(quote);
    },
    deleteQuote(index){
      this.quotes.splice(index,1);
    }
  },
  components: {
    'quote-grid':QuoteGrid,
    'create-quote':CreateQuote,
      appHeader:Header,
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
