<template>
<nav class="navbar navbar-dark bg-dark sticky-top navbar-expand-md shadow">
	<div class="container-fluid"><router-link class="navbar-brand fw-bolder" :to="'/home'"> Encuentra tu mascota! </router-link>
		<div class="offcanvas offcanvas-end text-bg-dark" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel" tabindex="-1">
			<div class="offcanvas-header">
				<h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Encuentra tu mascota!</h5>
			</div>
			<div class="offcanvas-body">
				<ul class="navbar-nav my-auto ms-auto">
					<li class="nav-item mx-2"><router-link class="nav-link active" aria-current="page" :to="'/home'"> Inicio </router-link></li>
					<li class="nav-item mx-2"><a class="nav-link disabled" href="#"> Adoptar </a></li>
					<li class="nav-item dropdown mx-2"><a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Mis mascotas </a>
						<ul class="dropdown-menu dropdown-menu-dark">
							<li><router-link class="dropdown-item" :to="'/mascota/listado'">Ver listado mascotas </router-link></li>
							<li><router-link class="dropdown-item" :to="'/mascota/crear'">Agregar una mascota </router-link></li>
							<li><router-link class="dropdown-item" :to="'/mascota/ver'">Ver mascota</router-link></li>
							<li><router-link class="dropdown-item disabled text-warning-emphasis" :to="'#'"> &iexcl;MI MASCOTA ESTA EXTRAVIADA! </router-link></li>
						</ul>
					</li>
					<li class="nav-item dropdown mx-2"><a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Perfil de usuario </a>
						<ul class="dropdown-menu dropdown-menu-dark">
							<li><router-link class="dropdown-item disabled" :to="'#'"> Ver mi perfil </router-link></li>
							<li><router-link class="dropdown-item" :to="'/login'"> Iniciar sesion </router-link></li>
							<li><router-link class="dropdown-item" :to="'/registro'"> Registrarse </router-link></li>
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
export default {
    name: "NavBar",
	mounted(){
		const accessToken = localStorage.getItem('token');

		if (accessToken) {
		axios.defaults.headers.common['Authorization'] = accessToken;
		}
		console.log(accessToken);
	}

}
</script>

<style>

</style>