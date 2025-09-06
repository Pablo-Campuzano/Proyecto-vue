<template>
   <div>
      <h2>Formulario de Registro</h2>
      <Form :validation-schema="schema" @submit="onsubmit">
         <div class="form">
            <label for="nombre">Nombre:</label>
            <Field type="text" name="nombre" id="nombre" placeholder="Ingrese su Nombre " />
            <ErrorMessage name="nombre"></ErrorMessage>
         </div>
         <div class="form">
            <label for="email">Email:</label>
            <Field type="email" name="email" id="email" placeholder="ingrese su Email" />
            <ErrorMessage name="email"></ErrorMessage>
         </div>
         <div class="form">
            <button type="submit">Registrar</button>
         </div>
      </Form>
   </div>
</template>
<script setup>
import { Form, Field , ErrorMessage } from 'vee-validate';
import { schema } from '../Schemas/ValidationSchema';

const onsubmit = () => {
   console.log('se ha enviado el formulario')
}
</script>
<style scoped>
.form {
   margin-bottom: 10px;
}
</style>