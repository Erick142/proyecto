import UserLogin from "./vistas/UserLogin.vue";
import UserRegistro from "./vistas/UserRegistro.vue";
import LandingPage from "./vistas/LandingPage.vue";
import CrearMascota from "./vistas/CrearMascota.vue";
import DetallesMascota from "./vistas/DetallesMascota.vue";
import ListadoMascota from "./vistas/ListadoMascotas.vue";
import ListadoAdopcion from "./vistas/ListadoAdopcion.vue";
import EditarMascota from "./vistas/EditarMascota.vue";
import EliminarMascota from "./vistas/EliminarMascota.vue";
import logout from "./components/logout.vue";
import CrearAnuncio from "./vistas/CrearAnuncio.vue";
import { createRouter, createWebHistory } from "vue-router";
import PerfilUsuario from "./vistas/PerfilUsuario.vue";

const routes=[
    {path:"/login", component:UserLogin},
    {path:"/registro", component:UserRegistro},
    {path:"/home", component:LandingPage},
    {path:"/mascota/crear",component:CrearMascota},
    {path:"/mascota/ver/:id",component:DetallesMascota},
    {path:"/mascota/listado", component:ListadoMascota},
    {path:"/mascota/editar/:id", component:EditarMascota},
    {path:"/mascota/eliminar/:id", component:EliminarMascota},
    {path:"/logout", component:logout},
    {path:"/adopcion/agregar", component:CrearAnuncio},
    {path:"/adopcion/listado", component:ListadoAdopcion},
    {path: '/usuario/:idUsuario',name: 'PerfilUsuario',component: PerfilUsuario}

    
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router;