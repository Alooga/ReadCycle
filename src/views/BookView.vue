<template>
    <div class="grid grid-cols-1 md:grid-cols-[20%_80%] gap-12 p-28 items-center justify-center">
        <div class="flex justify-center items-center">
            <img :src="bookById.image" :alt="bookImageAlt" class="w-[400px] ">
        </div>
        <div class="text-left self-center">
                    <h1 class="font-serif text-2xl font-bold text-left mt-10 lg:text-4xl">{{ bookById.title }}</h1>
                    <div v-for="author in bookById.author" :key="author">
                        <p class="text-md leading-[1rem] lg:pt-5"><span class="font-bold">Autor: </span>{{ author }}</p>
                    </div>
                    <p><span class="font-bold">Fecha de publicación: </span>{{ bookById.year }}</p>
                    <p class="pb-5"><span class="font-bold">Editorial: </span>{{ bookById.publisher }}</p>
                    <p class="text-justify"><span class="font-bold">Decripción: </span>{{ bookById.description }}</p> 
                    
                    <div class="flex justify-between items-center py-10 ">
                        <div>
                            
                 <div class="flex items-center gap-2">
                <img
                src="../assets/UserCircle.svg"
                alt="User icon"
                class="w-4 h-4"
                />
                <p>{{ bookById.userName }}</p>
            </div>
            <div class="flex items-center gap-1">
                <img
                    src="../assets/MapPin.svg"
                    alt="Location icon"
                    class="w-4 h-4"
                />
                <p>{{ bookById.location }}</p>
            </div>
                    </div>
                    <button v-if="!showInputs" @click="showInputs=true" class="bg-[#207581] rounded-[2rem] text-white py-3 hover:bg-[#115D67] px-5">Lo quiero</button> 
                    <div v-if="showInputs && !showMsj">
                 <div class="text-left flex gap-5 justify-center items-center w-full">
                     <input class="border-2 py-3 px-5 rounded-full focus:border-[#007B7F]" v-model="name" type="text" name="name" placeholder="Nombre">
                     <input class="border-2 py-3 px-5 rounded-full focus:border-[#007B7F]" v-model="email" type="email" name="email" placeholder="Email">
                 <div v-if="showInputs && !showMsj">
                    <div>
                        <p class="mt-10" v-if="errors.length">
                            <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
                            <ul>
                                <li v-for="error in errors">{{ error }}</li>
                            </ul>
                        </p>
                    </div>
                     <button @click="reserveBook" class="bg-[#207581] rounded-[2rem] text-white w-full py-3 hover:bg-[#115D67] px-5"
                     aria-label="View book details">Reservar</button>
                     
                </div>
                 
             
        </div>
         </div>
                </div>
                
               
                
       
                </div> 

                
               
            </div>
            
   
    <div>
        
          <div>
          
    
         <div class="grid grid-cols-1 text-center  items-center justify-center p-10 gap-5" v-if="showMsj">
                 <h5 class="font-serif font-semibold text-[2rem]">Has reservado el libro {{ bookById.title }}!</h5>
                 <p>Hemos enviado a tu email los datos de contacto para que realicen el intercambio</p>
                 <p class="font-bold">Disfruta tu lectura!</p>
                 <RouterLink  to="/" class= "text-primary border-2 mx-auto  border-[#207581] py-2 px-8 rounded-full hover:bg-[#207581] hover:text-[white]">👁️ Ver más libros</RouterLink>
             </div>

        <!-- Botón de reservar -->
        
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