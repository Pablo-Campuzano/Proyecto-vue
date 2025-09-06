<template>
<div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>Nombre: {{ nombre }}</h3>
    <h3>Email: {{ email }}</h3>
    <ul>
    <li><router-link to="/ContadorNumeros">Contador</router-link></li>
     <li><router-link to="/ListaDeTareas">Lista de tareas</router-link></li>
     <li><router-link to="/Registrar">Registro</router-link></li>
     </ul>
</div>
</template>
<script setup>
import { useRegistrarStore } from '@/modules/Registro/Stores/registrarStore';
import {ref, watch} from 'vue';

const registrarStore = useRegistrarStore();
    const nombre = ref(registrarStore.nombre.value)
    const email = ref(registrarStore.email.value)
    watch(() => registrarStore.nombre, (newValue) => {
        nombre.value = newValue
    })
     watch(() => registrarStore.email, (newValue) => {
        email.value = newValue
    })
</script>
<style>
.sidebar {
    width: 200px;
    background-color: bisque;
    padding: 20px;
}
</style>