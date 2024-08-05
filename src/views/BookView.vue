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
    </div>
</div>

<button class= "text-primary border border-[#207581] py-2 px-4 rounded-full hover:bg-[#207581] hover:text-[white] w-[150px]"
aria-label="View book details">Reservar</button>

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
    
       
        computed: {
            // ...mapState(useApiStore,['books']),
            ...mapState(useUsersBooksStore,['usersBooks']),

        },
       
        methods: {
            ...mapActions(useUsersBooksStore, ['usersBooks']),
        },
        //se invoca automaticamente sin accion del usuario
        mounted() {
           this.bookById = this.usersBooks.find(book=>book.id == this.id)

        },

        data() {
            return {
                bookById:{},
               
            };
        },

    }
</script>


<style></style>