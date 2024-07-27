<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="flex">
    <h1>Componente Hola mundo</h1>
    <p>Este es un componente</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
