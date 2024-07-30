<template>

<div>
    <label for="keyword">Qué libro quieres ofrecer?</label>
    <input type="keyword" v-model="keyWord" class="border-2 w-40 m-3" name="keyword" placeholder="Libro/Autor">
    <button v-on:click="findBooks" class="border-2">Buscar</button>
  
  </div>
  <div v-if="showInputs">
    <label for="username"></label>
    <input name="username" type="userName" class="border-2 w-40 m-3" placeholder="Nombre" v-model="userName">
    <label for="email"></label>
    <input name="email" type="email" class="border-2 w-40 m-3" placeholder="Email" v-model="email">
    <label for="location"></label>
    <input name="location" type="location" class="border-2 w-40 m-3" placeholder="Ubicación" v-model="location">

    <button v-on:click="" class="border-2">Registrar</button>

  </div>

  <!-- solo campos necesarios -->
  <div v-for="book in books" key="book.id" class="p-3">
   <div v-on:click="saveIdBook(book)">
    <!-- <card> -->
        <p>Titulo: {{ book.volumeInfo.title }}</p>
        <!-- hay que quitarlo del array, deberiamos hacer otro for? -->
        <p>Autor/es: {{ book.volumeInfo.authors }} </p>
        <p>Fecha de Publicación: {{ book.volumeInfo.publishedDate }}</p>
        <p>Descripción: {{ book.volumeInfo.description }}</p>
    <!-- </card> -->
   </div>
  </div>
</template>



<script>
import { mapState } from 'pinia'
import { mapActions } from 'pinia'
import { useApiStore } from '../store/apiBooksStore.js'
import card from '../components/BookCard.vue'


export default {
  name: "OfferBooks",
  components: {card},

  data(){
    return {
        keyWord:"",
        idBook:"",
        showInputs: false,
        userName:"",
        email:"",
        location:"",
   
  }
  },
  computed: {
    ...mapState(useApiStore, ['books']),
  },
  methods: {
    ...mapActions(useApiStore, ['getBooksById', 'getBooksByKeyWord']),

    findBooks(){
        this.getBooksByKeyWord(this.keyWord)
        console.log(this.keyWord)
  },

  saveIdBook(book){
    this.idBook = book.id
    this.showInputs = true
  },
}
}
</script>