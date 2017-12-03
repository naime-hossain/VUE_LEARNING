<template>
   <div class="col-sm-6 col-md-4 col-lg-3">
       <div class="panel panel-deafault">
          <div class="panel-body">
                <slot></slot>
          </div>
       </div>
   </div>
</template>
<script>

</script>
<style scoped>
  .panel{
     
          color: #333;
    font-family: 'Arizonia';
    font-size: 24px;
    cursor: pointer;
    box-shadow: 1px 1px 1px 0px #337ab7;
    border-radius: 5px;
    margin-top: 30px;

  } 
  .panel:hover{
      background: #e91e631a;
  }
</style>

