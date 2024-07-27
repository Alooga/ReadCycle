<!-- cambiar a la carpeta components cuando este creada -->

<template>
    <form @submit.prevent="createUser" action="">
        <label for="nombre">Nombre:</label>
        <input v-model="name" type="text" name="nombre">
        <label for="email">Email:</label>
        <input v-model="email" type="email" name="email">
        <label for="pass">Contraseña:</label>
        <input v-model="pass" type="password" name="pass">
        <button >Crear</button>
    </form>
</template>


<script>
import usersDB from '../db/usersDB.js'

export default{
    name: "CreateUser",

    data() {
        return {
            users:"",
            name: "",
            email:"",
            pass:"",
            newUser: [],

        }
    },

    created () {
    this.users = usersDB
    },

    methods: {
        createUser() {

            this.newUser = {id:4 ,name: this.name, email: this.email, pass: this.pass}
            // esto lo tengo que pasar con el emit creo a la bd
            // usersDB.push(this.newUser)

            console.log(this.newUser)

        }

    }
}

</script>


<style>
</style>