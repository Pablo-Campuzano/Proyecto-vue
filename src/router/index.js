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
      
      component: () => import('../components/ContadorNumeros.vue'),
    },
    {
      path: '/ListaDeTareas',
      name: 'ListaDeTareas',
      
      component: () => import('../components/ListaDeTareas.vue'),
    },
  ], 
})

export default router
