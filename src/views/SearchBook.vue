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

      <div>
        <BookCard
      v-for="bookS in books"
      :key="bookS.isbn"
      :book="bookS"
    />
      </div>
</template>


<script>
import { mapActions, mapState } from 'pinia'
import { useUsersBooksStore  } from '../store/usersBooksStore.js'


export default {
    name: "SearchBook",
    data() {
        return {
            keyword:"",
        }
    },
    computed: {
        ...mapState(useUsersBooksStore,['usersBooks']),

    },

    methods:{
        searchBook(){
            const books = this.usersBooks.filter(book => book.title.includes(this.keyword) ||book.author.includes(this.keyword))
            return this.books
        }

    },
}
</script>


<style>
</style>