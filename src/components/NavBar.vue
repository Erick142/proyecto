<template>
	<nav class="navbar navbar-dark bg-dark sticky-top navbar-expand-md shadow">
		<div class="container-fluid"><router-link class="navbar-brand fw-bolder" :to="'/home'"> Encuentra tu mascota!
			</router-link>
			<div class="offcanvas offcanvas-end text-bg-dark" id="offcanvasDarkNavbar"
				aria-labelledby="offcanvasDarkNavbarLabel" tabindex="-1">
				<div class="offcanvas-header">
					<h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Encuentra tu mascota!</h5>
				</div>
				<div class="offcanvas-body">
					<ul class="navbar-nav my-auto ms-auto">
						<li class="nav-item mx-2">
							<router-link class="nav-link active" aria-current="page" :to="'/home'">Inicio</router-link>
						</li>

						<li class="nav-item dropdown mx-2">
							<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
								aria-expanded="false">
								Adoptar
							</a>
							<ul class="dropdown-menu dropdown-menu-dark">
								<li>
									<router-link class="dropdown-item" :to="'/adopcion/listado'">Ver mascotas en
										adopción</router-link>
								</li>
								<li>
									<router-link class="dropdown-item" :to="'/adopcion/agregar'">Dar en adopción</router-link>
								</li>
							</ul>
						</li>

						<li class="nav-item dropdown mx-2"><a class="nav-link dropdown-toggle" href="#" role="button"
								data-bs-toggle="dropdown" aria-expanded="false" @click="comprobarEstadoSesión"> Mis mascotas </a>
							<ul class="dropdown-menu dropdown-menu-dark">
								<li><router-link class="dropdown-item" :to="'/mascota/listado'">Ver listado mascotas
									</router-link></li>
								<li><router-link class="dropdown-item" :to="'/mascota/crear'" v-if="sesionIniciada===true">Agregar una mascota
									</router-link></li>
								<li><router-link class="dropdown-item" :to="'/mascota/mismascotas'" v-if="sesionIniciada===true">Ver mis mascotas</router-link></li>
								<li><router-link class="dropdown-item disabled text-warning-emphasis" :to="'#'"
										v-if="sesionIniciada===true"> &iexcl;MI MASCOTA ESTA EXTRAVIADA! </router-link></li>
							</ul>
						</li>
						<li class="nav-item dropdown mx-2"><a class="nav-link dropdown-toggle" href="#" role="button"
								data-bs-toggle="dropdown" aria-expanded="false" @click="comprobarEstadoSesión"> Usuario </a>
							<ul class="dropdown-menu dropdown-menu-dark">
								<div v-if="sesionIniciada===true">
									<li><router-link class="dropdown-item" :to="`/usuario/${idUsuario}`">Ver mi perfil</router-link></li>
										
										<botonLogout/>
								</div>

								<div v-else-if="sesionIniciada===false">
									<li><router-link class="dropdown-item" :to="'/login'"> Iniciar
										sesion </router-link></li>
								<li><router-link class="dropdown-item" :to="'/registro'">
										Registrarse </router-link></li>
								</div>
								
								
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
import axios from "axios";
import jwtDecode from "jwt-decode";
import botonLogout from '@/components/logout.vue'

export default {
	name: "NavBar",
	data() {
		return {
			idUsuario:"",
			sesionIniciada: false,
		}
	},
    components:{
        botonLogout,
    },
    methods:{
        async comprobarEstadoSesión() {
		const token = localStorage.getItem("token");
		console.log(token)
		if (token) {
			try {
				const tokenData = jwtDecode(token);
				const horaExpiracion = new Date(tokenData.exp * 1000).getHours();
				const minutosExpiracion = new Date(tokenData.exp * 1000).getMinutes();
				const horaActual = new Date().getHours();
				const minutosActual = new Date().getMinutes();
				
				console.log(horaActual +":"+ minutosActual);
				console.log(horaActual +":"+ minutosExpiracion);

				if (horaActual <= horaExpiracion && minutosActual < minutosExpiracion) {
					this.sesionIniciada = true;
					this.idUsuario = tokenData.id;
					console.log(this.idUsuario);
				}else{
					this.sesionIniciada=false;
				}
			} catch (error) {
				console.log("Error al decodificar el token:", error);
			}
		}
	}
},
	mounted() {
		const accessToken = localStorage.getItem('token');

		if (accessToken) {
			axios.defaults.headers.common['Authorization'] = accessToken;
		}
		console.log(accessToken);
	}
	

}
</script>

<style></style>