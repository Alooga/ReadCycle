<template>
  <div>
   
  </div>

 <Slider/>

 <h3 class="font-serif text-[2rem] font-bold mt-14 mb-10">Últimos libros</h3>
 <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-10">
    <BookCard  v-for="userBook in usersBooks" 
      :key="userBook.isbn" 
      :book="userBook"
    />
  </div>
</template>



<script>
import Slider from "../components/Slider.vue"
import BookCard from "../components/BookCard.vue"
import { useUsersBooksStore } from '../store/usersBooksStore';
import { onMounted, computed } from 'vue';



export default {
  components: {
    BookCard, Slider,
  },
  setup() {
    const usersBooksStore = useUsersBooksStore();

    onMounted(() => {
      usersBooksStore.booksForCards();
    });

    const usersBooks = computed(() => usersBooksStore.usersBooks);

    return {
      usersBooks
    };
  }
};
</script>
