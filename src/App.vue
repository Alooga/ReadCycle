<template>
  <div>





   
    <RouterView />
  </div>
</template>

<script>
import Home from './views/Home.vue'
import { mapActions } from 'pinia'
import { mapState } from 'pinia'
import { useUsersBooksStore } from './store/usersBooksStore.js'
import { useUsersStore } from './store/usersStore.js'
import { useApiStore } from './store/apiBooksStore.js'

export default {
  name: "App",
  data(){
    return {
    keyWord:"",

  }
  },
  methods: {
      ...mapActions(useUsersBooksStore, ['booksForCards']),
      ...mapActions(useUsersStore, ['usersData', 'userDataById']),
      ...mapActions(useApiStore, ['getBooksById', 'getBooksByKeyWord']),
      
      findBooks(){
        this.getBooksByKeyWord(this.keyWord)
        console.log(this.keyWord)
      },
      
    },
    computed: {
      ...mapState(useApiStore, ['books']),
      ...mapState(useUsersBooksStore, ['usersBooks']),
      ...mapState(useUsersStore, ['users']),

      
    },

    mounted(){
      // this.getBooksByKeyWord("1984");
      this.booksForCards();
      this.usersData();

    }
    

};
</script>

<style>
</style>
