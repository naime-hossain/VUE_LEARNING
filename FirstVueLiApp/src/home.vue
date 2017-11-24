<template>
   <div class="col">
       <showName :key='Name' v-for="Name in 5"></showName>
   </div>
</template>
<script>
import AllName from './AllName.vue';
export default {
components: {
    'showName':AllName
}
}
</script>
