<template>
  <div>

<div v-for="book in booksForCards" key="book.id">
  {{book.id}}
</div>

<div>
    <input type="keyword" v-model="keyWord" class="border-2 w-40 m-3">
    <button v-on:click="findBooks" class="border-2">Buscar</button>
  
  </div>

  <!-- solo campos necesarios -->
  <div v-for="book in books" class="p-3">
    <p>Id: {{ book.id}}</p>
    <p>Titulo: {{ book.volumeInfo.title }}</p>
    <!-- hay que quitarlo del array, deberiamos hacer otro for? -->
    <p>Autor/es: {{ book.volumeInfo.authors }} </p>
    <p>Fecha de Publicación: {{ book.volumeInfo.publishedDate }}</p>
    <p>Descripción: {{ book.volumeInfo.description }}</p>
  </div>


<!-- estos son los libros de usuarios(array) -->
  {{ usersBooks }}
   
    <!-- <RouterView /> -->
  </div>
</template>

<script>
import Home from './views/Home.vue'
import { mapActions } from 'pinia'
import { mapState } from 'pinia'
import { useUsersBooksStore } from './store/usersBooksStore.js'
import { useUsersStore } from './store/usersStore.js'
import { useApiStore } from './store/apiBooksStore.js'

export default {
  name: "App",
  data(){
    return {
    keyWord:"",

  }
  },
  methods: {
      ...mapActions(useUsersBooksStore, ['booksForCards']),
      ...mapActions(useUsersStore, ['usersData', 'userDataById']),
      ...mapActions(useApiStore, ['getBooksById', 'getBooksByKeyWord']),
      
      findBooks(){
        this.getBooksByKeyWord(this.keyWord)
        console.log(this.keyWord)
      },
      
    },
    computed: {
      ...mapState(useApiStore, ['books']),
      ...mapState(useUsersBooksStore, ['usersBooks']),

      
    },

    mounted(){
      // this.getBooksByKeyWord("1984");
      this.booksForCards()

    }
    

};
</script>

<style>
</style>
