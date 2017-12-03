<template>
   <div class="row">
       <div class="col-sm-12">
           
    <div class="progress">
        <div class="progress-bar progress-bar-success progress-bar-striped"
         role="progressbar" aria-valuenow="" aria-valuemin="" aria-valuemax="" 
         :style="{width:(quoteCount/maxQuote)*100+'%'}">
            <span class="sr-only">  % Complete</span>
            {{quoteCount}}/{{maxQuote}}
        </div>
    </div>

       </div>
   </div>
</template>
<script>
    export default {
        props: ['quoteCount','maxQuote']
    }
</script>
