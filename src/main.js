import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import UserLogin from "./vistas/UserLogin.vue";
import UserRegistro from "./vistas/UserRegistro.vue";
import LandingPage from "./vistas/LandingPage.vue";
import CrearMascota from "./vistas/CrearMascota.vue";
import DetallesMascota from "./vistas/DetallesMascota.vue";
import ListadoMascota from "./vistas/ListadoMascotas.vue";
import EditarMascota from "./vistas/EditarMascota.vue";
import EliminarMascota from "./vistas/EliminarMascota.vue";

const routes=[
    {path:"/login", component:UserLogin},
    {path:"/registro", component:UserRegistro},
    {path:"/home", component:LandingPage},
    {path:"/mascota/crear",component:CrearMascota},
    {path:"/mascota/ver/:id",component:DetallesMascota},
    {path:"/mascota/listado", component:ListadoMascota},
    {path:"/mascota/editar/:id", component:EditarMascota},
    {path:"/mascota/eliminar/:id", component:EliminarMascota}
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
createApp(App).use(router).mount('#app')
