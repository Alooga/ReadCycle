<template>

    <div class="grid grid-cols-1 md:grid-cols-[20%_80%] gap-12 p-8 md:p-28 items-center justify-center">
        <div class="flex justify-center items-center">
            <img :src="book.image" :alt="`portada de ${book.title}`" class="w-[200px] md:w-[400px] ">
        </div>
        <div class="text-left self-center px-8 md:px-20">
                    <h1 class="font-serif text-2xl font-bold text-left mt-10 lg:text-4xl">{{ book.title }}</h1>
                    
                    <div v-for="author in book.author" :key="author">
                        <p class="text-md leading-[1rem] lg:pt-5"><span class="font-bold">Autor: </span>{{ author }}</p>
                    </div>
                    
                    <p><span class="font-bold">Fecha de publicación: </span>{{ book.year }}</p>
                    <p class="pb-5"><span class="font-bold">Editorial: </span>{{ book.publisher }}</p>
                    <p class="text-[1rem]">
        <span class="font-bold">Descripción: </span>
        <span v-if="isDescriptionTruncated">
          {{ truncatedDescription }}
          <button @click="toggleDescription" class="text-blue-500">Leer más</button>
        </span>
        <span v-else>
          {{ book.description }}
          <button @click="toggleDescription" class="text-blue-500">Leer menos</button>
        </span>
      </p>
                    <div class="flex flex-col gap-5 md:flex-row justify-between md:items-center py-10 ">
                        <div>
                            
                 <div class="flex items-center gap-2">
                <img
                src="../assets/UserCircle.svg"
                alt="User icon"
                class="w-4 h-4"
                />
                <p>{{ book.userName }}</p>
            </div>
            <div class="flex items-center gap-1">
                <img
                    src="../assets/MapPin.svg"
                    alt="Location icon"
                    class="w-4 h-4"
                />
                <p>{{ book.location }}</p>
            </div>
                </div>
                    <button v-if="!showInputs" @click="showInputs=true" class="bg-[#207581] rounded-[2rem] text-white py-3 hover:bg-[#115D67] px-5">Lo quiero</button> 
                    <div v-if="showInputs && !showMsj">
                        <div>
                 <div class="flex flex-col text-left  gap-5 md:flex-row md:justify-center md:items-center w-full">
                     <input class="border-2 py-3 px-5 rounded-full focus:border-[#007B7F]" v-model="name" type="text" name="name" placeholder="Nombre">
                     <input class="border-2 py-3 px-5 rounded-full focus:border-[#007B7F]" v-model="email" type="email" name="email" placeholder="Email">
                     <button @click="reserveBook" class="bg-[#207581] rounded-[2rem] text-white w-full py-3 hover:bg-[#115D67] px-5"
                    aria-label="View book details">Reservar</button>
                </div>
                <div v-if="showInputs && !showMsj">
                        <ul class="my-2 text-[0.8rem] md:text-right" v-if="errors.length">
                                <li class="text-[#FF0000]" v-for="error in errors">{{ error }}</li>
                            </ul>
                
             </div>
                    </div>
                    
                </div>
            </div>
            </div> 
        </div>
    <div>
 <div>
          
    
         <div ref="messageContainer" class="grid grid-cols-1 p-8 text-left md:text-center  md:items-center md:justify-center pb-40 gap-5" v-if="showMsj">
                 <h5 class="font-serif font-semibold text-[2rem]">Has reservado el libro {{ book.title }}!</h5>
                 <p>Hemos enviado a tu email los datos de contacto para que realicen el intercambio</p>
                 <p class="font-bold">Disfruta tu lectura!</p>
                 <RouterLink  to="/" class= "text-primary border-2 text-center md:mx-auto  border-[#207581] py-2 px-8 rounded-full hover:bg-[#207581] hover:text-[white]">👁️ Ver más libros</RouterLink>
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
        
        id: String,
    },
    data() {
        return {
           
            showInputs: false,
            showMsj: false,
            errors: [],
            name: "",
            email:"",
            descriptionLimit: 400,
            isDescriptionTruncated: true,
           
        };
    },

    computed: {
        ...mapState(useUsersBooksStore,['usersBooks']),
        book() {
        return this.usersBooks.find(book => book.id == this.id);
        },

        truncatedDescription() {
      if (this.book && this.book.description.length > this.descriptionLimit) {
        return this.book.description.substring(0, this.descriptionLimit) + '...';
      }
      return this.book ? this.book.description : '';
    }

    },

    methods: {
        ...mapActions(useUsersBooksStore, ['booksForCards', 'updateBookStatus' ]),
        

        reserveBook(){
            if(this.checkForm()) {
            //cambiar estado del libro a no disponible
            this.showMsj = true
            this.updateBookStatus(this.id);
            console.log(this.usersBooks)

            this.$nextTick(() => {
            this.$refs.messageContainer.scrollIntoView({ behavior: 'smooth' })
            })
        }
        },
          //aquí checkeo que todos los inputs esten completos
        checkForm() {
            this.errors = [];
            if (this.name && this.email) {
                return true;
            }
            if (!this.name) {
                this.errors.push('*El nombre es obligatorio.');
            }
            if (!this.email) {
                this.errors.push('*El Email es obligatorio.');
            }
            return false;
            },
             toggleDescription() {
      this.isDescriptionTruncated = !this.isDescriptionTruncated;
    },
    },
                    

}
</script>


<style></style>