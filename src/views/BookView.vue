<template>
<!-- Contenedor general exterior card -->
<div class="sm:flex sm:w-full">
    <!-- Contenedor de la información -->
    <div class="sm:flex sm:flex-col xl:flex-row sm:mx-20 lg:mx-56 md:my-20 items-center justify-center md:border-4 border-[#57aab589] rounded-3xl p-14 lg:px-5 lg:p-20">
        <!-- Contenedor de los elementos de la izquierda (libro + usuario que ofrece y dirección) -->
        <div class="flex flex-col">
            <img :src="book.image" :alt="bookImageAlt" class="w-72 self-center">
            <!-- Contenedor de icono e info de usuario -->
            <div class="flex justify-start items-start text-left md:text-justify py-8 gap-3 md:gap-5">
                <img src="../assets/UserCircle.svg" alt="User icon" class="w-5 md:w-8"/>
                <p class="text-sm"><span class="font-semibold">{{ book.userName }}</span><br/>{{ book.location }}</p> 
            </div>
        </div>
       <!-- Contenedor de información en texto del libro -->
        <div class="flex flex-col text-justify md:w-3/5 p-20">
            <h1 class="font-serif text-2xl font-bold text-left">{{ book.title }}</h1>
            <div v-for="author in book.author" :key="author">
                <p class="text-md leading-[1rem] italic pb-5">{{ author }}</p>
            </div>
            <p>{{ book.year }}</p>
            <p class="pb-5">{{ book.publisher }}</p>
            <p class="text-left md:text-justify">{{ book.description }}</p> 
<!--             <p>{{ bookById.status }}</p>
 -->            
<!-- Botón de reservar -->
            <button v-if="!showInputs" @click="showInputs=true" class= "text-primary border border-[#207581] py-2 px-4 rounded-full hover:bg-[#207581] hover:text-[white] w-[150px] self-center my-20"
            aria-label="View book details">Reservar</button>
        </div>
    </div>
</div>


<div>
<p class="mt-10" v-if="errors.length">
    <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>
</div>

  <div v-if="showInputs && !showMsj" class="m-10">
    <div class="p-5">
        <label for="name">Nombre</label>
        <input v-model="name" type="text" name="name" placeholder="Nombre">
        <label for="email">Email</label>
        <input v-model="email" type="email" name="email" placeholder="Email">
    </div>
    <button @click="reserveBook" class= "text-primary border border-[#207581] py-2 px-4 rounded-full hover:bg-[#207581] hover:text-[white] w-[150px]"
    aria-label="View book details">Reservar</button>

</div>

<div v-if="showMsj">
    <p>Has reservado el libro {{ book.title }}!</p>
    <p>Hemos enviado a tu email los datos de contacto para que realicen el intercambio</p>
    <p>Disfruta tu lectura!</p>
</div>
</template>


<script>
import { mapActions, mapState } from 'pinia'
//De aqui importo los libros
import { useUsersBooksStore  } from '../store/usersBooksStore.js'


export default {
    name: "BookView",
    props: {
        
        id: String,
    },
    data() {
        return {
            book:[],
            showInputs: false,
            showMsj: false,
            errors: [],
            name: "",
            email:"",
           
        };
    },

    computed: {
        ...mapState(useUsersBooksStore,['usersBooks']),
        

    },

    //se invoca automaticamente sin accion del usuario
    mounted() {
        this.fetchBook()
       
    },

    methods: {
        ...mapActions(useUsersBooksStore, ['booksForCards', 'updateBookStatus' ]),
        
        async fetchBook() {
            await this.booksForCards();
            this.book = this.usersBooks.find(book => book.id == this.id);
        },

        reserveBook(){
            if(this.checkForm()) {
            //cambiar estado del libro a no disponible
            this.showMsj = true
            this.updateBookStatus(this.id);
            
            console.log(this.usersBooks)
        }
        },
          //aquí checkeo que todos los inputs esten completos
        checkForm() {
            this.errors = [];
            if (this.name && this.email) {
                return true;
            }
            if (!this.name) {
                this.errors.push('El nombre es obligatorio.');
            }
            if (!this.email) {
                this.errors.push('El Email es obligatorio.');
            }
            return false;
            },
    },
                    

}
</script>


<style></style>