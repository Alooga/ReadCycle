<template>

<div ref="sliderContainer" class="flex flex-col justify-center items-center bg-[#E3F6F8] py-60 px-5 md:p-40 w-full h-auto gap-5">
    <h3 class="text-[2rem] text-primary leading-[3rem] font-semibold font-serif md:text-4xl md:p-8 lg:text-6xl lg:p-5" for="keyword">Buscar tu libro</h3>
   <div
        id="buscador_top"
        class="md:flex relative border border-3 border-[#2A9AAA] rounded-full w-[350px] md:w-[500px] ">
      
        <input
          v-model="keyword"
          type="text"
         class="w-full bg-white px-5 py-3 outline-none rounded-full "
          placeholder="Escribe título, autor o género"
        />
        

        <button 
        @click="searchBook"
        class="absolute right-0 top-0 bottom-0 bg-[#2A9AAA] text-white px-4 rounded-r-full"
        >🔎</button>
      </div>
  </div>
 

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-10">
        <BookCard
          v-for="book in books"
          :key="book.isbn"
          :book="book"
        />
      </div>
</template>


<script>
import { mapActions, mapState } from 'pinia'
import { useUsersBooksStore  } from '../store/usersBooksStore.js'
import BookCard from "../components/BookCard.vue";

export default {
    name: "SearchBook",
    components: {BookCard},
    data() {
        return {
            keyword:"",
            books: [],
        }
    },
    computed: {
        ...mapState(useUsersBooksStore,['usersBooks']),

    },
    mounted() {
     
    },

    methods:{
      searchBook(){
          console.log(this.usersBooks)
            this.books = this.usersBooks.filter(book => 
            book.title.toLowerCase().includes(this.keyword.toLowerCase()))
            console.log(this.books)
           
        }

    },
}
</script>


<style>
</style>