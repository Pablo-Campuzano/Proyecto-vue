import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*{
      path: '/',
      name: 'home',
      component: HomeView,
    },*/
    {
      path: '/ContadorNumeros',
      name: 'ContadorNumeros',
      
      component: () => import('../modules/Contador/components/ContadorNumeros.vue'),
    },
    {
      path: '/ListaDeTareas',
      name: 'ListaDeTareas',
      
      component: () => import('../modules/Listadetareas/components/ListaDeTareas.vue'),
    },
    {
      path: '/Registrar',
      name: 'Registrar',
      
      component: () => import('../modules/Registro/Views/RegistroView.vue'),
    },
  ], 
})

export default router
