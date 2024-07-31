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

    <div>
        <ApiBookCard @bookselected="saveIdBook" :books="books"></ApiBookCard>
       
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
 

  data(){
    return {
        keyWord:"",
        idBook:"",
        showInputs: false,
        idUser:"",
        userName:"",
        email:"",
        location:"",

        
   
  }
  },
  computed: {
    ...mapState(useApiStore, ['books']),
    ...mapState(useUsersStore, ['users']),
    
   

  },
  methods: {
    ...mapActions(useApiStore, ['getBooksByKeyWord']),

    findBooks(){
        this.getBooksByKeyWord(this.keyWord)
        console.log(this.keyWord)
  },

  saveIdBook(book){
    this.idBook = book.id
    this.showInputs = true
  },

  registerBook(){

  },

  registerUser() {
    if(users.find(email !== users.email)){

        console.log("NO esta en la base de datos")
        let ultimoId = Math.max(...users.map(obj => obj.id));
        this.idUser = ultimoId +1;
        users.push({
            id: this.idUser,
            name: this.userName,
            email: this.email,
            location: this.location
        })
    } else {
        console.log("esta en la base de datos")

    }
  }
}
}
</script>