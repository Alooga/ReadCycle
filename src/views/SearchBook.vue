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
          placeholder="Escribe título o autor"
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

      
     
      <div class="grid grid-cols-1 md:grid-cols-2  w-full text-left  items-center justify-left md:-mt-28 p-8 md:px-32" v-if="msj == true">
      
      <div class="flex flex-col gap-8 ">
      <h3  class="font-serif text-[2rem] w-full text-left font-bold md:text-[2.5rem] "> No se encontraron libros </h3>
     
      <div  class="flex flex-col md:flex-row justify-left gap-3">
          <button @click="searchFocus" class= "text-primary border-2 border-[#207581] py-2 px-8 rounded-full hover:bg-[#207581] hover:text-[white]">🔎 Buscar otro libro</button>
      </div>
    </div>
      <img class="w-full" src="../images/woman-searching-for-books.svg" alt="Hombre feliz con libro en su mano" />
   
   </div>
   <div ref="bookPublish" class="mt-40">
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
            msj:false,
            
        }
    },
    computed: {
        ...mapState(useUsersBooksStore,['usersBooks']),

    },
    mounted() {
     
    },

    methods:{
      normalizeString(str){
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      },
      
      searchBook(){
          this.resultFocus()

          const lowerKeyword = this.normalizeString(this.keyword.toLowerCase())
            
          this.books = this.usersBooks.filter(book => {
            const searchTitle = this.normalizeString(book.title).toLowerCase().includes(lowerKeyword);
            const searchAuthor = book.author.some(author => this.normalizeString(author).toLowerCase().includes(lowerKeyword));
            const result = (searchTitle || searchAuthor) && book.status === true;
            
          return result
          })

          this.msj = this.books.length === 0;

         
      },

       searchFocus(){
        this.$nextTick(() => {
        this.$refs.sliderContainer.scrollIntoView({ behavior: 'smooth' })
        })
      },

      resultFocus(){
        this.$nextTick(() => {
        if (this.$refs.bookPublish) {
            this.$refs.bookPublish.scrollIntoView({ behavior: 'smooth' });
        }
    });
      }

    },
}
</script>


<style>
</style>