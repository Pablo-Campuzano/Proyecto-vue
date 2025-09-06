<template>
  <h1> Hola Mundo </h1>
  <p>{{ contador }}</p>
  <button @click="Incrementar">Incrementar</button>
  <button @click="Disminuir">Disminuir</button>
</template>



<script setup>
import { ref } from 'vue';
const contador = ref(0);
const Incrementar = () => {
  contador.value++;
}
const Disminuir = () => {
  contador.value--;
}
</script>


<style scoped>
p {
  color: blue;
}

h1 {
  color: green;
}
</style>
