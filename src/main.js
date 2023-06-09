import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import UserLogin from "./components/UserLogin.vue";
import UserRegistro from "./components/UserRegistro.vue";
import LandingPage from "./components/LandingPage.vue";
import CrearMascota from "./components/CrearMascota.vue";
import DetallesMascota from "./components/DetallesMascota.vue";
import ListadoMascota from "./components/ListadoMascotas.vue"

const routes=[
    {path:"/login", component:UserLogin},
    {path:"/registro", component:UserRegistro},
    {path:"/home", component:LandingPage},
    {path:"/mascota/crear",component:CrearMascota},
    {path:"/mascota/ver",component:DetallesMascota},
    {path:"/mascota/listado", component:ListadoMascota}
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
createApp(App).use(router).mount('#app')
