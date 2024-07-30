<template>
  <div>
   
  </div>

 <Slider/>

 <BookCard/>



</template>



<script>
import { ref } from 'vue'
import BookCard from "../components/BookCard.vue"
import Slider from "../components/Slider.vue"



export default {
  name: "Home",
  components:{
    BookCard, Slider,
  },
  data() {
    return {
   
    };
  },


};



</script>

<style >

</style>
