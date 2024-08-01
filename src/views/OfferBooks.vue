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

    <button v-on:click="registerBook" class="border-2">Registrar</button>

  </div>

    <div>
        <ApiBookCard @bookselected="saveIsbnBook" :books="books"></ApiBookCard>
       
    </div>
</template>



<script>
import { mapState } from 'pinia'
import { mapActions } from 'pinia'
import { useApiStore } from '../store/apiBooksStore.js'
import { useUsersStore } from '../store/usersStore.js'
import { useUsersBooksStore } from '../store/usersBooksStore.js'
import ApiBookCard from '../components/ApiBookCard.vue'


export default {
  name: "OfferBooks",
  components: {ApiBookCard},
 

  data(){
    return {
        keyWord:"",
        isbnBook:"",
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
    ...mapState(useUsersBooksStore, ['usersBooks']),
    
   

  },
  methods: {
    ...mapActions(useApiStore, ['getBooksByKeyWord', 'clearBooks']),

    findBooks(){
        this.getBooksByKeyWord(this.keyWord)
        console.log(this.keyWord)
  },
  
  // esta funcion sirve para guardar el isbn del libro que quiero guardar en mi base de datos
  saveIsbnBook(book){
    this.isbnBook = book.volumeInfo.industryIdentifiers[0].identifier
    this.showInputs = true
    console.log(this.isbnBook)
  },

 
  registerUser() {
    // Variables para acceder al userStore
    const usersStore = useUsersStore();
    const users = usersStore.users;

    //comprobación de usuario existente
    const existingUser = users.find(user => user.email === this.email);

    //si existe usuario, recuperar ID para guardar el libro
    if (existingUser){
      this.idUser = existingUser.id

      //comprobación por consola
      console.log("esta en la base de datos")
      console.log(this.idUser)

    //si no existe crearlo autoincrementando el Id más alto   
    } else {
        //comprobación por consola
        console.log("NO esta en la base de datos")

        //Busqueda de último ID para incrementarlo y asignarlo al nuevo usuario
        let ultimoId = Math.max(...users.map(obj => obj.id));
        this.idUser = ultimoId +1;
        //Carga de nuevo usuario en el array
        users.push({
            id: this.idUser,
            name: this.userName,
            email: this.email,
            location: this.location
        })
        //comprobación por consola
        console.log(users)
    } 
   
  },
  registerBook(){
    //llamo al metodo para comprobar si el usuario existe o no
    this.registerUser()

    const usersBooksStore = useUsersBooksStore();
    const usersBooksPush = usersBooksStore.usersBooks;

    //Ingreso todos los valores en mi BD de books registrados
    usersBooksPush.push({
      isbn: this.isbnBook,
      userId: this.idUser,
      available: true
    })
    //comprobación por consola
    console.log(this.usersBooks)

     //Vaciar variables
     this.resetFields();
  },

  //metodo para resetear las variables
  resetFields (){
    this.keyWord = "";
    this.isbnBook = "";
    this.idUser = "";
    this.userName ="";
    this.email = "";
    this.location = "";
    this.showInputs = false;
    this.clearBooks();

  }

}
}
</script>