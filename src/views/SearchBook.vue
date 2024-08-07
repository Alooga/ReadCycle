<template>
 <div
        id="buscador_top"
        class="hidden md:flex border border-3 border-[#2A9AAA] rounded-full w-[300px] md:w-[500px] p-3"
      >
        <input
          v-model="keyword"
          type="text"
          class="w-5/6 bg-transparent px-5 outline-none"
          placeholder="Escribe título, autor o género"
        />
        <img
          src="../images/magnifying-glass-solid.svg"
          alt="icono lupa"
          class="h-5 w-1/6 self-center ps-8"
        />

        <button @click="searchBook">Buscar</button>
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