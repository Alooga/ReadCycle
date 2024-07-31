<template>

<div class="flex justify-around">
        <img :src="bookImage" :alt="bookImageAlt" class="w-60 self-center">
    <div class="flex flex-col self-center p-10 w-3/5">
        <h1>{{ bookTitle }}</h1>
        <p>{{ bookAuthor }} - {{ bookYear }} - {{ bookPublisher }}</p>
        <p>{{ bookDescription }}</p> 
    </div>
</div>

</template>


<script>
import { ref } from 'vue'

import { mapActions, mapState } from 'pinia'
//De aqui importo el usuario
import { useUsersBooksStore  } from '../store/usersBooksStore.js'
//De aqui importo la info del libro
import { useApiStore } from '../store/apiBooksStore.js'

    export default {
        name: "BookView",
        //Mostrar (SEGUNDO los datos se colocan en el lugar que indico aqui)
        computed: {
            ...mapState(useApiStore,['books']),

            bookImage() {
                return this.books[0]?.volumeInfo.imageLinks.thumbnail
            },

            bookImageAlt() {
                return `Portada del libro ${this.bookTitle}`
            },

            bookTitle() {
                //console.log(this.books[0]?.volumeInfo?.title)
                return this.books[0]?.volumeInfo?.title
            },

            bookAuthor() {
                return this.books[0]?.volumeInfo.authors.join(",")
            },

            bookPublisher() {
                return this.books[0]?.volumeInfo.publisher
            },

            bookYear() {
                console.log(this.books[0]?.volumeInfo.publishedDate.slice(0, -3))
                return this.books[0]?.volumeInfo.publishedDate.slice(0, 4)
            },

            bookDescription() {
                return this.books[0]?.volumeInfo.description
            }

        },
        //Manipular (PRIMERO doy aqui los datos)
        methods: {
            ...mapActions(useUsersBooksStore, ['usersBooks']),
            ...mapActions(useApiStore, ['getBooksByIsbn'])
        },
        //se invoca automaticamente sin accion del usuario
        mounted() {
            this.getBooksByIsbn(this.$route.params.isbn)
        },

        data() {
            return {};
        },

    }
</script>


<style></style>