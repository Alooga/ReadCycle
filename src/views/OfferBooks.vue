<template>

<div>
    <label for="keyword">Qué libro quieres ofrecer?</label>
    <input type="keyword" v-model="keyWord" class="border-2 w-40 m-3" name="keyword" placeholder="Libro/Autor">
    <button v-on:click="findBooks" class="border-2">Buscar</button>
  
  </div>
<p>
    este es mi idBook:
  {{ idBook }}
</p>
  <div v-if="showInputs">
    <label for="username"></label>
    <input name="username" type="userName" class="border-2 w-40 m-3" placeholder="Nombre" v-model="userName">
    <label for="email"></label>
    <input name="email" type="email" class="border-2 w-40 m-3" placeholder="Email" v-model="email">
    <label for="location"></label>
    <input name="location" type="location" class="border-2 w-40 m-3" placeholder="Ubicación" v-model="location">

    <button v-on:click="" class="border-2">Registrar</button>

  </div>


   <div v-on:click="saveIdBook(book)">
    <ApiBookCard></ApiBookCard>
       
   </div>

</template>



<script>
import { mapState } from 'pinia'
import { mapActions } from 'pinia'
import { useApiStore } from '../store/apiBooksStore.js'
import ApiBookCard from '../components/ApiBookCard.vue'


export default {
  name: "OfferBooks",
  components: {ApiBookCard},
  props: ['book'],

  data(){
    return {
        keyWord:"",
        idBook: ApiBookCard.book,
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
    console.log(this.idBook)
    this.showInputs = true
  },
}
}
</script>