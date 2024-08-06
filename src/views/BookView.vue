<template>

<div class="flex justify-around m-20">
        <img :src="bookById.image" :alt="bookImageAlt" class="w-60 self-center">
        <p>{{ bookById.userName }} - {{ bookById.location }}</p>
    
    <div class="flex flex-col self-center p-10 w-3/5">
        <h1>{{ bookById.title }}</h1>
        <div v-for="author in bookById.author" :key="author">
            <p class="text-[0.8rem] leading-[1rem]">{{ author }}</p>
        </div>
        <p>{{ bookById.year }} - {{ bookById.publisher }}</p>
        <p>{{ bookById.description }}</p> 
        <p>{{ bookById.status }}</p>
    </div>
</div>

<button v-if="!showInputs" @click="showInputs=true" class= "text-primary border border-[#207581] py-2 px-4 rounded-full hover:bg-[#207581] hover:text-[white] w-[150px]"
aria-label="View book details">Reservar</button>

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
    <p>Has reservado el libro {{ bookById.title }}!</p>
    <p>Hemos enviado a tu email los datos de contacto para que realicen el intercambio</p>
    <p>Disfruta tu lectura!</p>
</div>
</template>


<script>
import { mapActions, mapState } from 'pinia'
//De aqui importo el usuario
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