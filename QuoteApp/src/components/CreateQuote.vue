<template>
<div class="row">


   <div class="col-md-8 col-md-offset-2">
    <form  method="POST" role="form"  v-on:submit.prevent="CreateQuote">
      <legend>Add New Quote</legend>
    
      <div class="form-group">
        <label for="">WHats your quote?</label>
        <input required v-model="newQuote" type="text" class="form-control" id="" placeholder="Input field">
      </div>
    
      
    
      <button type="submit" class="btn btn-primary">Add New Quote</button>
    </form>
   </div>
   </div>
</template>
<script>
    export default{
        data () {
            return {
                newQuote:"this",

            }
        },
        props: ['quotes'],
        methods:{
            CreateQuote(){
                // this.quotes.push(this.newQuote);
                this.$emit('quotesAdded',this.newQuote);
                this.newQuote="";

            }
        }
    }
</script>
