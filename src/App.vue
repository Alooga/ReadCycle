<template>
  <div>
    <Header />
    <Slider />
    <RouterView />
  </div>
</template>

<script>
import Home from './views/Home.vue'
import Header from './components/Header.vue'
import Slider from './components/Slider.vue'
export default {
  name: "App",
  components: {Header, Slider},
    data() {
      return {

      }
    }
};
</script>

<style>
</style>
