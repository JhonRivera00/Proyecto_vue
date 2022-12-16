import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path:'/', 
    name:'Dashboard',
    component: () => import ('../components/BaseDashboard.vue'),
    children:[
      {
        path:'/',
        name:'Principal',
        component: () => import ('../views/dashboard/InicioViews.vue') 
    
      },
    {
      path:'/conocenos',
      name:'Conocenos',
      component: () => import ('../views/dashboard/ConocenosView.vue') 
    },
    {
      path:'/charla',
      name:'Charla',
      component: () => import ('../views/dashboard/CharlView.vue') 
    },
    {
      path:'/cronograma',
      name:'Cronograma',
      component: () => import ('../views/dashboard/CronogramaViews.vue') 
    },
    {
      path:'/contactanos',
      name:'Contactanos',
      component: () => import ('../views/dashboard/ContactanosView.vue') 
    },
    ]
  },
  {
    path:'/admin',
    name:'Admin',
    component: () => import ('../components/BaseAdm.vue'),
    children:[
{
  path:'/admin',
  name:'Inicio',
  component: ()=> import('../views/dashboard/InicioAdm.vue')
},
{
  path:'/cronograma:adm',
  name:'CronogramaAdm',
  component: ()=> import('../views/dashboard/CronogramaAdm.vue')
},
{
  path:'/charlas:adm',
  name:'CharlasAdm',
  component: ()=> import('../views/dashboard/CharlasAdm.vue')
},
{
  path:'/solicitudes:adm',
  name:'SolicitudesAdm',
  component: ()=> import('../views/dashboard/SolicitudesAdm.vue')
},
{
  path:'/usuarios:adm',
  name:'UsuariosAdm',
  component: ()=> import('../views/dashboard/UsuariosAdm.vue')
},

    ],
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
