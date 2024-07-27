<template>
  <div>
    <Header />
    <RouterView />
  </div>
</template>

<script>
import Home from './views/Home.vue'
import Header from './components/Header.vue'
export default {
  name: "App",
  components: {Header},
    data() {
      return {

      }
    }
};
</script>

<style>
</style>
