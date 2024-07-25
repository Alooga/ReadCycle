<template>
  <div>
    <h1>Home</h1>
    <p>Aqui sera la vista principal</p>
   
  </div>

  <div>
    <input type="keyword" v-model="keyWord" class="border-2 w-40 m-3">
    <button v-on:click="getBooksByKeyWord" class="border-2">Buscar</button>
  
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

  <!-- consulta completa -->
  <!-- <div>

    {{ libros}}
    
  </div> -->

</template>


<script>
import { ref } from 'vue'
// import { methods } from '../api/apiBooks.js'

export default {
  name: "Home",
  data() {
    return {
      keyWord:"",
      libros: [],
    };
  },
  created () {},
  methods: {
    getBooksByKeyWord(){
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.keyWord}`)
    .then((resultado) => {
        if(!resultado.ok) throw new Error("Hay un error " + resultado.status + errorMsj)
        return resultado.json()
      })
      .then((datos) =>{
        this.movies = datos
        this.loading = false
        this.libros = datos

      })

      .catch((error) =>{
        this.errorMsj = error
        this.loading = false
      })
    },
  }
};



</script>

<style >

</style>
