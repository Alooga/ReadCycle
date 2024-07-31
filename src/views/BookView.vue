<template>
<div>
    <h1>{{ books }}</h1>
    <p>descripción</p>
    <p>autor</p>
</div>

</template>



<script>
import { mapActions, mapState } from 'pinia'
//De aqui importo el usuario
import { useUsersBooksStore  } from '../store/usersBooksStore.js'
//De aqui importo la info del libro
import { useApiStore } from '../store/apiBooksStore.js'

    export default {
        name: "BookView",
        //Mostrar (SEGUNDO los datos se colocan en el lugar que indico aqui)
        computed: {
            ...mapState(useApiStore,['books'])
        },
        //Manipular (PRIMERO doy aqui los datos)
        methods: {
            ...mapActions(useUsersBooksStore, ['usersBooks']),
            ...mapActions(useApiStore, ['getBooksByIsbn'])
        },
        //se invoca automaticamente sin accion del usuario
        mounted() {
            this.getBooksByIsbn(this.$route.params.id)
        },

        data() {
            return
        },

    }
</script>


<style></style>