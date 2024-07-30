<template>
  <div>
    <h1>Home</h1>
    <p>Aqui sera la vista principal</p>
   
  </div>

  <div>
    <input type="keyword" v-model="keyWord" class="border-2 w-40 m-3">
    <button v-on:click="callGetBooksByKeyWord" class="border-2">Buscar</button>
  
  </div>
  <div class="grid grid-cols-4">
 <BookCard></BookCard>

</div>
  <!-- solo campos necesarios -->
  <div v-for="libro in libros.items" class="p-3">
    <p>Id: {{ libro.id}}</p>
    <p>Titulo: {{ libro.volumeInfo.title }}</p>
    <!-- hay que quitarlo del array, deberiamos hacer otro for? -->
    <p>Autor/es: {{ libro.volumeInfo.authors }} </p>
    <p>Fecha de Publicación: {{ libro.volumeInfo.publishedDate }}</p>
    <p>Descripción: {{ libro.volumeInfo.description }}</p>
    
  </div>

</template>



<script>
import { ref } from 'vue'
import BookCard from "../components/BookCard.vue"
import { getBooksByKeyWord } from '../api/apiBooks.js'
import librosDB from '../db/librosDB.js'

export default {
  name: "Home",
  components:{
    BookCard,
  },
  data() {
    return {
      keyWord:"",
      libros:"",
      errorMsj:"",
      librosData:"",
    };
  },
  created () {
  this.libros = librosDB
  },
 
  methods: {
    callGetBooksByKeyWord() {
       getBooksByKeyWord(this.keyWord)
       .then(data =>{
        this.librosData = data
       })
       .catch((error) =>{
            this.errorMsj = error
        })

    }
   
  }
};



</script>

<style >

</style>
