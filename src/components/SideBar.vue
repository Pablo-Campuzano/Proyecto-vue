<template>
<div class="sidebar">
    <h2>Barra Lateral</h2>
    <ul>
    <li><router-link to="/ContadorNumeros">Contador</router-link></li>
     <li><router-link to="/ListaDeTareas">Lista de tareas</router-link></li>
     </ul>
</div>
</template>
<script setup>

</script>
<style>
.sidebar {
    width: 200px;
    background-color: bisque;
    padding: 20px;
}
</style>