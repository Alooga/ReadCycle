<template>

<div ref="sliderContainer" class="flex flex-col justify-center items-center bg-[#E3F6F8] py-44 px-5 md:p-36 w-full h-auto gap-5">
    <label class="text-[2.3rem] text-primary leading-[3rem] font-semibold font-serif md:text-5xl md:p-8 lg:text-6xl lg:p-5" for="keyword">¿Qué libro quieres ofrecer?</label>
    <input type="keyword" v-model="keyWord" class="bg-white px-5 outline-none border-3 border-[#2A9AAA] rounded-full p-3 w-full md:w-1/3 text-center focus:bg-white" name="keyword" placeholder="Escribe título, autor o género">
    <button v-on:click="findBooks"  class= "text-primary border-2 border-[#207581] mt-5 py-2 px-8 rounded-full hover:bg-[#207581] hover:text-[white]">Buscar</button>
  
  </div>

  <!-- Información del libro seleccionado -->
  <div v-if="selectedBook && !saveok" class="flex flex-col justify-center items-center w-full md:flex-row px-5 p-5 md:p-28 gap-5" ref="formContainer">
      <div class="flex flex-col gap-5 p-8 justify-center self-center  py-5 w-full">
        <h1 class="w-full font-regular text-md">Has seleccionado el libro:</h1>
        <p class="font-serif font-bold text-2xl"> {{ selectedBook.volumeInfo.title }}</p>
        <img
              class="max-w-200px] h-auto object-contain self-center"
              :src="selectedBook.volumeInfo.imageLinks?.thumbnail"
              alt=""
            />
        
      </div>
      <div class="text-left flex flex-col gap-5 justify-center items-center w-full p-6">
        <input name="username" type="text" class="border-2 w-full py-3 px-5 rounded-full focus:border-[#007B7F]" placeholder="Escribe tu nombre" v-model="userName">
        <input name="email" type="email" class="border-2 py-3 w-full px-5 rounded-full" placeholder="Email" v-model="email">
        <input name="location" type="text" class="border-2 py-3 px-5 rounded-full w-full" placeholder="Ubicación" v-model="location">
        <button @click="registerBook" class="bg-[#207581] rounded-[2rem] text-white w-full py-3 hover:bg-[#115D67] px-5">Registrar</button>
      </div>
    </div>

  <p class="mt-10" v-if="errors.length">
    <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>

    <div >
        <ApiBookCard class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-10" @bookselected="saveIsbnBook" :books="books"></ApiBookCard>
       
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2  w-full text-center  items-center justify-center -mt-10 p-5" v-if="saveok">
      
      <div class="flex flex-col gap-8 ">
      <h3 class="font-serif text-[2rem] w-full text-center md:p-5 font-bold md:text-[3rem] "> ¡Tu libro se cargó correctamente! 🎉</h3>
     
      <div class="flex flex-col md:flex-row justify-center gap-3">
          <RouterLink  to="/" class= "text-primary border-2 border-[#207581] py-2 px-8 rounded-full hover:bg-[#207581] hover:text-[white]">👁️ Ver libros</RouterLink>
          <Button @click="sliderFocus" class= "text-primary border-2 border-[#207581] py-2 px-8 rounded-full hover:bg-[#207581] hover:text-[white]">➕ Añadir otro libro</Button>
      </div>
    </div>
      <img class="w-full" src="../images/happy-man-with-book-in-his-hand.svg" alt="Hombre feliz con libro en su mano" />
   
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
        errors: [],
        saveok: false,
        selectedBook: null,
        idBook:"",
       
        
  }
},
 

  computed: {
    ...mapState(useApiStore, ['books']),
    ...mapState(useUsersStore, ['users']),
    ...mapState(useUsersBooksStore, ['usersBooksApi', 'usersBooks']),
    
   

  },
  methods: {
    ...mapActions(useApiStore, ['getBooksByKeyWord', 'clearBooks']),
    ...mapActions(useUsersBooksStore, ['saveBook', 'booksForCards']),
    ...mapActions(useUsersStore, ['newUser', 'usersData']),

   

    findBooks(){
        this.getBooksByKeyWord(this.keyWord)
        this.saveok = false
  },
  
  // esta funcion sirve para captar el isbn del libro que quiero guardar en mi base de datos
  saveIsbnBook(book){
    this.selectedBook = book
    this.isbnBook = book.volumeInfo.industryIdentifiers[0].identifier
    this.titleBook = book.volumeInfo.title
    this.showInputs = true
    console.log(this.isbnBook)
    console.log(this.selectedBook.volumeInfo.title)
    // Desplazar la vista hacia el formulario
    this.$nextTick(() => {
        this.$refs.formContainer.scrollIntoView({ behavior: 'smooth' })
      })
  },

  //aquí checkeo que todos los inputs esten completos
  checkForm() {
      this.errors = [];
      if (this.userName && this.email && this.location) {
        return true;
      }
      if (!this.userName) {
        this.errors.push('El nombre es obligatorio.');
      }
      if (!this.email) {
        this.errors.push('El Email es obligatorio.');
      }
      if (!this.location) {
        this.errors.push('La ubicación es obligatoria.');
      }
      return false;
    },

 //Reviso si el usuario existe o no
  registerUser() {
    // Variables para acceder al userStore
    this.usersData();

    //comprobación de usuario existente
    const existingUser = this.users.find(user => user.email === this.email);

    //si existe usuario, recuperar ID para guardar el libro
    if (existingUser){
      this.idUser = existingUser.id
      this.userName = existingUser.name
      //comprobación por consola
      console.log("esta en la base de datos",this.idUser)
    } 
     //si no existe crearlo autoincrementando el Id más alto  
    else {
        //comprobación por consola
        console.log("NO esta en la base de datos")

        //Busqueda de último ID para incrementarlo y asignarlo al nuevo usuario
        let ultimoId = Math.max(...this.users.map(obj => obj.id));
        this.idUser = ultimoId +1;

        //Carga de nuevo usuario en el array
        this.newUser({
            id: this.idUser,
            name: this.userName,
            email: this.email,
            location: this.location
          })
        
        //comprobación por consola
        console.log("usuario actualizado", this.users)
    } 
   
  },
  // Metodo para llamar a todos los anteriores al tocar el boton registrar
  registerBook(){
    //Comprbacion: inicializo el array para ver que estan todos los libros cargados juntos
    this.booksForCards()

    //Revisar formulario
  if(this.checkForm()){
 
      //llamo al metodo para comprobar si el usuario existe o no
      this.registerUser();

      //Busqueda de último ID para incrementarlo y asignarlo al nuevo libro
      let ultimoIdBook = Math.max(...this.usersBooks.map(obj => obj.id));
      this.idBook = ultimoIdBook +1;
      
     
      console.log(this.userName)
      //Ingreso todos los valores en mi BD de books registrados
      this.saveBook({
        id: this.idBook,
        status: true,
        isbn: this.isbnBook,
        title: this.selectedBook.volumeInfo.title,
        author: this.selectedBook.volumeInfo.authors,
        image: this.selectedBook.volumeInfo.imageLinks?.thumbnail,
        description: this.selectedBook.volumeInfo.description,
        year: this.selectedBook.volumeInfo.publishedDate.slice(0, 4),
        publisher: this.selectedBook.volumeInfo.publisher,
        userName: this.userName,
        location: this.location,
      })
    
      //Comprobacion: por consola
      console.log(this.usersBooks)
      
      //mensaje de carga ok
      this.saveok = true
    
      //Vaciar variables
      this.resetFields();

      //Actualizar Home
      this.booksForCards();
    }
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
    this.selectedBook = null
    this.clearBooks();

  },
  sliderFocus(){
      this.$nextTick(() => {
        this.$refs.sliderContainer.scrollIntoView({ behavior: 'smooth' })
      })
    },

}
}
</script>