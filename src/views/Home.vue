<template>
  <div>
   
  </div>

 <Slider/>

 <h3 class="font-serif text-[2rem] font-bold mt-14 mb-10">Últimos libros</h3>
 <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-10">
    <BookCard v-for="(book, index) in books.slice(0, 6)" :key="index" :bookIndex="index" />
  </div>
</template>



<script>
import { ref } from 'vue'
import Slider from "../components/Slider.vue"
import BookCard from "../components/BookCard.vue"
import { useApiStore } from '../store/apiBooksStore'
import { useUsersStore } from '../store/usersStore';
import { useUsersBooksStore } from '../store/usersBooksStore';


export default {
  name: "Home",
  components:{
    BookCard, Slider,
  },
  computed: {
    books() {
      const store = useApiStore();
      return store.books;
    }
  },
  mounted() {
    const store = useApiStore();
    store.getBooksByKeyWord('programming'); // Cambia 'programming' por el keyword que prefieras
  }
};
</script>


<style >

</style>
