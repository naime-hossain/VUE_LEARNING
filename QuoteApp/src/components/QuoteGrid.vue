<template>
   <div class="row">
 
        <quote v-for="(quote,index) in quotes" :key="quote" @click.native="DeleteQuote(index)">
          <p>{{quote}}</p>
      </quote>
   </div>
</template>
<script>
    import Quote from './Quote.vue';
    export default{
       props: ['quotes'],
       components: {
           quote:Quote,
       },
       methods:{
           DeleteQuote(index){
               this.$emit('QuoteDeleted',index);
           }
       }
    }
</script>
