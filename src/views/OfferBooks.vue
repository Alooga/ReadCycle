<template>

<div ref="sliderContainer" class="flex flex-col justify-center items-center bg-[#E3F6F8] py-56 px-5 md:p-[12rem] w-full h-auto gap-5">
    <label class="text-[2.3rem] text-primary leading-[3rem] font-semibold font-serif md:text-5xl md:p-8 lg:text-6xl lg:p-5" for="keyword">¿Qué libro quieres ofrecer?</label>
    <div
        id="buscador_top"
        class="md:flex relative border border-3 border-[#2A9AAA] rounded-full w-[350px] md:w-[500px] ">
      
        <input
         v-model="keyWord"
         type="keyword"
         class="w-full bg-white px-5 py-3 outline-none rounded-full "
          placeholder="Escribe título, autor o género"
        />
        

        <button 
       v-on:click="findBooks"
        class="absolute right-0 top-0 bottom-0 bg-[#2A9AAA] text-white px-4 rounded-r-full"
        >🔎</button>
      </div>
  </div>
  

  <!-- Información del libro seleccionado -->
  <div v-if="selectedBook && !saveok" class="flex flex-col justify-center items-center w-full md:flex-row px-5 p-5 md:p-28 gap-5" ref="formContainer">
      <div class="flex flex-col gap-5 p-8 justify-center self-center  py-5 w-full">
        <h1 class="w-full font-regular text-md">Has seleccionado el libro:</h1>
        <p class="font-serif font-bold text-2xl"> {{ selectedBook.volumeInfo.title }}</p>
        <img
              class="max-w-[200px] h-auto object-contain self-center"
              :src="selectedBook.volumeInfo.imageLinks?.thumbnail"
              :alt="`portada de ${selectedBook.title}`"
            />
        
      </div>
      <div class="text-left flex flex-col gap-5 justify-center items-center w-full p-6">
        <input name="username" type="text" class="border-2 w-full py-3 px-5 rounded-full focus:border-[#007B7F]" placeholder="Escribe tu nombre" v-model="userName">
        <input name="email" type="email" class="border-2 py-3 w-full px-5 rounded-full" placeholder="Email" v-model="email">
        <input name="location" type="text" class="border-2 py-3 px-5 rounded-full w-full" placeholder="Ubicación" v-model="location">
        <button @click="registerBook" class="bg-[#207581] rounded-[2rem] text-white w-full py-3 hover:bg-[#115D67] px-5">Registrar</button>
      <div> <ul class="text-center text-[0.8rem] text-[#FF0000]" v-if="errors.length">
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </div>
      </div>
      
    </div>


   
   

    <div >
        <ApiBookCard class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-10" @bookselected="saveIsbnBook" :books="books"></ApiBookCard>
       
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2  w-full text-center  items-center justify-center md:-mt-28 p-8 md:px-32" v-if="saveok">
      
      <div class="flex flex-col gap-8 ">
      <h3 ref="bookPublish" class="font-serif text-[2rem] w-full text-center md:text-left font-bold md:text-[2.5rem]"> ¡Tu libro se cargó <br>correctamente! 🎉</h3>
     
      <div class="flex flex-col md:flex-row justify-left gap-3">
          <RouterLink  to="/" class= "text-primary border-2 border-[#207581] py-2 px-8 rounded-full hover:bg-[#207581] hover:text-[white]">👁️ Ver libros</RouterLink>
          <button @click="sliderFocus" class= "text-primary border-2 border-[#207581] py-2 px-8 rounded-full hover:bg-[#207581] hover:text-[white]">➕ Añadir otro libro</button>
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
      if(this.keyWord){
        this.getBooksByKeyWord(this.keyWord)
        this.saveok = false
      }
    },
  
  
  // esta funcion sirve para captar el isbn del libro que quiero guardar en mi base de datos
  saveIsbnBook(book){
    this.selectedBook = book
    this.isbnBook = book.volumeInfo.industryIdentifiers[0].identifier
    this.titleBook = book.volumeInfo.title
    this.showInputs = true

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
        this.errors.push('*El nombre es obligatorio.');
      }
      if (!this.email) {
        this.errors.push('*El Email es obligatorio.');
      }
      if (!this.location) {
        this.errors.push('*La ubicación es obligatoria.');
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
    } 
     //si no existe crearlo autoincrementando el Id más alto  
    else {

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
    } 
   
  },
  // Metodo para llamar a todos los anteriores al tocar el boton registrar
  registerBook(){

    //Revisar formulario
  if(this.checkForm()){
 
      //llamo al metodo para comprobar si el usuario existe o no
      this.registerUser();

      //Busqueda de último ID para incrementarlo y asignarlo al nuevo libro
      let ultimoIdBook = Math.max(...this.usersBooks.map(obj => obj.id));
      this.idBook = ultimoIdBook +1;
      
     
      //Ingreso todos los valores en mi BD de books registrados
      this.saveBook({
        id: this.idBook,
        status: true,
        isbn: this.isbnBook,
        title: this.selectedBook?.volumeInfo?.title ?? "Desconocido",
        author: this.selectedBook?.volumeInfo?.authors ?? ["Desconocido"],
        image: this.selectedBook?.volumeInfo?.imageLinks?.thumbnail ?? "Desconocido",
        description: this.selectedBook?.volumeInfo?.description ?? "Desconocido",
        year: this.selectedBook?.volumeInfo?.publishedDate ?? "Desconocido",
        publisher: this.selectedBook?.volumeInfo?.publisher ?? "Desconocido",
        userName: this.userName,
        location: this.location,
      })
    
      //mensaje de carga ok
      this.saveok = true
    
      //Vaciar variables
      this.resetFields();
    }
    this.$nextTick(() => {
        this.$refs.bookPublish.scrollIntoView({ behavior: 'smooth' })
      })
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