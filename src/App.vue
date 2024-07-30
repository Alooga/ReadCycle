<template>
  <div>

    <Header />

    <RouterView />
  </div>
</template>

<script>
import Home from './views/Home.vue'
import Header from './components/Header.vue'
import { mapActions } from 'pinia'
import { mapState } from 'pinia'
import { useUsersBooksStore } from './store/usersBooksStore.js'
import { useUsersStore } from './store/usersStore.js'
import { useApiStore } from './store/apiBooksStore.js'

export default {
  name: "App",
  components: {Header},
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
      this.booksForCards();
      this.usersData();

    }
};
</script>

<style>
</style>
