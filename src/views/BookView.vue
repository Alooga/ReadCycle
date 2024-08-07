<template>
<!-- Contenedor general exterior card max width -->
<div class="flex flex-col w-full lg:items-center">
    <!-- Contenedor general - contenido -->
    <div class="flex flex-col items-center justify-center pt-5 md:m-10 md:shadow-xl rounded-3xl lg:w-4/5 lg:mt-20">
        <!-- Contiene foto libro y todo el texto - boton a parte -->
        <div class="lg:flex lg:px-10 lg:gap-5">
            <!-- Contenedor de los elementos de la izquierda (libro + usuario que ofrece y dirección) -->
            <div class="flex flex-col lg:w-1/3">
                <img :src="bookById.image" :alt="bookImageAlt" class="w-52 md:w-72 self-center md:self-start md:ms-10 md:mb-5 mt-12 lg:self-center">
            </div>
            <!-- Contenedor de información en texto del libro -->
            <div class="flex flex-col text-justify px-10 lg:w-2/3">
                <h1 class="font-serif text-2xl font-bold text-left mt-10 lg:text-5xl">{{ bookById.title }}</h1>
                <div v-for="author in bookById.author" :key="author">
                    <p class="text-md leading-[1rem] italic pb-5 lg:pt-5">{{ author }}</p>
                </div>
                <p>{{ bookById.year }}</p>
                <p class="pb-5">{{ bookById.publisher }}</p>
                <p class="px-2 text-justify">{{ bookById.description }}</p> 
            <!-- Contenedor de icono e info de usuario -->
                <div class="flex justify-start items-start text-left my-10">
                    <img src="../assets/MapPin.svg" alt="Map pin" class="w-6 md:ms-10"/>
                    <p class="text-sm text-[#57aab5] mx-2 md:mx-2 md:self-center"><span class="font-semibold">{{ bookById.userName }}</span> dispone de este libro para compartir<br class="hidden" /> en <span class="font-semibold">{{ bookById.location }}</span></p> 
                </div>
            </div>
        </div>

        <!-- FORMULARIO DE RESERVAS -->
         <div v-if="showInputs && !showMsj" class="border border-teal-400 rounded-3xl md:mt-10 mx-5 p-5">
             <div>
             <p class="mt-10" v-if="errors.length">
                 <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
                 <ul>
                   <li v-for="error in errors">{{ error }}</li>
                 </ul>
               </p>
             </div>
             
               <div v-if="showInputs && !showMsj">
                 <div class="flex flex-col items-start p-5 gap-3">
                     <label for="name">Nombre</label>
                     <input class="border mb-5" v-model="name" type="text" name="name" placeholder="Nombre">
                     <label for="email">Email</label>
                     <input class="border" v-model="email" type="email" name="email" placeholder="Email">
                 </div>
                 <button @click="reserveBook" class= "text-primary border border-[#207581] py-2 px-4 rounded-full hover:bg-[#207581] hover:text-[white] w-[150px]"
                 aria-label="View book details">Reservar</button>
             
             </div>
             
             <div v-if="showMsj">
                 <p>Has reservado el libro {{ bookById.title }}!</p>
                 <p>Hemos enviado a tu email los datos de contacto para que realicen el intercambio</p>
                 <p>Disfruta tu lectura!</p>
             </div>

         </div>


        <!-- Botón de reservar -->
        <div class="flex pb-10 md:mb-5">
                <button v-if="!showInputs" @click="showInputs=true" class= "text-primary border border-[#207581] py-2 px-4 rounded-full hover:bg-[#207581] hover:text-[white] w-[150px]"
                aria-label="View book details">Reservar</button>
        </div>
    </div>
</div>


</template>


<script>
import { mapActions, mapState } from 'pinia'
//De aqui importo los libros
import { useUsersBooksStore  } from '../store/usersBooksStore.js'


export default {
    name: "BookView",
    props: {
        // book: Object,
        id: String,
    },
    data() {
        return {
            bookById:{},
            showInputs: false,
            showMsj: false,
            errors: [],
            name: "",
            email:"",
           
        };
    },

    computed: {
        // ...mapState(useApiStore,['books']),
        ...mapState(useUsersBooksStore,['usersBooks']),
    },

    //se invoca automaticamente sin accion del usuario
    mounted() {
       this.bookById = this.usersBooks.find(book=>book.id == this.id)
    },

    methods: {
        ...mapActions(useUsersBooksStore, ['usersBooks']),
        reserveBook(){
            if(this.checkForm()) {
            //cambiar estado del libro a no disponible
            this.showMsj = true
            this.bookById.status = false
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